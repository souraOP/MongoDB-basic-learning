//jshint esversion: 6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/souraDB", {useNewUrlParser: true});

const souraSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'Why no peaches?']
    },
    rating: {
        type: Number,
        min: [0, 'That is so bad'],
        max: 10
    },
    review: String
});

const Soura = mongoose.model("Soura", souraSchema);

const soura = new Soura({
    name: "Peaches",
    rating: 10,
    review: "Peaches are yummy!"
});

const pubg = new Soura({
    name: "BGMI",
    rating: 9,
    review: "Best game for friends group"
});

// pubg.save();

// soura.save(); //the .save() method in Mongoose to saves the soura document in the Soura Collection inside our souraDB!

const personSchema = new mongoose.Schema({
    name: "String",
    age: Number,
    favouriteSoura: souraSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Ankita Dutta",
    age: 21
});

// person.save();


// const kiwi = new Soura({
//     name: "Kiwi",
//     rating: 0,
//     review: "Kiwi's suck!"
// });

// const mango = new Soura({
//     name: "Mango",
//     rating: 10,
//     review: "The best fruit in the world!"
// });

// const brucesam = new Soura({
//     name: "Brucesam",
//     rating: 5,
//     review: "Gay fruit :P"
// });

// Soura.insertMany([kiwi, mango, brucesam])
//     .then(function() {
//         console.log("Succesfully saved all the fruits into souraDB");
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

//Reading from your database using Mongoose

Soura.find({}).then(function(soura){
    // console.log(soura);     // prints the whole collection

    soura.forEach(function(fruit){         // iterates through each of the array elements 
        console.log(fruit.name);      // and only prints the name property of the fruits in every instances
    });

    // mongoose.connection.close();    //it will close the database connection as soon as it's done printing so that we no longer have to press Ctrl + C to close the database connection!
})
.catch(function(err){
    console.log(err);
});


// Soura.deleteOne({_id: "6492273b40b69c7d25a56e55"}).then(function(soura){
//     console.log("Added");
// })
// .catch(function(err){
//     console.log(err);
// });
