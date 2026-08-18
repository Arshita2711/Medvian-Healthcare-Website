import {
  ShieldIcon,
  MedalIcon,
  PartnerIcon,
  FacilityIcon,
  GrowthIcon,
  ClientsIcon,
  TargetIcon,
  ProductShieldCheckIcon,
  ProductBoxIcon,
  ProductPulseIcon,
  ProductCareIcon,
  ProductSafetyIcon,
  WhyQualityIcon,
  WhyTrustedIcon,
  WhyInnovationIcon,
  WhyAvailabilityIcon,
  WhyRangeIcon,
  WhySupportIcon,
  ContactLocationIcon,
  ContactPhoneIcon,
  ContactEmailIcon,
  ContactClockIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
} from '../components/icons/SiteIcons'
import latexSurgicalImage from '../assets/products/Latex Surgical Gloves.jpg'
import shortVinylImage from '../assets/products/Short Vinyl Gloves.jpg'
import nitrileLongImage from '../assets/products/Nitrile Long Gloves.jpg'
import nitrileNonPowderedImage from '../assets/products/Nitrile Non-Powdered Gloves.jpg'
import heavyDutyRubberImage from '../assets/products/Long Heavy-duty Rubber Gloves.jpg'

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Contact', href: '/contact' },
]

export const heroContent = {
  badge: 'MEDVIAN HEALTH CARE',
  title: {
    leading: 'Your Trusted',
    highlight: 'Healthcare Partner',
  },
  /*description:
    'Leading supplier of premium medical products and solutions to hospitals, pharmaceutical, and biotech industries. Committed to safer and healthier living.',*/
  primaryAction: {
    label: 'Explore Products',
    href: '/products',
  },
  secondaryAction: {
    label: 'Contact Us',
    href: '/contact',
  },
}

export const headerContact = {
  email: 'info@medvianhealthcare.com',
  phone: '+91 9177770584',
}

export const heroMediaItems = [
  {
    tag: 'Latex Surgical',
    title: 'Safety Care - Latex Surgical Gloves',
    imageSrc: latexSurgicalImage,
    imageAlt: 'Safety Care latex surgical gloves',
  },
  {
    tag: 'Vinyl',
    title: 'Short Vinyl Gloves',
    imageSrc: shortVinylImage,
    imageAlt: 'Short vinyl gloves',
  },
  {
    tag: 'Extended Nitrile',
    title: 'Nitrile Long Gloves',
    imageSrc: nitrileLongImage,
    imageAlt: 'Nitrile long gloves',
  },
  {
    tag: 'Nitrile Exam',
    title: 'Nitrile Non-Powdered Gloves',
    imageSrc: nitrileNonPowderedImage,
    imageAlt: 'Nitrile non-powdered gloves',
  },
]

export const trustItems = [
  { title: 'ISO', label: 'Certified', Icon: ShieldIcon },
  { title: 'Premium', label: 'Quality', Icon: MedalIcon },
  { title: 'Trusted', label: 'Partner', Icon: PartnerIcon },
]

export const aboutContent = {
  kicker: 'ABOUT US',
  title: 'About MEDVIAN Health Care',
  subtitle: 'Leading Healthcare Solutions Provider',
  Icon: FacilityIcon,
  paragraphs: [
    'MEDVIAN Health Care is a standout amongst the most-trusted organization and providers to the Hospitals, pharmaceutical, biotech and determined markets. MEDVIAN Health Care outfits science and innovation to make items that help more secure and more advantageous living and that improve the general personal satisfaction.',
    'A coordinated arrangements supplier serving the Industries and social insurance part, MEDVIAN Health Care offers products and services from the custom advancement and assembling of dynamic pharmaceutical fixings to creative measurement shapes for the Hospitals, Pharma and Consumer wellbeing and sustenance businesses.',
  ],
  certificatePlaceholder: 'ISO Image',
}

export const aboutStats = [
  { value: '12+', label: 'Yrs Experience', Icon: GrowthIcon },
  { value: '500+', label: 'Happy Clients', Icon: ClientsIcon },
  { value: '100+', label: 'Products Range', Icon: TargetIcon },
  { value: '24/7', label: 'Service Available', Icon: FacilityIcon, featured: true },
]

export const productsContent = {
  kicker: 'OUR PRODUCTS',
  title: 'Protective Gloves & Non Woven Products Range',
  description:
    'Comprehensive range of protective gloves and Non Woven Products products designed for healthcare, examination, and industrial applications.',
}

export const productItems = [
  {
    tag: 'Latex Surgical',
    title: 'Safety Care - Latex Surgical Gloves',
    imageSrc: latexSurgicalImage,
    imageAlt: 'Safety Care latex surgical gloves',
    description:
      'Natural rubber latex gloves with tactile sensitivity, micro-textured grip, beaded cuff, and clean-room readiness.',
    Icon: ProductShieldCheckIcon,
  },
  {
    tag: 'Vinyl',
    title: 'Short Vinyl Gloves',
    imageSrc: shortVinylImage,
    imageAlt: 'Short vinyl gloves',
    description:
      'A latex-free glove option for light-duty protection while handling dyes, paints, and everyday utility work.',
    Icon: ProductBoxIcon,
  },
  {
    tag: 'Extended Nitrile',
    title: 'Nitrile Long Gloves',
    imageSrc: nitrileLongImage,
    imageAlt: 'Nitrile long gloves',
    description:
      '100% nitrile exam gloves with 12-inch coverage, textured grip, powder-free finish, and thicker barrier protection.',
    Icon: ProductPulseIcon,
  },
  {
    tag: 'Nitrile Exam',
    title: 'Nitrile Non-Powdered Gloves',
    imageSrc: nitrileNonPowderedImage,
    imageAlt: 'Nitrile non-powdered gloves',
    description:
      'Soft 100% blue nitrile exam gloves with beaded cuff, micro-textured finish, and non-powdered medical-grade protection.',
    Icon: ProductCareIcon,
  },
  {
    tag: 'Heavy Duty',
    title: 'Long Heavy-duty Rubber Gloves',
    imageSrc: heavyDutyRubberImage,
    imageAlt: 'Long heavy-duty rubber gloves',
    description:
      'Long industrial-strength rubber gloves built for stronger barrier protection in demanding work conditions.',
    Icon: ProductSafetyIcon,
  },
  {
    tag: 'Adult Diapers',
    title: 'Adult Diapers',
    imageSrc: '/products/non-woven/adult-diapers.jpeg',
    imageAlt: 'Adult diapers',
    description:
      'Absorbent adult diapers built for comfort, leak protection, and dependable day-to-day hygiene support.',
    Icon: ProductCareIcon,
  },
  {
    tag: 'Sanitary Pads',
    title: 'Sanitary Pads',
    imageSrc: '/products/non-woven/under-pads.jpeg',
    imageAlt: 'Sanitary pads',
    description:
      'Comfort-focused sanitary pads designed for everyday protection, absorbency, and skin-friendly use.',
    Icon: ProductCareIcon,
  },
  {
    tag: 'Non Woven Products',
    title: 'Gowns',
    imageSrc: '/products/non-woven/gowns.jpeg',
    imageAlt: 'Medical gowns',
    description:
      'Non woven medical gowns offering protective coverage for hospital, clinic, and laboratory environments.',
    Icon: ProductShieldCheckIcon,
  },
  {
    tag: 'Non Woven Products',
    title: 'Head Caps',
    imageSrc: '/products/non-woven/head-caps.jpeg',
    imageAlt: 'Disposable head caps',
    description:
      'Disposable non woven head caps designed for hygiene, containment, and clean-area compliance.',
    Icon: ProductBoxIcon,
  },
  {
    tag: 'Non Woven Products',
    title: 'PPE Kit',
    imageSrc: '/products/non-woven/ppe-kit.jpeg',
    imageAlt: 'Personal protective equipment kit',
    description:
      'Complete PPE kits for comprehensive personal protection in clinical and high-risk handling settings.',
    Icon: ProductPulseIcon,
  },
  {
    tag: 'Surgical Diapers',
    title: 'Surgical Diapers',
    imageSrc: '/products/non-woven/surgical-diapers.jpeg',
    imageAlt: 'Surgical drape and diaper products',
    description:
      'Surgical-grade disposable drape and diaper solutions for sterile procedures and patient safety workflows.',
    Icon: ProductSafetyIcon,
  },
  {
    tag: 'IV Sets & Injectible products',
    title: 'Syringes',
    imageSrc: '/products/non-woven/syringes.jpeg',
    imageAlt: 'Disposable syringes',
    description:
      'Reliable sterile syringes for precise dosing, smooth handling, and dependable medical-use performance.',
    Icon: ProductCareIcon,
  },
  {
    tag: 'Non Woven Products',
    title: 'Drapes',
    imageSrc: '/products/non-woven/under-pads.jpeg',
    imageAlt: 'Disposable under pads',
    description:
      'Soft absorbent under pads that help maintain cleanliness and patient comfort in care settings.',
    Icon: ProductBoxIcon,
  },
]

export const featuredProductItems = productItems.slice(0, 5)

export const whyChooseContent = {
  kicker: 'WHY CHOOSE US',
  title: 'Your Trusted Healthcare Partner',
  description:
    'We stand out in the healthcare industry with our commitment to quality, innovation, and customer satisfaction',
}

export const whyChooseItems = [
  {
    title: 'ISO Certified Quality',
    description:
      'All our products meet international quality standards and are ISO certified for your peace of mind.',
    Icon: WhyQualityIcon,
  },
  {
    title: 'Trusted by Healthcare Leaders',
    description:
      'Serving top hospitals, pharmaceutical companies, and biotech firms with reliable medical supplies.',
    Icon: WhyTrustedIcon,
  },
  {
    title: 'Innovation Driven',
    description:
      'Leveraging science and technology to create products that support safer and healthier living.',
    Icon: WhyInnovationIcon,
  },
  {
    title: '24/7 Availability',
    description:
      'Round-the-clock service and support to meet your urgent healthcare needs anytime.',
    Icon: WhyAvailabilityIcon,
  },
  {
    title: 'Comprehensive Range',
    description:
      'Focused glove range covering latex surgical, vinyl, nitrile, and heavy-duty protective options.',
    Icon: WhyRangeIcon,
  },
  {
    title: 'Dedicated Support',
    description:
      'Expert team ready to assist with product selection, custom orders, and technical guidance.',
    Icon: WhySupportIcon,
  },
]

export const contactContent = {
  kicker: 'CONTACT US',
  title: 'Get In Touch',
  description:
    "Have questions about our products or services? We're here to help you with expert guidance",
  formTitle: 'Send Us a Message',
}

export const contactInfoItems = [
  {
    title: 'Our Location',
    Icon: ContactLocationIcon,
    entries: [
      { text: 'Hyderabad, Telangana. 500004', featured: true },
    ],
  },
  {
    title: 'Phone Numbers',
    Icon: ContactPhoneIcon,
    entries: [
      { text: '+91 9177770584', href: 'tel:+919177770584', featured: true },
    ],
  },
  {
    title: 'Email Address',
    Icon: ContactEmailIcon,
    entries: [
      {
        text: 'info@medvianhealthcare.com',
        href: 'mailto:info@medvianhealthcare.com',
        featured: true,
      },
    ],
  },
  {
    title: 'Working Hours',
    Icon: ContactClockIcon,
    entries: [
      { text: '24/7 Service Available', featured: true },
      { text: 'All Days of the Week', featured: true },
    ],
  },
]

export const footerContent = {
  description:
    'Your trusted partner in healthcare solutions. Providing quality medical products and services to hospitals, pharmaceutical, and biotech industries.',
  copyright: '\u00A9 2026 MEDVIAN Health Care. All rights reserved.',
}

export const footerContactItems = [
  {
    text: 'Hyderabad, Telangana. 500004',
    Icon: ContactLocationIcon,
  },
  {
    text: '+91 9177770584',
    href: 'tel:+919177770584',
    Icon: ContactPhoneIcon,
  },
  {
    text: 'info@medvianhealthcare.com',
    href: 'mailto:info@medvianhealthcare.com',
    Icon: ContactEmailIcon,
  },
]

export const footerCompanyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Contact', href: '/contact' },
]

export const footerProductLinks = [
  { label: 'Vinyl Gloves', href: '/products#vinyl-gloves' },
  { label: 'Nitrile Examination Gloves', href: '/products#nitrile-examination-gloves' },
  { label: 'Adult Diapers', href: '/products#adult-diapers' },
  { label: 'Sanitary Pads', href: '/products#sanitary-pads' },
]

export const footerSupportLinks = [
  { label: 'Customer Service', href: '/contact' },
  { label: 'Product Inquiry', href: '/contact' },
  { label: 'Custom Orders', href: '/contact' },
  { label: 'Technical Support', href: '/contact' },
]

export const footerLegalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Payment Policy', href: '/payment' },
  { label: 'Terms and Conditions', href: '/terms' },
]

export const footerSocialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61565862886084', Icon: FacebookIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/med.vianhealthcare/', Icon: InstagramIcon },
  { label: 'Twitter', href: 'https://x.com/MedvianCare', Icon: TwitterIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/medvian-health-care-645b08404/', Icon: LinkedInIcon },

]
