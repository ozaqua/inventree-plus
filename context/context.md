# INVENTREE+ Project Context

## Current State
- **Phase**: Initial Setup Complete
- **Environment**: Clean, verified working
- **Localhost**: ✅ Confirmed working on port 3000
- **Version Control**: Git initialized with comprehensive .gitignore

## Project Goals
Build an advanced inventory management system that:
1. Connects eBay store to Shopify store via custom app
2. Provides unified dashboard for multi-platform inventory
3. Implements Virtual SKU architecture for inventory synchronization
4. Offers modern, bright UI with professional polish

## Architecture Decisions
- **Virtual SKU System**: Only virtual products have editable inventory
- **Propagation Model**: Changes to virtual SKUs cascade to all linked channels
- **UI Pattern**: Left sidebar navigation, horizontal sub-navigation
- **Modal System**: Sliding panels and contextual pop-ups
- **State Management**: TBD based on complexity

## Immediate Next Steps
1. ✅ Environment setup and verification
2. ✅ Context structure creation
3. ⏳ Install Claude Flow for agent management
4. ⏳ Create specialized agents with documentation
5. ⏳ Connect MCPs for enhanced functionality
6. ⏳ Begin core application scaffolding

## Development Principles
- **Test First**: Always verify localhost stability
- **Document Everything**: Maintain context files religiously
- **Clean Commits**: Logical, atomic git commits
- **Agent Collaboration**: Research before implementation
- **High Standards**: Opus 4.1 quality expectations

## Key Integrations Required
- eBay Developer API (credentials available)
- Shopify API (pending setup)
- Image storage solution (TBD)
- Database (considering Supabase)

## Success Metrics
- Stable localhost development environment ✅
- Clean project structure ✅
- Comprehensive documentation ✅
- Multi-agent workflow (pending)
- MCP integrations (pending)
