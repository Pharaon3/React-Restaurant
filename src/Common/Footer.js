import React from 'react'
import fleskaURL from "../public/img/fleska logo.png"

function Footer() {
  return (
    <>
    <div className="mt-5 p-4 bg-dark text-white text-center">
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-sm-4 p-3">
                    Lagerstraße 23 <br/>
                        82178 Puchheim <br/>
                        <a href="#">jannatlagerstr@gmail.com</a>
                        +49 8961203673
                    </div>
                    <div className="col-sm-4 p-3">
                        <pre>
                    <b>Online Ordering System</b> <br/>
                    Powered By <br/>
                    <img src={fleskaURL} alt = "fleska logo" />
                </pre>

                    </div>
                    <div className="col-sm-4 p-3">

                    </div>
                </div>
            </div>

    </div>
    </>
  );
}

export default Footer;
