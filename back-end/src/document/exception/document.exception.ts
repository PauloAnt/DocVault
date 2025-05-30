import { HttpException, HttpStatus } from "@nestjs/common";

export default class DocumentException extends HttpException{
    constructor(message: string, statusCode: HttpStatus) {
        super(message, statusCode);
    }
}