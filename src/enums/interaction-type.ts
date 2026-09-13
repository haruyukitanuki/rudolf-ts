/** Type of action with other trains (`Station.interactions`). */
export const InteractionType = {
  /** Passengers can change to a train that has already stopped at the station. (接) */
  Connecting: 'Connecting',
  /** Wait for a train to clear the tracks ahead. (交) */
  ExchangeMovement: 'ExchangeMovement',
  /** Passengers can change to a train that has not arrived yet. (連) */
  Transfer: 'Transfer',
  /** Wait for a train to pass from behind. (待) */
  Wait: 'Wait',
  /** Interaction cannot be determined, or other forms of action. */
  Unknown: 'Unknown'
} as const satisfies Record<string, string>;

export type InteractionType = (typeof InteractionType)[keyof typeof InteractionType];
