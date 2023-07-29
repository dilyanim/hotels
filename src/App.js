import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Popular from './components/Popular';
// import Altyn from './components/Altyn';
// import Arashan from './components/Arashan';
// import Son from './components/Son';
// import Kol from './components/Kol';
// import Traditions from './components/Traditions';
// import TradText from './components/TradText';





function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Popular/>
       {/* <Altyn/>
      <Arashan/>
      <Son/>
       <Kol/>
      <Traditions/>
      <TradText/>    */}
    </div>
  );
}

export default App;
