import React from "react";
// const sdk = require("api")("@tron/v4.7.2#19cpcn4pollds6o2o");
// import sdk from "api";
import axios from "axios";

function App() {
  const getData = async () => {
    console.log("get data");
    try {
      const response = await axios.get(
        "https://api.trongrid.io/wallet/getaccount",
        {
          params: {
            address: "TK2HxDagVEKk9vykJZbpqB7P1EVANJvkhY",
            visible: true,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={() => getData()}>GetData</button>
    </div>
  );
}

export default App;
