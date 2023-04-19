import { Request, Response } from 'express';

export const usersGet = (req: Request, res: Response) => {
  res.json({
    msg: 'get API - controller',
  });
};

export const usersPost = (req: Request, res: Response) => {
  const body = req.body;

  res.json({
    msg: 'get API - controller',
    body,
  });
};

export const usersPut = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: 'get API - controller',
    id,
  });
};

export const usersDelete = (req: Request, res: Response) => {
  res.json({
    msg: 'get API - controller',
  });
};
