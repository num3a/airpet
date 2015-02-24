/**
 * Created by emmanuelernest on 23/02/15.
 */

Template.search.helpers({
    searchResults : function(){
        var results = Ads.find({},{sort : {date: -1}, limit : 30});
        return results;
    }
});

Template.search.events({
    'click #submitButton': function(e){
        e.preventDefault();
        //alert(document.getElementById('inputMessage').value);
        var inputValue = $('#inputMessage').val();

        if(inputValue != null && inputValue.length > 0){
            Messages.insert({ text: inputValue, date: new Date()});
            console.log(inputValue + ' added to messages');
            $('#inputMessage').val('');
        }

        // document.getElementById('inputMessage').value = '';
    }
});