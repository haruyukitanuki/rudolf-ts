import type { AtsRichStateType } from '../enums/ats-rich-state-type';

/** Describes a single machine-readable ATS event (alternative to the free-form `Ats.state` string). */
export interface AtsRichState {
  /** Stable enum-like codes (e.g. `"P_APPROACH"`, `"EB"`). */
  code: string;
  /** Human-readable display label (e.g. `"P接近"`). */
  name: string;
  /** 0 = info, 1 = warning, 2 = critical; values above 2 are sim/vehicle-specific custom severities. */
  severity: number;
  /** Machine-readable event category for the state. */
  type: AtsRichStateType;
}

/**
 * ATS/ATC state.
 * Covers the speed cap currently asserted by ATS plus an optional rich-state list
 * for richer per-family info (P established, EB engaged, etc.).
 */
export interface Ats {
  /** Free-form class identifier when the sim natively exposes one; null otherwise. */
  class: string | null;
  /** Current ATS speed limit in km/h. `-1` = free, `null` = blank display, any other number = the asserted cap. */
  speed: number | null;
  /** Free-form rich-state string (e.g. `"P接近"`, `"B動作"`, `"EB"`); null when not asserted. */
  state: string | null;
  /** Structured rich-state alternative to `state`; empty array when the family profile doesn't fill it. */
  richState: AtsRichState[];
}

export const emptyAts = (): Ats => ({
  class: null,
  speed: null,
  state: null,
  richState: []
});
