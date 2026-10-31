import { formatVerifiedDate, getYesterdayIstDate } from '../lib/lastVerified';

export default function LastVerified({ variant = 'date', className = '' }) {
  const date = formatVerifiedDate(getYesterdayIstDate());

  if (variant === 'chip') {
    return <span className={`text-xs text-white/50 ${className}`.trim()}>Verified {date} · IST</span>;
  }

  if (variant === 'caption') {
    return (
      <p className={`text-sm text-white/50 ${className}`.trim()}>
        Last verified: {date} (previous day, IST) · live-verified at Scaler NSET checkout
      </p>
    );
  }

  if (variant === 'leads') {
    return (
      <div className={`space-y-2 text-sm text-white/70 leading-relaxed ${className}`.trim()}>
        <p>
          My code <strong className="text-white">ARIYD8B6</strong> was last verified on{' '}
          <strong className="text-white">{date}</strong> against Scaler NSET checkout.
        </p>
        <p>
          <strong className="text-white">ARIYD8B6</strong> — last verified{' '}
          <strong className="text-white">{date}</strong>. Working referral code for ₹600 off.
          Live-verified and actively maintained.
        </p>
      </div>
    );
  }

  return <span className={className}>{date}</span>;
}
