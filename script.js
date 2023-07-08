document.addEventListener('DOMContentLoaded', function() {

    var aboutClick = document.getElementById("about");
  
    aboutClick?.addEventListener("click", function() {
      alert("You have 10 question to answer with the timer running, best of luck for the game!"); // Show alert message
    });

    // var startButton = document.getElementById("startButton");
  
    // startButton?.addEventListener("click", function() {
    //   // Redirect to the new HTML file
    //   window.location.replace("index.html");
    // });
    

   
    // timer here
    var duration = 10; // 30 seconds
    var timerElement = document.getElementById('timer');
    let countdown ;

    function startTimer() {
     
        // Start the countdown
            countdown = setInterval(function() {
            var seconds = duration % 60;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            timerElement.textContent = "00:" + formattedSeconds;
      
            if (duration <= 0) {
                clearInterval(countdown);
                alert("Time's up! but still you can answer the question because(learning is more important than anything else)");
                nextQuestion();
            }
            duration--;
        }, 1000);
        
    }

    function resetTimer() {
        clearInterval(countdown);
        duration = 10; // Reset the duration to the initial value
        startTimer(); // Start the timer again
    }
    
    
    //  JavaScript code here
    const questions = [
        {
         question: "What does CSS stand for?",
         answers:[
            {text: "Creative Style Scripts",correct:false},
            {text: "Cascading Style Sheets",correct:true},
            {text: "Computer Style System",correct:false},
            {text: "Coding Syntax Structure",correct:false},
         ]   
        },
        {
            question: "Which of the following is NOT a valid HTML element?",
            answers:[
               {text: "div",correct:false},
               {text: "span",correct:false},
               {text: "container",correct:true},
               {text: "p",correct:false},
            ]   
        },
        {
            question: "What is the purpose of the box-sizing CSS property?",
            answers:[
               {text: "To specify the position of an element",correct:false},
               {text: "To control the display of an element",correct:false},
               {text: "To adjust the spacing between elements",correct:false},
               {text: "To include or exclude the element's padding and border in its total width and height",correct:true},
            ]   
        },
        {
            question: "What is the purpose of the localStorage object in web browsers?",
            answers:[
               {text: "It allows you to store and retrieve data persistently on the user's browser.",correct:true},
               {text: "It dynamically adds new elements to the DOM.",correct:false},
               {text: "It enables asynchronous JavaScript code execution.",correct:false},
               {text: "It retrieves data from an API using AJAX.",correct:false},
            ]   
        },
        {
            question: "What is the output of the following code? (Console.log(2 + '2'));",
            answers:[
               {text: "4",correct:false},
               {text: "22",correct:false},
               {text: "'22'",correct:true},
               {text: "TypeError",correct:false},
            ]   
        },
        {
            question: "What is the difference between == and === in JavaScript for comparing values?",
            answers:[
               {text: "== performs type coercion, while === performs strict equality without type coercion.",correct:true},
               {text: "Both == and === perform strict equality without type coercion.",correct:false},
               {text: "== and === are interchangeable and can be used interchangeably.",correct:false},
               {text: "== performs strict equality without type coercion, while === performs type coercion.",correct:false},
            ]   
        },
        {
            question: "What does the setTimeout() function do in JavaScript?",
            answers:[
               {text: "It pauses the execution of the code for a specified duration.",correct:false},
               {text: "It schedules the execution of a function after a specified delay.",correct:true},
               {text: " It returns the current date and time.",correct:false},
               {text: " It sets a timer that triggers an event at a specified time.",correct:false},
            ]   
        },
        {
            question: "What is the purpose of the map() method in JavaScript arrays?",
            answers:[
               {text: "It returns the first element that satisfies a given condition in the calling array.",correct:false},
               {text: "It sorts the elements of the calling array in ascending order.",correct:false},
               {text: " It creates a new array by executing a provided function on each element of the calling array.",correct:true},
               {text: " It removes elements from the calling array based on a provided condition.",correct:false},
            ]   
        },
        {
            question: "What does the JSON.parse() function do in JavaScript?",
            answers:[
               {text: "It converts a JSON string to a JavaScript object.",correct:true},
               {text: "It converts a JavaScript object to a JSON string.",correct:false},
               {text: "It serializes a JavaScript object into a JSON representation.",correct:false},
               {text: "It deserializes a JSON string into a JavaScript object.",correct:false},
            ]   
        },
        {
            question: "What is the purpose of the this keyword in JavaScript?",
            answers:[
               {text: "It refers to the current function being executed.",correct:false},
               {text: "It refers to the parent object of the current object.",correct:false},
               {text: "It refers to the global object in the current context.",correct:false},
               {text: "It refers to the context in which a function is called or an object is accessed.",correct:true},
            ]   
        },
    ];
    
    const questionElement = document.getElementById("question");
    const answerButtons= document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    const truthContent = document.getElementById("truth-content");
    
    
    let currentQuestionIndex = 0;
    let score = 0;
    
    function startQuiz(){
        currentQuestionIndex=0;
        score=0;
        nextButton.innerHTML = "Next";
        showQuestion();
    }
    
    function  showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1 ;
        questionElement.innerHTML = questionNo + "." + currentQuestion.
        question;
    
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click",selectAnswer);
        });
    }
    
    function resetState(){
        nextButton.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    
    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }
        else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
    }

    
    
    function showScore(){
        resetState();
        
        questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
        if(score < 5){
            truthContent.innerHTML = "Need to work hard &#128533";
            // Reset content when the button is clicked
            nextButton.addEventListener("click", function() {
                truthContent.innerHTML = "";
            });
        }
        else if (score > 6 && score < 9){
            truthContent.innerHTML = "Keep up the good work! &#128515";
            nextButton.addEventListener("click", function() {
                truthContent.innerHTML = "";
            });
        }
        else if(score === 9){
            truthContent.innerHTML = "Wow! You almost had a perfect score. 9 out of 10 is fantastic! &#128526";
            nextButton.addEventListener("click", function() {
                truthContent.innerHTML = "";
            });
        }
        else{
            truthContent.innerHTML = "Congratulations! You scored a perfect 10 out of 10.  &#129321";
            nextButton.addEventListener("click" , function(){
                truthContent.innerHTML = "";
            })
        }
        quizComplete = true;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
        
    }
    
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            questionElement.textContent = questions[currentQuestionIndex];
            duration = 10; // Reset the timer for each question
            
            showQuestion();
        }
        else{
      
            alert("Quiz completed!");
            showScore();

        }
        
    }

   
    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }
        else{
            startQuiz();
        }
        resetTimer(); // Call the resetTimer() function when the button is clic
    });
    
    startTimer();
    startQuiz();
  });









