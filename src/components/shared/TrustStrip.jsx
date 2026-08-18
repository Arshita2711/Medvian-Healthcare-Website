import { MedalIcon, PartnerIcon, QuantityIcon, ShieldIcon } from '../icons/SiteIcons'

function TrustStrip({ className = '' }) {
  const items = [
    { title: 'Quality', label: 'Assured', Icon: MedalIcon },
    { title: 'Quantity', label: 'Bulk', Icon: QuantityIcon },
    { title: 'Trust', label: 'Secure', Icon: ShieldIcon },
    { title: 'Service', label: '24/7', Icon: PartnerIcon },
  ]

  return (
    <div
      className={['trust-strip', className].filter(Boolean).join(' ')}
      aria-label="Quality quantity trust service badges"
    >
      {items.map(({ title, label, Icon }) => (
        <div className="trust-item" key={title}>
          <Icon />
          <strong>{title}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

export default TrustStrip
