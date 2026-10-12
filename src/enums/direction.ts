/** Direction relative on HMI screen. */
export const Direction = {
  /** Facing left on HMI. */
  Left: 'Left',
  /** Facing right on HMI. */
  Right: 'Right'
} as const satisfies Record<string, string>;

export type Direction = (typeof Direction)[keyof typeof Direction];
