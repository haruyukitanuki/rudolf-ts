/** Availability of data in arrays in `Cars`. */
export const PerCarPhysicsType = {
  /** No per-car data is available. */
  None: 'None',
  /** Data is present only for the first car. Consumers must broadcast from the first index of the arrays. */
  FirstCarOnly: 'FirstCarOnly',
  /** Data is present for all cars. */
  All: 'All'
} as const satisfies Record<string, string>;

export type PerCarPhysicsType = (typeof PerCarPhysicsType)[keyof typeof PerCarPhysicsType];
