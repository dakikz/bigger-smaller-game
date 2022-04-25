import { useEffect, useState } from "react";
import styled from "styled-components";

const ComparisonOuter = styled.div`
  display: flex;
  flex-direction: column;
`;
const CountryBoxA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid green;
  height: 50vh;
  background-color: #cccccc;
`;
const CountryBoxB = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid green;
  height: 50vh;
  background-color: #cccccc;
`;

function App() {
  const [countriesResponse, setCountriesResponse] = useState(null);
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);

  const url = "https://restcountries.com/v2/all";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        // console.log(res);
        setCountriesResponse(res);
      });
  }, []);

  let randCountry;
  let randCountry2;

  const randCountryF = () => {
    randCountry = Math.floor(Math.random() * countriesResponse.length);
  };
  const randCountryS = () => {
    randCountry2 = Math.floor(Math.random() * countriesResponse.length);
    if (randCountry2 === randCountry) {
      randCountry2 += 1;
    }
  };
  const more = () => {
    if (
      countriesResponse[numberB].population >=
      countriesResponse[numberA].population
    ) {
      console.log("NumA: ", countriesResponse[numberA].population);
      console.log("NumB: ", countriesResponse[numberB].population);
      console.log("Win");
    } else {
      console.log("Lose");
    }
    randCountryS();
    setNumberA(randCountry);
    setNumberB(randCountry2);
  };
  const less = () => {
    if (
      countriesResponse[numberA].population >=
      countriesResponse[numberB].population
    ) {
      console.log("NumA: ", countriesResponse[numberA].population);
      console.log("NumB: ", countriesResponse[numberB].population);
      console.log("Win");
    } else {
      console.log("Lose");
    }
    randCountryS();
    setNumberA(randCountry);
    setNumberB(randCountry2);
  };

  return (
    <div className="App">
      {countriesResponse && (
        <ComparisonOuter>
          <CountryBoxA>
            {randCountryF()}
            <p>{countriesResponse[numberA].name}</p>
            <h3>{countriesResponse[numberA].population.toLocaleString()}</h3>
          </CountryBoxA>
          <CountryBoxB>
            {randCountryS()}
            <p>{countriesResponse[numberB].name}</p>
            <h3>{countriesResponse[numberB].population.toLocaleString()}</h3>
            <button onClick={() => more()}>More</button>
            <button onClick={() => less()}>Less</button>
          </CountryBoxB>
        </ComparisonOuter>
      )}
    </div>
  );
}

export default App;
