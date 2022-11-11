// external imports
import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

// defining validate function
const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (err: any) {
      return res.status(400).send(err.errors);
    }
  };

export default validate;
