import React,{ useContext } from "react";
import ThemeContext from "./ThemeContext";

export const ThemeComponent = () => {
    const value=useContext(ThemeContext)
    console.log(value);
  return (
    <div> </div>
  )
}
export default ThemeComponent