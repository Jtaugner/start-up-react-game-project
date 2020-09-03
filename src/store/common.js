export const SHOW_ADV = "SHOW_ADV";


export const TOGGLE_SETTINGS = "TOGGLE_SETTINGS";
export const TOGGLE_SOUNDS = "TOGGLE_SOUNDS";



export const CHANGE_GAME_SDK = "CHANGE_GAME_SDK";
export const CHANGE_GAME_PAYMENTS = "CHANGE_GAME_PAYMENTS";


export const getFromLocalStorage = (name, defaultVal) => {
  let val = localStorage.getItem(name);
  if(val) return Number(val);
  localStorage.setItem(name, defaultVal);
  return defaultVal;
};