import { NextFunction,Request, Response } from "express";
import { ZodType as zodSchema } from "zod";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validate = (schema: zodSchema<any>) => (req: Request, res: Response, next: NextFunction) => {
    try{
        schema.parse({
            ...req.body
        });

        next();
    }catch(error){
        return res.status(400).json({
            success: false,
            message: 'Invalid request params received',
            data: {},
            error: error
        });
    }
};