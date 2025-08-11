/*
 * Public API Surface of ngx-mat-datetime-picker - Angular 19 Standalone Components
 */

// Standalone Components
export * from "./lib/datetime-picker.component";
export * from "./lib/datetime-input";
export * from "./lib/timepicker.component";
export * from "./lib/calendar";
export * from "./lib/month-view";
export * from "./lib/year-view";
export * from "./lib/multi-year-view";

// Core utilities and adapters
export * from "./lib/core/date-adapter";
export * from "./lib/core/native-date-adapter";
export * from "./lib/core/native-date-formats";
export * from "./lib/core/date-formats";

// Legacy modules for backward compatibility (deprecated)
/** @deprecated Use standalone components instead */
export * from "./lib/datetime-picker.module";
/** @deprecated Use standalone components instead */
export * from "./lib/timepicker.module";
/** @deprecated Use standalone components instead */
export * from "./lib/core/native-date.module";
