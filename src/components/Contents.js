import React, {useCallback} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from "swiper";

import image1 from "../image/image_01.png";
import image2 from "../image/image_02.png";
import image3 from "../image/image_03.png";
import image4 from "../image/image_04.png";

import 'swiper/css';
import "swiper/css/pagination";

const Contents = (props) => {
    const sampleImageMake = useCallback(() => {
        let imageList = [image1, image2, image3, image4];

        return imageList.map(src => {
            return (
                <div>
                    <img className="image-size" src={src}/>
                </div>);
        });
    }, []);

    const sampleSlideImage = useCallback(() => {
        let imageList = [image1, image2, image3, image4];

        return imageList.map(src => {
            return (
                <SwiperSlide>
                    <img className="image-size" src={src}/>
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
