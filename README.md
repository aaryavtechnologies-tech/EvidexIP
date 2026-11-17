# EVIDEX INDIA — Premium Corporate Single-Page Landing Website

A high-converting, modern, single-page corporate landing website for **EVIDEX INDIA** — Legal, Business Registration, Tax Compliance, and Intellectual Property Consultancy based in Lal Bazar, Kolkata, West Bengal.

---

## 🏛️ Business Overview & Corporate Identity

- **Business Name:** EVIDEX INDIA
- **Industry:** Business Registration, Corporate Law Facilitation, Tax Filing, Compliance, and Intellectual Property
- **Official Address:** Tobacco House, 3rd Floor, Room No. 308 (South), 1 Old Court House Corner, Radha Bazar, Lal Bazar, Kolkata – 700001, West Bengal, India
- **Phone:** +91 62916 87255
- **Email:** info@evidexindia.com
- **Business Hours:** Monday – Saturday: 10:00 AM – 7:00 PM (Sunday: Closed)
- **Official Website Reference:** https://www.evidexindia.com/

---

## 🎨 Visual Identity & Design System

- **Primary Navy Blue:** `#101F3D`
- **Deep Charcoal / Background:** `#0B1528` & `#151B26`
- **Premium Gold Accents:** `#C9962B`
- **Gold Highlights:** `#E0AD42`
- **Soft Off-White:** `#F7F8FA`
- **Light Grey Borders:** `#E9EDF2`
- **Body Text:** `#263247`
- **Headings Font:** `Plus Jakarta Sans` / `Manrope`
- **Body Font:** `Inter` / `DM Sans`

---

## ⚡ Core Single-Page Architecture

All services and interactions are contained within a single scrolling page (`/`):
1. **Top Corporate Strip & Sticky Navigation:** Translucent glassmorphism navbar transitioning into solid navy on scroll, official brand logo, in-page smooth navigation, direct call link, and primary "Get Started" CTA.
2. **Cinematic Hero Section:** Executive glass boardroom photography with deep navy gradient overlay, glass pill badge, bold headline, primary CTAs, factual trust highlights, and interactive search.
3. **Smart Service Search & Popular Chips:** Real-time instant filtering of all 24 services with auto-suggest dropdown and quick-jump chips (`Private Limited Company`, `GST Registration`, `Trademark Registration`, `Income Tax Return`, `FSSAI Registration`, `LLP Registration`).
4. **Complete Services Directory (24 Verified Offerings):**
   - **Start Business (7):** Private Limited Company, LLP Registration, One Person Company (OPC), Partnership Firm, Section 8 Company, Import Export Code (IEC), ISO Certifications.
   - **Filing & Drafting (7):** FSSAI Registration, FSSAI License Renewal, FSSAI Annual Return, Trade License, Startup India (DPIIT), MSME / Udyam, Legal Drafting & Commercial Contracts.
   - **Tax & Compliance (5):** GST Registration, GST Return Filing (GSTR-1 & 3B), Income Tax Return (ITR), Corporate ROC Filings (AOC-4/MGT-7), TDS Return Filing (24Q/26Q).
   - **Trademark & IP (5):** Trademark Registration (TM-A), Trademark Objection Reply, Trademark Opposition, Trademark Hearing Representation, Copyright Registration.
5. **Interactive Service Detail Modal:** Deep-dive modal revealing inclusions, statutory process steps (1–4), general documents required, and suitability profiles with one-click form preselection and direct call/WhatsApp dispatch.
6. **Why Choose Evidex India:** 6 benefit cards (Expert Guidance, Simplified Documentation, Transparent Communication, Personalized Assistance, Business-Focused Approach, Ongoing Compliance Support).
7. **How It Works:** 4-step horizontal journey on desktop with numbered gold circles, transitioning to vertical timeline on mobile devices.
8. **About Evidex India:** Corporate overview, office photo, and 4 core values (Integrity, Transparency, Professionalism, Client-Focused Support).
9. **Who We Help:** 6 business models (Startups, MSMEs, Corporate, E-Commerce, Hospitality, Professionals).
10. **Interactive FAQ Accordion:** All 10 specific corporate FAQs with expand/collapse and keyboard accessibility.
11. **High-Conversion Contact Section:**
    - Physical address, contact numbers, official email, business hours.
    - Embedded Google Maps with one-click "Get Directions" to Tobacco House, Lal Bazar.
    - Consultation enquiry form with field validation and preselected service synchronization.
    - Transparent dispatch handoff (WhatsApp & Corporate Email) with pre-filled details.
12. **Floating Contact Controls:** Fixed bottom-right green WhatsApp button, blue phone call button, and back-to-top trigger.
13. **Corporate Footer & Policy Modals:** Complete site map, disclaimer clarifying private consultancy status, and dedicated in-page modal dialogs for Privacy Policy, Terms & Conditions, and Refund Policy.
14. **Full SEO & Schema.org:** Semantic HTML5, Open Graph, Twitter cards, canonical tags, and structured `LegalService` JSON-LD.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** `lucide-react`
- **Testing & QA:** Puppeteer automated headless testing suite

---

## 🚀 Running the Project

### Development Server:
```bash
npm install
npm run dev
```
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) in your browser.

### Production Build:
```bash
npm run build
npm run preview
```

### Automated QA Test Suite:
```bash
node test_qa.js
```
Runs headless automated testing covering desktop search, category filtering, modal popups, form validation, mobile viewport responsiveness (375x812), and saves full-page screenshots to `qa_screenshots/`.
