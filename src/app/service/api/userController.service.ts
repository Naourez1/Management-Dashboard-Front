/**
 * Management Dashboard Application
 * Description for the api
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { JwtResponse } from '../model/jwtResponse';
import { LoginForm } from '../model/loginForm';
import { Task } from '../model/task';
import { UserDataDTO } from '../model/userDataDTO';
import { UserResponseDTO } from '../model/userResponseDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
    providedIn: 'root'
})
export class UserControllerService {

    protected basePath = 'http://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * ${UserController.delete}
     * 
     * @param id UserId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public deleteUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public deleteUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public deleteUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*',
            'text/plain'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.delete<number>(`${this.basePath}/api/user/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ${UserController.getTasksOfUser}
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTasksOfUserUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<Task>;
    public getTasksOfUserUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Task>>;
    public getTasksOfUserUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Task>>;
    public getTasksOfUserUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTasksOfUserUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*',
            'applicatoin/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Task>(`${this.basePath}/api/users/${encodeURIComponent(String(id))}/tasks`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ${UserController.getUsers}
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUsersUsingGET(observe?: 'body', reportProgress?: boolean): Observable<UserResponseDTO>;
    public getUsersUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserResponseDTO>>;
    public getUsersUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserResponseDTO>>;
    public getUsersUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*',
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<UserResponseDTO>(`${this.basePath}/api/users`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ${UserController.signin}
     * 
     * @param loginRequest loginRequest
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public loginUsingPOST(loginRequest: LoginForm, observe?: 'body', reportProgress?: boolean): Observable<JwtResponse>;
    public loginUsingPOST(loginRequest: LoginForm, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JwtResponse>>;
    public loginUsingPOST(loginRequest: LoginForm, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JwtResponse>>;
    public loginUsingPOST(loginRequest: LoginForm, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (loginRequest === null || loginRequest === undefined) {
            throw new Error('Required parameter loginRequest was null or undefined when calling loginUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*',
            'text/plain'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<JwtResponse>(`${this.basePath}/api/auth/signin`,
            loginRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ${UserController.refresh}
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public refreshUsingGET(observe?: 'body', reportProgress?: boolean): Observable<string>;
    public refreshUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public refreshUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public refreshUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*',
            'text/plain'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<string>(`${this.basePath}/api/refresh`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ${UserController.search}
     * 
     * @param id UserId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public searchUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<UserResponseDTO>;
    public searchUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserResponseDTO>>;
    public searchUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserResponseDTO>>;
    public searchUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling searchUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*',
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<UserResponseDTO>(`${this.basePath}/api/user/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ${UserController.signup}
     * 
     * @param user Signup User
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public signupUsingPOST(user?: UserDataDTO, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public signupUsingPOST(user?: UserDataDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public signupUsingPOST(user?: UserDataDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public signupUsingPOST(user?: UserDataDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*',
            'text/plain'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<string>(`${this.basePath}/api/auth/signup`,
            user,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ${UserController.updateUser}
     * 
     * @param user user
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUserUsingPUT(user: UserDataDTO, observe?: 'body', reportProgress?: boolean): Observable<UserResponseDTO>;
    public updateUserUsingPUT(user: UserDataDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserResponseDTO>>;
    public updateUserUsingPUT(user: UserDataDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserResponseDTO>>;
    public updateUserUsingPUT(user: UserDataDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling updateUserUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*',
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<UserResponseDTO>(`${this.basePath}/api/userput`,
            user,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ${UserController.me}
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public whoamiUsingGET(observe?: 'body', reportProgress?: boolean): Observable<UserResponseDTO>;
    public whoamiUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserResponseDTO>>;
    public whoamiUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserResponseDTO>>;
    public whoamiUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*',
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<UserResponseDTO>(`${this.basePath}/api/me`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
