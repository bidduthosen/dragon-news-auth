import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import LatestNews from '../LatestNews/LatestNews';
import Banner from '../Banner/Banner';
import LeftSideNav from '../../Components/LeftSideNav/LeftSideNav';
import RightSiteNav from '../../Components/RightSiteNav/RightSiteNav';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className=''>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-2 border'>
                    <h1>comming soon......</h1>
                </div>
                <div className=''>
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default Home;