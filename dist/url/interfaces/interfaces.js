import { z } from "zod";
export const ReqUrlBodySchema = z.object({
    originalUrl: z.url("Введите корректную ссылку"),
    userId: z.cuid2()
});
//# sourceMappingURL=interfaces.js.map