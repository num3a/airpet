/**
 * Created by emmanuelernest on 23/02/15.
 */
Meteor.startup(function () {
    // code to run on server at startup

    function initializeRooms() {
        Rooms.insert({title: 'Hello world', creationDate: new Date()});
        Rooms.insert({title: 'Hello world', creationDate: new Date()});
        Rooms.insert({title: 'Hello world', creationDate: new Date()});
        Rooms.insert({title: 'Hello world', creationDate: new Date()});
        Rooms.insert({title: 'Hello world', creationDate: new Date()});
        Rooms.insert({title: 'Hello world', creationDate: new Date()});
        Rooms.insert({title: 'Hello world', creationDate: new Date()});
        Rooms.insert({title: 'Hello world', creationDate: new Date()});
        Rooms.insert({title: 'Hello world', creationDate: new Date()});
        Rooms.insert({title: 'Hello world', creationDate: new Date()});
        Rooms.insert({title: 'Hello world', creationDate: new Date()});
        Rooms.insert({title: 'Hello world', creationDate: new Date()});
        Rooms.insert({title: 'Hello world', creationDate: new Date()});
    }

    if(Rooms.find().count() === 0){
        initializeRooms();
    }
});