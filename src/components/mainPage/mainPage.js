import React, {useState} from 'react';
import './mainPage.scss'
import {connect} from "react-redux";

import TopMenu from "../topMenu/topMenu";


function MainPage(props) {


    return (
        <div className={'mainPage'}>
            <TopMenu>
                <!--Верхнее меню, сюда должны быть вставлены элементы, которые там находятся -->
            </TopMenu>

        </div>
    );
}

export default connect(
    (store)=>({

    })
    ,
    (dispatch)=>({

    })

    )(MainPage);
