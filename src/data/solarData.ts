import {
  SolarService,
  SolarProject,
  TechnologyComponent,
  FaqItem,
  BlogPost,
  Testimonial,
} from '../types/solar';

export const HERO_IMAGE = '/src/assets/images/hero_solar_rooftop_1794399051649.jpg';
export const RESIDENTIAL_IMAGE = '/src/assets/images/residential_solar_villa_1794399051236.jpg';
export const COMMERCIAL_IMAGE = '/src/assets/images/commercial_solar_campus_1794399053331.jpg';
export const INDUSTRIAL_IMAGE = '/src/assets/images/industrial_solar_warehouse_1794399053315.jpg';
export const BATTERY_IMAGE = '/src/assets/images/solar_battery_storage_system_1794399053258.jpg';

export const COMPANY_STATS = [
  { value: '48.6 MWp', label: 'Total Capacity Installed' },
  { value: '1,420+', label: 'Commissioned Projects' },
  { value: '99.4%', label: 'Average System Availability' },
  { value: '25 Years', label: 'Linear Performance Guarantee' },
];

export const SOLAR_SERVICES: SolarService[] = [
  {
    id: 'residential-rooftop',
    title: 'Residential Rooftop Solar Installation',
    subtitle: 'Tailored clean energy generation for private residences and villas',
    category: 'core',
    image: RESIDENTIAL_IMAGE,
    description: 'Precision engineered rooftop photovoltaic systems designed specifically for villas, independent homes, and residential estates. We maximize power output while preserving architectural aesthetics and roof structural integrity.',
    keyBenefits: [
      'Up to 85% reduction in grid electricity bills',
      'Net metering support with automated utility bi-directional meter setup',
      'Architecturally flush mounting with zero roof penetrations on compatible roofs',
      'Mobile app real-time generation and household consumption monitoring'
    ],
    specs: [
      { label: 'Typical Capacity', value: '3 kWp to 25 kWp' },
      { label: 'Rooftop Requirement', value: '80 sq.ft per kWp' },
      { label: 'Installation Duration', value: '2 to 4 working days' },
      { label: 'Warranty', value: '25-year panel / 10-year inverter' },
    ],
    idealFor: 'Independent villas, single-family homes, duplex residences, and farmhouses.'
  },
  {
    id: 'commercial-solar',
    title: 'Commercial Solar Installation',
    subtitle: 'High-yield rooftop and carport power plants for businesses and institutions',
    category: 'core',
    image: COMMERCIAL_IMAGE,
    description: 'Turnkey solar PV solutions engineered for offices, commercial IT parks, hospitals, shopping centers, and educational campuses. Turn unutilized roof space and open parking carports into active revenue-generating clean energy assets.',
    keyBenefits: [
      'Direct daytime peak load offsetting to eliminate commercial surge tariffs',
      'Eligible for 40% accelerated depreciation and commercial green credits',
      'Custom solar carport shade canopy structures with integrated EV chargers',
      'Multi-inverter string architectures for superior redundancy and high uptime'
    ],
    specs: [
      { label: 'Typical Capacity', value: '30 kWp to 500 kWp' },
      { label: 'Operating Voltage', value: '415V Three Phase / 11kV HT' },
      { label: 'Payback Timeline', value: '3.2 to 4.5 years typical' },
      { label: 'Monitoring', value: 'SCADA IoT & cloud fleet dashboard' },
    ],
    idealFor: 'Corporate campuses, software parks, schools, private hospitals, retail centers.'
  },
  {
    id: 'industrial-solar',
    title: 'Industrial Solar Solutions',
    subtitle: 'Heavy-duty megawatt-scale solar installations for factories and warehouses',
    category: 'core',
    image: INDUSTRIAL_IMAGE,
    description: 'Heavy industrial solar power plants designed for metal and RCC roofs on manufacturing facilities, textile mills, cold storages, and logistics hubs. Designed to handle continuous heavy industrial three-phase inductive loads.',
    keyBenefits: [
      'Significant reduction in Levelized Cost of Energy (LCOE)',
      'Heavy-duty non-penetrative standing seam clamps for metal sheet roofs',
      'Seamless synchronization with DG (Diesel Generator) sets to minimize fuel costs',
      'Full compliance with statutory industrial safety, fire, and CEA norms'
    ],
    specs: [
      { label: 'Typical Capacity', value: '100 kWp to 5+ MWp' },
      { label: 'Roof Types', value: 'Standing seam, trapezoidal, RCC flat' },
      { label: 'DG Sync', value: 'Integrated zero-export controller' },
      { label: 'Design Standard', value: 'IEC 62446 / IEEE 1547 compliant' },
    ],
    idealFor: 'Automotive plants, warehouses, food processing units, pharmaceutical factories.'
  },
  {
    id: 'on-grid-systems',
    title: 'On-Grid Solar Systems',
    subtitle: 'Cost-effective grid-interactive installations with net metering credits',
    category: 'specialized',
    image: COMMERCIAL_IMAGE,
    description: 'Grid-connected solar systems that export excess generated electricity directly to the utility grid during daylight hours, earning tariff credits through net metering. Requires no expensive battery banks, maximizing financial ROI.',
    keyBenefits: [
      'Lowest capital cost per watt among all solar configurations',
      'Automatic bi-directional energy import and export logging',
      'Minimal moving parts with near-zero ongoing consumable maintenance',
      'Immediate utility bill credit offsets applied on monthly billing cycles'
    ],
    specs: [
      { label: 'Battery Storage', value: 'Not required' },
      { label: 'Grid Dependency', value: 'Requires active grid frequency' },
      { label: 'Inverter Efficiency', value: '98.6% Euro weighted' },
      { label: 'Payback Period', value: '3 to 4 years' },
    ],
    idealFor: 'Properties located in urban or suburban zones with stable grid availability.'
  },
  {
    id: 'off-grid-systems',
    title: 'Off-Grid Solar Systems',
    subtitle: '100% autonomous power generation with integrated battery energy storage',
    category: 'specialized',
    image: BATTERY_IMAGE,
    description: 'Standalone solar systems engineered for remote locations, estates, or critical infrastructure where the utility grid is unavailable, unreliable, or prohibitively expensive to connect. Operates 24/7 on self-generated power.',
    keyBenefits: [
      'Complete immunity from grid blackouts and utility tariff increases',
      'High-cycle Lithium Iron Phosphate (LiFePO4) energy storage arrays',
      'Built-in smart generator auto-start for extended monsoon or storm conditions',
      'Pure sine wave output safe for sensitive electronics and medical devices'
    ],
    specs: [
      { label: 'Autonomy Window', value: '24 to 72 hours standard' },
      { label: 'Battery Chemistry', value: 'Tier-1 LiFePO4 (6,000+ cycles)' },
      { label: 'Surge Capability', value: '2x continuous rated power' },
      { label: 'Grid Connection', value: 'Zero reliance on public grid' },
    ],
    idealFor: 'Agricultural estates, eco-resorts, remote communications towers, rural homes.'
  },
  {
    id: 'hybrid-systems',
    title: 'Hybrid Solar & Battery Storage',
    subtitle: 'The best of both worlds: grid synchronization with seamless blackout protection',
    category: 'specialized',
    image: BATTERY_IMAGE,
    description: 'Advanced hybrid solar systems that feed power to your loads, recharge high-capacity batteries, and feed excess to the grid. In the event of a blackout, the system transfers to battery mode in under 10 milliseconds.',
    keyBenefits: [
      'Sub-10ms UPS grade transfer switch ensures zero computer or appliance reset',
      'Peak tariff time-of-use (TOU) arbitrage: discharge battery during peak grid rates',
      'Programmable critical load prioritizing to conserve power during long outages',
      'Modular expandable battery racks from 5 kWh up to 100+ kWh'
    ],
    specs: [
      { label: 'Transfer Time', value: '< 10 ms (UPS grade)' },
      { label: 'Battery Chemistry', value: 'Lithium Ferro Phosphate (LiFePO4)' },
      { label: 'Depth of Discharge', value: '90% usable capacity' },
      { label: 'Warranty', value: '10-year comprehensive battery warranty' },
    ],
    idealFor: 'Homes, clinics, IT businesses, and luxury villas requiring uninterrupted power.'
  },
  {
    id: 'solar-panel-installation',
    title: 'Solar Panel Installation & Upgrades',
    subtitle: 'Certified engineering, module upgrades, and repowering for existing roofs',
    category: 'support',
    image: RESIDENTIAL_IMAGE,
    description: 'Specialized installation using high-efficiency N-type TOPCon and bifacial monocrystalline modules. We also offer module upgrade services for older poly-crystalline systems to double energy output within the same roof footprint.',
    keyBenefits: [
      'Bifacial glass-glass modules capturing up to 25% reflected rear albedo energy',
      'High temperature coefficient for sustained generation during extreme summer heat',
      'Structural wind tunnel tested anodized aluminum rails rated to 180 km/h wind gusts',
      'Certified master technicians with strict electrical torque auditing'
    ],
    specs: [
      { label: 'Panel Technology', value: 'N-Type TOPCon / Bifacial Mono' },
      { label: 'Module Efficiency', value: '22.4% to 23.2%' },
      { label: 'Degradation', value: '< 0.4% per year after Year 1' },
      { label: 'Wind Tolerance', value: 'Up to Category 4 hurricane winds' },
    ],
    idealFor: 'New rooftop installations, legacy solar plant revamping, efficiency upgrades.'
  },
  {
    id: 'inverters-storage',
    title: 'Inverters & Energy Storage Solutions',
    subtitle: 'Tier-1 string inverters, microinverters, and smart LiFePO4 battery banks',
    category: 'support',
    image: BATTERY_IMAGE,
    description: 'We supply, commission, and calibrate world-class solar inverters and energy storage hardware. From distributed microinverters with module-level MPPT tracking to high-voltage industrial battery racks.',
    keyBenefits: [
      'Individual panel-level MPPT tracking eliminates shading bottlenecks',
      'Built-in Arc Fault Circuit Interrupter (AFCI) and rapid shutdown safety',
      'Compact wall-mountable chassis with IP65 weather-sealed enclosures',
      'Smart home integration via Modbus, Wi-Fi, Ethernet, and 4G cellular dongle'
    ],
    specs: [
      { label: 'Inverter Types', value: 'String, Hybrid, and Microinverters' },
      { label: 'MPPT Trackers', value: '2 to 12 independent MPPT channels' },
      { label: 'Storage Chemistry', value: 'Cobalt-free LiFePO4' },
      { label: 'Round-trip Efficiency', value: '> 95.5%' },
    ],
    idealFor: 'New system configurations, battery retrofits, inverter replacements.'
  },
  {
    id: 'maintenance-monitoring',
    title: 'Solar System Maintenance & Health Audits',
    subtitle: 'Preventive servicing, thermal imaging scans, panel de-soiling, and performance SLAs',
    category: 'support',
    image: INDUSTRIAL_IMAGE,
    description: 'Comprehensive annual maintenance contracts (AMC) and on-demand technical service. Our engineers use radiometric thermal cameras to detect microcracks, hotspot anomalies, string faults, and loose electrical junctions.',
    keyBenefits: [
      'Drone and handheld radiometric thermal infrared hotspot scanning',
      'De-mineralized water cleaning protocols that prevent mineral scale on glass',
      'Earth pit ground resistance testing and surge protection device (SPD) audits',
      'Guaranteed response SLAs within 24 hours for commercial and industrial clients'
    ],
    specs: [
      { label: 'Audit Types', value: 'Thermal IR, I-V Curve, Earth loop' },
      { label: 'Service Coverage', value: 'Quarterly & semi-annual visits' },
      { label: 'Cleaning Equipment', value: 'Soft-bristle rotary robotic cleaners' },
      { label: 'SLA Guarantee', value: '99% uptime commitment' },
    ],
    idealFor: 'All operational solar installations seeking maximum kilowatt-hour harvest.'
  }
];

export const INSTALLATION_STEPS = [
  {
    step: '01',
    title: 'Initial Consultation',
    summary: 'Understanding your energy consumption profile, utility tariff structure, and sustainability objectives.',
    details: 'Our solar consultants review your past 12 months of electricity bills, identify peak tariff zones, review property blueprints, and define your targeted power offset.',
    deliverable: 'Preliminary Feasibility Brief & Indicative Capacity Range',
    duration: 'Day 1'
  },
  {
    step: '02',
    title: 'Rooftop Site Assessment',
    summary: 'Comprehensive engineering evaluation of rooftop structural load, azimuth, and 3D shadow obstacles.',
    details: 'A certified solar engineer visits your property with laser measurement tools and drone mapping. We evaluate roof waterproofing, load-bearing capacity, sun path trajectory, and electrical service panels.',
    deliverable: 'Shadow Analysis Report & Structural Load Feasibility',
    duration: 'Days 2–3'
  },
  {
    step: '03',
    title: 'Custom Solar System Design',
    summary: 'Precision CAD layout design, string matching calculations, and single-line electrical schematics.',
    details: 'Our solar design engineers create customized layouts using PVSyst and Helioscope. We calculate tilt angles, string lengths, conduit paths, lightning protection, and module placement for maximum solar irradiation.',
    deliverable: 'Engineering CAD Drawings & PVSyst Generation Simulation',
    duration: 'Days 4–5'
  },
  {
    step: '04',
    title: 'Quotation & Permitting Approval',
    summary: 'Transparent, itemized bill of materials (BOM), financial payback schedule, and DISCOM liaisoning.',
    details: 'We present a fixed-price proposal with no hidden fees. Concurrently, our liaison team files for net metering interconnection permits, grid feasibility approvals, and subsidy eligibility paperwork.',
    deliverable: 'Itemized Turnkey Contract & Filed Regulatory Applications',
    duration: 'Days 6–8'
  },
  {
    step: '05',
    title: 'Installation & Commissioning',
    summary: 'Professional mechanical assembly, DC/AC electrical wiring, grounding, and high-voltage safety testing.',
    details: 'Our factory-trained technicians install corrosion-resistant mounting structures, mount Tier-1 solar modules, route UV-resistant DC solar cables, wire AC/DC distribution boxes, and calibrate inverters.',
    deliverable: 'Complete Physical Installation & Insulation Resistance Test Report',
    duration: 'Days 9–14'
  },
  {
    step: '06',
    title: 'Handover & Support',
    summary: 'Bi-directional utility meter commissioning, mobile monitoring app setup, warranty certificates, and training.',
    details: 'Following final utility inspection and net meter installation, we energize the system. We configure real-time cloud monitoring on your smartphone or desktop and deliver physical warranty documentation.',
    deliverable: 'Commissioning Certificate, Warranty Pack & Active Cloud Monitoring',
    duration: 'Day 15 Onwards'
  }
];

export const SOLAR_PROJECTS: SolarProject[] = [
  {
    id: 'project-emerald-residence',
    title: 'Emerald Coast Villa Eco-Residency',
    clientType: 'Residential Villa',
    category: 'residential',
    capacity: '14.8 kWp',
    systemType: 'Hybrid BESS',
    location: 'Coastal Bluffs, Monterey Bay',
    completionDate: 'October 2025',
    annualGeneration: '21,400 kWh',
    co2Offset: '15.2 Tonnes/yr',
    image: RESIDENTIAL_IMAGE,
    summary: 'A luxury coastal residence requiring 100% blackout immunity and zero visible roof clutter. Featuring matte black all-black panels and 20 kWh of wall-mounted lithium battery storage.',
    highlights: [
      'Custom architectural black anodized mounting matching roof profile',
      '20 kWh LiFePO4 battery bank providing 48 hours of critical outage backup',
      'Smart load management shedding non-essential pool heating during grid failures'
    ]
  },
  {
    id: 'project-apex-tech-campus',
    title: 'Apex Innovation Corporate Headquarters',
    clientType: 'Commercial Office',
    category: 'commercial',
    capacity: '380 kWp',
    systemType: 'On-Grid PV',
    location: 'Silicon Hills Innovation Park',
    completionDate: 'August 2025',
    annualGeneration: '562,000 kWh',
    co2Offset: '398 Tonnes/yr',
    image: COMMERCIAL_IMAGE,
    summary: 'Commercial corporate campus installation covering 4 building rooftops and an executive solar carport with 24 integrated Level-2 EV charging ports.',
    highlights: [
      'Bifacial glass-glass modules over reflective white TPO roof membrane',
      'Direct grid synchronization with automated 11kV step-up transformer substation',
      'Zero-export control and integrated campus energy management dashboard'
    ]
  },
  {
    id: 'project-meridian-logistics',
    title: 'Meridian Global Logistics & Cold Storage Hub',
    clientType: 'Industrial Plant',
    category: 'industrial',
    capacity: '1.45 MWp',
    systemType: 'On-Grid PV',
    location: 'Central Intermodal Freight Corridor',
    completionDate: 'December 2025',
    annualGeneration: '2,180,000 kWh',
    co2Offset: '1,540 Tonnes/yr',
    image: INDUSTRIAL_IMAGE,
    summary: 'Massive cold storage and distribution center running heavy industrial refrigeration compressors. Solar power now offsets 72% of day-shift power consumption.',
    highlights: [
      'Non-penetrative standing seam clamps preserving factory roof warranty',
      'Automatic synchronization with dual 1,000 kVA diesel generators during grid drops',
      'Thermographic drone monitoring and scheduled automated water cleaning system'
    ]
  },
  {
    id: 'project-solaris-estate',
    title: 'Oakridge Contemporary Hilltop Villa',
    clientType: 'Residential Villa',
    category: 'residential',
    capacity: '18.4 kWp',
    systemType: 'Hybrid BESS',
    location: 'Rolling Hills Country Estates',
    completionDate: 'January 2026',
    annualGeneration: '27,100 kWh',
    co2Offset: '19.4 Tonnes/yr',
    image: HERO_IMAGE,
    summary: 'High-efficiency residential micro-powerplant designed for an all-electric smart home with geothermal heat pump and dual electric vehicle chargers.',
    highlights: [
      'Sub-10ms UPS transfer ensuring continuous operation of home automation servers',
      'Estimated 25-year financial savings exceeding $142,000 against utility tariffs',
      'App-controlled time-of-use scheduling to export power at peak afternoon rates'
    ]
  },
  {
    id: 'project-greenline-pharma',
    title: 'AuraBio Pharmaceuticals Research Facility',
    clientType: 'Healthcare Facility',
    category: 'commercial',
    capacity: '220 kWp',
    systemType: 'Hybrid BESS',
    location: 'Biomedical Discovery District',
    completionDate: 'February 2026',
    annualGeneration: '325,000 kWh',
    co2Offset: '230 Tonnes/yr',
    image: COMMERCIAL_IMAGE,
    summary: 'Mission-critical laboratory facility requiring ultra-clean sinusoidal power and dual backup redundancy to protect climate-sensitive bio-specimen freezers.',
    highlights: [
      'Central industrial battery energy storage system (BESS) of 150 kWh',
      'High-grade active harmonic filtration for sensitive electron microscopy',
      'Full statutory compliance with cleanroom environmental protocols'
    ]
  },
  {
    id: 'project-heritage-foundry',
    title: 'Vanguard Precision Tooling Works',
    clientType: 'Industrial Plant',
    category: 'industrial',
    capacity: '850 kWp',
    systemType: 'On-Grid PV',
    location: 'Northside Industrial Sector',
    completionDate: 'November 2025',
    annualGeneration: '1,290,000 kWh',
    co2Offset: '915 Tonnes/yr',
    image: INDUSTRIAL_IMAGE,
    summary: 'Precision metal fabrication facility operating heavy 5-axis CNC machines and arc welders, slashing monthly electricity expenses by 68%.',
    highlights: [
      'Engineered vibration-dampened mounting rails over curved corrugated sheet',
      'Fast-acting power factor correction and surge suppression modules',
      'Projected full capital payback in only 3.4 years'
    ]
  }
];

export const TECHNOLOGY_COMPONENTS: TechnologyComponent[] = [
  {
    id: 'tech-pv-modules',
    name: 'N-Type TOPCon & Bifacial PV Modules',
    category: 'Power Generation',
    role: 'Converts incident sunlight directly into direct current (DC) electricity via the photovoltaic effect.',
    specifications: [
      'Module Efficiency: 22.4% – 23.2%',
      'Temperature Coefficient: -0.30% / °C',
      'Bifaciality Factor: Up to 80% rear-side gain',
      'Cell Type: 144 half-cut N-type monocrystalline'
    ],
    lifespan: '30 Years Performance Guarantee',
    efficiencyOrRating: 'Tier-1 BloombergNEF Rated',
    engineeringAdvantage: 'Superior low-light generation in early mornings and overcast conditions, with zero Light-Induced Degradation (LID).'
  },
  {
    id: 'tech-inverters',
    name: 'Smart Hybrid & Multi-MPPT String Inverters',
    category: 'Power Conversion',
    role: 'Converts DC power into synchronized AC power, manages grid interaction, and drives battery charging.',
    specifications: [
      'Maximum Conversion Efficiency: 98.8%',
      'Built-in DC Arc Fault Circuit Interrupter (AFCI)',
      'Sub-10ms automatic transfer switch for battery backup',
      'Dual to 12 independent MPPT channels'
    ],
    lifespan: '10 to 15 Years Standard (Extendable to 20)',
    efficiencyOrRating: '98.8% Peak / 98.4% Euro',
    engineeringAdvantage: 'High-frequency switching topology with advanced cloud analytics and remote firmware health monitoring.'
  },
  {
    id: 'tech-battery-storage',
    name: 'Modular Lithium Iron Phosphate (LiFePO4) BESS',
    category: 'Energy Storage',
    role: 'Stores surplus daytime solar power to deliver 24/7 self-sufficiency and immediate emergency backup.',
    specifications: [
      'Cell Chemistry: Cobalt-free LiFePO4 (LFP)',
      'Cycle Life: 6,000+ full cycles to 80% DoD',
      'Round-Trip Efficiency: > 95%',
      'Modular Capacity: 5 kWh to 200+ kWh scalable units'
    ],
    lifespan: '15+ Years Active Design Life',
    efficiencyOrRating: 'IP65 Rated / UL 9540 Certified',
    engineeringAdvantage: 'Inherently thermally stable chemistry with zero risk of thermal runaway, non-toxic, and fully recyclable.'
  },
  {
    id: 'tech-mounting-structures',
    name: 'Engineered Anodized Aluminum & Galvalume Structures',
    category: 'Structural Mechanics',
    role: 'Safely secures solar arrays to roofs or grounds, engineered to endure high wind, thermal expansion, and seismic stresses.',
    specifications: [
      'Material: 6005-T5 Architectural Anodized Aluminum / Hot Dip Galvalume',
      'Wind Speed Rating: Certified up to 180 km/h (50 m/s)',
      'Hardware: 304/316 Stainless Steel anti-corrosion fasteners',
      'Roof Attachment: Non-penetrative standing seam clamps and ballast trays'
    ],
    lifespan: '25+ Years Zero-Corrosion Warranty',
    efficiencyOrRating: 'Structural Wind Tunnel Verified',
    engineeringAdvantage: 'Preserves existing roof warranties with zero water ingress, engineered with aerodynamic wind-deflecting spoilers.'
  },
  {
    id: 'tech-electrical-protection',
    name: 'Smart Bi-Directional Switchgear & SPD Protection',
    category: 'Electrical Safety',
    role: 'Provides comprehensive electrical isolation, surge suppression, lightning arrestors, and net metering synchronization.',
    specifications: [
      'Type-II DC and AC Surge Protection Devices (SPDs)',
      'Bi-directional Class 0.5S four-quadrant energy meters',
      'IP67 weatherproof polycarbonate distribution boxes',
      'Solid copper chemical ground earthing with low soil resistivity'
    ],
    lifespan: '20+ Years Robust Utility Grade',
    efficiencyOrRating: 'IEC 61439 & CEA Compliant',
    engineeringAdvantage: 'Instantaneous isolation protects residential and commercial appliances from grid surges and lightning strikes.'
  },
  {
    id: 'tech-iot-monitoring',
    name: 'IoT Cloud Telemetry & SCADA Management',
    category: 'Digital Intelligence',
    role: 'Provides real-time millisecond telemetry of power generation, irradiance, module temperature, and battery state of charge.',
    specifications: [
      'Connectivity: Wi-Fi, RS485 Modbus, and 4G LTE cellular',
      'Sampling Interval: 10-second data resolution',
      'Smart Alerting: Automated SMS and email fault notifications',
      'Platform: Native iOS, Android, and web portal access'
    ],
    lifespan: 'Continuous Cloud Updates',
    efficiencyOrRating: '99.9% Telemetry Uptime',
    engineeringAdvantage: 'Predictive degradation detection alerts engineers before power losses impact your financial returns.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Solentra engineered a 14.8 kWp hybrid solar and battery installation for our residence. Our electricity bill dropped from over $620 a month down to the basic grid connection fee. When a severe winter storm knocked the local grid down for 36 hours, our home ran uninterrupted without a single flicker.',
    name: 'Marcus Vance',
    role: 'Homeowner & Architectural Designer',
    location: 'Coastal Heights, CA',
    systemSize: '14.8 kWp Hybrid + 20 kWh Battery',
    verifiedSavings: '92% Power Bill Reduction',
    propertyType: 'Residential'
  },
  {
    id: 't-2',
    quote: 'For our pharmaceutical logistics facility, energy reliability is non-negotiable. Solentra completed a 380 kWp commercial installation ahead of schedule with zero disruption to our 24/7 cold storage operations. The system synchronized seamlessly with our backup generators, and the financial ROI is running 12% ahead of initial projections.',
    name: 'Elena Rostova',
    role: 'VP of Operations',
    organization: 'Meridian Pharma Logistics',
    location: 'Austin Tech Corridor, TX',
    systemSize: '380 kWp Commercial Grid-Tied',
    verifiedSavings: '$54,000 Saved Annually',
    propertyType: 'Commercial'
  },
  {
    id: 't-3',
    quote: 'What set Solentra apart was their rigorous engineering approach. They performed non-penetrative clamp testing on our standing seam factory roof to ensure our building warranty remained pristine. Their engineering documentation made DISCOM net metering approval fast and straightforward.',
    name: 'Rajesh Kulkarni',
    role: 'Chief Technical Director',
    organization: 'Apex Precision Engineering',
    location: 'Pacific Industrial Zone',
    systemSize: '850 kWp Industrial Rooftop',
    verifiedSavings: '68% Daytime Load Offset',
    propertyType: 'Industrial'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'basics',
    question: 'How does a rooftop solar photovoltaic system work?',
    answer: 'Rooftop solar panels absorb sunlight via semiconductor cells, creating Direct Current (DC) electricity. This DC electricity flows into a high-efficiency solar inverter, which converts it into clean, synchronized Alternating Current (AC) matching your home or facility voltage. This power runs your lights, appliances, or machinery first. Any excess power is either stored in battery storage systems or fed back into the public utility grid via a bi-directional net meter, which earns you electricity credits.'
  },
  {
    category: 'costs',
    question: 'What size solar system is suitable for my property?',
    answer: 'System sizing is primarily determined by your average monthly kilowatt-hour (kWh) electricity consumption and available unshaded rooftop area. As a rule of thumb, a typical residential home consuming 600–900 kWh/month requires a 5 kWp to 8 kWp system (needing roughly 400 to 650 sq.ft of shadow-free roof). Commercial and industrial facilities are custom-sized to offset their peak daytime operational loads. You can use our interactive Solar Estimator below for an instant indicative capacity recommendation.'
  },
  {
    category: 'technical',
    question: 'What is the real difference between on-grid, off-grid, and hybrid solar?',
    answer: 'On-Grid systems connect directly to the utility grid without batteries; they are the most affordable and earn net metering credits, but automatically shut down during blackouts to protect utility line workers. Off-Grid systems have battery storage and no connection to the utility grid, functioning 100% autonomously. Hybrid systems combine both: they export excess power to the grid when available, but also charge a battery bank and switch seamlessly within 10 milliseconds to supply power during blackouts.'
  },
  {
    category: 'costs',
    question: 'How much rooftop space is required per kilowatt of solar?',
    answer: 'With modern high-efficiency monocrystalline TOPCon panels (yielding 550W–590W per module), you require approximately 70 to 85 square feet of shadow-free rooftop space per 1 kWp of installed capacity. A standard 5 kWp residential system requires around 350–400 sq.ft, while a 100 kWp commercial setup requires roughly 7,000–8,500 sq.ft of usable area.'
  },
  {
    category: 'technical',
    question: 'Do solar panels still generate electricity during cloudy or rainy weather?',
    answer: 'Yes. Solar photovoltaic panels operate on daylight (solar irradiation) rather than direct heat. During overcast or cloudy days, panels continue to capture ambient diffuse solar radiation, typically generating 20% to 40% of their peak rated capacity. Modern N-Type bifacial cells are specially optimized for high low-light sensitivity.'
  },
  {
    category: 'subsidies',
    question: 'Are government solar subsidies and net metering benefits available?',
    answer: 'Yes, depending on your jurisdiction. In many regions, residential rooftop solar installations qualify for direct central and state government capital subsidies (such as the PM Surya Ghar initiative in India offering direct DBT subsidies up to ₹78,000, or the 30% Federal Investment Tax Credit [ITC] in the United States). Commercial and industrial entities typically benefit from accelerated depreciation (e.g. 40%) and green enterprise tax incentives. Solentra manages the complete subsidy filing and net metering documentation on your behalf.'
  },
  {
    category: 'technical',
    question: 'Does installing solar panels cause roof leaks or void my roof warranty?',
    answer: 'When installed by certified solar structural engineers like Solentra, solar installations protect your roof from UV degradation and weather wear rather than damaging it. On metal industrial roofs, we utilize non-penetrative standing seam clamps that require zero drilling. On flat concrete RCC roofs, we utilize aerodynamically ballasted or chemical anchor techniques with multi-layer waterproof membrane seals that maintain full waterproofing integrity.'
  },
  {
    category: 'technical',
    question: 'What kind of maintenance does a solar power system require?',
    answer: 'Solar photovoltaic systems have zero moving parts and are exceptionally durable. The primary ongoing maintenance is periodic de-soiling (cleaning dust and pollen off panel glass with clean water every 2 to 4 weeks depending on local dust conditions) and an annual electrical inspection. Solentra provides automated remote cloud health monitoring and offers structured Annual Maintenance Contracts (AMC) with thermal imaging scans.'
  },
  {
    category: 'costs',
    question: 'How long does a complete rooftop solar installation take from start to finish?',
    answer: 'Physical installation of a residential system typically takes 2 to 4 working days once permits are secured. Commercial installations usually range from 2 to 5 weeks depending on capacity. Permitting, utility interconnection approvals, and bi-directional meter commissioning timelines vary by local DISCOM/utility (typically 10 to 30 business days). We handle the entire liaisoning process end-to-end.'
  },
  {
    category: 'technical',
    question: 'What warranties and performance guarantees are provided?',
    answer: 'Solentra installations carry three tiers of protection: 1) A 25 to 30-year linear power performance warranty from Tier-1 panel manufacturers ensuring at least 84.8% of original output after 25 years; 2) A 10 to 12-year manufacturer product warranty on inverters and lithium storage batteries; 3) A 5-year comprehensive workmanship and installation guarantee directly from Solentra.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'guide-choosing-capacity',
    title: 'How to Accurately Size a Rooftop Solar System for Your Home or Business',
    slug: 'sizing-rooftop-solar-guide',
    category: 'Engineering Guide',
    readTime: '6 min read',
    date: 'February 2026',
    summary: 'A step-by-step breakdown of how solar engineers calculate kilowatt-peak capacity using your electricity consumption curve, roof azimuth, and local peak sun hours.',
    content: [
      'Determining the ideal solar capacity for a property is not simply a matter of covering every square foot of roof with panels. It requires an analytical look at your 12-month electricity consumption profile, utility tariff slabs, and daytime versus nighttime power usage.',
      'Step 1 involves converting your monthly power bill into average daily units (kilowatt-hours). In most sunny regions receiving 4.5 to 5.2 peak sun hours per day, a 1 kWp solar array will reliably generate roughly 4 to 4.5 kWh of clean electricity daily.',
      'Next, shadow profiling is essential. Obstacles such as water tanks, parapet walls, trees, or adjacent structures cast dynamic shadows that change throughout the year. Installing modern half-cut cell panels with bypass diodes ensures that localized shade on one section does not bottleneck the entire string.',
      'Finally, matching your capacity to local net metering regulations avoids overcapitalization. In most territories, utilities cap net-metered rooftop systems at 80% to 100% of your sanctioned contract load. Consulting with an accredited solar engineer ensures your system complies with all local DISCOM connection rules.'
    ]
  },
  {
    id: 'ongrid-vs-offgrid-comparison',
    title: 'On-Grid vs Off-Grid vs Hybrid: Which Solar Architecture Fits Your Needs?',
    slug: 'ongrid-offgrid-hybrid-solar-comparison',
    category: 'System Architecture',
    readTime: '8 min read',
    date: 'January 2026',
    summary: 'Compare capital costs, battery lifespans, grid dependency, and blackout reliability to choose the right solar configuration.',
    content: [
      'Homeowners and business owners are often confused by the terminology surrounding solar setups. While all solar panels convert sunlight into DC electricity, the equipment connected behind those panels determines how your system interacts with the public electrical grid and energy storage.',
      'On-Grid (Grid-Tied) systems are the simplest and most cost-effective. They synchronize with the utility grid and send excess power outward. However, when the grid goes down, on-grid inverters immediately shut down to prevent backfeeding electricity into power lines where repair crews might be working (an essential safety feature known as anti-islanding).',
      'Off-Grid systems operate with zero connection to the utility grid. They rely entirely on solar generation backed by a robust battery storage bank and optional backup generator. While offering total autonomy, off-grid systems require careful energy budgeting and higher upfront investment in battery capacity.',
      'Hybrid Solar systems have emerged as the modern gold standard. They deliver the financial benefit of net-metered grid exporting alongside the peace of mind of battery storage. With ultra-fast automatic transfer switches, a hybrid inverter provides continuous power during blackouts while still keeping your battery topped up from the sun.'
    ]
  },
  {
    id: 'understanding-solar-batteries',
    title: 'Lithium Iron Phosphate (LiFePO4) vs Lead Acid: The Storage Evolution',
    slug: 'solar-battery-storage-chemistry-guide',
    category: 'Battery Storage',
    readTime: '5 min read',
    date: 'December 2025',
    summary: 'Why modern residential and commercial solar installations have transitioned exclusively to non-toxic, 6,000-cycle LiFePO4 chemistry.',
    content: [
      'For decades, energy storage relied on flooded or tubular lead-acid batteries. While inexpensive initially, lead-acid batteries suffer from low cycle lives (800–1,200 cycles), sluggish recharge rates, toxic acid fumes, and a maximum usable depth of discharge of only 50%.',
      'The modern renewable energy transition has been powered by Lithium Iron Phosphate (LiFePO4). With a cycle life exceeding 6,000 cycles, an LFP battery bank lasts 15+ years under daily cycling—matching the lifespan of solar inverters.',
      'Crucially, LiFePO4 chemistry is cobalt-free and non-combustible. It exhibits exceptional thermal stability even under extreme ambient temperatures, making it safe for indoor residential and commercial installations.',
      'Furthermore, 90% usable depth of discharge means you can utilize almost all stored kilowatt-hours without damaging battery cells, resulting in a substantially lower lifetime levelized cost of storage (LCOS).'
    ]
  }
];
