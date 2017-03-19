# flickr-backend-example
A proxy in NodeJS/Express that make calls to the Flickr API and avoids the complexity of the authentication process.


## Who is this project for?
If you want to call the Flickr API and forget the authentication process, that project will be useful. With this proxy you can call to:
- Flickr API methods that don't need authentication.
- Flickr API methods that need authentication with read privileges.

**Note**: Methods that need authentication with write privileges are not implemented.


## How to install/configure the project?

### Installation
Just:
```
$ git clone https://github.com/aaronplanell/flickr-backend-example.git
$ cd flickr-backend-example
$ npm install
```
Obviously, the last line can be replaced by:
```
$ yarn install
```

### Configuration
Just open the file `src/constants.js` and replace the consumer key/secret:
```
export const FLICKR_CONSUMER_KEY = 'b7718b2dc66dee760a0f66c56f507434';
export const FLICKR_CONSUMER_SECRET = 'topSecret';
```

You can obtain the consumer key/secret in the web of [Flickr](https://www.flickr.com/services/api/misc.api_keys.html).

**NOTE**: Never publish your consumer key/secret in Github or other site. I published mine because is a fake account.


## How to run the project?
First of all run:
```
$ npm start
```
Or:
```
$ yarn start
```

You will see a message like this:
```
yarn start v0.21.3
$ babel-node src/index.js --presets es2015,stage-2
Express server listening on port 3000
First of all, you must validate the application opening: http://127.0.0.1:3000/
```
Open your browser and access to the URL http://127.0.0.1:3000/. The main page will be redirected you to the [Flickr API page of authorization](https://www.flickr.com/services/oauth/authorize). Accept making click into the blue button. After that, you will be redirected to the previous local page and you will see this message:
```
Well... You're connected. You can work with the API :D
```

Your Flickr API Proxy will be running.


## How it works?
When the proxy is ready you will see at the console the list of available methods:
```
Checking available methods:
- Adding method flickr.auth.getToken (no authentication needed).
- Adding method flickr.activity.userComments (authentication needed with read permissions).
- Adding method flickr.auth.getFrob (no authentication needed).
- Adding method flickr.auth.oauth.getAccessToken (no authentication needed).
- Adding method flickr.activity.userPhotos (authentication needed with read permissions).
- Etc.
```

If, for instance, you want to search the photos of the user `148575064@N08` just call:
```
http://127.0.0.1:3000/flickr.photos.search?user_id=148575064@N08
```

The parameters of each method are the same that in the original Flickr API but with an exception: **you don't need to pass the parameter `api_key`** because you are autenthicated.


## Which methods of Flickr API are available?
This proxy implements those methods that:
- Don't need authentication.
- Need authentication with read privileges.

Methods with write privileges are not allowed.

This is the full list:
| Method                                      | Type                                        | # Arguments |
|---------------------------------------------|---------------------------------------------|-------------|
| flickr.activity.userPhotos                  | Authentication needed with read permissions | 4           |
| flickr.auth.oauth.checkToken                | No authentication needed                    | 2           |
| flickr.auth.checkToken                      | No authentication needed                    | 2           |
| flickr.auth.getFullToken                    | No authentication needed                    | 2           |
| flickr.cameras.getBrandModels               | No authentication needed                    | 2           |
| flickr.activity.userComments                | Authentication needed with read permissions | 3           |
| flickr.blogs.getServices                    | No authentication needed                    | 1           |
| flickr.auth.getToken                        | No authentication needed                    | 2           |
| flickr.blogs.getList                        | Authentication needed with read permissions | 2           |
| flickr.collections.getInfo                  | Authentication needed with read permissions | 2           |
| flickr.cameras.getBrands                    | No authentication needed                    | 1           |
| flickr.collections.getTree                  | No authentication needed                    | 3           |
| flickr.auth.oauth.getAccessToken            | No authentication needed                    | 1           |
| flickr.commons.getInstitutions              | No authentication needed                    | 1           |
| flickr.contacts.getList                     | Authentication needed with read permissions | 5           |
| flickr.contacts.getListRecentlyUploaded     | Authentication needed with read permissions | 3           |
| flickr.auth.getFrob                         | No authentication needed                    | 1           |
| flickr.contacts.getPublicList               | No authentication needed                    | 4           |
| flickr.contacts.getTaggingSuggestions       | Authentication needed with read permissions | 3           |
| flickr.favorites.getList                    | No authentication needed                    | 7           |
| flickr.favorites.getContext                 | No authentication needed                    | 3           |
| flickr.favorites.getPublicList              | No authentication needed                    | 7           |
| flickr.galleries.getInfo                    | No authentication needed                    | 2           |
| flickr.galleries.getPhotos                  | No authentication needed                    | 5           |
| flickr.galleries.getListForPhoto            | No authentication needed                    | 4           |
| flickr.groups.browse                        | Authentication needed with read permissions | 2           |
| flickr.groups.discuss.replies.getInfo       | No authentication needed                    | 4           |
| flickr.galleries.getList                    | No authentication needed                    | 5           |
| flickr.groups.discuss.replies.getList       | No authentication needed                    | 5           |
| flickr.groups.discuss.topics.getInfo        | No authentication needed                    | 3           |
| flickr.groups.discuss.topics.getList        | No authentication needed                    | 4           |
| flickr.groups.getInfo                       | No authentication needed                    | 4           |
| flickr.groups.pools.getContext              | No authentication needed                    | 3           |
| flickr.groups.members.getList               | Authentication needed with read permissions | 5           |
| flickr.groups.pools.getPhotos               | No authentication needed                    | 7           |
| flickr.groups.search                        | No authentication needed                    | 4           |
| flickr.interestingness.getList              | No authentication needed                    | 5           |
| flickr.groups.pools.getGroups               | Authentication needed with read permissions | 3           |
| flickr.machinetags.getPredicates            | No authentication needed                    | 4           |
| flickr.machinetags.getNamespaces            | No authentication needed                    | 4           |
| flickr.machinetags.getRecentValues          | No authentication needed                    | 4           |
| flickr.machinetags.getPairs                 | No authentication needed                    | 5           |
| flickr.machinetags.getValues                | No authentication needed                    | 5           |
| flickr.panda.getList                        | No authentication needed                    | 1           |
| flickr.panda.getPhotos                      | No authentication needed                    | 5           |
| flickr.people.findByEmail                   | No authentication needed                    | 2           |
| flickr.people.getLimits                     | Authentication needed with read permissions | 1           |
| flickr.people.findByUsername                | No authentication needed                    | 2           |
| flickr.people.getInfo                       | No authentication needed                    | 2           |
| flickr.people.getGroups                     | Authentication needed with read permissions | 3           |
| flickr.people.getPhotos                     | No authentication needed                    | 12          |
| flickr.people.getPhotosOf                   | No authentication needed                    | 6           |
| flickr.people.getPublicGroups               | No authentication needed                    | 3           |
| flickr.people.getPublicPhotos               | No authentication needed                    | 6           |
| flickr.photos.comments.getList              | No authentication needed                    | 4           |
| flickr.photos.comments.getRecentForContacts | Authentication needed with read permissions | 6           |
| flickr.people.getUploadStatus               | Authentication needed with read permissions | 1           |
| flickr.photos.geo.getLocation               | No authentication needed                    | 3           |
| flickr.photos.geo.getPerms                  | Authentication needed with read permissions | 2           |
| flickr.photos.geo.photosForLocation         | Authentication needed with read permissions | 7           |
| flickr.photos.getAllContexts                | No authentication needed                    | 2           |
| flickr.photos.getContactsPhotos             | Authentication needed with read permissions | 6           |
| flickr.photos.getContext                    | No authentication needed                    | 2           |
| flickr.photos.getExif                       | No authentication needed                    | 3           |
| flickr.photos.getCounts                     | Authentication needed with read permissions | 3           |
| flickr.photos.getInfo                       | No authentication needed                    | 3           |
| flickr.photos.getNotInSet                   | Authentication needed with read permissions | 10          |
| flickr.photos.getPerms                      | Authentication needed with read permissions | 2           |
| flickr.photos.getFavorites                  | No authentication needed                    | 4           |
| flickr.photos.getRecent                     | No authentication needed                    | 4           |
| flickr.photos.getPopular                    | No authentication needed                    | 6           |
| flickr.photos.getWithGeoData                | Authentication needed with read permissions | 11          |
| flickr.photos.getContactsPublicPhotos       | No authentication needed                    | 7           |
| flickr.photos.getUntagged                   | Authentication needed with read permissions | 10          |
| flickr.photos.getWithoutGeoData             | Authentication needed with read permissions | 11          |
| flickr.photos.getSizes                      | No authentication needed                    | 2           |
| flickr.photos.licenses.getInfo              | No authentication needed                    | 1           |
| flickr.photos.people.getList                | No authentication needed                    | 2           |
| flickr.photos.recentlyUpdated               | Authentication needed with read permissions | 5           |
| flickr.photos.suggestions.getList           | Authentication needed with read permissions | 3           |
| flickr.photos.search                        | No authentication needed                    | 35          |
| flickr.photos.upload.checkTickets           | No authentication needed                    | 2           |
| flickr.photosets.comments.getList           | No authentication needed                    | 2           |
| flickr.photosets.getContext                 | No authentication needed                    | 3           |
| flickr.photosets.getList                    | No authentication needed                    | 5           |
| flickr.photosets.getPhotos                  | No authentication needed                    | 8           |
| flickr.photosets.getInfo                    | No authentication needed                    | 3           |
| flickr.places.find                          | No authentication needed                    | 2           |
| flickr.places.findByLatLon                  | No authentication needed                    | 4           |
| flickr.places.getChildrenWithPhotosPublic   | No authentication needed                    | 3           |
| flickr.places.getInfo                       | No authentication needed                    | 3           |
| flickr.places.getInfoByUrl                  | No authentication needed                    | 2           |
| flickr.places.getShapeHistory               | No authentication needed                    | 3           |
| flickr.places.getTopPlacesList              | No authentication needed                    | 5           |
| flickr.places.placesForBoundingBox          | No authentication needed                    | 4           |
| flickr.places.getPlaceTypes                 | No authentication needed                    | 1           |
| flickr.places.placesForTags                 | No authentication needed                    | 13          |
| flickr.places.placesForUser                 | Authentication needed with read permissions | 10          |
| flickr.places.resolvePlaceId                | No authentication needed                    | 2           |
| flickr.prefs.getContentType                 | Authentication needed with read permissions | 1           |
| flickr.places.tagsForPlace                  | No authentication needed                    | 7           |
| flickr.places.resolvePlaceURL               | No authentication needed                    | 2           |
| flickr.prefs.getGeoPerms                    | Authentication needed with read permissions | 1           |
| flickr.prefs.getHidden                      | Authentication needed with read permissions | 1           |
| flickr.places.placesForContacts             | Authentication needed with read permissions | 11          |
| flickr.prefs.getPrivacy                     | Authentication needed with read permissions | 1           |
| flickr.profile.getProfile                   | No authentication needed                    | 2           |
| flickr.prefs.getSafetyLevel                 | Authentication needed with read permissions | 1           |
| flickr.push.getSubscriptions                | Authentication needed with read permissions | 1           |
| flickr.push.subscribe                       | Authentication needed with read permissions | 15          |
| flickr.push.getTopics                       | No authentication needed                    | 1           |
| flickr.stats.getCollectionReferrers         | Authentication needed with read permissions | 6           |
| flickr.stats.getCollectionDomains           | Authentication needed with read permissions | 5           |
| flickr.stats.getCollectionStats             | Authentication needed with read permissions | 3           |
| flickr.stats.getCSVFiles                    | Authentication needed with read permissions | 1           |
| flickr.stats.getPhotoReferrers              | Authentication needed with read permissions | 6           |
| flickr.stats.getPhotoDomains                | Authentication needed with read permissions | 5           |
| flickr.push.unsubscribe                     | Authentication needed with read permissions | 5           |
| flickr.stats.getPhotosetReferrers           | Authentication needed with read permissions | 6           |
| flickr.reflection.getMethods                | No authentication needed                    | 1           |
| flickr.stats.getPhotosetDomains             | Authentication needed with read permissions | 5           |
| flickr.stats.getPhotosetStats               | Authentication needed with read permissions | 3           |
| flickr.stats.getPhotoStats                  | Authentication needed with read permissions | 3           |
| flickr.stats.getPhotostreamDomains          | Authentication needed with read permissions | 4           |
| flickr.reflection.getMethodInfo             | No authentication needed                    | 2           |
| flickr.stats.getPhotostreamReferrers        | Authentication needed with read permissions | 5           |
| flickr.stats.getPopularPhotos               | Authentication needed with read permissions | 5           |
| flickr.tags.getClusterPhotos                | No authentication needed                    | 3           |
| flickr.tags.getClusters                     | No authentication needed                    | 2           |
| flickr.stats.getTotalViews                  | Authentication needed with read permissions | 2           |
| flickr.tags.getListPhoto                    | No authentication needed                    | 2           |
| flickr.tags.getHotList                      | No authentication needed                    | 3           |
| flickr.stats.getPhotostreamStats            | Authentication needed with read permissions | 2           |
| flickr.tags.getListUser                     | No authentication needed                    | 2           |
| flickr.tags.getListUserPopular              | No authentication needed                    | 3           |
| flickr.tags.getMostFrequentlyUsed           | Authentication needed with read permissions | 1           |
| flickr.test.echo                            | No authentication needed                    | 1           |
| flickr.tags.getRelated                      | No authentication needed                    | 2           |
| flickr.test.null                            | Authentication needed with read permissions | 1           |
| flickr.tags.getListUserRaw                  | No authentication needed                    | 2           |
| flickr.test.login                           | Authentication needed with read permissions | 1           |
| flickr.urls.lookupGallery                   | No authentication needed                    | 2           |
| flickr.urls.getUserPhotos                   | No authentication needed                    | 2           |
| flickr.urls.getGroup                        | No authentication needed                    | 2           |
| flickr.urls.getUserProfile                  | No authentication needed                    | 2           |
| flickr.urls.lookupGroup                     | No authentication needed                    | 2           |
| flickr.urls.lookupUser                      | No authentication needed                    | 2           |


## How to test the project?
Once you have your **server running and authorized**, because it uses integration tests, open another terminal and just run:
```
npm run test
```
Or:
```
yarn run test
```

You will find all the tests in the __tests__ folder. For every method its test checks:
- The status returned is OK.
- Its snapshot.

It uses [Jest technology](https://facebook.github.io/jest/) :)

## Contributing
This project uses grant-express & purest. Thanks to @simov for both projects.


## License

GPL (GNU GENERAL PUBLIC LICENSE)
