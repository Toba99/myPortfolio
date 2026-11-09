/**
 * Deterministic organic positions  -  looks scattered, never overlaps.
 * Shuffled cell assignment + heavy in-cell jitter + brick stagger.
 */
function hash(n, salt = 1) {
  const x = Math.sin(n * 12.9898 * salt + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/** Fisher–Yates with seeded swaps */
function shuffleIndices(count) {
  const indices = Array.from({ length: count }, (_, i) => i);
  for (let i = count - 1; i > 0; i -= 1) {
    const j = Math.floor(hash(i, 11) * (i + 1));
    const tmp = indices[i];
    indices[i] = indices[j];
    indices[j] = tmp;
  }
  return indices;
}

/**
 * Pack `count` items into a 0–100 board without overlapping.
 * Returns { left, top, width, rotate } as CSS-ready values.
 */
export function scatterPositions(
  count,
  {
    cols = 3,
    rows,
    padX = 2,
    padY = 3,
    maxRotate = 6.5,
    jitter = 0.72,
    stagger = 0.38,
    footprint = 0.78,
  } = {}
) {
  const columnCount = Math.max(1, cols);
  const rowCount = Math.max(rows || Math.ceil(count / columnCount), 1);
  const cellW = (100 - padX * 2) / columnCount;
  const cellH = (100 - padY * 2) / rowCount;

  // Assign items to cells in a shuffled order so neighbors aren't sequential
  const order = shuffleIndices(count);

  return Array.from({ length: count }, (_, index) => {
    const slot = order[index];
    const col = slot % columnCount;
    const row = Math.floor(slot / columnCount);

    // Brick offset on odd rows  -  breaks vertical columns
    const brick = row % 2 === 1 ? cellW * stagger * (0.55 + hash(row, 9) * 0.45) : 0;

    // Heavy jitter, but stay inside the cell so items never collide
    const jx = (hash(index, 1) - 0.5) * 2 * jitter;
    const jy = (hash(index, 2) - 0.5) * 2 * jitter;

    const usableW = cellW * footprint;
    const usableH = cellH * footprint;

    // Extra per-axis drift inside the remaining cell slack
    const slackX = Math.max(0, cellW - usableW);
    const slackY = Math.max(0, cellH - usableH);

    let left = padX + col * cellW + brick + slackX * 0.5 + jx * slackX * 0.5;
    let top = padY + row * cellH + slackY * 0.5 + jy * slackY * 0.5;

    // Keep footprints on the board (brick can push odd rows right)
    left = Math.max(padX * 0.5, Math.min(left, 100 - usableW - padX * 0.5));
    top = Math.max(padY * 0.5, Math.min(top, 100 - usableH - padY * 0.5));

    const rotate = (hash(index, 3) * 2 - 1) * maxRotate;

    return {
      left: `${left.toFixed(2)}%`,
      top: `${top.toFixed(2)}%`,
      width: `${usableW.toFixed(2)}%`,
      rotate: Number(rotate.toFixed(2)),
    };
  });
}

/** Chip / pill scatter  -  denser columns, freer rotation */
export function scatterChips(count, options = {}) {
  const cols = options.cols || Math.min(4, Math.max(2, Math.ceil(Math.sqrt(count))));
  return scatterPositions(count, {
    cols,
    padX: 3,
    padY: 6,
    maxRotate: 7.5,
    jitter: 0.85,
    stagger: 0.45,
    footprint: 0.7,
    ...options,
  });
}

/** Card scatter  -  roomy cells so cards stay readable */
export function scatterCards(count, options = {}) {
  return scatterPositions(count, {
    cols: options.cols || 2,
    padX: 2,
    padY: 2,
    maxRotate: 4.8,
    jitter: 0.8,
    stagger: 0.32,
    footprint: 0.84,
    ...options,
  });
}
