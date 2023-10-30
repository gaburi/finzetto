import faqData from '../../data/faq.json';
import { Question } from './questions';
import { Component } from "./styles";

function getRandomItems(arr, n) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}


export function Faq() {
  const data = faqData.FAQ;
  const randomQuestions = getRandomItems(data, 4);

  return (
    <Component id='faq'>
      <h1>Perguntas Frequentes</h1>
      {randomQuestions.map((faq, index) => (
        <Question
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </Component>
  )
}