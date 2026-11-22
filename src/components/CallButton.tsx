interface CallButtonProps {
  phone?: string;
  className?: string;
}

export default function CallButton({
  phone = "01204746971",
  className = "",
}: CallButtonProps) {
  return (
    <a
      href={`tel:${phone}`}
      className={`call-btn-container ${className}`}
      aria-label={`اتصل بنا الآن ${phone}`}
    >
      <span className="call-icon-circle">
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="none"
          stroke="#15803d"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="call-phone-svg"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </span>
      <span className="call-content">
        <span className="call-label">اتصل بنا الآن</span>
        <span className="call-digits">{phone}</span>
      </span>
    </a>
  );
}
