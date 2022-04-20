"use strict";

const answer = document.querySelector('.answer');
const answerText = document.querySelector('.questions-item-answer');
const question = document.querySelector('.question');
const isOpen = document.querySelector('.plus-minus');
const filter = document.querySelectorAll('.parallel');

document.querySelectorAll('.click-field').forEach(item => {
    item.addEventListener('click', event => {
        let value = event.currentTarget.dataset['value'];
        item.children[0].classList.toggle('question-text-open');
        item.children[1].classList.toggle('answer-open');
        let isOpen = item.children[1].children[0];
        isOpen.textContent === "+" ? isOpen.textContent = "-" : isOpen.textContent = "+";

        filter.forEach(elem => {
            if (elem.classList.contains(value)) {
                elem.classList.toggle('none');
            }
        });
    });
});

