/// <reference types="express" />
import { Logger } from 'winston';
import * as Transport from 'winston-transport';
import { WinstonLogger } from './winston.logger';
export declare function createNestWinstonLogger(label: string, level: string, transports: Transport[]): WinstonLogger;
export declare function createExpressWinstonHandler(logger: Logger): import("express").Handler;
