/** Headline figures. Shown on the home page, /work and the case study. */
export interface Metric {
  value: string;
  /** Rendered in brass beside the figure. */
  suffix?: string;
  label: string;
}

export const metrics: readonly Metric[] = [
  { value: '300', suffix: 'K', label: 'Products in sync' },
  { value: '40', suffix: '/d', label: 'Orders, hands off' },
  { value: '80', suffix: '%', label: 'Manual work removed' },
  { value: '5', suffix: '+', label: 'Years in production' },
] as const;

/** The same story told at case-study scale. */
export const caseMetrics: readonly Metric[] = [
  { value: '300', suffix: 'K+', label: 'Listings held in sync' },
  { value: '80', suffix: '%', label: 'Fewer manual updates' },
  { value: '20', suffix: 'h', label: 'Returned per week' },
  { value: '0', label: 'Manual steps remaining' },
] as const;
