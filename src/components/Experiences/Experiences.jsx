import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles.js";
import { experiences } from "../../data.jsx";
import { SectionWrapper } from "../../hoc/SectionWrapper.jsx";
import { textVariant } from "../../utils/motion.js";
import {useTranslation} from "react-i18next";

const ExperienceCard = ({ experience }) => {
    const {t} = useTranslation();
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#406b8f",
                color: "hsl(0, 0%, 95%)",

            }}
            contentArrowStyle={{ borderRight: "8px solid  #739bc2" }}
            date={<span className="md:text-titleColor text-textWhite">{experience.date}</span>}
            iconStyle={{ background: experience.iconBg, color:"#396488" }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[100%] h-[100%] rounded-[50%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3  style={{ wordWrap: "break-word", whiteSpace: "normal", overflowWrap: "break-word" }} className='text-white text-[24px] font-bold'>{t(experience.title)}</h3>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {t(point)}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experiences = () => {
    const {t} = useTranslation();

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    {t("What I have done so far")}
                </p>
                <h2 className={`${styles.sectionHeadText} text-center text-firstColor`}>
                    {t("Work Experience")}.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline lineColor="hsl(0, 0%, 80%)">

                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experiences, "work");