/** Format of arrays used to store data in `Stations`, `SpeedLimits`, and `Signals`. */
export const NextItemArrayType = {
  /** No items in front of the train are ever exposed. */
  None: 'None',
  /** 0 or 1 items in front of the train can be exposed. */
  Single: 'Single',
  /**
   * Any number of items in front of the train can be exposed, not necessarily to the end
   * of the scenario.
   */
  MultiDynamic: 'MultiDynamic',
  /** All items from the start to the end of the scenario are exposed. Only applicable to `Stations.list`. */
  MultiStatic: 'MultiStatic'
} as const satisfies Record<string, string>;

export type NextItemArrayType = (typeof NextItemArrayType)[keyof typeof NextItemArrayType];
