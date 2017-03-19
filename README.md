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
- [flickr.activity.userPhotos](https://www.flickr.com/services/api/flickr.activity.userPhotos.html).
- [flickr.auth.oauth.checkToken](https://www.flickr.com/services/api/flickr.auth.oauth.checkToken.html).
- [flickr.auth.checkToken](https://www.flickr.com/services/api/flickr.auth.checkToken.html).
- [flickr.auth.getFullToken](https://www.flickr.com/services/api/flickr.auth.getFullToken.html).
- [flickr.cameras.getBrandModels](https://www.flickr.com/services/api/flickr.cameras.getBrandModels.html).
- [flickr.activity.userComments](https://www.flickr.com/services/api/flickr.activity.userComments.html).
- [flickr.blogs.getServices](https://www.flickr.com/services/api/flickr.blogs.getServices.html).
- [flickr.auth.getToken](https://www.flickr.com/services/api/flickr.auth.getToken.html).
- [flickr.blogs.getList](https://www.flickr.com/services/api/flickr.blogs.getList.html).
- [flickr.collections.getInfo](https://www.flickr.com/services/api/flickr.collections.getInfo.html).
- [flickr.cameras.getBrands](https://www.flickr.com/services/api/flickr.cameras.getBrands.html).
- [flickr.collections.getTree](https://www.flickr.com/services/api/flickr.collections.getTree.html).
- [flickr.auth.oauth.getAccessToken](https://www.flickr.com/services/api/flickr.auth.oauth.getAccessToken.html).
- [flickr.commons.getInstitutions](https://www.flickr.com/services/api/flickr.commons.getInstitutions.html).
- [flickr.contacts.getList](https://www.flickr.com/services/api/flickr.contacts.getList.html).
- [flickr.contacts.getListRecentlyUploaded](https://www.flickr.com/services/api/flickr.contacts.getListRecentlyUploaded.html).
- [flickr.auth.getFrob](https://www.flickr.com/services/api/flickr.auth.getFrob.html).
- [flickr.contacts.getPublicList](https://www.flickr.com/services/api/flickr.contacts.getPublicList.html).
- [flickr.contacts.getTaggingSuggestions](https://www.flickr.com/services/api/flickr.contacts.getTaggingSuggestions.html).
- [flickr.favorites.getList](https://www.flickr.com/services/api/flickr.favorites.getList.html).
- [flickr.favorites.getContext](https://www.flickr.com/services/api/flickr.favorites.getContext.html).
- [flickr.favorites.getPublicList](https://www.flickr.com/services/api/flickr.favorites.getPublicList.html).
- [flickr.galleries.getInfo](https://www.flickr.com/services/api/flickr.galleries.getInfo.html).
- [flickr.galleries.getPhotos](https://www.flickr.com/services/api/flickr.galleries.getPhotos.html).
- [flickr.galleries.getListForPhoto](https://www.flickr.com/services/api/flickr.galleries.getListForPhoto.html).
- [flickr.groups.browse](https://www.flickr.com/services/api/flickr.groups.browse.html).
- [flickr.groups.discuss.replies.getInfo](https://www.flickr.com/services/api/flickr.groups.discuss.replies.getInfo.html).
- [flickr.galleries.getList](https://www.flickr.com/services/api/flickr.galleries.getList.html).
- [flickr.groups.discuss.replies.getList](https://www.flickr.com/services/api/flickr.groups.discuss.replies.getList.html).
- [flickr.groups.discuss.topics.getInfo](https://www.flickr.com/services/api/flickr.groups.discuss.topics.getInfo.html).
- [flickr.groups.discuss.topics.getList](https://www.flickr.com/services/api/flickr.groups.discuss.topics.getList.html).
- [flickr.groups.getInfo](https://www.flickr.com/services/api/flickr.groups.getInfo.html).
- [flickr.groups.pools.getContext](https://www.flickr.com/services/api/flickr.groups.pools.getContext.html).
- [flickr.groups.members.getList](https://www.flickr.com/services/api/flickr.groups.members.getList.html).
- [flickr.groups.pools.getPhotos](https://www.flickr.com/services/api/flickr.groups.pools.getPhotos.html).
- [flickr.groups.search](https://www.flickr.com/services/api/flickr.groups.search.html).
- [flickr.interestingness.getList](https://www.flickr.com/services/api/flickr.interestingness.getList.html).
- [flickr.groups.pools.getGroups](https://www.flickr.com/services/api/flickr.groups.pools.getGroups.html).
- [flickr.machinetags.getPredicates](https://www.flickr.com/services/api/flickr.machinetags.getPredicates.html).
- [flickr.machinetags.getNamespaces](https://www.flickr.com/services/api/flickr.machinetags.getNamespaces.html).
- [flickr.machinetags.getRecentValues](https://www.flickr.com/services/api/flickr.machinetags.getRecentValues.html).
- [flickr.machinetags.getPairs](https://www.flickr.com/services/api/flickr.machinetags.getPairs.html).
- [flickr.machinetags.getValues](https://www.flickr.com/services/api/flickr.machinetags.getValues.html).
- [flickr.panda.getList](https://www.flickr.com/services/api/flickr.panda.getList.html).
- [flickr.panda.getPhotos](https://www.flickr.com/services/api/flickr.panda.getPhotos.html).
- [flickr.people.findByEmail](https://www.flickr.com/services/api/flickr.people.findByEmail.html).
- [flickr.people.getLimits](https://www.flickr.com/services/api/flickr.people.getLimits.html).
- [flickr.people.findByUsername](https://www.flickr.com/services/api/flickr.people.findByUsername.html).
- [flickr.people.getInfo](https://www.flickr.com/services/api/flickr.people.getInfo.html).
- [flickr.people.getGroups](https://www.flickr.com/services/api/flickr.people.getGroups.html).
- [flickr.people.getPhotos](https://www.flickr.com/services/api/flickr.people.getPhotos.html).
- [flickr.people.getPhotosOf](https://www.flickr.com/services/api/flickr.people.getPhotosOf.html).
- [flickr.people.getPublicGroups](https://www.flickr.com/services/api/flickr.people.getPublicGroups.html).
- [flickr.people.getPublicPhotos](https://www.flickr.com/services/api/flickr.people.getPublicPhotos.html).
- [flickr.photos.comments.getList](https://www.flickr.com/services/api/flickr.photos.comments.getList.html).
- [flickr.photos.comments.getRecentForContacts](https://www.flickr.com/services/api/flickr.photos.comments.getRecentForContacts.html).
- [flickr.people.getUploadStatus](https://www.flickr.com/services/api/flickr.people.getUploadStatus.html).
- [flickr.photos.geo.getLocation](https://www.flickr.com/services/api/flickr.photos.geo.getLocation.html).
- [flickr.photos.geo.getPerms](https://www.flickr.com/services/api/flickr.photos.geo.getPerms.html).
- [flickr.photos.geo.photosForLocation](https://www.flickr.com/services/api/flickr.photos.geo.photosForLocation.html).
- [flickr.photos.getAllContexts](https://www.flickr.com/services/api/flickr.photos.getAllContexts.html).
- [flickr.photos.getContactsPhotos](https://www.flickr.com/services/api/flickr.photos.getContactsPhotos.html).
- [flickr.photos.getContext](https://www.flickr.com/services/api/flickr.photos.getContext.html).
- [flickr.photos.getExif](https://www.flickr.com/services/api/flickr.photos.getExif.html).
- [flickr.photos.getCounts](https://www.flickr.com/services/api/flickr.photos.getCounts.html).
- [flickr.photos.getInfo](https://www.flickr.com/services/api/flickr.photos.getInfo.html).
- [flickr.photos.getNotInSet](https://www.flickr.com/services/api/flickr.photos.getNotInSet.html).
- [flickr.photos.getPerms](https://www.flickr.com/services/api/flickr.photos.getPerms.html).
- [flickr.photos.getFavorites](https://www.flickr.com/services/api/flickr.photos.getFavorites.html).
- [flickr.photos.getRecent](https://www.flickr.com/services/api/flickr.photos.getRecent.html).
- [flickr.photos.getPopular](https://www.flickr.com/services/api/flickr.photos.getPopular.html).
- [flickr.photos.getWithGeoData](https://www.flickr.com/services/api/flickr.photos.getWithGeoData.html).
- [flickr.photos.getContactsPublicPhotos](https://www.flickr.com/services/api/flickr.photos.getContactsPublicPhotos.html).
- [flickr.photos.getUntagged](https://www.flickr.com/services/api/flickr.photos.getUntagged.html).
- [flickr.photos.getWithoutGeoData](https://www.flickr.com/services/api/flickr.photos.getWithoutGeoData.html).
- [flickr.photos.getSizes](https://www.flickr.com/services/api/flickr.photos.getSizes.html).
- [flickr.photos.licenses.getInfo](https://www.flickr.com/services/api/flickr.photos.licenses.getInfo.html).
- [flickr.photos.people.getList](https://www.flickr.com/services/api/flickr.photos.people.getList.html).
- [flickr.photos.recentlyUpdated](https://www.flickr.com/services/api/flickr.photos.recentlyUpdated.html).
- [flickr.photos.suggestions.getList](https://www.flickr.com/services/api/flickr.photos.suggestions.getList.html).
- [flickr.photos.search](https://www.flickr.com/services/api/flickr.photos.search.html).
- [flickr.photos.upload.checkTickets](https://www.flickr.com/services/api/flickr.photos.upload.checkTickets.html).
- [flickr.photosets.comments.getList](https://www.flickr.com/services/api/flickr.photosets.comments.getList.html).
- [flickr.photosets.getContext](https://www.flickr.com/services/api/flickr.photosets.getContext.html).
- [flickr.photosets.getList](https://www.flickr.com/services/api/flickr.photosets.getList.html).
- [flickr.photosets.getPhotos](https://www.flickr.com/services/api/flickr.photosets.getPhotos.html).
- [flickr.photosets.getInfo](https://www.flickr.com/services/api/flickr.photosets.getInfo.html).
- [flickr.places.find](https://www.flickr.com/services/api/flickr.places.find.html).
- [flickr.places.findByLatLon](https://www.flickr.com/services/api/flickr.places.findByLatLon.html).
- [flickr.places.getChildrenWithPhotosPublic](https://www.flickr.com/services/api/flickr.places.getChildrenWithPhotosPublic.html).
- [flickr.places.getInfo](https://www.flickr.com/services/api/flickr.places.getInfo.html).
- [flickr.places.getInfoByUrl](https://www.flickr.com/services/api/flickr.places.getInfoByUrl.html).
- [flickr.places.getShapeHistory](https://www.flickr.com/services/api/flickr.places.getShapeHistory.html).
- [flickr.places.getTopPlacesList](https://www.flickr.com/services/api/flickr.places.getTopPlacesList.html).
- [flickr.places.placesForBoundingBox](https://www.flickr.com/services/api/flickr.places.placesForBoundingBox.html).
- [flickr.places.getPlaceTypes](https://www.flickr.com/services/api/flickr.places.getPlaceTypes.html).
- [flickr.places.placesForTags](https://www.flickr.com/services/api/flickr.places.placesForTags.html).
- [flickr.places.placesForUser](https://www.flickr.com/services/api/flickr.places.placesForUser.html).
- [flickr.places.resolvePlaceId](https://www.flickr.com/services/api/flickr.places.resolvePlaceId.html).
- [flickr.prefs.getContentType](https://www.flickr.com/services/api/flickr.prefs.getContentType.html).
- [flickr.places.tagsForPlace](https://www.flickr.com/services/api/flickr.places.tagsForPlace.html).
- [flickr.places.resolvePlaceURL](https://www.flickr.com/services/api/flickr.places.resolvePlaceURL.html).
- [flickr.prefs.getGeoPerms](https://www.flickr.com/services/api/flickr.prefs.getGeoPerms.html).
- [flickr.prefs.getHidden](https://www.flickr.com/services/api/flickr.prefs.getHidden.html).
- [flickr.places.placesForContacts](https://www.flickr.com/services/api/flickr.places.placesForContacts.html).
- [flickr.prefs.getPrivacy](https://www.flickr.com/services/api/flickr.prefs.getPrivacy.html).
- [flickr.profile.getProfile](https://www.flickr.com/services/api/flickr.profile.getProfile.html).
- [flickr.prefs.getSafetyLevel](https://www.flickr.com/services/api/flickr.prefs.getSafetyLevel.html).
- [flickr.push.getSubscriptions](https://www.flickr.com/services/api/flickr.push.getSubscriptions.html).
- [flickr.push.subscribe](https://www.flickr.com/services/api/flickr.push.subscribe.html).
- [flickr.push.getTopics](https://www.flickr.com/services/api/flickr.push.getTopics.html).
- [flickr.stats.getCollectionReferrers](https://www.flickr.com/services/api/flickr.stats.getCollectionReferrers.html).
- [flickr.stats.getCollectionDomains](https://www.flickr.com/services/api/flickr.stats.getCollectionDomains.html).
- [flickr.stats.getCollectionStats](https://www.flickr.com/services/api/flickr.stats.getCollectionStats.html).
- [flickr.stats.getCSVFiles](https://www.flickr.com/services/api/flickr.stats.getCSVFiles.html).
- [flickr.stats.getPhotoReferrers](https://www.flickr.com/services/api/flickr.stats.getPhotoReferrers.html).
- [flickr.stats.getPhotoDomains](https://www.flickr.com/services/api/flickr.stats.getPhotoDomains.html).
- [flickr.push.unsubscribe](https://www.flickr.com/services/api/flickr.push.unsubscribe.html).
- [flickr.stats.getPhotosetReferrers](https://www.flickr.com/services/api/flickr.stats.getPhotosetReferrers.html).
- [flickr.reflection.getMethods](https://www.flickr.com/services/api/flickr.reflection.getMethods.html).
- [flickr.stats.getPhotosetDomains](https://www.flickr.com/services/api/flickr.stats.getPhotosetDomains.html).
- [flickr.stats.getPhotosetStats](https://www.flickr.com/services/api/flickr.stats.getPhotosetStats.html).
- [flickr.stats.getPhotoStats](https://www.flickr.com/services/api/flickr.stats.getPhotoStats.html).
- [flickr.stats.getPhotostreamDomains](https://www.flickr.com/services/api/flickr.stats.getPhotostreamDomains.html).
- [flickr.reflection.getMethodInfo](https://www.flickr.com/services/api/flickr.reflection.getMethodInfo.html).
- [flickr.stats.getPhotostreamReferrers](https://www.flickr.com/services/api/flickr.stats.getPhotostreamReferrers.html).
- [flickr.stats.getPopularPhotos](https://www.flickr.com/services/api/flickr.stats.getPopularPhotos.html).
- [flickr.tags.getClusterPhotos](https://www.flickr.com/services/api/flickr.tags.getClusterPhotos.html).
- [flickr.tags.getClusters](https://www.flickr.com/services/api/flickr.tags.getClusters.html).
- [flickr.stats.getTotalViews](https://www.flickr.com/services/api/flickr.stats.getTotalViews.html).
- [flickr.tags.getListPhoto](https://www.flickr.com/services/api/flickr.tags.getListPhoto.html).
- [flickr.tags.getHotList](https://www.flickr.com/services/api/flickr.tags.getHotList.html).
- [flickr.stats.getPhotostreamStats](https://www.flickr.com/services/api/flickr.stats.getPhotostreamStats.html).
- [flickr.tags.getListUser](https://www.flickr.com/services/api/flickr.tags.getListUser.html).
- [flickr.tags.getListUserPopular](https://www.flickr.com/services/api/flickr.tags.getListUserPopular.html).
- [flickr.tags.getMostFrequentlyUsed](https://www.flickr.com/services/api/flickr.tags.getMostFrequentlyUsed.html).
- [flickr.test.echo](https://www.flickr.com/services/api/flickr.test.echo.html).
- [flickr.tags.getRelated](https://www.flickr.com/services/api/flickr.tags.getRelated.html).
- [flickr.test.null](https://www.flickr.com/services/api/flickr.test.null.html).
- [flickr.tags.getListUserRaw](https://www.flickr.com/services/api/flickr.tags.getListUserRaw.html).
- [flickr.test.login](https://www.flickr.com/services/api/flickr.test.login.html).
- [flickr.urls.lookupGallery](https://www.flickr.com/services/api/flickr.urls.lookupGallery.html).
- [flickr.urls.getUserPhotos](https://www.flickr.com/services/api/flickr.urls.getUserPhotos.html).
- [flickr.urls.getGroup](https://www.flickr.com/services/api/flickr.urls.getGroup.html).
- [flickr.urls.getUserProfile](https://www.flickr.com/services/api/flickr.urls.getUserProfile.html).
- [flickr.urls.lookupGroup](https://www.flickr.com/services/api/flickr.urls.lookupGroup.html).
- [flickr.urls.lookupUser](https://www.flickr.com/services/api/flickr.urls.lookupUser.html).


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
