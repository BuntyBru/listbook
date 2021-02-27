import { my_app, URL } from "./constant";

const getUser = () => {
  let currUser = JSON.parse(localStorage.getItem("my_app_user"));

  if (!currUser) {
    // if no user in localStorage then the user must enter their credentials to proceed
    return Promise.resolve(null);
  }

  my_app.defaults.headers.common["Authorization"] = "Bearer " + currUser.access;
  my_app.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        // 401 is Unauthorized error
        // which means that this request failed
        // what we need to do is send a refresh request then resend the same request
        // that failed but with the new access point.
        // We can do this automatically using axios interceptors
        console.log("Error===============>", error.response.status);
        return refreshToken()
          .then((response) => {
            //console.log("HEYYYY", currUser);
            //currUser.refresh = response.data.refresh_token;
            currUser.access = response.data.access;
            currUser.lastRefresh = new Date().getTime();
            localStorage.setItem("my_app_user", JSON.stringify(currUser));

            // Set default headers to have authorization the access token as authorization for future requests
            my_app.defaults.headers.common["Authorization"] =
              "Bearer " + response.data.access;

            // Get the original that failed due to 401 and resend it
            // with the new access token
            const config = error.config;
            config.headers.Authorization = "Bearer " + response.data.access;

            // Resending original request
            return new Promise((resolve, reject) => {
              my_app
                .request(config)
                .then((response) => {
                  resolve(response);
                })
                .catch((error) => {
                  //console.log("erorororor");
                  reject(error);
                });
            });
          })
          .catch((error) => {
            // if refresh token failed logout
            Promise.reject(error);
            //console.log("LOGOUT INSIDE");
            logout();
          });
      }
      // console.log("LOGOUT OUTSIDE");
      //logout();
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  );

  //console.log(currUser);

  return currUser;
};

const login = (username, password) => {
  let data = { email: username, password: password };

  return new Promise((resolve, reject) => {
    my_app
      .post(`${URL}/api/v1/user-management/users/login/`, data)
      .then((response) => {
        // console.log("From Login", response);
        localStorage.setItem("my_app_user", JSON.stringify(response.data.data));
        getUser();
        resolve(response);
      })
      .catch((error) => {
        //console.log(error.response.data.message);
        reject(error);
        //  return error;
      });
  });
};

const refreshToken = () => {
  let currUser = JSON.parse(localStorage.getItem("my_app_user"));
  return new Promise((resolve, reject) => {
    my_app
      .post(`${URL}/api/v1/user-management/users/token/refresh/`, {
        refresh: currUser.refresh,
      })
      .then(async (response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const logout = () => {
  localStorage.removeItem("my_app_user");
  //console.log("LOGOUT BEING RUNNNN");
  return Promise.resolve();
};

export default class Auth {
  static login(username, password) {
    return login(username, password);
  }
  static logout() {
    return logout();
  }
  static getUser() {
    return getUser();
  }
  static refreshToken() {
    return refreshToken();
  }
}
