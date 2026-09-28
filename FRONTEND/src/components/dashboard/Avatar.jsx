const AVATAR_URL = 'https://i.pravatar.cc/150?img=12';
const FALLBACK_AVATAR = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' fill='%231f6b4f'/%3E%3Ctext x='50%25' y='56%25' text-anchor='middle' fill='white' font-family='Arial' font-size='52' font-weight='700'%3EDC%3C/text%3E%3C/svg%3E";

export default function Avatar({ className = '' }) {
  return (
    <img
      className={`avatar ${className}`}
      src={AVATAR_URL}
      alt="Daniel Carter"
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = FALLBACK_AVATAR;
      }}
    />
  );
}