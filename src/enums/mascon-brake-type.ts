/**
 * How the brake handle behaves on the master controller. Note: `LapCapable` is the
 * continuous-with-lap case, so it also implies `Continuous` (non-notched) behaviour —
 * treat both as continuous when distinguishing notched vs continuous handles.
 */
export const MasconBrakeType = {
  /** Discrete, self-lapping stepped brake notches (段階ブレーキ). */
  Notched: 'Notched',
  /** Continuous brake with a lap position for holding pressure (直通ブレーキ, ラップ可能). Implies `Continuous` (it is non-notched). */
  LapCapable: 'LapCapable',
  /** Continuous (non-notched) brake handle with no lap position — e.g. a direct/straight-air brake (直通ブレーキ). See `LapCapable` for the continuous-with-lap variant. */
  Continuous: 'Continuous'
} as const satisfies Record<string, string>;

export type MasconBrakeType = (typeof MasconBrakeType)[keyof typeof MasconBrakeType];
