import React, { useState } from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer"


function Header(){
    const [{ user }, dispatch] = useDataLayerValue();
    return(
        <div className="header">
            <div className="header__left">
            <SearchIcon />
            <input
             placeholder="Search for Artist, Songs, Album "
              type="text"
               />
            </div>

            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header