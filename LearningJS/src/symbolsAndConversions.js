//AI generated assignment for learning JS symbols and conversions

/*Requirements:
Local Privacy: Create a local Symbol called idSymbol. Attach it to an object with a random string value. 
Prove that it doesn't show up in Object.keys() or a for...in loop.

Global Access Sharing: Create a globally registered Symbol using the key 'app.config'. 
Attach an object to it containing { debug: true }.

Recovery: In a different file (or simulated separate scope in your script),
retrieve that global symbol using only its string name 'app.config' and read the config data back out. Prove it matches.

Collision Proofing: Create a normal string property named 'id' on the object and show that it completely
coexists with your idSymbol without overwriting the value.*/

let user = {
  name: "Sukham",
  age: 18,
  id: "user123" // Normal string property
};
let idSymbol = Symbol("idSymbol"); // Local Symbol
user[idSymbol] = "uniqueUserID"; // Attach local Symbol to the object

for (let key in user) {
  console.log(key); // This will only log 'name', 'age', and 'id'
}
console.log(Object.keys(user)); // This will also only log ['name', 'age', 'id']
console.log(user[idSymbol]); // This will log 'uniqueUserID'

function setUpData() {
  //New data layer
  let appdata = {
    version: "1.0",
    name: "FocusFlow",
  }
  let configSymbol = Symbol.for("app.config"); // Global Symbol
  appdata[configSymbol] = { debug: true }; // Attach global Symbol to the object
  return appdata;
}

function retrieveData(sharedObject) {
  let configSymbol = Symbol.for("app.config"); // Retrieve global Symbol
  let configData = sharedObject[configSymbol]; // Read the config data back out
  console.log(configData); // This will log { debug: true }
}

const sharedObject = setUpData(); // Set up the data layer
retrieveData(sharedObject); // Retrieve and log the config data

let user2 = {
  name: "Sam",
  id: "user456" // Normal string property
};
user2[idSymbol] = "uniqueUserID2"; // Attach local Symbol to the object

console.log(user2[idSymbol]); // This will log 'uniqueUserID2'
console.log(user2.id); // This will log 'user456', proving coexistence

