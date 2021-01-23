const form = document.querySelector(`#quiz-form`);
const answersList  = document.querySelectorAll(`.answer`);
const questionsList = document.querySelectorAll(`.question-item`);
const alertModal = document.querySelector(`#alert`);

const updatedAnswerList = Array.from(answersList);
form.addEventListener('submit', e => {
    e.preventDefault();
    questionsList.forEach(question => {
        question.classList.add(`incorrect`);
        question.classList.remove(`correct`);
    })
    const checkedAnswers = updatedAnswerList.filter(answer => answer.checked)
    checkedAnswers.forEach(answer => {
        const parentElement = answer.closest(`.question-item`);
        
        if(answer.value === `true`) {
            parentElement.classList.add(`correct`);
            parentElement.classList.remove(`incorrect`);
        } else {
            parentElement.classList.add(`incorrect`);
            parentElement.classList.remove(`correct`);
        }

    })

    const allTrue = checkedAnswers.every(answer => answer.value === `true`)
    if(allTrue) {
        alertModal.classList.add(`active`);
        setTimeout(() => {
            alertModal.classList.remove(`active`);
        }, 1000)
    }
})
