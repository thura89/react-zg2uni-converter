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
        <h1 className="mt-5 text-white">yathar Converter</h1>
        <h2 className="text-white">For ToneChan, Honey, Sammy, Yoon Yoon</h2>
        <div className="row">
          <div className="col-md">
            <h4 className="text-white">Unicode</h4>
            <textarea
              ref={unicodeRef}
              className="unicode"
              onChange={uniChange}
              value={unicode}
            ></textarea>
          </div>
          <div className="col-md">
            <h4 className="text-white">ZawGyi</h4>
            <textarea
              ref={zawgyiRef}
              className="zawgyi"
              onChange={zawgyiChange}
              value={zawgyi}
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
