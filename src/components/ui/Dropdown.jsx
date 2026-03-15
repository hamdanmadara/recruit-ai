import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import './Dropdown.css';

export default function Dropdown({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select...',
  icon,
  size = 'md',
  className = '',
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div className={`dropdown-field ${className}`} ref={ref}>
      {label && <label className="form-label">{label}</label>}
      <button
        type="button"
        className={`dropdown-trigger dropdown-${size} ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        {icon && <span className="dropdown-trigger-icon">{icon}</span>}
        <span className={`dropdown-value ${!selected ? 'placeholder' : ''}`}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown size={14} className={`dropdown-chevron ${open ? 'rotated' : ''}`} />
      </button>
      {open && (
        <div className="dropdown-popover">
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`dropdown-option ${opt.value === value ? 'selected' : ''}`}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              <span>{opt.label}</span>
              {opt.value === value && <Check size={14} className="dropdown-check" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
