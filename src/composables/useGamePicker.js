export default function useGamePicker(colors, message) {
  const matchColor = (value) => {
    // do a random color based on the array index;
    const randomNumber = Math.floor(Math.random() * colors.length); //between 1 - 4

    if (colors[randomNumber] === value) {
      message.value = `You win... [answer: ${colors[randomNumber]}]`;
      return;
    }

    message.value = `You loose [answer: ${colors[randomNumber]}]`;
  };

  return matchColor
}