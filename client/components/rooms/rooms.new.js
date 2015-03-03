/**
 * Created by emmanuelernest on 02/03/15.
 */
//rooms.news.submit



Template.roomsNew.events({
    'submit form': function (event, template) {
        event.preventDefault();

        var title = event.target.title.value;
        var description = event.target.description.value;

        Rooms.insert({title: title, description: description});

        var helperValue = this;
        alert(inputValue, helperValue);
    }
});
