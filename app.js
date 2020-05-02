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


const watermelon=new Fruit({
    name:"Watermelon",
    rating:9,
    review:"its juicy"
});

const banana=new Fruit({
    name:"Banana",
    rating:8,
    review:"its sweety"
});

const dragon=new Fruit({
    name:"Dragon",
    rating:7,
    review:"Less tasty"
});


Fruit.insertMany([watermelon,banana,dragon],function(err){
    if(err){
        console.log("Error in inserting")
    }
    else{
        console.log("Successfully saved")
    }

})



const personSchema=new mongoose.Schema({
    name : String,
    age : Number,
    
});
const Person=mongoose.model("Person",personSchema);
const person=new Person({
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
