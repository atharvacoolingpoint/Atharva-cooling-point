export interface SuratLocation {
  slug: string;
  name: string;
  nameGujarati?: string;
  zone: 'South Surat' | 'West Surat' | 'East Surat' | 'North Surat' | 'Central Surat';
  pincode: string;
  landmarks: string[];
  responseTime: string;
  activeTechnicians: number;
  popularServices: string[];
  localizedDescription: string;
  reviews: {
    author: string;
    rating: number;
    date: string;
    comment: string;
    serviceProvided: string;
  }[];
}

export const SURAT_LOCATIONS: SuratLocation[] = [
  {
    slug: 'adajan',
    name: 'Adajan',
    nameGujarati: 'અડાજણ',
    zone: 'West Surat',
    pincode: '395009',
    landmarks: ['Star Bazaar', 'Prime Arcade', 'Honey Park Road', 'Adajan Gam', 'LP Savani Road'],
    responseTime: '20 - 30 mins',
    activeTechnicians: 12,
    popularServices: ['Smart TV Backlight Repair', 'Side-by-Side Fridge Gas Refill', 'OLED Screen Servicing'],
    localizedDescription: 'Adajan is one of Surat\'s largest residential and commercial hubs. Our certified technician hub in Adajan ensures rapid 30-minute door-step arrival across Honey Park, LP Savani, and Star Bazaar areas for immediate TV and refrigerator diagnostic and repair services.',
    reviews: [
      {
        author: 'Patel Hitesh',
        rating: 5,
        date: '2 days ago',
        comment: 'My Samsung 55" QLED TV had no display in Adajan. Technician arrived in 25 mins with genuine panel PCB. Repaired on the spot!',
        serviceProvided: 'Samsung QLED TV Display Repair'
      },
      {
        author: 'Anjali Shah',
        rating: 5,
        date: '1 week ago',
        comment: 'Quick fridge gas refilling near Prime Arcade Adajan. Professional behavior, transparent pricing, clean work.',
        serviceProvided: 'LG Double Door Fridge Gas Refill'
      }
    ]
  },
  {
    slug: 'vesu',
    name: 'Vesu',
    nameGujarati: 'વેસુ',
    zone: 'South Surat',
    pincode: '395007',
    landmarks: ['VR Mall', 'VIP Road', 'Someshwara Enclave', 'Agrawal Vidya Vihar', 'University Road'],
    responseTime: '15 - 25 mins',
    activeTechnicians: 14,
    popularServices: ['Side-by-Side Fridge Repair', 'Sony Bravia OLED TV Panel Fix', 'Inverter Fridge PCB Board Repair'],
    localizedDescription: 'Serving high-end luxury high-rises and villas along VIP Road and Vesu. We specialize in premium inverter refrigerators, double-door fridges, and high-end Sony, LG, and Samsung OLED/QLED Smart TVs with specialized original manufacturer replacement parts.',
    reviews: [
      {
        author: 'Mehta Rajesh',
        rating: 5,
        date: '3 days ago',
        comment: 'Whirlpool side-by-side fridge stopped cooling in Vesu VIP road. Called at 10 AM, fixed by 11:30 AM with 90-day warranty!',
        serviceProvided: 'Whirlpool Refrigerator Compressor Repair'
      }
    ]
  },
  {
    slug: 'athwa',
    name: 'Athwa',
    nameGujarati: 'અઠવા',
    zone: 'Central Surat',
    pincode: '395001',
    landmarks: ['SVNIT Circle', 'Parle Point', 'Ghod Dod Road', 'Athwa Lines', 'Chopati'],
    responseTime: '20 - 30 mins',
    activeTechnicians: 10,
    popularServices: ['Android TV Motherboard Repair', 'Frost Free Fridge Thermostat Repair', 'LED TV Backlight Replacement'],
    localizedDescription: 'Dedicated fast response service team covering Ghod Dod Road, Parle Point, and Athwa Lines. Providing doorstep technician assistance for all top TV and refrigerator brands with no hidden call-out charges.',
    reviews: [
      {
        author: 'Kavita Desai',
        rating: 5,
        date: '5 days ago',
        comment: 'Very polite technician in Athwa Lines. Replaced LG LED TV backlight strip in front of us. Excellent service.',
        serviceProvided: 'LG LED TV Backlight Repair'
      }
    ]
  },
  {
    slug: 'varachha',
    name: 'Varachha',
    nameGujarati: 'વરાછા',
    zone: 'East Surat',
    pincode: '395006',
    landmarks: ['Mini Bazar', 'Poddar Plaza', 'Hirabaug', 'Kapodra', 'Baroda Rayon'],
    responseTime: '20 - 35 mins',
    activeTechnicians: 15,
    popularServices: ['Single Door Fridge Gas Charging', 'Smart TV Sound & HDMI Repair', 'Inverter Refrigerator PCB Repair'],
    localizedDescription: 'Fast, reliable appliance repair for diamond and textile trade residential sectors across Varachha Road, Hirabaug, and Kapodra. Guaranteed emergency same-day appointments and original component replacement.',
    reviews: [
      {
        author: 'Sanjay Chovatiya',
        rating: 5,
        date: 'Yesterday',
        comment: 'Best fridge technician in Varachha! Fixed Godrej fridge cooling issue within 45 minutes.',
        serviceProvided: 'Godrej Fridge Cooling Repair'
      }
    ]
  },
  {
    slug: 'katargam',
    name: 'Katargam',
    nameGujarati: 'કતારગામ',
    zone: 'North Surat',
    pincode: '395004',
    landmarks: ['Gajera Circle', 'Dabholi Road', 'Lalita Circle', 'Kantara Lake', 'Ved Road'],
    responseTime: '25 - 35 mins',
    activeTechnicians: 11,
    popularServices: ['Mi Android TV Repair', 'Samsung Double Door Fridge Repair', 'Compressor Relay Swap'],
    localizedDescription: 'Serving Katargam, Dabholi, and Ved Road areas. Complete diagnosis for dead TVs, vertical display lines, non-cooling fridges, and compressor relay breakdowns.',
    reviews: [
      {
        author: 'Praful Bhanderi',
        rating: 5,
        date: '4 days ago',
        comment: 'Mi 43-inch TV motherboard had HDMI input problem. Quick chip-level repair in Katargam.',
        serviceProvided: 'Xiaomi Mi TV PCB Repair'
      }
    ]
  },
  {
    slug: 'udhna',
    name: 'Udhna',
    nameGujarati: 'ઉધના',
    zone: 'South Surat',
    pincode: '395023',
    landmarks: ['Udhna Darwaja', 'Unn Patiya', 'Laxmi Nagar', 'BRTS Corridor', 'Udhna Station'],
    responseTime: '25 - 40 mins',
    activeTechnicians: 9,
    popularServices: ['Single Door Refrigerator Gas Fill', 'Vu 4K TV Power Board Replacement', 'Fridge Water Leak Repair'],
    localizedDescription: 'Prompt repair engineers available around Udhna station and main industrial residential belts. Affordable pricing, transparent diagnostic estimate before starting work.',
    reviews: [
      {
        author: 'Dinesh Sharma',
        rating: 5,
        date: '1 week ago',
        comment: 'Super fast arrival in Udhna. Refrigerator gas top-up was done cleanly with leak test.',
        serviceProvided: 'Refrigerator Gas Refill'
      }
    ]
  },
  {
    slug: 'piplod',
    name: 'Piplod',
    nameGujarati: 'પીપલોદ',
    zone: 'West Surat',
    pincode: '395007',
    landmarks: ['Rahulraj Mall', 'Silent Zone', 'Dumas Road', 'SVNIT Campus', 'Lake View Garden'],
    responseTime: '15 - 25 mins',
    activeTechnicians: 8,
    popularServices: ['Samsung 8K TV Display Repair', 'Bosch Side-by-Side Fridge Servicing', 'QLED Backlight Fix'],
    localizedDescription: 'Premium specialized repair services for luxury homes and high-density apartments along Piplod and Dumas Road. Certified experts for Samsung, Sony, LG, Bosch, and Panasonic products.',
    reviews: [
      {
        author: 'Dr. Nikhil Shah',
        rating: 5,
        date: '3 days ago',
        comment: 'Fixed our Bosch imported side by side fridge in Piplod. Expert knowledge and genuine Bosch parts.',
        serviceProvided: 'Bosch Refrigerator PCB Replacement'
      }
    ]
  },
  {
    slug: 'pal',
    name: 'Pal',
    nameGujarati: 'પાલ',
    zone: 'West Surat',
    pincode: '395009',
    landmarks: ['Pal Rander Road', 'Bhatha', 'Gaurav Path', 'Pal Lake', 'Galaxy Circle'],
    responseTime: '20 - 30 mins',
    activeTechnicians: 10,
    popularServices: ['LG Smart TV Repair', 'Haier Inverter Fridge Repair', 'Display Panel Bonding'],
    localizedDescription: 'Doorstep technician hub covering Pal, Gaurav Path, and Pal-Rander extension. Fast diagnosis and same-day repair with 90-day parts warranty.',
    reviews: [
      {
        author: 'Ramesh Patel',
        rating: 5,
        date: '4 days ago',
        comment: 'Great service in Pal! Replaced backlight strips for OnePlus TV. Colors look bright and clear now.',
        serviceProvided: 'OnePlus TV Repair'
      }
    ]
  },
  {
    slug: 'palanpur',
    name: 'Palanpur',
    nameGujarati: 'પાલનપુર',
    zone: 'West Surat',
    pincode: '395009',
    landmarks: ['Palanpur Canal Road', 'Jahangirpura', 'Canal Walkway', 'Crescent Plaza'],
    responseTime: '20 - 35 mins',
    activeTechnicians: 9,
    popularServices: ['Fridge Compressor Swap', 'Smart TV Wi-Fi Card Repair', 'Double Door Defrost Repair'],
    localizedDescription: 'Rapid appliance repair support across Palanpur Canal Road and Jahangirpura. Reliable fix for all cooling issues and TV board failures.',
    reviews: [
      {
        author: 'Deepak Varma',
        rating: 5,
        date: '6 days ago',
        comment: 'Very reasonable pricing. Repaired Haier double door fridge defrost timer in Palanpur.',
        serviceProvided: 'Haier Defrost Repair'
      }
    ]
  },
  {
    slug: 'nanpura',
    name: 'Nanpura',
    nameGujarati: 'નાનપુરા',
    zone: 'Central Surat',
    pincode: '395001',
    landmarks: ['Tapti Riverfront', 'Kadiwala High School', 'Dutch Garden', 'Makkai Pool'],
    responseTime: '20 - 30 mins',
    activeTechnicians: 7,
    popularServices: ['Panasonic TV Power Repair', 'Voltas Fridge Gas Refill', 'Motherboard Servicing'],
    localizedDescription: 'Central Surat historic and commercial neighborhood coverage in Nanpura. Fast doorstep resolution for home appliances.',
    reviews: [
      {
        author: 'Farooq Merchant',
        rating: 5,
        date: '1 week ago',
        comment: 'Prompt repair of Panasonic LCD TV in Nanpura. Honest quote and quick fix.',
        serviceProvided: 'Panasonic TV Repair'
      }
    ]
  },
  {
    slug: 'city-light',
    name: 'City Light',
    nameGujarati: 'સિટી લાઈટ',
    zone: 'South Surat',
    pincode: '395007',
    landmarks: ['Surat Tennis Club', 'Science Center', 'City Light Shopping Centre', 'Maharana Pratap Garden'],
    responseTime: '15 - 25 mins',
    activeTechnicians: 11,
    popularServices: ['OLED TV Display Repair', 'Samsung Smart Fridge Touchscreen Repair', 'Noise Free Fan Motor Repair'],
    localizedDescription: 'Serving City Light residents with premium doorstep TV and Refrigerator repair standard. Multi-brand certified engineers on call.',
    reviews: [
      {
        author: 'Priyesh Shah',
        rating: 5,
        date: '2 days ago',
        comment: 'Extremely polite technician. Solved LG OLED TV flickering screen in City Light.',
        serviceProvided: 'OLED Display Repair'
      }
    ]
  },
  {
    slug: 'althan',
    name: 'Althan',
    nameGujarati: 'અલથાણ',
    zone: 'South Surat',
    pincode: '395017',
    landmarks: ['Althan Tenement', 'Bhimrad Road', 'Althan Canal Road', 'Saniya Hemad'],
    responseTime: '20 - 30 mins',
    activeTechnicians: 8,
    popularServices: ['Direct Cool Fridge Thermostat Repair', 'Smart TV Sound Board Repair', 'Inverter PCB Swap'],
    localizedDescription: 'Comprehensive repair services throughout Althan and Bhimrad Road. Same day repairs with genuine factory parts.',
    reviews: [
      {
        author: 'Suresh Jha',
        rating: 5,
        date: '5 days ago',
        comment: 'Fixed fridge water leak and ice buildup problem in Althan.',
        serviceProvided: 'Fridge Water Leak Fix'
      }
    ]
  },
  {
    slug: 'dindoli',
    name: 'Dindoli',
    nameGujarati: 'ડિંડોલી',
    zone: 'East Surat',
    pincode: '394210',
    landmarks: ['Dindoli Bridge', 'Royal Star Town', 'Kharvasa Road', 'Navgam'],
    responseTime: '25 - 40 mins',
    activeTechnicians: 8,
    popularServices: ['Single Door Gas Charging', 'LED Backlight Strip Fix', 'TV Power Supply Repair'],
    localizedDescription: 'Extensive service coverage in Dindoli and Kharvasa Road. Pocket-friendly prices and guaranteed 90-day spare warranty.',
    reviews: [
      {
        author: 'Vikas Patil',
        rating: 5,
        date: '3 days ago',
        comment: 'Fast response in Dindoli. Changed TV power supply board on the spot.',
        serviceProvided: 'TV Power Board Fix'
      }
    ]
  },
  {
    slug: 'parvat-patiya',
    name: 'Parvat Patiya',
    nameGujarati: 'પર્વત પાટિયા',
    zone: 'East Surat',
    pincode: '395010',
    landmarks: ['Model Town', 'Parvat Flyover', 'Dumbhal Road', 'Dumbhal Transport Hub'],
    responseTime: '20 - 35 mins',
    activeTechnicians: 7,
    popularServices: ['Smart TV Android OS Flash', 'Fridge Relay & Capacitor Swap', 'Gas Refilling'],
    localizedDescription: 'Serving Parvat Patiya and Model Town commercial & residential complexes. Instant service dispatch.',
    reviews: [
      {
        author: 'Monu Yadav',
        rating: 5,
        date: '1 week ago',
        comment: 'Fixed smart TV bootloop stuck issue in Parvat Patiya. TV works like new!',
        serviceProvided: 'Android TV OS Repair'
      }
    ]
  },
  {
    slug: 'sachin',
    name: 'Sachin',
    nameGujarati: 'સચિન',
    zone: 'South Surat',
    pincode: '394230',
    landmarks: ['Sachin GIDC', 'Sachin Station', 'Kanakpur', 'Slatter Highway'],
    responseTime: '30 - 45 mins',
    activeTechnicians: 6,
    popularServices: ['Commercial Fridge Repair', 'Heavy Duty Inverter Fridge Repair', 'LED TV Repair'],
    localizedDescription: 'Dedicated technician coverage for Sachin residential and GIDC sectors. Certified technicians carrying multi-brand spares.',
    reviews: [
      {
        author: 'Amitabh Singh',
        rating: 5,
        date: '4 days ago',
        comment: 'Great service even in Sachin GIDC area. Solved fridge cooling coil failure.',
        serviceProvided: 'Fridge Cooling Coil Repair'
      }
    ]
  },
  {
    slug: 'amroli',
    name: 'Amroli',
    nameGujarati: 'અમરોલી',
    zone: 'North Surat',
    pincode: '394107',
    landmarks: ['Amroli Bridge', 'Kosad Housing', 'Chhapra Bhatha Road', 'Sayan Road'],
    responseTime: '25 - 40 mins',
    activeTechnicians: 7,
    popularServices: ['LED TV Panel Repair', 'Single Door Refrigerator Service', 'Smart Remote Receiver Repair'],
    localizedDescription: 'Serving Amroli and Kosad areas with doorstep TV and Refrigerator repair technicians.',
    reviews: [
      {
        author: 'Jignesh Rathod',
        rating: 5,
        date: '5 days ago',
        comment: 'Technician reached Amroli on time and fixed display sound mis-sync.',
        serviceProvided: 'TV Audio Repair'
      }
    ]
  },
  {
    slug: 'limbayat',
    name: 'Limbayat',
    nameGujarati: 'લીંબાયત',
    zone: 'East Surat',
    pincode: '395012',
    landmarks: ['Limbayat Police Station', 'Godadara Road', 'Mithikhadi', 'Maruti Nagar'],
    responseTime: '25 - 40 mins',
    activeTechnicians: 8,
    popularServices: ['Refrigerator Gas Refilling', 'TV Power PCB Board Repair', 'Defrost Heater Repair'],
    localizedDescription: 'Rapid repair response for Limbayat, Godadara, and Maruti Nagar residential belts.',
    reviews: [
      {
        author: 'Pravin Solanki',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Satisfied with gas filling in my Whirlpool fridge at Limbayat.',
        serviceProvided: 'Fridge Gas Charging'
      }
    ]
  },
  {
    slug: 'bhatar',
    name: 'Bhatar',
    nameGujarati: 'ભટાર',
    zone: 'South Surat',
    pincode: '395017',
    landmarks: ['Bhatar Trade Centre', 'Soren Road', 'Uma Bhavan', 'Subhash Nagar'],
    responseTime: '15 - 25 mins',
    activeTechnicians: 10,
    popularServices: ['LG Smart TV Repair', 'Samsung Double Door Fridge Repair', 'Backlight LED Strip Fix'],
    localizedDescription: 'Continuous doorstep appliance repair operations across Bhatar Road and surrounding towers.',
    reviews: [
      {
        author: 'Kiran Trivedi',
        rating: 5,
        date: '3 days ago',
        comment: 'Honest technician in Bhatar. Solved TV black screen with audio problem in 30 mins.',
        serviceProvided: 'TV Black Screen Repair'
      }
    ]
  },
  {
    slug: 'rander',
    name: 'Rander',
    nameGujarati: 'રાંદર',
    zone: 'West Surat',
    pincode: '395005',
    landmarks: ['Rander Gorat Road', 'Navyug College', 'Mora Bhagal', 'Tapti River Bank'],
    responseTime: '20 - 30 mins',
    activeTechnicians: 9,
    popularServices: ['Old CRT to LED Upgrade Advice', 'OLED Screen Care', 'Inverter Fridge Board Repair'],
    localizedDescription: 'Serving historic Rander, Mora Bhagal, and Gorat Road. Doorstep delivery of original spare parts.',
    reviews: [
      {
        author: 'Yusuf Shaikh',
        rating: 5,
        date: '4 days ago',
        comment: 'Very professional team in Rander. Fixed Samsung inverter fridge error code cleanly.',
        serviceProvided: 'Samsung Fridge Error Repair'
      }
    ]
  },
  {
    slug: 'singanpor',
    name: 'Singanpor',
    nameGujarati: 'સિંગણપોર',
    zone: 'North Surat',
    pincode: '395004',
    landmarks: ['Singanpor Causeway', 'Causeway Road', 'Hari Darshan Society', 'Lalita Park'],
    responseTime: '25 - 35 mins',
    activeTechnicians: 8,
    popularServices: ['Smart TV Backlight Replacement', 'Single & Double Door Fridge Gas Refill', 'Relay Change'],
    localizedDescription: 'Fast appliance repair servicing Singanpor Causeway and nearby residential societies.',
    reviews: [
      {
        author: 'Ketan Sutariya',
        rating: 5,
        date: '1 week ago',
        comment: 'Good service for TV panel repair in Singanpor.',
        serviceProvided: 'TV Panel Repair'
      }
    ]
  }
];
