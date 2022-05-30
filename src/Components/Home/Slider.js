import React from 'react';
import TypeAnimation from 'react-type-animation';
import myImage from '../../Assets/Ayon2.png'
import bulb from '../../Assets/blob.svg'

const Slider = () => {
    return (
        <div className='container mx-auto lg:flex justify-between items-center mt-10 md:mt-0 height px-7 md:px-0'>
            <div className='flex-1'>
                <span className='md:text-4xl text-xl font-bold'>I'm </span>
                <TypeAnimation
                    cursor={false}
                    sequence={[
                        'Ayon Jodder',
                        2000,
                        'A Developer',
                        2000,
                        'A UI/UX Designer',
                        2000,
                    ]}
                    wrapper="span"
                    repeat={Infinity}
                    className="md:text-6xl text-2xl font-bold text-secondary"
                />
                <p className='custom-line-height text-gray-500 mt-7 mb-5'>
                    I'm a MERN stack developer and UI/UX designer based in Bangladesh.
                    I'm s student of Computer Science and Engineering at the Green University of Bangladesh.
                    I have started my programming journey in 2021 with Programming Hero.
                    Stay foolish, stay hungry and stay curious. Then world will be your oyster.
                </p>
                <button className='btn btn-outline btn-secondary font-semibold resume-button px-10 py-1'><a href="https://drive.google.com/file/d/17r1Ob0f4iwcZEaPHji2F7gQ9PmHcHvxN/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a></button>
            </div>

            <div className='flex-1 images md:overflow-hidden w-full'>
                <img id='back-image' className='ing1 md:w-2/3 mx-auto lg:w-full absolute md:bottom-[-10px] top-0' src={bulb} alt="" />
                <img className='lg:w-2/3 md:w-1/2 sm:w-2/3  mx-auto absolute top-12 md:top-[13%] lg:left-10 md:left-32 img2 -mt-10' src={myImage} alt="" />
            </div>
            <div className="dotted-bg hidden sm:block"></div>
        </div>
    );
};

export default Slider;