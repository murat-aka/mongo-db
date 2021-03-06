//////////////////////////////////////////
/* this program contains exercises from */
/* freecodecamps mongodb tutorials      */
//////////////////////////////////////////


         //////////////////
         ///// START  /////
         //////////////////




 /*////////////////////////////////*/
 /* function find exercise 3       */
 /*////////////////////////////////*/

 function find(){

    var mongo = require('mongodb').MongoClient; // load mongo module
    var url = "mongodb://localhost:27017/learnyoumongo";
    
    var limit = process.argv[2]; // paramater to find
    
    mongo.connect(url, function(err, dbase) {
        
        if(!err){
            
            dbase.collection('parrots').find({ 
              age: { $gt : +limit } // greater than
            }).toArray(function(err, documents) {
                
                if(!err){
                    console.log(documents); 
                }
                
            });            
            
        }
        
        dbase.close(); // close connection

    });
 
 }
 
 //find();
 
 
 
 /*////////////////////////////////*/
 /* function findDoc exercise 4    */
 /*////////////////////////////////*/

 function findDoc(){

    var mongo = require('mongodb').MongoClient; // load mongo module
    var url = "mongodb://localhost:27017/learnyoumongo";
    
    var limit = process.argv[2]; // paramater to find
    
    mongo.connect(url, function(err, dbase) {
        
        if(!err){
            
            dbase.collection('parrots').find({ 
                age: {
                  $gt : +limit  // greater than
                }
              }, {
                name: 1,
                age: 1,
                _id: 0
            }).toArray(function(err, documents) {
                
                if(!err){
                    console.log(documents); 
                }
                
            });            
            
        }
        
        dbase.close(); // close connection

    });
 
 }
 
 //findDoc();



 /*////////////////////////////////*/
 /* function insertDoc exercise 5  */
 /*////////////////////////////////*/

 function insertDoc(){

    var mongo = require('mongodb').MongoClient; // load mongo module
    var url = "mongodb://localhost:27017/learnyoumongo";

    var doc = {
        
        firstName: process.argv[2], // firstname,
        lastName: process.argv[3]  // lastname
    };
    
    mongo.connect(url, function(err, dbase) {
        
        if(!err){

                dbase.collection('docs').insert(
                  doc // inserting document
                , function(err, data) {
                  // handle error
                  if(!err){
                      console.log(JSON.stringify(doc));
                  }
                  // other operations
                });           
                            
        }
                        
        dbase.close(); // close connection
                
    });
                 
 }
 
 //insertDoc();
 

 /*////////////////////////////////*/
 /* function updateDoc exercise 6  */
 /*////////////////////////////////*/

 function updateDoc(){

    var db = process.argv[2];
    var mongo = require('mongodb').MongoClient; // load mongo module
    var url = "mongodb://localhost:27017/" + db;

    mongo.connect(url, function(err, dbase) {
        
        if(!err){

                dbase.collection('users').update(
                  {username: "tinatime" } // updating document
                   ,{
                      $set: {
                        age: 40
                      }
                    }
                , function(err, data) {
                  // handle error
                  if(!err){
                      //console.log(JSON.stringify(doc));
                  }
                  // other operations
                });           
        }
                        
        dbase.close(); // close connection
    });
 }
 
 //updateDoc();
 
 
 
 
 /*////////////////////////////////*/
 /* function removeDoc exercise 7  */
 /*////////////////////////////////*/

 function removeDoc(){

    var db = process.argv[2];
    var co = process.argv[3];
    var id = process.argv[4];
    var mongo = require('mongodb').MongoClient; // load mongo module
    var url = "mongodb://localhost:27017/" + db;

    mongo.connect(url, function(err, dbase) {
        
        if(!err){
            
                dbase.collection(co).remove(
                  { _id: id } // removing document

                , function(err, data) {
                  // handle error
                  if(!err){
                      //console.log(JSON.stringify(doc));
                  }
                  // other operations
                });           
        }
                        
        dbase.close(); // close connection
    });
 }
 
 //removeDoc();




 /*////////////////////////////////*/
 /* function countDoc  exercise 8  */
 /*////////////////////////////////*/

 function countDoc(){


    var limit = process.argv[2];
    
    var mongo = require('mongodb').MongoClient; // load mongo module
    var url = "mongodb://localhost:27017/learnyoumongo";

    mongo.connect(url, function(err, dbase) {
        
        if(!err){
            
                dbase.collection('parrots').count({
                age: {
                  $gt : +limit  // greater than
                }
                }, function(err, data) {
                  // handle error
                  if(!err){
                      console.log(data);
                  }
                  // other operations
                });           
        }
                        
        dbase.close(); // close connection
    });
 }
 
 //countDoc(); 
 
 
 
 
 /*////////////////////////////////////*/
 /* function aggregateDoc  exercise 8  */
 /*////////////////////////////////////*/

 function aggDoc(){


    var s = process.argv[2];
    
    var mongo = require('mongodb').MongoClient; // load mongo module
    var url = "mongodb://localhost:27017/learnyoumongo";

    mongo.connect(url, function(err, dbase) {
        
        if(!err){
            

              // Execute aggregate, notice the pipeline is expressed as an Array
              dbase.collection('prices').aggregate([
                { $match: { size: s }}
                , { $group: {
                    _id: 'avarage' // This can be an arbitrary string in this case
                  , avarage: {
                      // $avg is the operator used here
                      $avg: '$price'
                    }
                  }}
                ]).toArray(function(err, results) {
                  // handle error
                  
                  var v = results[0].avarage;
                  v = Number(v).toFixed(2);
                  if(!err){
                     console.log(v);
                  }
                  
                  // => [
                  // =>   { _id: 'total', total: 11 }
                  // => ]

              });              
                
        }
                        
        dbase.close(); // close connection
    });
 }
 
 aggDoc(); 
 
