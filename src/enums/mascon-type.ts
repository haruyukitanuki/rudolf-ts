/** Cab master-controller (mascon) handle layout. */
export const MasconType = {
  /** Single combined handle controlling both power and brake (ワンハンドル). */
  OneHandle: 'OneHandle',
  /** Separate power and brake handles (ツーハンドル). */
  TwoHandle: 'TwoHandle'
} as const satisfies Record<string, string>;

export type MasconType = (typeof MasconType)[keyof typeof MasconType];
