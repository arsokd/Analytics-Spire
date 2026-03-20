
import { ServiceItem, VideoItem } from './types';

// HOW TO USE GOOGLE SHEETS AS THE DATABASE:
// 1. Open Google Sheets (https://sheets.google.com)
// 2. Create a new sheet named "Analytics Spire Database"
// 3. Create tabs named "Services", "Users", "Events", "Videos"
// 4. Fill in the columns as defined in the constants.ts file
// 5. Go to File > Share > Publish to the web
// 6. Select "Entire Document" and "Comma-separated values (.csv)"
// 7. Copy the link and paste it in the services/googleSheets.ts file

export const COMPANY_NAME = "Analytics Spire";
export const FOUNDER_NAME = "Anand Rengasamy";
export const CONTACT_EMAIL = "ars.okd@gmail.com";

export const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Media', path: '/media' },
  { name: 'Events', path: '/events' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: '1',
    title: 'Business Analytics',
    category: 'Analytics',
    description: 'Bridging the gaps through data-driven solutions and market insight validation.',
    iconName: 'BarChart',
    details: [
      'Analyzing Business & Market Insights',
      'Validating Hypothesis through Market Research',
      'Identifying and Bridging Operational Gaps',
      'Data-Driven Decision Making'
    ]
  },
  {
    id: '2',
    title: 'Business Automation',
    category: 'Technology',
    description: 'Digitalizing business operations and creating dynamic, interactive dashboards for quantifiable output.',
    iconName: 'Cpu',
    details: [
      'Setting Business Operation Processes',
      'Digitalizing Business Operations',
      'Dynamic & Interactive Dashboards',
      'Quantifiable Output Measurement'
    ]
  },
  {
    id: '3',
    title: 'Strategic Marketing',
    category: 'Growth',
    description: 'Comprehensive market research, brand management, and strategic digital marketing advice.',
    iconName: 'Megaphone',
    details: [
      'Market Research & Analysis',
      'Strategic Planning',
      'Digital Marketing Advisory',
      'Brand Management'
    ]
  },
  {
    id: '4',
    title: 'Operational Excellence',
    category: 'Operations',
    description: 'Optimizing supply chains and processes through technology integration and waste reduction.',
    iconName: 'Settings',
    details: [
      'Process Optimization',
      'Supply Chain Management',
      'Quality Management Systems',
      'Cost Management through Waste Reduction'
    ]
  },
  {
    id: '5',
    title: 'Finance Management',
    category: 'Finance',
    description: 'Advanced financial modelling, budgeting, and cash flow management for informed scaling.',
    iconName: 'TrendingUp',
    details: [
      'Budgeting, Planning & Forecasting',
      'Cash Flow Management',
      'Financial Reporting & Modelling',
      'Interactive Financial Dashboards'
    ]
  }
];

export const EVENTS_DATA = [
  {
    id: 1,
    title: "MSME Digital Transformation Summit",
    date: "August 2024",
    location: "Chennai Trade Centre",
    description: "Keynote address on leveraging AI for small business growth, attended by over 200 industry leaders.",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Financial Literacy Workshop for Manufacturers",
    date: "June 2024",
    location: "Coimbatore",
    description: "A hands-on workshop helping manufacturing unit owners understand balance sheets and cash flow management strategies.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Strategic Consulting Panel: Automotive Future",
    date: "March 2024",
    location: "Pune",
    description: "Lead panel discussion on the future of automotive supply chains and dealer network optimization in the EV era.",
    image: "https://images.unsplash.com/photo-1559223607-a43c990ed9aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
   {
    id: 4,
    title: "Agri-Tech Process Optimization Drive",
    date: "January 2024",
    location: "Hyderabad",
    description: "Consulting engagement with leading Agri-tech firms to streamline operations and field data collection.",
    image: "https://images.unsplash.com/photo-1625246333195-f819618bba1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: '1',
    title: 'The Future of MSME in India',
    category: 'Podcast',
    description: 'Anand discusses the changing landscape of small business in India and the role of digital adoption.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4'
  },
  {
    id: '2',
    title: 'Understanding Balance Sheets',
    category: 'Training',
    description: 'A 10-minute crash course on reading financial statements for non-financial founders.',
    youtubeUrl: 'https://www.youtube.com/watch?v=yY1rC3d3l0k'
  },
  {
    id: '3',
    title: 'AI Tools for Everyday Business',
    category: 'Training',
    description: 'Practical demonstration of how GenAI can automate email responses and basic reporting.',
    youtubeUrl: 'https://www.youtube.com/watch?v=5NgNicANyqM'
  }
];

export const PROFESSIONAL_BRANDS = [
  { name: 'BMW', logo: 'https://lh3.googleusercontent.com/d/1lkFjVLDB7DK0h8bzOC_o-A0R4hrtWMIS' },
  { name: 'Caterpillar', logo: 'https://lh3.googleusercontent.com/d/17XyjHr_7Edq_YAx2En4maLtD_Qsp-ix3' },
  { name: 'Claas', logo: 'https://lh3.googleusercontent.com/d/1YzhcuMByl5NOXqYr5BoaEuvxa0CXbetT' },
  { name: 'CNH', logo: 'https://lh3.googleusercontent.com/d/1vWv7o5Us6nHdPisI7mY5syBsXHQ-WjDy' },
  { name: 'Escorts - Kubota', logo: 'https://lh3.googleusercontent.com/d/1IGRFphw8NIfeq5WY_RKMfvmSul0-xz-Z' },
  { name: 'GMMCO', logo: 'https://lh3.googleusercontent.com/d/1U-I_q2uzG8U6PlyhWlUMLFMOPQob4f2k' },
  { name: 'M&M', logo: 'https://lh3.googleusercontent.com/d/1rFT_zPsGNJspZ_44eMid0-CtvPoadlOb' },
  { name: 'Rane TRW', logo: 'https://lh3.googleusercontent.com/d/1klJEx42v9iLPeXwON3n7ogfHuGL1Cj0y' },
  { name: 'Sonalika', logo: 'https://lh3.googleusercontent.com/d/1rIEix77Fz0-eyFGcaOAFnHu5Yu7DQYir' },
  { name: 'TAFE', logo: 'https://lh3.googleusercontent.com/d/1BodYf6LQ0sTMy1tU2G7EjBvmig--XD3b' },
  { name: 'TVS', logo: 'https://lh3.googleusercontent.com/d/15gn-wcgSKIa5NdEL0dKC4aZNUg2Xj6Tk' },
  { name: 'Vasaantham Traders', logo: 'https://lh3.googleusercontent.com/d/1D7SLAfr2AOruwq4y6aeb-xHdYkFsCSgp' }
];

export const BUSINESS_ASSOCIATIONS = {
  throughFocus: [
    { name: 'BMW', logo: 'https://lh3.googleusercontent.com/d/1lkFjVLDB7DK0h8bzOC_o-A0R4hrtWMIS' },
    { name: 'TVS', logo: 'https://lh3.googleusercontent.com/d/15gn-wcgSKIa5NdEL0dKC4aZNUg2Xj6Tk' }
  ],
  throughAH: [
    { name: 'Mahindra', logo: 'https://lh3.googleusercontent.com/d/1rFT_zPsGNJspZ_44eMid0-CtvPoadlOb' }
  ],
  direct: [
    { name: 'Amtrex (Dubai)', logo: 'https://lh3.googleusercontent.com/d/1Ep9gWS9CGtkJpb_AZ1OuYdqRO747ENA4' },
    { name: 'CNH Industrial', logo: 'https://lh3.googleusercontent.com/d/1vWv7o5Us6nHdPisI7mY5syBsXHQ-WjDy' },
    { name: 'Vasaantham Traders', logo: 'https://lh3.googleusercontent.com/d/1D7SLAfr2AOruwq4y6aeb-xHdYkFsCSgp' }
  ]
};

export const TOOLS = [
  'IBM SPSS', 'Excel', 'Looker Studio', 'SPSS Modeler', 'Power BI', 'Python', 'R Studio', 'Machine Learning', 'Google Workspace'
];

export const VALUES = [
  { title: "Innovation", text: "Embracing cutting-edge technologies including AI & ML." },
  { title: "Integrity", text: "Upholding highest standards of ethics and transparency." },
  { title: "Client-Centricity", text: "Tailoring services to meet unique client needs." },
  { title: "Affordability", text: "Top-tier services accessible to MSMEs." },
  { title: "Data-Driven", text: "Empowering clients with informed decision-making." },
  { title: "Confidentiality", text: "Strict adherence to NDAs." },
];
