import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";
import "./style/index.scss";

const App = () => {
  const [league, setLeague] = useState(2019);
  const [whatToShow, setWhatToShow] = useState("matches?status=FINISHED");
  return (
    <div>
      <Header
        title={"Footballhalla"}
        subtitle={"The majestic hall of football"}
      />
      <Form
        changeLeague={(league) => setLeague(league)}
        whatToShow={(value) => setWhatToShow(value)}
        label={"pick your favourite league: "}
      />
      <Table league={league} whatToShow={whatToShow} />
    </div>
  );
};

export default App;
