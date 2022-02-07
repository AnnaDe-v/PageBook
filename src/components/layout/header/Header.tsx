import React, {FC, useState} from 'react';
import style from './Header.module.css'
import ImgLogo from './PB_logo.jpg'
import {Search} from '@mui/icons-material'

const Header:FC = () => {
    const [isSearchActive, setIsSearchActive] = useState(false)

    return (
        <header className={style.header}>
            <div className={style.img_wrapper}>
                <img src={ImgLogo} alt='PB_logo'/>
            </div>

            <div className={style.wrapper}>
                {!isSearchActive && <Search/>}
                <input type='text' placeholder='Search' onClick={() => setIsSearchActive(true)}/>
            </div>

        </header>
    );
};

export default Header;