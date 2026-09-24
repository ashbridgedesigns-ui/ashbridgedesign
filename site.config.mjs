// Everything business-specific lives here. Fill the blanks before going live —
// empty values are hidden on the site rather than shown as placeholders.
export default {
  name: 'Ashbridge Design',
  tagline: 'Engineer-led extension design & new-build inspections',
  url: 'https://www.ashbridgedesign.co.uk',
  base: 'Birmingham',
  email: 'hello@ashbridgedesign.co.uk',
  phone: '',            // e.g. '0121 496 0000' — enables Call buttons when set
  whatsapp: '',         // e.g. '447700900000' — international format, no +
  founderName: '',      // shown on About and in the report sign-off
  companyNumber: '',    // Companies House number, shown in the footer
  googleReviewsUrl: '', // link to the Google Business Profile reviews
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
