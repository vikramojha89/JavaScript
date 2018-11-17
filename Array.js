/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

(function(){
  "use strict";
 
  
  //newline(); /* Function declaration (function hoisting)*/
  
  var fruit = ["Apple", "Banana"]; /*Array Literal*/
  function ModifyArray(){
    
    /*Initial array*/
    console.log("Initial Array");
    console.log(fruit);
    /*Output: ['Apple', 'Banana']*/
    
    /*For new line*/
    newline();
    
    /*Removing **front** Element from an array*/
    fruit.shift();
    console.log("Removing first element from the array");
    console.log(fruit);
    /*Output: ['Banana']*/
    
    /*for new line*/
    newline();
    
    /*Adding Element to the front of Array*/
    console.log("Adding Element to the front of Array");
    fruit.unshift('Orange');
    console.log(fruit);
    /*Output: ['Orange', 'Banana']*/
    
    /*for new line*/
    newline();
    
    /*Removing last element of array*/
    console.log("Removing last element of array");
    fruit.pop();
    console.log(fruit);
    /*Output: ['Orange']*/
    
    /*for new line*/
    newline();
    
    /*Adding element to the end of Array*/
    console.log("Adding element to the end of Array");
    fruit.push('Pineapple');
    console.log(fruit);
    /*Output: ['Orange', 'Pineapple']*/
    
  }
  
  /*For newline*/
  function newline(){
    console.log("");
  }
  
  ModifyArray();
  
  /*Start of code*/
  function Array(){
  const MYARR = ["Hello", "World"];
  MYARR.pop();
  MYARR.push("Vikram");
  console.log(MYARR);
  }
  
  Array();
  /*End of code*/
  
  
}) ();
/*
***Output****
Array [ "Hello", "Vikram" ]
*/