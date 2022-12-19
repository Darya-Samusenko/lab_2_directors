import React, {Component} from 'react';
import teamBackground from '../accerts/dev.jpg';
import 'react-vertical-timeline-component/style.min.css'
import './css/developersStyle.css'
import Dasha from '../accerts/d.jpg';
import Lika from '../accerts/s.jpg';
import {useTranslation} from "react-i18next";

export default function homeCarousel(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t} = useTranslation();
        var mainImgWidth, mainImgHeight;
        if(window.innerWidth >= 1000){
            mainImgWidth = 40;
        }
        else{
            mainImgWidth = 75;
        }
        mainImgHeight = mainImgWidth / 100 * window.innerWidth / 1080 * 1015;
        return (
                <section style={{backgroundImage:'url(' + teamBackground + ')'}}>
                    <div className = 'drMainInformation' >
                        <h2>{t('Team')}</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={Dasha}/>
                            <h2 className="fw-normal">{t('Dasha')}</h2>
                            <p><a href="https://github.com/Darya-Samusenko">Darya-Samusenko</a></p>
                            <p>loneluna@mail.ru</p>
                        </div>

                        <div className="col-lg-4">
                            <img src={Lika}/>
                            <h2 className="fw-normal">{t('Lika')}</h2>
                            <p><a href="https://github.com/Lika10001">Lika10001</a></p>
                            <p>likashim7@gmail.com</p>
                        </div>
                    </div>
                </section>
        )
    }
