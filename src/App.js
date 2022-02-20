import React from "react";
//import pages
import AboutUs from "./pages/AboutUs";
//import global styles
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
