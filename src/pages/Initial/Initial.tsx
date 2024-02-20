import React from "react";
import MetaTags from "react-meta-tags";
import { useSelector } from "react-redux";
import { Breadcrumb, Container, Row } from "reactstrap";

export const Initial = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>ncc4 | Panel</title>
        </MetaTags>
        <Container fluid>
          {/* <Breadcrumb title="Inicial" breadcrumbItem="Inicial" /> */}
        </Container>
      </div>
    </React.Fragment>
  );
};
