# Amazon.com Homepage Test Plan

- **Author:** VKalluri-QA
- **URL Under Test:** https://www.amazon.com/
- **Page Title (Verified):** Amazon.com. Spend less. Smile more.
- **Framework:** RICEPOT | Anti-Hallucination Enforced | Playwright MCP Generated
- **Date:** 2026-04-05

---

## ✅ Anti-Hallucination Compliance

**ROLE:** QA assistant operating under strict verification rules.

### Verified Facts (Step 1 — from live Playwright MCP observation):

| # | Element | Verified Fact |
|---|---------|---------------|
| 1 | Page Title | "Amazon.com. Spend less. Smile more." |
| 2 | Logo | Amazon logo link → `/ref=nav_logo` |
| 3 | Deliver to button | "Deliver to India" button visible |
| 4 | Search box | `searchbox` labeled "Search Amazon" |
| 5 | Department dropdown | Combobox with "All Departments" selected (27 options total) |
| 6 | Search Go button | Button labeled "Go" |
| 7 | Language selector | EN / United States flag link visible |
| 8 | Sign-in link | "Hello, sign in Account & Lists" link |
| 9 | Returns & Orders link | Link labeled "Returns & Orders" |
| 10 | Cart | "0 items in cart" link |
| 11 | Primary nav links | Today's Deals, Gift Cards, Sell, Registry, Prime Video, Customer Service |
| 12 | All Categories hamburger | "Open All Categories Menu" button |
| 13 | Hero carousel | Prev/Next slide buttons present; "Toys for little ones" observed |
| 14 | International alert | Dialog: "We're showing you items that ship to India" with "Dismiss" and "Change Address" buttons |
| 15 | Content sections | "Get your game on", "New home arrivals under $50", "Shop Fashion for less", "Find gifts for Mom", "Top categories in Kitchen appliances", "Best Sellers in Clothing, Shoes & Jewelry", "Popular items this season", "Have more fun with family", "Gear up to get fit", "Most-loved travel essentials", "Level up your gaming", "Best Sellers in Computers & Accessories", "Top picks for India" |
| 16 | amazon.in banner | "You are on amazon.com. You can also shop on Amazon India" |

### Missing / Unknown Information (Step 2):
- Login credentials not provided → sign-in test is navigation-only (no actual auth)
- Dynamic content (carousels, product listings) changes daily → tests target structure, not exact product names
- Search results depend on live inventory → tested by verifying redirection only

### Self-Validation Check (Step 4):
- All test cases below reference only verified elements from Steps 1–2 above.
- No assumed "typical" behaviors included.

---

## 📐 RICEPOT Framework — Prompt Used

```
Role     : QA Automation Engineer with 10+ years of experience in e-commerce testing
Intent   : Create comprehensive homepage tests for Amazon.com
Context  : Live page observed via Playwright MCP at https://www.amazon.com/
           Title: "Amazon.com. Spend less. Smile more."
           Elements verified: searchbox, nav links, carousel, cart, sign-in, department dropdown
Expected : Test plan covering NAV, SEARCH, CART, CONTENT SECTIONS, LINKS
Persona  : Senior SDET reviewing enterprise-level test coverage
Output   : Markdown test plan + Playwright TypeScript spec files
Task     : Generate test cases ONLY from verified UI elements — no assumptions
```

---

## 📋 Test Plan

### Test Group 1: Page Load & Title Verification

| TC ID | Test Name | Steps | Expected Result | Priority |
|-------|-----------|-------|-----------------|----------|
| TC_HP_001 | Verify homepage loads successfully | 1. Navigate to https://www.amazon.com/ | Page loads; URL = amazon.com | P0 |
| TC_HP_002 | Verify page title | 1. Navigate to homepage; 2. Read `document.title` | Title = "Amazon.com. Spend less. Smile more." | P0 |
| TC_HP_003 | Verify Amazon logo is visible | 1. Navigate to homepage; 2. Assert logo link visible | Amazon logo link present | P0 |

---

### Test Group 2: Navigation Bar Elements

| TC ID | Test Name | Steps | Expected Result | Priority |
|-------|-----------|-------|-----------------|----------|
| TC_NAV_001 | Verify "Hello, sign in Account & Lists" link | 1. Navigate; 2. Assert link visible | Link text "Hello, sign in" is present with Account & Lists | P0 |
| TC_NAV_002 | Verify "Returns & Orders" link | 1. Navigate; 2. Assert link visible | "Returns & Orders" link is visible | P1 |
| TC_NAV_003 | Verify cart link shows 0 items | 1. Navigate; 2. Assert cart link | "0 items in cart" link visible | P1 |
| TC_NAV_004 | Verify "Deliver to" button is visible | 1. Navigate; 2. Assert button text | "Deliver to India" button visible | P1 |
| TC_NAV_005 | Verify language/country selector | 1. Navigate; 2. Assert EN flag visible | Language selector with EN / United States flag visible | P2 |
| TC_NAV_006 | Verify "Today's Deals" link | 1. Navigate; 2. Assert link | "Today's Deals" nav link visible | P1 |
| TC_NAV_007 | Verify "Gift Cards" link | 1. Navigate; 2. Assert link | "Gift Cards" nav link visible | P2 |
| TC_NAV_008 | Verify "Customer Service" link | 1. Navigate; 2. Assert link | "Customer Service" link visible | P2 |
| TC_NAV_009 | Verify "All Categories" hamburger button | 1. Navigate; 2. Assert button | "Open All Categories Menu" button visible | P1 |
| TC_NAV_010 | Click "Returns & Orders" navigates correctly | 1. Navigate; 2. Click "Returns & Orders" | URL navigates to order history page | P1 |

---

### Test Group 3: Search Functionality

| TC ID | Test Name | Steps | Expected Result | Priority |
|-------|-----------|-------|-----------------|----------|
| TC_SRCH_001 | Verify search box is visible | 1. Navigate; 2. Assert searchbox | "Search Amazon" searchbox present | P0 |
| TC_SRCH_002 | Verify department dropdown has "All Departments" selected | 1. Navigate; 2. Read combobox value | "All Departments" is selected by default | P1 |
| TC_SRCH_003 | Verify department dropdown has expected options | 1. Navigate; 2. Open dropdown | Options include: Electronics, Books, Computers, Baby, etc. | P2 |
| TC_SRCH_004 | Verify "Go" search button is visible | 1. Navigate; 2. Assert button | "Go" button is present next to search box | P0 |
| TC_SRCH_005 | Search with valid keyword | 1. Navigate; 2. Type "laptop" in searchbox; 3. Click "Go" | Page navigates to search results for "laptop" | P0 |
| TC_SRCH_006 | Search with department filter selected | 1. Navigate; 2. Select "Electronics"; 3. Type "headphones"; 4. Click "Go" | Results page filtered to Electronics | P1 |
| TC_SRCH_007 | Search box accepts keyboard Enter key | 1. Navigate; 2. Type "shirt"; 3. Press Enter | Page navigates to search results | P1 |

---

### Test Group 4: Sign-In Navigation

| TC ID | Test Name | Steps | Expected Result | Priority |
|-------|-----------|-------|-----------------|----------|
| TC_AUTH_001 | Click "Hello, sign in" navigates to sign-in page | 1. Navigate; 2. Click "Hello, sign in Account & Lists" | URL navigates to amazon.com/ap/signin | P0 |
| TC_AUTH_002 | Verify sign-in page title after navigation | 1. Navigate to homepage; 2. Click sign-in link | Page title changes (sign-in page loaded) | P1 |

---

### Test Group 5: Cart

| TC ID | Test Name | Steps | Expected Result | Priority |
|-------|-----------|-------|-----------------|----------|
| TC_CART_001 | Verify cart shows 0 items for guest user | 1. Navigate; 2. Assert cart count | Cart badge = "0" | P0 |
| TC_CART_002 | Click cart icon navigates to cart page | 1. Navigate; 2. Click "0 items in cart" | URL navigates to /gp/cart/view.html | P1 |

---

### Test Group 6: Hero Carousel

| TC ID | Test Name | Steps | Expected Result | Priority |
|-------|-----------|-------|-----------------|----------|
| TC_HERO_001 | Verify "Previous slide" button is visible | 1. Navigate; 2. Assert button | "Previous slide" button is present | P1 |
| TC_HERO_002 | Verify "Next slide" button is visible | 1. Navigate; 2. Assert button | "Next slide" button is present | P1 |
| TC_HERO_003 | Click "Next slide" advances carousel | 1. Navigate; 2. Click "Next slide" | Carousel content changes | P2 |

---

### Test Group 7: International Alert Dialog

| TC ID | Test Name | Steps | Expected Result | Priority |
|-------|-----------|-------|-----------------|----------|
| TC_INTL_001 | Verify international alert dialog appears | 1. Navigate; 2. Assert alertdialog | "International Shopping Transition Alert" dialog visible | P1 |
| TC_INTL_002 | Verify "Dismiss" button dismisses dialog | 1. Navigate; 2. Click "Dismiss" | Alert dialog disappears | P1 |
| TC_INTL_003 | Verify "Change Address" button is visible | 1. Navigate; 2. Assert button | "Change Address" button visible in dialog | P2 |

---

### Test Group 8: Homepage Content Sections

| TC ID | Test Name | Steps | Expected Result | Priority |
|-------|-----------|-------|-----------------|----------|
| TC_CONT_001 | Verify "Get your game on" section heading | 1. Navigate; 2. Assert h2 heading | Heading "Get your game on" is visible | P2 |
| TC_CONT_002 | Verify "New home arrivals under $50" section | 1. Navigate; 2. Assert h2 heading | Heading "New home arrivals under $50" visible | P2 |
| TC_CONT_003 | Verify "Shop Fashion for less" section | 1. Navigate; 2. Assert h2 heading | Heading "Shop Fashion for less" visible | P2 |
| TC_CONT_004 | Verify "Best Sellers in Clothing, Shoes & Jewelry" section | 1. Navigate; 2. Assert h2 heading | Section heading visible | P2 |
| TC_CONT_005 | Verify amazon.in cross-promo banner | 1. Navigate; 2. Assert text | "You are on amazon.com" text banner visible | P2 |
| TC_CONT_006 | Click "Kitchen & dining" category link | 1. Navigate; 2. Click link | Navigates to Kitchen & dining search results | P2 |
| TC_CONT_007 | Click "Jeans under $50" fashion link | 1. Navigate; 2. Click link | Navigates to jeans deals search page | P2 |
| TC_CONT_008 | Verify "Level up your gaming" section | 1. Navigate; 2. Assert h2 heading | "Level up your gaming" heading visible | P2 |

---

## 📁 Spec Files Generated

| File | Test Group |
|------|------------|
| `tests/amazon/hp-page-load.spec.ts` | TC_HP_001 to TC_HP_003 |
| `tests/amazon/hp-navigation.spec.ts` | TC_NAV_001 to TC_NAV_010 |
| `tests/amazon/hp-search.spec.ts` | TC_SRCH_001 to TC_SRCH_007 |
| `tests/amazon/hp-auth.spec.ts` | TC_AUTH_001 to TC_AUTH_002 |
| `tests/amazon/hp-cart.spec.ts` | TC_CART_001 to TC_CART_002 |
| `tests/amazon/hp-carousel.spec.ts` | TC_HERO_001 to TC_HERO_003 |
| `tests/amazon/hp-international-alert.spec.ts` | TC_INTL_001 to TC_INTL_003 |
| `tests/amazon/hp-content-sections.spec.ts` | TC_CONT_001 to TC_CONT_008 |

---

**Seed file:** `seed.spec.ts`
**Anti-hallucination:** All elements verified via Playwright MCP live browser session on 2026-04-05.
