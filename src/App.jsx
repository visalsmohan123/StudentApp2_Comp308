import { useState } from "react";
import "./App.css";
import StudentForm from 'studentapp1/StudentForm';
import Header from "./Header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <StudentForm />
    </>
  );
}

export default App;
