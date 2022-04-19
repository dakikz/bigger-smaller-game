const countriesArr = [
  { country: "Cyprus", population: "1,000,000", continent: "Europe" },
  { country: "Greece", population: "10,000,000", continent: "Europe" },
  { country: "United Kingdom", population: "69,000,000", continent: "Europe" },
  { country: "China", population: "1,439,459,000", continent: "Asia" },
  { country: "India", population: "1,380,000,000", continent: "Asia" },
  { country: "Brazil", population: "1,000,000", continent: "South America" },
];

let allCountries = countriesArr.map((x) => {
  let mappedObject = { country: "", population: "" };
  mappedObject.country = x.country;
  mappedObject.population = x.population.replace(/,/g, "");
  return mappedObject;
});

const randomCountry = () => {
  let x = Math.floor(Math.random() * countriesArr.length); // pou to 0 ws to 5
  return allCountries[x];
};

let item = randomCountry();
let item2 = randomCountry();

if (item === item2) {
  item2 = randomCountry();
}

//TODO: Prepei na fefkei pou to array to item pou edeikse idi
const clicked1 = () => {
  if (item.population > item2.population) {
    console.log("YOU WON!");
  } else {
    console.log("You lost...");
  }
  item = randomCountry();
  document.getElementById("country1").innerHTML = item.country;
};
const clicked2 = () => {
  if (item.population < item2.population) {
    console.log("YOU WON!");
  } else {
    console.log("You lost...");
  }
  item2 = randomCountry();
  document.getElementById("country2").innerHTML = item2.country;
};
