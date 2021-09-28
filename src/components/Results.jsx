import React from "react";

const Results = (props) => {
  return (
    <>
      <h1>Results</h1>
      <div className="searchResultsWrapper">
        {props.results.map((result, index) => {
          return (
            <div className="searchResults" key={index}>
              <h3>
                {result.title}
                <a href={`http://en.wikipedia.org/wiki/${result.title}`}></a>
              </h3>
              <a href={`http://en.wikipedia.org/wiki/${result.title}`}>
                http://en.wikipedia.org/wiki/{result.title.replace(/ /g, "_")}
              </a>
              <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Results;
