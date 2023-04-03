import React, { useState, useRef } from "react";
import "./RabbitBox.css";
import ControlBar from "./ControlBar";
import { zg2uni, uni2zg } from "./Rabbit";
function RabbitBox() {
  const [zawgyi, SetZawgyi] = useState("");
  const [unicode, SetUnicode] = useState("");
  const zawgyiRef = useRef(null);
  const unicodeRef = useRef(null);
  const uniChange = (e) => {
    SetUnicode(e.target.value);
    SetZawgyi(uni2zg(e.target.value));
  };
  const zawgyiChange = (e) => {
    SetZawgyi(e.target.value);
    SetUnicode(zg2uni(e.target.value));
  };
  const clearIt = () => {
    SetZawgyi("");
    SetUnicode("");
  };
  return (
    <div className="container">
      <div className="rabbitholder">
        <h1 className="text-white">
          <span className="red">yathar</span> Converter
        </h1>
        <h2 className="text-white">For Tonechan, Honey, Samme, Yoonyoon</h2>
        <div className="row">
          <div className="col-md">
            <h4 className="text-white">Unicode</h4>
            <textarea
              ref={unicodeRef}
              className="unicode"
              onChange={uniChange}
              value={unicode}
              placeholder="ရေးကြည့်လေ..."
            ></textarea>
          </div>
          <div className="col-md">
            <h4 className="text-white">ZawGyi</h4>
            <textarea
              ref={zawgyiRef}
              className="zawgyi"
              onChange={zawgyiChange}
              value={zawgyi}
              placeholder="ေရးၾကည့္ေလ..."
            ></textarea>
          </div>
        </div>
      </div>
      <ControlBar
        zawgyi={zawgyiRef}
        unicode={unicodeRef}
        clearIt={clearIt}
      ></ControlBar>
    </div>
  );
}
export default RabbitBox;
