
interface Props {
  /** Valor de 0 a 5 (admite medias estrellas) */
  value: number;
  reviews: number;
  reviewsLabel?: string;
}

export function StarRating({ value, reviews, reviewsLabel = "evaluaciones docentes" }: Props) {
  const safeValue = Math.min(5, Math.max(0, value));
  const filledHalves = Math.round(safeValue * 2);

  return (
    <div className="flex w-fit items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div
        className="rating rating-sm rating-half"
        role="img"
        aria-label={`${safeValue} de 5 estrellas`}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className={`mask mask-star-2 ${i % 2 === 0 ? "mask-half-1" : "mask-half-2"} ${
              i < filledHalves ? "bg-error" : "bg-base-300"
            }`}
          />
        ))}
      </div>
      <span className="text-sm font-bold">{safeValue.toFixed(1)}</span>
      <span className="text-xs opacity-60">
        ({reviews} {reviewsLabel})
      </span>
    </div>
  );
}
