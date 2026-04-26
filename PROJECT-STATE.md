# Samdent Website Redesign — Project State

## Date Started: 2026-04-26
## Status: Phase 1 In Progress

## Goal
Clone the design/layout of https://www.iqdental.co.uk/ and populate with Samdent (https://samdent.se/) content in Swedish.

## Design Direction
- Dark theme: #0C0C0C background, white text
- Accent color: #62B646 (Samdent green) — replaces IQ Dental's pink
- Font: Montserrat (200-800 weights)
- Pill-shaped CTA buttons (border-radius: 44px)
- Responsive, mobile-first

## Project Location
`~/samdent-website/`

## Files Created
- `css/variables.css` — Design system variables (colors, fonts, spacing, buttons)
- `css/base.css` — Reset, typography, buttons, forms, utilities
- `css/components.css` — **NOT YET CREATED** (subagent timed out)

## What's Documented
- Full IQ Dental page inventory (50+ pages, 16 homepage sections, all subpages)
- Full Samdent content (all pages, team, prices, treatments, two locations)
- Complete plan of action (5 phases)

## Samdent Key Info
- **2 Locations:** Hallonbergen & Arenastaden (Mall of Scandinavia)
- **Phone:** 08-33 34 55
- **Email:** receptionenmos@samdent.se / receptionen@samdent.se
- **Booking:** Muntra integration (two separate links per clinic)
- **Team:** 8 members, led by Sam Mohammadi (VD)
- **Invisalign Diamond Provider** (André Wikholm)
- **Treatments:** 16+ (Air-Flow, Bettskena, Tandblekning, Tandimplantat, etc.)
- **Payment:** Swish, Klarna, Wasa Kredit, PayZmart
- **Language:** Swedish

## IQ Dental Design System Reference
- Background: #0C0C0C
- CTA Pink: #DB375F → REPLACED with Samdent Green #62B646
- Font: Montserrat (single font family)
- Container: 1190px
- H2: 62px weight 300 (light)
- H3: 35px weight 200 (extra-light)
- H1 label: 16px weight 700 uppercase pink → green
- Buttons: pill-shaped, 44px radius
- Carousels: Slick.js
- Forms on every page
- Cross-page repeating sections on subpages

## Next Steps (to resume)
1. Create `css/components.css` — all component styles (nav, hero, sections, cards, footer, etc.)
2. Create `js/main.js` — carousel, mobile menu, dropdowns, form handling
3. Build `index.html` — full homepage with all 16 sections
4. Build subpages (om-oss.html, team.html, behandlingar.html, invisalign.html, priser.html, kontakt.html, hitta-hit.html, smile-gallery.html, etc.)
5. Add integrations (Muntra booking links, Google Maps, forms)
6. Polish (responsive testing, SEO, performance, GDPR banner)

## Issue Notes
- GLM-5.1 provider timed out on heavy subagent tasks (180s limit)
- Consider breaking CSS generation into smaller chunks
- Vision API also down (401 token expired) — can't preview designs visually
