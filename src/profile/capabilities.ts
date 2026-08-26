/**
 * Capability flags keyed by dotted path matching `OutputDataFrame` field paths.
 * Values are usually booleans; some keys carry string-enum values (e.g. `physics.perCar`
 * is `'True' | 'Broadcast' | 'Unavailable'` (`PerCarPhysicsType`), and `stations.next` /
 * `speedLimits.next` / `signals.next` are `NextItemArrayType`). All keys are OPTIONAL;
 * an absent key MUST be treated as unsupported. See the spec §4.3 for the canonical list.
 */
export type Capabilities = Record<string, unknown>;

/** Create a new empty capabilities map (every key absent = unsupported). */
export const emptyCapabilities = (): Capabilities => ({});
