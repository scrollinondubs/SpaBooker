#!/bin/bash
#
# Git Worktree Status Script
# Project: SystemMatchAi
# Generated: 2025-10-21T19:30:40.343Z
#
# Shows the status of all worktrees and their dependencies.
#

echo "📊 Worktree Status - SystemMatchAi"
echo "="
echo ""

echo "📂 Active Worktrees:"
git worktree list
echo ""

echo "🔗 Dependency Summary:"
echo ""
echo "Epics:"
echo "  ✅ #1 - Automated Scheduling (no dependencies)"
echo "  ⚠️  #4 - Service Information Display (depends on: #10)"
echo "  ✅ #7 - Staff Scheduling (no dependencies)"
echo "  ⚠️  #10 - Technical Foundation (depends on: #6)"
echo ""
echo "Tasks:"
echo "  ⚠️  #2 - Implement Booking Request API (depends on: #6, #10, #5, #9)"
echo "  ⚠️  #3 - Calendar Sync Feature (depends on: #6, #10)"
echo "  ⚠️  #5 - Develop Service Catalog UI (depends on: #2, #9, #10)"
echo "  ⚠️  #6 - Real-Time Availability Updates (depends on: #10)"
echo "  ⚠️  #8 - Staff Availability Management (depends on: #2, #5, #9)"
echo "  ⚠️  #9 - Notification System for Staff (depends on: #6, #10)"
echo ""
echo "⚠️  WARNING: Circular dependencies detected!"
echo "The following issues have circular dependencies:"
echo "  Cycle: #6 → #10"
echo "  Cycle: #3"
echo "  Cycle: #4"
echo "  Cycle: #5"
echo "  Cycle: #8"
echo "  Cycle: #9"
echo ""
echo "Please resolve these before merging."
echo ""
echo "💡 Tips:"
echo "  - Work on tasks with no dependencies first"
echo "  - Merge branches in the order shown above"
echo "  - Check GitHub issues for detailed requirements"
echo ""