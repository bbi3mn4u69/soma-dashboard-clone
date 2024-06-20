import { z } from "zod";



export const CreateCompanySchema = z.object({
    name: z.string(),
    logoUrl: z.string(),
    slug: z.string(),
    oneLiner: z.string(),
    valuation: z.string(),
    region: z.string(),
    websiteUrl: z.string(),
    sectors: z.array(z.string()),
})