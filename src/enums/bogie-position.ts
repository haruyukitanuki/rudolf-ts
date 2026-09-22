/**
 * Where a bogie sits under its car, in left-to-right display order.
 * Non-bogie fixed-axle groups use the same values (they draw identically).
 */
export const BogiePosition = {
  /** Leftmost bogie under the car as displayed. */
  Left: 'Left',
  /** Intermediate bogie (only for cars with 3 or more bogies, e.g. Bo-Bo-Bo). */
  Middle: 'Middle',
  /** Rightmost bogie under the car as displayed. */
  Right: 'Right',
  /** Bogie shared with the next car (Jacobs/articulated bogie). */
  Jacobs: 'Jacobs'
} as const satisfies Record<string, string>;

export type BogiePosition = (typeof BogiePosition)[keyof typeof BogiePosition];
