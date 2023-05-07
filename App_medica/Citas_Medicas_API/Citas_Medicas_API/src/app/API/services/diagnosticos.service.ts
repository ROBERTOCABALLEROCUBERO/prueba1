/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { DiagnosticosDto } from '../models/diagnosticos-dto';

@Injectable({
  providedIn: 'root',
})
export class DiagnosticosService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiDiagnosticosGet
   */
  static readonly ApiDiagnosticosGetPath = '/api/Diagnosticos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiagnosticosGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiagnosticosGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<DiagnosticosDto>>> {

    const rb = new RequestBuilder(this.rootUrl, DiagnosticosService.ApiDiagnosticosGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DiagnosticosDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDiagnosticosGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiagnosticosGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<DiagnosticosDto>> {

    return this.apiDiagnosticosGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<DiagnosticosDto>>) => r.body as Array<DiagnosticosDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiagnosticosGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiagnosticosGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<DiagnosticosDto>>> {

    const rb = new RequestBuilder(this.rootUrl, DiagnosticosService.ApiDiagnosticosGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DiagnosticosDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDiagnosticosGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiagnosticosGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<DiagnosticosDto>> {

    return this.apiDiagnosticosGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<DiagnosticosDto>>) => r.body as Array<DiagnosticosDto>)
    );
  }

  /**
   * Path part for operation apiDiagnosticosPost
   */
  static readonly ApiDiagnosticosPostPath = '/api/Diagnosticos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiagnosticosPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiagnosticosPost$Plain$Response(params?: {
    body?: DiagnosticosDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DiagnosticosDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiagnosticosService.ApiDiagnosticosPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DiagnosticosDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDiagnosticosPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiagnosticosPost$Plain(params?: {
    body?: DiagnosticosDto
  },
  context?: HttpContext

): Observable<DiagnosticosDto> {

    return this.apiDiagnosticosPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DiagnosticosDto>) => r.body as DiagnosticosDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiagnosticosPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiagnosticosPost$Json$Response(params?: {
    body?: DiagnosticosDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DiagnosticosDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiagnosticosService.ApiDiagnosticosPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DiagnosticosDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDiagnosticosPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiagnosticosPost$Json(params?: {
    body?: DiagnosticosDto
  },
  context?: HttpContext

): Observable<DiagnosticosDto> {

    return this.apiDiagnosticosPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DiagnosticosDto>) => r.body as DiagnosticosDto)
    );
  }

  /**
   * Path part for operation apiDiagnosticosIdGet
   */
  static readonly ApiDiagnosticosIdGetPath = '/api/Diagnosticos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiagnosticosIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiagnosticosIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DiagnosticosDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiagnosticosService.ApiDiagnosticosIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DiagnosticosDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDiagnosticosIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiagnosticosIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<DiagnosticosDto> {

    return this.apiDiagnosticosIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DiagnosticosDto>) => r.body as DiagnosticosDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiagnosticosIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiagnosticosIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DiagnosticosDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiagnosticosService.ApiDiagnosticosIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DiagnosticosDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDiagnosticosIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiagnosticosIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<DiagnosticosDto> {

    return this.apiDiagnosticosIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DiagnosticosDto>) => r.body as DiagnosticosDto)
    );
  }

  /**
   * Path part for operation apiDiagnosticosIdPut
   */
  static readonly ApiDiagnosticosIdPutPath = '/api/Diagnosticos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiagnosticosIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiagnosticosIdPut$Plain$Response(params: {
    id: number;
    body?: DiagnosticosDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DiagnosticosDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiagnosticosService.ApiDiagnosticosIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DiagnosticosDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDiagnosticosIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiagnosticosIdPut$Plain(params: {
    id: number;
    body?: DiagnosticosDto
  },
  context?: HttpContext

): Observable<DiagnosticosDto> {

    return this.apiDiagnosticosIdPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DiagnosticosDto>) => r.body as DiagnosticosDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiagnosticosIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiagnosticosIdPut$Json$Response(params: {
    id: number;
    body?: DiagnosticosDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DiagnosticosDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiagnosticosService.ApiDiagnosticosIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DiagnosticosDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDiagnosticosIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiagnosticosIdPut$Json(params: {
    id: number;
    body?: DiagnosticosDto
  },
  context?: HttpContext

): Observable<DiagnosticosDto> {

    return this.apiDiagnosticosIdPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DiagnosticosDto>) => r.body as DiagnosticosDto)
    );
  }

  /**
   * Path part for operation apiDiagnosticosIdDelete
   */
  static readonly ApiDiagnosticosIdDeletePath = '/api/Diagnosticos/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiagnosticosIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiagnosticosIdDelete$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, DiagnosticosService.ApiDiagnosticosIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDiagnosticosIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiagnosticosIdDelete$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<boolean> {

    return this.apiDiagnosticosIdDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiagnosticosIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiagnosticosIdDelete$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, DiagnosticosService.ApiDiagnosticosIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDiagnosticosIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiagnosticosIdDelete$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<boolean> {

    return this.apiDiagnosticosIdDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiDiagnosticosCitaCitaIdGet
   */
  static readonly ApiDiagnosticosCitaCitaIdGetPath = '/api/Diagnosticos/cita/{citaId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiagnosticosCitaCitaIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiagnosticosCitaCitaIdGet$Plain$Response(params: {
    citaId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DiagnosticosDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiagnosticosService.ApiDiagnosticosCitaCitaIdGetPath, 'get');
    if (params) {
      rb.path('citaId', params.citaId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DiagnosticosDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDiagnosticosCitaCitaIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiagnosticosCitaCitaIdGet$Plain(params: {
    citaId: number;
  },
  context?: HttpContext

): Observable<DiagnosticosDto> {

    return this.apiDiagnosticosCitaCitaIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DiagnosticosDto>) => r.body as DiagnosticosDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiagnosticosCitaCitaIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiagnosticosCitaCitaIdGet$Json$Response(params: {
    citaId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DiagnosticosDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiagnosticosService.ApiDiagnosticosCitaCitaIdGetPath, 'get');
    if (params) {
      rb.path('citaId', params.citaId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DiagnosticosDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDiagnosticosCitaCitaIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiagnosticosCitaCitaIdGet$Json(params: {
    citaId: number;
  },
  context?: HttpContext

): Observable<DiagnosticosDto> {

    return this.apiDiagnosticosCitaCitaIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DiagnosticosDto>) => r.body as DiagnosticosDto)
    );
  }

}
