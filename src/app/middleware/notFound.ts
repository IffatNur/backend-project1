import { NextFunction, Request, Response } from "express";

const notFound = ((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = 500;
  const message = err.message || 'not found';

  return res.status(statusCode).json({
    success: false,
    message: message,
    error: '',
  });
});

export default notFound;
