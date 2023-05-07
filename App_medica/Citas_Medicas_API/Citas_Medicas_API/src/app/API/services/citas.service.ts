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

import { Citas } from '../models/citas';
import { CitasDto } from '../models/citas-dto';

@Injectable({
  providedIn: 'root',
})
export class CitasService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCitasGet
   */
  static readonly ApiCitasGetPath = '/api/Citas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitasGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Citas>>> {

    const rb = new RequestBuilder(this.rootUrl, CitasService.ApiCitasGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Citas>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCitasGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<Citas>> {

    return this.apiCitasGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Citas>>) => r.body as Array<Citas>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitasGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Citas>>> {

    const rb = new RequestBuilder(this.rootUrl, CitasService.ApiCitasGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Citas>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCitasGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<Citas>> {

    return this.apiCitasGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Citas>>) => r.body as Array<Citas>)
    );
  }

  /**
   * Path part for operation apiCitasPost
   */
  static readonly ApiCitasPostPath = '/api/Citas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitasPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCitasPost$Plain$Response(params?: {
    body?: CitasDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CitasDto>> {

    const rb = new RequestBuilder(this.rootUrl, CitasService.ApiCitasPostPath, 'post');
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
        return r as StrictHttpResponse<CitasDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCitasPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCitasPost$Plain(params?: {
    body?: CitasDto
  },
  context?: HttpContext

): Observable<CitasDto> {

    return this.apiCitasPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CitasDto>) => r.body as CitasDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitasPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCitasPost$Json$Response(params?: {
    body?: CitasDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CitasDto>> {

    const rb = new RequestBuilder(this.rootUrl, CitasService.ApiCitasPostPath, 'post');
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
        return r as StrictHttpResponse<CitasDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCitasPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCitasPost$Json(params?: {
    body?: CitasDto
  },
  context?: HttpContext

): Observable<CitasDto> {

    return this.apiCitasPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CitasDto>) => r.body as CitasDto)
    );
  }

  /**
   * Path part for operation apiCitasIdGet
   */
  static readonly ApiCitasIdGetPath = '/api/Citas/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitasIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CitasDto>> {

    const rb = new RequestBuilder(this.rootUrl, CitasService.ApiCitasIdGetPath, 'get');
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
        return r as StrictHttpResponse<CitasDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCitasIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<CitasDto> {

    return this.apiCitasIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CitasDto>) => r.body as CitasDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitasIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CitasDto>> {

    const rb = new RequestBuilder(this.rootUrl, CitasService.ApiCitasIdGetPath, 'get');
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
        return r as StrictHttpResponse<CitasDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCitasIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<CitasDto> {

    return this.apiCitasIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CitasDto>) => r.body as CitasDto)
    );
  }

  /**
   * Path part for operation apiCitasIdPut
   */
  static readonly ApiCitasIdPutPath = '/api/Citas/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitasIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCitasIdPut$Plain$Response(params: {
    id: number;
    body?: CitasDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CitasDto>> {

    const rb = new RequestBuilder(this.rootUrl, CitasService.ApiCitasIdPutPath, 'put');
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
        return r as StrictHttpResponse<CitasDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCitasIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCitasIdPut$Plain(params: {
    id: number;
    body?: CitasDto
  },
  context?: HttpContext

): Observable<CitasDto> {

    return this.apiCitasIdPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CitasDto>) => r.body as CitasDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitasIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCitasIdPut$Json$Response(params: {
    id: number;
    body?: CitasDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CitasDto>> {

    const rb = new RequestBuilder(this.rootUrl, CitasService.ApiCitasIdPutPath, 'put');
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
        return r as StrictHttpResponse<CitasDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCitasIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCitasIdPut$Json(params: {
    id: number;
    body?: CitasDto
  },
  context?: HttpContext

): Observable<CitasDto> {

    return this.apiCitasIdPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CitasDto>) => r.body as CitasDto)
    );
  }

  /**
   * Path part for operation apiCitasIdDelete
   */
  static readonly ApiCitasIdDeletePath = '/api/Citas/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitasIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasIdDelete$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, CitasService.ApiCitasIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiCitasIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasIdDelete$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<boolean> {

    return this.apiCitasIdDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitasIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasIdDelete$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, CitasService.ApiCitasIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiCitasIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasIdDelete$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<boolean> {

    return this.apiCitasIdDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiCitasPacientePacientenombreGet
   */
  static readonly ApiCitasPacientePacientenombreGetPath = '/api/Citas/paciente/{pacientenombre}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitasPacientePacientenombreGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasPacientePacientenombreGet$Plain$Response(params: {
    pacientenombre: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CitasDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CitasService.ApiCitasPacientePacientenombreGetPath, 'get');
    if (params) {
      rb.path('pacientenombre', params.pacientenombre, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CitasDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCitasPacientePacientenombreGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasPacientePacientenombreGet$Plain(params: {
    pacientenombre: string;
  },
  context?: HttpContext

): Observable<Array<CitasDto>> {

    return this.apiCitasPacientePacientenombreGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CitasDto>>) => r.body as Array<CitasDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitasPacientePacientenombreGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasPacientePacientenombreGet$Json$Response(params: {
    pacientenombre: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CitasDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CitasService.ApiCitasPacientePacientenombreGetPath, 'get');
    if (params) {
      rb.path('pacientenombre', params.pacientenombre, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CitasDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCitasPacientePacientenombreGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasPacientePacientenombreGet$Json(params: {
    pacientenombre: string;
  },
  context?: HttpContext

): Observable<Array<CitasDto>> {

    return this.apiCitasPacientePacientenombreGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CitasDto>>) => r.body as Array<CitasDto>)
    );
  }

  /**
   * Path part for operation apiCitasMedicoMediconombreGet
   */
  static readonly ApiCitasMedicoMediconombreGetPath = '/api/Citas/medico/{mediconombre}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitasMedicoMediconombreGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasMedicoMediconombreGet$Plain$Response(params: {
    mediconombre: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CitasDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CitasService.ApiCitasMedicoMediconombreGetPath, 'get');
    if (params) {
      rb.path('mediconombre', params.mediconombre, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CitasDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCitasMedicoMediconombreGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasMedicoMediconombreGet$Plain(params: {
    mediconombre: string;
  },
  context?: HttpContext

): Observable<Array<CitasDto>> {

    return this.apiCitasMedicoMediconombreGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CitasDto>>) => r.body as Array<CitasDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitasMedicoMediconombreGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasMedicoMediconombreGet$Json$Response(params: {
    mediconombre: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CitasDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CitasService.ApiCitasMedicoMediconombreGetPath, 'get');
    if (params) {
      rb.path('mediconombre', params.mediconombre, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CitasDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCitasMedicoMediconombreGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitasMedicoMediconombreGet$Json(params: {
    mediconombre: string;
  },
  context?: HttpContext

): Observable<Array<CitasDto>> {

    return this.apiCitasMedicoMediconombreGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CitasDto>>) => r.body as Array<CitasDto>)
    );
  }

}
