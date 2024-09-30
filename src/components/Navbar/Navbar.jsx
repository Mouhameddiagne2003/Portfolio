import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../../data.jsx';
import { useTranslation } from 'react-i18next';
import "./Navbar.css";

const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false);

    const { t } = useTranslation();
    return (
        <nav className="nav z-10 md:fixed md:inset-y-0 md:right-[30px] md:flex md:items-center ">
            <div className={`${showMenu ? ' inset-y-0 left-0 fixed bg-containerColor nav__menu w-full z-10 py-[60px] px-[40px]' : 'inset-y-0 left-[-100%] fixed bg-containerColor nav__menu w-full py-[60px] px-[40px]'}`}>
                <ul className="nav__list">
                    {links.map((link, index) => {
                        return (
                            <li key={index} className=" nav__item md:mx-[20px] md:my-[20px] ">
                                <NavLink to={link.path} className={({ isActive }) => isActive ? "flex items-center gap-[24px] border-b border-borderColor md:p-0 md:border-none md:bg-containerColor md:h-[50px] md:w-[50px] md:relative md:rounded-[50%] nav__link active-nav md:hover:bg-firstColor":"md:hover:bg-firstColor flex items-center gap-[24px] border-b border-borderColor md:p-0 md:border-none md:relative md:bg-containerColor md:h-[50px] md:w-[50px] md:rounded-[50%] nav__link"} onClick={()=> {setshowMenu(!showMenu)}}
                                >
                                    <div className="md:m-auto md:text-[20px]">
                                        {link.icon}
                                    </div>

                                    <h3 className="text-titleColor text-[24px] font-weight500 md:absolute md:top-0 md:right-0 md:px-6 md:bg-firstColor md:h-[100%] md:leading-[50px] md:rounded-[30px] md:text-[15px] md:text-textWhite nav__name">
                                        {t(link.name)}
                                    </h3>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div
                className={`${showMenu ? 'fixed cursor-pointer top-[30px] rounded-[5px] right-[30px] w-[40px] h-[40px] bg-containerColor py-[12px] px-[11px]  nav__toggle focus md:hidden z-20':'z-20 md:hidden fixed cursor-pointer top-[30px] rounded-[5px] right-[30px] w-[40px] h-[40px] bg-containerColor py-[12px] px-[11px]  nav__toggle'}`}
                onClick={() => {
                    setshowMenu(!showMenu);

                }}>
                {/*<RiMenu3Fill/>*/}
                <span className="burger"></span>
                <span className="burger"></span>
                <span className="burger"></span>

            </div>
        </nav>
    );
};

export default Navbar;