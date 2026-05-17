import { z } from 'zod';

export const testedto =  z.object({ id: z.number(), nome: z.string() });
export type TestDto = z.infer<typeof testedto>;