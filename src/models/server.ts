import cors from 'cors';
import express from 'express';
import { router as userRouter } from '../routes/user.routes';

interface ServerConfig {
  port: string;
  userPath: string;
}

export class Server {
  private app: express.Application;

  constructor(private config: ServerConfig) {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  private middlewares = (): void => {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  };

  private routes = (): void => {
    this.app.use(this.config.userPath, userRouter);
  };

  public listen = (): void => {
    this.app.listen(this.config.port, () => {
      console.log(`Server listening on port ${this.config.port}`);
    });
  };
}
