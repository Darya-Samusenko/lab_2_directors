import {VerticalTimelineElement} from 'react-vertical-timeline-component'
import {CarouselItem} from 'react-bootstrap'


export function addMainVerticalElement(eventDate, firstTitle, secondTitle, paragraph){

    return (
        <VerticalTimelineElement
            className="mainElement"
            contentStyle = {{ background: '#a41515', color:'#fff'}}
            contentArrowStyle = {{ borderRight: '9px solid  #a41515' }}
            date = {eventDate}
            iconStyle = {{ background: '#a41515'}}
        >
            <h3>{firstTitle}</h3>
            <h4>{secondTitle}</h4>
            <p>{paragraph}</p>
        </VerticalTimelineElement>
    );
}

export function addVerticalElement(eventDate, firstTitle, secondTitle, paragraph){
    return (
        <VerticalTimelineElement
            className='commonElement'
            contentStyle = {{color:'a41515'}}
            date = {eventDate}
            iconStyle={{ background: 'a41515'}}
        >
            <h3>{firstTitle}</h3>
            <h4>{secondTitle}</h4>
            <p>{paragraph}</p>
        </VerticalTimelineElement>
    );
}

export function addCarouselImg(image, itemHeight, width){
    var imgHeight;
    width === ''? imgHeight = 640 : imgHeight = '';
    return(
        <CarouselItem className = 'writerItem' style = {{
            height: itemHeight + 'px'
        }}>
            <img src = {image} width = {width + '%'} height = {imgHeight + 'px'}/>
        </CarouselItem>
    );
}

