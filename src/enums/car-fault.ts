/**
 * Fault of body/roof/cab-mounted equipment on a single car
 * (`OutputDataFrame.cars.list[...].faults`). Empty = normal; null = not modeled.
 */
export const CarFault = {
  /** Doors (ドア故障). */
  Door: 'Door',
  /** Pantograph (パンタグラフ異常), including persistent dewirement (離線). */
  Pantograph: 'Pantograph',
  /** Traction equipment reported at car level (主回路関連の故障). Fine-grained reporting uses `BogieFault.Traction`. */
  Traction: 'Traction',
  /** Brake control equipment (ブレーキ装置異常): BCU, sticking. */
  Brake: 'Brake',
  /** Air compressor (空気圧縮機異常, CP). */
  Compressor: 'Compressor',
  /** Auxiliary power supply (補助電源装置異常, SIV). */
  AuxiliaryPower: 'AuxiliaryPower',
  /** Onboard safety device (保安装置異常): ATS/ATC equipment. */
  SafetyDevice: 'SafetyDevice',
  /** Monitor system (モニタ装置異常). */
  Monitor: 'Monitor',
  /** Train radio (無線異常). */
  TrainRadio: 'TrainRadio',
  /** Air conditioning (空調装置異常). Comfort-only. */
  AirConditioner: 'AirConditioner',
  /** Unclassified or sim-specific (その他). */
  Other: 'Other'
} as const satisfies Record<string, string>;

export type CarFault = (typeof CarFault)[keyof typeof CarFault];
