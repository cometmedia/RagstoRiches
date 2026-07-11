export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
  location: string;
  size: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  project: string;
  quote: string;
  rating: number;
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export const SERVICES: ServiceDetail[] = [
  {
    id: "pre-construction",
    title: "Pre-Construction Services",
    subtitle: "Planning & Coordinated Design",
    description: "The most crucial phase where we refine your vision into constructible plans. We handle feasibility studies, zoning approvals, site planning, budgeting, and value engineering so your project is optimized before the ground breaks.",
    features: [
      "Site analysis and zoning studies",
      "Comprehensive architectural coordination",
      "Permit filing and municipal approvals",
      "Detailed bills of quantities (BOQ)",
      "Strict cost estimating and budgeting",
      "Value engineering to optimize investment"
    ],
    image: "/images/pre_construction_planning_1783453890515.jpg"
  },
  {
    id: "grey-structure",
    title: "Grey Structure Construction",
    subtitle: "The Shell & Backbone of Your Home",
    description: "The structural foundation that determines your home's strength, longevity, and insulation. We execute robust grey structure services with zero compromise on steel, cement, brickwork, columns, and RCC slab casting.",
    features: [
      "Seismic-resistant deep footings and foundations",
      "Reinforced Cement Concrete (RCC) columns & beams",
      "Premium blockwork and clay brick walling",
      "Roof and floor slab reinforcement & casting",
      "Sewerage lines and under-floor sanitary prep",
      "Termite proofing and soil compaction"
    ],
    image: "/images/grey_structure_phase_1783453872098.jpg"
  },
  {
    id: "full-construction",
    title: "Finishing & Handover",
    subtitle: "Masterful Turnkey Execution",
    description: "Bringing your structural shell to life with top-tier materials, custom woodwork, flawless electrification, flawless plumbing, premium tile laying, and fine paint detailing. A completely polished handover.",
    features: [
      "Premium floor and wall tile installations",
      "Custom timber woodwork, closets, and kitchens",
      "Precision plumbing fixtures and concealed piping",
      "Concealed electrical wiring, panels, and premium switches",
      "High-grade multi-coat exterior & interior painting",
      "Complete final test and turnkey hand-over"
    ],
    image: "/images/luxury_finishing_details_1783453909295.jpg"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "The Pavilion House",
    category: "Full Turnkey Construction",
    image: "/images/completed_modern_mansion_1783453929340.jpg",
    year: "2025",
    location: "DHA Phase 6, Lahore",
    size: "6,400 SQ FT",
    description: "A breathtaking completed custom residence designed with massive steel framing, floor-to-ceiling glass pavilions, and custom textured concrete finishes."
  },
  {
    id: "proj-2",
    title: "The Timberline Estate",
    category: "Pre-Construction & Build",
    image: "/images/hero_luxury_home_1783453853144.jpg",
    year: "2025",
    location: "Sector E-7, Islamabad",
    size: "7,200 SQ FT",
    description: "An elegant home highlighting architectural timber cladding, a floating concrete pool deck, and luxury minimalist design."
  },
  {
    id: "proj-3",
    title: "The Crestwood structure",
    category: "Grey Structure Phase",
    image: "/images/grey_structure_phase_1783453872098.jpg",
    year: "2026",
    location: "Clifton Block 4, Karachi",
    size: "5,800 SQ FT",
    description: "A showcase of raw structural craftsmanship: flawless seismic footing, high-grade brick masonry, and thick-cast RCC slabs."
  },
  {
    id: "proj-4",
    title: "The Vista Residence",
    category: "Full Turnkey Construction",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    year: "2024",
    location: "Bahria Town, Islamabad",
    size: "5,100 SQ FT",
    description: "A high-contrast luxury modern home nestled on a hillside, emphasizing dramatic cantilevered decks and bespoke interior finishing."
  },
  {
    id: "proj-5",
    title: "The Atrium Villa",
    category: "Finishing Services",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    year: "2024",
    location: "Gulberg III, Lahore",
    size: "4,900 SQ FT",
    description: "An indoor-outdoor luxury build centered around a Japanese maple atrium, highlighting plaster wall finishes and micro-cement floors."
  },
  {
    id: "proj-6",
    title: "The Concrete Monolith",
    category: "Grey Structure Phase",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    year: "2026",
    location: "Karsaz, Karachi",
    size: "8,500 SQ FT",
    description: "A monumental board-formed concrete structure, showcasing our mastery of high-complexity geometric concrete forming and massive spans."
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: "01",
    title: "Superior Quality",
    description: "We build strictly to premium codes with certified materials and hands-on site audits. Every batch of concrete, brick, and rebar is double-verified to ensure lifelong structural integrity."
  },
  {
    id: "02",
    title: "End-to-End Management",
    description: "We orchestrate every phase from architectural coordination, permitting, and grey structure framework up to custom carpentry and turnkey delivery. One point of contact, zero miscommunications."
  },
  {
    id: "03",
    title: "Comprehensive Support",
    description: "Our client relationship extends far past handover. We provide detailed structural logs, preventative maintenance guides, and direct warranty support on finishes and installations."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    author: "Tariq & Ayesha Rahman",
    project: "The Pavilion House (6,400 SQ FT)",
    quote: "Building our home was a massive life decision. Rags to Riches Builders handled everything with incredible rigor. Their grey structure team laid down a foundation that looked like a commercial monument, and the final finishes are impeccable.",
    rating: 5
  },
  {
    id: "test-2",
    author: "Engr. Khalid Mahmood",
    project: "Crestwood Structure (Grey Structure Phase)",
    quote: "As a civil engineer, I was highly skeptical of hiring local home builders. I monitored their steel rebar density, concrete cylinder tests, and brick alignment daily. They exceeded all local structural guidelines. True professionals.",
    rating: 5
  },
  {
    id: "test-3",
    author: "Zainab Malik",
    project: "The Atrium Villa (Finishing & Woodwork)",
    quote: "We had a half-completed structure left by another builder. Rags to Riches came in, audited the site, fixed the damp proofing, and crafted our dream interiors. Their wood paneling and marble tiling are pure works of art.",
    rating: 5
  },
  {
    id: "test-4",
    author: "Fahad & Sana Ali",
    project: "The Southern Colonial (7,200 SQ FT)",
    quote: "The level of communication was outstanding. From structural design to layout optimization, they kept us in the loop every step of the way. Their focus on structural rigidity and aesthetic finesse is unparalleled.",
    rating: 5
  },
  {
    id: "test-5",
    author: "Dr. Hina Khan",
    project: "French Country Manor (5,800 SQ FT)",
    quote: "The attention to detail during the interior finishing stage was stellar. Rags to Riches Builders brought our vision of a French Country kitchen and living room to life. The millwork is pristine and every single surface is flawless.",
    rating: 5
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation & Budgeting",
    description: "Aligning architectural visions with a transparent budget blueprint.",
    details: [
      "Review client drawings or collaborate with our design partners",
      "Site visit to evaluate soil condition, grading, and structural parameters",
      "Draft a meticulous Bill of Quantities (BOQ) detailing cost materials",
      "Establish a firm baseline cost per square foot, eliminating surprise charges"
    ]
  },
  {
    step: "02",
    title: "Permitting & Site Prep",
    description: "Securing approvals and setting a flawless physical baseline.",
    details: [
      "File complete engineering and structural files for local approvals",
      "Clear, grade, and excavate the plot to match precise contour lines",
      "Erect layout profiles (dori-basti) checked against laser GPS for perfect squareness",
      "Pour concrete mud slab to shield reinforcing steel from ground soil"
    ]
  },
  {
    step: "03",
    title: "Grey Structure Framework",
    description: "Forging the steel and stone core of your legacy estate.",
    details: [
      "Erect high-density Grade 60 steel rebar footings and tie-beams",
      "Cast ultra-strong column networks with high-resistance concrete mixes",
      "Construct premium clay brick or concrete block load-bearing walls",
      "Form, support, and cast massive RCC floor and roof slabs",
      "Incorporate robust water-proofing barriers (Damp Proof Course) on all plinths"
    ]
  },
  {
    step: "04",
    title: "MEP & Finishing Work",
    description: "Infusing comfort, technology, and stunning visual art.",
    details: [
      "Install concealed high-performance plumbing and concealed conduits",
      "Run fire-resistant electrical wiring (polyethylene conduits) throughout slabs",
      "Apply triple-coat plaster and high-build base coat to masonry surfaces",
      "Lay premium Italian marble, heavy vitrified tile, or timber flooring",
      "Fit luxury custom doors, bespoke cabinetry, and glass curtain walls"
    ]
  },
  {
    step: "05",
    title: "Handover & Structural Logbook",
    description: "Delivering a spotless turnkey home with full documentation.",
    details: [
      "Perform a full-spectrum deep clean and mechanical check-out",
      "Walkthrough room-by-room with the client for detail verification",
      "Hand over the keys alongside a comprehensive 'As-Built' logbook",
      "Activate our dedicated structural and material finish warranties"
    ]
  }
];
