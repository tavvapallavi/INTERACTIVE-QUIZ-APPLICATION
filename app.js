const container=document.querySelector('.container');
const questionBox=document.querySelector('.question');
const choicesBox=document.querySelector('.choices');
const nextbtn=document.querySelector('.nextbtn');
const scoreCard=document.querySelector('.scoreCard');
const alert=document.querySelector('.alert');
const startbtn=document.querySelector('.startbtn');

const quizz=[
  {
    question:"What is the output of:console.log(typeof null);",
    choices:["null","object","undefined","number"],
    answer:"object"
  },
  {
    question:"what will this code return:Boolean(0)?",
    choices:["true","false","undefined","null"],
    answer:"false"
  },
  {
    question:"what is the correct syntax of a function in Javascript.",
    choices:["function=myFunc()","function myFunc() {}","function:myFunc()","def myFunc()"],
    answer:"function myFunc() {}"
  },
  {
    question:"what will console.log(2+ '2'); output?",
    choices:["4","22","null","undefined"],
    answer:"22"
  },
  {
    question:"which symbol is used for strict equality in JavaScript?",
    choices:["==","===","!=","="],
    answer:"==="
  },
{
  question:"What does NaN stand for?",
  choices:["No assigned number","Not a number ","Negative and Null"," Null and None"],
  answer:"Not a number"
},
{
  question:" What is the use of the let keyword in JavaScript?",
  choices:["To declare a variable with global scope","To declare a block-scoped variable","To make a constant variable","To define a function"],
  answer:"To declare a block-scoped variable"
},
{
  question:"Which method is used to parse a JSON string in JavaScript?",
  choices:["JSON.convert()","JSON.parse()","JSON.stringify()","JSON.toObject()"],
  answer:"JSON.parse()"
},
{
  question:"What is the correct syntax to access the first element of an array let arr = [10, 20, 30]?",
  choices:["arr[1]","arr(0)","arr[0]","arr{0}"],
  answer:"arr[0]"
},
{
  question:"15. Which of the following methods adds one or more elements to the end of an array?",
  choices:["shift()","pop()","push()","unshift()"],
  answer:"push()"
}

];

let currentQuestionIndex=0;
let score=0;
let quizzOver
const showQuestions= () =>{
  const questiondetails=quizz[currentQuestionIndex];
  questionBox.textContent=questiondetails.question;
    choicesBox.textContent="";
  for(let i=0;i<questiondetails.choices.length;i++){
    const currentChoice=questiondetails.choices[i];
    const choiceDiv=document.createElement('div');
    choiceDiv.textContent=currentChoice;
    choiceDiv.classList.add('choice');
    choicesBox.appendChild(choiceDiv);
    choiceDiv.addEventListener('click',()=>{
      if(choiceDiv.classList.contains('selected')){
        choiceDiv.classList.remove('selected');
      }
      else{
        choiceDiv.classList.add('selected');
      }
    })
  }
//console.log(questiondetails);

}
const checkAnswer=()=>{
   const selectedChoice=document.querySelector('.choice.selected');
   if(selectedChoice.textContent===quizz[currentQuestionIndex].answer){
    displayAlert("Correct Answer👍");
    score++;
   }
   else{
   displayAlert(`Wrong Answer👎! ${quizz[currentQuestionIndex].answer}  is the correct Answer`);
   }  
     currentQuestionIndex++;
   if(currentQuestionIndex < quizz.length){
      showQuestions();
  }
  else{
    showScore();
    quizzOver=true;
  } 
}
const showScore = () =>{
  questionBox.textContent="";
  choicesBox.textContent="";
    scoreCard.textContent = `You Scored ${score} out of ${quizz.length}`;
    displayAlert("You Completed this Quizz!");
    nextbtn.textContent="Play Again";
   
}
const displayAlert=(msg)=>{
  alert.style.display="block";
  alert.textContent=msg;
  setTimeout(()=>{
     alert.style.display="none";
  },2000);
  
}
startbtn.addEventListener('click',()=>{
  startbtn.style.display="none";
  container.style.display="block"
  showQuestions();
});
showQuestions();
nextbtn.addEventListener('click',()=>{
  const selectedChoice=document.querySelector('.choice.selected');
  if(!selectedChoice && nextbtn.textContent==="Next"){
    displayAlert("Select Your Answer");
    return;
    }
    if(quizzOver){
    nextbtn.textContent="Next";
    scoreCard.textContent="";
    currentQuestionIndex=0;
      showQuestions();
      quizzOver=false;
      score=0;}
    else{
  checkAnswer();
  }
});