import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

import { AvForm, AvField } from "availity-reactstrap-validation";

const NormalValidation = () => {
  return (
    <React.Fragment>
      <Col xl={6}>
        <Card>
          <CardHeader className="justify-content-between d-flex align-items-center">
            <h4 className="card-title">React Validation - Normal</h4>
            <a
              href="//www.npmjs.com/package/availity-reactstrap-validation"
              target="_blank" rel="noreferrer"
              className="btn btn-sm btn-soft-secondary"
            >
              Docs <i className="mdi mdi-arrow-right align-middle"></i>
            </a>
          </CardHeader>
          <CardBody>
            <AvForm className="needs-validation">
              <Row>
                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="validationCustom01">First name</Label>
                    <AvField
                      name="firstname"
                      placeholder="First name"
                      type="text"
                      errorMessage="Enter First Name"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="validationCustom01"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup className="mb-3">
                    <Label htmlFor="validationCustom02">Last name</Label>
                    <AvField
                      name="lastname"
                      placeholder="Last name"
                      type="text"
                      errorMessage="Enter Last name"
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="validationCustom02"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <FormGroup className="mb-3">
                    <Label htmlFor="validationCustom03">City</Label>
                    <AvField
                      name="city"
                      placeholder="City"
                      type="text"
                      errorMessage=" Please provide a valid city."
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="validationCustom03"
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup className="mb-3">
                    <Label htmlFor="validationCustom04">State</Label>
                    <AvField
                      name="state"
                      placeholder="State"
                      type="text"
                      errorMessage="Please provide a valid state."
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="validationCustom04"
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup className="mb-3">
                    <Label htmlFor="validationCustom05">Zip</Label>
                    <AvField
                      name="zip"
                      placeholder="Zip Code"
                      type="text"
                      errorMessage=" Please provide a valid zip."
                      className="form-control"
                      validate={{ required: { value: true } }}
                      id="validationCustom05"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <FormGroup className="mb-3">
                    <div className="form-check">
                      <Input
                        type="checkbox"
                        className="form-check-input"
                        id="invalidCheck"
                      />
                      <Label
                        className="form-check-label"
                        htmlFor="invalidCheck"
                      >
                        {" "}
                        Agree to terms and conditions
                      </Label>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Button color="primary" type="submit">
                Submit form
              </Button>
            </AvForm>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default NormalValidation;
