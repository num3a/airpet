/**
 * Created by emmanuelernest on 02/03/15.
 */
//rooms.news.submit



Template.roomsNew.events({
    'click #gogo': function () {
        alert('ahh click');
        // increment the counter when button is clicked
        Session.set('counter', Session.get('counter') + 1);
    }
});
