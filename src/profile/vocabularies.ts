/**
 * Vocabulary overrides for this sim+vehicle. Lets a consumer translate sim-specific
 * indices (panel-lamp arrays, custom signal aspects, beacon codes) into
 * human-meaningful labels without hard-coding per-vehicle knowledge in the UI.
 */
export interface Vocabularies {
  /** Panel-lamp name → index; null when no overrides apply. */
  lamps: Record<string, number> | null;
  /** Per-route overrides for the default 0-7 signal-phase vocabulary; null when none. */
  signalPhase: Record<string, string> | null;
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
  /** Sim-known beacon type code → human-readable meaning; null when none. */
  transponders: Record<string, string> | null;
}

/** Default lamp-name → index mapping (spec §5.7). Indexes 11..127 are reserved. */
export const DEFAULT_LAMP_VOCABULARY: Record<string, number> = {
  doorClose: 0,
  atsReady: 1,
  atsBrakeApply: 2,
  atsOpen: 3,
  regenerative: 4,
  ebTimer: 5,
  emergencyBrake: 6,
  overload: 7,
  ato: 8,
  snowBrake: 9,
  wheelSlip: 10
};

/** Default signal-phase vocabulary (spec §5.9): phase index as string → aspect code. */
export const DEFAULT_SIGNAL_PHASE_VOCABULARY: Record<string, string> = {
  '0': ':',
  '1': 'R',
  '2': 'YY',
  '3': 'Y',
  '4': 'YG',
  '5': 'YGF',
  '6': 'G',
  '7': 'GG'
};

/** Default signal-phase speeds in km/h (spec §5.9): `-1` = unlimited. */
export const DEFAULT_SIGNAL_PHASE_SPEED_VOCABULARY: Record<string, number | null> = {
  '0': -1,
  '1': 0,
  '2': 25,
  '3': 45,
  '4': 65,
  '5': 90,
  '6': -1,
  '7': -1
};

/**
 * Create a `Vocabularies` pre-filled with the spec defaults, mirroring the C# field
 * initializers. Each dictionary is a fresh copy, safe for consumers to mutate.
 */
export const defaultVocabularies = (): Vocabularies => ({
  lamps: { ...DEFAULT_LAMP_VOCABULARY },
  signalPhase: { ...DEFAULT_SIGNAL_PHASE_VOCABULARY },
  signalPhaseSpeed: { ...DEFAULT_SIGNAL_PHASE_SPEED_VOCABULARY },
  transponders: null
});
