import React from "react";
import TestResultItem from "./TestResultItem";

const TestResultList = ({ results, setResults }) => {
  return (
    <>
      {results.map((result) => (
        <TestResultItem
          key={result.id}
          results={result}
          setResults={setResults}
        />
      ))}
    </>
  );
};

export default TestResultList;
