import React, {useEffect, useState} from 'react';
import { FaCog, FaMoon,FaSun } from "react-icons/fa";
import {themes} from "../../data.jsx";
import ThemeItem from "./ThemeItem.jsx";
import "./Theme.css"


function Theme(props) {
    const [showSwitcher, setShowSwitcher] = useState(false);
    const getStorageTheme = () =>{
        let theme = "light-theme";
        if(localStorage.getItem("theme")){
            theme = localStorage.getItem("theme");
        }
        return theme;
    }
    const [theme,SetTheme] = useState(getStorageTheme())

    const ThemeSwitcher = () => {
        if (theme === "light-theme"){
            SetTheme("dark-theme")
        } else {
            SetTheme("light-theme")
        }
    }
    const ShowSwitcher = () =>{
        setShowSwitcher(!showSwitcher);
    }
    const getStorageColor = () =>{
        let color = "#006DA4";
        if(localStorage.getItem("color")){
            color = localStorage.getItem("color");
        }
        return color;
    }

    /* colors change */
    const [color,SetColor]=useState(getStorageColor());
    const changeColor=(color) => {
        SetColor(color);
    }


    useEffect(() => {
        document.documentElement.style.setProperty('--fist-color',color);
        localStorage.setItem('color',color);
    }, [color]);

    useEffect(() => {
        document.documentElement.className = theme ;
        localStorage.setItem('theme',theme);
    }, [theme]);
    return (
        <div>
            <div className={` ${showSwitcher ? 'show__switcher': ''}   rounded-t-0 rounded-r-[5px] rounded-b-[5px] rounded-l-0 style__switcher fixed left-0 top-[10%] bg-textWhite w-[220px] p-[15px] z-[1000]`}>
                <div onClick={ShowSwitcher} className="grid place-items-center  style__switcher-toggler top-[10%] absolute left-[100%] bg-textWhite h-[50px] w-[50px]  cursor-pointer  text-[hsl(0, 0%, 40%)] rounded-t-0 rounded-r-[5px] rounded-b-[5px] rounded-l-0">
                    <FaCog />
                </div>
                <div onClick={ThemeSwitcher} className="grid place-items-center absolute left-[100%] bg-textWhite h-[50px] w-[50px]  cursor-pointer rounded-t-0 rounded-r-[5px] rounded-b-[5px] rounded-l-0  text-[hsl(0, 0%, 40%)] bottom-[10%] theme__toggler">
                    {theme === "light-theme" ? <FaMoon/> : <FaSun/>}

                </div>
                <h3 className="border-b-[hsl(0, 0%, 87%)] border-b mb-[15px] pb-[5px] font-[600] style__switcher-title text-[hsl(0, 0%, 40%)]"> Style Switcher</h3>
                <div className="grid grid-cols-5 gap-y-[8px] gap-x-[6px] style__switcher-item ">
                    {
                        themes.map((theme, index) => {
                            return <ThemeItem key={index} {...theme} changeColor={changeColor}/>
                        })
                    }
                </div>
                <div onClick={ShowSwitcher} className="style__switcher-close absolute right-[15px] top-[1%] cursor-pointer text-[hsl(0, 0%, 40%)] ">&times;</div>
            </div>
        </div>
    );
}

export default Theme;