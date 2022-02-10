const countriesArr = [
  { country: "Cyprus", population: "1,000,000", continent: "Europe" },
  { country: "Greece", population: "10,000,000", continent: "Europe" },
  { country: "United Kingdom", population: "69,000,000", continent: "Europe" },
  { country: "China", population: "1,439,459,000", continent: "Asia" },
  { country: "India", population: "1,380,000,000", continent: "Asia" },
  { country: "Brazil", population: "1,000,000", continent: "South America" },
];

let allCountries = countriesArr.map((x) => {
  let rObj = {};
  rObj[x.country] = x.population;
  return rObj;
});

const randomCountry = (x) => {
  x = Math.floor(Math.random() * countriesArr.length);
  return allCountries[x];
};

console.log(randomCountry());

document.getElementById("mainGame").innerHTML = JSON.stringify(randomCountry());
let objA = {
  name: "christina",
  degree: "music",
  instrument: "flute",
};

for (let key in objA) {
  console.log(key + ":", objA[key]);
}
