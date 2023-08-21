import {useState} from "react";
import Home from "./components/Home"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Todo from "./components/Todo";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { Appprovider } from "./context/Appcontext";
import Counter from "./components/Counter";
import AS from "./components/AS";

function App() {
  
  return (
    <Appprovider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/counter" element={<Counter/>}/>
        
      </Routes>
    </Router>
    </Appprovider>
  );
}

export default App;
