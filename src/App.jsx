import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productlist/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import Knowledge from "./components/knowledge/Knowledge";
import Footer from "./components/footer/Footer";
import { useContext } from "react";
import {ThemeContext} from './context'


const App = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
  <div style={{backgroundColor: darkMode ? "#222" : "white", color:darkMode && "white"}}>
    <Toggle />
    <Intro />
    <About/>
    <Knowledge/>
    <ProductList/>
    <Contact/>
    <Footer/>
  </div>
  );
};

export default App;