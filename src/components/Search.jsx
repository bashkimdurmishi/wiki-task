import React from "react";
import Logo from "../Resources/Wiki_Logo.png";
const Search = (props) => {
  const onFormSubmitSearch = (e) => {
    e.preventDefault();
    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
      action: "query",
      list: "search",
      srsearch: props.search,
      format: "json",
      srlimit: 5,
      prop: "text",
      section: 0,
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) {
      url += "&" + key + "=" + params[key];
    });

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        props.setResults(response.query.search);
        console.log("response", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="page-header">
      <img src={Logo} alt="" />
      <h1>Wikipedia Search Api</h1>
      <form className="search-box" action="">
        <input
          type="text"
          value={props.search}
          onChange={(e) => props.setSearch(e.target.value)}
          placeholder="Search..."
          autoFocus={true}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (props.search.length > 2) onFormSubmitSearch(e);
            else alert("Search query requires at least 3 characters!");
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
