export function GallerySkeleton() {
  return (
    <div
      className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-6 py-24 sm:grid-cols-3 lg:px-10"
      aria-hidden="true"
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className={`animate-pulse rounded-organic bg-forest/5 ${
            i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
          }`}
        />
      ))}
    </div>
  );
}
