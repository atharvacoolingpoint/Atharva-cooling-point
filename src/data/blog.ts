export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'TV Repair' | 'Refrigerator Repair' | 'Maintenance Tips';
  date: string;
  readTime: string;
  author: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'tv-black-screen-sound-working-surat-guide',
    title: 'Why is My TV Screen Black but Sound is Working? (Surat Repair Guide)',
    excerpt: 'Discover the #1 cause of TV black screen with audio in Surat homes and how our technicians replace LED backlights in 45 minutes.',
    category: 'TV Repair',
    date: 'September 28, 2026',
    readTime: '5 min read',
    author: 'Atharva Cooling Point Master Tech',
    content: `
      <h2>The Most Common TV Problem in Surat</h2>
      <p>If you turned on your Samsung, LG, Sony, or Mi TV and heard audio from news or movies, but the screen stayed completely pitch black, don't worry—your TV's main computer chip and display panel are usually 100% fine!</p>
      
      <h3>What Causes Black Screen with Sound?</h3>
      <p>Modern LED and Smart TVs use a strip of high-intensity Light Emitting Diodes (LED backlight) placed behind the LCD/OLED panel glass. Over 2 to 4 years of heavy usage in Surat's warm climate, one or more LED diodes burn out due to thermal stress.</p>
      <p>Because the backlight circuit runs in series, a single burnt diode cuts off power to the entire backlight array. The display panel still receives video signals, but without light shining through it, the screen appears pitch black.</p>
      
      <h3>How to Confirm it at Home (Flashlight Test)</h3>
      <ol>
        <li>Turn on your TV and play any channel so audio is audible.</li>
        <li>Grab your smartphone flashlight and shine it directly at the glass screen from 2 inches away.</li>
        <li>Look very closely. If you can see faint images or shadows moving behind your flashlight beam, your TV panel logic is intact and only the LED backlights need replacement!</li>
      </ol>
      
      <h3>How Atharva Cooling Point Repairs It at Your Doorstep</h3>
      <p>Our certified engineers visit your home anywhere in Surat (Adajan, Vesu, Varachha, Katargam, etc.) with brand-new, high-lumens aluminum-core LED strip replacements. We disassemble the bezel safely, replace the old strip array, calibrate voltage, and test brightness in under 45 minutes with a 90-day warranty!</p>
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
