import {useState,useRef,useEffect} from 'react';
import "./Services.css";
import {services} from "../../data.jsx"
import { FaLongArrowAltRight,FaCheckCircle } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import {styles} from "../../styles.js";


const ServiceCard = ({service}) => {
    const [ActiveModal, setActivemodel] = useState(false);
    const Icon = service.icon;
    const serviceModalsRef = useRef(null);
    const learmoreBtnRef = useRef(null);
    const closeBtnRef = useRef(null);

    useEffect(() => {
        const serviceModals = serviceModalsRef.current;
        const learnmoreBtn = learmoreBtnRef.current;
        const closeBtn = closeBtnRef.current;
        const Activemodal = () => {
            serviceModals.classList.add("active");
        };
        const Inactivemodal = () => {
            serviceModals.classList.remove("active");
        };
        learnmoreBtn.addEventListener('click',Activemodal);
        closeBtn.addEventListener('click', Inactivemodal)
        // Nettoyage de l'événement lors du démontage du composant
        return () => {
            learnmoreBtn.removeEventListener('click', Activemodal);
            closeBtn.removeEventListener('click', Inactivemodal);
        };
    }, []);

    return(
        <div>
            <div className="w-[90%] overflow-hidden mx-auto md:w-full overflow-y-hidden h-72 group hover:bg-gradient-to-b transition-colors duration-100 hover:from-[#DEE4EA] hover:to-[#F9FCFF] bg-containerColor border-[3px] border-b-firstColor rounded-[6px]  pl-[25px] pr-[60px] service-card">
                <div className="h-full translate-y-10 py-[50px] group-hover:translate-y-0 group-hover:py-[25px] transition-transform duration-500 ">
                    <div className="">
                        <Icon className="text-firstColor text-[3em] mb-[30px]"/>
                    </div>
                    <h3 className="text-[1.5em] font-bold leading-7 mb-[20px]">{service.title}</h3>
                    <div ref={learmoreBtnRef}
                         className="flex align-center mt-24 gap-2 learn-more-btn text-[#115a87] cursor-pointer">
                        Learn More <span className="i mt-1"> <FaLongArrowAltRight/> </span>
                    </div>
                </div>

            </div>
            <div ref={serviceModalsRef}
                 className="service-modal z-30 fixed w-full overflow-y-scroll h-auto md:h-[100vh] top-0 left-0 bg-transparent backdrop-blur-[10px] flex items-center justify-center ">
                <div
                    className="service-modal-body relative bg-containerColor max-w-[600px] m-[20px] p-[40px] rounded-[10px] ">
                    <span ref={closeBtnRef} className="absolute top-0 right-0 m-[20px] cursor-pointer "> <MdOutlineClose/> </span>
                    <h3 className="text-[2em]"> {service.title}</h3>
                    <h4 className="text-[1.3em] font-semibold mt-[15px] mx-0 mb-[10px]"> What is {service.title} ?</h4>
                    <p>{service.desc}</p>
                    <h4 className="">What I provide</h4>
                    <ul>
                        {/* eslint-disable-next-line react/prop-types */}
                        {service.points.map((point, i) => (
                            <li className="flex mt-[15px] gap-1 items-center" key={i}>
                                <FaCheckCircle className="text-firstColor"/> {point}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>

    );
};

function Services() {
    return (
        <div className="w-full container flex justify-center items-center">
            <div className=" content w-full">
                <div className="w-full services-description">
                    <h3 className={`${styles.sectionHeadText} text-firstColor text-center md:text-left md:ml-4 lg:ml-0 mb-[50px] mt-10`}>
                        What I provide
                    </h3>
                </div>
                <ul className="grid max-w-[100%] md:ml-4 my-0 mx-auto gap-[20px] service-list">
                    {services.map((service, index) => (
                        <li key={index}>
                            <ServiceCard service={service}/>
                        </li>
                    ))


                    }
                </ul>
            </div>

        </div>
    );
}

export default Services;