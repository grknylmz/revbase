import axios, { AxiosInstance } from 'axios';
import * as endpoints from '@/endpoints';

export class SubjectApiService {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: endpoints.url,
    });
  }
  public getSubjects(): any {
    return this.axiosInstance
      .get(endpoints.getSubjects)
      .then((res) => {
        if (!res.data) {
          throw new Error('Error while fetching the subjects!');
        }
        return res.data;
      })
      .catch((err) => err);
  }
}
