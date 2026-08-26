/** Sim clock and frame counter for an `OutputDataFrame`. */
export interface Time {
  sim: string;
  /** Seconds since scenario start; monotonic. */
  elapsed: number;
  /** Frame counter; increments each emit. */
  tick: number;
}

export const emptyTime = (): Time => ({
  sim: '00:00:00',
  elapsed: 0,
  tick: 0
});
