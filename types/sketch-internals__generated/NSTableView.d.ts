interface NSTableViewUninitialized<InitializedType = NSTableView> extends NSControlUninitialized<NSTableView> {}

interface NSTableView extends NSControl, INSUserInterfaceValidations, INSTextViewDelegate, INSDraggingSource, INSAccessibilityTable {
  noteHeightOfRowsWithIndexesChanged(indexSet: NSIndexSet): void;
  addTableColumn(tableColumn: NSTableColumn): void;
  removeTableColumn(tableColumn: NSTableColumn): void;
  moveColumn_toColumn(oldIndex: NSInteger, newIndex: NSInteger): void;
  columnWithIdentifier(identifier: NSUserInterfaceItemIdentifier): NSInteger;
  tableColumnWithIdentifier(identifier: NSUserInterfaceItemIdentifier): NSTableColumn;
  tile(): void;
  sizeToFit(): void;
  sizeLastColumnToFit(): void;
  scrollRowToVisible(row: NSInteger): void;
  scrollColumnToVisible(column: NSInteger): void;
  reloadData(): void;
  noteNumberOfRowsChanged(): void;
  reloadDataForRowIndexes_columnIndexes(rowIndexes: NSIndexSet, columnIndexes: NSIndexSet): void;
  setIndicatorImage_inTableColumn(image: NSImage | null, tableColumn: NSTableColumn): void;
  indicatorImageInTableColumn(tableColumn: NSTableColumn): NSImage;
  canDragRowsWithIndexes_atPoint(rowIndexes: NSIndexSet, mouseDownPoint: NSPoint): boolean;
  dragImageForRowsWithIndexes_tableColumns_event_offset(dragRows: NSIndexSet, tableColumns: NSArray<any> | any[], dragEvent: NSEvent, dragImageOffset: NSPointPointer): NSImage;
  setDraggingSourceOperationMask_forLocal(mask: NSDragOperation, isLocal: boolean): void;
  setDropRow_dropOperation(row: NSInteger, dropOperation: NSTableViewDropOperation): void;
  selectAll(sender: any | null): void;
  deselectAll(sender: any | null): void;
  selectColumnIndexes_byExtendingSelection(indexes: NSIndexSet, extend: boolean): void;
  selectRowIndexes_byExtendingSelection(indexes: NSIndexSet, extend: boolean): void;
  deselectColumn(column: NSInteger): void;
  deselectRow(row: NSInteger): void;
  isColumnSelected(column: NSInteger): boolean;
  isRowSelected(row: NSInteger): boolean;
  rectOfColumn(column: NSInteger): NSRect;
  rectOfRow(row: NSInteger): NSRect;
  columnIndexesInRect(rect: NSRect): NSIndexSet;
  rowsInRect(rect: NSRect): NSRange;
  columnAtPoint(point: NSPoint): NSInteger;
  rowAtPoint(point: NSPoint): NSInteger;
  frameOfCellAtColumn_row(column: NSInteger, row: NSInteger): NSRect;
  editColumn_row_withEvent_select(column: NSInteger, row: NSInteger, event: NSEvent | null, select: boolean): void;
  drawRow_clipRect(row: NSInteger, clipRect: NSRect): void;
  highlightSelectionInClipRect(clipRect: NSRect): void;
  drawGridInClipRect(clipRect: NSRect): void;
  drawBackgroundInClipRect(clipRect: NSRect): void;
  viewAtColumn_row_makeIfNecessary(column: NSInteger, row: NSInteger, makeIfNecessary: boolean): NSView;
  rowViewAtRow_makeIfNecessary(row: NSInteger, makeIfNecessary: boolean): NSTableRowView;
  rowForView(view: NSView): NSInteger;
  columnForView(view: NSView): NSInteger;
  makeViewWithIdentifier_owner(identifier: NSUserInterfaceItemIdentifier, owner: any | null): NSView;
  enumerateAvailableRowViewsUsingBlock(handler: Block): void;
  beginUpdates(): void;
  endUpdates(): void;
  insertRowsAtIndexes_withAnimation(indexes: NSIndexSet, animationOptions: NSTableViewAnimationOptions): void;
  removeRowsAtIndexes_withAnimation(indexes: NSIndexSet, animationOptions: NSTableViewAnimationOptions): void;
  moveRowAtIndex_toIndex(oldIndex: NSInteger, newIndex: NSInteger): void;
  hideRowsAtIndexes_withAnimation(indexes: NSIndexSet, rowAnimation: NSTableViewAnimationOptions): void;
  unhideRowsAtIndexes_withAnimation(indexes: NSIndexSet, rowAnimation: NSTableViewAnimationOptions): void;
  registerNib_forIdentifier(nib: NSNib | null, identifier: NSUserInterfaceItemIdentifier): void;
  didAddRowView_forRow(rowView: NSTableRowView, row: NSInteger): void;
  didRemoveRowView_forRow(rowView: NSTableRowView, row: NSInteger): void;
  setDrawsGrid(flag: boolean): void;
  drawsGrid(): boolean;
  selectColumn_byExtendingSelection(column: NSInteger, extend: boolean): void;
  selectRow_byExtendingSelection(row: NSInteger, extend: boolean): void;
  selectedColumnEnumerator(): NSEnumerator<any>;
  selectedRowEnumerator(): NSEnumerator<any>;
  dragImageForRows_event_dragImageOffset(dragRows: NSArray<any> | any[], dragEvent: NSEvent, dragImageOffset: NSPointPointer): NSImage;
  setAutoresizesAllColumnsToFit(flag: boolean): void;
  autoresizesAllColumnsToFit(): boolean;
  columnsInRect(rect: NSRect): NSRange;
  preparedCellAtColumn_row(column: NSInteger, row: NSInteger): NSCell;
  textShouldBeginEditing(textObject: NSText): boolean;
  textShouldEndEditing(textObject: NSText): boolean;
  textDidBeginEditing(notification: NSNotification): void;
  textDidEndEditing(notification: NSNotification): void;
  textDidChange(notification: NSNotification): void;
  shouldFocusCell_atColumn_row(cell: NSCell, column: NSInteger, row: NSInteger): boolean;
  focusedColumn(): NSInteger;
  setFocusedColumn(focusedColumn: NSInteger): void;
  performClickOnCellAtColumn_row(column: NSInteger, row: NSInteger): void;
  selectRow_extendSelection(rowIndex: NSInteger, flag: boolean): void;
  validateUserInterfaceItem(item: any): boolean;
  textView_clickedOnLink_atIndex(textView: NSTextView, link: any, charIndex: NSUInteger): boolean;
  textView_clickedOnCell_inRect_atIndex(textView: NSTextView, cell: any, cellFrame: NSRect, charIndex: NSUInteger): void;
  textView_doubleClickedOnCell_inRect_atIndex(textView: NSTextView, cell: any, cellFrame: NSRect, charIndex: NSUInteger): void;
  textView_draggedCell_inRect_event_atIndex(view: NSTextView, cell: any, rect: NSRect, event: NSEvent, charIndex: NSUInteger): void;
  textView_writablePasteboardTypesForCell_atIndex(view: NSTextView, cell: any, charIndex: NSUInteger): NSArray<any>;
  textView_writeCell_atIndex_toPasteboard_type(view: NSTextView, cell: any, charIndex: NSUInteger, pboard: NSPasteboard, type: NSPasteboardType): boolean;
  textView_willChangeSelectionFromCharacterRange_toCharacterRange(textView: NSTextView, oldSelectedCharRange: NSRange, newSelectedCharRange: NSRange): NSRange;
  textView_willChangeSelectionFromCharacterRanges_toCharacterRanges(textView: NSTextView, oldSelectedCharRanges: NSArray<any> | any[], newSelectedCharRanges: NSArray<any> | any[]): NSArray<any>;
  textView_shouldChangeTextInRanges_replacementStrings(textView: NSTextView, affectedRanges: NSArray<any> | any[], replacementStrings: NSArray<any> | any[] | null): boolean;
  textView_shouldChangeTypingAttributes_toAttributes(textView: NSTextView, oldTypingAttributes: NSDictionary<any, any> | {[key: string]: any}, newTypingAttributes: NSDictionary<any, any> | {[key: string]: any}): NSDictionary<any, any>;
  textViewDidChangeSelection(notification: NSNotification): void;
  textViewDidChangeTypingAttributes(notification: NSNotification): void;
  textView_willDisplayToolTip_forCharacterAtIndex(textView: NSTextView, tooltip: NSString | string, characterIndex: NSUInteger): NSString;
  textView_completions_forPartialWordRange_indexOfSelectedItem(textView: NSTextView, words: NSArray<any> | any[], charRange: NSRange, index: NSInteger | null): NSArray<any>;
  textView_shouldChangeTextInRange_replacementString(textView: NSTextView, affectedCharRange: NSRange, replacementString: NSString | string | null): boolean;
  textView_doCommandBySelector(textView: NSTextView, commandSelector: string): boolean;
  textView_shouldSetSpellingState_range(textView: NSTextView, value: NSInteger, affectedCharRange: NSRange): NSInteger;
  textView_menu_forEvent_atIndex(view: NSTextView, menu: NSMenu, event: NSEvent, charIndex: NSUInteger): NSMenu;
  textView_willCheckTextInRange_options_types(view: NSTextView, range: NSRange, options: NSDictionary<any, any> | {[key: string]: any}, checkingTypes: NSTextCheckingTypes): NSDictionary<any, any>;
  textView_didCheckTextInRange_types_options_results_orthography_wordCount(view: NSTextView, range: NSRange, checkingTypes: NSTextCheckingTypes, options: NSDictionary<any, any> | {[key: string]: any}, results: NSArray<any> | any[], orthography: NSOrthography, wordCount: NSInteger): NSArray<any>;
  textView_URLForContentsOfTextAttachment_atIndex(textView: NSTextView, textAttachment: NSTextAttachment, charIndex: NSUInteger): NSURL;
  textView_willShowSharingServicePicker_forItems(textView: NSTextView, servicePicker: NSSharingServicePicker, items: NSArray<any> | any[]): NSSharingServicePicker;
  undoManagerForTextView(view: NSTextView): NSUndoManager;
  textView_shouldUpdateTouchBarItemIdentifiers(textView: NSTextView, identifiers: NSArray<any> | any[]): NSArray<any>;
  textView_candidatesForSelectedRange(textView: NSTextView, selectedRange: NSRange): NSArray<any>;
  textView_candidates_forSelectedRange(textView: NSTextView, candidates: NSArray<any> | any[], selectedRange: NSRange): NSArray<any>;
  textView_shouldSelectCandidateAtIndex(textView: NSTextView, index: NSUInteger): boolean;
  textView_clickedOnLink(textView: NSTextView, link: any): boolean;
  textView_clickedOnCell_inRect(textView: NSTextView, cell: any, cellFrame: NSRect): void;
  textView_doubleClickedOnCell_inRect(textView: NSTextView, cell: any, cellFrame: NSRect): void;
  textView_draggedCell_inRect_event(view: NSTextView, cell: any, rect: NSRect, event: NSEvent): void;
  draggingSession_sourceOperationMaskForDraggingContext(session: NSDraggingSession, context: NSDraggingContext): NSDragOperation;
  draggingSession_willBeginAtPoint(session: NSDraggingSession, screenPoint: NSPoint): void;
  draggingSession_movedToPoint(session: NSDraggingSession, screenPoint: NSPoint): void;
  draggingSession_endedAtPoint_operation(session: NSDraggingSession, screenPoint: NSPoint, operation: NSDragOperation): void;
  ignoreModifierKeysForDraggingSession(session: NSDraggingSession): boolean;

  dataSource(): any;
  setDataSource(dataSource: any): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  headerView(): NSTableHeaderView;
  setHeaderView(headerView: NSTableHeaderView): void;
  cornerView(): NSView;
  setCornerView(cornerView: NSView): void;
  allowsColumnReordering(): boolean;
  setAllowsColumnReordering(allowsColumnReordering: boolean): void;
  allowsColumnResizing(): boolean;
  setAllowsColumnResizing(allowsColumnResizing: boolean): void;
  columnAutoresizingStyle(): NSTableViewColumnAutoresizingStyle;
  setColumnAutoresizingStyle(columnAutoresizingStyle: NSTableViewColumnAutoresizingStyle): void;
  gridStyleMask(): NSTableViewGridLineStyle;
  setGridStyleMask(gridStyleMask: NSTableViewGridLineStyle): void;
  intercellSpacing(): NSSize;
  setIntercellSpacing(intercellSpacing: NSSize): void;
  usesAlternatingRowBackgroundColors(): boolean;
  setUsesAlternatingRowBackgroundColors(usesAlternatingRowBackgroundColors: boolean): void;
  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
  gridColor(): NSColor;
  setGridColor(gridColor: NSColor): void;
  rowSizeStyle(): NSTableViewRowSizeStyle;
  setRowSizeStyle(rowSizeStyle: NSTableViewRowSizeStyle): void;
  effectiveRowSizeStyle(): NSTableViewRowSizeStyle;
  rowHeight(): CGFloat;
  setRowHeight(rowHeight: CGFloat): void;
  tableColumns(): NSArray<any>;
  numberOfColumns(): NSInteger;
  numberOfRows(): NSInteger;
  editedColumn(): NSInteger;
  editedRow(): NSInteger;
  clickedColumn(): NSInteger;
  clickedRow(): NSInteger;
  doubleAction(): string;
  setDoubleAction(doubleAction: string): void;
  sortDescriptors(): NSArray<any>;
  setSortDescriptors(sortDescriptors: NSArray<any> | any[]): void;
  highlightedTableColumn(): NSTableColumn;
  setHighlightedTableColumn(highlightedTableColumn: NSTableColumn): void;
  verticalMotionCanBeginDrag(): boolean;
  setVerticalMotionCanBeginDrag(verticalMotionCanBeginDrag: boolean): void;
  allowsMultipleSelection(): boolean;
  setAllowsMultipleSelection(allowsMultipleSelection: boolean): void;
  allowsEmptySelection(): boolean;
  setAllowsEmptySelection(allowsEmptySelection: boolean): void;
  allowsColumnSelection(): boolean;
  setAllowsColumnSelection(allowsColumnSelection: boolean): void;
  selectedColumnIndexes(): NSIndexSet;
  selectedRowIndexes(): NSIndexSet;
  selectedColumn(): NSInteger;
  selectedRow(): NSInteger;
  numberOfSelectedColumns(): NSInteger;
  numberOfSelectedRows(): NSInteger;
  allowsTypeSelect(): boolean;
  setAllowsTypeSelect(allowsTypeSelect: boolean): void;
  selectionHighlightStyle(): NSTableViewSelectionHighlightStyle;
  setSelectionHighlightStyle(selectionHighlightStyle: NSTableViewSelectionHighlightStyle): void;
  draggingDestinationFeedbackStyle(): NSTableViewDraggingDestinationFeedbackStyle;
  setDraggingDestinationFeedbackStyle(draggingDestinationFeedbackStyle: NSTableViewDraggingDestinationFeedbackStyle): void;
  autosaveName(): NSTableViewAutosaveName;
  setAutosaveName(autosaveName: NSTableViewAutosaveName): void;
  autosaveTableColumns(): boolean;
  setAutosaveTableColumns(autosaveTableColumns: boolean): void;
  floatsGroupRows(): boolean;
  setFloatsGroupRows(floatsGroupRows: boolean): void;
  rowActionsVisible(): boolean;
  setRowActionsVisible(rowActionsVisible: boolean): void;
  hiddenRowIndexes(): NSIndexSet;
  registeredNibsByIdentifier(): NSDictionary<any, any>;
  usesStaticContents(): boolean;
  setUsesStaticContents(usesStaticContents: boolean): void;
  userInterfaceLayoutDirection(): NSUserInterfaceLayoutDirection;
  setUserInterfaceLayoutDirection(userInterfaceLayoutDirection: NSUserInterfaceLayoutDirection): void;
  usesAutomaticRowHeights(): boolean;
  setUsesAutomaticRowHeights(usesAutomaticRowHeights: boolean): void;
}

declare const NSTableView: {
  alloc(): NSTableViewUninitialized;
  class(): NSTableView;
  inpectorBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorCheckmarkBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRectWithMaxRadius(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRect_borderRadius(rect: NSRect, borderRadius: CGFloat): NSBezierPath;
  inpectorFocusRingPathForRect(rect: NSRect): NSBezierPath;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}
