export class ImageMessage{
    Data: any;

    Headers: string;

    constructor(data: any, headers: string){
        this.Data = data;
        this.Headers = headers;
    }

}