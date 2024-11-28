import React from "react";
import { deleteTestResult } from "../api/testResults";
import { toast } from "react-toastify";

const TestResultItem = ({ results, setResults }) => {
  const removeResult = (id) => {
    setResults((result) => result.filter((item) => item.id !== id));
  };

  const handleDelete = async () => {
    try {
      await deleteTestResult(results.id);
      removeResult(results.id);
    } catch (error) {
      console.error(error);
      toast.info("삭제 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <h4>{results.user}</h4>
      <p>{results.mbtiResult}</p>
      <p>{results.createAt}</p>
      <p>{results.mbtiType}</p>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default TestResultItem;
