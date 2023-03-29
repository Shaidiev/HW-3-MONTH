const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur");

const convertation = (elem, target, currency) => {
  elem.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();

    request.addEventListener("load", () => {
      const data = JSON.parse(request.response);
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
    }
  )})};

convertation(som, usd, "som-to-usd");
convertation(usd, som, "usd-to-som");
convertation(som, eur, "som-to-eur");
convertation(eur, som, "eur-to-som");
convertation(eur, usd, "usd-to-eur");
convertation(usd, eur, "eur-to-usd");