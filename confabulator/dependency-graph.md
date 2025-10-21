# Dependency Graph

```mermaid
graph TD

  1[[#1: Automated Scheduling]]
  2[#2: Implement Booking Request API]
  3[#3: Calendar Sync Feature]
  4[[#4: Service Information Display]]
  5[#5: Develop Service Catalog UI]
  6[#6: Real-Time Availability Updates]
  7[[#7: Staff Scheduling]]
  8[#8: Staff Availability Management]
  9[#9: Notification System for Staff]
  10[[#10: Technical Foundation]]

  6 -->|Database before API| 2
  6 -->|Database before API| 9
  10 -->|Database before API| 2
  10 -->|Database before API| 9
  2 -->|API before UI| 5
  2 -->|API before UI| 8
  5 -->|API before UI| 2
  5 -->|API before UI| 8
  9 -->|API before UI| 2
  9 -->|API before UI| 5
  9 -->|API before UI| 8
  10 -->|Models before services| 4
  10 -->|Models before services| 5
  10 -->|Models before services| 6
  6 -->|Setup before features| 3
  6 -->|Setup before features| 10
  10 -->|Setup before features| 3

  classDef epicStyle fill:#e1f5ff,stroke:#01579b,stroke-width:2px
  classDef taskStyle fill:#fff3e0,stroke:#e65100,stroke-width:1px
  class 1,4,7,10 epicStyle
  class 2,3,5,6,8,9 taskStyle
```

## Legend
- **Double box**: Epic
- **Single box**: Task
- **Arrow direction**: Dependency flow (A → B means B depends on A)

## About This Diagram

This diagram shows the dependencies between epics and tasks in your project. Use it to understand the order in which work should be completed and merged.

- **Epics** (double boxes) represent major features or components
- **Tasks** (single boxes) are specific implementation work items
- **Arrows** show dependencies (A → B means B depends on A completing first)

For parallel development using git worktrees, run:
```bash
./confabulator/setup-worktrees.sh
```
