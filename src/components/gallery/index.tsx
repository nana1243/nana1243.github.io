import image1 from '../../assets/image/image1.png';
import image2 from '../../assets/image/image2.png';
import image3 from '../../assets/image/image3.png';
import image4 from '../../assets/image/image4.png';
import image5 from '../../assets/image/image5.png';
import image6 from '../../assets/image/image6.png';
import image7 from '../../assets/image/image7.png';
import image8 from '../../assets/image/image8.png';
import image9 from '../../assets/image/image9.png';
import gallery from '@/assets/image/gallery.png';

import styles from './index.module.css';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import {useState} from "react";

const Gallery = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <div style={{backgroundColor: '#f0f0f0'}}>
            <img
                src={gallery}
                alt="gallery"/>
            <div className={styles.container}>
                {images.map((img, index) => (
                    <div key={index} className={styles.imageWrapper}
                         onClick={(e) => {
                             setIndex(index);
                             setOpen(true);
                         }}

                    >
                        <img src={img} alt={`gallery-${index}`}
                        />
                    </div>
                ))}
                <Lightbox
                    styles={{
                        root: {"--yarl__color_backdrop": "rgba(0, 0, 0, .8)"}, //스타일 속성 추가
                    }}
                    open={open}
                    close={() => setOpen(false)}
                    slides={images.map(img => ({src: img}))}
                    index={index}
                    on={{view: ({index: currentIndex}) => setIndex(currentIndex)}}
                />
            </div>
        </div>
    )
}


export default Gallery;