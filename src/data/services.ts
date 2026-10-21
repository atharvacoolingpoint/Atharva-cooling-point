export interface RepairService {
  slug: string;
  title: string;
  category: 'washing-machine' | 'ac' | 'microwave' | 'refrigerator';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  startingPrice: number;
  estimatedTime: string;
  warranty: string;
  commonSymptoms: string[];
  includedInService: string[];
  faqs: { question: string; answer: string }[];
  imagePath: string;
}

export const REPAIR_SERVICES: RepairService[] = [
  // WASHING MACHINE SERVICES
  {
    slug: 'washing-machine-repair',
    title: 'General Washing Machine Repair & Service',
    category: 'washing-machine',
    shortDesc: 'Doorstep repair for Front Load, Top Load, Semi-Automatic, and Fully Automatic Washing Machines in Surat.',
    fullDesc: 'Atharva Cooling Point provides expert home repair for all washing machine brands across Surat. Our technicians diagnose motor winding issues, water inlet valve errors, drain pump blockages, and spin tub noise right at your home.',
    iconName: 'WashingMachine',
    startingPrice: 299,
    estimatedTime: '30 - 60 Mins',
    warranty: '90 Days Warranty',
    commonSymptoms: [
      'Washing Machine Not Turning On / Power Light Off',
      'Drum Not Spinning / Agitator Idle',
      'Water Not Draining / E2 or E4 Drain Error',
      'Loud Rattling Noise During Spin Cycle',
      'Water Leakage From Bottom or Door Seal',
      'Washing Machine Stopping Midway'
    ],
    includedInService: [
      'Comprehensive Doorstep Inspection',
      'Drain Pump & Valve Cleaning',
      'Belt & Motor Capacitor Check',
      'Genuine OEM Spare Parts Replacement',
      '90-Day Free Service Guarantee'
    ],
    faqs: [
      {
        question: 'Do you repair all washing machine brands in Surat?',
        answer: 'Yes! We repair IFB, LG, Samsung, Whirlpool, Bosch, Godrej, Haier, and Panasonic washing machines across all Surat localities.'
      },
      {
        question: 'Why is my washing machine making a loud grinding sound during spin?',
        answer: 'Loud noise during spin cycle usually indicates worn drum tub bearings or damaged shock absorbers. Our engineers replace tub bearings and dampers on-site.'
      }
    ],
    imagePath: '/images/washing_machine_repair.webp'
  },
  {
    slug: 'front-load-washing-machine-repair',
    title: 'Front Load Washing Machine Repair',
    category: 'washing-machine',
    shortDesc: 'Specialized drum bearing replacement, rubber door gasket seal swap, and spider arm repairs.',
    fullDesc: 'Front load washers require precision engineering. We specialize in replacing moldy door bellows seals, stainless steel drum spider arms, carbon brushes, and electronic door lock interlocks.',
    iconName: 'RotateCw',
    startingPrice: 399,
    estimatedTime: '45 - 60 Mins',
    warranty: '90 Days Warranty',
    commonSymptoms: [
      'Water leaking from front door glass or rubber gasket',
      'Door lock jammed / Door not opening after wash',
      'Extreme vibration during 1200 RPM spin',
      'DE error code on digital display'
    ],
    includedInService: [
      'Original Rubber Door Bellows Replacement',
      'Electronic Door Lock Assembly Fix',
      'Shock Absorber Damper Strut Swap'
    ],
    faqs: [
      {
        question: 'Can you replace torn front load rubber door gasket at home?',
        answer: 'Yes! Our technicians carry genuine antimicrobial rubber door seals for LG, IFB, Bosch, and Samsung front load washers.'
      }
    ],
    imagePath: '/images/washing_machine_repair.webp'
  },
  {
    slug: 'washing-machine-pcb-repair',
    title: 'Washing Machine PCB & Motherboard Repair',
    category: 'washing-machine',
    shortDesc: 'Fix washing machine PCB error codes, cycle timer failure, and motor inverter driver boards.',
    fullDesc: 'Direct Drive and Inverter washing machines rely on electronic control units. We offer chip-level repair for burnt power ICs, pressure switch sensors, and microprocessor logic boards.',
    iconName: 'Cpu',
    startingPrice: 449,
    estimatedTime: '45 Mins',
    warranty: '90 Days Warranty',
    commonSymptoms: [
      'Digital panel showing error codes (e.g., PE, OE, UE, LE, IE)',
      'Buttons unresponsive on touch control panel',
      'Program timer stuck on wash cycle',
      'Direct Drive Inverter motor not rotating'
    ],
    includedInService: [
      'PCB Power Supply & Capacitor Soldering',
      'Water Level Pressure Sensor Replacement',
      'Program Controller Reprogramming'
    ],
    faqs: [
      {
        question: 'Are washing machine control board repairs cheaper than new board replacement?',
        answer: 'Yes! Component-level micro-soldering saves up to 70% compared to buying a completely new factory PCB motherboard.'
      }
    ],
    imagePath: '/images/washing_machine_repair.webp'
  },

  // AC (AIR CONDITIONER) SERVICES
  {
    slug: 'ac-repair',
    title: 'General AC Repair & Servicing',
    category: 'ac',
    shortDesc: 'Fast doorstep repair for Split AC, Window AC, and Inverter AC units in Surat.',
    fullDesc: 'Atharva Cooling Point provides complete AC repair solutions across Surat. From zero cooling emergencies to compressor tripping, PCB sensor failures, and indoor water dripping, our certified HVAC technicians arrive in 30 minutes with full diagnostic equipment.',
    iconName: 'Wind',
    startingPrice: 399,
    estimatedTime: '45 - 60 Mins',
    warranty: '90 Days Warranty',
    commonSymptoms: [
      'AC Not Cooling / Blowing Warm Air',
      'Water Leaking / Dripping Inside Room',
      'AC Compressor Tripping or MCB Falling',
      'Foul Smell / Dust Blowing from AC Vents',
      'Outdoor Unit Fan Not Running',
      'Remote Controller Sensor Unresponsive'
    ],
    includedInService: [
      'Comprehensive 14-Point HVAC Diagnostic Check',
      'Indoor Filter & Evaporator Coil Cleaning',
      'Outdoor Condenser Unit Inspection',
      'Gas Pressure & Current Amperage Test',
      '90-Day Service Guarantee'
    ],
    faqs: [
      {
        question: 'Why is my AC running but not cooling the room in Surat heat?',
        answer: 'Lack of cooling is usually caused by low refrigerant gas levels, dirty evaporator coils blocking airflow, or a failed compressor capacitor switch.'
      },
      {
        question: 'Why is water leaking from my indoor AC unit onto the wall?',
        answer: 'Indoor water leakage happens when the condensate drain line is clogged with algae/dust or the indoor unit filter is severely frozen.'
      }
    ],
    imagePath: '/images/ac_repair.webp'
  },
  {
    slug: 'ac-gas-charging',
    title: 'AC Gas Charging & Leak Repair (R32 / R410a / R22)',
    category: 'ac',
    shortDesc: 'Nitrogen pressure leak detection, copper braze repair, vacuuming & eco-friendly gas refilling.',
    fullDesc: 'Low AC gas prevents your room from reaching cool temperatures. We perform high-pressure nitrogen leak tests on copper pipes, seal leaks with silver brazing, vacuum the line, and charge 100% pure R32, R410a, or R22 refrigerant by weight.',
    iconName: 'Flame',
    startingPrice: 1199,
    estimatedTime: '60 Mins',
    warranty: '90 Days Gas Warranty',
    commonSymptoms: [
      'Ice forming on indoor copper pipes or cooling coil',
      'AC running continuously without lowering room temperature',
      'Hissing noise near outdoor unit valves',
      'Sudden drop in cooling efficiency'
    ],
    includedInService: [
      'High-Pressure Nitrogen Leak Test (up to 350 PSI)',
      'Silver Brazing Pipe Repair & Flare Nut Fixing',
      'Vacuum Evacuation with Vacuum Pump',
      'Precision Gas Charging by Weight Meter'
    ],
    faqs: [
      {
        question: 'Does AC gas refill include leak repair?',
        answer: 'Yes! We never charge gas without finding and fixing copper pipe leaks first, ensuring your gas refilling lasts for years.'
      }
    ],
    imagePath: '/images/ac_repair.webp'
  },
  {
    slug: 'ac-jet-service',
    title: 'AC Jet Pump Cleaning & Foam Wash',
    category: 'ac',
    shortDesc: 'High-pressure water jet washing with anti-bacterial foam spray for maximum cooling performance.',
    fullDesc: 'Deep foam jet service removes stubborn dust, mold, and debris from indoor cooling fins and outdoor condenser coils, reducing power bills by up to 25% and boosting cooling speeds.',
    iconName: 'Sparkles',
    startingPrice: 499,
    estimatedTime: '45 Mins',
    warranty: '30 Days Service Warranty',
    commonSymptoms: [
      'Weak air throw from AC blower',
      'Bad musty odor when AC starts',
      'High electricity bill due to choked coils'
    ],
    includedInService: [
      'High-Pressure Water Jet Pump Wash',
      'Anti-Bacterial Chemical Foam Treatment',
      'Blower Wheel & Condenser Coil Deep Wash'
    ],
    faqs: [
      {
        question: 'Will jet pump wash make a mess on my room walls?',
        answer: 'No! Our technicians fit a specialized waterproof catch-jacket bag around your indoor AC to funnel all dirty water cleanly into a bucket.'
      }
    ],
    imagePath: '/images/ac_repair.webp'
  },

  // MICROWAVE OVEN SERVICES
  {
    slug: 'microwave-oven-repair',
    title: 'General Microwave Oven Repair & Service',
    category: 'microwave',
    shortDesc: 'Doorstep repair for Solo, Grill, and Convection Microwave Ovens in Surat.',
    fullDesc: 'Atharva Cooling Point provides specialized doorstep microwave oven repairs. Whether your microwave is not heating food, sparking inside the cavity, or the glass turntable plate stops spinning, our technicians fix it safely at home.',
    iconName: 'Flame',
    startingPrice: 249,
    estimatedTime: '30 - 45 Mins',
    warranty: '90 Days Warranty',
    commonSymptoms: [
      'Microwave Runs but Food Stays Cold / Not Heating',
      'Sparking or Arcing Inside Microwave Cavity',
      'Glass Turntable Plate Not Rotating',
      'Buttons / Touchpad Membrane Unresponsive',
      'Microwave Tripping Power Supply / Fuse Blowing',
      'Burning Smell or Humming Noise'
    ],
    includedInService: [
      'High Voltage Circuit Safety Inspection',
      'Magnetron & Diode Emission Testing',
      'Door Interlock Safety Switch Alignment',
      'Original Replacement Parts Installation',
      '90-Day Free Service Guarantee'
    ],
    faqs: [
      {
        question: 'Why is my microwave light and timer working but food is not heating?',
        answer: 'This is the signature failure of the Magnetron tube or high-voltage capacitor/diode. Replacing the magnetron tube restores instant heating.'
      },
      {
        question: 'Is it safe to repair a microwave oven at home?',
        answer: 'Yes! Our technicians use high-voltage discharge tools and microwave RF leak meters to ensure 100% radiation-safe home repairs.'
      }
    ],
    imagePath: '/images/microwave_repair.webp'
  },
  {
    slug: 'microwave-magnetron-repair',
    title: 'Microwave Magnetron & High-Voltage Repair',
    category: 'microwave',
    shortDesc: 'High-voltage transformer, magnetron tube, diode, and HV capacitor replacement.',
    fullDesc: 'The Magnetron is the core component that generates microwave radiation to cook food. When it burns out, the oven runs silently without producing heat. We install original LG, Panasonic, and Samsung magnetrons on-site.',
    iconName: 'Zap',
    startingPrice: 499,
    estimatedTime: '30 - 45 Mins',
    warranty: '90 Days Warranty',
    commonSymptoms: [
      'Zero heat output during microwave mode',
      'Loud metallic buzzing sound when start is pressed',
      'Frequent blowing of 12A main ceramic fuse'
    ],
    includedInService: [
      'Genuine Magnetron Tube Replacement',
      'High Voltage Rectifier Diode Swap',
      'Microwave RF Leakage Test'
    ],
    faqs: [
      {
        question: 'How long does magnetron replacement take?',
        answer: 'Our technicians carry pre-matched magnetrons in their service kit and complete the replacement within 30 minutes at your home.'
      }
    ],
    imagePath: '/images/microwave_repair.webp'
  },

  // REFRIGERATOR SERVICES
  {
    slug: 'refrigerator-repair',
    title: 'General Refrigerator Repair & Service',
    category: 'refrigerator',
    shortDesc: 'Comprehensive home repair for single-door, double-door, side-by-side & inverter fridges.',
    fullDesc: 'Atharva Cooling Point delivers doorstep diagnostic and repair solutions for all refrigerator issues across Surat. From zero cooling emergencies to compressor noise and gas leaks, our certified refrigeration engineers carry digital pressure gauges, R600a/R134a gas cylinders, and OEM overload protectors.',
    iconName: 'Snowflake',
    startingPrice: 299,
    estimatedTime: '30 - 60 Mins',
    warranty: '90 Days Warranty',
    commonSymptoms: [
      'Refrigerator Not Cooling at all',
      'Freezer is cooling but Lower Fridge Compartment is Warm',
      'Gas Leakage / Hissing Noise',
      'Compressor Clicking Sound & Turning Off',
      'Excess Ice Formation / Frost Overload',
      'Water Leaking under the Refrigerator'
    ],
    includedInService: [
      'Compressor & Motor Winding Testing',
      'Refrigerant Pressure Check',
      'Thermostat & Defrost Sensor Diagnostics',
      'Door Gasket Vacuum Seal Check',
      '90-Day Parts & Workmanship Warranty'
    ],
    faqs: [
      {
        question: 'How fast can a technician visit for a fridge emergency in Surat?',
        answer: 'We dispatch local technicians within 30 minutes to protect your food items from spoiling. Available 7 days a week.'
      }
    ],
    imagePath: '/images/fridge_repair.webp'
  },
  {
    slug: 'double-door-refrigerator-repair',
    title: 'Double-Door & Frost-Free Fridge Repair',
    category: 'refrigerator',
    shortDesc: 'Defrost timer, bimetal sensor, fan motor, and automatic defrost heater repair.',
    fullDesc: 'Double-door frost-free refrigerators depend on automatic defrost cycles. When the defrost timer or bimetal thermostat fails, ice blocks the air passage, preventing cold air from reaching the lower fresh food section.',
    iconName: 'Layers',
    startingPrice: 349,
    estimatedTime: '45 Mins',
    warranty: '90 Days Warranty',
    commonSymptoms: [
      'Top freezer works fine, bottom fridge section is warm',
      'Heavy ice accumulation behind freezer back panel',
      'Evaporator fan motor squeaking or stopped',
      'Defrost drain water outlet clogged'
    ],
    includedInService: [
      'Bimetal Thermostat & Thermal Fuse Replacement',
      'Defrost Heating Element Testing & Swap',
      'Evaporator Air Duct Cleaning & Fan Replacement'
    ],
    faqs: [
      {
        question: 'Why is my double-door fridge freezer cold but bottom compartment warm?',
        answer: 'This is caused by a broken defrost timer, burnt bimetal sensor, or blocked air duct. Ice builds up around the evaporator coil, stopping air circulation. Replaced parts resolve this completely.'
      }
    ],
    imagePath: '/images/fridge_repair.webp'
  },
  {
    slug: 'side-by-side-refrigerator-repair',
    title: 'Side-by-Side & French Door Fridge Repair',
    category: 'refrigerator',
    shortDesc: 'High-end repair for Samsung, LG, Whirlpool, Bosch, and Panasonic side-by-side fridges.',
    fullDesc: 'Side-by-side smart refrigerators feature dual compressors/evaporators, digital inverter inverter boards, water dispensers, and ice makers. Our senior refrigeration engineers are specially trained on luxury imported models.',
    iconName: 'Maximize2',
    startingPrice: 499,
    estimatedTime: '60 Mins',
    warranty: '90 Days Warranty',
    commonSymptoms: [
      'Digital dispenser ice maker not dispensing ice',
      'Inverter error code on door display panel',
      'Dual cooling evaporator temperature mismatch',
      'Inverter compressor ticking or slow cooling'
    ],
    includedInService: [
      'Dual Inverter PCB Diagnostic Scan',
      'Ice Maker Motor & Water Valve Replacement',
      'Inverter Driver Board & Sensor Calibration'
    ],
    faqs: [
      {
        question: 'Do you carry original spare parts for side-by-side Samsung and LG fridges?',
        answer: 'Yes! We stock genuine OEM inverter boards, sensors, and water solenoid valves for all major side-by-side models in Surat.'
      }
    ],
    imagePath: '/images/fridge_repair.webp'
  },
  {
    slug: 'refrigerator-compressor-repair',
    title: 'Compressor Repair & Replacement',
    category: 'refrigerator',
    shortDesc: 'Inverter & Reciprocating compressor swap, relay switch replacement, and copper braze fitting.',
    fullDesc: 'The compressor is the heart of your refrigerator. If your fridge makes a clicking sound every few minutes or the compressor body feels extremely hot without cooling, we test the relay, capacitor, and winding resistance.',
    iconName: 'Zap',
    startingPrice: 699,
    estimatedTime: '60 - 90 Mins',
    warranty: '90 Days Warranty',
    commonSymptoms: [
      'Clicking noise every 2 minutes from back bottom of fridge',
      'Compressor running continuously without cooling',
      'Tripping house MCB circuit breaker when fridge starts',
      'Compressor motor completely dead/silent'
    ],
    includedInService: [
      'PTC Starter Relay & Overload Protector Swap',
      'Compressor Motor Resistance & Winding Insulation Test',
      'New Inverter / Reciprocating Compressor Installation & Vacuuming'
    ],
    faqs: [
      {
        question: 'Does a clicking sound mean I must replace the expensive compressor?',
        answer: 'Not necessarily! In over 60% of cases, the clicking sound is caused by a $5 relay or capacitor switch failure. Our honest technicians test the relay first to save you money.'
      }
    ],
    imagePath: '/images/fridge_repair.webp'
  },
  {
    slug: 'refrigerator-gas-refilling',
    title: 'Refrigerator Gas Refilling (R600a / R134a)',
    category: 'refrigerator',
    shortDesc: 'Nitrogen pressure leak test, copper pipe brazing, filter drier replacement & precision gas charging.',
    fullDesc: 'Low refrigerant gas prevents your fridge from achieving sub-zero temperatures. We do not simply refill gas; we pressurized nitrogen leak test the copper lines, repair leaks with silver brazing, replace the filter drier, pull a deep vacuum, and charge precise eco-friendly gas.',
    iconName: 'Wind',
    startingPrice: 799,
    estimatedTime: '60 Mins',
    warranty: '90 Days Warranty',
    commonSymptoms: [
      'Fridge runs constantly but cooling is weak',
      'Hissing sound inside freezer',
      'Only first tube of freezer coil gets frost',
      'Sweating on back wall of fridge'
    ],
    includedInService: [
      'Nitrogen High-Pressure Leak Detection',
      'Silver Brazing Pipe Repair & Copper Filter Drier Swap',
      'Deep Vacuum Pump Evacuation (Below 500 microns)',
      'Precision Weight Gas Charging (R600a / R134a / R12)'
    ],
    faqs: [
      {
        question: 'How long does a fridge gas refill last?',
        answer: 'When a gas refill is done properly after fixing leaks and pulling deep vacuum (as we do), it lasts for 5 to 10+ years.'
      }
    ],
    imagePath: '/images/fridge_repair.webp'
  },
  {
    slug: 'refrigerator-pcb-board-repair',
    title: 'Refrigerator PCB & Inverter Board Repair',
    category: 'refrigerator',
    shortDesc: 'Digital inverter control board, power supply unit (PSU), and temperature sensor repair.',
    fullDesc: 'Modern inverter refrigerators use intelligent electronic PCB microcontrollers to drive variable speed BLDC compressors. We repair burned MOSFETs, micro-controllers, and voltage regulation circuits at chip level.',
    iconName: 'Cpu',
    startingPrice: 449,
    estimatedTime: '45 Mins',
    warranty: '90 Days Warranty',
    commonSymptoms: [
      'Fridge display panel blinking error codes (e.g., Er DH, Er FF, 5E)',
      'Compressor speed not shifting',
      'Interior lights on but fan and compressor off',
      'Burnt smell from lower rear compartment'
    ],
    includedInService: [
      'BLDC Compressor Driver Transistor Repair',
      'Temperature NTC Sensor Testing',
      'Power Surge Inrush Resistor Swap'
    ],
    faqs: [
      {
        question: 'What do fridge error codes mean?',
        answer: 'Error codes indicate specific sensor or PCB board communication failures. Our technicians carry diagnostic code charts for LG, Samsung, Whirlpool, and Godrej to pinpoint the exact broken part.'
      }
    ],
    imagePath: '/images/fridge_repair.webp'
  }
];
