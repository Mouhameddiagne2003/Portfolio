import React, { useState, useRef } from 'react';
import { portfolio } from "../../data.jsx";
import { MdOutlineClose } from "react-icons/md";
import "./portfolio.css";
import github from "../../assets/github.png"
import GetInTouch from "../../components/GetInTouch/GetInTouch.jsx";

const ProjectItem = ({ item, onClick }) => {
    return (
        <div className="imgcardContainer" onClick={onClick}>
            <div className="img-card relative max-w-[100%] h-[360px] rounded-[10px] overflow-hidden cursor-pointer">
                <div className="overlay"></div>
                <div className="info z-[777] absolute bottom-0 left-0 m-[20px] opacity-0">
                    <h3 className="text-textWhite text-[1.5em]">{item.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                            <p key={`${item.title}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                </div>
                <img src={item.img} alt="" className="w-full h-full object-cover"/>
            </div>
        </div>
    );
};

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section className="relative ml-auto mr-auto section w-full py-10">
            <div className="w-full flex flex-col items-center justify-center">
                <h3 className="text-center text-4xl md:text-[56px] mb-[70px] text-titleColor font-extrabold">
                    Mon <span className="text-firstColor"> Portfolio</span>
                </h3>
                <div className="content w-4/5">
                    <div className="portfolio-list my-0 mx-auto gap-[35px] max-w-[100%] ">
                        {portfolio.map((item, index) => (
                            <ProjectItem
                                item={item}
                                key={index}
                                onClick={() => setSelectedProject(item)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-72 h-[80vh]">
                <GetInTouch/>
            </div>


            {/* Modal */}
            {selectedProject && (
                <div
                    className="portfolio-model fixed inset-0 z-[9999999] flex justify-center items-center bg-[rgba(0,0,0,0.5)] h-[100vh]">
                    <div
                        className="portfolio-model-body relative max-w-[600px] w-full m-[20px] p-[30px] rounded-[10px] bg-containerColor max-h-[90vh] overflow-y-auto">
                        <span
                            className="absolute top-[20px] right-[20px] text-[24px] cursor-pointer"
                            onClick={closeModal}
                        >
                            <MdOutlineClose/>
                        </span>
                        <h3 className="text-[1.5em]">{selectedProject.title}</h3>
                        <div className="relative mt-10 ">
                            <img src={selectedProject.img} alt="" className="w-full my-[10px] mx-0 rounded-[10px]"/>
                            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                                <div

                                    onClick={() => window.open(selectedProject.source_code_link, "_blank")}
                                    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                                >
                                    <img
                                        src={github}
                                        alt='source code'
                                        className='w-1/2 h-1/2 object-contain'
                                    />
                                </div>
                            </div>
                        </div>


                        <p className="mt-8">{selectedProject.desc}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
