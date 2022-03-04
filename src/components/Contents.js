import React, {useCallback} from "react";
import sampleImg from "../image/logo512.png";
import ImageGallery from "react-image-gallery";

const Contents = (props) => {
    const images = [
        {
            original: sampleImg,
            thumbnail: sampleImg
        },
        {
            original: sampleImg,
            thumbnail: sampleImg
        },
        {
            original: sampleImg,
            thumbnail: sampleImg
        }
    ];

    const sampleImageMake = useCallback(() => {
        let image = [1, 2, 3];

        return image.map(i => {
            return (
                <div>
                    <img src={sampleImg}/>
                </div>);
        });
    }, []);

    return (
        <div className="contents-container">
            <div className="is-web">
                {sampleImageMake()}
            </div>

            <div className="is-mobile">
                <ImageGallery
                    items={images}
                    infinite={false}
                    showBullets={true}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showThumbnails={false}/>
            </div>
        </div>
    );
};

export default Contents;
