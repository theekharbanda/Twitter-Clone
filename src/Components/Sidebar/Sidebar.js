import React, { Component } from "react";
import "./Sidebar.css"
import Icon from '@mui/icons-material/HomeRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from '../SidebarOption/SidebarOption';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'; 
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import {Button} from '@mui/material';


function Sidebar (){
    return (
        <div className ="sidebar">
            {/* B social media icon */}
            <TwitterIcon className ="sidebar_twitterIcon"/>

            <SidebarOption active Icon ={Icon} text  ="Home"/>
            <SidebarOption Icon ={SearchRoundedIcon} text  ="Explore"/>
            <SidebarOption Icon ={NotificationsRoundedIcon} text  ="Notifications"/>
            <SidebarOption Icon ={MailOutlineRoundedIcon} text  ="Mail"/>
            <SidebarOption Icon ={BookmarkBorderRoundedIcon} text  ="Bookmarks"/>
            <SidebarOption Icon ={ListRoundedIcon} text  ="Lists"/>
            <SidebarOption Icon ={PermIdentityRoundedIcon} text  ="Profile"/>
            <SidebarOption Icon ={MoreHorizRoundedIcon} text  ="More"/>

            {/*Tweet Option  */}
            <Button variant= "outlined" className= "sidebar__tweet" fullWidth>Tweet</Button>

        </div>

    )
}

export default Sidebar;
