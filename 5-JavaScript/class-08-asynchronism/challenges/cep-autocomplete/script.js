const cep = document.querySelector("#cep");
const place = document.querySelector("#place");
const number = document.querySelector("#number");
const complement = document.querySelector("#complement");
const district = document.querySelector("#district");
const city = document.querySelector("#city");
const state = document.querySelector("#state");
const uf = document.querySelector("#uf");

console.log({ cep, place, number, complement, city, uf });
cep.addEventListener("change", () => {
  fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then((request) => request.json())
    .then((data) => {
      place.value = data.logradouro;
      complement.value = data.complemento;
      district.value = data.bairro;
      city.value = data.localidade;
      state.value = data.uf;
      uf.value = data.uf;
      number.focus();
    });
});

cep.addEventListener("keypress", (event) => {
  cep.value.length == 5 ? (cep.value += "-") : cep.value;
  if (cep.value.length >= 9 || event.keyCode < 48 || event.keyCode > 57) {
    event.preventDefault();
  }
});

cep.addEventListener("input", () => {
  cep.value = cep.value.replace(/(\d{5})(\d{3})/, "$1-$2");
});
