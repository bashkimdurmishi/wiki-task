import React, { useState } from "react";
import "./App.css";
import Results from "./components/Results";
import Search from "./components/Search";

function App() {
  let [search, setSearch] = useState("");
  let [results, setResults] = useState([]);
  return (
    <div className="App">
      <Search
        search={search}
        setSearch={setSearch}
        setResults={setResults}
      ></Search>
      <Results results={results}></Results>
    </div>
  );
}

export default App;
