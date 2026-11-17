export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'start-business', label: 'Start Business', heading: 'Start & Register Your Business' },
  { id: 'filing-drafting', label: 'Filing & Drafting', heading: 'Business Licensing, Filing & Documentation' },
  { id: 'tax-compliance', label: 'Tax & Compliance', heading: 'Taxation & Corporate Compliance' },
  { id: 'trademark-ip', label: 'Trademark & IP', heading: 'Protect Your Business Identity' },
];

export const POPULAR_SERVICE_CHIPS = [
  { id: 'pvt-ltd', label: 'Private Limited Company' },
  { id: 'gst-return', label: 'GST Return Filing' },
  { id: 'tm-reg', label: 'Trademark Registration' },
  { id: 'itr-filing', label: 'Income Tax Return' },
  { id: 'fssai-reg', label: 'FSSAI Registration' },
  { id: 'llp-reg', label: 'LLP Registration' },
];

export const SERVICES_DATA = [
  // CATEGORY A: START BUSINESS
  {
    id: 'pvt-ltd',
    slug: 'private-limited-company',
    category: 'start-business',
    categoryLabel: 'Start Business',
    title: 'Private Limited Company Registration',
    shortDescription: 'Get professional assistance with company incorporation, documentation and statutory registration requirements.',
    iconName: 'Building2',
    price: '₹9,999*',
    timeline: '7 - 10 Business Days',
    badge: 'Most Popular',
    overview: 'Incorporate your Private Limited Company under the Ministry of Corporate Affairs (MCA). A Pvt Ltd structure offers limited liability protection, enhanced corporate credibility, and ease of raising equity funding from investors.',
    includes: [
      'Digital Signature Certificates (DSC) for 2 Directors',
      'Director Identification Number (DIN) allocation',
      'RUN name reservation & approval assistance',
      'Drafting of customized MOA & AOA',
      'SPICe+ Part A & B incorporation filing',
      'PAN, TAN & Certificate of Incorporation (COI)',
      'EPFO, ESIC, Professional Tax & Bank Account opening assistance'
    ],
    documents: [
      'PAN Card of all Directors and Shareholders',
      'Identity Proof (Aadhaar Card, Passport, or Voter ID)',
      'Address Proof (Bank statement or utility bill not older than 2 months)',
      'Passport size photographs of Directors',
      'Registered office proof (Electricity bill/Property tax receipt + Landlord NOC)'
    ],
    process: [
      { step: '1', title: 'Consultation & DSC', desc: 'Verify business objectives, check name availability, and generate DSC.' },
      { step: '2', title: 'Name Approval', desc: 'Submit RUN application with the MCA for company name reservation.' },
      { step: '3', title: 'SPICe+ Filing', desc: 'File SPICe+ forms along with drafted MOA, AOA, and KYC affidavits.' },
      { step: '4', title: 'Incorporation Certificate', desc: 'Receive Certificate of Incorporation, PAN, TAN, and corporate kit.' }
    ],
    bestFor: 'Startups, technology ventures, e-commerce brands, and businesses planning to raise external capital with limited liability.'
  },
  {
    id: 'llp-reg',
    slug: 'llp-registration',
    category: 'start-business',
    categoryLabel: 'Start Business',
    title: 'LLP Registration',
    shortDescription: 'Assistance with Limited Liability Partnership registration and related incorporation documentation.',
    iconName: 'Users',
    price: '₹8,999*',
    timeline: '8 - 12 Business Days',
    badge: 'Popular',
    overview: 'A Limited Liability Partnership (LLP) provides the organizational flexibility of a partnership firm combined with the security of limited liability. Ideal for professional consultants and service providers.',
    includes: [
      'Digital Signature Certificates (DSC) for designated partners',
      'Designated Partner Identification Number (DPIN)',
      'RUN-LLP name reservation submission',
      'FiLLiP incorporation form preparation and filing',
      'Drafting of legally compliant LLP Agreement',
      'Form 3 filing with the Registrar of Companies (ROC)'
    ],
    documents: [
      'PAN Card of all designated partners',
      'Aadhaar Card / Passport / Voter ID',
      'Recent bank statement or utility bill of partners',
      'Registered office utility bill and NOC from property owner',
      'Photographs of designated partners'
    ],
    process: [
      { step: '1', title: 'Partner KYC & DSC', desc: 'Obtain DSCs and compile KYC documentation for all partners.' },
      { step: '2', title: 'LLP Name Reservation', desc: 'Submit name reservation application via RUN-LLP on MCA portal.' },
      { step: '3', title: 'FiLLiP Filing', desc: 'Submit incorporation petition and receive Certificate of Incorporation.' },
      { step: '4', title: 'LLP Agreement Execution', desc: 'Draft, execute on stamp paper, and file Form 3 within statutory 30 days.' }
    ],
    bestFor: 'Professional consulting firms, legal and accounting practices, tech service agencies, and small joint ventures.'
  },
  {
    id: 'opc-reg',
    slug: 'one-person-company',
    category: 'start-business',
    categoryLabel: 'Start Business',
    title: 'One Person Company (OPC)',
    shortDescription: 'Business incorporation support for eligible individual entrepreneurs seeking an OPC structure.',
    iconName: 'UserCheck',
    price: '₹6,999*',
    timeline: '7 - 10 Business Days',
    badge: 'Solo Founder',
    overview: 'Enjoy all the advantages of a private limited company with 100% solo control. An OPC requires only one director and member, providing complete limited liability without having to share equity.',
    includes: [
      'DSC & DIN for the sole director/member',
      'Nominee consent documentation (Form INC-3)',
      'Name reservation on MCA portal',
      'Drafting of MOA & AOA customized for solo member',
      'SPICe+ incorporation filing and ROC follow-up',
      'PAN, TAN and Certificate of Incorporation'
    ],
    documents: [
      'PAN Card of sole promoter and nominee',
      'Aadhaar Card / Passport of promoter & nominee',
      'Bank statement or utility bill (last 2 months)',
      'Registered office electricity bill and Landlord NOC',
      'Signed nominee consent letter'
    ],
    process: [
      { step: '1', title: 'Documentation & Nominee', desc: 'Collect KYC and nominee consent for legal compliance.' },
      { step: '2', title: 'Name Approval', desc: 'Reserve unique company name ending with (OPC) Private Limited.' },
      { step: '3', title: 'SPICe+ Incorporation', desc: 'Prepare statutory charter and file with Registrar of Companies.' },
      { step: '4', title: 'Certificate Issuance', desc: 'Receive COI, PAN, TAN and proceed with business bank account.' }
    ],
    bestFor: 'Individual entrepreneurs, solo founders, freelance consultants, and boutique business creators.'
  },
  {
    id: 'section-8',
    slug: 'section-8-company',
    category: 'start-business',
    categoryLabel: 'Start Business',
    title: 'Section 8 Company Registration',
    shortDescription: 'Non-profit corporate structure under the Companies Act for social welfare, charity, education, and research.',
    iconName: 'HeartHandshake',
    price: '₹14,999*',
    timeline: '12 - 15 Business Days',
    badge: 'Non-Profit',
    overview: 'Section 8 companies are registered for promoting charitable, educational, environmental, or social welfare causes. Profits are strictly applied to promote these objectives, granting elevated public trust.',
    includes: [
      'DSC & DIN for all promoter directors',
      'Name reservation with words like Foundation, Association, or Forum',
      'Preparation of 3-year projected income and expenditure statements',
      'Central Government License application (Form INC-12)',
      'SPICe+ non-profit incorporation filing',
      'Guidance for subsequent Section 12A and 80G tax exemptions'
    ],
    documents: [
      'PAN and Aadhaar cards of all directors',
      'Address proof of directors (Bank statement / utility bill)',
      'Registered office premise proof and Landlord NOC',
      'Project report and future 3-year financial estimates'
    ],
    process: [
      { step: '1', title: 'Name & License Prep', desc: 'Apply for name approval and draft social objective clauses.' },
      { step: '2', title: 'Section 8 License', desc: 'File Form INC-12 to obtain central government license for non-profit.' },
      { step: '3', title: 'SPICe+ Incorporation', desc: 'File incorporation documents with Registrar of Companies.' },
      { step: '4', title: 'COI & 12A/80G Roadmapping', desc: 'Receive Incorporation Certificate and plan tax-exempt filings.' }
    ],
    bestFor: 'NGOs, educational trusts, research foundations, sports federations, and corporate CSR implementing bodies.'
  },
  {
    id: 'iec-code',
    slug: 'import-export-code',
    category: 'start-business',
    categoryLabel: 'Start Business',
    title: 'Import Export Code (IEC)',
    shortDescription: 'Mandatory 10-digit DGFT license for cross-border trade, customs clearance, and overseas commerce.',
    iconName: 'Globe',
    price: '₹3,999*',
    timeline: '2 - 3 Business Days',
    badge: 'Cross-Border',
    overview: 'Issued by the Directorate General of Foreign Trade (DGFT), the Import Export Code is required for any business importing goods or exporting services and products outside India.',
    includes: [
      'DGFT portal registration and digital key mapping',
      'Online application filing (ANF-2A)',
      'Bank account verification liaison',
      'Issuance of electronic IEC (e-IEC) certificate',
      'Guidance on annual DGFT IEC profile update compliance'
    ],
    documents: [
      'Entity PAN Card (Proprietorship, Firm, or Company)',
      'Bank certificate or pre-printed cancelled cheque showing business name',
      'Proof of business premise (Electricity bill/Rent deed)',
      'Authorized signatory Aadhaar Card and mobile linked with Aadhaar'
    ],
    process: [
      { step: '1', title: 'Portal Setup', desc: 'Register entity on DGFT platform and map digital credentials.' },
      { step: '2', title: 'Document Verification', desc: 'Validate business PAN, bank details, and premise proof.' },
      { step: '3', title: 'Online Submission', desc: 'File application and pay statutory government fees.' },
      { step: '4', title: 'e-IEC Issuance', desc: 'Obtain official e-IEC certificate for immediate customs use.' }
    ],
    bestFor: 'Exporters, importers, e-commerce global sellers, software exporters receiving inward remittances.'
  },
  {
    id: 'iso-cert',
    slug: 'iso-certifications',
    category: 'start-business',
    categoryLabel: 'Start Business',
    title: 'ISO Certifications',
    shortDescription: 'Quality, safety, and operational standards certification (ISO 9001, 14001, 27001) for market credibility.',
    iconName: 'Award',
    price: '₹9,999*',
    timeline: '5 - 7 Business Days',
    badge: 'Enterprise',
    overview: 'Attain internationally recognized ISO credentials to build brand trust, meet corporate supplier standards, and qualify for high-value government and enterprise tenders.',
    includes: [
      'Assessment of relevant ISO standard (ISO 9001:2015, ISO 27001, ISO 14001, etc.)',
      'Pre-audit documentation and manual preparation support',
      'Coordination with accredited certification bodies',
      'Audit liaison and corrective action plan guidance',
      'Official accredited ISO certificate issuance'
    ],
    documents: [
      'Business Registration Certificate (COI, GST, or MSME)',
      'Scope of business activities and organizational chart',
      'Two business purchase/sales invoices',
      'Letterhead and authorized person KYC'
    ],
    process: [
      { step: '1', title: 'Scope Selection', desc: 'Determine applicable ISO standard and operational scope.' },
      { step: '2', title: 'Documentation', desc: 'Draft quality policy, procedures, and statutory manuals.' },
      { step: '3', title: 'Certification Audit', desc: 'Coordinate assessment with authorized accredited registrar.' },
      { step: '4', title: 'Certificate Delivery', desc: 'Receive authentic ISO certificate with verification credentials.' }
    ],
    bestFor: 'B2B enterprises, manufacturing units, IT service companies, and tender bidders.'
  },

  // CATEGORY B: FILING & DRAFTING
  {
    id: 'fssai-reg',
    slug: 'fssai-registration',
    category: 'filing-drafting',
    categoryLabel: 'Filing & Drafting',
    title: 'FSSAI Food Business Registration',
    shortDescription: 'Mandatory 14-digit FSSAI registration certificate for petty food manufacturers, retailers, and cloud kitchens.',
    iconName: 'Utensils',
    price: '₹3,999*',
    timeline: '5 - 7 Business Days',
    badge: 'Food License',
    overview: 'Every food business operator (FBO) handling food products must register with the Food Safety and Standards Authority of India (FSSAI). We ensure smooth filing and quick certification.',
    includes: [
      'FoSCoS portal user creation and food category mapping',
      'Form A registration preparation and online submission',
      'Drafting of required food safety declarations',
      'Response to departmental queries / clarifications',
      'Digital 14-digit FSSAI Registration Certificate download'
    ],
    documents: [
      'Applicant Passport size photo',
      'Identity Proof (Aadhaar Card, Voter ID, or PAN)',
      'Proof of business premise (Electricity bill/Rent deed/NOC)',
      'Food business declaration format (provided by our team)'
    ],
    process: [
      { step: '1', title: 'Category Classification', desc: 'Identify food categories and annual turnover threshold.' },
      { step: '2', title: 'FoSCoS Filing', desc: 'Prepare Form A and upload premises documentation.' },
      { step: '3', title: 'Department Scrutiny', desc: 'Track application progress and address inspector queries.' },
      { step: '4', title: 'Certificate Grant', desc: 'Receive 14-digit FSSAI registration number and certificate.' }
    ],
    bestFor: 'Cloud kitchens, bakeries, cafes, retail grocery stores, food trucks, and home-based food businesses.'
  },
  {
    id: 'fssai-renew',
    slug: 'fssai-renewal',
    category: 'filing-drafting',
    categoryLabel: 'Filing & Drafting',
    title: 'FSSAI License Renewal',
    shortDescription: 'Timely renewal of FSSAI basic registration or state/central license to prevent business stoppage and penalties.',
    iconName: 'RefreshCw',
    price: '₹2,999*',
    timeline: '7 - 10 Business Days',
    badge: 'Compliance',
    overview: 'FSSAI regulations mandate renewal between 120 and 30 days prior to license expiry. Avoid daily penalty charges (up to ₹100/day) and operational disruptions with our proactive renewal service.',
    includes: [
      'Audit of existing FSSAI license credentials and expiry dates',
      'Preparation of Form A or Form B renewal dossier',
      'Updated premise, turnover, and product category filings',
      'Liaison with food safety officer for prompt renewal grant'
    ],
    documents: [
      'Copy of existing FSSAI certificate',
      'Updated premise address proof (if changed)',
      'Latest turnover declaration / audited financial summary',
      'Authorized signatory photo and ID proof'
    ],
    process: [
      { step: '1', title: 'License Audit', desc: 'Verify validity period and calculate renewal fee requirements.' },
      { step: '2', title: 'Renewal Petition', desc: 'Submit application via FoSCoS portal before statutory deadline.' },
      { step: '3', title: 'Inspection/Review', desc: 'Track departmental review and clear any inspection remarks.' },
      { step: '4', title: 'Extended Validity', desc: 'Download updated FSSAI certificate with extended validity (1-5 yrs).' }
    ],
    bestFor: 'Active restaurants, food processors, cloud kitchens, and retailers nearing food license expiration.'
  },
  {
    id: 'fssai-return',
    slug: 'fssai-annual-return-filing',
    category: 'filing-drafting',
    categoryLabel: 'Filing & Drafting',
    title: 'FSSAI Annual Return Filing',
    shortDescription: 'Mandatory annual food business reporting (Form D-1/D-2) for manufacturers, processors, and importers.',
    iconName: 'FileCheck2',
    price: '₹1,999*',
    timeline: '3 - 5 Business Days',
    badge: 'Statutory',
    overview: 'Food business operators holding manufacturing or importing licenses must file their annual returns before 31st May each year on FoSCoS. Failure results in daily recurring penalties.',
    includes: [
      'Compilation of production volume, sales quantities, and values',
      'Reconciliation of food categories with approved license scope',
      'Online submission of Form D-1 (Annual) or Form D-2 (Half-yearly)',
      'Official filing acknowledgment generation and compliance record'
    ],
    documents: [
      'Active FSSAI license copy',
      'Financial year production and sales register',
      'List of food product categories manufactured/imported',
      'Purchase and dispatch records summary'
    ],
    process: [
      { step: '1', title: 'Data Compilation', desc: 'Collate annual quantity produced, handled, imported, and sold.' },
      { step: '2', title: 'FoSCoS Entry', desc: 'Enter product-wise values into the official FSSAI portal.' },
      { step: '3', title: 'Verification & Submission', desc: 'Review for compliance and submit statutory return.' },
      { step: '4', title: 'Filing Acknowledgment', desc: 'Receive official confirmation receipt for corporate records.' }
    ],
    bestFor: 'Food manufacturers, re-packers, dairy processors, beverage producers, and food importers.'
  },
  {
    id: 'trade-lic',
    slug: 'trade-license',
    category: 'filing-drafting',
    categoryLabel: 'Filing & Drafting',
    title: 'Municipal Trade License',
    shortDescription: 'Local municipal corporation authorization to legally conduct business operations from commercial premises.',
    iconName: 'Store',
    price: '₹2,999*',
    timeline: '7 - 10 Business Days',
    badge: 'Municipal',
    overview: 'A Trade License is statutory permission issued by the local municipal body (Kolkata Municipal Corporation / municipal boards across West Bengal & India) certifying that premises are compliant for business.',
    includes: [
      'Municipal ward and nature-of-trade classification',
      'Documentation scrutiny for commercial authorization',
      'Online/offline application submission to municipal authorities',
      'Follow-up with licensing inspectors until demand notice issuance',
      'Trade license certificate collection and handover'
    ],
    documents: [
      'Latest municipal property tax payment receipt / Khata',
      'Commercial rent agreement and landlord NOC',
      'Business incorporation proof (COI, Firm Deed, or GST)',
      'Trade premises layout plan and electricity bill'
    ],
    process: [
      { step: '1', title: 'Ward Verification', desc: 'Confirm municipal jurisdiction and trade category classification.' },
      { step: '2', title: 'Dossier Submission', desc: 'Submit application along with property and tenancy proofs.' },
      { step: '3', title: 'Fee Assessment', desc: 'Assist in assessment and clearance of municipal statutory fees.' },
      { step: '4', title: 'License Issuance', desc: 'Receive valid Trade License for display at commercial premise.' }
    ],
    bestFor: 'Retail storefronts, corporate offices, warehouses, clinics, training institutes, and restaurants.'
  },
  {
    id: 'startup-india',
    slug: 'startup-india-registration',
    category: 'filing-drafting',
    categoryLabel: 'Filing & Drafting',
    title: 'Startup India Registration (DPIIT)',
    shortDescription: 'Official recognition under DPIIT unlocking income tax exemptions, fast-track IP, and government tender benefits.',
    iconName: 'Rocket',
    price: '₹4,999*',
    timeline: '5 - 8 Business Days',
    badge: 'Government Perks',
    overview: 'Get recognized as a Startup by the Department for Promotion of Industry and Internal Trade (DPIIT). Unlocks significant tax holidays under Section 80-IAC, up to 80% rebate on patent filings, and relaxation in public procurement norms.',
    includes: [
      'Eligibility assessment under Startup India criteria',
      'Drafting of innovation and scalability narrative',
      'DPIIT portal submission with business presentation deck',
      'Guidance on Angel Tax exemptions (Section 56) and 80-IAC applications',
      'DPIIT Recognition Certificate issuance'
    ],
    documents: [
      'Certificate of Incorporation / LLP Registration (less than 10 years old)',
      'Pitch deck or brief write-up highlighting innovation & job creation potential',
      'Website URL, app link, or working MVP demo description',
      'Director / Partner details and contact credentials'
    ],
    process: [
      { step: '1', title: 'Innovation Review', desc: 'Structure the pitch deck around innovation, scalability, and impact.' },
      { step: '2', title: 'DPIIT Portal Application', desc: 'Submit official application under the Startup India scheme.' },
      { step: '3', title: 'Scrutiny Liaison', desc: 'Address any departmental queries regarding novelty or product uniqueness.' },
      { step: '4', title: 'Certificate Grant', desc: 'Receive official DPIIT Recognition Certificate with unique DIPP number.' }
    ],
    bestFor: 'Tech startups, innovative product ventures, SaaS companies, and early-stage entrepreneurs.'
  },
  {
    id: 'msme-udyam',
    slug: 'msme-udyam-registration',
    category: 'start-business',
    secondaryCategory: 'filing-drafting',
    categoryLabel: 'Start Business',
    title: 'MSME / Udyam Registration',
    shortDescription: 'Official Government of India enterprise recognition for collateral-free credit, subsidies, and payment protection.',
    iconName: 'BadgeCheck',
    price: '₹2*',
    timeline: '1 - 2 Business Days',
    badge: 'Special Offer',
    overview: 'Udyam Registration is the official recognition for Micro, Small, and Medium Enterprises. It confers access to priority sector lending, lower bank interest rates, protection against delayed payments, and concessions on trademarks.',
    includes: [
      'Accurate National Industrial Classification (NIC) code mapping',
      'Udyam portal registration and validation with PAN/GST data',
      'Classification under Micro, Small, or Medium based on investment & turnover',
      'Direct issuance of official Udyam Registration Certificate'
    ],
    documents: [
      'Aadhaar card of proprietor / partner / director',
      'PAN card of applicant entity or individual',
      'Business address proof',
      'Bank account number and IFSC code'
    ],
    process: [
      { step: '1', title: 'Data Collation', desc: 'Gather Aadhaar, PAN, and enterprise investment metrics.' },
      { step: '2', title: 'NIC Mapping', desc: 'Map precise business activity codes for full scheme eligibility.' },
      { step: '3', title: 'Portal Filing', desc: 'Submit authenticated application on official Udyam portal.' },
      { step: '4', title: 'Instant Certificate', desc: 'Receive official Udyam certificate with dynamic QR verification.' }
    ],
    bestFor: 'Proprietorships, MSMEs, manufacturing workshops, service agencies, and trading companies.'
  },

  // CATEGORY C: TAX & COMPLIANCE
  {
    id: 'gst-return',
    slug: 'gst-return-filing',
    category: 'tax-compliance',
    categoryLabel: 'Tax & Compliance',
    title: 'GST Return Filing',
    shortDescription: 'Accurate monthly and quarterly GST compliance, sales reconciliation, and maximum Input Tax Credit (ITC) claiming.',
    iconName: 'Calculator',
    price: '₹999*',
    timeline: 'Monthly / Quarterly Cycles',
    badge: 'Recurring',
    overview: 'Ensure strict compliance with periodic GST filings. We handle invoice upload, 2B vs purchase reconciliation to maximize eligible ITC, liability computation, and timely filing to prevent interest penalties.',
    includes: [
      'Monthly/Quarterly GSTR-1 outward supply invoice filing',
      'GSTR-3B tax summary computation and ITC offset',
      'Comprehensive purchase register vs GSTR-2B reconciliation',
      'Challan generation and tax payment guidance (PMT-06)',
      'Annual GSTR-9 and GSTR-9C audit filing support'
    ],
    documents: [
      'Monthly Sales Register with client GSTINs and HSN codes',
      'Monthly Purchase Register with vendor invoices',
      'Bank statements reflecting business transactions',
      'Previous period filed returns and ledger balances'
    ],
    process: [
      { step: '1', title: 'Invoice Collection', desc: 'Collate monthly sales and purchase records in standard format.' },
      { step: '2', title: '2B Reconciliation', desc: 'Match vendor filings to claim 100% legitimate Input Tax Credit.' },
      { step: '3', title: 'Draft Review', desc: 'Share computed liability for client approval before deadline.' },
      { step: '4', title: 'Portal Filing', desc: 'Submit return and provide official ARN filing receipt.' }
    ],
    bestFor: 'All active GSTIN holders seeking error-free filing, avoided late fees, and optimal ITC management.'
  },
  {
    id: 'itr-filing',
    slug: 'income-tax-return-filing-online',
    category: 'tax-compliance',
    categoryLabel: 'Tax & Compliance',
    title: 'Income Tax Return',
    shortDescription: 'Expert-assisted ITR preparation and e-filing for individuals, salaried professionals, firms, and companies.',
    iconName: 'Coins',
    price: '₹999*',
    timeline: '2 - 4 Business Days',
    badge: 'Annual Tax',
    overview: 'File your annual Income Tax Return accurately with our senior tax consultants. We reconcile Form 26AS, AIS, and TIS to optimize all available deductions, ensure statutory compliance, and expedite refunds.',
    includes: [
      'Comprehensive AIS, TIS, and Form 26AS reconciliation',
      'Selection of optimal tax regime (Old vs New regime comparison)',
      'Computation of salary, business, capital gains, and house property income',
      'Maximization of eligible Chapter VI-A deductions (80C, 80D, etc.)',
      'Online e-filing and instant e-verification assistance'
    ],
    documents: [
      'PAN and Aadhaar card of taxpayer',
      'Form 16 (for salaried) or business financial statements',
      'Bank statements of all active accounts for the financial year',
      'Capital gains statement from brokers / mutual funds (if applicable)',
      'Housing loan interest certificate / rent receipts'
    ],
    process: [
      { step: '1', title: 'Data Reconciliation', desc: 'Pull tax credits from Form 26AS, AIS, and TIS records.' },
      { step: '2', title: 'Regime Comparison', desc: 'Calculate liability under both Old and New regimes to minimize tax.' },
      { step: '3', title: 'Return Preparation', desc: 'Draft ITR (ITR-1 through ITR-6) for taxpayer review.' },
      { step: '4', title: 'E-filing & Verification', desc: 'Submit to Income Tax Department and complete instant e-verification.' }
    ],
    bestFor: 'Salaried individuals, consultants, business proprietors, corporate directors, and high-net-worth investors.'
  },
  {
    id: 'corp-filing',
    slug: 'corporate-drafting-filing',
    category: 'tax-compliance',
    categoryLabel: 'Tax & Compliance',
    title: 'Drafting and Filing',
    shortDescription: 'Statutory MCA compliance including Annual Returns (AOC-4, MGT-7), Director KYC, and secretarial documentation.',
    iconName: 'Landmark',
    price: '₹2,999*',
    timeline: 'Annual Compliance Calendar',
    badge: 'MCA Mandatory',
    overview: 'Every registered company and LLP must file annual statutory returns with the MCA regardless of business turnover. We maintain your corporate registers and file all statutory forms to prevent director disqualification.',
    includes: [
      'Annual DIR-3 KYC filing for all active DIN holders',
      'Preparation of Financial Statements filing (Form AOC-4 / AOC-4 XBRL)',
      'Annual Return filing with Registrar of Companies (Form MGT-7 / 7A)',
      'Drafting of Board Meeting Notices, Resolutions, and Minutes',
      'Statutory register maintenance under Companies Act, 2013'
    ],
    documents: [
      'Audited Balance Sheet and Profit & Loss Statement with audit notes',
      'Directors’ Report with statutory disclosures',
      'List of shareholders and share transfer records',
      'Active mobile & email of directors for OTP KYC verification'
    ],
    process: [
      { step: '1', title: 'Director KYC', desc: 'Verify and submit DIR-3 KYC before statutory September deadline.' },
      { step: '2', title: 'Financial Audit Collation', desc: 'Review audited figures and format according to MCA taxonomy.' },
      { step: '3', title: 'AOC-4 & MGT-7 Filing', desc: 'Upload forms with digital signatures of director and practicing professional.' },
      { step: '4', title: 'MCA Challan Generation', desc: 'Generate approved MCA SRN and update statutory books.' }
    ],
    bestFor: 'Private Limited companies, One Person Companies, Section 8 companies, and LLPs.'
  },

  // CATEGORY D: TRADEMARK & INTELLECTUAL PROPERTY
  {
    id: 'tm-reg',
    slug: 'trademark-registration',
    category: 'trademark-ip',
    categoryLabel: 'Trademark & IP',
    title: 'Trademark Registration',
    shortDescription: 'Secure exclusive nationwide brand ownership, protect your logo and name, and obtain the right to use ®.',
    iconName: 'ShieldCheck',
    price: '₹1,000*',
    timeline: 'Application Filing within 24 Hours',
    badge: 'Special Offer',
    overview: 'Your brand name, logo, and slogan are invaluable business assets. Registering a trademark gives you exclusive legal rights, prevents copycats, and lets you legally use the ™ symbol immediately after filing.',
    includes: [
      'Comprehensive pre-filing Trademark Search across 45 Nice classes',
      'Strategy consultation on mark distinctiveness and class selection',
      'Drafting and filing of Form TM-A with the Trademark Registry',
      'Official Trademark Application Receipt with ™ allocation',
      'Tracking of application status through examination and publication'
    ],
    documents: [
      'Brand Name / Wordmark or High-Resolution Logo artwork',
      'Applicant identity & address proof (PAN, Aadhaar/Passport)',
      'Business Registration / MSME Certificate (for 50% govt fee concession)',
      'User Affidavit & prior usage documentary evidence (if claiming earlier use)',
      'Signed Power of Attorney (Form TM-48)'
    ],
    process: [
      { step: '1', title: 'Trademark Search', desc: 'Audit registry to confirm mark availability and avoid conflicts.' },
      { step: '2', title: 'Form TM-A Filing', desc: 'Draft specifications and submit directly on IP India portal.' },
      { step: '3', title: 'Immediate ™ Usage', desc: 'Receive official filing number and start using ™ mark immediately.' },
      { step: '4', title: 'Examination & Registration', desc: 'Monitor examination report, advertisement in journal, and final registration.' }
    ],
    bestFor: 'Startups, consumer brands, retail outlets, manufacturers, software companies, and content creators.'
  },
  {
    id: 'tm-objection',
    slug: 'trademark-objection',
    category: 'trademark-ip',
    categoryLabel: 'Trademark & IP',
    title: 'Trademark Objection',
    shortDescription: 'Professional legal replies to Trademark Examination Reports (Section 9 & 11) drafted by IP attorneys.',
    iconName: 'FileQuestion',
    price: '₹1,499*',
    timeline: '5 - 7 Business Days',
    badge: 'Legal Defense',
    overview: 'When the Trademark Examiner issues an examination report raising objections under Section 9 (lack of distinctiveness) or Section 11 (similarity with existing marks), a structured legal response must be filed within 30 days.',
    includes: [
      'Detailed legal analysis of the Examination Report and cited conflicting marks',
      'Compilation of judicial precedents, case laws, and legal grounds',
      'Drafting of comprehensive written response on letterhead',
      'Affidavit of prior use compilation with supporting commercial invoices',
      'Formal e-filing of reply on IP India portal'
    ],
    documents: [
      'Copy of Trademark Examination Report',
      'Existing application details and TM-48 power of attorney',
      'Commercial evidence demonstrating prior continuous usage (sales invoices, ads)',
      'Chartered Accountant certificate of turnover/marketing spends (if applicable)'
    ],
    process: [
      { step: '1', title: 'Report Scrutiny', desc: 'Analyze objection grounds (Sec 9, Sec 11, or procedural queries).' },
      { step: '2', title: 'Legal Drafting', desc: 'Prepare formal response citing High Court and IPAB precedents.' },
      { step: '3', title: 'Evidence Collation', desc: 'Assemble documentary exhibits proving established market goodwill.' },
      { step: '4', title: 'E-filing Reply', desc: 'File reply on IP India portal within statutory 30-day window.' }
    ],
    bestFor: 'Trademark applicants who have received an examination report with objections from the registry.'
  },
  {
    id: 'tm-opposition',
    slug: 'trademark-opposition',
    category: 'trademark-ip',
    categoryLabel: 'Trademark & IP',
    title: 'Trademark Opposition',
    shortDescription: 'Defending against third-party challenges or filing opposition (Notice of Opposition & Counter-Statements).',
    iconName: 'Scale',
    price: '₹7,999*',
    timeline: 'Statutory Opposition Timelines',
    badge: 'Litigation',
    overview: 'When a trademark is published in the Trade Marks Journal, third parties have 4 months to oppose it. We handle drafting notices of opposition (Form TM-O), filing counter-statements, and filing evidence under Rules 45, 46 & 47.',
    includes: [
      'Filing Notice of Opposition (Form TM-O) against infringing published marks',
      'Drafting and filing Counter-Statement (Form TM-O) to defend your mark',
      'Collation and filing of evidence in support of application or opposition',
      'Strategic advisory on amicable settlement or coexistence agreements'
    ],
    documents: [
      'Copy of Trademark Journal publication / notice of opposition',
      'Prior trademark registration certificates or usage records',
      'Evidence affidavits showing established reputation and commercial presence',
      'Power of Attorney on non-judicial stamp paper'
    ],
    process: [
      { step: '1', title: 'Notice / Counter Filing', desc: 'File formal pleadings within statutory non-extendable deadlines.' },
      { step: '2', title: 'Evidence In Support', desc: 'File detailed Rule 45 / 46 evidence affidavits with exhibits.' },
      { step: '3', title: 'Rebuttal Arguments', desc: 'Submit written arguments countering opponent claims.' },
      { step: '4', title: 'Tribunal Hearing', desc: 'Represent matter before the Registrar for final verdict.' }
    ],
    bestFor: 'Brand owners defending their marks against competitors or preventing copycats from registering deceptive marks.'
  },
  {
    id: 'tm-hearing',
    slug: 'trademark-hearing',
    category: 'trademark-ip',
    categoryLabel: 'Trademark & IP',
    title: 'Trademark Hearing',
    shortDescription: 'Expert advocacy and personal appearance before Senior Hearing Officers at the Trademark Registry.',
    iconName: 'Gavel',
    price: '₹9,999*',
    timeline: 'Scheduled Hearing Date',
    badge: 'Court Advocacy',
    overview: 'If an objection reply does not satisfy the examiner, a show-cause hearing is scheduled. Our senior trademark attorneys represent your case before the Hearing Officer (Kolkata & Pan-India benches).',
    includes: [
      'Comprehensive case file review and compilation of judicial citations',
      'Preparation of written submission and case synopsis',
      'Virtual / physical appearance before the Trademark Hearing Officer',
      'Argument presentation addressing all objections',
      'Tracking of post-hearing orders and publication in TM Journal'
    ],
    documents: [
      'Hearing notice issued by the Trademark Registry',
      'Complete case docket (TM-A, Examination Report, Reply, and Exhibits)',
      'Executed Form TM-48 (Power of Attorney)',
      'Any fresh evidence of distinctiveness'
    ],
    process: [
      { step: '1', title: 'Hearing Briefing', desc: 'Prepare case arguments and citations based on hearing officer patterns.' },
      { step: '2', title: 'Appearance & Argument', desc: 'Represent applicant during official video conferencing / physical hearing.' },
      { step: '3', title: 'Written Submissions', desc: 'File post-hearing written synopsis on IP India portal if required.' },
      { step: '4', title: 'Journal Acceptance', desc: 'Obtain acceptance order for publication in the official Trade Marks Journal.' }
    ],
    bestFor: 'Applicants issued hearing notices for pending trademark objections.'
  },
  {
    id: 'copyright',
    slug: 'copyright',
    category: 'trademark-ip',
    categoryLabel: 'Trademark & IP',
    title: 'Copyright',
    shortDescription: 'Statutory copyright protection for software source code, literary works, logos, musical scores, and creative assets.',
    iconName: 'FileBadge',
    price: '₹4,999*',
    timeline: '20 - 30 Business Days',
    badge: 'IP Protection',
    overview: 'Copyright secures exclusive rights over original literary, dramatic, musical, artistic works, and computer software code. Protect your creative property against unauthorized copying, adaptation, or online distribution.',
    includes: [
      'Classification of work under Copyright Act, 1957 (Literary, Artistic, Software, etc.)',
      'Drafting and filing Form XIV with the Copyright Office',
      'Preparation of No Objection Certificates (NOC) and author declarations',
      'Generation of official Diary Number for legal tracking',
      'Response to discrepancy letters and certificate collection'
    ],
    documents: [
      'Two complete copies of the original work (or source code printout)',
      'Applicant & Author identity and address proofs',
      'NOC from author / developer (if work was created by an employee/contractor)',
      'NOC from publisher / trademark registry (for artistic logos)'
    ],
    process: [
      { step: '1', title: 'Work Review', desc: 'Review original work, source code, or artwork for copyright eligibility.' },
      { step: '2', title: 'Form XIV Submission', desc: 'File application on Copyright portal and obtain Diary Number.' },
      { step: '3', title: 'Mandatory 30-Day Wait', desc: 'Observe statutory 30-day window for any third-party objections.' },
      { step: '4', title: 'Registration Certificate', desc: 'Receive official Copyright Registration Certificate with ROC number.' }
    ],
    bestFor: 'Software developers, creative agencies, authors, musicians, artists, and publishers.'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'expert-guidance',
    title: 'Expert Guidance',
    desc: 'Experienced corporate legal advisors, chartered tax specialists, and IP professionals guiding you through statutory complexities.',
    icon: 'GraduationCap'
  },
  {
    id: 'simplified-doc',
    title: 'Simplified Documentation',
    desc: 'Clear, structured checklists with zero confusing legal jargon. We handle drafting, notarization, and statutory uploads.',
    icon: 'Layers'
  },
  {
    id: 'transparent-comm',
    title: 'Transparent Communication',
    desc: 'Honest timelines, clear professional fee structure, and proactive filing status updates at every stage of your application.',
    icon: 'MessageSquareCheck'
  },
  {
    id: 'personalized-assist',
    title: 'Personalized Assistance',
    desc: 'Direct consultation tailored to your specific business model, enterprise structure, and operational requirements.',
    icon: 'UserCheck2'
  },
  {
    id: 'business-focused',
    title: 'Business-Focused Approach',
    desc: 'Practical, growth-oriented advisory designed to safeguard your corporate credibility and enable smooth commercial expansion.',
    icon: 'TrendingUp'
  },
  {
    id: 'ongoing-compliance',
    title: 'Ongoing Compliance Support',
    desc: 'Reliable post-incorporation maintenance including annual filings, GST returns, and timely statutory renewals.',
    icon: 'ShieldAlert'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Choose Your Service',
    description: 'Explore our comprehensive directory and identify the legal, registration, taxation, or trademark service your business needs.'
  },
  {
    step: '02',
    title: 'Connect With Our Team',
    description: 'Submit an enquiry online or connect directly via Call or WhatsApp to discuss your exact requirements with our specialists.'
  },
  {
    step: '03',
    title: 'Documentation & Assistance',
    description: 'Receive a clear document checklist. Our team verifies your details, drafts statutory filings, and prepares the application dossier.'
  },
  {
    step: '04',
    title: 'Application & Follow-Up',
    description: 'We submit your application to the respective government department, monitor progress, address queries, and deliver your certificates.'
  }
];

export const WHO_WE_HELP = [
  {
    id: 'startups',
    title: 'Startups & Entrepreneurs',
    desc: 'Turn your concept into a legally incorporated entity with DPIIT recognition, founder agreements, and trademark protection.',
    tag: 'Early Stage & Growth',
    icon: 'Rocket'
  },
  {
    id: 'msmes',
    title: 'Small Businesses & MSMEs',
    desc: 'Structured compliance, Udyam registration, GST filings, and municipal licensing designed for everyday business security.',
    tag: 'Local & Regional Enterprises',
    icon: 'Store'
  },
  {
    id: 'corporate',
    title: 'Established Companies',
    desc: 'Seamless ROC secretarial compliance, director KYC, statutory audits, and specialized corporate contract vetting.',
    tag: 'Private & Public Limited',
    icon: 'Building'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Sellers',
    desc: 'Mandatory GST registrations, cross-border IEC codes, brand trademarking, and consumer policy drafting for online sellers.',
    tag: 'Amazon, Flipkart & D2C',
    icon: 'ShoppingBag'
  },
  {
    id: 'hospitality',
    title: 'Retail & Hospitality',
    desc: 'FSSAI food licensing, renewal management, trade licenses, and health trade permits for restaurants and retail outlets.',
    tag: 'Food, Dining & Stores',
    icon: 'UtensilsCrossed'
  },
  {
    id: 'professionals',
    title: 'Professionals & Service Providers',
    desc: 'LLP formations, bespoke client service agreements, copyright registrations, and annual personal/corporate tax returns.',
    tag: 'Consultants, Agencies & Tech',
    icon: 'Briefcase'
  }
];

export const FAQS = [
  {
    q: 'What services does Evidex India provide?',
    a: 'Evidex India offers comprehensive assistance with company incorporation (Pvt Ltd, LLP, OPC), business licenses (FSSAI, Trade License, MSME), taxation & compliance (GST, Income Tax, TDS, ROC), legal drafting, and trademark/intellectual property registrations.'
  },
  {
    q: 'How can I get started?',
    a: 'Simply select your required service from our catalog and submit the consultation form on this page, or connect with our team directly via phone (+91 62916 87255) or WhatsApp. An expert will guide you through the next steps.'
  },
  {
    q: 'Can I enquire about more than one service?',
    a: 'Yes, absolutely. You can mention multiple service requirements in the consultation form message or discuss combined packages (such as Company Registration + GST + Trademark) directly with our advisors.'
  },
  {
    q: 'What documents are required?',
    a: 'Required documentation depends on the specific service and your business entity type. Typically, primary KYC proofs (PAN, Aadhaar/Passport), business premise utility bills, and bank proofs are needed. Clicking on any service card shows a detailed checklist.'
  },
  {
    q: 'Do you assist with GST registration and return filing?',
    a: 'Yes. We provide complete end-to-end GST support, from initial application and biometric authentication to monthly/quarterly return filings (GSTR-1, GSTR-3B) and annual reconciliation.'
  },
  {
    q: 'Can I get assistance with trademark registration?',
    a: 'Yes. We conduct pre-filing brand searches, prepare and file Form TM-A with the Trademark Registry, and handle subsequent examination objections, hearings, and opposition proceedings.'
  },
  {
    q: 'Are government fees included in your service charges?',
    a: 'Professional consultancy fees and mandatory government statutory charges are separate. Statutory fees depend on factors like authorized share capital, state stamp duty, and MSME concessions, and are clearly explained before initiating work.'
  },
  {
    q: 'How long does registration take?',
    a: 'Processing turnaround times vary by service and relevant government authority. For example, GST and IEC typically take 3-5 days, company incorporation takes 7-10 days, while trademark registration receives an application number within 24 hours.'
  },
  {
    q: 'Where is Evidex India located?',
    a: 'Our registered office is located at Tobacco House, 3rd Floor, Room No. 308 (South), 1 Old Court House Corner, Radha Bazar, Lal Bazar, Kolkata – 700001, West Bengal, India.'
  },
  {
    q: 'How can I contact Evidex India?',
    a: 'You can call us at +91 62916 87255, email us at info@evidexindia.com, connect on WhatsApp (+91 62916 87255), or visit our Kolkata office during business hours (Monday – Saturday: 10:00 AM – 7:00 PM).'
  }
];

export const COMPANY_DETAILS = {
  name: 'EVIDEX INDIA',
  tagline: 'Professional Legal & Business Compliance Experts',
  phone: '+91 62916 87255',
  phoneClean: '+916291687255',
  email: 'info@evidexindia.com',
  whatsappUrl: 'https://wa.me/916291687255',
  address: {
    line1: 'Tobacco House, 3rd Floor, Room No. 308 (South)',
    line2: '1 Old Court House Corner, Radha Bazar, Lal Bazar',
    city: 'Kolkata',
    pincode: '700001',
    state: 'West Bengal',
    country: 'India'
  },
  fullAddress: 'Tobacco House, 3rd Floor, Room No. 308 (South), 1 Old Court House Corner, Radha Bazar, Lal Bazar, Kolkata – 700001, West Bengal, India.',
  hours: 'Monday – Saturday: 10:00 AM – 7:00 PM (Sunday: Closed)',
  googleMapsUrl: 'https://maps.google.com/?q=Tobacco+House+1+Old+Court+House+Corner+Lal+Bazar+Kolkata+700001',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1483864074213!2d88.3503524!3d22.5735399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a56114eb91%3A0x6bfa529ce1a03e1c!2sTobacco%20House!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};
