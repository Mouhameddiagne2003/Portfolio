import {useState} from 'react';
import {techskills,profskills} from "../../data.jsx";
import "./Skills.css";
import { CircularProgressbarWithChildren, buildStyles,CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useTranslation} from "react-i18next";


function Skills() {
    const {t} = useTranslation();
    const [hoveredSkill, setHoveredSkill] = useState(null);
    return (
        <div>
            <div>
                <h3 className="text-[1.2rem] text-firstColor relative inline-block ">
                    {t("TechnicalSkills")}
                </h3>
                <div className=" flex items-center justify-center mt-12 gap-7 flex-wrap">
                    {techskills.map(({title, percentage, color, logo,level}, index) => {
                        const Icone = logo;

                            return (
                                <div key={index} onMouseEnter={() => setHoveredSkill(index)}
                                     onMouseLeave={() => setHoveredSkill(null)}
                                     className="group bg-containerColor hover:cursor-pointer relative min-w-[8rem] max-w-[12rem] p-10 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <div className="">
                                        <CircularProgressbarWithChildren background backgroundPadding={2}
                                                                         styles={buildStyles({

                                                                             pathColor: color,
                                                                             backgroundColor: "var(--container-color)",
                                                                             textColor: "var(--fist-color)",
                                                                             trailColor: "transparent"

                                                                         })} value={percentage} strokeWidth={7.5}>
                                            <div
                                                className={`text-6xl flex items-center justify-center ${hoveredSkill === index ? 'animate-flip' : ''} `}>
                                                <Icone className="h-14 w-14" style={color = {color}}/>
                                            </div>
                                            <div
                                                className={`text-titleColor text-sm ${hoveredSkill === index ? 'animate-fade-in opacity-1' : 'hidden'}`}>
                                                {title}
                                            </div>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                    <p className="text-xl mt-3">{t(level)}</p>
                                </div>
                            )
                        }
                    )}
                </div>

            </div>
            <div className="mt-16">
                <h3 className="text-[1.2rem] text-firstColor relative inline-block ">
                    {t("ProfessionalSkills")}
                </h3>
                <div className=" flex items-center justify-center mt-12 gap-7 flex-wrap">
                    {profskills.map(({title, percentage}, index) => {


                            return (
                                <div key={index}
                                     className="group  hover:cursor-pointer relative min-w-[8rem] max-w-[14rem] p-10 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <div className="">
                                        <CircularProgressbar text={`${percentage}%`}  backgroundPadding={2}
                                                                         styles={buildStyles({
                                                                             textColor: "hsl(0, 0%, 91%)",
                                                                             trailColor: "transparent",
                                                                             pathColor: "var(--fist-color)"
                                                                         })} value={percentage} strokeWidth={7.5}>
                                        </CircularProgressbar>
                                    </div>
                                    <p className="text-xl mt-3">{t(title)}</p>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>

    );
}

export default Skills;