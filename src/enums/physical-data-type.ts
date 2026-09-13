/** Availability of per-car and total data relating to a physical quantity. */
export const PhysicalDataType = {
  /** No data is available. */
  None: 'None',
  /** Only total data is available. */
  TotalOnly: 'TotalOnly',
  /** Per-car and total data is available. */
  All: 'All'
} as const satisfies Record<string, string>;

export type PhysicalDataType = (typeof PhysicalDataType)[keyof typeof PhysicalDataType];
