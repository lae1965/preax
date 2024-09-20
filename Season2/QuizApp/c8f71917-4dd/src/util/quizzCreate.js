import jsonData from './quizz_questions.json';

let initialQuestions;
let initialCountries;
let quizzList;

const getRandomInt = (max) => {
  return Math.floor(Math.random() * (Math.floor(max) + 1));
}

export const quizzCreate = () => {
  initialQuestions = [...jsonData.questions];
  initialCountries = [...jsonData.countries];
  quizzList = [];
}

export const questionsCreate = (count) => {
  for (let i = 0; i < count; i++) {
    const questionNumber = getRandomInt(initialQuestions.length - 1);
    const question = initialQuestions.splice(questionNumber, 1);
    quizzList.push(question[0]);
  }
  return quizzList;
}

export const answersCreate = (rightAnswer) => {
  const rightAnswerNumber = getRandomInt(3);
  const answers = [];
  for (let j = 0; j < 4; j++) {
    if (j === rightAnswerNumber) answers.push({ number: j, text: rightAnswer });
    else {
      const a = 1;
      while (a) {
        const answerNumber = getRandomInt(initialCountries.length);
        if (
          !!initialCountries[answerNumber]
          && initialCountries[answerNumber] !== rightAnswer
          && !answers.find(answer => answer.text === initialCountries[answerNumber])
        ) {
          answers.push({ number: j, text: initialCountries[answerNumber] });
          break;
        }
      }
    }
  }
  return { answers, rightAnswerNumber };
}

export const removeCountryFromArray = (countryName) => {
  const findIndex = initialCountries.findIndex(country => country === countryName);
  if (findIndex !== -1) initialCountries.splice(findIndex, 1);
}