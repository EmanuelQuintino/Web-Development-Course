function speakText() {
  const number = 2;
  const pacient = "João Emanuel Vieira Quintino";
  const text = `${pacient}, por favor, se dirigir para guichê ${number}`;

  const speak = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  text.voice = voices[0];
  window.speechSynthesis.speak(speak);
}
