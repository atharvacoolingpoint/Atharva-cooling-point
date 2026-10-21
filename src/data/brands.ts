export interface BrandInfo {
  slug: string;
  name: string;
  category: 'washing-machine' | 'ac' | 'microwave' | 'refrigerator' | 'all';
  logoText: string;
  accentColor: string;
  bgGradient: string;
  description: string;
  popularModels: string[];
  commonIssuesFixed: string[];
  warrantyOffer: string;
  faqs: { question: string; answer: string }[];
}

export const BRANDS_DATA: BrandInfo[] = [
  // MULTI-APPLIANCE BRANDS
  {
    slug: 'samsung',
    name: 'Samsung',
    category: 'all',
    logoText: 'SAMSUNG',
    accentColor: '#1428A0',
    bgGradient: 'from-blue-600/10 to-indigo-600/10',
    description: 'Specialized doorstep repair for Samsung Washing Machines, ACs, Microwave Ovens, and Digital Inverter Fridges in Surat.',
    popularModels: ['Samsung EcoBubble Washer', 'Samsung WindFree Inverter AC', 'Samsung Convection Microwave', 'Samsung Twin Cooling Fridge'],
    commonIssuesFixed: [
      'Samsung Washing Machine E4 Drain / 4C Water Supply Error',
      'Samsung AC E101 Communication / Gas Leak Error',
      'Samsung Microwave Magnetron Not Heating',
      'Samsung Fridge Digital Inverter 5E / 22E Sensor Error'
    ],
    warrantyOffer: '90 Days Genuine Samsung Spare Warranty',
    faqs: [
      {
        question: 'Do you repair all Samsung home appliances in Surat?',
        answer: 'Yes! Our certified engineers service Samsung Washing Machines, Split ACs, Microwaves, and Refrigerator models directly at your doorstep.'
      }
    ]
  },
  {
    slug: 'lg',
    name: 'LG',
    category: 'all',
    logoText: 'LG',
    accentColor: '#A50034',
    bgGradient: 'from-rose-600/10 to-red-600/10',
    description: 'Expert repair for LG Direct Drive Washing Machines, DUAL Inverter ACs, Charcoal Convection Microwaves, and Fridges in Surat.',
    popularModels: ['LG AI Direct Drive Washer', 'LG Dual Inverter 5-in-1 AC', 'LG NeoChef Microwave', 'LG Smart Inverter Fridge'],
    commonIssuesFixed: [
      'LG Washing Machine OE Drain Pump / LE Motor Error',
      'LG Dual Inverter AC CH 38 / CH 05 Error Code',
      'LG Microwave Sparks inside cavity',
      'LG Refrigerator Linear Compressor Not Cooling'
    ],
    warrantyOffer: '90 Days Warranty on LG Compatible Components',
    faqs: [
      {
        question: 'What does LG washing machine OE error mean?',
        answer: 'OE error means the drain pump is blocked or failed. Our technician removes coins/lint or replaces the drain pump motor on-site within 30 minutes.'
      }
    ]
  },
  {
    slug: 'whirlpool',
    name: 'Whirlpool',
    category: 'all',
    logoText: 'WHIRLPOOL',
    accentColor: '#F2A900',
    bgGradient: 'from-amber-500/10 to-yellow-500/10',
    description: 'Specialized service for Whirlpool 6th Sense Washing Machines, 3D Cool ACs, Magicook Microwaves, and Protton Fridges in Surat.',
    popularModels: ['Whirlpool 6th Sense Stainwash', 'Whirlpool 3D Cool Inverter AC', 'Whirlpool Magicook Microwave', 'Whirlpool Protton 3-Door Fridge'],
    commonIssuesFixed: [
      'Whirlpool Washing Machine spin tub vibration',
      'Whirlpool AC gas leakage in copper coil',
      'Whirlpool Microwave plate not rotating',
      'Whirlpool Fridge bottom fresh flow not cooling'
    ],
    warrantyOffer: '90 Days Service Guarantee',
    faqs: [
      {
        question: 'Do you provide doorstep repair for Whirlpool washers and ACs in Surat?',
        answer: 'Yes! We stock genuine Whirlpool pressure switches, AC copper coils, and defrost sensors across Surat.'
      }
    ]
  },
  {
    slug: 'ifb',
    name: 'IFB',
    category: 'washing-machine',
    logoText: 'IFB',
    accentColor: '#E2001A',
    bgGradient: 'from-red-600/10 to-rose-600/10',
    description: 'Certified doorstep repair for IFB Senator, Executive, and Elena Front & Top Load Washing Machines in Surat.',
    popularModels: ['IFB Senator Aqua SX', 'IFB Executive Smart', 'IFB Elena Aqua VX'],
    commonIssuesFixed: [
      'IFB Washing Machine door lock Err 02',
      'IFB Drum bearing grinding noise during 1400 RPM spin',
      'IFB Water inlet valve solenoid failure'
    ],
    warrantyOffer: '90 Days IFB Spare Parts Warranty',
    faqs: [
      {
        question: 'Do you replace IFB front load rubber door seal in Surat?',
        answer: 'Yes! Our technicians carry genuine antimicrobial door bellow seals for all IFB Senator and Executive models.'
      }
    ]
  },
  {
    slug: 'voltas',
    name: 'Voltas',
    category: 'ac',
    logoText: 'VOLTAS',
    accentColor: '#00539B',
    bgGradient: 'from-blue-600/10 to-cyan-600/10',
    description: 'Top-rated service for Voltas Adjustable Inverter ACs, Split ACs, and Window AC units across Surat.',
    popularModels: ['Voltas 1.5 Ton 5 Star Adjustable Inverter AC', 'Voltas Executive Split AC', 'Voltas Window AC'],
    commonIssuesFixed: [
      'Voltas AC E6 / F1 sensor error code',
      'Voltas outdoor unit fan motor silent',
      'Voltas copper pipe nitrogen leak repair & R32 gas refilling'
    ],
    warrantyOffer: '90 Days HVAC Guarantee',
    faqs: [
      {
        question: 'How fast can a Voltas AC technician arrive in Surat?',
        answer: 'Our local HVAC technicians arrive within 30 minutes in Adajan, Vesu, Varachha, Katargam, and all Surat areas.'
      }
    ]
  },
  {
    slug: 'godrej',
    name: 'Godrej',
    category: 'all',
    logoText: 'GODREJ',
    accentColor: '#008080',
    bgGradient: 'from-emerald-600/10 to-teal-600/10',
    description: 'Prompt doorstep repair for Godrej Eon Washing Machines, Green Inverter ACs, Microwaves, and Fridges in Surat.',
    popularModels: ['Godrej Eon All-Rite Washer', 'Godrej Green Inverter AC', 'Godrej Edge Pro Fridge'],
    commonIssuesFixed: [
      'Godrej Washing Machine drain motor failure',
      'Godrej AC gas leak repair',
      'Godrej Fridge compressor clicking noise'
    ],
    warrantyOffer: '90 Days Warranty',
    faqs: [
      {
        question: 'How much does Godrej appliance repair cost in Surat?',
        answer: 'Diagnostic inspection starts from ₹249 with 100% transparent pricing before any repair begins.'
      }
    ]
  },
  {
    slug: 'bosch',
    name: 'Bosch',
    category: 'all',
    logoText: 'BOSCH',
    accentColor: '#E20015',
    bgGradient: 'from-red-600/10 to-rose-700/10',
    description: 'Precision German appliance repair for Bosch Serie 6 Washing Machines, Inverter ACs, and VitaFresh Fridges in Surat.',
    popularModels: ['Bosch Serie 6 Front Load Washer', 'Bosch Climate 2000 AC', 'Bosch VitaFresh Fridge'],
    commonIssuesFixed: ['Bosch E18 drain pump error', 'Bosch inverter PCB driver fault', 'Bosch drum spider arm rust'],
    warrantyOffer: '90 Days Bosch Component Warranty',
    faqs: [{ question: 'Are genuine Bosch spare parts available in Surat?', answer: 'Yes! We import genuine Bosch electronic modules and sensors for local home installation.' }]
  },
  {
    slug: 'daikin',
    name: 'Daikin',
    category: 'ac',
    logoText: 'DAIKIN',
    accentColor: '#0097E6',
    bgGradient: 'from-sky-600/10 to-blue-600/10',
    description: 'Certified Daikin Inverter AC repair, PCB error code troubleshooting, and gas leak sealing in Surat.',
    popularModels: ['Daikin FTHT Inverter AC', 'Daikin JTKJ Series 5-Star AC', 'Daikin VRV System'],
    commonIssuesFixed: ['Daikin U4 / A6 indoor outdoor communication fault', 'Daikin R32 gas refilling', 'Daikin blower fan noise'],
    warrantyOffer: '90 Days HVAC Warranty',
    faqs: [{ question: 'What does Daikin AC U4 error code mean?', answer: 'U4 error indicates signal mismatch between indoor PCB and outdoor inverter driver board.' }]
  },
  {
    slug: 'panasonic',
    name: 'Panasonic',
    category: 'all',
    logoText: 'PANASONIC',
    accentColor: '#00539B',
    bgGradient: 'from-cyan-600/10 to-blue-600/10',
    description: 'Reliable repair for Panasonic Miraie Connected Washing Machines, Inverter ACs, Microwaves, and Fridges in Surat.',
    popularModels: ['Panasonic Miraie Smart Washer', 'Panasonic Nanoe-G Inverter AC', 'Panasonic Convection Microwave'],
    commonIssuesFixed: ['Panasonic washer U11 drain error', 'Panasonic AC H11 communication fault', 'Panasonic microwave magnetron dead'],
    warrantyOffer: '90 Days Guarantee',
    faqs: [{ question: 'Do you fix Panasonic Miraie smart appliances in Surat?', answer: 'Yes, our engineers are trained on Panasonic IoT Miraie error diagnostics.' }]
  }
];
