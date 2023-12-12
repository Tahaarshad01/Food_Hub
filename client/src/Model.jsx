import React from "react";
import ReactDom from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Model = ({ children, onClose }) => {
  const Model_styles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    backgroundColor: "#BCC6CC",
    transform: "translate(-50%, -50%)",
    zIndex: "10",
    height: "90%",
    width: "90%",
  };

  const Overlay_style = {
    position: "fixed",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: "10",
  };

  return ReactDom.createPortal(
    <>
      <div style={Overlay_style}>
        <div style={Model_styles}>
          <button
            className="btn bg-warning fs-4 col-md-1"
            style={{
              marginLeft: "90%",
              zIndex: "20",
              marginTop: "10px",
              borderRadius: "40px",
            }}
            onClick={onClose}
          >
            close
          </button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("cart-root")
  );
};

export default Model;
