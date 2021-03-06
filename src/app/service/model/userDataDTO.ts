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


export interface UserDataDTO {
    email?: string;
    name?: string;
    password?: string;
    roles?: Array<UserDataDTO.RolesEnum>;
    username?: string;
}
export namespace UserDataDTO {
    export type RolesEnum = 'ROLE_USER' | 'ROLE_PM' | 'ROLE_ADMIN';
    export const RolesEnum = {
        USER: 'ROLE_USER' as RolesEnum,
        PM: 'ROLE_PM' as RolesEnum,
        ADMIN: 'ROLE_ADMIN' as RolesEnum
    }
}
