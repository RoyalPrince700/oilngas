export interface Service {
  id: string
  title: string
  short: string
  description: string
  points: string[]
  image: string
}

export const services: Service[] = [
  {
    id: 'pipeline-storage',
    title: 'Onshore Pipeline & Storage Facilities',
    short:
      'Development and support of onshore pipeline storage facilities located in, on or under any land of the state, other than submerged land.',
    description:
      'We support onshore pipeline and storage facilities on land, outside submerged areas. Teams deliver safe, compliant infrastructure support for operators working across global upstream and midstream networks.',
    points: [
      'Onshore pipeline support services',
      'Petroleum product storage infrastructure',
      'Safety and regulatory compliance',
      'Tank farm and terminal support',
    ],
    image: '/images/storage-tanks.jpg',
  },
  {
    id: 'facility-maintenance',
    title: 'Facility Maintenance',
    short:
      'Maintenance planning, execution and supervision performed in strict compliance to quality plans and service specifications.',
    description:
      'Our maintenance teams keep critical oil and gas assets running at peak performance. Maintenance planning, execution and supervision are performed in strict compliance to quality plans and service specifications — protecting uptime, safety and asset value.',
    points: [
      'Maintenance planning and scheduling',
      'Execution and supervision to quality plans',
      'Preventive and corrective maintenance',
      'Strict HSE and quality compliance',
    ],
    image: '/images/pipeline1.jpg',
  },
  {
    id: 'manpower-training',
    title: 'Specialized Manpower & Training',
    short:
      'Specialized manpower provisions and specialized training programmes for the oil, gas, marine and energy industry.',
    description:
      'We supply competent, certified personnel to upstream, midstream and downstream operations, and deliver specialized training for crews working to international standards. Placements are matched to the region, the asset and the operator’s procedures.',
    points: [
      'Specialized manpower provisions',
      'Specialized industry training',
      'Local and foreign expertise',
      'Certified, safety-conscious personnel',
    ],
    image: '/images/workers.jpg',
  },
  {
    id: 'asset-buyback',
    title: 'Asset Buy-Back & Materials Recovery',
    short:
      'Asset buy-back, share buyback, and recovery of materials declared obsolete, junks, disused or no longer required by oil and gas operators.',
    description:
      'We create value from redundant assets: asset buy-back, share buyback, and the purchase of materials declared obsolete, junks, disused or no longer required by oil and gas operators. We manage valuation, recovery and offtake responsibly and transparently.',
    points: [
      'Asset buy-back and share buyback',
      'Obsolete and disused materials offtake',
      'Transparent valuation and recovery',
      'Responsible decommissioning support',
    ],
    image: '/images/logistics.jpg',
  },
  {
    id: 'downstream-midstream',
    title: 'Downstream & Midstream Supply',
    short:
      'Your trusted Diesel (AGO) supplier and PMS at the best price — dependable fuel supply for businesses and consumers.',
    description:
      'Meridian supplies diesel (AGO) and petrol (PMS) for industrial, commercial and retail customers. From bulk movements to scheduled delivery, we keep operations powered with quality petroleum products across the downstream and midstream chain.',
    points: [
      'Trusted Diesel (AGO) supply',
      'PMS (petrol) at the best price',
      'Bulk and consumer-level delivery',
      'Quality-assured petroleum products',
    ],
    image: '/images/fuel-station.jpg',
  },
  {
    id: 'lpg-retail',
    title: 'LPG Retail & Distribution',
    short:
      'LPG retail outlets and final consumer supply — safe, clean cooking and industrial gas where it is needed.',
    description:
      'We operate LPG retail outlets and supply final consumers with safe, clean liquefied petroleum gas. Our distribution network brings reliable cooking and industrial gas closer to homes and businesses.',
    points: [
      'LPG retail outlets',
      'Final consumer supply',
      'Safe handling and distribution',
      'Reliable availability',
    ],
    image: '/images/lpg.jpg',
  },
]

export const companyInfo = {
  name: 'Meridian Global Energy',
  fullName: 'Meridian Global Energy',
  tagline: 'Oil, Gas & Energy Services',
  phones: [{ display: '+1 (555) 010-0140', href: 'tel:+15550100140' }],
  email: 'hello@meridianglobal.example',
  emailHref: 'mailto:hello@meridianglobal.example',
  emails: [
    { display: 'hello@meridianglobal.example', href: 'mailto:hello@meridianglobal.example' },
  ],
  website: 'meridianglobal.example',
  address: 'Sample headquarters — demonstration website',
  regions: [
    { name: 'Americas', city: 'Houston' },
    { name: 'Europe', city: 'London' },
    { name: 'Middle East', city: 'Dubai' },
    { name: 'Africa', city: 'Lagos' },
    { name: 'Asia-Pacific', city: 'Singapore' },
  ],
}
