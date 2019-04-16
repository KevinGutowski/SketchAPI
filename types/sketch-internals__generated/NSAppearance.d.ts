interface NSAppearanceUninitialized<InitializedType = NSAppearance> extends NSObjectUninitialized<NSAppearance> {
  initWithAppearanceNamed_bundle(name: NSAppearanceName, bundle: NSBundle | null): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSAppearance extends NSObject, INSSecureCoding {
  bestMatchFromAppearancesWithNames(appearances: NSArray<any> | any[]): NSAppearanceName;

  name(): NSAppearanceName;
  allowsVibrancy(): boolean;
  isDark_bc(): boolean;
}

declare const NSAppearance: {
  alloc(): NSAppearanceUninitialized;
  class(): NSAppearance;
  appearanceNamed(name: NSAppearanceName): NSAppearance;
  sketchDefaultDarkAppearance(): NSAppearance;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  currentAppearance(): NSAppearance;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCurrentAppearance(currentAppearance: NSAppearance): void;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}
