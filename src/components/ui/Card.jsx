import './Card.css';

export default function Card({ children, title, description, className = '', ...props }) {
  return (
    <div className={`card ${className}`} {...props}>
      {(title || description) && (
        <div className="card-header">
          {title && <h3 className="card-title heading-sm">{title}</h3>}
          {description && <p className="card-description">{description}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
