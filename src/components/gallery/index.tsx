import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import styles from './index.module.css';

// 썸네일 - 갤러리 목록용
import thumb1 from '../../assets/image/thumb/image1.webp';
import thumb2 from '../../assets/image/thumb/image2.webp';
import thumb3 from '../../assets/image/thumb/image3.webp';
import thumb4 from '../../assets/image/thumb/image4.webp';
import thumb5 from '../../assets/image/thumb/image5.webp';
import thumb6 from '../../assets/image/thumb/image6.webp';
import thumb7 from '../../assets/image/thumb/image7.webp';
import thumb8 from '../../assets/image/thumb/image8.webp';
import thumb9 from '../../assets/image/thumb/image9.webp';
import thumb10 from '../../assets/image/thumb/image10.webp';
import thumb11 from '../../assets/image/thumb/image11.webp';
import thumb12 from '../../assets/image/thumb/image12.webp';
import thumb13 from '../../assets/image/thumb/image13.webp';
import thumb14 from '../../assets/image/thumb/image14.webp';
import thumb15 from '../../assets/image/thumb/image15.webp';
import thumb16 from '../../assets/image/thumb/image16.webp';
import thumb17 from '../../assets/image/thumb/image17.webp';
import thumb18 from '../../assets/image/thumb/image18.webp';

// Lightbox 확대용
import large1 from '../../assets/image/large/image1.webp';
import large2 from '../../assets/image/large/image2.webp';
import large3 from '../../assets/image/large/image3.webp';
import large4 from '../../assets/image/large/image4.webp';
import large5 from '../../assets/image/large/image5.webp';
import large6 from '../../assets/image/large/image6.webp';
import large7 from '../../assets/image/large/image7.webp';
import large8 from '../../assets/image/large/image8.webp';
import large9 from '../../assets/image/large/image9.webp';
import large10 from '../../assets/image/large/image10.webp';
import large11 from '../../assets/image/large/image11.webp';
import large12 from '../../assets/image/large/image12.webp';
import large13 from '../../assets/image/large/image13.webp';
import large14 from '../../assets/image/large/image14.webp';
import large15 from '../../assets/image/large/image15.webp';
import large16 from '../../assets/image/large/image16.webp';
import large17 from '../../assets/image/large/image17.webp';
import large18 from '../../assets/image/large/image18.webp';

const INITIAL_COUNT = 9;

const images = [
    // 처음 보이는 9장
    { thumb: thumb1, src: large1 },
    { thumb: thumb5, src: large5 },
    { thumb: thumb3, src: large3 },

    { thumb: thumb4, src: large4 },
    { thumb: thumb2, src: large2 },
    { thumb: thumb18, src: large18 },

    { thumb: thumb6, src: large6 },
    { thumb: thumb7, src: large7 },
    { thumb: thumb8, src: large8 },

    // 더보기 이후
    { thumb: thumb10, src: large10 },
    { thumb: thumb11, src: large11 },
    { thumb: thumb13, src: large13 },

    { thumb: thumb14, src: large14 },
    { thumb: thumb12, src: large12 },
    { thumb: thumb15, src: large15 },

    { thumb: thumb16, src: large16 },
    { thumb: thumb17, src: large17 },
    { thumb: thumb9, src: large9 },
];

const Gallery = () => {
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const handleToggleMore = () => {
        if (visibleCount < images.length) {
            setVisibleCount(images.length);
        } else {
            setVisibleCount(INITIAL_COUNT);

            const element = document.getElementById('gallery-section');

            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                });
            }
        }
    };

    const handleImageClick = (index: number) => {
        setIndex(index);
        setOpen(true);
    };

    return (
        <div
            className={styles.container}
            id="gallery-section"
        >
            <div className={styles.cardFrame}>
                <h2 className={styles.title}>
                    Gallery
                </h2>

                <div className={styles.imageContainer}>
                    {images
                        .slice(0, visibleCount)
                        .map((image, idx) => (
                            <div
                                key={image.src}
                                className={styles.imageWrapper}
                                onClick={() => handleImageClick(idx)}
                            >
                                <img
                                    src={image.thumb}
                                    alt={`gallery-${idx + 1}`}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        ))}
                </div>

                {images.length > INITIAL_COUNT && (
                    <button
                        type="button"
                        className={styles.moreButton}
                        onClick={handleToggleMore}
                    >
                        {visibleCount < images.length
                            ? '더보기'
                            : '접기'}
                    </button>
                )}

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={index}

                    // 현재 사진 주변 3장을 미리 로드
                    carousel={{
                        preload: 3,
                    }}

                    // 1800px WebP 사용
                    slides={images.map((image) => ({
                        src: image.src,
                    }))}

                    on={{
                        view: ({ index: currentIndex }) => {
                            setIndex(currentIndex);
                        },
                    }}

                    styles={{
                        root: {
                            '--yarl__color_backdrop': 'rgba(0, 0, 0, .8)',
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default Gallery;