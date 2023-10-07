import React from "react";
import { Col, Row } from "react-bootstrap";
import "./SignIn.css";

const SignIn = () => {

  return (
    <div>
        <Row>
        <Col>
          <div className="xlogo">
            <img
              src="https://www.businessofapps.com/wp-content/uploads/2023/07/twitter-x-e1690183153269.webp"
              alt="twitter logo"
              height="350px"
              width="600px"
            ></img>
          </div>
        </Col>
        <Col>
          <div className="container">
            <div className="text">
              <h1 className="hdng">Happening now</h1>
              <p className="join">Join today.</p>
            </div>
            <div className="buttons">
              <button>
                <span>
                  <img
                    src="https://banner2.cleanpng.com/20180416/ppe/kisspng-g-suite-pearl-river-middle-school-google-docs-soft-google-plus-5ad4f155b36555.6827254815239048537348.jpg" alt="logo"
                    width="28px"
                    height="28px"
                  ></img>
                </span>
                Sign up with Google{" "}
              </button>
            </div>
            <div className="button2">
            <button>
                <span>
                  <img
                    src="https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-preview.jpg" alt="logo"
                    width="50px"
                    height="30px"
                  ></img>
                </span>
                Sign up with Apple{" "}
              </button>
            </div>
            <div className="or">
                <span><hr style={{ maxWidth: "150px" }}/><p>Or</p><hr style={{ maxWidth: "150px" }}/></span>
            </div>
            <div className="button3">
                <button>Create account</button>
                <p className="stext">By signing up, you agree to the Terms of Service and Privacy Policy,<br/> including Cookie Use.</p>
            </div>
            <div className="question">
                <p>Already have an account?</p>
            </div>
            <div className="button4">
                <button><a href="login">Sign in</a></button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
      <div className="footer">
        <p>About</p>
        <p>Help Center</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Accessibility</p>
        <p>Ads info</p>
        <p>Blog</p>
        <p>Status</p>
        <p>Carrers</p>
        <p>Brand Resources</p>
        <p>Advertising</p>
        <p>Marketing</p>
        <p>X for Business</p>
        <p>Developers</p>
        <p>Directory</p>
        <p>Settings</p>
        <p>&copy; 2023 David's Clone</p>
      </div>
      </Row>
    </div>
  );
};

export default SignIn;
