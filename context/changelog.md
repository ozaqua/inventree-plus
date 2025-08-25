# INVENTREE+ Changelog

## Version 0.1.0 - Initial Setup (2025-08-22)

### Environment Setup
- **RESOLVED**: .DS_Store npm corruption from previous projects
  - Solution: Cleaned npm cache with `npm cache clean --force`
  - Archived corrupted projects to `claude-zARCHIVED` folder
  - Created comprehensive .gitignore before project initialization

- **RESOLVED**: Localhost connection issues (FINAL FIX - 2025-08-23)
  - Root cause: Next.js dev server binding only to localhost (127.0.0.1), not accepting external connections
  - Pattern: User could connect once during server startup but got "booted" when Claude returned
  - Solution: 
    - Modified package.json to include `-H 0.0.0.0` flag in dev script
    - Updated next.config.ts with proper CORS and serverActions configuration
    - Server now binds to all network interfaces, allowing stable concurrent connections
  - Verified: Both Claude and user can access localhost:3000 simultaneously without conflicts

### Project Initialization
- Created Next.js 15.5.0 project with TypeScript and Turbopack
- Implemented proper git structure with .gitignore
- Established context management system
- Set up CLAUDE.md for AI guidance

### Technical Details
- Node.js: v22.17.0 (via NVM)
- npm: v11.5.2 (upgraded from v10.9.2)
- Next.js: 15.5.0
- TypeScript: Latest
- Tailwind CSS: Latest

### Notes
- Project structure designed for multi-agent collaboration
- Context folder established for documentation management
- Ready for Claude Flow integration and MCP connections
