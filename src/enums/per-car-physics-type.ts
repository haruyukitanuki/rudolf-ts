/** Availability of data in arrays in `Cars`. */
export const PerCarPhysicsType = {
  /** Data is present for all cars. */
  True: 'True',
  /** Data is present only for the first car. Consumers must broadcast from the first index of the arrays. */
  Broadcast: 'Broadcast',
  /** No per-car data is available. */
  Unavailable: 'Unavailable'
} as const satisfies Record<string, string>;

export type PerCarPhysicsType = (typeof PerCarPhysicsType)[keyof typeof PerCarPhysicsType];
