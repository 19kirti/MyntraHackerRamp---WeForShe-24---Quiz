const quizData = [
    {
      question: "Q.1: What is the latest fashion trend?",
      options: ["Sustainable fashion", "Streetwear", "Luxury fashion", "Vintage fashion"],
      answer: "Sustainable fashion"
    },
    {
        question: "Q.2: What type of clothing is most popular in summer?",
        options: ["Tank Tops", "Scarves", "Overcoats", "Bodycons"],
        answer: "Tank Tops"
      },
      {
        question: "Q.3: Which fashion brand is known for its luxury handbags?",
        options: ["Gucci", "Chanel", "Louis Vuitton", "Prada"],
        answer: "Louis Vuitton"
      },
      {
        question: "Q.4: Which footwear is commonly worn during the winter season?",
        options: ["Flip-Flops", "Boots", "Loafers", "Sport Shoes"],
        answer: "Boots"
      },  
    // More questions can be added here
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();