/** Train-aggregate physical state. Per-car values live in `Cars`. */
export interface Physics {
  /** km/h; train-level; always present. */
  speed: number;
  /** Meters traveled from scenario start; always present. */
  fromStartDistance: number;
  /** Absolute kilometer-post; null when sim doesn't expose chainage. */
  absoluteDistance: number | null;
  /** Meters; null when the sim doesn't expose radius. Negative for left turns, positive for right, 0 for straights. */
  curveRadius: number | null;
  /** Per mille; null when the sim doesn't expose gradient. */
  gradient: number | null;
  /** Main reservoir (MR) pressure in kPa; train-level; always present. */
  mrPressure: number;
  /** Equalizing reservoir (ER) pressure in kPa; train-level; null when the train doesn't have ER, or the sim doesn't expose. */
  erPressure: number | null;
  /** Total load in kg. Only available if `physics.mass` capability is `All` or `TotalOnly`. */
  totalLoadMass: number | null;
}

export const emptyPhysics = (): Physics => ({
  speed: 0,
  fromStartDistance: 0,
  absoluteDistance: null,
  curveRadius: null,
  gradient: null,
  mrPressure: 0,
  erPressure: null,
  totalLoadMass: null
});
