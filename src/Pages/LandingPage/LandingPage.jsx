import React from 'react'
import css from "./LandingPage.module.css"
import logo from "../../images/sl_z_072523_61700_01.jpg"

const LandingPage = () => {
  return (
    <div className={css.frame}> 
<div className={css.columns}>

    {/*logo area */}
    <div className={css.logo}>
<img src={logo} alt="" />
    </div>

    {/* content area */}
    <div className={css.content}>
         <h1>Happening now</h1>
<span>
   Join today.
</span>
    </div>
</div>

    </div>
    
  )
}

export default LandingPage