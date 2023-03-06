import "./App.css";
import { NavBar } from "./component/Navbar";
import { Banner } from "./component/Banner";
import { Skills } from "./component/Skills";
import { Projects} from "./component/Projects"
import  'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App"> 
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      </div>
      
  );
}

export default App;
