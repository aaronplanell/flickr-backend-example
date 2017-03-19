const path = require('path');
import { callMethod } from '../__utils__/method';

const nameOfFile = path.basename(__filename);
const methodName = nameOfFile.substring(0, nameOfFile.length - 3);

it(methodName, () => {
  return callMethod(methodName)
    .then(result => {
      expect(result.stat).toEqual('ok');
      expect(result).toMatchSnapshot();
    });
});
