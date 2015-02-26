/**
 * Created by emmanuelernest on 23/02/15.
 */
Meteor.startup(function () {
    // code to run on server at startup
    function initializeApplication() {
        Kadira.connect('hzKYxH6FyL4g9SM5v', '531de270-f860-4f5f-aeb2-15e785cb0731');
    }
    
    function initializeFakeRooms() {

        for(var i = 0; i < 50; i++){
            Rooms.insert({title: faker.name.findName(), creationDate: new Date()});
        }
        /* Rooms.insert({title: 'Hello world', creationDate: new Date()});
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
         Rooms.insert({title: 'Hello world', creationDate: new Date()});*/
    }

    initializeApplication();

    if(Rooms.find().count() === 0){
        initializeFakeRooms();
    }
});
