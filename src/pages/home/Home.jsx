import {useState} from 'react';
import Profile from '../../assets/bannerImg.png';
import {Link} from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import "../../../i18n.js"
import "./home.css";
import "../../App.css"

const Home = () => {
    const { t } = useTranslation();
    const {i18n} = useTranslation();
    // Déterminez le padding en fonction de la langue actuelle
    const padding = i18n.language === 'en' ? 'px-[35px] py-[15px]' : 'px-[41px] py-[15px]';
    return (
        <section className="grid items-center p-[40px] h-[100vh] section gap-[20px] md:gap-[30px] home">
            <div className="relative flex items-center justify-center h-[45vh] sm:h-[50vh] md:h-screen ">
                <img className="home__img z-[9] md:w-[500px] md:rounded-[20px] md:h-[80%] w-[270px] h-[270px] rounded-[50%] " src={Profile} alt="" />

            </div>
            <div className="home__content">
                <h4 className="text-[20px]  md:text-lg pl-0 md:pl-[50px] mb-2">{t("Welcome")}</h4>
                <div className="max-w:[600px] mx-auto pt-[20px] home__data md:pr-0 pr-[20px] ">

                    <h1 className="home__title pl-0 md:pl-[50px] relative leading-[1.24]">
                        <span className="text-firstColor text-[30px] md:text-[40px] md:font-normal font-[800]"> {t("HomeTitle")}</span>
                        {/*{" " + t("JobTitle")}*/}
                        <section className="animation text-[#F2F2F2] mt-2 ">
                            <div className="first">
                                <div>{t("JobTitle1")}</div>
                            </div>
                            <div className="second">
                                <div>{t("JobTitle2")}</div>
                            </div>
                            <div className="third">
                                <div>{t("JobTitle4")}</div>
                            </div>
                            <div className="fourth">
                                <div>{t("JobTitle5")}</div>
                            </div>
                            <div className="five">
                                <div>{t("JobTitle3")}</div>
                            </div>
                        </section>
                    </h1>
                    <p className="md:w-[85%] w-full leading-8 md:leading-10 mt-8 md:mt-0 my-0 md:my-[16px] mx-0 md:mx-[32px]">
                        {t("Description")}
                    </p>
                    <div className="wrapper">

                            <Link className="gap-2.5 flex items-center md:w-1/3 link_wrapper" to="/about">
                                <a className=  {`${padding}`}  >{t("More") + " "}</a>
                                {/*<span className="button__icon">*/}
                                {/*    <FaArrowRight/>*/}
                                {/*</span>*/}
                                <div className={`icon`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                        <path
                                            d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                                    </svg>
                                </div>
                            </Link>

                    </div>


                </div>
            </div>
            <div className="color__block top-[-50%] rotate-[-15deg] left-[-83%] fixed h-[200%] w-[100%] bg-firstColor"></div>
        </section>
    );
};

export default Home;