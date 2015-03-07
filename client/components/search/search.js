/**
 * Created by emmanuelernest on 23/02/15.
 */
Meteor.subscribe('lastFiftyRooms');

Template.search.helpers({
    searchResults : function(){
        var results = Rooms.find({},{sort : {date: 1}, limit : 10});
        return results;
    }
});

Template.search.events({
    'click #search-button': function(e){
        e.preventDefault();
        //alert(document.getElementById('inputMessage').value);
        var inputValue = $('#inputMessage').val();
         
        if(inputValue != null && inputValue.length > 0){
            Messages.insert({ text: inputValue, date: new Date()});
            console.log(inputValue + ' added to messages');
            $('#inputMessage').val('');
        }      
    }
});