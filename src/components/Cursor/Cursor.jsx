import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";


function Cursor(props) {
    const [Position,setPosition] = useState({x:0,y:0})
    useEffect(() => {
        const Mousemove = (e) => {
            setPosition({x: e.clientX, y: e.clientY});
        };

            window.addEventListener("mousemove", Mousemove);
            return () => {
                window.removeEventListener("mousemove", Mousemove)
            }

    }, );
    console.log(Position);
    return (
        <motion.div className="cursor w-[50px] h-[50px] fixed z-[9999999999] rounded-[50%] border border-solid border-firstColor " animate={{x:Position.x+10, y:Position.y+10}}></motion.div>
    );
}

export default Cursor;