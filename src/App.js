import './App.css';
import star from '../src/imgs/star.png';
import React, { useState } from 'react';




      function Submit (){
  return(
    <button id='submit' onClick={submitAnwser}>submit</button>
  )
}

function Numbers(){
  return(
    <div className='numbers'>
      <div className='choice1' onClick={anwser1}>1</div>
      <div className='choice2' onClick={anwser2}>2</div>
      <div className='choice3' onClick={anwser3}>3</div>
      <div className='choice4' onClick={anwser4}>4</div>
      <div className='choice5' onClick={anwser5}>5</div>
    </div>
  )
}
function Main(){
  return(
    <main>
      <img width='20px'
        src={star}
      />
      <h1>how did we do?</h1>
      <p>please let us know how we did with your support request. all feedback is apprecieated to help us improve our offering!</p>
    </main>
  )
}

function Container(){
  return(
    <div className='container'>
         <Main/>
         <Numbers/>
         <Submit/>
    </div>
  )
}








function App() { 
  return(
    <Container/>
  )
}

export default App;

//variables////////////////
const submit = document.querySelector('#submit');
const num1 = document.querySelector('.choice1');
const num2 = document.querySelector('.choice2');
const num3 = document.querySelector('.choice3');
const num4 = document.querySelector('.choice4');
const num5 = document.querySelector('.choice5');
//event listening
function anwser1(){
 
}
function anwser2(){
  
}
function anwser3(){
  
}
function anwser4(){
  
}
function anwser5(){
  
}
function submitAnwser(){

}