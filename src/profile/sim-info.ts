/** Identity of the simulator + adapter producing this `SimulatorProfile`. */
export interface SimInfo {
  /** Simulator software name. */
  name: string;
  /** Simulator software version (if possible, in semver); null when the sim has no version. */
  version: string | null;
  /** Adapter package name. */
  adapterName: string;
  /** Adapter version string in semver. */
  adapterVersion: string;
}
