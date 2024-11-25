import { useState } from "react";
import Router from "./shared/Router";

function App() {
  const [users, setusers] = useState(null);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
