import { HttpException, HttpStatus } from "@nestjs/common";

export class AuthException extends HttpException{
    constructor(message: string, statusCode: HttpStatus) {
        super(message, statusCode);
    }
}