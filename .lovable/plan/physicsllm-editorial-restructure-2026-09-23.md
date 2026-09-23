# PhysicsLLM editorial restructure

## Build
- Recompose the homepage in the selected Editorial Research Showcase direction using Ocean Deep colors and Sora/Manrope typography.
- Keep the neural-network opening visual, make it an accessible clickable media preview, and move “Explore our tools” into Results and developments.
- Add a data-driven News and Events feed with dates and categories, plus routed single-post pages and an LLM hosting guidelines article.
- Add Results and developments, Workshops with expandable placeholder galleries, Events, Papers, Outreach presentations, and Interviews.
- Add initials-based team avatars and separate logo buttons for the partner marks currently available.
- Replace collaboration messaging with a direct “Contact / How to reach us” section for project coordinator Dr. Tim Ruhe.
- Update navigation, footer, page metadata, and responsive/reduced-motion behavior.

## Technical details
- Store editorial entries in typed content data so future posts and events can be added without redesigning components.
- Use React Router paths for the news index and individual post pages.
- Use existing project controls and semantic design tokens; no backend is needed for the requested static editorial workflow.
- Validate key links, article navigation, gallery interactions, mobile layout, and the preview build.

## Assumptions
- The animated neural-network preview opens a focused project-overview modal because no external video URL was supplied.
- Workshop photos and portraits use clearly styled placeholders/initials until real media is provided.
- Only existing verified logo files are shown as image buttons; unprovided partner logos remain text marks rather than invented branding.
