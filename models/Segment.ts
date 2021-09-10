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

import { Constraint } from './Constraint';
import { Distribution } from './Distribution';
import { HttpFile } from '../http/http';

export class Segment {
    'id'?: number;
    'description': string;
    'constraints'?: Array<Constraint>;
    'distributions'?: Array<Distribution>;
    'rank': number;
    'rolloutPercent': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "constraints",
            "baseName": "constraints",
            "type": "Array<Constraint>",
            "format": ""
        },
        {
            "name": "distributions",
            "baseName": "distributions",
            "type": "Array<Distribution>",
            "format": ""
        },
        {
            "name": "rank",
            "baseName": "rank",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "rolloutPercent",
            "baseName": "rolloutPercent",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return Segment.attributeTypeMap;
    }
    
    public constructor() {
    }
}
