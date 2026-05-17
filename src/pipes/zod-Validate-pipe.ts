import { PipeTransform,  BadRequestException } from '@nestjs/common';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';

export class ZodValidatePipe implements PipeTransform {

    constructor(private schema: z.ZodSchema) {}

    async transform(value: any) {
        try {
            return await this.schema.parseAsync(value);
        } catch (error) {
            if (error instanceof z.ZodError) {
                throw new BadRequestException({
                    errors: fromZodError(error),
                    message: 'Validation failed',
                    statusCode:    400,});
            }
            throw new BadRequestException(`Validation failed: ${error}`);
        }
    }

}