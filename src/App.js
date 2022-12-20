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
                    <Route exact path= "lab_2_directors/" element={<Home/>}/>
                    <Route exact path= "lab_2_directors/directors" element={<Directors/>}/>
                    <Route exact path = 'lab_2_directors/Orlov' element = {<ADir person = "orlov"/>}/>
                    <Route exact path = 'lab_2_directors/Arshanski' element = {<ADir person = "arsh"/>}/>
                    <Route exact path = 'lab_2_directors/Ptashuk' element = {<ADir person = "ptash"/>}/>
                    <Route exact path = 'lab_2_directors/Turov' element = {<ADir person = "turov"/>}/>
                    <Route exact path = 'lab_2_directors/Cananovich' element = {<ADir person = "conan"/>}/>
                    <Route exact path = 'lab_2_directors/Tsvetkov' element = {<ADir person = "tsvet"/>}/>
                </Routes>
            </Router>
    </div>
  );
}

export default App;
