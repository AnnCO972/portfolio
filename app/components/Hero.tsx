import React from 'react';

interface HeroProps {
    name: string;
    bio: string;
}

const Hero = ({name, bio}: HeroProps) => {
    return (
        <div className='hero-section'>
            <h1>{name}</h1>
            <p>{bio}</p>
        </div>
    );
};

export default Hero;