import React from "react";
import css from "./LandingPage.module.css";
import logo from "../../images/sl_z_072523_61700_01.jpg";
import apple from "../../icons/apple.svg";
import profile from "../../images/mitsuri-kanroji-3840x2160-16948.jpg"
import google from "../../icons/google.svg"
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
          <span>Join today.</span>

          {/* Container 1 */}
<div className={css.container1}>

  {/* column one */}
  <div className={css.columnone}>
    <img src={profile} alt="my profile" />

    {/* row one for text */}
  <div className={css.rowone}>

    <div className={css.username}>
      <span>Sign in as Astrid</span>
    </div>
  
    <span>astrid25.atara@gmail.com</span>
  </div>
  </div>
  <div className={css.column2}>
    <img src={google} alt="my google icon" />
  </div>
</div>

{/* Container 3 */}
          <div className={css.container3}>
            <img src={apple} alt="my aple logo" />
            <span>Sign up with apple</span>
          </div>

{/* container 2 */}
<div className={css.container2}>
  <span>Create account</span>
</div>

          
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
