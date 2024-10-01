import React, {useRef, useState} from 'react';
import './contact.css';
import {motion, useInView} from "framer-motion";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaInstagram, FaFacebook, FaLinkedin} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {useTranslation} from "react-i18next";
import emailjs from '@emailjs/browser';

const variants= {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transitions: {
            duration: 2,
            staggerChildren: 0.5,
        }
    }
}

const Contact = () => {
    const {t,i18n} = useTranslation();
    const firstHalfEn = "Contact";
    const firstHalfFr = "Contactez";
    const secondHalfEn = "Me";
    const secondHalfFr = "Moi";
    const [success, SetSuccess]= useState(false);
    const [error, SetError]= useState(false);

    const formRef = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_portfolio', 'template_vbjhmi3', formRef.current, {
                publicKey: '5HvOJ9VqQ-hm3g5lG',
            })
            .then(
                () => {

                    SetSuccess(true);
                },
                (error) => {

                    SetError(true);
                },
            );
    };
    const ref= useRef();
    const isInView = useInView(ref, {margin:"-50px"});
    return (
        <section className="contact section relative ml-auto mr-auto section" >
            <div className="w-full flex flex-col items-center justify-center">
                <h3 className="text-center text-4xl md:text-[56px] mb-[70px] text-titleColor font-extrabold">
                    {i18n .language === "fr" ? firstHalfFr + " " : firstHalfEn + " "} <span className="text-firstColor">  {i18n .language === "fr" ? secondHalfFr + " " : secondHalfEn + " " } </span>
                </h3>
            </div>
            <motion.div ref={ref} className="flex justify-around lg:w-full w-[85%] mx-auto content lg:flex-row flex-col lg:text-[1rem] text-[0.8rem] mt-20 " variants={variants} initial="initial" whileInView="animate">
                <motion.div className="textContainer mb-[40px] lg:mb-0" variants={variants}>
                    <motion.h2 className="text-[2.1em] font-extrabold mb-[40px]" variants={variants}> {t("letsdiscuss")} </motion.h2>
                    <motion.ul className="contact-list " variants={variants}>
                        <motion.li className="mb-[40px]" variants={variants}>
                            <h3 className="item-title text-[1.3em] font-semibold mb-[10px]">
                                <div className="flex ">
                                    <FaPhoneAlt className="text-firstColor lg:text-[1.3em] text-[1.1em] mr-[15px]"/> <div> Tel </div>
                                </div>
                                  <span className="text-textColor font-[150] lg:font-[200] ml-[40px]"> +221 78 195 89 11 / +221 76 776 49 07 </span>
                            </h3>
                        </motion.li>
                        <motion.li className="mb-[40px]" variants={variants}>
                            <motion.h3 variants={variants} className="item-title text-[1.1em] lg:text-[1.3em] font-semibold mb-[10px]">
                                <div className="flex">
                                    <FaEnvelope className="text-firstColor text-[1.1em] lg:text-[1.3em] mr-[15px]"/> Mail
                                </div>
                               <span
                                className="text-textColor ml-[40px] lg:font-[200] font-[150]"> <a
                                href="mailto:mouhameddiagne029@gmail.com">mouhameddiagne029@gmail.com</a> </span>
                            </motion.h3>
                        </motion.li>
                        <motion.li className="mb-[40px]" variants={variants}>
                        <motion.h3 variants={variants} className="item-title text-[1.3em] font-semibold mb-[10px]">
                            <div className="flex">
                                <FaMapMarkerAlt  className="text-firstColor text-[1.1em] lg:text-[1.3em] mr-[15px]"/> Address
                            </div>
                                <span className="text-textColor ml-[40px] lg:font-[200] font-[150]"> Mamelles Aviation, Ouakam, Dakar, Sénégal </span>
                            </motion.h3>
                        </motion.li>
                        <motion.li className="mb-[40px]" variants={variants}>
                            <motion.div variants={variants} className="flex gap-[16px] contact_socials">
                                <a href="https://web.facebook.com/profile.php?id=100008813835694&locale=fr_FR" target="_blank" className="contact_social-link bg-containerColor text-titleColor w-[40px] h-[40px] rounded-[50%] leading-[44px] text-center flex items-center justify-center">
                                    <FaFacebook />
                                </a>
                                <a href="https://www.instagram.com/_amethjr10/" target="_blank" className="contact_social-link bg-containerColor text-titleColor w-[40px] h-[40px] rounded-[50%] leading-[44px] text-center flex items-center justify-center">
                                    <FaInstagram />
                                </a>
                                <a href="https://x.com/_amethjr10" target="_blank" className="contact_social-link bg-containerColor flex items-center justify-center text-titleColor w-[40px] h-[40px] rounded-[50%] leading-[44px] text-center">
                                    <FaSquareXTwitter />
                                </a>
                                <a href="https://www.linkedin.com/in/mouhamed-diagne-265015245/" target="_blank" className="contact_social-link bg-containerColor text-titleColor w-[40px] h-[40px] rounded-[50%] leading-[44px] text-center flex items-center justify-center">
                                    <FaLinkedin />
                                </a>
                            </motion.div>
                        </motion.li>
                    </motion.ul>
                </motion.div>
                <div className="formContainer relative ">
                    <p className="text-[1.6em] mb-[30px]">
                        {t("always")} <br/>
                        <span className="text-firstColor font-[700]">
                            {t("partner")}
                        </span>
                    </p>
                    <motion.div className="phoneSvg absolute m-auto stroke-firstColor" initial={{opacity:1}} whileInView={{opacity:0, visibility:"hidden"}} transition={{delay:3, duration:1}}>
                        <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
                            <motion.path d="M19.0264 20.9929C20.0722 21.0873 21.0036 20.2223 20.9994 19.1864V16.4767C21.0104 16.0337 20.8579 15.6021 20.5709 15.264C19.7615 14.3106 16.9855 13.7008 15.8851 13.935C15.0273 14.1176 14.4272 14.9788 13.8405 15.5644C12.6172 14.8702 11.5075 14.005 10.5426 13M8.41019 10.1448C8.9969 9.55929 9.85987 8.96036 10.0428 8.10428C10.2771 7.00777 9.66813 4.24949 8.72131 3.43684C8.38828 3.151 7.96247 2.99577 7.52325 3.00009H4.80811C3.77358 3.00106 2.91287 3.92895 3.00706 4.96919C3.00081 12.9038 8.48251 19.3497 15.9999 20.7226M14.5 6.5C15.2371 6.64382 15.9689 6.96892 16.5 7.5C17.031 8.03108 17.3561 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9096 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9" strokeWidth={0.2}
                                fill="none"
                                initial={{pathLength:0}}
                                         animate={isInView && {pathLength:1}}
                                         transition={{duration:3}}
                            />
                        </svg>
                    </motion.div>
                    <motion.form onSubmit={sendEmail} ref={formRef} action="" className="contact-form" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:4, duration:1}}>
                        <div className="first-row">
                            <input required className="w-full border-none text-firstColor bg-containerColor mb-[20px] pt-[15px] pr-[40px] pb-[30px] pl-[20px] rounded-[5px]" type="text" placeholder={t("name")} name="name"/>
                        </div>
                        <div className="second-row flex flex-col lg:flex-row justify-between ">
                            <input required className=" w-full lg:w-[48%] border-none text-firstColor bg-containerColor mb-[20px] pt-[15px] pr-[40px] pb-[30px] pl-[20px] rounded-[5px]" type="email" placeholder="Email" name="email"/>
                            <input className="w-full lg:w-[48%] border-none text-firstColor bg-containerColor mb-[20px] pt-[15px] pr-[40px] pb-[30px] pl-[20px] rounded-[5px]" type="text" placeholder={t("subject")} name="subject"/>
                        </div>
                        <div className="third-row">
                            <textarea  required className="w-full resize-none border-none text-firstColor bg-containerColor mb-[20px] pt-[15px] pr-[40px] pb-[40px] pl-[20px] rounded-[5px]" name="message" id="" rows="7" placeholder="Message..."></textarea>
                        </div>
                        <button type="submit" className="bg-firstColor text-textWhite border-none font-medium btn mt-0 py-[20px] px-[30px] rounded-[5px] flex items-center justify-center gap-4 curser-pointer"> {t("sendmess")}  <FaPaperPlane /> </button>
                    </motion.form>
                    {error && "Error"}
                    {success && "Success - Mail envoyé"}
                </div>
            </motion.div>

        </section>
    );
};

export default Contact;