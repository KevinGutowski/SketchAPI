interface MSUnavailableUpdatesWindowControllerUninitialized<InitializedType = MSUnavailableUpdatesWindowController> extends NSWindowControllerUninitialized<MSUnavailableUpdatesWindowController> {}

interface MSUnavailableUpdatesWindowController extends NSWindowController, INSWindowDelegate {
  windowShouldClose(sender: NSWindow): boolean;
  windowWillReturnFieldEditor_toObject(sender: NSWindow, client: any | null): any;
  windowWillResize_toSize(sender: NSWindow, frameSize: NSSize): NSSize;
  windowWillUseStandardFrame_defaultFrame(window: NSWindow, newFrame: NSRect): NSRect;
  windowShouldZoom_toFrame(window: NSWindow, newFrame: NSRect): boolean;
  windowWillReturnUndoManager(window: NSWindow): NSUndoManager;
  window_willPositionSheet_usingRect(window: NSWindow, sheet: NSWindow, rect: NSRect): NSRect;
  window_shouldPopUpDocumentPathMenu(window: NSWindow, menu: NSMenu): boolean;
  window_shouldDragDocumentWithEvent_from_withPasteboard(window: NSWindow, event: NSEvent, dragImageLocation: NSPoint, pasteboard: NSPasteboard): boolean;
  window_willUseFullScreenContentSize(window: NSWindow, proposedSize: NSSize): NSSize;
  window_willUseFullScreenPresentationOptions(window: NSWindow, proposedOptions: NSApplicationPresentationOptions): NSApplicationPresentationOptions;
  customWindowsToEnterFullScreenForWindow(window: NSWindow): NSArray<any>;
  window_startCustomAnimationToEnterFullScreenWithDuration(window: NSWindow, duration: NSTimeInterval): void;
  windowDidFailToEnterFullScreen(window: NSWindow): void;
  customWindowsToExitFullScreenForWindow(window: NSWindow): NSArray<any>;
  window_startCustomAnimationToExitFullScreenWithDuration(window: NSWindow, duration: NSTimeInterval): void;
  customWindowsToEnterFullScreenForWindow_onScreen(window: NSWindow, screen: NSScreen): NSArray<any>;
  window_startCustomAnimationToEnterFullScreenOnScreen_withDuration(window: NSWindow, screen: NSScreen, duration: NSTimeInterval): void;
  windowDidFailToExitFullScreen(window: NSWindow): void;
  window_willResizeForVersionBrowserWithMaxPreferredSize_maxAllowedSize(window: NSWindow, maxPreferredFrameSize: NSSize, maxAllowedFrameSize: NSSize): NSSize;
  window_willEncodeRestorableState(window: NSWindow, state: NSCoder): void;
  window_didDecodeRestorableState(window: NSWindow, state: NSCoder): void;
  windowDidResize(notification: NSNotification): void;
  windowDidExpose(notification: NSNotification): void;
  windowWillMove(notification: NSNotification): void;
  windowDidMove(notification: NSNotification): void;
  windowDidBecomeKey(notification: NSNotification): void;
  windowDidResignKey(notification: NSNotification): void;
  windowDidBecomeMain(notification: NSNotification): void;
  windowDidResignMain(notification: NSNotification): void;
  windowWillClose(notification: NSNotification): void;
  windowWillMiniaturize(notification: NSNotification): void;
  windowDidMiniaturize(notification: NSNotification): void;
  windowDidDeminiaturize(notification: NSNotification): void;
  windowDidUpdate(notification: NSNotification): void;
  windowDidChangeScreen(notification: NSNotification): void;
  windowDidChangeScreenProfile(notification: NSNotification): void;
  windowDidChangeBackingProperties(notification: NSNotification): void;
  windowWillBeginSheet(notification: NSNotification): void;
  windowDidEndSheet(notification: NSNotification): void;
  windowWillStartLiveResize(notification: NSNotification): void;
  windowDidEndLiveResize(notification: NSNotification): void;
  windowWillEnterFullScreen(notification: NSNotification): void;
  windowDidEnterFullScreen(notification: NSNotification): void;
  windowWillExitFullScreen(notification: NSNotification): void;
  windowDidExitFullScreen(notification: NSNotification): void;
  windowWillEnterVersionBrowser(notification: NSNotification): void;
  windowDidEnterVersionBrowser(notification: NSNotification): void;
  windowWillExitVersionBrowser(notification: NSNotification): void;
  windowDidExitVersionBrowser(notification: NSNotification): void;
  windowDidChangeOcclusionState(notification: NSNotification): void;
}

declare const MSUnavailableUpdatesWindowController: {
  alloc(): MSUnavailableUpdatesWindowControllerUninitialized;
  class(): MSUnavailableUpdatesWindowController;
  showModalWithVersion_buildNumber_reason(version: NSString | string, buildNumber: NSString | string, reason: MSUnavailableUpdatesReason): void;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}
