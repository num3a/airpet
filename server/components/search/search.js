Meteor.publish('lastFiftyRooms', function() {
    return  Rooms.find({},{sort : {date: 1}, limit : 50});
});