import React from 'react';

import drBackground from '../accerts/bg.jpg';
import kupalaImg from '../accerts/KupalaMain.jpg';
import kolasImg from '../accerts/KolasMain.jpg';
import korotkevichImg from '../accerts/KorotkevichMain.jpg';
import tankImg from '../accerts/TankMain.jpg';
import bagdanovichImg from '../accerts/BagdanovichMain.jpg';
import melezImg from '../accerts/MelezMain.jpg'

import { useTranslation } from "react-i18next";

import './css/writersStyles.css'

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
                    {drBlock(t('kupala'), '(1882 - 1942)', kupalaImg, 'Kupala')}
                    {drBlock(t('kolas'), '(1882 - 1956)', kolasImg, 'Kolas')}
                    {drBlock(t('tank'), '(1912 - 1995)', tankImg, 'Tank')}
                    {drBlock(t('korotkevich'), '(1930 - 1984)', korotkevichImg, 'Korotkevich')}
                    {drBlock(t('bogdanovich'), '(1891 - 1917)', bagdanovichImg, 'Bagdanovich')}
                    {drBlock(t('melezh'), '(1921 - 1976)', melezImg, 'Melez')}
                </div>
            </section>
        </>
    );
}