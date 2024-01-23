import {
  AxiosResponse,
  AxiosError,
  CanceledError,
  AxiosRequestConfig,
} from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface IFetchRes<T> {
  count: number;
  results: T[];
}
// hook for fetching based on different generes
export default function useData<T>(
  endpoint_: string,
  reqConfigOptions?: AxiosRequestConfig,
  deps?: any[]
) {
  // state for games
  const [data_, setData_] = useState<T[]>([]);
  // state for error (if any) encountered during fetching
  const [error_, setError_] = useState("");
  // state to notify once fetching is complete
  const [isLoading_, setIsLoading] = useState(false);
  useEffect(
    () => {
      // controller for handeling the cancellations
      const controller_ = new AbortController();
      // before fetching init loading procedure
      setIsLoading(true);
      // fetching the games from RAWG api
      apiClient
        .get<IFetchRes<T>>(endpoint_, {
          signal: controller_.signal,
          ...reqConfigOptions,
        })
        .then((res_: AxiosResponse<IFetchRes<T>>) => {
          // if fetch is successfull
          console.log(
            `useData :: useEffect :: setting the data for endpoint: ${endpoint_} as:`,
            res_.data.results
          );
          setData_(res_.data.results);
          // notify loading state
          setIsLoading(false);
        })
        .catch((err_: AxiosError) => {
          if (err_ instanceof CanceledError) {
            // if we encounter a cancellation error do not treat it as a fetch error
            console.log("useData :: useEffect :: cancelling the request");
            return;
          } else {
            console.log("useData :: useEffect :: encountered error");
            setError_(err_.message);
          }
          // notify loading state
          setIsLoading(false);
        });

      return () => controller_.abort();
    },
    deps ? [...deps] : []
  );

  return { data_, error_, isLoading_ };
}
