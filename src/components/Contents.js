import React, {useCallback} from "react";
import sampleImg from "../image/logo512.png";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from "swiper";

import 'swiper/css';
import "swiper/css/pagination";

const Contents = (props) => {
    const sampleImageMake = useCallback(() => {
        let image = [1, 2, 3];

        return image.map(i => {
            return (
                <div>
                    <img className="image-size" src={sampleImg}/>
                </div>);
        });
    }, []);

    const sampleSlideImage = useCallback(() => {
        let image = [1, 2, 3];

        return image.map(i => {
            return (
                <SwiperSlide>
                    <img className="image-size" src={sampleImg}/>
                </SwiperSlide>
            );
        });
    }, []);

    return (
        <div className="contents-container">
            <div className="is-web">
                {sampleImageMake()}
            </div>

            <div className="is-mobile">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    pagination={{clickable: true}}
                    modules={[Pagination]}>
                    {sampleSlideImage()}
                </Swiper>
            </div>
        </div>
    );
};

export default Contents;
