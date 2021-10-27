import Hero from "./components/Hero";
import Landing from "./components/Landing";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import Photogallery from "./components/Photogallery";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Landing />
      <Services />
      <Hero />
      <Advantages />
      <Photogallery />

      {/* <div class="container">
         <Services/>  
     </div>
        <Photogallery/> 
     <div class="container">
        <Benefits />
      </div>    */}
      {/* <header className="App-header">bjbj</header> */}
    </div>
  );
}

export default App;
