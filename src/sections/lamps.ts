/**
 * Panel-lamp state as an integer array. Up to 512 slots; 128 have predefined meanings
 * or are reserved (see the spec §5.7).
 * Values: `0` = off, `1` = on, `2+` = vehicle-specific alternative (blinking, dim, multicolor).
 * Basic TIMS that only knows 0/1 SHOULD treat any nonzero as truthy.
 * Default names include `doorClose`, `atsReady`, `atsBrakeApply`, `atsOpen`, `regenerative`,
 * `ebTimer`, `emergencyBrake`, `overload`, `ato`, `snowBrake`, `wheelSlip`
 * (see `DEFAULT_LAMP_VOCABULARY`). Sim/vehicle-specific names are allowed freely.
 */
export interface Lamps {
  /** Lamp index → integer state. See interface docs for the value convention. */
  values: number[];
}

export const emptyLamps = (): Lamps => ({
  values: Array.from({ length: 512 }, () => 0)
});
