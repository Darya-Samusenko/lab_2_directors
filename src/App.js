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
import AWriter from "./pages/OneDirector"
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
                    <Route exact path = '/Kupala' element = {<AWriter writer = "kupala"/>}/>
                    <Route exact path = '/Kolas' element = {<AWriter writer = "kolas"/>}/>
                    <Route exact path = '/Tank' element = {<AWriter writer = "tank"/>}/>
                    <Route exact path = '/Korotkevich' element = {<AWriter writer = "korotkevich"/>}/>
                    <Route exact path = '/Bagdanovich' element = {<AWriter writer = "bagdanovich"/>}/>
                    <Route exact path = '/Melez' element = {<AWriter writer = "melez"/>}/>
                </Routes>
            </Router>
    </div>
  );
}

export default App;
