import React from 'react';
import './App.css';

function App() {
  /*random function Math.random => r
   always generates random no. between 0 and 1*/
   0<= r <1;
   // we want a formula for r interms of n

   1<=n<7;
   //left side to zero
   1-1<=n-1<7-1;
   0<=n-1<6;
   //now lets make right side to 1 by dividing 6 by 6
   0/6<=(n-1)/6<6/6;
   0<=(n-1)/6<1;
   //lets solve for n for that
   (n-1)/6 == r;
   n == 6*r +1;
   //if we write this in terms of random number
   function roll(){
     return(Math.random()*6) + 1
   }
   console.log(roll)
   // this funtion will definitely generate random no. between 
   // 1 and 7

   /* if you want to generate the random no. by rolling
   dice then following funcion will give you same */

   function roll(){
     return Math.floor((Math.random()*6)+1)
   }
   console.log(roll())

   //for any given no. or min and max
   min<=n <max;
   min-min<=n-min<max-min;
   0<=n-min<max-min;
   0/(max-min)<=(n-min)/(max-min)<(max-min)/(max-min);
   0<=(n-min)/(max-min)<1;
   //now interms of r:
   (n-min)/(max-min) == r;
   n == r*(max-min) + min;

   // now apply to roll function;

   function roll(min,max){
     let r = Math.random();
     r *= (max-min);
     r += min;
     return r
   }

   console.log(1,5)

   //lets return whole or integer

   function roll(min,max,floatFlag){
    let r = Math.random()*(max-min) + min;
    return floatFlag ? r : Math.floor(r)
  }

  console.log(1,5)

  //lets get random name

  let userName = [ 'ram', 'sam','hari', 'dan']
  let age = [12,24,36,64]

  let user = {
    name: userName[roll(0,userName.length())],
    age: roll(12,65),
    //generates random no. between 12 and 65
    height: roll(5.2,5.7,1).toFixed(1)
    //generates random no. between 5.2 and 5.7 
    // 1 is for decimal
  }







  return (
    <div className="App">
    </div>
  );
}

export default App;
