import {
  chunk,
  isAccessDeniedError,
  isThrottlingError,
  mapWithConcurrency,
} from '../src/util';

describe('isThrottlingError', () => {
  it('detects throttling by error name', () => {
    expect(isThrottlingError({ name: 'ThrottlingException' })).toBe(true);
  });

  it('detects throttling by "Rate exceeded" message', () => {
    expect(isThrottlingError(new Error('Rate exceeded: BatchGetBuilds'))).toBe(
      true,
    );
  });

  it('does not treat access denied as throttling', () => {
    expect(
      isThrottlingError({
        name: 'AccessDeniedException',
        message: 'User is not authorized to perform: codebuild:BatchGetBuilds',
      }),
    ).toBe(false);
  });

  it('handles undefined', () => {
    expect(isThrottlingError(undefined)).toBe(false);
  });
});

describe('isAccessDeniedError', () => {
  it('detects access denied by error name', () => {
    expect(isAccessDeniedError({ name: 'AccessDeniedException' })).toBe(true);
  });

  it('detects access denied by message', () => {
    expect(
      isAccessDeniedError(
        new Error('User: x is not authorized to perform: logs:GetLogEvents'),
      ),
    ).toBe(true);
  });

  it('does not treat throttling as access denied', () => {
    expect(isAccessDeniedError(new Error('Rate exceeded'))).toBe(false);
  });
});

describe('mapWithConcurrency', () => {
  it('keeps the order of the results', async () => {
    const result = await mapWithConcurrency([3, 1, 2], 2, async (x) => x * 10);
    expect(result).toEqual([30, 10, 20]);
  });

  it('never runs more than `limit` calls at once', async () => {
    let running = 0;
    let maxRunning = 0;
    await mapWithConcurrency(Array.from({ length: 10 }), 3, async () => {
      running += 1;
      maxRunning = Math.max(maxRunning, running);
      await new Promise((resolve) => setTimeout(resolve, 5));
      running -= 1;
    });
    expect(maxRunning).toBe(3);
  });

  it('handles an empty list', async () => {
    expect(await mapWithConcurrency([], 3, async (x) => x)).toEqual([]);
  });
});

describe('chunk', () => {
  it('splits into chunks of the given size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('returns no chunks for an empty list', () => {
    expect(chunk([], 100)).toEqual([]);
  });
});
