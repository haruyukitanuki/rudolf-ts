/**
 * Physical cab/train control actions referenced by `SetButtonCommand`.
 * Each value is a button-press or key-press style event (some are momentary, some are toggles).
 */
export const VehicleAction = {
  /** Reset the EB/deadman alarm (EB復帰). */
  EBReset: 'EBReset',
  /** Engage the gradient-start / anti-rollback switch (勾配起動スイッチ). */
  GradientStart: 'GradientStart',
  /** Safety-brake switch (保安ブレーキ). */
  SafetyBrake: 'SafetyBrake',
  /** Snow-resistance brake switch (耐雪ブレーキ). */
  SnowBrake: 'SnowBrake',
  /** Sound the air horn (空気笛). */
  HornAir: 'HornAir',
  /** Sound the electric horn (電気笛). */
  HornElectric: 'HornElectric',
  /** Press the cab buzzer (合図ブザー). */
  Buzzer: 'Buzzer',
  /** Open the left-side passenger doors (左ドア開). */
  DoorOpenLeft: 'DoorOpenLeft',
  /** Close the left-side passenger doors (左ドア閉). */
  DoorCloseLeft: 'DoorCloseLeft',
  /** Open the right-side passenger doors (右ドア開). */
  DoorOpenRight: 'DoorOpenRight',
  /** Close the right-side passenger doors (右ドア閉). */
  DoorCloseRight: 'DoorCloseRight',
  /** Re-open/re-close switch after an interrupted closure (再開閉SW). */
  DoorReopen: 'DoorReopen',
  /** Door-switch key operation (ドアスイッチ鍵). */
  DoorKey: 'DoorKey',
  /** 3/4-door partial-open switch (3/4閉スイッチ). */
  PartialDoor: 'PartialDoor',
  /** Door cut-out switch (ドアカットSW). */
  DoorCut: 'DoorCut',
  /** Boarding-prompt buzzer (乗降促進). */
  BoardingPrompt: 'BoardingPrompt',
  /** Trigger an in-car announcement / PA (車内放送). */
  InCarBroadcast: 'InCarBroadcast',
  /** Dim the headlight / low beam (前灯減光). */
  HeadLightLow: 'HeadLightLow',
  /** Headlight switch (前照灯SW). */
  HeadLight: 'HeadLight',
  /** Passenger-cabin light switch (客室灯SW). */
  CabinLight: 'CabinLight',
  /** Crew-room light switch (乗務員室灯SW). */
  CrewRoomLight: 'CrewRoomLight',
  /** Instrument/meter light switch (計器灯SW). */
  InstrumentLight: 'InstrumentLight'
} as const satisfies Record<string, string>;

export type VehicleAction = (typeof VehicleAction)[keyof typeof VehicleAction];
