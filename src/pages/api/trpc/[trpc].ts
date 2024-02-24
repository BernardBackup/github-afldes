import * as trpcNext from '@trpc/server/adapters/next';
import { publicProcedure, router } from '~/server/trpc';
import { z } from 'zod';

const appRouter = router({
  greeting: publicProcedure
    .input(
      z.object({
        name: z.string().nullish(),
        imageNumber: z.number().int().positive().max(26), // Define an input parameter for the image number
      }),
    )
    .query(async ({ input }) => {
      const { imageNumber } = input;
      let image = null;
      try {
        const response = await fetch(`https://query-server.fly.dev/query?contract=first-nft&function=tokenURI&args=[${imageNumber}]`);
        if (response.ok) {
          const imageData = await response.json();
          image = imageData.json;
        } else {
          console.error(`Failed to fetch image ${imageNumber}:`, response.statusText);
        }
      } catch (error) {
        console.error('Error fetching image');
      }

      return {
        text: `hello ${input?.name ?? 'world'}`,
        image: image,
      };
    }),
});

// export only the type definition of the API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
