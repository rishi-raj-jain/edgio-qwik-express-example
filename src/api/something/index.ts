import type { RequestHandler } from '@builder.io/qwik-city';

export const onPost: RequestHandler = async ({}) => {
    return {
      code: 1
    }
};

export const onGet = async ({}) => {
    return {
      code: 1
    }
};
