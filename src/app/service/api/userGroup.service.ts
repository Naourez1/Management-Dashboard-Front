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

import { UserGroup } from '../model/userGroup';
import { UserGroupDTO } from '../model/userGroupDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { rootRenderNodes } from '@angular/core/src/view';


@Injectable({
    providedIn: 'root'
})
export class UserGroupService {

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
     * ${UserGroupController.createUserGroup}
     * 
     * @param userGroupDTO userGroupDTO
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUserGroupUsingPOST(userGroupDTO: UserGroupDTO, observe?: 'body', reportProgress?: boolean): Observable<number>;
    public createUserGroupUsingPOST(userGroupDTO: UserGroupDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public createUserGroupUsingPOST(userGroupDTO: UserGroupDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public createUserGroupUsingPOST(userGroupDTO: UserGroupDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (userGroupDTO === null || userGroupDTO === undefined) {
            throw new Error('Required parameter userGroupDTO was null or undefined when calling createUserGroupUsingPOST.');
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

        return this.httpClient.post<number>(`${this.basePath}/api/userGroup`,
            userGroupDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ${UserGroupController.getAllUserGroups}
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllUserGroupsUsingGET(observe?: 'body', reportProgress?: boolean): Observable<UserGroup>;
    public getAllUserGroupsUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserGroup>>;
    public getAllUserGroupsUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserGroup>>;
    public getAllUserGroupsUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<UserGroup>(`${this.basePath}/api/userGroup`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * ${UserGroupController.search}
     * 
     * @param id userGroupId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public searchUsingGET1(id: number, observe?: 'body', reportProgress?: boolean): Observable<UserGroup>;
    public searchUsingGET1(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserGroup>>;
    public searchUsingGET1(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserGroup>>;
    public searchUsingGET1(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling searchUsingGET1.');
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

        return this.httpClient.get<UserGroup>(`${this.basePath}/api/userGroup/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}