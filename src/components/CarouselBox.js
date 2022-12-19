import React, {Component} from 'react';
import AWriter from "../pages/AWriter";
import HomeCarousel from "../pages/homeCarousel";



class CarouselBox extends Component {
    render() {
        return (
            <div>
                <HomeCarousel/>
                <AWriter writer = "melez"/>
            </div>
        );
    }
}

export default CarouselBox;