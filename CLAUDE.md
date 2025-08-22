# CLAUDE.md

## Project: INVENTREE+ 
Advanced Inventory Management System for Multi-Platform E-commerce

## Project Overview
INVENTREE+ is a sophisticated inventory management application designed to synchronize inventory between eBay and Shopify stores. The system uses a "Virtual SKU" architecture where only virtual products have editable inventory levels, which then propagate to all linked sales channels.

### Core Features
- **Multi-Platform Integration**: Connect eBay listings to Shopify products
- **Virtual SKU Management**: Single source of truth for inventory levels
- **Order Management**: Manage orders, postage, and tracking across platforms
- **Listing Design System**: HTML/CSS editor for custom eBay listing templates
- **AI-Powered Design**: Speech-to-design functionality for listing templates
- **Image Management**: Store and manage product images for listings
- **Modern UI**: Crisp, bright interface with toast notifications and sliding modals

## Technical Stack
- **Framework**: Next.js 15.5.0 with TypeScript and Turbopack
- **Styling**: Tailwind CSS with modern, bright color scheme
- **Database**: TBD (considering Supabase)
- **Deployment**: Vercel
- **APIs**: eBay Developer API, Shopify API

## Development Environment
- **Node Version**: v22.17.0 (managed by NVM)
- **Package Manager**: npm v11.5.2
- **Domain**: inventree.plus (available for deployment)

## Project Structure
```
inventree-plus/
├── src/               # Source code
├── context/           # Project context and documentation
│   ├── context.md     # Current context documentation
│   ├── changelog.md   # Issue tracking and resolutions
│   └── versions.md    # Package version tracking
├── CLAUDE.md          # This file - AI guidance
└── WARP.md           # Warp terminal guidance
```

## UI/UX Guidelines
- **Navigation**: Left-hand main menu, horizontal top menu for sub-pages
- **Modals**: Sliding panels from side or pop-ups based on content size
- **Colors**: Bright, friendly, modern color palette
- **Feedback**: Toast notifications for user actions
- **Design**: Crisp, clean, professional appearance

## Critical Success Factors
1. **Localhost Stability**: Must maintain stable localhost connection
2. **Clean Environment**: No .DS_Store corruption, clean npm cache
3. **Version Control**: Proper git management with comprehensive .gitignore
4. **Documentation**: Maintain context/, changelog, and version tracking

## Development Workflow
1. **Research Phase**: Agents investigate and report findings
2. **Review Phase**: Claude (Opus 4.1) reviews and refines agent work
3. **Implementation Phase**: Code implementation with high standards
4. **Testing Phase**: Verify functionality, especially localhost stability

## Agent Architecture (To Be Implemented)
- **Vercel Specialist**: Deployment and hosting expertise
- **GitHub Specialist**: Version control and collaboration
- **Database Specialist**: Data architecture and optimization
- **Frontend UI Specialist**: Component design and implementation
- **Design Review Specialist**: UI/UX consistency and quality
- **Linting Specialist**: Code quality and standards
- **Code Review Specialist**: Implementation quality
- **Error/Change Log Specialist**: Issue tracking and resolution

## MCP Connections (To Be Implemented)
- GitHub MCP
- Playwright MCP
- Context7 MCP
- Firecrawl MCP
- MarkItDown MCP
- Notion MCP

## Standards & Expectations
As the Opus 4.1 model, I maintain the highest standards for:
- Code quality and architecture
- Documentation completeness
- Error handling and edge cases
- Performance optimization
- Security best practices
- User experience excellence

## Known Issues Resolved
- ✅ .DS_Store npm corruption fixed
- ✅ Localhost connection issues resolved
- ✅ Clean project environment established
- ✅ Proper directory structure implemented

## Next Steps
1. Complete context file structure
2. Install and configure Claude Flow
3. Set up specialized agents with documentation
4. Connect MCPs for enhanced functionality
5. Begin core application development
