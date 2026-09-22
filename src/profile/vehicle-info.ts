import type { BogiePosition } from '../enums/bogie-position';
import type { Direction } from '../enums/direction';
import type { PantographDirection } from '../enums/pantograph-direction';
import type { PantographType } from '../enums/pantograph-type';
import type { VehicleCapabilities } from './vehicle-capabilities';

/** Static composition for a single car (cabs, motors, pantograph layout). */
export interface CarStaticInfo {
  /** Matches `Car.carNo`. */
  carNo: number;
  /** Per-car model code (e.g. `"KuHaE233"`, `MoHa225-51xx`). For maximum interoperability, romanise all kana in TitleCase. */
  model: string;
  /** True when this car has a driver's cab. */
  hasDriverCab: boolean;
  /** True when this car has a conductor's cab. */
  hasConductorCab: boolean;
  /** True when this car is motorized (M/MM'). */
  hasMotor: boolean;
  /** True when this car carries one or more pantographs. */
  hasPantograph: boolean;
  /** Which way this car's driver cab faces; null when the car has no driver cab. */
  cabDirection: Direction | null;
  /** Style of pantograph; null when `hasPantograph` is false. */
  pantographType: PantographType | null;
  /** Which end(s) the pantograph(s) lean toward; null when `hasPantograph` is false or unknown. */
  pantographDirection: PantographDirection | null;
  /** Car length in meters. -1 if unknown. */
  length: number;
  /** Car mass without passengers in kg; `-1` if unknown. Freight may be included here only if it cannot be separated from car mass. */
  emptyMass: number;
  /**
   * Bogies under this car, left-to-right display order. Empty when the sim does not provide
   * composition. A Jacobs bogie (see `BogiePosition.Jacobs`) is shared with the adjacent car and
   * is listed ONLY by this car when this car is on the bogie's LEFT.
   */
  bogies: BogieStatic[];
}

/** Static composition of a single axle within a bogie. */
export interface AxleStatic {
  /** True when this axle is powered (powered by a traction motor). Per-axle granularity covers 0.5M and 0.75M layouts where only some axles of a bogie are powered. */
  isPowered: boolean;
}

/** Static composition of one bogie (or non-bogie fixed-axle group; they draw identically) under a car. */
export interface BogieStatic {
  /** Where this bogie sits under the car, in left-to-right display order. */
  position: BogiePosition;
  /** Axles in this bogie, left-to-right. Item count is equal to the number of axles (2 typical, 3 for Co arrangement). */
  axles: AxleStatic[];
}

/** Vehicle identity plus static per-car composition (cabs, motors, pantographs). */
export interface VehicleInfo {
  /**
   * Human display name for the model (e.g. `"225系0番台"`). Please ensure the correct kanji is used
   * for kei and bandai. If there is more than one type of model, please delimit it with a `+` (e.g. `"E231系1000番台+E233系3000番台"`).
   */
  name: string;
  /**
   * Vehicle model identifier (e.g. `"225-0"`). For maximum interoperability, it should
   * be in format of `series-subseries`; Romanise all kana in TitleCase. If there is more than one type of model, please delimit it with a `+` (e.g. `"E231-1000+E233-3000"`).
   */
  model: string;
  /**
   * Operating company (e.g. `"EastJapanRailwayCompany"`, `"TokyuCorporation"`).
   * For maximum compatibility, refer to Japanese Wikipedia for the full operator name (not group) and TitleCase it.
   */
  operator: string;
  /**
   * One entry per car. List is displayed from left to right.
   * The first car in the list doesn't always represent lead.
   */
  cars: CarStaticInfo[];
  /** Car no. for the lead car. This should usually be the car number of either the first or last item in `cars`. */
  leadCar: number;
  /** Total length of the train in meters; `-1` if unknown. */
  totalLength: number;
  /**
   * Total mass of the train without passengers in kg; `-1` if unknown.
   * Freight may be included here only if it cannot be separated from car mass.
   */
  totalEmptyMass: number;
  /**
   * Static control-hardware description (mascon layout, notch counts, holding brake, compressor
   * pressures). Inner fields are null when the sim has no value for them.
   */
  capabilities: VehicleCapabilities;
}
