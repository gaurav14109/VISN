const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost:27017/Vision',{useNewUrlParser: true,useUnifiedTopology: true}); //Vision is Db Name

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  
  // we're connected!
  console.log("We Are Connected");
});


module.exports = db;