var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Jweecy' });
});



router.get('/userlist', function(req, res) {
        
    var db = req.db;
    var collection = db.get('users');
    collection.find({}, {}, function(e, doc){
        res.render('userlist', {
            "userlist" : doc,
            title: 'User List'
                       
        });
    });
});



router.get('/register', function(req, res){
    res.render('register', { title: 'Register' })   

});

router.get('/art', function(req, res){
    res.render('art', { title: 'Art' })   

});
router.get('/food', function(req, res){
    res.render('food', { title: 'Food' })   

});

router.get('/woodwork', function(req, res){
    res.render('woodwork', { title: 'Woodwork' })   

});

router.get('/tech', function(req, res){
    res.render('tech', { title: 'tech' })   

});

router.get('/music', function(req, res){
    res.render('music', { title: 'Music' })   

});
router.post('/adduser', function(req, res) {
    var fn = req.body.firstname;
    var ln = req.body.lastname;
    var em = req.body.email;
    var al = req.body.alias;
    
    var db = req.db;
    var collection = db.get('users');
    
    collection.insert({ 
        "firstname": fn, 
        "lastname": ln, 
        "alias": al, 
        "email": em 
    }, function(e, doc){                     
        if(e){
            res.send("There is something wrong.");
        }
        else{
            res.location('/userlist');
            res.redirect('/userlist');
        }
    });    
});


module.exports = router;
