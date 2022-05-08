import React from "react";
import "./Widgets.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Widgets (){
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchRoundedIcon className="widgets__searchIcon"/>
                <input placeholder="Search Platform!" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>Whats Happening!</h2>
            </div>

        </div>

    );
}
export default Widgets ;