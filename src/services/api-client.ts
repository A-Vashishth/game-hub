import axios, { AxiosRequestConfig } from "axios";
import { IFetchGamesResponse } from "../interfaces/interfaces";

const axiosInstance_ = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "11bd4be796054cf1b79c496490e6e9c4",
  },
});
export default class APIClient<T> {
  public constructor(private _endpoint: string) {}

  // if we don't use arrow function syntax this keyword might give us some problems
  public getAll = (queryParams?: AxiosRequestConfig) => {
    return axiosInstance_
      .get<IFetchGamesResponse<T>>(this._endpoint, queryParams)
      .then((res_) => res_.data);
  };

  public get = (id: string | number) => {
    return axiosInstance_
      .get<T>(this._endpoint + "/" + id)
      .then((res_) => res_.data);
  };
}
