import "./App.css";
import { NavBar } from "./component/Navbar";
import { Banner } from "./component/Banner";
import { Skills } from "./component/Skills";
import { Projects} from "./component/Projects"
import { Footer }  from "./component/Footer"
import  'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App"> 
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
      </div>
      
  );
}

export default App;
