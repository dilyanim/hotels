import './App.scss';
import Header from './components/Header';
// import Main from './components/Main';
import Popular from './components/Popular';
import { Route, Routes } from 'react-router-dom';
import AboutRouts from "./components/AboutRouts"
import Map from "./components/Map"
import Altyn from './components/Altyn';
// import Arashan from './components/Arashan';
import Son from './components/Son';
// import Kol from './components/Kol';
import Traditions from './components/Traditions';
// import TradText from './components/TradText';



// import AboutRouts from './components/AboutRouts';
// import Account from './components/Account';
import Contact from './components/Contact';
// import ContactPage from './components/ContactPage';
import CultureDetailPage from './components/CultureDetailPage';
// import CulturePage from './components/CulturePage';
import Footer from './components/Footer';
import Global from './components/Global';
// import KyrgyzDetailPage from './components/KyrgyzDeatilPage';
import KyrgyzDetail from './components/KyrgyzDetail/undex';
// import OurMission from './components/OurMission';
// import OurMissionDetail from './components/OurMissionDetail';
import Register from './components/Register';
// import Rout from './components/Rout';
// import TermsDetail from './components/TermOfUsdetail';
import TermsOfUs from './components/TermsOfUs';
import WelcomeKyrgyzstan from './components/WelcomKyrgyzstan';
// import WelcomePage from './components/WelcomePage';


function App() {
  return (
    <div className="App">
      <Header/>
     
       <Routes>
       <Route path='/main' element={<Global/>} />

        <Route path='/rout' element={<AboutRouts/>} />
        <Route path='/map' element={<Map/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/more' element={<WelcomeKyrgyzstan/>} />
        <Route path='/kyrgyz' element={<KyrgyzDetail/>} />
        <Route path='/culture' element={<CultureDetailPage/>} />
        <Route path='/tradition' element={<Traditions/>} />
        <Route path='/son' element={<Son/>} />
        <Route path='/altyn' element={<Altyn/>} />
        <Route path='/sign' element={<Register/>} />
        <Route path='/our' element={<TermsOfUs/>} />



       </Routes>
       {/* <Altyn/>
      <Arashan/>
      <Son/>
       <Kol/>
      <Traditions/>
      <TradText/>    */}
      {/* <Account/> */}
      <Footer/>
    </div>
  );
}

export default App;
