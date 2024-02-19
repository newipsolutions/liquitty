import React from "react";
import { Container, Row, Col, Form } from "reactstrap";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

import AuthCode from "react-auth-code-input";

//import images
import logolight from "../../assets/images/logo-light.png";
import logoDark from "../../assets/images/logo-dark.png";

const TwoStep1 = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Two Step Verification | Dashonic - React Admin & Dashboard Template</title>
            </MetaTags>
            <div className="authentication-bg min-vh-100">
                <div className="bg-overlay bg-white"></div>
                <Container>
                    <div className="d-flex flex-column min-vh-100 px-3 pt-4">
                        <Row className="justify-content-center my-auto">
                            <Col md={8} lg={6} xl={4}>

                                <div className="text-center py-5">
                                    <div className="mb-4 mb-md-5">
                                        <Link to="/sales" className="d-block auth-logo">
                                            <img src={logoDark} alt="" height="22" className="auth-logo-dark" />
                                            <img src={logolight} alt="" height="22" className="auth-logo-light" />
                                        </Link>
                                    </div>
                                    <div className="mb-4 mb-md-5">
                                        <div className="avatar-lg mx-auto">
                                            <div className="avatar-title bg-light text-primary display-5 rounded-circle">
                                                <i className="uil uil-envelope-alt"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-muted mb-4 mb-md-5">
                                        <h4 className="">Verify Your Email</h4>
                                        <p>Please enter the 4 digit code sent to <span className="fw-semibold">example@abc.com</span></p>
                                    </div>
                                    <Form>
                                        <Row>
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <AuthCode
                                                        characters={4}
                                                        onChange={() => null}
                                                        allowedCharacters="^[0-9]"
                                                        inputStyle={{
                                                            width: "72px",
                                                            height: "45px",
                                                            padding: "8px",
                                                            borderRadius: "8px",
                                                            fontSize: "16px",
                                                            textAlign: "center",
                                                            marginRight: "15px",
                                                            border: "1px solid #e2e5e8",
                                                            textTransform: "uppercase",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </Row>
                                    </Form>

                                    <div className="mt-4">
                                        <Link to="#" className="btn btn-info w-100">Confirm</Link>
                                    </div>

                                    <div className="mt-5 text-center text-muted">
                                        <p>Didn&apos;t receive a code ? <Link to="#" className="fw-medium text-decoration-underline">Resend</Link></p>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={12}>
                                <div className="text-center text-muted p-4">
                                    <p className="mb-0">&copy; {" "}{new Date().getFullYear()} Dashonic. Crafted with <i className="mdi mdi-heart text-danger"></i> by Pichforest</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default TwoStep1;