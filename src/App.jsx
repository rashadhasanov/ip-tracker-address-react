const API_KEY = "b6c54fd6231b49458c24d07bb49423e1";
import React, { useEffect, useState } from "react";
import "./index.css";
import "leaflet/dist/leaflet.css";
import Fail from "./components/Fail";
import Map from "./components/Map";
import Info from "./components/Info";
import InputContainer from "./components/InputContainer";

function App() {
  const [country, setCountry] = useState(null);
  const [inputTerm, setInputTerm] = useState("158.181.42.85");
  const [ip, setIp] = useState("158.181.42.85");
  const [loading, setLoading] = useState(true);
  const [requestError, setRequestError] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${ip}&output=json`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("IP adresi tapılmadı.");
        }
        return res.json();
      })
      .then((data) => {
        setCountry(data);
        setRequestError(false);
      })
      .catch((error) => {
        setRequestError(true);
      })
      .finally(() => setLoading(false));
  }, [ip]);

  function getFetchRequest() {
    setIp(inputTerm);
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (requestError) {
    return (
      <>
        <div className="container">
          <InputContainer
            getFetchRequest={getFetchRequest}
            setInputTerm={setInputTerm}
            inputTerm={inputTerm}
          />
        </div>
        <Fail />
      </>
    );
  }

  return (
    <>
      <div className="container">
        <InputContainer
          getFetchRequest={getFetchRequest}
          setInputTerm={setInputTerm}
          inputTerm={inputTerm}
        />
        <Info country={country} />
      </div>
      <Map country={country} />
    </>
  );
}

export default App;
