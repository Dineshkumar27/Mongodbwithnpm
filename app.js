const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useUnifiedTopology: true });


const fruitSchema=new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    rating :{
        type:Number,
        min:1,
        max:10,
    },
    review : String
});

const Fruit=mongoose.model("Fruit",fruitSchema);
const fruit=new Fruit({
    name:"Sweet Lime",
    rating:9,
    review:"its tasty"
});
//fruit.save();

// const watermelon=new Fruit({
//     name:"Watermelon",
//     rating:9,
//     review:"its juicy"
// });

// const banana=new Fruit({
//     name:"Banana",
//     rating:8,
//     review:"its sweety"
// });

// const dragon=new Fruit({
//     name:"Dragon",
//     rating:7,
//     review:"Less tasty"
// });


// Fruit.insertMany([watermelon,banana,dragon],function(err){
//     if(err){
//         console.log("Error in inserting")
//     }
//     else{
//         console.log("Successfully saved")
//     }

// })





const personSchema=new mongoose.Schema({
    name : String,
    age : Number,
    
});
const Person=mongoose.model("Person",personSchema);
const person=new Person({
    name:"JOhn",
    age:26    
});

//person.save();

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
//UpdateMany and UpdateOne

// Fruit.updateOne({_id:"5ead625068471b75f87c5a29"},{name:"Peach"},function(err){
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         console.log("Successfully Updated");
        
//     }

// });

// Fruit.deleteOne({_id:"5ead2651b5408c4af80d3cc4"},function(err){
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         console.log("Successfully Deleted from Table");
        
//     }
// });

Fruit.deleteMany({ name: "Apple"}, function (err) {
    if(err){
        console.log(err);
        
    }
    else{
        console.log("Successfully Deleted Many from Table");
    }
});


Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }
    else{
        mongoose.connection.close();//it will close the collection automatically in the console
       // console.log(fruits)
       fruits.forEach(function(fruit){
            console.log(fruit.name);
            
       })
    }
        

    })