/*
 * Sleep for amount in seconds
 */
export const sleep = (s: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, s * 1000);
  });

type AwsError = { name?: string; message?: string };

export const isThrottlingError = (error: unknown): boolean => {
  const { name = '', message = '' } = (error ?? {}) as AwsError;
  return (
    ['ThrottlingException', 'TooManyRequestsException', 'Throttling'].includes(
      name,
    ) || /rate exceeded/i.test(message)
  );
};

export const isAccessDeniedError = (error: unknown): boolean => {
  const { name = '', message = '' } = (error ?? {}) as AwsError;
  return (
    ['AccessDeniedException', 'AccessDenied', 'UnauthorizedOperation'].includes(
      name,
    ) || /not authorized to perform|access ?denied/i.test(message)
  );
};

/*
 * Like Promise.all(items.map(fn)), but runs at most `limit` calls at the same time.
 * Results keep the order of `items`.
 */
export const mapWithConcurrency = async <T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>,
): Promise<R[]> => {
  const results: R[] = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const index = next;
      next += 1;
      results[index] = await fn(items[index]);
    }
  };
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, worker),
  );
  return results;
};

export const chunk = <T>(items: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
};
