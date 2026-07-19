const quizAnswerKey = {
  "report1": "true-positive",
  "report2": "false-positive",
  "report3": "true-positive",
  "report4": "true-positive",
  "report5": "true-positive"
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
