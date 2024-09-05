import React from 'react';
import "./EducationResume.css";
import parse from 'html-react-parser';
import {useTranslation} from "react-i18next";

function EducationResume({icon, year, title, desc}) {
    const {t} = useTranslation();

    return (
        <div className="resume__item  relative pl-[60px] ">
            <div className="absolute left-0 top-0 bg-firstColor text-textWhite w-[40px] h-[40px] rounded-[50%] flex justify-center items-center">
                {icon}
            </div>
            <span className="bg-containerColor py-[2px] px-[10px] rounded-[20px] text-[12px] font-[600]"> {year}</span>
            <h3  className="text-[18px] font-[500] title">{parse(title)}</h3>
            <p className="text-[14px] leading-[1.6] ">{desc}</p>
        </div>
    );
}

export default EducationResume;