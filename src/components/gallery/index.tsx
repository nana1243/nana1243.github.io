import image1 from '../../assets/image/image1.png';
import image2 from '../../assets/image/image2.png';
import image3 from '../../assets/image/image3.png';
import image4 from '../../assets/image/image4.png';
import image5 from '../../assets/image/image5.png';
import image6 from '../../assets/image/image6.png';
import image7 from '../../assets/image/image7.png';
import image8 from '../../assets/image/image8.png';
import image9 from '../../assets/image/image9.png';

import styles from './index.module.css';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const Gallery = () => {
    const INITIAL_COUNT = 9;
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9,image5, image5, image5,image5];

    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const handleToggleMore = () => {
        if (visibleCount < images.length) {
            setVisibleCount(images.length); // 더보기: 전체 사진 공개 (카드가 아래로 늘어남)
        } else {
            setVisibleCount(INITIAL_COUNT); // 접기: 다시 9개만 보여주기

            // 💡 접었을 때 화면이 팅기지 않도록 갤러리 타이틀 위치로 스크롤을 부드럽게 올려주는 센스
            const element = document.getElementById('gallery-section');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        // 스크롤 이동을 위한 id 추가
        <div className={styles.container} id="gallery-section">
            <div className={styles.cardFrame}>
                <h2 className={styles.title}>Gallery</h2>

                <div className={styles.imageContainer}>
                    {/* visibleCount(9개)만큼 잘라서 보여줍니다 */}
                    {images.slice(0, visibleCount).map((img, idx) => (
                        <div
                            key={idx}
                            className={styles.imageWrapper}
                            onClick={() => {
                                setIndex(idx);
                                setOpen(true);
                            }}
                        >
                            <img src={img} alt={`gallery-${idx}`} />
                        </div>
                    ))}
                </div>

                {/* 💡 사진이 총 9개보다 많을 때만 더보기 버튼이 등장합니다 */}
                {images.length > INITIAL_COUNT && (
                    <button className={styles.moreButton} onClick={handleToggleMore}>
                        {visibleCount < images.length ? (
                            <>더보기</>
                        ) : (
                            <>접기</>
                        )}
                    </button>
                )}

                <Lightbox
                    styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .8)" } }}
                    open={open}
                    close={() => setOpen(false)}
                    slides={images.map(img => ({ src: img }))}
                    index={index}
                    on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
                />
            </div>
        </div>
    );
}

export default Gallery;