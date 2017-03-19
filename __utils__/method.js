import request from './request';
import { APPLICATION_PORT } from '../src/constants';

export const callMethod = (methodName) => {
  return request('http://127.0.0.1:' +  APPLICATION_PORT + '/' + methodName).then(resultAsJson => JSON.parse(resultAsJson));
};
