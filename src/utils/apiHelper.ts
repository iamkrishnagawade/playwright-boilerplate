import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Env } from "./env";
import { Logger } from "./logger";

export class ApiHelper {
    static async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<{ status: number; data: T }> {
        try {
            const url = `${Env.BASE_URL}${endpoint}`;
            Logger.info(`Making GET request to: ${url}`);
            const response: AxiosResponse<T> = await axios.get(url, config);
            return { status: response.status, data: response.data };
        } catch (error) {
            Logger.error(`GET request to ${endpoint} failed: ${error}`);
            throw error;
        }
    }

    static async post<T>(endpoint: string, data: any, config?: AxiosRequestConfig): Promise<{ status: number; data: T }> {
        try {
            const url = `${Env.BASE_URL}${endpoint}`;
            Logger.info(`Making POST request to: ${url}`);
            const response: AxiosResponse<T> = await axios.post(url, data, config);
            return { status: response.status, data: response.data};
        } catch (error) {
            Logger.error(`POST request to ${endpoint} failed: ${error}`);
            throw error;
        }
    }

    static async put<T>(endpoint: string, data: any, config?: AxiosRequestConfig): Promise<{ status: number; data: T }> {
        try {
            const url = `${Env.BASE_URL}${endpoint}`;
            Logger.info(`Making PUT request to: ${url}`);
            const response: AxiosResponse<T> = await axios.put(url, data, config);
            return { status: response.status, data: response.data};
        } catch (error) {
            Logger.error(`PUT request to ${endpoint} failed: ${error}`);
            throw error;
        }
    }

    static async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<{ status: number; data: T }> {
        try {
            const url = `${Env.BASE_URL}${endpoint}`;
            Logger.info(`Making DELETE request to: ${url}`);
            const response: AxiosResponse<T> = await axios.delete(url, config);
            return { status: response.status, data: response.data};
        } catch (error) {
            Logger.error(`DELETE request to ${endpoint} failed: ${error}`);
            throw error;
        }
    }
}