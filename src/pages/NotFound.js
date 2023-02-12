import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap/all';
import Image from '../components/elements/Image';
import LinkElem from '../components/elements/Link';
import Underline from '../components/Underline';
import Empty from '../layouts/Empty';
import NotFoundImage from '../assets/images/character-image.png';

const NotFound = () => {
    const notFound = useRef(null);

    const RevealImage = () => {
        gsap.fromTo(notFound?.current, {
            opacity: 0,
            translateX: '60%',
            ease: 'Power4.EaseInOut'
        }, {
            opacity: 1,
            translateX: 0
        }).timeScale(0.5);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            RevealImage();
        }
    },[]);

    return (
        <Empty title="NOT FOUND" description="The page you are trying to reach does not exist.">
            <section className="not-found">
                <div className="not-found__content">
                    <div className="not-found__image" ref={notFound}>
                        <Image
                            src={NotFoundImage}
                            width={596}
                            height={695}
                            alt={'not-found'}
                            className="object-cover"
                        />
                    </div>
                    <div className="not-found__description">
                        <h1>NOT <Underline color="yellow">FOUND</Underline></h1>
                        <h2>The page you are trying to reach does not exist.</h2>
                        <LinkElem to="/" type="solid-secondary" color="#FDD04A">HOME</LinkElem>
                    </div>
                </div>
            </section>
        </Empty>
    );
};

export default NotFound;