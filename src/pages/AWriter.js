import React from 'react';
import {VerticalTimeline} from 'react-vertical-timeline-component'
import Carousel from 'react-bootstrap/Carousel';
import { addMainVerticalElement, addVerticalElement, addCarouselImg } from '../writersFunctions';
import kupala from "../accerts/KupalaMain.jpg"
import kolas from "../accerts/KolasMain.jpg"
import tank from "../accerts/TankMain.jpg"
import korotkevich from "../accerts/KorotkevichMain.jpg"
import bagdanovich from "../accerts/BagdanovichMain.jpg"
import melez from "../accerts/MelezMain.jpg"
import writersImages from "../components/imagesStruct"

import writersBackground from '../accerts/bg.jpg';
import { useTranslation } from "react-i18next";
import 'react-vertical-timeline-component/style.min.css'
import './css/kupalaStyles.css';

function getDimensions(){
    var dimensions = [];
    for(var i = 0;i < 6;i++)
        dimensions.push(0);
    if(window.innerWidth >= 1000){
        dimensions[0] = 40;
        dimensions[2] = 80;
        dimensions[4] = '';
        dimensions[5] = 700;
    }
    else{
        dimensions[0] = 75;
        dimensions[2] = 100;
        dimensions[4] = 90;
        dimensions[5] = window.innerWidth * 1.4;
    }
    dimensions[1] = dimensions[0] / 100 * window.innerWidth / 1080 * 1015;
    if(window.innerWidth < 1645 && window.innerWidth > 1000)
        dimensions[3] = 0.25 * dimensions[1];
    else if(window.innerWidth >= 1645)
        dimensions[3] = 0.35 * dimensions[1];
    else
        dimensions[3] = 0.85 * dimensions[1];

    return dimensions
}

function getWriterGallery(writer){
    var gallery;
    switch(writer){
        case "kupala":
            gallery = writersImages.kupala;
            break;
        case "kolas":
            gallery = writersImages.kolas;
            break;
        case "tank":
            gallery = writersImages.tank;
            break;
        case "korotkevich":
            gallery = writersImages.korotkevich;
            break;
        case "bagdanovich":
            gallery = writersImages.bagdanovich;
            break;
        case "melez":
            gallery = writersImages.melez;
            break;
    }
    return gallery;
}

function generalInfo(writer){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t} = useTranslation();
    var writerImg, writerName, writerLife, writerYTLink, writerPlaceLink;
    var dimensions = getDimensions();
    var gallery = getWriterGallery(writer);
    switch(writer){
        case "kupala":
            writerImg = kupala;
            writerName = t('kupalaName');
            writerLife = '07.07.1882 - 28.06.1942';
            writerYTLink = 'https://www.youtube.com/embed/9FZehV2qJTk';
            writerPlaceLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94163.82319491048!2d27.523329171972176!3d53.8847207981807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!5e1!3m2!1sru!2sby!4v1669968064361!5m2!1sru!2sby';
            break;
        case "kolas":
            writerImg = kolas;
            writerName = t('nameK');
            writerLife = '22.10.1882 - 13.08.1956';
            writerYTLink = 'https://www.youtube.com/embed/RoYHoXa5y8Y';
            writerPlaceLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94163.82319491048!2d27.523329171972176!3d53.8847207981807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!5e1!3m2!1sru!2sby!4v1669968064361!5m2!1sru!2sby';
            break;
        case "tank":
            writerImg = tank;
            writerName = t('NameT');
            writerLife = '04.09.1912 - 07.08.1995';
            writerYTLink = 'https://www.youtube.com/embed/3Rt8eu_sdN0';
            writerPlaceLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184632.2278305333!2d25.1129524375164!3d54.700802087264194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dc40!2z0JLQuNC70YzQvdGO0YEsINCS0LjQu9GM0L3RjtGB0YHQutC-0LUg0LPQvtGA0L7QtNGB0LrQvtC1INGB0LDQvNC-0YPQv9GA0LDQstC70LXQvdC40LUsINCb0LjRgtCy0LA!5e1!3m2!1sru!2sby!4v1669970896912!5m2!1sru!2sby';
            break;
        case "korotkevich":
            writerImg = korotkevich;
            writerName = t('NameK');
            writerLife = '26.11.1930 - 25.07.1984';
            writerYTLink = 'https://www.youtube.com/embed/SWRk1_Y6m5w';
            writerPlaceLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1726.1680843709175!2d30.43633443725889!3d54.51451144350051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46cfe17e6225f789%3A0x157a89110f221bea!2z0JPQvtGA0L7QtNGB0LrQvtC5INGA0L7QtNC40LvRjNC90YvQuSDQtNC-0Lw!5e1!3m2!1sru!2sby!4v1669974801968!5m2!1sru!2sby';
            break;
        case "bagdanovich":
            writerImg = bagdanovich;
            writerName = t('nameB');
            writerLife = '27.11.1891 - 12.05.1917';
            writerYTLink = 'https://www.youtube.com/embed/ASaN7iVmR2I';
            writerPlaceLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184632.2278305333!2d25.1129524375164!3d54.700802087264194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dc40!2z0JLQuNC70YzQvdGO0YEsINCS0LjQu9GM0L3RjtGB0YHQutC-0LUg0LPQvtGA0L7QtNGB0LrQvtC1INGB0LDQvNC-0YPQv9GA0LDQstC70LXQvdC40LUsINCb0LjRgtCy0LA!5e1!3m2!1sru!2sby!4v1669970896912!5m2!1sru!2sby';
            break;
        case "melez":
            writerImg = melez;
            writerName = t('NameM');
            writerLife = '08.02.1921 - 09.08.1976';
            writerYTLink = 'https://www.youtube.com/embed/=NwV8EoU_14M';
            writerPlaceLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.9681273179276!2d29.661072334618883!3d51.93453491480222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x88cecd7b6c3df812!2zNTHCsDU2JzA0LjMiTiAyOcKwMzknNTYuMCJF!5e0!3m2!1sru!2sby!4v1670265588423!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
            break;
    }
    return(
        <>
            <div className = 'writerMainInfoBlock'>
                <img alt = 'Writer' src = {writerImg} style = {{width: dimensions[0] + '%', height: dimensions[1] + 'px'}}/>
                <div className = 'writerMainInfo' style={{width: dimensions[0] + '%'}}>
                    <h2>{writerName}</h2>
                    <p>{writerLife}</p>
                    <div className='googleContainer'>
                        <h3>{t('VB')}</h3>
                        <iframe
                            allowFullScreen = {true}
                            allow = 'accelerator'
                            loading = 'lazy'
                            className='ytEmbed'
                            style={{width: dimensions[2] + '%',height: dimensions[3] + 'px'}}
                            src = {'' + writerYTLink}/>
                        <h3>{t('PB')}</h3>
                        <div className='mapContainer' style={{width: dimensions[2] + '%',height: dimensions[3] + 'px'}}>
                            <iframe src = {writerPlaceLink} frameborder="0" style={{border: 0, borderRadius:'5px', width:'100%', height:'100%'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='carouselTitle'>{t('LB')}</h2>
            <Carousel>
                {addCarouselImg(gallery[0], dimensions[5], dimensions[4])}
                {addCarouselImg(gallery[1], dimensions[5], dimensions[4])}
                {addCarouselImg(gallery[2], dimensions[5], dimensions[4])}
                {addCarouselImg(gallery[3], dimensions[5], dimensions[4])}
                {addCarouselImg(gallery[4], dimensions[5], dimensions[4])}
            </Carousel>
        </>
    );
}

function writerTimeline(writer){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t} = useTranslation();
    var timeline;
    switch(writer){
        case "kupala":
            timeline = (
                <VerticalTimeline lineColor='#fff'>
                    {addMainVerticalElement('07.07.1882', (t('birthday')), '', t('kupalaChildhood'))}
                    {addVerticalElement('1903 - 1904', (t('fbK')), '', t('kupalaPublications'))}
                    {addVerticalElement('1909 - 1915', (t('stK')), '', t('kupalaEducation'))}
                    {addVerticalElement('1916', (t('mobK')), '', t('kupalaMobilization'))}
                    {addVerticalElement('1922 - 1940', (t('awK')), '', t('kupalaAfterWar'))}
                    {addMainVerticalElement('28.06.1942', (t('dK')), '', t('kupalaDeath'))}
                </VerticalTimeline>
            );
            break;
        case "kolas":
            timeline = (
                <VerticalTimeline lineColor='#fff'>
                    {addMainVerticalElement('22.10.1882', (t('bK')), '', t('birthK'))}
                    {addVerticalElement('1908 - 1914', (t('ftK')), '', t('teachingK'))}
                    {addVerticalElement('1912 - 1918', (t('tK')), '', t('placeK'))}
                    {addVerticalElement('05.1921', (t('pk')), '', t('publicationsK'))}
                    {addMainVerticalElement('13.08.1956', (t('deK')), '', t('deathK'))}
                </VerticalTimeline>
            );
            break;
        case "tank":
            timeline = (
                <VerticalTimeline lineColor='#fff'>
                    {addMainVerticalElement('04.09.1912', (t('bT')), '', t('BirthT'))}
                    {addVerticalElement('1929', (t('sT')), '', t('SchoolT'))}
                    {addVerticalElement('1936', (t('fT')), '', t('PublicationsT'))}
                    {addVerticalElement('1940 - 1966', (t('aT')), '', t('ActivityT'))}
                    {addVerticalElement('1965 - 1972', (t('pT')), '', t('PoliticsT'))}
                    {addMainVerticalElement('07.08.1995', (t('dT')), '', t('DeathT'))}
                </VerticalTimeline>
            );
            break;
        case "korotkevich":
            timeline = (
                <VerticalTimeline lineColor='#fff'>
                    {addMainVerticalElement('26.11.1930', (t('BK')), '', t('BirthK'))}
                    {addVerticalElement('1941 - 1944', (t('WK')), '', t('EvacuationK'))}
                    {addVerticalElement('1951', (t('DK')), '', t('DebuteK'))}
                    {addVerticalElement('1954 - 1958', (t('WdK')), '', t('JobK'))}
                    {addMainVerticalElement('25.07.1984', (t('DeK')), '', t('DeathK'))}
                </VerticalTimeline>
            );
            break;
        case "bagdanovich":
            timeline = (
                <VerticalTimeline lineColor='#fff'>
                    {addMainVerticalElement('27.11.1891', (t('dayB')), '', t('birthB'))}
                    {addVerticalElement('1902 - 1911', (t('studyB')), '', t('gymnasiumB'))}
                    {addVerticalElement('1907', (t('creatB')), '', t('publicationsB'))}
                    {addVerticalElement('1911 - 1916', (t('studyLB')), '', t('lyceumB'))}
                    {addVerticalElement('1916', (t('laB')), '', t('lastYearB'))}
                    {addMainVerticalElement('12.05.1917', (t('deadB')), '', t('deathB'))}
                </VerticalTimeline>
            );
            break;
        case "melez":
            timeline = (
                <VerticalTimeline lineColor='#fff'>
                    {addMainVerticalElement('08.02.1921', (t('BM')), '', t('BirthM'))}
                    {addVerticalElement('1939 - 1944', (t('TM')), '', t('PublicationsM'))}
                    {addVerticalElement('1938 - 1945', (t('TeM')), '', t('TeachingM'))}
                    {addVerticalElement('05.1921', (t('WM')), '', t('Place'))}
                    {addMainVerticalElement('09.08.1976', (t('DM')), '', t('DeathM'))}
                </VerticalTimeline>
            );
            break;
    }
    return timeline;
}

export default function rightWriters(props){
    return (
        <section style={{backgroundImage:'url(' + writersBackground + ')'}}>
            {generalInfo(props.writer)}
            {writerTimeline(props.writer)}
        </section>
    );
}