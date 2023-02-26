import './App.css';
import { Brandslove } from './components/Brandslove';
import { CredExperience } from './components/CredExperience';
import { Credsecurity } from './components/Credsecurity';
import { Credstory } from './components/Credstory';
import { Feelspecial } from './components/Feelspecial';
import { Header } from './components/Header';
import { Headsection } from './components/Headsection';
import { Imagesection } from './components/Imagesection';
import { Rating } from './components/Rating';
import {  Windowpeak } from './components/Windowpeak';


function App() {
  return (
    <div className="App">
      <Header />
      <Headsection />
      <Imagesection />
      <Feelspecial/>
      <Brandslove />
      <CredExperience />
      <Windowpeak />
      <Credsecurity />
      <Credstory />
      <Rating />
     
    </div>
  );
}

export default App;