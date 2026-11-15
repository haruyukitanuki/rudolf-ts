import { SCHEMA_VERSION } from "./constants.js";
import type { RudolfDocumentBase } from "./envelope.js";
import type { Ats } from "./sections/ats.js";
import { emptyAts } from "./sections/ats.js";
import type { Cars } from "./sections/cars.js";
import { emptyCars } from "./sections/cars.js";
import type { Controllers } from "./sections/controllers.js";
import { emptyControllers } from "./sections/controllers.js";
import type { Diagram } from "./sections/diagram.js";
import { emptyDiagram } from "./sections/diagram.js";
import type { Doors } from "./sections/doors.js";
import { emptyDoors } from "./sections/doors.js";
import type { GameState } from "./sections/game-state.js";
import { emptyGameState } from "./sections/game-state.js";
import type { Lamps } from "./sections/lamps.js";
import { emptyLamps } from "./sections/lamps.js";
import type { Physics } from "./sections/physics.js";
import { emptyPhysics } from "./sections/physics.js";
import type { Signals } from "./sections/signals.js";
import { emptySignals } from "./sections/signals.js";
import type { SpeedLimits } from "./sections/speed-limits.js";
import { emptySpeedLimits } from "./sections/speed-limits.js";
import type { Stations } from "./sections/stations.js";
import { emptyStations } from "./sections/stations.js";
import type { Switches } from "./sections/switches.js";
import { emptySwitches } from "./sections/switches.js";
import type { Time } from "./sections/time.js";
import { emptyTime } from "./sections/time.js";

/**
 * Per-frame snapshot of dynamic train and cab state emitted by a simulator (sim → consumer).
 * Sent per-frame at the producer's cadence (10 Hz typical; producers may emit faster). Pair with a
 * `SimulatorProfile` sharing the same `scenarioId` for capability flags and vocabulary overrides.
 */
export interface OutputDataFrame extends RudolfDocumentBase {
  kind: "OutputDataFrame";
  /** Sim clock + frame counter. */
  time: Time;
  /** Train identity (number, bound-for, service class) for this run. */
  diagram: Diagram;
  /** Ordered station list for the diagram plus current/next indices. */
  stations: Stations;
  /** Train-aggregate physics (speed, distance, MR pressure, gradient). */
  physics: Physics;
  /** Driver-input state (notches, reverser, ATO/TASC/deadman). */
  controllers: Controllers;
  /** Door state: safe-to-proceed flag plus per-car open-side. */
  doors: Doors;
  /** Vocabulary-keyed panel-lamp values (0=off, 1=on, 2+=vehicle-specific). */
  lamps: Lamps;
  /** ATS pattern speed, class, and rich-state info. */
  ats: Ats;
  /** Upcoming signals with aspect, distance, and transponders. */
  signals: Signals;
  /** Current speed limit and the next change points. */
  speedLimits: SpeedLimits;
  /** Per-car dynamic state (occupancy, load, faults, per-bogie dynamics). */
  cars: Cars;
  /** Cab switch state (horn, buzzer, headlights, wiper). */
  switches: Switches;
  /** Outer game-state context (screen, crew role, drive mode, one-man). */
  gameState: GameState;
  /** Sim/vendor-specific blocks keyed `"<namespace>:<concern>"`. */
  extensions: Record<string, unknown> | null;
}

export const emptyOutputDataFrame = (): OutputDataFrame => ({
  schemaVersion: SCHEMA_VERSION,
  kind: "OutputDataFrame",
  scenarioId: "",
  sentAt: "",
  time: emptyTime(),
  diagram: emptyDiagram(),
  stations: emptyStations(),
  physics: emptyPhysics(),
  controllers: emptyControllers(),
  doors: emptyDoors(),
  lamps: emptyLamps(),
  ats: emptyAts(),
  signals: emptySignals(),
  speedLimits: emptySpeedLimits(),
  cars: emptyCars(),
  switches: emptySwitches(),
  gameState: emptyGameState(),
  extensions: null,
});
