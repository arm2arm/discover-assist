

# PhysicsLLM Full Landing Page Transformation

## Overview
Transform the current "Coming Soon" single-section page into a comprehensive, multi-section research work package landing page based on verified content from physics-llm.erumdatahub.de and the Lamarr Institute news article.

## Key Facts Distilled from Sources
- **Funding**: ~2.8M EUR over 3 years, funded by BMFTR via ErUM-Data initiative
- **Coordinator**: Dr. Tim Ruhe (Lamarr Institute) -- project-wide coordinator
- **PI (Agentic WP)**: Dr. A. Khalatyan (AIP)
- **Infrastructure**: Supported by PUNCH4NFDI
- **Consortium**: Scientists from all ErUM communities + computer science + industry
- **Core mission**: LLM-enhanced RDM toolkit turning Big Data into Smart Data
- **Key tech**: LLM agents, CrewAI, metadata annotation, semantic search, workflow documentation

---

## Page Structure (top to bottom)

### 1. Navigation Bar (new component: `Navbar.tsx`)
- Sticky top nav with "PhysicsLLM" brand linking to https://physics-llm.erumdatahub.de/
- Menu items: Overview, Team, Outputs, Resources, Contact (smooth scroll anchors)
- CTA button: "Join Collaboration"
- Mobile hamburger menu

### 2. Hero Section (update existing `Hero.tsx`)
- Keep animated background and floating badges
- Change heading to "Agentic Workflows Work Package"
- Add subheading: "Building autonomous AI systems for physics research automation"
- Add description paragraph about LLM-based agentic frameworks
- Replace "Coming Soon" with two CTA buttons: "Explore Our Tools" (primary) + "Read Documentation" (outlined)

### 3. TL;DR Overview Cards (new component: `TLDRPanel.tsx`)
- 2x2 grid of scannable cards:
  - Objective, Focus Areas, Deliverables, Status (Active 2025-2027)

### 4. Project Context Banner (new component: `ProjectContext.tsx`)
- "Part of the PhysicsLLM Initiative" heading
- Text about the broader PhysicsLLM project (from erumdatahub.de content)
- Funding badges: BMFTR, ErUM-Data-Hub, PUNCH4NFDI
- Link to main PhysicsLLM site

### 5. Mission Section (update existing `Mission.tsx`)
- Integrate actual content from sources about Big Data to Smart Data transformation
- Keep FAIR principles callout

### 6. Agentic Capabilities (keep existing `AgenticCapabilities.tsx`)
- Minor content refinements to align with source material

### 7. Use Cases Section (new component: `UseCases.tsx`)
- Three feature cards: Autonomous Literature Review, FAIR Data Pipeline Orchestration, Research Workflow Automation

### 8. Core Objectives (keep existing `Objectives.tsx`)
- Minor wording updates

### 9. Key Features (keep existing `KeyFeatures.tsx`)
- No major changes needed

### 10. Domain Knowledge (keep existing `DomainKnowledge.tsx`)
- No major changes needed

### 11. Team Section (new component: `TeamSection.tsx`)
- Profile cards for Dr. Areg Khalatyan (PI, AIP) and Tom Thong (AIP)
- ORCID placeholders, roles, institution info

### 12. Outputs Section (new component: `OutputsSection.tsx`)
- Three columns: Publications/Preprints, Code/Tools, Documentation/Guides
- Placeholder items marked as "coming soon"

### 13. Research Infrastructure Ecosystem (new component: `InfrastructureEcosystem.tsx`)
- ErUM-Data context paragraph (from Lamarr article: ~20,000 scientists, PUNCH4NFDI integration)
- Logo strip: ErUM-Data-Hub, PUNCH4NFDI, BMFTR, AIP
- Three info columns: ErUM Communities, PUNCH4NFDI, Infrastructure

### 14. Call to Action (keep existing `CallToAction.tsx`)
- Minor content updates

### 15. Footer (update existing `Footer.tsx`)
- Left: project info + funding period
- Center: navigation links
- Right: PUNCH4NFDI badge
- Keep existing funding logos (ErUM, BMFTR, AIP)

### 16. Index Page (`pages/Index.tsx`)
- Import and render all sections in order

---

## Technical Details

### New Files to Create
- `src/components/Navbar.tsx` -- sticky navigation with smooth scroll + mobile menu
- `src/components/TLDRPanel.tsx` -- 2x2 overview cards
- `src/components/ProjectContext.tsx` -- PhysicsLLM initiative banner with funding badges
- `src/components/UseCases.tsx` -- three use-case feature cards
- `src/components/TeamSection.tsx` -- team profile cards
- `src/components/OutputsSection.tsx` -- three-column resources grid
- `src/components/InfrastructureEcosystem.tsx` -- ErUM/PUNCH4NFDI context block

### Files to Modify
- `src/pages/Index.tsx` -- add all new and existing sections
- `src/components/Hero.tsx` -- update content, remove "Coming Soon", add CTAs
- `src/components/Mission.tsx` -- update text with source content
- `src/components/Footer.tsx` -- restructure with nav links and PUNCH4NFDI badge
- `src/components/CallToAction.tsx` -- minor content updates

### Design Approach
- Keep existing dark teal-to-blue color palette and animated background
- Reuse existing Card, Button UI components throughout
- Smooth scroll navigation using anchor IDs
- Hover lift effects on all cards (already established pattern)
- All sections responsive with existing Tailwind breakpoints
- Alternating section backgrounds (`bg-background` / `bg-muted/30`) for visual rhythm

