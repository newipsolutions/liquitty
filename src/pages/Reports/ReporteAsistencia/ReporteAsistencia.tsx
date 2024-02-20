import React from "react";
import MetaTags from "react-meta-tags";
import { Container } from "reactstrap";

export const ReporteAsistencia = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>ncc4 | Panel</title>
        </MetaTags>
        <Container fluid>
          <div>Reporte</div>
          {/* <Breadcrumb title="Inicial" breadcrumbItem="Inicial" /> */}
        </Container>
      </div>
    </React.Fragment>
  );
};
