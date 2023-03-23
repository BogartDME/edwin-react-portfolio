import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main"
import About from "./components/About/About"


function App() {
  return (
    <div className="mx-auto mt-8">
      <Sidebar/>
      <Main/>
      <About/>
    </div>
  );
}

export default App;
