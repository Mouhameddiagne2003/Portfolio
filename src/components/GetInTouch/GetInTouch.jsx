import React from 'react';
import './GetInTouch.css';
import { FaPaperPlane } from "react-icons/fa";
import {Link} from 'react-router-dom';
import {useTranslation} from "react-i18next";

function GetInTouch(props) {
    const {t}=useTranslation();
    return (
        <div className="get-in-touch mt-[40px] lg:mt-[70px] relative w-4/5 lg:w-[1150px] ml-auto mr-auto py-[6rem] px-0 sub-section">
            <div className="container relative flex-col">
                <div className="content w-full flex items-center justify-center">
                    <div className="content-card relative w-full lg:w-[90%] md:grid lg:flex items-center justify-center bg-[#fff] p-[50px] rounded-[10px]">
                        <div className="title text-[0.8rem] md:text-[0.6rem] lg:text-[1rem] uppercase lg:leading-[60px] leading-[50px] md:leading-[40px]">
                            <h4 className="lg:text-[1.2em] font-light leading-[20px] sm:text-[1em] text-[0.8em]"> {t("letstalk")}</h4>
                            <h3 className="lg:text-[2.3em] font-normal sm:text-[2em] text-[1.8em]">{t("aboutyour")}</h3>
                            <h2 className="lg:text-[4.2em] font-bold sm:text-[4em] text-[3.8em]">{t("nextproject")}</h2>
                        </div>
                        <div className="content-btn ">
                            <Link to="/contact">
                                <a
                                   className="btn text-[1rem] md:text-[0.8rem] bg-firstColor text-textWhite font-medium inline-block mt-[25px] py-[20px] px-[30px] rounded-[10px] ">
                                    <div className="flex items-center justify-center gap-4">
                                        {t("getintouch")}<FaPaperPlane/>
                                    </div>
                                </a>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default GetInTouch;