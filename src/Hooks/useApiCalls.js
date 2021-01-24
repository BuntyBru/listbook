import { useState, useEffect } from "react";
import { my_app } from "../utils/constants";

export const useGet = (url) => {
  const [state, setState] = useState({
    isLoading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    /* fetch logic here */
    return my_app
      .get(url)
      .then((res) => {
        setState({ data: res, isLoading: false, error: null });
      })
      .catch((error) => {
        setState({ data: null, isLoading: false, error: error });
        throw error;
      });
  }, [url]);

  // return the `state` so it can be accessed by the component that uses this hook.

  return state;
};
