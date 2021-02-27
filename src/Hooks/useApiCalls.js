import { useState, useEffect } from "react";
import { my_app } from "../utils/constant";

export const useGet = (url, dependency) => {
  const [state, setState] = useState({
    isLoading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    /* fetch logic here */
    /*setState({ data: null, isLoading: true, error: null });
    return my_app
      .get(url)
      .then((res) => {
        setState({ data: res, isLoading: false, error: null });
      })
      .catch((error) => {
        setState({ data: null, isLoading: false, error: error });
        throw error;
      });*/

    function hey() {
      setState({ data: null, isLoading: true, error: null });
      return my_app
        .get(url)
        .then((res) => {
          setState({ data: res, isLoading: false, error: null });
        })
        .catch((error) => {
          setState({ data: null, isLoading: false, error: error });
          throw error;
        });
    }
    hey();

    return () => {
      console.log("cleanup function");
      setState({ data: null, isLoading: true, error: null });
    };
  }, [url, dependency]);

  // return the `state` so it can be accessed by the component that uses this hook.

  return state;
};
