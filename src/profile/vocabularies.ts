/** Panel-lamp vocabulary overrides: typically maps opaque integer panel indices to named keys. */
export interface LampVocabulary {
  /** Panel-array index (string-keyed) → named lamp key. */
  bveIndexToKey: Record<string, string> | null;
}

/**
 * Vocabulary overrides for this sim+vehicle. Lets a consumer translate sim-specific
 * indices (panel-lamp arrays, custom signal aspects, beacon codes) into
 * human-meaningful labels without hard-coding per-vehicle knowledge in the UI.
 */
export interface Vocabularies {
  /** Panel-lamp vocabulary overrides; null when no overrides apply. */
  lamps: LampVocabulary | null;
  /** Per-route overrides for the default 0-7 signal-phase vocabulary; null when none. */
  signalPhase: Record<string, string> | null;
  /** Sim-known beacon type code → human-readable meaning; null when none. */
  transponders: Record<string, string> | null;
  /**
   * Per-route signal-phase-speed vocabulary. Maps Rudolf phase-index-as-string
   * ("1".."7" and any "8+" override) to a km/h cap. Value convention:
   * - `n >= 0` — km/h cap.
   * - `-1` — unlimited (no inherent cap; line speed).
   * - `null` — unknown.
   * Consumers fall back to the spec's default-speed table for keys absent from the map.
   * Populated by both adapters at profile-emit time.
   */
  signalPhaseSpeed: Record<string, number | null> | null;
}
