const mongoose = require ('mongoose');

 
 const password = 'Tokhthrk1uqGeXJ5';
 const dbName = 'RentingCarz';
  const uri = `mongodb+srv://RentingCarz:${password}@cluster0.hdol0ix.mongodb.net/${dbName}?retryWrites=true&w=majority`;


module.exports = ()=> mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
