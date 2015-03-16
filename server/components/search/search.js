Meteor.publish('rooms-by-query', function(query) {
    var queryObject = {};
    if(query != null && query.length > 0){
        queryObject = { title: query};
    }
    return  Rooms.find(queryObject,{sort : {date: 1}, limit : 50});
});

Meteor.publish('rooms-last-50', function() {
    return  Rooms.find({},{sort : {date: 1}, limit : 50});
});
