import React from 'react';
import HeroStyles from './Hero.module.scss';
import HeroImage from './HeroImage';

const Hero = () => {
    return (
        <section className="hero is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <HeroImage styles={HeroStyles} />
                    <h1 className="title">Welkom bij Het Hak Hout</h1>
                    <h2 className="subtitle">
                        Rondleidingen, Wandelingen en Meer
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Hero;