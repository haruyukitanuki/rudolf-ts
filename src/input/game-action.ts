/**
 * Camera/view/UI/sim-meta actions referenced by `SetButtonCommand`.
 * Each value is a button-press or key-press style event (some are momentary, some are toggles).
 */
export const GameAction = {
  /** Toggle the exterior/external view (外部視点切替). */
  ExteriorView: 'ExteriorView',
  /** Driver alternate viewpoint. */
  DriverAlternateView: 'DriverAlternateView',
  /** Conductor rear-confirmation view (後方確認). */
  ConductorAlternateView: 'ConductorAlternateView',
  /** Look out of the left window. */
  LeftWindowView: 'LeftWindowView',
  /** Look out of the right window. */
  RightWindowView: 'RightWindowView',
  /** Toggle the pause menu. */
  TogglePauseMenu: 'TogglePauseMenu',
  /** Toggle the diagram/schedule display (スタフ表示). */
  ToggleDiagramDisplay: 'ToggleDiagramDisplay',
  /** Toggle the in-game UI (画面表示). */
  ToggleGUI: 'ToggleGUI',
  /** Toggle the crew door. */
  ToggleCrewDoor: 'ToggleCrewDoor',
  /** Toggle the crew window. */
  ToggleCrewWindow: 'ToggleCrewWindow'
} as const satisfies Record<string, string>;

export type GameAction = (typeof GameAction)[keyof typeof GameAction];
