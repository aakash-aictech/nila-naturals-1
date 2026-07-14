export function Divider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`kraft-divider ${flip ? "rotate-180" : ""}`} aria-hidden>
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,32 C120,10 240,54 360,34 C480,14 600,50 720,30 C840,10 960,52 1080,32 C1200,12 1320,48 1440,28 L1440,64 L0,64 Z"
          fill="#F8F5EE"
        />
      </svg>
    </div>
  );
}
