import './Input.css';

export default function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  ...props
}) {
  return (
    <div className={`form-group ${className}`}>
      {label && <label className="form-label">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form-input"
        {...props}
      />
    </div>
  );
}

export function TextArea({ label, placeholder, rows = 4, className = '', ...props }) {
  return (
    <div className={`form-group ${className}`}>
      {label && <label className="form-label">{label}</label>}
      <textarea
        placeholder={placeholder}
        rows={rows}
        className="form-input form-textarea"
        {...props}
      />
    </div>
  );
}
