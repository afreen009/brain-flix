import { useState } from "react";
import './Header.scss';


const Header = () => {
    return (
        <header>
            <nav className="header">
            <div className="header__logo"></div>
            <div className="header__rightSec">
                <div className="header__searchDiv">
                    <input type="text" className="header__searchBar" placeholder="Search" />
                    <div className="header__imageBox">
                        <div className="header__image">
                            <img src="/src/assets/images/Mohan-muruge.jpg" className="header__imgCircle" alt="users image"/>
                        </div>
                    </div>
                </div>
                <div className="header__uploadBtnDiv">
                    <button type="submit" className="header__uploadBtn">
                        <img className="header__btnImg" src="/src/assets/icons/upload.svg" alt="upload image" />
                        UPLOAD
                    </button>
                    <div className="header__tabDesk">
                        <div className="header__image">
                            <img src="/src/assets/images/Mohan-muruge.jpg" className="header__imgCircle" alt="users image"/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </header>
    );
};

export default Header;