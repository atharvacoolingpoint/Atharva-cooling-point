export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Washing Machine Repair' | 'Refrigerator Repair' | 'Maintenance Tips';
  date: string;
  readTime: string;
  author: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'washing-machine-not-spinning-water-draining-surat-guide',
    title: 'Why is My Washing Machine Not Spinning or Draining? (Surat Repair Guide)',
    excerpt: 'Discover the top causes of washing machine spin failure and drain pump issues in Surat homes, and how our technicians resolve them in 30 minutes.',
    category: 'Washing Machine Repair',
    date: 'September 28, 2026',
    readTime: '5 min read',
    author: 'Atharva Cooling Point Master Tech',
    content: `
      <h2>The Most Common Washing Machine Problem in Surat</h2>
      <p>If your front load or top load washing machine stops mid-cycle with water sitting in the drum, or refuses to spin during the drain cycle, don't panic—your motor and main electronics are usually repairable!</p>
      
      <h3>What Causes Spin and Drain Failures?</h3>
      <p>Modern washing machines from LG, Samsung, IFB, Whirlpool, and Bosch rely on automatic drainage pumps and pressure sensors. In Surat, hard water scale, lint, and loose coins or buttons commonly clog the drain pump filter.</p>
      <p>When the drain sensor detects water remaining in the tub, the safety logic prevents the machine from entering high-speed spin (e.g. 800-1400 RPM) to prevent severe vibration or flooding.</p>
      
      <h3>3 Quick Checks You Can Do at Home</h3>
      <ol>
        <li><strong>Clean the Drain Filter:</strong> Open the lower service door at the bottom-right of your front load washer. Unscrew the circular filter and clear any trapped hair, coins, or debris.</li>
        <li><strong>Check the Drain Hose:</strong> Make sure the drain pipe at the back is not kinked, bent, or placed higher than the recommended height.</li>
        <li><strong>Redistribute the Laundry Load:</strong> An uneven load (such as a single heavy bedsheet) triggers unbalance detection (UE error code) and halts the spin cycle.</li>
      </ol>
      
      <h3>How Atharva Cooling Point Repairs It at Your Doorstep</h3>
      <p>Our certified engineers visit your home anywhere in Surat (Adajan, Vesu, Varachha, Katargam, Piplod, etc.) with original replacement drain pump motors, drive belts, drum bearings, and pressure switches. We diagnose error codes, test the motor, and restore normal washing cycles within 30 to 45 minutes with a 90-day warranty!</p>
    `
  },
  {
    slug: 'refrigerator-not-cooling-surat-summer-troubleshooting',
    title: 'Refrigerator Not Cooling in Surat Summer? 5 Steps to Fix Before Calling Tech',
    excerpt: 'Surat humidity and heat put extreme pressure on fridge compressors. Follow these 5 quick diagnostic steps.',
    category: 'Refrigerator Repair',
    date: 'September 20, 2026',
    readTime: '6 min read',
    author: 'Senior HVAC & Refrigeration Specialist',
    content: `
      <h2>Surat Summer Heat vs. Refrigerator Cooling</h2>
      <p>During peak summer months in Surat, ambient temperatures rise above 40°C. Refrigerator compressors must work twice as hard to dissipate heat from condenser coils.</p>
      
      <h3>5 DIY Checks Before Scheduling Service</h3>
      <h4>1. Check Condenser Coil Dust Build-up</h4>
      <p>The coils at the back or bottom of your fridge radiate heat out. Heavy dust layer acts like a thermal blanket, trapping heat and causing the compressor to overheat and trip off.</p>
      
      <h4>2. Verify Door Gasket Seal</h4>
      <p>Place a ₹100 note between the door rubber seal and fridge frame. Close the door and pull the bill. If it slides out with zero resistance, warm humid Surat air is constantly leaking inside, melting your ice!</p>
      
      <h4>3. Listen for Back Clicking Noise</h4>
      <p>If you hear a distinct "click... 2 minutes pause... click" sound near the bottom of your fridge, your compressor starter relay switch is tripping due to overload or voltage drop.</p>
      
      <h4>4. Defrost Blockage in Double Door Fridges</h4>
      <p>If the top freezer is freezing ice cream but the bottom fresh food vegetable drawer is warm, the automatic defrost heater or air duct is blocked with ice.</p>
      
      <h3>Need Urgent Technician in Surat?</h3>
      <p>Call Atharva Cooling Point for same-day gas refilling, compressor relay replacement, or defrost sensor repairs across Adajan, Vesu, City Light, Piplod, and all Surat locations.</p>
    `
  }
];
