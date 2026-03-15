import './Avatar.css';

export default function Avatar({
  initials,
  size = 'md',
  variant = 'gradient',
  className = '',
}) {
  return (
    <div className={`avatar avatar-${size} avatar-${variant} ${className}`}>
      {initials}
    </div>
  );
}
