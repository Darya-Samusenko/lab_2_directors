import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./components/Header";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import transResources from './components/transl'

import Home from "./pages/Home";
import ADir from "./pages/OneDirector"
import Directors from "./pages/AllPeople";

i18n
.use(initReactI18next)
.use(LanguageDetector)
.init({
  supportedLngs: ['ru', 'en'],
  fallbackLng: "ru",
  resources: transResources
});

function App() {
  return (
    <div className="App">
     <Header/>
     <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/directors" element={<Directors/>}/>
                    <Route exact path = '/Orlov' element = {<ADir writer = "orlov"/>}/>
                    <Route exact path = '/Arshanski' element = {<ADir writer = "arsh"/>}/>
                    <Route exact path = '/Ptashuk' element = {<ADir writer = "ptash"/>}/>
                    <Route exact path = '/Turov' element = {<ADir writer = "turov"/>}/>
                    <Route exact path = '/Cananovich' element = {<ADir writer = "conan"/>}/>
                    <Route exact path = '/Tsvetkov' element = {<ADir writer = "tsvet"/>}/>
                </Routes>
            </Router>
    </div>
  );
}

export default App;
