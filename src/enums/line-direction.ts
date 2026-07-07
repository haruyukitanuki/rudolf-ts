/** Direction relative to the line. */
export const LineDirection = {
  /** Upbound. */
  Upbound: 'Upbound',
  /** Downbound. */
  Downbound: 'Downbound'
} as const satisfies Record<string, string>;

export type LineDirection = (typeof LineDirection)[keyof typeof LineDirection];
