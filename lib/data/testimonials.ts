/**
 * Client reviews from Upwork. Quoted verbatim and trimmed only at sentence
 * boundaries, never paraphrased. The endorsement tags are the client's own
 * selections, not ours.
 *
 * Do not add an entry here that somebody did not actually write.
 */
export interface Testimonial {
  quote: string;
  /** The engagement the review was left against. */
  project: string;
  date: string;
  rating: number;
  /** Client-selected endorsements shown alongside the review. */
  tags: readonly string[];
  source: string;
}

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "Great experience working with Moeez on our voice AI agent feature. Strong Python's, FastAPI and backend skills, clean integration, and solid communication throughout the project.",
    project: 'AI Engineer Needed for Voice AI Agent Feature (Python/FastAPI)',
    date: 'Aug 2026',
    rating: 5,
    tags: ['AI Agent Development', 'Generative AI', 'AI Chatbot', 'Reliable'],
    source: 'Upwork',
  },
  {
    quote:
      'Moeez was excellent to work with. He quickly identified the bug in our FastAPI backend and fixed it efficiently without breaking any existing functionality. Great communication throughout.',
    project: 'Need Help Fixing a Small Bug in My Python Website (FastAPI)',
    date: 'Jul 2026',
    rating: 5,
    tags: ['FastAPI', 'Committed to Quality', 'Solution Oriented', 'Clear Communicator'],
    source: 'Upwork',
  },
] as const;
