import dotenv from 'dotenv';
import { Server } from './models/server';

dotenv.config();

const serverConfig = {
  port: process.env.PORT ?? '3000',
  userPath: '/api/usuarios',
};

const server = new Server(serverConfig);

server.listen();
