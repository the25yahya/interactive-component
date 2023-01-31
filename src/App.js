import './App.css';
import star from '../src/imgs/star.png';




      function Submit (){
  return(
    <button id='submit'>submit</button>
  )
}

function Numbers(){
  return(
    <div className='numbers'>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
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

const submit = document.getElementById('submit');
