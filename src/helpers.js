export const zeroPad = number => `00${number}`.slice(-3);

export const shuffle = array => {
  const original = [...array];
  const shuffled = [];

  while (original.length) {
    const rndIndex = Math.floor(Math.random() * original.length);
    const rndItem = original.splice(rndIndex, 1)[0];
    shuffled.push(rndItem);
  }

  return shuffled;
}