import {combineReducers} from 'redux'
import {settingsReducer} from "./settingsReducer";
import {soundsReducer} from "./soundsReducer";
import {gameSDKReducer} from "./gameSDKReducer";
import {gamePaymentsReducer} from "./gamePaymentsReducer";

const reducer = combineReducers({
    settings: settingsReducer,
    sounds: soundsReducer,
    gameSDK: gameSDKReducer,
    gamePayments: gamePaymentsReducer

});

export {reducer};