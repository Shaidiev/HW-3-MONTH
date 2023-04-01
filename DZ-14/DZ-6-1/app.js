const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur");

const convertation = (elem, target, currency) => {
  elem.addEventListener("input", () => {
    fetch("data.json").then((response) => response.json())
    .then((data) => {
      if (currency === "usd-to-som") {
        target.value = (elem.value * +data.usd).toFixed(2);
      } else if (currency === "som-to-usd") {
        target.value = (elem.value / +data.usd).toFixed(2);
      } else if (currency === "eur-to-som") {
        target.value = (elem.value * +data.eur).toFixed(2);
      } else if (currency === "som-to-eur") {
        target.value = (elem.value / +data.eur).toFixed(2);
      } else if (currency === "eur-to-usd") {
        target.value = (elem.value * (+data.usd / +data.eur)).toFixed(2);
      } else if (currency === "usd-to-eur") {
        target.value = (elem.value * (+data.eur / +data.usd)).toFixed(2);
      }
      
      elem.value === "" && (target.value = "") && (currency.value = "");
    }).catch((e) => console.error(e))}
  )};

convertation(som, usd, "som-to-usd");
convertation(usd, som, "usd-to-som");
convertation(som, eur, "som-to-eur");
convertation(eur, som, "eur-to-som");
convertation(eur, usd, "usd-to-eur");
convertation(usd, eur, "eur-to-usd");