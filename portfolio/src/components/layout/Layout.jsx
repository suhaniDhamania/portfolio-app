import React from "react";

import Home from "../../pages/home/Home";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../redux/Slice";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./Layout.css";
import Menu from "../menu/Menu";

const Layout = () => {
  const isToggled = useSelector((state) => state.toggle);

  const dispatch = useDispatch();

  // Change toggle
  function ChangeToggle() {
    // console.log("click");
    dispatch(toggle());
  }

  return (
    <>
      <div className="sidebar-section">
        <div className={!isToggled ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p className="text-primary fs-3" onClick={ChangeToggle}>
              {!isToggled ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
            </p>
          </div>
          <Menu isToggled={isToggled} />
        </div>

        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
