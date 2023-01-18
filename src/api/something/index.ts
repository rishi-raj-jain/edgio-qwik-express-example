import type { RequestHandler } from '@builder.io/qwik-city';

export const onPost: RequestHandler = async ({}) => {
    return {
      code: 1
    }
};
