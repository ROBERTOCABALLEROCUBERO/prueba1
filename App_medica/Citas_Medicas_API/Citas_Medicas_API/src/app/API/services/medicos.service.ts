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

import { Medicos } from '../models/medicos';
import { MedicosDto } from '../models/medicos-dto';

@Injectable({
  providedIn: 'root',
})
export class MedicosService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiMedicosGet
   */
  static readonly ApiMedicosGetPath = '/api/Medicos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMedicosGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicosGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Medicos>>> {

    const rb = new RequestBuilder(this.rootUrl, MedicosService.ApiMedicosGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Medicos>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMedicosGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicosGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<Medicos>> {

    return this.apiMedicosGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Medicos>>) => r.body as Array<Medicos>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMedicosGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicosGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Medicos>>> {

    const rb = new RequestBuilder(this.rootUrl, MedicosService.ApiMedicosGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Medicos>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMedicosGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicosGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<Medicos>> {

    return this.apiMedicosGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Medicos>>) => r.body as Array<Medicos>)
    );
  }

  /**
   * Path part for operation apiMedicosUserNameGet
   */
  static readonly ApiMedicosUserNameGetPath = '/api/Medicos/{userName}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMedicosUserNameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicosUserNameGet$Plain$Response(params: {
    userName: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Medicos>> {

    const rb = new RequestBuilder(this.rootUrl, MedicosService.ApiMedicosUserNameGetPath, 'get');
    if (params) {
      rb.path('userName', params.userName, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Medicos>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMedicosUserNameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicosUserNameGet$Plain(params: {
    userName: string;
  },
  context?: HttpContext

): Observable<Medicos> {

    return this.apiMedicosUserNameGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Medicos>) => r.body as Medicos)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMedicosUserNameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicosUserNameGet$Json$Response(params: {
    userName: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Medicos>> {

    const rb = new RequestBuilder(this.rootUrl, MedicosService.ApiMedicosUserNameGetPath, 'get');
    if (params) {
      rb.path('userName', params.userName, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Medicos>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMedicosUserNameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicosUserNameGet$Json(params: {
    userName: string;
  },
  context?: HttpContext

): Observable<Medicos> {

    return this.apiMedicosUserNameGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Medicos>) => r.body as Medicos)
    );
  }

  /**
   * Path part for operation apiMedicosUserNamePut
   */
  static readonly ApiMedicosUserNamePutPath = '/api/Medicos/{userName}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMedicosUserNamePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMedicosUserNamePut$Response(params: {
    userName: string;
    body?: Medicos
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MedicosService.ApiMedicosUserNamePutPath, 'put');
    if (params) {
      rb.path('userName', params.userName, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMedicosUserNamePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMedicosUserNamePut(params: {
    userName: string;
    body?: Medicos
  },
  context?: HttpContext

): Observable<void> {

    return this.apiMedicosUserNamePut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiMedicosUserNameDelete
   */
  static readonly ApiMedicosUserNameDeletePath = '/api/Medicos/{userName}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMedicosUserNameDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicosUserNameDelete$Response(params: {
    userName: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MedicosService.ApiMedicosUserNameDeletePath, 'delete');
    if (params) {
      rb.path('userName', params.userName, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMedicosUserNameDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicosUserNameDelete(params: {
    userName: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiMedicosUserNameDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiMedicosRegistroPost
   */
  static readonly ApiMedicosRegistroPostPath = '/api/Medicos/registro';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMedicosRegistroPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMedicosRegistroPost$Response(params?: {
    body?: MedicosDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MedicosService.ApiMedicosRegistroPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMedicosRegistroPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMedicosRegistroPost(params?: {
    body?: MedicosDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiMedicosRegistroPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiMedicosMedicoGet
   */
  static readonly ApiMedicosMedicoGetPath = '/api/Medicos/medico';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMedicosMedicoGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicosMedicoGet$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MedicosService.ApiMedicosMedicoGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMedicosMedicoGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMedicosMedicoGet(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.apiMedicosMedicoGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
