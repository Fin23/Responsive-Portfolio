var connection = require("../config/connection");

function createQmarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function translateSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
  selectAll: function(table, cb) {
    var dbQuery = "SELECT * FROM " + table + ";";

    connection.query(dbQuery, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var dbQuery =
      "INSERT INTO " +
      table +
      " (" +
      cols.toString() +
      ") " +
      "VALUES (" +
      createQmarks(vals.length) +
      ") ";

    console.log(dbQuery);
    connection.query(dbQuery, vals, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  updateOne: function(table, objColVals, condition, cb) {
    var dbQuery =
      "UPDATE " +
      table +
      " SET " +
      translateSql(objColVals) +
      " WHERE " +
      condition;

    console.log(dbQuery);

    connection.query(dbQuery, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  deleteOne: function(table, condition, cb) {
    var dbQuery = "DELETE FROM " + table + " WHERE " + condition;
    console.log(dbQuery);

    connection.query(dbQuery, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  }
};
module.exports = orm;

































// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
//     //  * `selectAll()`
//     //  * `insertOne()`
//     //  * `updateOne()`
//     //  * Export the ORM object in `module.exports`.
//     // Import MySQL connection.


// var connection = require("../config/connection");

// // Create the methods that will execute the necessary MySQL commands in the controllers. 
// // These are the methods you will need to use in order to retrieve and store data in your database.
// // Helper function for SQL syntax.
// // ["?", "?", "?"].toString() => "?,?,?";


// function printQuestionMarks(num) {
//  var arr = [];
//  for (var i = 0; i < num; i++) {
//    arr.push("?");
//  }
//  return arr.toString();
// }

// // Helper function to convert object key/value pairs to SQL syntax

// function objToSql(ob) {
//  var arr = [];
//  // loop through the keys and push the key/value as a string int arr
//  for (var key in ob) {
//    var value = ob[key];
//    // check to skip hidden properties
//    if (Object.hasOwnProperty.call(ob, key)) {

//      // if string with spaces, add quotations (big mac => 'big mac')

//      if (typeof value === "string" && value.indexOf(" ") >= 0) {
//        value = "'" + value + "'";
//      }

//      // e.g. {burger_name: 'big mac'} => ["burger_name='big mac'"]
//      // e.g. {devoured: true} => ["devoured=true"]
//      arr.push(key + "=" + value);
//    }
//  }

//  // translate array of strings to a single comma-separated string
//  return arr.toString();
// }





// // Object for SQL statement functions
// var orm = {
//    selectAll: function(tableInput, callback) {
//        var queryString = "SELECT * FROM " + tableInput + ";";
//        connection.query(queryString, function(err, result) {
//            if (err) {
//                throw err;
//            } 
//            callback(result);
//        });
//    },




//    insertOne: function(table, cols, vals, callback) {
//        var queryString = "INSERT INTO " + table;

//        queryString += " (";
//        queryString += cols.toString();
//        queryString += ") ";
//        queryString += "VALUES (";
//        queryString += printQuestionMarks(vals.length);
//        queryString += ") ";

//        console.log(queryString);

//        connection.query(queryString, vals, function(err, result) {
//            if (err) {
//                throw err;
//            }
//            callback(result);
//        });
//    },




//     // EX objColVals would be {burger_name: big mac, devoured: true}


//    updateOne: function(table, objColVals, condition, callback) {
//        var queryString = "UPDATE " + table;
//        queryString += " SET ";
//        queryString += objToSql(objColVals);
//        queryString += " WHERE ";
//        queryString += condition;
//        console.log(queryString);
//        connection.query(queryString, function(err, result) {
//            if (err) {
//                throw err;
//            }
//            callback(result);
//        });
//    },

//    deleteOne: function(table, condition, callback){
//        var dbQuery = "DELETE FROM " + table+ "WHERE" + condition;
//        console.log(queryString);
//        connection.query(queryString, function(err, result) {
//            if (err) {
//                throw err;
//            }
//            callback(result);
//        });
//    }
// };




// // Export the orm object for the model (burger.js).
// module.exports = orm;