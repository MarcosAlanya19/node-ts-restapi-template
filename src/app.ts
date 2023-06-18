import dotenv from 'dotenv';
import { Server } from './models/server';

dotenv.config();

export const ServerConfig = {
  port: process.env.PORT ?? '3000',
  userPath: '/api/usuarios',
};

const server = new Server(ServerConfig);

server.listen();
