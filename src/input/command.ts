import type {
  SetAtoNotchCommand,
  SetBrakeNotchCommand,
  SetBrakeSAPCommand,
  SetButtonCommand,
  SetDeadmanCommand,
  SetNotchCommand,
  SetPowerNotchCommand,
  SetReverserCommand,
  SetWiperCommand
} from './commands';

/**
 * Discriminated-union command type. The wire-level `kind` string discriminator
 * picks the concrete subtype (`SetNotchCommand`, `SetButtonCommand`, ...).
 */
export type Command =
  | SetNotchCommand
  | SetPowerNotchCommand
  | SetBrakeNotchCommand
  | SetBrakeSAPCommand
  | SetReverserCommand
  | SetButtonCommand
  | SetWiperCommand
  | SetAtoNotchCommand
  | SetDeadmanCommand;

/**
 * Freeform command with an arbitrary `kind` string and payload. Spec §6.1 leaves the kind set
 * open and requires producers to accept unknown kinds, so consumers may need to send commands
 * this package does not model.
 */
export interface CustomCommand {
  kind: string & {};
  [key: string]: unknown;
}

/**
 * Command accepted for sending: the modeled `Command` variants (autocomplete hints) plus
 * freeform `CustomCommand`s.
 */
export type CommandInput = Command | CustomCommand;

/** Command `kind` discriminator: the modeled kinds (autocomplete hints) plus any freeform string. */
export type CommandKind = Command['kind'] | (string & {});
