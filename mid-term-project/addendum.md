
# Addendum — The Lost Kingdom (Fantasy CYOA)

## Planning
I designed a hub-and-spoke fantasy narrative with 8 endings:
- Hubs: Castle, Forest, Mountain, Village
- Endings: Hero King, Nature’s Guardian, Dragon Rider, Treasure Thief (Cursed), Cursed Soul, Dark Sorcerer, Spirits Redeemed, Forgotten Wanderer.

## Implementation
- **HTML**: Responsive three-panel layout (instructions, story, history).
- **CSS**: Forest-inspired palette; grid layout; mobile responsive.
- **JavaScript**: Story modeled as nodes with `text`, `image`, and `choices`. Endings tracked via `localStorage` to show “Endings found.”
- **Events/DOM**: Click listeners create navigation; keyboard shortcuts (1–9, R) improve usability; `render()` updates text, image, and buttons.

## Images
Every ending and scene uses offline-safe, embedded SVG data URIs (you can swap in your own image URLs later if desired).

## Debugging & Testing
- Centralized `choose()` function avoids broken links.
- Guarded keyboard input for scenes with fewer options.
- Tested all 8 endings; verified footer timestamp appears as required.

## Rubric Coverage
- Objectives: HTML/CSS/JS, events, DOM manipulation, debugging.
- 8+ endings + images ✅
- Substantive addendum ✅
- Source code included ✅
- Last-Modified footer included ✅

## Future Enhancements
- Add soundtrack toggle; accessibility narration; export/import of ending progress.
