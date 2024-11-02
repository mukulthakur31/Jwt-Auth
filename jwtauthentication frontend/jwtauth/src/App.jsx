
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom"
import Signup from "./components/Signup";
import { Header } from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
