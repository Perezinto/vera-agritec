export interface Partner {
  name: string;
  role: string;
  logo: string;
}

export const PARTNERS: Partner[] = [
  { name: 'Agro Preciso', role: 'Precision Agriculture Partner', logo: '/partners/agro-preciso.png' },
  { name: 'Sterling Bank', role: 'Agric Finance Partner', logo: '/partners/sterling-bank.png' },
  { name: 'SMEDAN', role: 'Enterprise Development', logo: '/partners/smedan.svg' },
  { name: 'Rex Insurance', role: 'Agricultural Underwriting', logo: '/partners/rex-insurance.svg' },
  { name: 'IFAD', role: 'Development Partner', logo: '/partners/ifad.png' },
];
