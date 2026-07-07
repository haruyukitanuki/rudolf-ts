/** How the brake handle behaves on the master controller. */
export const MasconBrakeType = {
  /** Discrete, self-lapping stepped brake notches (段階ブレーキ). */
  Notched: 'Notched',
  /** Continuous brake with a lap position for holding pressure (直通ブレーキ, ラップ可能). */
  LapCapable: 'LapCapable'
} as const satisfies Record<string, string>;

export type MasconBrakeType = (typeof MasconBrakeType)[keyof typeof MasconBrakeType];
