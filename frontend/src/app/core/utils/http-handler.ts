import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

function handleHTTPErrors(errorResponse: HttpErrorResponse): Observable<never> {
  let errorMessage = 'An unknown error occurred!';
  if (!errorResponse.error || !errorResponse.error.message) {
    return throwError(errorMessage);
  }
  errorMessage = errorResponse.error.message ?? errorMessage;
  return throwError(errorMessage);
}

export { handleHTTPErrors };
