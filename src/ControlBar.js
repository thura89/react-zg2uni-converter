import React, { Component } from "react";
import "./ControlBox.css";
function ControlBar({ clearIt, zawgyi, unicode }) {
  const copyToClipBoard = (ref) => {
    ref.current.select();
    document.execCommand("copy");
  };
  return (
    <div className="row ControlBox mt-5">
      <div className="text-center">
        <input
          type="button"
          className="btn btn-info btn-framed icon"
          value="Clear"
          onClick={() => clearIt()}
        ></input>
        <input
          type="button"
          className="btn btn-secondary btn-framed icon"
          onClick={() => copyToClipBoard(unicode)}
          value="Copy Unicode"
        ></input>
        <input
          type="button"
          className="btn btn-primary btn-framed icon"
          onClick={() => copyToClipBoard(zawgyi)}
          value="Copy ZawGyi"
        ></input>
      </div>
    </div>
  );
}
export default ControlBar;
