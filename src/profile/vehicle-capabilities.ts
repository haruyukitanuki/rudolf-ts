import type { MasconBrakeType } from '../enums/mascon-brake-type';
import type { MasconType } from '../enums/mascon-type';

/**
 * Static control-hardware description for the vehicle (mascon layout, notch counts, holding brake,
 * air-compressor governor pressures). Distinct from `SimulatorProfile.capabilities`, which declares
 * which live `OutputDataFrame` fields the adapter populates. Every field is nullable: `null` means the
 * sim has no value for it right now.
 */
export interface VehicleCapabilities {
  /** Master-controller handle layout; null when unknown. */
  masconType: MasconType | null;
  /** Brake-handle behaviour; null when unknown. */
  masconBrakeType: MasconBrakeType | null;
  /** Number of power notches (e.g. P1..P5 = 5); null when unknown. */
  powerNotches: number | null;
  /** Number of service brake notches (e.g. B1..B7 = 7); null when unknown. */
  brakeNotches: number | null;
  /** Signed notch value representing EB in the SetNotch encoding (e.g. `-8`); null when unknown. */
  ebNotch: number | null;
  /** Number of holding-brake (抑速) notches; `0` when the vehicle has none, null when unknown. */
  holdingBrakeNotches: number | null;
  /** Air-compressor cut-in (start) pressure in kPa; null when unknown. */
  cpStartPressure: number | null;
  /** Air-compressor cut-out (stop) pressure in kPa; null when unknown. */
  cpStopPressure: number | null;
}
