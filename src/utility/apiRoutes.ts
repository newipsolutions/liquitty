import { CreateQueryParams, RequestQueryBuilder } from "@nestjsx/crud-request";

export interface IApiRoute {
  route: string;
}

function createCrud(endpoint: string) {
  return {
    createSingle: `${endpoint}`,
    createMultiple: `${endpoint}/bulk`,
    retrieveSingle: (id: number) => `${endpoint}/${id}`,
    retrieveMultiple: `${endpoint}`,
    updateSingle: (id: number) => `${endpoint}/${id}`,
    updateMultiple: `${endpoint}/bulk`,
    deleteSingle: (id: number) => `${endpoint}/${id}`,
    deleteMultiple: `${endpoint}/bulk`,
  };
}

function transformQueryParams(queryParams: CreateQueryParams) {
  const params = RequestQueryBuilder.create(queryParams).query();
  return params ? `?${params}` : "";
}

export class ApiRoutes {
  constructor() {}

  static auth = {
    authLogin: "auth/login",
    authLogout: "auth/logout",
    authMe: "v1/users/me",
    getUsers: "/v1/users",
  };

  static nis = {
    colas: createCrud("api/nis/Colas"),
  };

  static createAPIRoute(
    endpoint: string,
    queryParams: CreateQueryParams = {}
  ): IApiRoute {
    return {
      route: `${endpoint}${
        queryParams ? transformQueryParams(queryParams) : ""
      }`,
    };
  }
}
