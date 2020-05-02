const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useUnifiedTopology: true });


const fruitSchema=new mongoose.Schema({
    name : String,
    rating : Number,
    review : String
});

const Fruit=mongoose.model("Fruit",fruitSchema);
const fruit=new Fruit({
    name:"Apple",
    rating:6,
    review:"its tasty"
});
//fruit.save();
const personSchema=new mongoose.Schema({
    name : String,
    age : Number,
    
});
const Person=mongoose.model("Person",fruitSchema);
const person=new person({
    name:"JOhn",
    age:26    
});
person.save();
  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(fruits)
      callback(fruits);
    });
  }
