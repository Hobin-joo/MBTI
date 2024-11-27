import React from "react";
import { deleteTestResult } from "../api/testResults";

const TestResultItem = ({ results, setResults }) => {
  const handelDelete = async () => {
    await deleteTestResult();
    
  };

  return (
    <>
      {results.map((result, id) => (
        <div key={id}>
          <h4>{result.user}</h4>
          <p>{result.mbtiResult}</p>
          <p>{result.createAt}</p>
          <p>{result.mbtiType}</p>
          <button onClick={handelDelete}>삭제</button>
        </div>
      ))}
    </>
  );
};

export default TestResultItem;
