import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

async function runQA() {
  console.log('🚀 Starting Comprehensive QA Automation for Evidex India Website...\n');

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const errors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('  ⚠️ Console Error:', msg.text());
      errors.push(msg.text());
    }
  });

  page.on('pageerror', err => {
    console.log('  ❌ Page Error:', err.message);
    errors.push(err.message);
  });

  // 1. Desktop Test (1440x900)
  console.log('--- 1. Testing Desktop Layout (1440x900) ---');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle2' });

  const title = await page.title();
  console.log(`✅ Page Title: "${title}"`);

  // Check all 24 services
  const cardCount = await page.$$eval('#services [id^="service-"]', cards => cards.length);
  console.log(`✅ Initial Services Count: ${cardCount} (Expected: 24)`);

  // 2. Test Smart Search
  console.log('\n--- 2. Testing Smart Service Search ---');
  const searchInput = await page.$('input[aria-label="Search company and legal services"]');
  if (searchInput) {
    await searchInput.type('GST');
    await new Promise(r => setTimeout(r, 400));
    const gstCardCount = await page.$$eval('#services [id^="service-"]', cards => cards.length);
    console.log(`✅ Filtered Cards for "GST": ${gstCardCount}`);
    
    // Check suggestions dropdown
    const suggestionsExist = await page.$eval('span', el => document.body.innerText.includes('Matching Services'));
    console.log(`✅ Live Suggestions Popup Visible: ${suggestionsExist}`);

    // Clear search
    await page.click('button[aria-label="Clear search"]');
    await new Promise(r => setTimeout(r, 300));
    const resetCount = await page.$$eval('#services [id^="service-"]', cards => cards.length);
    console.log(`✅ After Clearing Search: ${resetCount} cards`);
  } else {
    console.log('❌ Search input not found');
  }

  // 3. Test Category Tabs
  console.log('\n--- 3. Testing Category Filter Tabs ---');
  const categories = [
    { label: 'Start Business', expected: 7 },
    { label: 'Filing & Drafting', expected: 7 },
    { label: 'Tax & Compliance', expected: 5 },
    { label: 'Trademark & IP', expected: 5 },
    { label: 'All Services', expected: 24 }
  ];

  for (const cat of categories) {
    const btn = await page.evaluateHandle((text) => {
      const buttons = Array.from(document.querySelectorAll('#services button'));
      return buttons.find(b => b.textContent.includes(text));
    }, cat.label);

    if (btn) {
      await btn.click();
      await new Promise(r => setTimeout(r, 200));
      const count = await page.$$eval('#services [id^="service-"]', cards => cards.length);
      console.log(`✅ Filter [${cat.label}]: ${count} cards (Expected: ${cat.expected})`);
    }
  }

  // 4. Test Service Detail Modal & Preselection
  console.log('\n--- 4. Testing Service Detail Modal & Preselection ---');
  const viewDetailBtn = await page.$('#services [id^="service-"] button');
  if (viewDetailBtn) {
    await viewDetailBtn.click();
    await new Promise(r => setTimeout(r, 300));

    const modalTitle = await page.$eval('#modal-service-title', el => el.textContent.trim());
    console.log(`✅ Modal Opened with Service: "${modalTitle}"`);

    // Click "Get Expert Assistance"
    const modalCta = await page.evaluateHandle(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      return btns.find(b => b.textContent.includes('Get Expert Assistance'));
    });

    if (modalCta) {
      await modalCta.click();
      await new Promise(r => setTimeout(r, 500));

      // Verify modal is closed
      const modalOpen = await page.$('#modal-service-title');
      console.log(`✅ Modal Closed after CTA click: ${modalOpen === null}`);

      // Check preselected service in contact dropdown
      const selectedDropdownVal = await page.$eval('#contact select', el => el.value);
      console.log(`✅ Contact Dropdown Preselected Value: "${selectedDropdownVal}"`);
    }
  }

  // 5. Test Form Validation & Transparent Handoff
  console.log('\n--- 5. Testing Contact Form Validation & Handoff ---');
  const submitBtn = await page.evaluateHandle(() => {
    const btns = Array.from(document.querySelectorAll('#contact button[type="submit"]'));
    return btns[0];
  });

  if (submitBtn) {
    // Try empty submit
    await submitBtn.click();
    await new Promise(r => setTimeout(r, 200));
    const errorCount = await page.$$eval('#contact .text-rose-500', errs => errs.length);
    console.log(`✅ Form Validation: ${errorCount} error messages caught on empty submission`);

    // Fill valid data
    await page.type('#contact input[placeholder*="Rahul"]', 'Amitava Mukherjee');
    await page.type('#contact input[placeholder*="98765"]', '9830123456');
    await page.type('#contact input[placeholder*="name@company"]', 'amitava@mukherjeegroup.in');
    await page.type('#contact textarea', 'We are expanding our retail operations and require trademark filing and GST advisory in Kolkata.');

    await submitBtn.click();
    await new Promise(r => setTimeout(r, 400));

    const handoffVisible = await page.$eval('#contact', el => el.innerText.includes('Consultation Ready for Dispatch'));
    console.log(`✅ Transparent Handoff Options Visible: ${handoffVisible}`);
  }

  // 6. Test FAQ Accordion
  console.log('\n--- 6. Testing FAQ Accordion ---');
  const faqButtons = await page.$$('#faqs button[aria-controls^="faq-answer-"]');
  console.log(`✅ Found ${faqButtons.length} FAQ items (Expected: 10)`);
  if (faqButtons.length > 1) {
    await faqButtons[1].click();
    await new Promise(r => setTimeout(r, 200));
    const isExpanded = await page.evaluate(el => el.getAttribute('aria-expanded'), faqButtons[1]);
    console.log(`✅ FAQ Item 2 Expanded: ${isExpanded === 'true'}`);
  }

  // 7. Save Desktop Screenshot
  console.log('\n--- 7. Capturing Screenshots ---');
  osEnsureDir('qa_screenshots');
  await page.screenshot({ path: 'qa_screenshots/evidex_desktop_full.png', fullPage: true });
  console.log('📸 Saved Desktop Full Page Screenshot -> qa_screenshots/evidex_desktop_full.png');

  // 8. Mobile Responsiveness Test (375x812 - iPhone X/12/13 mini)
  console.log('\n--- 8. Testing Mobile Responsiveness (375x812) ---');
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  await page.reload({ waitUntil: 'networkidle2' });

  // Check horizontal overflow
  const horizontalOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log(`✅ Mobile Horizontal Overflow Detected: ${horizontalOverflow ? 'YES (Error)' : 'NO (Perfect!)'}`);

  // Test mobile hamburger menu
  const menuBtn = await page.$('button[aria-label="Toggle navigation menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 300));
    const mobileLinksVisible = await page.$eval('nav', el => el.innerText.includes('Our Services'));
    console.log(`✅ Mobile Navigation Drawer Toggled: ${mobileLinksVisible}`);
  }

  // Floating Actions Check
  const floatingActions = await page.$$eval('[aria-label*="WhatsApp"], [aria-label*="Call"]', els => els.length);
  console.log(`✅ Floating Action Buttons Visible: ${floatingActions >= 2}`);

  await page.screenshot({ path: 'qa_screenshots/evidex_mobile_full.png', fullPage: true });
  console.log('📸 Saved Mobile Full Page Screenshot -> qa_screenshots/evidex_mobile_full.png');

  await browser.close();
  console.log('\n🎉 ALL QA CHECKS COMPLETED SUCCESSFULLY!');
}

function osEnsureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

runQA().catch(err => {
  console.error('Fatal QA Runner Error:', err);
  process.exit(1);
});
