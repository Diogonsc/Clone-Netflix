import React from 'react';
import logoNetflix from '../../assets/logoNetflix.png';
import logoUser from '../../assets/logoUser.png';
import './styles.css';

export default ({black})=>{
    return(
        <header className={black ?"black" : ''}>
            <div className="header--logo">
                <img src={logoNetflix}/>
            </div>
            <div className="header--user">
                <img src={logoUser}/>
            </div>
        </header>
    )
}