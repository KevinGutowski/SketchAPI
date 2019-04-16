interface MSInlineBlendModeButtonCellUninitialized<InitializedType = MSInlineBlendModeButtonCell> extends MSInspectorToggleImageButtonCellUninitialized<MSInlineBlendModeButtonCell> {}

interface MSInlineBlendModeButtonCell extends MSInspectorToggleImageButtonCell {
}

declare const MSInlineBlendModeButtonCell: {
  alloc(): MSInlineBlendModeButtonCellUninitialized;
  class(): MSInlineBlendModeButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}
