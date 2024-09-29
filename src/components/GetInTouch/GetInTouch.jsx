import React from 'react';
import './GetInTouch.css';
import { FaPaperPlane } from "react-icons/fa";

function GetInTouch(props) {
    return (
        <div className="get-in-touch mt-[70px] relative w-[1150px] ml-auto mr-auto py-[6rem] px-0 sub-section">
            <div className="container relative flex-col">
                <div className="content w-full flex items-center justify-center">
                    <div className="content-card relative w-[90%] flex items-center justify-center bg-[#fff] p-[50px] rounded-[10px]">
                        <div className="title uppercase leading-[60px]">
                            <h4 className="text-[1.2em] font-light leading-[20px]"> Lets Talk</h4>
                            <h3 className="text-[2.3em] font-normal">About Your</h3>
                            <h2 className="text-[4.2em] font-bold">Next Project</h2>
                        </div>
                        <div className="content-btn ">
                            <a href="/contact" className="btn bg-firstColor text-textWhite font-medium inline-block mt-[25px] py-[20px] px-[30px] rounded-[10px] ">
                                <div className="flex items-center justify-center gap-4">
                                     Get In Touch <FaPaperPlane />
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default GetInTouch;