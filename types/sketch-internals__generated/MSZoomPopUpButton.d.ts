interface MSZoomPopUpButtonUninitialized<InitializedType = MSZoomPopUpButton> extends NSPopUpButtonUninitialized<MSZoomPopUpButton> {}

interface MSZoomPopUpButton extends NSPopUpButton {
}

declare const MSZoomPopUpButton: {
  alloc(): MSZoomPopUpButtonUninitialized;
  class(): MSZoomPopUpButton;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;

}
