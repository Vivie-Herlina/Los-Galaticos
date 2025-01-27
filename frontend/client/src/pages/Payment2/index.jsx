import React from "react";
import NavbarWithAuth from "../../components/NavbarWithAuth/NavbarWithAuth";
import Dropdown from "../../components/Dropdown";
import Footer from "../../components/Footer";
// import "../../style/Payment.css";

const Payment2 = () => {
  return (
    <>
      <NavbarWithAuth />
      <main className=" flex flex-col items-center">
        <h2 className="">Payment</h2>
        <div className="payment-box">
          <h3>Payment Confirm</h3>
        </div>
        <div className="success-image">
          <img
            src="/images/img/sukses.png"
            className="animated-image"
            alt="Success"
          />
        </div>
        <h1 id="point">+350 Point</h1>
      </main>
      <Footer /> {/* Import Footer Component */}
    </>
  );
};

export default Payment2;
