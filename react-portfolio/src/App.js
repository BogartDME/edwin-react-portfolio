import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"


function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/" element={<About />} />
              <Route path="/" element={<Contact />} />
            </Routes>  
          </div>
        {/* <Footer />   */}
      </Router>
    </div>
  );
}

export default App;
