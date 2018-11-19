/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

(function (){
  "use strict";
  
  var sales = 'Toyota';
 
  console.log(str);
  
  newline();
  
  //ObjectLiteral
  /* Start of code*/
  var sales='Toyota';
  
  function carType(name){
    if(name==='Honda'){
      return name;
    } else {
      return "We don't sale " + name;
    }
  }
  
  var car = {mycar: "Saturn", getcar : carType('Honda'), special: sales};
  
  console.log(car.mycar);
  console.log(car.getcar);
  console.log(car.special);
  
  newline();
  
  /*Nested object literal, with numneric literal as Property*/
  var car = {manycars: {a:'Saab', b:'Jeep', 7: 'Seven'}, 7 : 'c class'}
  
  console.log(car.manycars.b);
  console.log(car.manycars[7]);
  console.log(car[7]);
  
  newline();
  
  var unusalObjectLiteral = {'':'EmptyString', '!': 'Bang!'};
  
  //console.log(unsualObjectLiteral.'');
  console.log(unusalObjectLiteral['']);
  console.log(unusalObjectLiteral['!']);
  
  newline();
  
  function newline(){
    console.log('');
  }
  /*End of code*/
  
}) ();

