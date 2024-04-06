import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';

const RightSiteNav = () => {
    return (
        <div>
            <div className='px-4'>
                <h1 className='text-2xl mb-4'>Login With</h1>
                <Link><button className='btn btn-outline w-full flex items-center mb-3'> <FaGoogle></FaGoogle> <span>Login With Google</span></button></Link>
                <Link><button className='btn btn-outline w-full flex items-center'> <FaGithub></FaGithub> <span>Login With GitHub</span></button></Link>
            </div>
            <div className='px-4 mt-12'>
                <h1 className='text-2xl mb-4'>Find Us On</h1>
                <Link className='flex items-center space-x-2 border border-gray-300 rounded-t-lg p-4'><FaFacebook className='text-4xl bg-gray-200 p-2 rounded-full'></FaFacebook> <span>Facebook</span></Link>
                <Link className='flex items-center space-x-2 border-x border-gray-300  p-4'><FaTwitter className='text-4xl bg-gray-200 p-2 rounded-full'></FaTwitter> <span>Twitter</span></Link>
                <Link className='flex items-center space-x-2 border border-gray-300 rounded-b-lg p-4'><FaInstagram className='text-4xl bg-gray-200 p-2 rounded-full'></FaInstagram> <span>Instagram</span></Link>
            </div>
            <div className='px-4 mt-12 bg-gray-100'>
                <h1 className='text-2xl mb-4'>Q Zone</h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSiteNav;