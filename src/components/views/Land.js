import React from "react";
import { Link } from "react-router-dom";
import background from "../views/images/background.jpg";

const Land = () => {
  return (
    <div className="row g-0 auth-wrapper">
      <div
        className="col-12 col-md-12 col-lg-12 h-100 "
        style={{
          backgroundImage: "url(" + background + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={{ marginTop: "23%" }}>
          <div className="auth-option text-white text-center pt-2">
            Click here to{" "}
            <Link className="text-link" to="/login">
              Login
            </Link>
          </div>
          <div className="auth-option text-white text-center pt-2">
            Click here to{" "}
            <Link className="text-link" to="/ClientRegistration">
              Client Registration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Land;
