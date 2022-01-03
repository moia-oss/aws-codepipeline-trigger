/*
 * Sleep for amount in seconds
 */
export const sleep = (s: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, s * 1000);
  });
