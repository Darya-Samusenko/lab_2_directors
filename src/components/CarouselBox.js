import React, {Component} from 'react';
import ADir from "../pages/OneDirector";
import HomeCarousel from "../pages/homeCarousel";



class CarouselBox extends Component {
    render() {
        return (
            <div>
                <HomeCarousel/>
                <ADir writer = "arsh"/>
            </div>
        );
    }
}

export default CarouselBox;