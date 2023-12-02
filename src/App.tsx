import React from "react";
import { Login } from "./Components/Login/Login";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Header } from "./Components/Header/Header";
const token = localStorage.getItem("token");
function App() {
  return token != null ? <Sidebar /> : <Login />;
}

export default App;
