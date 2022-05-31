import React from "react";
import './Portfolio.css';
import shape from '../../Assets/triangleAsymmetrical.svg'

const Portfolio = () => {
    return (
        <div className="bg-primary pb-20 mt-20">
            <img src={shape} alt="" />
            <h1 className="text-4xl glass-header w-fit mx-auto pb-4 text-white font-bold text-center mt-20 mb-10">My Projects</h1>
            <div className="wrapper-portfolio">
                <div className="cols-portfolio">
                    <div className="col-portfolio" ontouchstart="this.classList.toggle('hover');">
                        <div className="container-portfolio">
                            <div className="front-portfolio front1">
                                <div className="inner-portfolio">
                                    <p>Project 1</p>
                                    <span className="border border-white px-3 py-1">MERN Project</span>
                                </div>
                            </div>
                            <div className="back-portfolio">
                                <div className="inner-portfolio">
                                    <span className="">
                                        <span className="underline text-[#000000]">Technologies:</span> ReactJS, TailwindCSS, Rest API, NodeJS, MongoDB, ExpressJS.{" "}
                                    </span>
                                    <span className="border border-white py-1 block text-md mt-3"><a href="https://assignment12-685d7.web.app/" target="_blank" rel="noopener noreferrer">View Details</a></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-portfolio" ontouchstart="this.classList.toggle('hover');">
                        <div className="container-portfolio">
                            <div className="front-portfolio front2">
                                <div className="inner-portfolio">
                                    <p>Project 2</p>
                                    <span className="border border-white px-3 py-1">MERN Project</span>
                                </div>
                            </div>
                            <div className="back-portfolio">
                                <div className="inner-portfolio">
                                    <span className="">
                                        <span className="underline text-[#000000]">Technologies:</span> ReactJS, TailwindCSS, Rest API, NodeJS, MongoDB, ExpressJS.{" "}
                                    </span>
                                    <span className="border border-white py-1 block text-md mt-3"><a href="https://flavoro-4fd30.web.app/" target="_blank" rel="noopener noreferrer">View Details</a></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-portfolio" ontouchstart="this.classList.toggle('hover');">
                        <div className="container-portfolio">
                            <div className="front-portfolio front3">
                                <div className="inner-portfolio">
                                    <p>Project 3</p>
                                    <span className="border border-white px-3 py-1">React Project</span>
                                </div>
                            </div>
                            <div className="back-portfolio">
                                <div className="inner-portfolio">
                                    <span className="">
                                        <span className="underline text-[#000000]">Technologies:</span> ReactJS, TailwindCSS, Rest API, Firebase{" "}
                                    </span>
                                    <span className="border border-white py-1 block text-md mt-3"><a href="https://ivent-3c76f.web.app/" target="_blank" rel="noopener noreferrer">View Details</a></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-portfolio" ontouchstart="this.classList.toggle('hover');" >
                        <div className="container-portfolio">
                            <div className="front-portfolio front4">
                                <div className="inner-portfolio">
                                    <p>Project 4</p>
                                    <span className="border border-white px-3 py-1">React Project</span>
                                </div>
                            </div>
                            <div className="back-portfolio">
                                <div className="inner-portfolio">
                                    <span className="">
                                        <span className="underline text-[#000000]">Technologies:</span> ReactJS, TailwindCSS, Rest API, Firebase.{" "}
                                    </span>
                                    <span className="border border-white py-1 block text-md mt-3"><a href="https://dji-drone-world.netlify.app/" target="_blank" rel="noopener noreferrer">View Details</a></span>
                                </div>
                            </div>
                        </div>
                    </div >

                    <div className="col-portfolio" ontouchstart="this.classList.toggle('hover');" >
                        <div className="container-portfolio">
                            <div className="front-portfolio front5">
                                <div className="inner-portfolio">
                                    <p>Project 5</p>
                                    <span className="border border-white px-3 py-1">JS Project</span>
                                </div>
                            </div>
                            <div className="back-portfolio">
                                <div className="inner-portfolio">
                                    <span className="">
                                        <span className="underline text-[#000000]">Technologies:</span> Javascript, Bootstrap, Rest API.{" "}
                                    </span>
                                    <span className="border border-white py-1 block text-md mt-3"><a href="https://live-weather-ayon.netlify.app/" target="_blank" rel="noopener noreferrer">View Details</a></span>
                                </div>
                            </div>
                        </div>
                    </div >

                    <div className="col-portfolio" ontouchstart="this.classList.toggle('hover');" >
                        <div className="container-portfolio">
                            <div className="front-portfolio front6">
                                <div className="inner-portfolio">
                                    <p>Project 6</p>
                                    <span className="border border-white px-3 py-1">React Project</span>
                                </div>
                            </div>
                            <div className="back-portfolio">
                                <div className="inner-portfolio">
                                    <span className="">
                                        <span className="underline text-[#000000]">Technologies:</span> React, TailwindCSS, Rest API.{" "}
                                    </span>
                                    <span className="border border-white py-1 block text-md mt-3"><a href="https://crypto-caffe-ayon.netlify.app/" target="_blank" rel="noopener noreferrer">View Details</a></span>
                                </div>
                            </div>
                        </div>
                    </div >

                    <div className="col-portfolio" ontouchstart="this.classList.toggle('hover');" >
                        <div className="container-portfolio">
                            <div className="front-portfolio front7">
                                <div className="inner-portfolio">
                                    <p>Project 7</p>
                                    <span className="border border-white px-3 py-1">React Project</span>
                                </div>
                            </div>
                            <div className="back-portfolio">
                                <div className="inner-portfolio">
                                    <span className="">
                                        <span className="underline text-[#000000]">Technologies:</span> React, TailwindCSS, Rest API.{" "}
                                    </span>
                                    <span className="border border-white py-1 block text-md mt-3"><a href="https://ema-john-ayon.netlify.app/" target="_blank" rel="noopener noreferrer">View Details</a></span>
                                </div>
                            </div>
                        </div>
                    </div >

                    <div className="col-portfolio" ontouchstart="this.classList.toggle('hover');" >
                        <div className="container-portfolio">
                            <div className="front-portfolio front7">
                                <div className="inner-portfolio">
                                    <p>Project 8</p>
                                    <span className="border border-white px-3 py-1">React Project</span>
                                </div>
                            </div>
                            <div className="back-portfolio">
                                <div className="inner-portfolio">
                                    <span className="">
                                        <span className="underline text-[#000000]">Technologies:</span> React, TailwindCSS, Rest API.{" "}
                                    </span>
                                    <span className="border border-white py-1 block text-md mt-3"><a href="https://kopa-samsu-shop.netlify.app/" target="_blank" rel="noopener noreferrer">View Details</a></span>
                                </div>
                            </div>
                        </div>
                    </div >

                </div >
            </div >
        </div >
    );
};

export default Portfolio;
