import React from 'react';
import Marquee from "react-fast-marquee";
const LatestNews = () => {
    return (
        <div className='flex bg-gray-200 p-2 mt-5'>
                <button className='btn btn-secondary rounded-none px-5 py-2'>Latest</button>
                <Marquee>
                    I can be a React component, multiple React components,  <i>or just some text.</i> I can be a React component, multiple React components, or just some text.I can be a React component,   multiple React components, or just some text.I can be a React component
                </Marquee>
        </div>
    );
};

export default LatestNews;