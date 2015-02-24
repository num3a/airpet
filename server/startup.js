/**
 * Created by emmanuelernest on 23/02/15.
 */
Meteor.startup(function () {
    // code to run on server at startup

    function initializeAds() {
        Ads.insert({title: 'Hello world', creationDate: new Date()});
        Ads.insert({title: 'Hello world', creationDate: new Date()});
        Ads.insert({title: 'Hello world', creationDate: new Date()});
        Ads.insert({title: 'Hello world', creationDate: new Date()});
        Ads.insert({title: 'Hello world', creationDate: new Date()});
        Ads.insert({title: 'Hello world', creationDate: new Date()});
        Ads.insert({title: 'Hello world', creationDate: new Date()});
        Ads.insert({title: 'Hello world', creationDate: new Date()});
        Ads.insert({title: 'Hello world', creationDate: new Date()});
        Ads.insert({title: 'Hello world', creationDate: new Date()});
        Ads.insert({title: 'Hello world', creationDate: new Date()});
        Ads.insert({title: 'Hello world', creationDate: new Date()});
        Ads.insert({title: 'Hello world', creationDate: new Date()});
    }

    if(Ads.find().count() === 0){
        initializeAds();
    }
});