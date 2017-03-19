import { callMethod } from '../__utils__/method';

it('flickr.auth.oauth.checkToken', () => {
  return callMethod('flickr.auth.oauth.checkToken')
    .then(result => {
      expect(result.stat).toEqual('ok');
      expect(result).toMatchSnapshot();
    });
});
