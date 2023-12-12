
import { Response } from "express";
export interface DataResponse {
    error: boolean,
    message: string,
    data: any

}
export const Result = (res: Response, data: DataResponse, status: number = 200) => {
    res.status(status).send(
        data
    )
}

export const getResponse  =(error:boolean,message:string, data:any) => {
    const response:DataResponse = {
        error,
        message,
        data
    }
    return response;
}