import React, {useEffect, useRef} from 'react';
import {motion, useMotionValue, useScroll, useTransform} from "framer-motion";

function Parallax() {
    const ParallaxRef = useRef();
    const {scrollYProgress} = useScroll(
        {
            target:ParallaxRef,
            offset: ["start start","end start"]
        }
    )

    const yBg = useTransform(scrollYProgress,[0,1], ["0%","90%"] )
    const yText = useTransform(scrollYProgress,[0,1], ["0%","550%"] )
    const textColor = useMotionValue("#FFFFFF"); // Initial color: white
    // useEffect(() => {
    //     return scrollYProgress.onChange((latest) => {
    //         if (latest > 0.5) {
    //             textColor.set("#006DA4"); // Change to firstColor if visible
    //         } else {
    //             textColor.set("#FFFFFF"); // Change back to white
    //         }
    //     });
    // }, [scrollYProgress, textColor]);
    return (
        <div className="">
            {/*Parallax Effect */}
            <div ref={ParallaxRef} style={{background: "linear-gradient(180deg, #0a1f44, #0d3b66, #1e56a0)"}}
                 className="overflow-hidden h-screen w-full flex flex-col justify-center items-center relative">
                <h3 className="text-white font-extrabold text-center text-4xl -mt-40 mb-32 md:text-[56px]">
                    Mon <span className="text-firstColor "> Portfolio </span>
                </h3>
                <motion.h1 style={{y: yText, color: textColor}} className="text-[40px] sm:text-[60px] mb-32 md:text-[80px] text-center "> What We Did ?</motion.h1>
                <motion.div className={` bg-no-repeat mountains absolute bg-contain md:bg-cover w-full h-full z-[3]`}></motion.div>
                <motion.div style={{y: yBg}} className=" bg-no-repeat planets absolute bg-contain md:bg-cover w-full h-full z-[2]"></motion.div>
                <motion.div style={{x: yBg}} className="bg-no-repeat stars absolute bg-contain md:bg-cover w-full h-full z-[1]"></motion.div>
            </div>
        </div>
    );
}

export default Parallax;