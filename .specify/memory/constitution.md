<!--
SYNC IMPACT REPORT
==================
Version change: 0.0.0 → 1.0.0 (initial constitution)
Modified principles: N/A (initial creation)
Added sections:
  - Core Principles (5 principles)
  - Technical Constraints
  - User Experience Standards
  - Governance
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md: ✅ No changes needed (Constitution Check is generic)
  - .specify/templates/spec-template.md: ✅ No changes needed (structure is compatible)
  - .specify/templates/tasks-template.md: ✅ No changes needed (task structure is generic)
  - .specify/templates/checklist-template.md: ✅ No changes needed (generic structure)
  - .specify/templates/agent-file-template.md: ✅ No changes needed (generic structure)
Follow-up TODOs: None
-->

# VEHIX Constitution

## Core Principles

### I. Single Purpose Focus

VEHIX exists for one purpose: tracking car maintenance. Every feature MUST directly serve this goal.

- Features MUST NOT expand scope beyond maintenance tracking (no trip logging, no fuel economy, no insurance management)
- Each screen MUST have a single, clear purpose
- When in doubt, leave it out—reject feature creep aggressively
- The app succeeds by doing one thing exceptionally well

**Rationale**: Scalpel-like focus prevents bloat and keeps the app fast, understandable, and maintainable.

### II. Privacy-First Local Storage

All user data MUST remain on-device. No cloud services, no accounts, no analytics that leave the device.

- Data persistence MUST use local-only storage (CoreData, SwiftData, or UserDefaults)
- No network requests for user data—ever
- No third-party analytics SDKs
- No account creation or login flows
- Export/import functionality MAY be offered for user-controlled backup

**Rationale**: Users trust VEHIX with personal vehicle and financial data. That trust is maintained by ensuring data never leaves their control.

### III. Instant Responsiveness

The app MUST feel immediate. No loading spinners, no perceptible delays for common operations.

- All UI interactions MUST respond within 16ms (60fps)
- Data operations MUST complete within 100ms for typical datasets (<1000 records)
- Main thread MUST never be blocked by data operations
- Animations MUST be smooth and purposeful, not decorative

**Rationale**: A maintenance tracker is used in quick moments—at the gas station, in a parking lot. Speed is a feature.

### IV. Intuitive Simplicity

The interface MUST be self-explanatory. If a feature needs documentation, it needs redesign.

- Navigation MUST follow iOS conventions (tab bar, standard gestures)
- Adding a maintenance record MUST require ≤3 taps from any screen
- Common actions (log maintenance, view history) MUST be immediately discoverable
- No tutorials, onboarding flows, or help screens—the UI teaches itself
- Accessibility MUST be supported (VoiceOver, Dynamic Type)

**Rationale**: Users range from car enthusiasts to people who just need to remember when they last changed their oil. Both must succeed without training.

### V. Data Integrity

User maintenance records are irreplaceable historical data. The app MUST protect them absolutely.

- Data writes MUST be atomic—no partial saves
- Deletions MUST require explicit confirmation
- Schema migrations MUST preserve all existing data without loss
- The app MUST handle interruptions (backgrounding, crashes) gracefully
- No silent data modification—users MUST see exactly what they entered

**Rationale**: A missed oil change reminder due to lost data could lead to engine damage. The stakes are real.

## Technical Constraints

- **Platform**: iOS 16+ (Swift, SwiftUI preferred, UIKit where necessary)
- **Storage**: Local only (SwiftData or CoreData)
- **Architecture**: Keep it simple—avoid over-engineering (no unnecessary abstractions, patterns only where they provide clear value)
- **Dependencies**: Minimize external dependencies; prefer Apple frameworks
- **Testing**: Unit tests for data layer; UI tests for critical user journeys

## User Experience Standards

- **Tab Structure**: Dashboard (main), History, Analytics—three tabs maximum
- **Car Switching**: Single dropdown/picker, always accessible from dashboard
- **Maintenance Entry**: Tap maintenance type → Enter price + mileage → Done
- **Visual Design**: Clean, functional, respects system appearance (light/dark mode)
- **Feedback**: Haptic feedback for confirmations; no sounds

## Governance

This constitution defines the non-negotiable principles for VEHIX development. All feature decisions, pull requests, and design choices MUST align with these principles.

**Amendment Process**:
1. Proposed changes MUST be documented with rationale
2. Changes to Core Principles require explicit justification for why the original principle no longer serves users
3. All amendments MUST update the version number following semantic versioning

**Compliance**:
- PRs MUST reference relevant principles when introducing new features
- Constitution violations block merge
- When principles conflict, resolve in favor of: Privacy > Simplicity > Speed > Features

**Versioning**:
- MAJOR: Principle removed or fundamentally redefined
- MINOR: New principle added or existing principle materially expanded
- PATCH: Clarifications, wording improvements, non-semantic changes

**Version**: 1.0.0 | **Ratified**: 2026-01-29 | **Last Amended**: 2026-01-29
