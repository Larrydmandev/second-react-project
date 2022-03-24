import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Pages/Navbar';
import DefaultDemo from './Components/Pages/DefaultDemo';
import NextProject from './Components/Pages/NextProject';
import Rating from './Components/Pages/Rating';
import KeyFeautures from './Components/Pages/KeyFeautures';
import NewProject from './Components/Pages/NewProject';
import Footer from './Components/Pages/Footer';
import ProjectPage from './Components/file/ProjectPage'
import AboutPage from './Components/file/AboutPage'
import ContactPage from './Components/file/ContactPage';
import ErrorPage from './Components/Pages/ErrorPage';
import Header from './Components/Pages/Header';
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Header/>
      <DefaultDemo/>
      <NextProject/>
      <Rating/>
      <KeyFeautures/>
      <NewProject/>
      <Footer/> */}

      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/ProjectPage' element={<ProjectPage/>}/>
            <Route path='/AboutPage' element={<AboutPage/>}/>
            <Route path='/ContactPage' element={<ContactPage/>}/>
            <Route  path='*' element={<ErrorPage/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
