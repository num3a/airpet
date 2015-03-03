/**
 * Created by emmanuelernest on 02/03/15.
 */
//rooms.news.submit

Avatars = new FS.Collection("avatars", {
    stores: [new FS.Store.FileSystem("avatars", {path: "~/uploads"})]
});

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
Template.roomsNew.events({
    'change .room-input-file': function(event, template){



        FS.Utility.eachFile(event, function(file) {
          //  var newFile = new FS.File(file);

            Avatars.insert(file, function (err, fileObj) {
                // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
                if(err != null){
                    console.log('An error occured while uploading file', err);
                }
                else {
                    console.log('file object :', fileObj);
                }
            });
        });
      /*  var files = event.target.files;
        for (var i = 0, ln = files.length; i < ln; i++) {
            Images.insert(files[i], function (err, fileObj) {
                // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
                if(err != null){
                    console.log('An error occured while uploading file', err);
                }
                else {
                    console.log('file object :', fileObj);
                }

            });
        }
        */
}});
