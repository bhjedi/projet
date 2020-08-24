import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { IconButton } from '@material-ui/core';
import {Link,useHistory} from 'react-router-dom';


import "./Header.css";

function Header({backButton}){
    const history =useHistory();
    return(
        <div className='header'> 
            {backButton ?(
                
                <IconButton onClick={() =>history.replace(backButton)}>
                <ArrowBackIosIcon fontSiza='large' className='arrow' />
                </IconButton>
                
            ):(
                <IconButton>
                <PersonIcon className='icon' fontSize='large' />
                </IconButton>
            )}
            
            <Link to='/'>
            <img className='logo'
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder logo" />
            </Link>
            <Link to="/chat">
            <IconButton>
            <ForumIcon  className='icon' fontSize='large' />
            </IconButton>
            </Link>
        </div>
    );
}
export default Header;