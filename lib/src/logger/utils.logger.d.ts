/// <reference types="express" />
import { Logger } from 'winston';
import { WinstonLogger } from './winston.logger';
export declare function createNestWinstonLogger(winstonLogger: WinstonLogger): WinstonLogger;
export declare function createExpressWinstonHandler(logger: Logger): import("express").Handler;
