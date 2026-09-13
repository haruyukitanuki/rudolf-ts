import type { InteractionType } from '../enums/interaction-type';
import type { StopType } from '../enums/stop-type';

/** A single station entry within `Stations.list`. */
export interface Station {
  /** Position of this station within `Stations.list`. Useful for round-tripping. */
  index: number;
  /**
   * Station display name only (typically Japanese, e.g. `"新宿"`) — no station codes or numbering
   * (e.g. `"品川"`, never `"KK01 品川"` / `"品川(JK20)"` / `"KK01"`). Emitted as literal UTF-8,
   * with no `\u` escape sequences.
   */
  name: string;
  /** Meters from scenario start; always present. */
  fromStartDistance: number;
  /** Absolute kilometer-post; null when the sim doesn't expose chainage. */
  absoluteDistance: number | null;
  /** Which side the doors open. See `SideOpened` for the int convention. */
  doorSide: number;
  /** Whether this is a passenger stop, operation-only stop, or pass. */
  stopType: StopType | null;
  /** ISO datetime; null for first station and passing-only stops. */
  arrival: string | null;
  /** ISO datetime; null for last station. */
  departure: string | null;
  /** Platform/stop position name; null when not specified. */
  stopPositionName: string | null;
  /** Operating route section name (運転線路); null when not specified. */
  trackSectionName: string | null;
  /** Additional notes on a timetable; null when not specified. */
  remarks: string | null;
  /** Reference entry speed limit on a timetable or HMI; null when not specified. */
  entrySpeed: number | null;
  /** Reference exit speed limit on a timetable or HMI; null when not specified. */
  exitSpeed: number | null;
  /** True when this station is a timing point (採時駅); null when the sim doesn't model it. */
  isTimeTaken: boolean | null;
  /** Candidate stop-position markers as car-counts for this station's current direction/platform (e.g. `[3, 4, 6]`); null when unknown. */
  stopPositions: number[] | null;
  /** List of scheduled synchronized movements with other trains at the station. */
  interactions: Interaction[] | null;
}

/** Ordered station list for the diagram plus pointers into it. */
export interface Stations {
  /**
   * Stations in scheduled visit order, or upcoming stations nearest first.
   * Check `Capabilities` for the behavior. May be empty before the diagram is loaded.
   */
  list: Station[];
  /** Index into `list` for the station the train is currently at; null when between stations. */
  currentIndex: number | null;
  /** Index into `list` for the next station ahead; null at terminus. */
  nextIndex: number | null;
}

export const emptyStations = (): Stations => ({
  list: [],
  currentIndex: null,
  nextIndex: null
});

/** A synchronized movement with another train. */
export interface Interaction {
  /** Type of action at the station. */
  interactionType: InteractionType;
  /** Service number of the other train. */
  trainNumber: string | null;
  /** Destination of the other train. */
  destination: string | null;
  /** Name of the track used by the other train. */
  track: string | null;
  /** Other train arrival as ISO local datetime; null if passing or unspecified. */
  arrival: string | null;
  /** Other train passing or departure as ISO local datetime; null if unspecified. */
  departure: string | null;
  /** Whether this is a passenger stop, operation-only stop, or pass. */
  stopType: StopType | null;
}
