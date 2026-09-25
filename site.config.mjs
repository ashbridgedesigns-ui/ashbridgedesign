// Everything business-specific lives here. Fill the blanks before going live —
// empty values are hidden on the site rather than shown as placeholders.
export default {
  name: 'Ashbridge Design',
  tagline: 'Engineer-led extension design & new-build inspections',
  url: 'https://www.ashbridgedesign.co.uk',
  base: 'Birmingham',
  email: '',           // public contact email; blank hides it everywhere (e.g. 'hello@ashbridgedesign.co.uk')
  phone: '',            // e.g. '0121 496 0000' — enables Call buttons when set
  whatsapp: '447466812272', // international format, no + (07466 812272)
  whatsappDisplay: '07466 812272',
  founderName: '',      // shown on About and in the report sign-off
  companyNumber: '',    // Companies House number, shown in the footer
  googleReviewsUrl: '', // link to the Google Business Profile reviews
  // Google Analytics 4 measurement ID (e.g. 'G-XXXXXXXXXX'). Blank = no analytics loaded.
  // Consent Mode: no analytics cookies until the visitor accepts in the cookie banner.
  ga4Id: 'G-SG8HQ3LFE9',
  // IndexNow key (Bing, Yandex, Seznam…). Served at /<key>.txt; submit URLs with: node tools/indexnow.mjs
  indexNowKey: '569acd782040d1bf094b714c12cc13e8',
  // Stripe Payment Links (or similar) for the £49 snagging deposit. Leave blank
  // and the "Book" buttons fall back to the booking form.
  depositLink: '',
  vatRegistered: false,
};

export const prices = {
  design: [
    { id: 'single', name: 'Single-storey extension', s1: 650, s2: 850, both: 1350, calcs: 395, complete: 1695 },
    { id: 'double', name: 'Double-storey extension', s1: 850, s2: 1050, both: 1650, calcs: 595, complete: 2195 },
    { id: 'loft', name: 'Loft conversion', s1: 650, s2: 850, both: 1350, calcs: 495, complete: 1795 },
    { id: 'garage', name: 'Garage conversion', s1: 650, s2: 700, both: 1200, calcs: 250, complete: 1395 },
  ],
  beamCalc: 295,
  snag: [
    { beds: '1', label: 'Flat / 1 bedroom', price: 325 },
    { beds: '2', label: '2 bedrooms', price: 345 },
    { beds: '3', label: '3 bedrooms', price: 370 },
    { beds: '4', label: '4 bedrooms', price: 395 },
    { beds: '5', label: '5 bedrooms', price: 429 },
  ],
  reinspection: 150,
  preAndPost: 150, // added to the snagging price for pre-completion + post-completion
  warranty: 295,
  warrantyReturning: 245,
  travel: 50,
  deposit: 49,
};
