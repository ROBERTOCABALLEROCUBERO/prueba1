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

import { PacientesDto } from '../models/pacientes-dto';

@Injectable({
  providedIn: 'root',
})
export class PacientesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPacientesGet
   */
  static readonly ApiPacientesGetPath = '/api/Pacientes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPacientesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacientesGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PacientesDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PacientesService.ApiPacientesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PacientesDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPacientesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacientesGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<PacientesDto>> {

    return this.apiPacientesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PacientesDto>>) => r.body as Array<PacientesDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPacientesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacientesGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PacientesDto>>> {

    const rb = new RequestBuilder(this.rootUrl, PacientesService.ApiPacientesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PacientesDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPacientesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacientesGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<PacientesDto>> {

    return this.apiPacientesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PacientesDto>>) => r.body as Array<PacientesDto>)
    );
  }

  /**
   * Path part for operation apiPacientesUsernameGet
   */
  static readonly ApiPacientesUsernameGetPath = '/api/Pacientes/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPacientesUsernameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacientesUsernameGet$Plain$Response(params: {
    username: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PacientesDto>> {

    const rb = new RequestBuilder(this.rootUrl, PacientesService.ApiPacientesUsernameGetPath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacientesDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPacientesUsernameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacientesUsernameGet$Plain(params: {
    username: string;
  },
  context?: HttpContext

): Observable<PacientesDto> {

    return this.apiPacientesUsernameGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<PacientesDto>) => r.body as PacientesDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPacientesUsernameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacientesUsernameGet$Json$Response(params: {
    username: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PacientesDto>> {

    const rb = new RequestBuilder(this.rootUrl, PacientesService.ApiPacientesUsernameGetPath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacientesDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPacientesUsernameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacientesUsernameGet$Json(params: {
    username: string;
  },
  context?: HttpContext

): Observable<PacientesDto> {

    return this.apiPacientesUsernameGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<PacientesDto>) => r.body as PacientesDto)
    );
  }

  /**
   * Path part for operation apiPacientesUsernamePut
   */
  static readonly ApiPacientesUsernamePutPath = '/api/Pacientes/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPacientesUsernamePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPacientesUsernamePut$Response(params: {
    username: string;
    body?: PacientesDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PacientesService.ApiPacientesUsernamePutPath, 'put');
    if (params) {
      rb.path('username', params.username, {});
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
   * To access the full response (for headers, for example), `apiPacientesUsernamePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPacientesUsernamePut(params: {
    username: string;
    body?: PacientesDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiPacientesUsernamePut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPacientesUsernameDelete
   */
  static readonly ApiPacientesUsernameDeletePath = '/api/Pacientes/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPacientesUsernameDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacientesUsernameDelete$Response(params: {
    username: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PacientesService.ApiPacientesUsernameDeletePath, 'delete');
    if (params) {
      rb.path('username', params.username, {});
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
   * To access the full response (for headers, for example), `apiPacientesUsernameDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacientesUsernameDelete(params: {
    username: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiPacientesUsernameDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPacientesPacienteGet
   */
  static readonly ApiPacientesPacienteGetPath = '/api/Pacientes/paciente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPacientesPacienteGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacientesPacienteGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PacientesDto>> {

    const rb = new RequestBuilder(this.rootUrl, PacientesService.ApiPacientesPacienteGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacientesDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPacientesPacienteGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacientesPacienteGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<PacientesDto> {

    return this.apiPacientesPacienteGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<PacientesDto>) => r.body as PacientesDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPacientesPacienteGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacientesPacienteGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PacientesDto>> {

    const rb = new RequestBuilder(this.rootUrl, PacientesService.ApiPacientesPacienteGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacientesDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPacientesPacienteGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPacientesPacienteGet$Json(params?: {
  },
  context?: HttpContext

): Observable<PacientesDto> {

    return this.apiPacientesPacienteGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<PacientesDto>) => r.body as PacientesDto)
    );
  }

  /**
   * Path part for operation apiPacientesRegistroPost
   */
  static readonly ApiPacientesRegistroPostPath = '/api/Pacientes/registro';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPacientesRegistroPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPacientesRegistroPost$Response(params?: {
    body?: PacientesDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PacientesService.ApiPacientesRegistroPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiPacientesRegistroPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPacientesRegistroPost(params?: {
    body?: PacientesDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiPacientesRegistroPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
