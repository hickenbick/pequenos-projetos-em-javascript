//using selectors inside the element
// traversing the dom

// const btns = document.querySelectorAll('.question-btn')

// btns.forEach(function(btn){
//   btn.addEventListener('click', function(e) {
//     const question = e.currentTarget.parentElement.parentElement
//     question.classList.toggle('show-text')
//   })
// })

// const questions = document.querySelectorAll('.question')

// questions.forEach(function(quest) {
//   const btn = quest.querySelector('.question-btn')
//   btn.addEventListener('click', function() {
//     quest.classList.toggle('show-text')
//   })
// })

// const questions = document.querySelectorAll('.question')

// questions.forEach(function(quest) {
//   const btn = quest.querySelector('.question-btn')
//   btn.addEventListener('click', function() {
//     quest.classList.toggle('show-text')
//   })
// })

const questions = document.querySelectorAll(".question");

questions.forEach(function (quest) {
  const btn = quest.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function(item) {
      if(quest !== item) {
        item.classList.remove('show-text')
      }
    })
    quest.classList.toggle('show-text')
  });
});
