#!/bin/bash
#
# Git Worktree Setup Script
# Project: SystemMatchAi
# Repository: https://github.com/scrollinondubs/SpaBooker
# Generated: 2025-10-21T19:30:40.342Z
#
# This script creates separate git worktrees for each task and epic,
# enabling parallel development without branch conflicts.
#

set -e  # Exit on error

echo "🌳 Setting up git worktrees for parallel development..."
echo ""

# ================================================
# EPICS
# ================================================

# Epic #1: Automated Scheduling
# ✅ No dependencies - can start immediately
echo "Creating worktree for Epic #1..."
git worktree add ../epic-1-worktree -b epic/1-automated-scheduling 2>/dev/null || echo "  Worktree already exists"

# Epic #4: Service Information Display
# ⚠️  Dependencies: #10
echo "Creating worktree for Epic #4..."
git worktree add ../epic-4-worktree -b epic/4-service-information-display 2>/dev/null || echo "  Worktree already exists"

# Epic #7: Staff Scheduling
# ✅ No dependencies - can start immediately
echo "Creating worktree for Epic #7..."
git worktree add ../epic-7-worktree -b epic/7-staff-scheduling 2>/dev/null || echo "  Worktree already exists"

# Epic #10: Technical Foundation
# ⚠️  Dependencies: #6
echo "Creating worktree for Epic #10..."
git worktree add ../epic-10-worktree -b epic/10-technical-foundation 2>/dev/null || echo "  Worktree already exists"

# ================================================
# TASKS
# ================================================

# Task #2: Implement Booking Request API
# ⚠️  Dependencies: #6, #10, #5, #9
echo "Creating worktree for Task #2..."
git worktree add ../task-2-worktree -b task/2-implement-booking-request-api 2>/dev/null || echo "  Worktree already exists"

# Task #3: Calendar Sync Feature
# ⚠️  Dependencies: #6, #10
echo "Creating worktree for Task #3..."
git worktree add ../task-3-worktree -b task/3-calendar-sync-feature 2>/dev/null || echo "  Worktree already exists"

# Task #5: Develop Service Catalog UI
# ⚠️  Dependencies: #2, #9, #10
echo "Creating worktree for Task #5..."
git worktree add ../task-5-worktree -b task/5-develop-service-catalog-ui 2>/dev/null || echo "  Worktree already exists"

# Task #6: Real-Time Availability Updates
# ⚠️  Dependencies: #10
echo "Creating worktree for Task #6..."
git worktree add ../task-6-worktree -b task/6-real-time-availability-updates 2>/dev/null || echo "  Worktree already exists"

# Task #8: Staff Availability Management
# ⚠️  Dependencies: #2, #5, #9
echo "Creating worktree for Task #8..."
git worktree add ../task-8-worktree -b task/8-staff-availability-management 2>/dev/null || echo "  Worktree already exists"

# Task #9: Notification System for Staff
# ⚠️  Dependencies: #6, #10
echo "Creating worktree for Task #9..."
git worktree add ../task-9-worktree -b task/9-notification-system-for-staff 2>/dev/null || echo "  Worktree already exists"

echo ""
echo "✅ Worktree setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. View all worktrees: git worktree list"
echo "2. Check dependencies: ./confabulator/worktree-status.sh"
echo "3. Start working: cd <worktree-directory>"
echo ""
echo "To cleanup all worktrees: ./confabulator/cleanup-worktrees.sh"
