interface Review {
  stars: string | number;
}

interface StarCounts {
  full: number;
  half: number;
  empty: number;
  average: number;
}
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
) {
  let timer: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

export const calculateAverageRating = (reviews: { stars: string }[]) => {
  if (!reviews || reviews.length === 0) return 0;

  const totalStars = reviews.reduce((acc, curr) => {
    return acc + parseInt(curr.stars, 10);
  }, 0);

  return +(totalStars / reviews.length).toFixed(1);
};

interface Review {
  stars: string | number;
}

export function calculateAverageRatingProduct(reviews: Review[]): number {
  if (!reviews?.length) return 0;

  const total = reviews.reduce((sum, review) => {
    const rating =
      typeof review.stars === "string"
        ? parseFloat(review.stars)
        : review.stars;
    return sum + (isNaN(rating) ? 0 : rating);
  }, 0);

  return parseFloat((total / reviews.length).toFixed(1));
}

export function getStarCounts(reviews: Review[]): StarCounts {
  if (!reviews?.length) return { full: 0, half: 0, empty: 5, average: 0 };

  const total = reviews.reduce((sum, review) => {
    const rating =
      typeof review.stars === "string"
        ? parseFloat(review.stars)
        : review.stars;
    return sum + (isNaN(rating) ? 0 : rating);
  }, 0);

  const average = total / reviews.length;
  const full = Math.floor(average);
  const hasHalf = average % 1 >= 0.5;
  const half = hasHalf ? 1 : 0;
  const empty = 5 - full - half;

  return {
    full,
    half,
    empty,
    average: parseFloat(average.toFixed(1)),
  };
}

export const getStarPercentages = (reviews: { stars: string }[]) => {
  const total = reviews?.length;
  const count = [0, 0, 0, 0, 0];

  reviews?.forEach((r) => {
    const star = Math.floor(Number(r.stars));
    if (star >= 1 && star <= 5) {
      count[5 - star]++;
    }
  });

  return count.map((c) => (total ? (c / total) * 100 : 0));
};
