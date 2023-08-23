// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   // It is all JSX not HTML
//   const [add,setAdd] = useState(55)
//   const [subs,setSub] = useState(55)
//   const handleAdd = () =>{
//     setAdd(add+1)
//   }
//   const handleSubs =()=>{
//     setSub(subs-1)
//   }
//   return (
//     <div className="App">
//       <h1 style={ {color:'red', fontFamily:"cursive", } }>Fallen Leaves</h1>   
//       <h2>Add has state {add}</h2>
//       <button onClick={handleAdd}>+</button>
//       <h2>Substract has state {subs}</h2> 
//       <button onClick={handleSubs}>-</button>
//     </div>
//   );
// }

// export default App;


//rfc
//rfce
import React, { useState } from 'react'

function App() {

  const questions = [  {
    questionText: 'What is the capital of France?',   answerOptions: [
     { answerText: 'New York', isCorrect: false },    { answerText: 'London', isCorrect: false },
     { answerText: 'Paris', isCorrect: true },    { answerText: 'Dublin', isCorrect: false },
    ],  },
   {   questionText: 'Who is CEO of Tesla?',
    answerOptions: [    { answerText: 'Jeff Bezos', isCorrect: false },
     { answerText: 'Elon Musk', isCorrect: true },    { answerText: 'Bill Gates', isCorrect: false },
     { answerText: 'Tony Stark', isCorrect: false },   ],
   },  {
    questionText: 'The iPhone was created by which company?',   answerOptions: [
     { answerText: 'Apple', isCorrect: true },    { answerText: 'Intel', isCorrect: false },
     { answerText: 'Amazon', isCorrect: false },    { answerText: 'Microsoft', isCorrect: false },
    ],  },
   {   questionText: 'How many Harry Potter books are there?',
    answerOptions: [    { answerText: '1', isCorrect: false },
     { answerText: '4', isCorrect: false },    { answerText: '6', isCorrect: false },
     { answerText: '7', isCorrect: true },   ],
   },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
 
  const [showscore, setshowscore] = useState(false)
 
  const [score, setscore] = useState (0)
  let handleQues = (para)=>{
    console.log(para)
    if(para==true)
    {
      setscore(score+1)
    }
    let nextQ = currentQuestion + 1
    if(nextQ < questions.length ){
      setCurrentQuestion(nextQ)
    }
    else
    {
      
      alert('Quiz Over')
      setshowscore(true)
     
    }
  }

  return ( 
    <div className='app'> 
     {/* HINT: replace "false" with logic to display the  
        score when the user has answered all the questions */} 
     {showscore ? ( 
      <div className='score-section'>You scored {score} out of {questions.length}</div> 
     ) : ( 
      <> 
       <div className='question-section'> 
        <div className='question-count'> 
         <span>Question {currentQuestion+1}</span>/{questions.length} 
        </div> 
        <div className='question-text'>{questions[currentQuestion].questionText}</div> 
       </div> 
       <div className='answer-section'>
        {
        questions[currentQuestion].answerOptions.map((ele,index)=>{
          return <button key={index} onClick={()=>handleQues(ele.isCorrect)}>{ele.answerText}</button>
       })
      }
       </div> 
      </>
     )} 
    </div> 
   ); 
  }

export default App

