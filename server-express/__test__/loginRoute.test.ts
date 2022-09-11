import express from 'express';
import request from 'supertest';
import app from '../src/app';

describe('POST/lyrics', ()=>
    test('should return status 200 if post lyrics is successfully',async ()=>{
        const response = await request(app)
        .post('/lyrics')
        expect(response.status).toEqual(400);
    })
)

import {describe, beforeAll, test, expect} from '@jest/globals';