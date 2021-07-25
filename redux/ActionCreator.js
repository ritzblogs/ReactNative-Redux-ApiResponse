import axios from 'axios';
import {fetchSuccess, fetchError } from "./Action";

const actionCreator = url => {

  return dispatch => {
    return new Promise(() => {

      console.log("url", url)
      axios.get(url)
        .then((resp) => {
         if(resp!=null && resp.data!=null)
          dispatch(fetchSuccess(resp.data));
        })
        .catch((err) => {
          dispatch(fetchError(err));

        })
    })
  };
};

export default actionCreator;