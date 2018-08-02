import {HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
export class ErrorHandler {
    static handleError(error: Response | any){
        let errorMessage: string
        if(error instanceof HttpErrorResponse){
            const body = error.error
            errorMessage = ` ${error.url}: ${error.status} - ${error.statusText || ''} ${body}`
        }else{
            errorMessage = error.message ? error.massage : error.toString()
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}