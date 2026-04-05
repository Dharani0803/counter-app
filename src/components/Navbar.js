import { useState } from "react";

function Navbar({ darkMode, setDarkMode }){

const today = new Date().toLocaleDateString("en-GB", {
  weekday: "short",
  day: "2-digit",
  month: "short",
  year: "numeric"
});

function toggleTheme() {
    setDarkMode(!darkMode);
  }

return(
        <div id="nav">
        <nav>
        <h1><i class="fa-brands fa-dropbox"></i>  Counter</h1>
        <div class="nav2"><button onClick={toggleTheme}>
            <i className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
          </button>
        <p>{today}</p>
          </div></nav>
          </div>
)
}

export  default Navbar