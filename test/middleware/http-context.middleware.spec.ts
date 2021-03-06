import { Request, Response } from 'express';
import * as httpContext from 'express-http-context';
import * as uuidv1 from 'uuid/v1';

import { getRequestIdContext, requestIdHandler } from '../../src/';

const uuidv1Mock: typeof uuidv1 & jest.Mock = uuidv1 as any;

jest.mock('express-http-context', () => ({
  set: jest.fn(),
  get: jest.fn(),
}));
jest.mock('uuid/v1');

describe('HttpContext Middleware', () => {
  const requestId = '75e10ee1-6c92-4c58-b639-8a5875da1820';

  test('requestId handler', () => {
    uuidv1Mock.mockImplementation(jest.fn(() => requestId));
    const next = jest.fn();
    requestIdHandler({} as Request, {} as Response, next);
    expect(httpContext.set).toBeCalledWith('requestId', requestId);
    expect(next).toBeCalledWith();
  });

  test('get request id context', () => {
    // @ts-ignore
    httpContext.get = jest.fn(() => requestId);
    expect(requestId).toBe(getRequestIdContext());
    expect(httpContext.get).toBeCalledWith('requestId');
  });
});
