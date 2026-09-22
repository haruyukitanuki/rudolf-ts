/** Fault of bogie-mounted equipment (motors, axles, brakes, collector shoe). */
export const BogieFault = {
  /** Traction motors mounted on this bogie (主電動機). */
  Traction: 'Traction',
  /** Brake equipment mounted on this bogie (台車ブレーキ): dragging/stuck brake, rigging fault. Control-side faults use `CarFault.Brake`. */
  Brake: 'Brake',
  /** Collector shoe sheared/damaged (集電靴の破損・脱落); third-rail vehicles. */
  CollectorShoe: 'CollectorShoe',
  /** Unclassified or sim-specific (その他). */
  Other: 'Other'
} as const satisfies Record<string, string>;

export type BogieFault = (typeof BogieFault)[keyof typeof BogieFault];
