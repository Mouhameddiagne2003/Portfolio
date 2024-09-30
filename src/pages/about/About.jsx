import {useEffect, useState} from 'react';
import "./about.css";
import {useTranslation} from "react-i18next";
import Odometer from "react-odometerjs";
import { TbFileDownload } from "react-icons/tb";
import aboutImg from "../../assets/me.jpg";
import Skills from "../../components/Skills/Skills.jsx";
import {Educationresume} from "../../data.jsx";
import EducationResume from "../../components/EducationResume/EducationResume.jsx";
import ComputersCanvas from "../../components/Computer/Computers.jsx";
import Experiences from "../../components/Experiences/Experiences.jsx";
import Services from "../../components/Services/Services.jsx";
import {Link} from 'react-router-dom';


const About = () => {
    const {t,i18n } = useTranslation();

    const firstHalfEn = "Me";
    const firstHalfFr = "A";
    const info = [
        {text: t("Experience"), count: "02", code: "Experience"},
        {text: t("Projects"), count: "10", code: "Project"},
        {text: t("Works"), count: "03", code:"Work"},
    ]
    const [Experience, SetExperience] = useState(0);
    const [Work, SetWork] = useState(0);
    const [Project, SetProject] = useState(0);
    useEffect(()=> {
        const options = {
            root: null, // Utilise la fenêtre comme racine d'observation
            rootMargin: '0px', // Marge autour de la fenêtre d'observation
            threshold: 0.5, // Se déclenche lorsque 50% de l'élément est visible
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // L'élément est visible à l'écran, déclenche l'animation
                    const timeoutId = setTimeout(() => {
                        SetExperience(info[0].count);
                        SetWork(info[2].count);
                        SetProject(info[1].count);
                    }, 3000);
                    return () => {
                        clearTimeout(timeoutId);
                    };
                }
            });
        }, options);
        // Observe l'élément que vous souhaitez animer
        const targetElement = document.getElementById('mon-element');
        if (targetElement) {
            observer.observe(targetElement);
        }

        // Nettoie l'observateur lorsque le composant est démonté
        return () => {
            observer.disconnect();
        };
    }, []);



    return (
        <main className="section container  max-w-[1140px] mx-auto">
            <section className="py-10 ">
                <div className="text-center text-4xl md:text-[56px] mb-[70px]">
                    <h3 className="text-titleColor font-extrabold">
                        {i18n .language === "fr" ? firstHalfFr + " " : ""} <span className="text-firstColor"> {t('About')}</span> {i18n .language === "en" ? " " + firstHalfEn : ""}
                    </h3>
                    <h3 className="text-titleColor my-3 text-[1.3rem]  md:mt-10 md:text-2xl">
                        {t("IntroTitle")}
                    </h3>
                    <div
                        className="flex md:flex-row flex-col-reverse md:gap-10 items-center gap-12 px-10 max-w-6xl mx-auto">
                        <div className="p-2">
                            <div className="text-textColor font-normal text-lg my-3 ">
                                <p className="leading-8 text-justify w-11/12 mx-auto"
                                   dangerouslySetInnerHTML={{__html: t("IntroductionText")}}/>
                                <div id="mon-element" className="flex mt-10 items-center justify-center gap-7 ">
                                    {
                                        info.map(content =>
                                            <div key={content.text}>
                                                <h3 className="z-0 md:text-4xl text-3xl md:font-[800] flex justify-center items-center gap-3">

                                                    {(() => {
                                                        switch (content.code) {
                                                            case 'Experience':
                                                                return <Odometer value={Experience}/>
                                                            case 'Project':
                                                                return <Odometer value={Project}/>
                                                            case 'Work':
                                                                return <Odometer value={Work}/>
                                                            default:
                                                                return null
                                                        }
                                                    })()}

                                                    <span
                                                        className="text-firstColor text-3xl md:text-5xl font-extrabold">{" "} + </span>
                                                </h3>
                                                <span className="md:text-base text-sm">{content.text}</span>
                                            </div>
                                        )
                                    }
                                </div>
                                <br/>
                                <br/>
                                <a href="" download=' '
                                   className="  align-center button inline-block text-titleColor border border-solid border-firstColor pt-[15px] pr-[70px] pb-[15px] pl-[35px] rounded-[35px] text-[15px] font-medium relative">
                                    {/*<button className="">*/}
                                    Download CV
                                    {/*</button>*/}
                                    <span
                                        className="button_icon bg-firstColor flex justify-center items-center absolute right-0 -inset-y-0 w-[55px] rounded-[50%] text-textWhite text-[25px] ">
                                    <TbFileDownload/>
                                </span>
                                </a>

                            </div>


                        </div>
                        <div className="flex-1 flex justify-center mt-4 md:-mt-32 items-center">
                            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
                                <img src={aboutImg} className="w-full object-cover bg-cyan-600 rounded-xl" alt=""/>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <div className="separator border-t border-t-borderColor max-w-[40%] md:mt-[10px] lg:mt-[72px] mx-auto mb-[56px]"></div>
            <section className="skills">
                <h3 className="text-[1.3rem] text-titleColor section__subtitle text-center ">
                    {t("SkillsTitle")}
                </h3>
                <div className="skills_container grid text-center mt-8">
                    <Skills/>
                </div>
            </section>
            <div className="separator border-t border-t-borderColor max-w-[40%] mt-[72px] mx-auto mb-[56px]"></div>
            <section>
                <h3 className="text-[1.3rem] text-titleColor section__subtitle text-center ">
                    {t("Education&ExperienceTitle")}
                </h3>
                <div className="">
                    <h3 className="text-[1.2rem] text-firstColor section__subtitle mt-12 text-center md:ml-4 md:text-left font-extrabold ">
                        {t("MonParcoursAcademique")}
                    </h3>
                    <div className="grid w-[95%]  mx-auto grid-cols-1 mt-12">
                        <div className="resume__data">
                            {Educationresume.map((val) => {
                                return <EducationResume key={val.id} {...val} />;
                            })}
                        </div>
                    </div>
                </div>
                <div className="md:mt-[95px] flex item-center justify-center relative w-full md:h-screen h-[600px]">
                    <ComputersCanvas/>
                </div>
                <div className="h-auto mt-60 w-full ">
                    <Experiences/>
                </div>
            </section>
            <div className="separator border-t border-t-borderColor max-w-[40%] mt-[72px] mx-auto mb-[56px]"></div>
            <section>
                <h3 className="text-[1.3rem] text-titleColor section__subtitle text-center ">
                    {t("ServicesTitle")}
                </h3>
                <div>
                    <Services/>
                </div>
            </section>
            <div className="h-screen md:mt-2 mt-10 flex flex-col justify-center items-center portfolio-container">
                <p className="w-3/5 font-semibold lg:text-[1.2em] md:text-[1.5em]">
                    {t("exploretext")}
                </p>
                <Link to="/portfolio">
                    <a  className="bg-firstColor portfolio-link">
                        {t("explore")}
                    </a>
                </Link>

            </div>


        </main>
);
};

export default About;