import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import PopUnder from './Components/PopUnder';
import BannerAdd from './Components/BannerAdd';
import Native from './Components/Native';
import Skim from './Components/Skim';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}>
            <Route index element={<PopUnder></PopUnder>}> </Route>
            <Route path='bannerad' element={<BannerAdd></BannerAdd>}> </Route>
            <Route path='native' element={<Native></Native>}> </Route>
            <Route path='skim' element={<Skim></Skim>}> </Route>
          </Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
