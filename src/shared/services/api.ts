import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';

import { CONTENT_TYPE } from '#/shared/constants';

export enum REQUEST_ACTION {
  GET = 'get',
  PUT = 'put',
  POST = 'post',
  DELETE = 'delete'
}

type TRequestOptions = {
  action: REQUEST_ACTION;
  axiosInstance: AxiosInstance;
  endpoint: string;
  params?: object;
  data?: object;
};

type TRequest = (options: TRequestOptions) => AxiosPromise<AxiosResponse>;

export const request: TRequest = async ({
  action,
  axiosInstance,
  endpoint,
  params,
  data
}) => {
  try {
    const result = await axiosInstance.request({
      method: action,
      url: endpoint,
      data,
      params
    });

    return result;
  } catch (error) {
    return error;
  }
};

type TSetAxiosHeaderToken = (token: string) => void;

export const setAxiosHeaderToken: TSetAxiosHeaderToken = token => {
  axios.defaults.headers = {
    common: {
      accessToken: token,
      post: {
        'Content-Type': CONTENT_TYPE.JSON
      }
    }
  };
};
