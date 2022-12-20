import React from 'react';
import {VerticalTimeline} from 'react-vertical-timeline-component'
import Carousel from 'react-bootstrap/Carousel';
import { addMainVerticalElement, addVerticalElement, addCarouselImg } from '../drFunctions';
import orlov from "../accerts/orlovPortrait.jpeg"
import arsh from "../accerts/arshPortrait.jpg"
import ptash from "../accerts/ptashukPortrait.jpg"
import turov from "../accerts/turovPortrait.jpg"
import conan from "../accerts/cananovichPortrait.jpg"
import tsvet from "../accerts/tsvetkovPortrait.jpg"
import drImages from "../components/imagesStruct"

import drBackground from '../accerts/bg.jpg';
import { useTranslation } from "react-i18next";
import 'react-vertical-timeline-component/style.min.css'
import './css/singlSt.css';

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

function getDirectorGallery(director){
    var gallery;
    switch(director){
        case "orlov":
            gallery = drImages.orlov;
            break;
        case "arsh":
            gallery = drImages.arsh;
            break;
        case "ptash":
            gallery = drImages.ptash;
            break;
        case "turov":
            gallery = drImages.turov;
            break;
        case "conan":
            gallery = drImages.conan;
            break;
        case "tsvet":
            gallery = drImages.tsvet;
            break;
    }
    return gallery;
}

function generalInfo(director){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t} = useTranslation();
    var drImg, drName, drLife, drYTLink, drPlaceLink;
    var dimensions = getDimensions();
    var gallery = getDirectorGallery(director);
    switch(director){//пересмотреть ссылки на кино
        case "orlov":
            drImg = orlov;
            drName = t('orlov');
            drLife = '06.01.1938–...';
            drYTLink = 'https://youtu.be/embed/01k3OeSD87c';
            drPlaceLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94163.82319491048!2d27.523329171972176!3d53.8847207981807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!5e1!3m2!1sru!2sby!4v1669968064361!5m2!1sru!2sby';
            break;
        case "arsh":
            drImg = arsh;
            drName = t('arsh');
            drLife = ' 25.08.1899-06.07.1974';
            drYTLink = 'https://youtu.be/embed/AFZKh5iB_xE';
            drPlaceLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94163.82319491048!2d27.523329171972176!3d53.8847207981807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!5e1!3m2!1sru!2sby!4v1669968064361!5m2!1sru!2sby';
            break;
        case "ptash":
            drImg = ptash;
            drName = t('ptash');
            drLife = '28.01.1943–26.04.2002';
            drYTLink = 'https://youtu.be/embed/BQFSmQ2rFRM';
            drPlaceLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184632.2278305333!2d25.1129524375164!3d54.700802087264194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dc40!2z0JLQuNC70YzQvdGO0YEsINCS0LjQu9GM0L3RjtGB0YHQutC-0LUg0LPQvtGA0L7QtNGB0LrQvtC1INGB0LDQvNC-0YPQv9GA0LDQstC70LXQvdC40LUsINCb0LjRgtCy0LA!5e1!3m2!1sru!2sby!4v1669970896912!5m2!1sru!2sby';
            break;
        case "turov":
            drImg = turov;
            drName = t('turov');
            drLife = '25.10.1936-31.10.1996';
            drYTLink = 'https://youtu.be/embed/f_ThXk82skA';
            drPlaceLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1726.1680843709175!2d30.43633443725889!3d54.51451144350051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46cfe17e6225f789%3A0x157a89110f221bea!2z0JPQvtGA0L7QtNGB0LrQvtC5INGA0L7QtNC40LvRjNC90YvQuSDQtNC-0Lw!5e1!3m2!1sru!2sby!4v1669974801968!5m2!1sru!2sby';
            break;
        case "conan":
            drImg = conan;
            drName = t('conan');
            drLife = '05.08.1977–...';
            drYTLink = 'https://youtu.be/embed/CDSw4SjQhBQ';
            drPlaceLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184632.2278305333!2d25.1129524375164!3d54.700802087264194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dc40!2z0JLQuNC70YzQvdGO0YEsINCS0LjQu9GM0L3RjtGB0YHQutC-0LUg0LPQvtGA0L7QtNGB0LrQvtC1INGB0LDQvNC-0YPQv9GA0LDQstC70LXQvdC40LUsINCb0LjRgtCy0LA!5e1!3m2!1sru!2sby!4v1669970896912!5m2!1sru!2sby';
            break;
        case "tsvet":
            drImg = tsvet;
            drName = t('tsvet');
            drLife = '14.02.1941-25.01.2011';
            drYTLink = 'https://youtu.be/embed/xeQYVvKr5Mo';
            drPlaceLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.9681273179276!2d29.661072334618883!3d51.93453491480222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x88cecd7b6c3df812!2zNTHCsDU2JzA0LjMiTiAyOcKwMzknNTYuMCJF!5e0!3m2!1sru!2sby!4v1670265588423!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
            break;
    }
    return(
        <>
            <div className = 'drMainInfoBlock'>
                <img alt = 'Writer' src = {drImg} style = {{width: dimensions[0] + '%', height: dimensions[1] + 'px'}}/>
                <div className = 'directorInfo' style={{width: dimensions[0] + '%'}}>
                    <h2>{drName}</h2>
                    <p>{drLife}</p>
                    <div className='googleContainer'>
                        <h3>{t('VI')}</h3>
                        <iframe
                            allowFullScreen = {true}
                            allow = 'accelerator'
                            loading = 'lazy'
                            className='ytEmbed'
                            style={{width: dimensions[2] + '%',height: dimensions[3] + 'px'}}
                            src = {'' + drYTLink}/>
                        <h3>{t('PL')}</h3>
                        <div className='mapContainer' style={{width: dimensions[2] + '%',height: dimensions[3] + 'px'}}>
                            <iframe src = {drPlaceLink} frameborder="0" style={{border: 0, borderRadius:'5px', width:'100%', height:'100%'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='carouselTitle'>{t('LT')}</h2>
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

function directorTimeline(director){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t} = useTranslation();
    var timeline;
    switch(director){
        case "orlov":
            timeline = (
                <VerticalTimeline lineColor='#fff'>
                    {addMainVerticalElement('1938', (t('OrTLT1')), '', t('OrTL1'))}
                    {addVerticalElement('1958', (t('OrTLT2')), '', t('OrTL2'))}
                    {addVerticalElement('1971', (t('OrTLT3')), '', t('OrTL3'))}
                </VerticalTimeline>
            );
            break;
        case "arsh":
            timeline = (
                <VerticalTimeline lineColor='#fff'>
                    {addMainVerticalElement('1917-1927', (t('ArTLT1')), '', t('ArTL1'))}
                    {addVerticalElement('1931', (t('ArTLT2')), '', t('ArTL2'))}
                    {addVerticalElement('1941-1947', (t('ArTLT3')), '', t('ArTL3'))}
                    {addVerticalElement('1950', (t('ArTLT4')), '', t('ArTL4'))}

                </VerticalTimeline>
            );
            break;
        case "ptash":
            timeline = (
                <VerticalTimeline lineColor='#fff'>
                    {addMainVerticalElement('1967', (t('PtTLT1')), '', t('PtTL1'))}
                    {addVerticalElement('1982-1986', (t('PtTLT2')), '', t('PtTL2'))}
                    {addVerticalElement('1982,1990', (t('PtTLT3')), '', t('PtTL3'))}
                    {addVerticalElement('2002', (t('PtTLT4')), '', t('PtTL4'))}

                </VerticalTimeline>
            );
            break;
        case "turov":
            timeline = (
                <VerticalTimeline lineColor='#fff'>
                    {addMainVerticalElement('1936', (t('TuTLT1')), '', t('TuTL1'))}
                    {addVerticalElement('1959', (t('TuTLT2')), '', t('TuTL2'))}
                    {addVerticalElement('1989-1996', (t('TuTLT3')), '', t('TuTL3'))}
                    {addVerticalElement('1996', (t('TuTLT4')), '', t('TuTL4'))}

                </VerticalTimeline>
            );
            break;
        case "conan":
            timeline = (
                <VerticalTimeline lineColor='#fff'>
                    {addMainVerticalElement('1999', (t('CaTLT1')), '', t('CaTL1'))}
                    {addVerticalElement('2004', (t('CaTLT2')), '', t('CaTL2'))}
                    {addVerticalElement('2004', (t('CaTLT3')), '', t('CaTL3'))}
                    {addVerticalElement('2005', (t('CaTLT4')), '', t('CaTL4'))}

                </VerticalTimeline>
            );
            break;
        case "tsvet":
            timeline = (
                <VerticalTimeline lineColor='#fff'>
                    {addMainVerticalElement('1941', (t('TsTLT1')), '', t('TsTL1'))}
                    {addVerticalElement('1963', (t('TsTLT2')), '', t('TsTL2'))}
                    {addVerticalElement('1969', (t('TsTLT3')), '', t('TsTL3'))}
                    {addVerticalElement('2001', (t('TsTLT4')), '', t('TsTL4'))}
                    {addMainVerticalElement('2011', (t('TsTLT5')), '', t('TsTL5'))}
                </VerticalTimeline>
            );
            break;
    }
    return timeline;
}

export default function rightDirectors(props){
    return (
        <section style={{backgroundImage:'url(' + drBackground + ')'}}>
            {generalInfo(props.person)}
            {directorTimeline(props.person)}
        </section>
    );
}