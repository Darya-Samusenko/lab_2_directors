import React from 'react';

import drBackground from '../accerts/bg.jpg';
import orlovImg from '../accerts/orlovPortrait.jpeg';
import arshImg from '../accerts/arshPortrait.jpg';
import ptashImg from '../accerts/ptashukPortrait.jpg';
import turovImg from '../accerts/turovPortrait.jpg';
import conanImg from '../accerts/cananovichPortrait.jpg';
import tsvetImg from '../accerts/tsvetkovPortrait.jpg'

import { useTranslation } from "react-i18next";

import './css/dirSt.css'

function drBlock(name, lifetime, image, link){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t} = useTranslation();
    var blockWidth;
    window.innerWidth >= 1000 ? blockWidth = 27 : blockWidth = 75; 
    var imgHeight = window.innerWidth * blockWidth / 100 * 350 / 412;
    console.log(imgHeight);
    return (<div
        className = 'drBlock'
        style = {{
            width: blockWidth + '%', 
        }}
        >
            <div
                className = 'mainImage'
                style={{
                    backgroundImage: 'url(' + image + ')',
                    height: imgHeight + 'px'
                }}>
            </div>
            <h2>{name}</h2>
            <p>{lifetime}</p>
            <a href = {link}>{t('Learn')}</a>
        </div>);
}

export default function Directors(){
    const {t} = useTranslation();
    return (
        <>
            <section style = {{
                backgroundImage: 'url(' + drBackground + ')',
            }}>
                <h1>{t('Directors')}</h1>
                <div className = 'directorsContainer'>
                    {drBlock(t('orlov'), '(1882 - 1942)', orlovImg, 'Orlov')}
                    {drBlock(t('arsh'), '(1899 - 1974)', arshImg, 'Arshanski')}
                    {drBlock(t('ptash'), '(1912 - 1995)', ptashImg, 'Ptashuk')}
                    {drBlock(t('turov'), '(1930 - 1984)', turovImg, 'Turov')}
                    {drBlock(t('conan'), '(1891 - 1917)', conanImg, 'Cananovich')}
                    {drBlock(t('tsvet'), '(1921 - 1976)', tsvetImg, 'Tsvetkov')}
                </div>
            </section>
        </>
    );
}