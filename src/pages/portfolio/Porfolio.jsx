import React, {useRef, useEffect} from 'react';
import "./portfolio.css"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import {portfolio} from "../../data.jsx";
import Parallax from "../../components/PortfolioParallax/Parallax.jsx";
import github  from "../../assets/github.png";

const SingleProject = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
            target: ref,
        }
    );
    const y = useTransform(scrollYProgress, [0,1], [-300,300])
    return <section ref={ref} className="mt-[450px] w-full  h-screen">
        <div className="flex justify-center items-center w-full h-full container">
            <div className="flex justify-center gap-[50px] w-full h-full m-auto wrapper">
                <div className="ImageContainer h-full">
                    <div className='relative'>
                        <img className=' h-full w-full object-cover rounded-2xl' src={item.img} alt=""/>
                        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                            <div
                                onClick={() => window.open(item.source_code_link, "_blank")}
                                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                            >
                                <img
                                    src={github}
                                    alt='source code'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <motion.div  className="flex-1 flex flex-col gap-[30px] textContainer">
                    <h2 className='text-[72px]'>{item.title}</h2>
                    <p className="text-[20px] "> {item.desc}</p>
                    <div className='mt-4 flex flex-wrap gap-2'>
                        {item.tags.map((tag) => (
                            <p
                                key={`${name}-${tag.name}`}
                                className={`text-[14px] ${tag.color}`}
                            >
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                    <button> See more</button>

                </motion.div>
            </div>
        </div>
    </section>
}

const Portfolio = () => {


    const PortfolioRef = useRef()


    const {scrollYProgress} = useScroll({
            target: PortfolioRef,
            offset: ["end end", "start start"],
        }
    );

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })
    return (
        <div className="">
            <div className="">
                <section>
                    <Parallax/>
                </section>

                {/*Porfolio*/}
                <div ref={PortfolioRef} className="relative portfolio">
                    <div className="progress sticky top-0 left-0 pt-12 text-center text-firstColor ">
                        <h1 className=" text-[50px] font-semibold text-firstColor">Featured Works</h1>
                        <motion.div style={{scaleX}} className="h-[10px] bg-firstColor "></motion.div>

                    </div>
                    {portfolio.map((item) => (
                        <SingleProject item={item} key={item.id}/>
                    ))}
                </div>
            </div>
        </div>


    );
};

export default Portfolio;