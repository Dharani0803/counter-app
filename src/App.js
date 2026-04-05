import Counter from "./components/Counter"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { useState } from "react";

function App(){
    
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Counter/>
      <Footer/>
    </div>
  );
}

export default App