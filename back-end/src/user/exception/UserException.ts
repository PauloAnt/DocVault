import { HttpException, HttpStatus } from "@nestjs/common";

export class UserException extends HttpException{
    constructor(message: string, statusCode: HttpStatus) {
        super(message, statusCode);
    }
}