import React, { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";

import TestResultList from "../components/TestResultList";

const TestResult = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const fatchTestResults = async () => {
      try {
        const data = await getTestResults();
        setResults(data);
      } catch (error) {
        console.error(error);
      }
    };
    fatchTestResults();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
      <div className="bg-white max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-10 text-center">
          모든 테스트 결과
        </h1>
        <TestResultList results={results} setResults={setResults} />
      </div>
    </div>
  );
};

export default TestResult;
