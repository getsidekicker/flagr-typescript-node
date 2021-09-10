/**
 * Flagr
 * Flagr is a feature flagging, A/B testing and dynamic configuration microservice. The base path for all the APIs is \"/api/v1\". 
 *
 * OpenAPI spec version: 1.1.13
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Flag } from './Flag';
import { HttpFile } from '../http/http';

export class FlagSnapshot {
    'id': number;
    'updatedBy'?: string;
    'flag': Flag;
    'updatedAt': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "updatedBy",
            "baseName": "updatedBy",
            "type": "string",
            "format": ""
        },
        {
            "name": "flag",
            "baseName": "flag",
            "type": "Flag",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FlagSnapshot.attributeTypeMap;
    }
    
    public constructor() {
    }
}
