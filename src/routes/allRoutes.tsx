import { Redirect } from "react-router-dom";
import { Login } from "src/pages/Authentication/Login";
import { Initial } from "src/pages/Initial/Initial";
import { ReporteAsistencia } from "src/pages/Reports/ReporteAsistencia/ReporteAsistencia";

interface RouteProps {
  path: string;
  component: any;
  exact?: boolean;
}

const userRoutes: Array<RouteProps> = [
  { path: "/inicio", component: Initial },
  { path: "/reporte-asistencia", component: ReporteAsistencia },
  { path: "/", exact: true, component: () => <Redirect to="/inicio" /> },
];

const authRoutes: Array<RouteProps> = [{ path: "/", component: Login }];

export { userRoutes, authRoutes };
