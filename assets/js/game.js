
//prompt, created a text box for user to respond (user input) and browser saves info

var playerName = window.prompt("What is your robot's name?");

//Note the lack of quotation marks around playerName
console.log(playerName);    

console.log("This logs a string, good for leaving yourself a message");

//this will do math and log 20
console.log(10+10);

//what is this?
console.log("Our robot's name is " + playerName);

//this creates a function named "fight" 

function fight() {    //declared function
    window.alert("The fight has begun!");
    
}

//fight();    //called function