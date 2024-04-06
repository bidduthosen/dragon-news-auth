import React from 'react';
import bannerImg from '../../assets/logo.png';
import moment from 'moment';

const Banner = () => {
    return (
        <div className='text-center space-y-3'>
            <img className='flex mx-auto mt-3' src={bannerImg} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <h6>{moment().format('dddd, MMMM D YYYY')}</h6>
        </div>
    );
};

export default Banner;