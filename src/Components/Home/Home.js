import React from 'react';
import About from '../About/About';
import Courses from '../Courses/Courses';
import Faq from '../Faq/Faq';

import Hero from '../HeroSection/Hero';
import LoginForm from '../LoginForm/LoginForm';
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Courses></Courses>
            <About></About>
            <Faq></Faq>
            <LoginForm></LoginForm>
        </div>
    );
};

export default Home;