import { z } from "zod";

export const modulesSelectorSchema = z.object({
    modules: z.array(z.string()).refine((value) => value.length > 0, {
        message: "You must select at least one module.",
    }),
});

export type ModulesSelector = z.infer<typeof modulesSelectorSchema>;
