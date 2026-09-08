/**
 * Display type sized in `vw` will always meet a narrow screen it does not fit,
 * because viewport width says nothing about how many characters are on the
 * line. These helpers cap the intended scale at the largest size the longest
 * line can occupy without crossing the gutter.
 *
 * The caller supplies the intended responsive scale as the `--h` custom
 * property; on wide screens `--h` wins, on narrow ones the cap does.
 */

/** Approximate em advance per uppercase character in Archivo 600 at the
 *  display tracking of -0.045em. Deliberately generous: overshooting shrinks
 *  the type slightly, undershooting clips it. */
const EM_PER_CHAR = 0.58;

/** Widest gutter the shell applies, both sides, plus headroom. */
const GUTTER = '4rem';

export function fitHeading(lines: readonly string[]) {
  const longest = Math.max(...lines.map((l) => l.length));
  return {
    fontSize: `min(var(--h, 12vw), calc((100vw - ${GUTTER}) / ${(longest * EM_PER_CHAR).toFixed(2)}))`,
  };
}
