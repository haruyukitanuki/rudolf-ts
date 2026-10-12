/** Which end of the car a pantograph leans toward (HMI-relative); Both = both ends. */
export const PantographDirection = {
  /** Leans toward the left on HMI. */
  Left: 'Left',
  /** Leans toward the right on HMI. */
  Right: 'Right',
  /** Leans toward both ends. */
  Both: 'Both'
} as const satisfies Record<string, string>;

export type PantographDirection = (typeof PantographDirection)[keyof typeof PantographDirection];
