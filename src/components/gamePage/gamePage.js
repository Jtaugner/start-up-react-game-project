import React, {useState} from 'react';
import './gamePage.scss'
import {connect} from "react-redux";
import TopMenu from "../topMenu/topMenu"
import {showAdv} from "../../store/ac";


function GamePage(props) {
    const {
        showAdv
    } = props;




    return (
        <div className={'gamePage'}>
            <TopMenu>
                <!--Верхнее меню, сюда должны быть вставлены элементы, которые там находятся -->
            </TopMenu>
        </div>
    );
}

export default connect((store) => ({
    }),
    (dispatch) => ({
        showAdv: () => dispatch(showAdv()),
    })
)(GamePage);
