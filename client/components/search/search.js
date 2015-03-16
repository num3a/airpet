Meteor.subscribe('rooms-by-query');

var SearchRoomsUtils = {
    searchByText : function(){
        return Rooms.find({title: inputValue},{sort : {date: 1}});
    }
};

Template.search.helpers({
    searchResults : function(){
        var results = Rooms.find({},{sort : {date: 1}, limit : 10});
        return results;
    }
});

Template.search.events({
    'click #searchSubmit': function(event){
        event.preventDefault();
        //alert(document.getElementById('inputMessage').value);
        var inputValue = $('#searchInput').val();

        function searchByText(text) {
        }

        if(inputValue != null && inputValue.length > 0){

            var results = SearchRoomsUtils.searchByText(inputValue);
        }      
    },
    'change input[type=range]': function(event){
        $('#priceText').text(event.target.value);
    }
});