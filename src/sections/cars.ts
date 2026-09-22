import type { BogieFault } from '../enums/bogie-fault';
import type { BogiePosition } from '../enums/bogie-position';
import type { CarFault } from '../enums/car-fault';

/** Dynamic state of one bogie. Index-aligned with `CarStaticInfo.bogies`. */
export interface BogieDynamic {
  /** Matches the static entry at the same index. */
  position: BogiePosition;
  /** kPa; null when sim doesn't expose per-bogie BC pressure. */
  bcPressure: number | null;
  /** Amperes; null on unpowered bogies or when sim doesn't expose per-bogie motor current. */
  amperage: number | null;
  /** Bogie-scoped faults; empty = normal; null = not modeled. */
  faults: BogieFault[] | null;
}

/** Dynamic state for a single car. */
export interface Car {
  /** Matches `CarStaticInfo.carNo`. */
  carNo: number;
  /** Percentage filled (May exceed 100%). */
  occupancyRate: number | null;
  /** Per-car live load in kg; meaningful when the `physics.mass` capability is `All`. */
  loadMass: number | null;
  /** Body/roof/cab-scoped faults. Empty = normal; null = not modeled. */
  faults: CarFault[] | null;
  /**
   * Per-bogie dynamic state, index-aligned with `CarStaticInfo.bogies`.
   * Null when the sim doesn't model per-bogie data (`cars.bogies` capability absent/false).
   * Replaces the former car-level `bcPressure` and `amperage`.
   */
  bogies: BogieDynamic[] | null;
}

/** Per-car dynamic state. Static composition lives in `VehicleInfo.cars`. */
export interface Cars {
  /**
   * One entry per car in left-to-right display order.
   * The first car in the list doesn't always represent lead.
   * Empty when the sim doesn't expose per-car detail.
   */
  list: Car[];
}

export const emptyCars = (): Cars => ({
  list: []
});
