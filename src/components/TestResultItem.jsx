import React, { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";

const TestResultItem = ({ results, setResults }) => {
  console.log(results);
  return (
    <>
      {results.map((result, id) => (
        <div key={id}>
          <h4>{result.user}</h4>
          <p>{result.mbtiResult}</p>
          <p>{result.createAt}</p>
          <p>{result.mbtiType}</p>
        </div>
      ))}
    </>
  );
};

export default TestResultItem;
