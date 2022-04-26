import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ComparisonOuter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const CountryBoxA = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #cccccc;
  height: 50vh;
  background-color: #111111;
  color: #ffffff;
`;
const CountryBoxB = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #cccccc;
  height: 50vh;
  background-color: #111111;
  color: #ffffff;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  & img {
    max-width: 200px;
    width: 100%;
    max-height: 180px;
    height: auto;
  }
`;

const ButtonCustom = styled.button`
  border: 2px solid #cccccc;
  background-color: #cccccc;
  border-radius: 100px;
  width: 150px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: transparent;
    color: #cccccc;
  }
`;
function App() {
  const [countriesResponse, setCountriesResponse] = useState(null);
  const [checkedCountries, setCheckedCountries] = useState([]);
  const [numberA, setNumberA] = useState();
  const [numberB, setNumberB] = useState();
  const isReady = useRef(false);

  const url = "https://restcountries.com/v2/all";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .catch((err1) => {
        isReady.current = false;
      })
      .then((res) => {
        // console.log(res);
        setCountriesResponse(res);
        let randomNumber = Math.floor(Math.random() * res.length);
        setNumberA(randomNumber);
        setNumberB(randomNumber + 1);

        isReady.current = true;
      })
      .catch((err) => {
        console.log(err);
        isReady.current = true;
      });
  }, []);

  const less = () => {
    if (
      countriesResponse[numberB].population <
      countriesResponse[numberA].population
    ) {
      console.log("win");
      let newCountry = Math.floor(
        Math.random() *
          countriesResponse
            .map((x) => x.name)
            .filter((x) => countriesResponse.map((x) => x.name).indexOf(x) > -1)
            .length
      );
      setNumberA(numberB);
      setNumberB(newCountry);
      let checkedArray = [...checkedCountries];
      checkedArray.push(countriesResponse[newCountry].name);
      setCheckedCountries(checkedArray);
    } else {
      console.log("lose");
    }
  };
  const more = () => {
    if (
      countriesResponse[numberB].population >
      countriesResponse[numberA].population
    ) {
      console.log("win");
      setNumberA(numberB);

      let newCountry = Math.floor(
        Math.random() *
          countriesResponse
            .map((x) => x.name)
            .filter((x) => countriesResponse.map((x) => x.name).indexOf(x) > -1)
            .length
      );
      setNumberB(newCountry);
      let checkedArray = [...checkedCountries];
      checkedArray.push(countriesResponse[newCountry].name);
      setCheckedCountries(checkedArray);
    } else {
      console.log("lose");
    }
    // console.log(checkedCountries);
  };

  return (
    <div className="App">
      {!isReady.current && <p>Loading...</p>}
      {isReady.current && (
        <ComparisonOuter>
          <CountryBoxA>
            <h2>{countriesResponse[numberA].name}</h2>
            <p
              style={{
                position: "absolute",
                top: "5px",
                right: "15px",
                fontWeight: "600",
                color: "red",
              }}
            >
              Score: {checkedCountries.length}
            </p>
            <ImageContainer>
              <img
                src={countriesResponse[numberA].flags.svg}
                alt={`${countriesResponse[numberA].name} flag`}
              />
            </ImageContainer>
            <p>has</p>
            <h3>{countriesResponse[numberA].population.toLocaleString()}</h3>
            <p>current population</p>
            <p
              style={{
                position: "absolute",
                bottom: "-23px",
                color: "red",
                fontSize: "35px",
              }}
            >
              VS
            </p>
          </CountryBoxA>
          <CountryBoxB>
            <h2>{countriesResponse[numberB].name}</h2>
            <ImageContainer>
              <img
                src={countriesResponse[numberB].flags.svg}
                alt={`${countriesResponse[numberA].name} flag`}
              />
            </ImageContainer>
            <p>has</p>
            <ButtonCustom onClick={more}>More</ButtonCustom>
            <p>or</p>
            <ButtonCustom onClick={less}>Less</ButtonCustom>
            <p>
              than <strong>{countriesResponse[numberA].name}</strong>
            </p>

            <h3>{countriesResponse[numberB].population.toLocaleString()}</h3>
          </CountryBoxB>
        </ComparisonOuter>
      )}
    </div>
  );
}

export default App;
