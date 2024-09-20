const correctedWords = {
  question: ['вопрос', 'вопроса', 'вопросов'],
  mistake: ['ошибку', 'ошибки', 'ошибок']
}

export const endWordCorrect = (numb, word) => {
  let index;
  const remain100 = numb % 100;
  const remain10 = numb % 10;
  if (remain100 > 10 && remain100 < 15) index = 2;
  else if (remain10 === 1) index = 0;
  else if (remain10 > 1 && remain10 < 5) index = 1;
  else index = 2;

  return correctedWords[word][index];
}