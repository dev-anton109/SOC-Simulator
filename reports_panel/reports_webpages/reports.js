const quizAnswerKey = {
  "report1": "true-positive",
  "report2": "false-positive",
  "report3": "true-positive",
  "report4": "true-positive",
  "report5": "true-positive",
  "report6": "true-positive",
  "report7": "false-positive",
  "report8": "true-positive",
  "report9": "false-positive",
  "report10": "true-positive",
  "report11": "false-positive",
  "report12": "true-positive",
  "report13": "false-positive",
  "report14": "true-positive",
  "report15": "false-positive",
  "report16": "true-positive",
  "report17": "true-positive",
  "report18": "true-positive",
  "report19": "false-positive",
  "report20": "true-positive",
  "report21": "false-positive",
  "report22": "true-positive",
  "report23": "true-positive",
  "report24": "false-positive",
  "report25": "true-positive",
  "report26": "true-positive",
  "report27": "false-positive",
  "report28": "true-positive",
  "report29": "false-positive",
  "report30": "true-positive",
  "report31": "true-positive",
  "report32": "true-positive",
  "report33": "false-positive",
  "report34": "true-positive",
  "report35": "false-positive",
  "report36": "true-positive",
  "report37": "true-positive",
  "report38": "false-positive",
  "report39": "true-positive",
  "report40": "false-positive",
  "report41": "false-positive",
  "report42": "true-positive",
  "report43": "false-positive",
  "report44": "true-positive",
  "report45": "false-positive"
};

const path = window.location.pathname;
const currentReport = path.substring(path.lastIndexOf('/') + 1).replace('.txt.cgi.html.cgi', '');

const actionButtons = document.querySelectorAll('.action-btn');
const feedbackMessage = document.getElementById('feedback-message');

actionButtons.forEach(button => {
  button.addEventListener('click', function() {
    const userChoice = this.getAttribute('data-choice');
    const correctAnswer = quizAnswerKey[currentReport];

    feedbackMessage.classList.remove('show');
    void feedbackMessage.offsetWidth;

    if (userChoice === correctAnswer) {
      feedbackMessage.innerHTML = "CORRECT!";
      feedbackMessage.className = 'correct';
    } else {
      feedbackMessage.innerHTML = "WRONG!";
      feedbackMessage.className = 'wrong';
    }

    feedbackMessage.classList.add('show');
  });
});
