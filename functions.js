import axios from 'axios';

//Constants
import { FLICK_API_URL, DEFAULT_PARAMS } from './constants';

export const generateApiFlickCall = (method, params) => {
  return (req, res) => {
    axios.get(FLICK_API_URL, {
      params: {
        ...DEFAULT_PARAMS,
        method,
        ...params
      }
    })
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.send(error);
    });
  }
};
