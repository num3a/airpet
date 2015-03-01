/**
 * Created by emmanuelernest on 01/03/15.
 */

Template.rooms.helpers({
    latestRooms : function(){
        var results = Rooms.find({},{sort : {date: -1}, limit : 20});
        return results;
    }
});