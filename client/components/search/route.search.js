/**
 * Created by emmanuelernest on 23/02/15.
 */
Router.route('/s',function(){
   // var params = this.params; // { _id: "5" }
   // var query = params._query; // "5"
    this.render('search');
},{
    name: 'search'
});

Router.route('/s/:_query',function(){
    var params = this.params; // { _id: "5" }var query = params._query; // "5"
    this.render('search.query');
},{
    name: 'search.query'
});