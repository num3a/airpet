Router.route('/rooms',function(){
        this.render('rooms');
    },
    {name: 'rooms'}
);

/* New rooms route */
Router.route('/rooms/new',function() {
        this.render('rooms.new');
    },
    {name:'roomsNew'}
);