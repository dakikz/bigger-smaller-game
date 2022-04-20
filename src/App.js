import { useEffect, useState } from "react";

function App() {
  const [countriesResponse, setCountriesResponse] = useState(null);

  const url = "https://restcountries.com/v2/all";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setCountriesResponse(res);
      });
  }, []);

  return (
    <div className="App">
      {countriesResponse && (
        <>
          {countriesResponse.map((item, idx) => (
            <p key={idx}>{item.name}</p>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
