/**
 * FAQ sets, keyed by page. Answers use the mini-convention from lib/rich.ts
 * so they can carry links; `stripRich` flattens them for the FAQPage JSON-LD,
 * which has to be plain text.
 */
export interface Faq {
  q: string;
  a: string;
}

export const homeFaqs: readonly Faq[] = [
  {
    q: 'How do you charge?',
    a: 'Fixed price against a written scope, in two or three milestones. You know the total before I start, and it does not move unless you change the scope in writing. Retainers are billed monthly in advance.',
  },
  {
    q: 'Is the AI work real, or a wrapper around an API?',
    a: 'Calling a model is the easy part. The work is everything around it: latency budgets, streaming, retries when a provider degrades, guardrails on what the agent can act on, transcript storage, and the integration write backs that make the output useful. I have shipped a voice agent into live outbound calling, which is an unforgiving place to learn that difference.',
  },
  {
    q: 'Do you use AI coding tools?',
    a: 'Yes, openly. Claude Code, Codex and Cursor are part of my daily setup, and they make the mechanical work faster: boilerplate, refactors, test scaffolding, reading an unfamiliar codebase. What they do not do is decide what to build, judge whether an approach survives production load, or carry the responsibility when it does not. Everything that ships is code I have read, understood and can defend line by line. You are paying for that judgement, and these tools free up more of my time to spend on it.',
  },
  {
    q: 'What if it breaks after handover?',
    a: 'Thirty days of support is included in every build. If something I wrote misbehaves, I fix it at no cost. Beyond that most clients move onto a small retainer, but there is no obligation and you keep all the code either way.',
  },
  {
    q: 'Do I own the code?',
    a: 'Entirely. It ships to your repository, on your infrastructure, with documentation written for whoever comes next. No proprietary wrapper, no hosting lock in, nothing that requires me to stay involved.',
  },
  {
    q: 'Timezone and availability?',
    a: 'I work from Lahore at UTC+5, which overlaps the UK and EU working day comfortably and catches the US East Coast morning. Most of my client work has been for UK businesses. I reply to email within 24 hours, usually sooner.',
  },
  {
    q: 'Are you available for full time roles?',
    a: 'Yes. My last engagement ended in August 2026 and I am open to full stack, backend or AI engineering roles, remote or onsite in Lahore. My [résumé](/resume) has the long version, and [the about page](/about) covers what I am looking for.',
  },
] as const;

export const serviceFaqs: readonly Faq[] = [
  {
    q: 'How much does a project cost?',
    a: 'It depends enough on your systems that a published price list would be misleading. Two storefronts with clean, documented APIs is a very different job from a legacy ERP nobody has notes for, even when the brief sounds identical. After a twenty minute call I send one fixed figure against a written scope, usually within three days, and it does not move unless the scope does. If your budget is the constraint, say the number up front and I will tell you honestly whether it is enough.',
  },
  {
    q: 'Who pays for model and telephony usage?',
    a: 'You do, directly, on your own accounts. OpenAI, Retell AI, Twilio and AWS all bill you rather than passing through me with a margin on top. I will give you a usage estimate during scoping so the running cost is not a surprise after launch.',
  },
  {
    q: 'Do AI coding tools change what I am paying for?',
    a: 'Worth being direct about. I use Claude Code, Codex and Cursor every day, and they make me meaningfully faster on the mechanical work. You are quoted against the outcome and the written scope rather than hours at a keyboard, so the benefit reaches you as a shorter delivery time, not a smaller invoice for the same result. Every line is reviewed before it leaves my machine, and I stand behind the work exactly as I would have without them.',
  },
  {
    q: 'How do payments work?',
    a: 'Milestones, typically a third to start, a third at a working staging build, a third on handover. Retainers are billed monthly in advance. Bank transfer or Wise, with invoices in USD, GBP or EUR.',
  },
  {
    q: 'What if we need to change scope mid build?',
    a: 'Normal and expected. It becomes a written change with its own price and date before I build it. What I will not do is absorb scope silently and then produce a surprise invoice, or agree verbally and let it become a dispute later.',
  },
  {
    q: 'Do you sign NDAs and contracts?',
    a: 'Yes to both, routinely. I have worked under client confidentiality for most of my career, which is why several projects on this site describe the system without naming the company.',
  },
  {
    q: 'How soon can you start?',
    a: 'Immediately. My last engagement ended in August 2026, so I have capacity now. I take a limited number of projects at a time so the ones I do take get proper attention.',
  },
] as const;

export const contactFaqs: readonly Faq[] = [
  {
    q: "I don't know what I need yet. Is that a problem?",
    a: 'No, that is the normal starting point. Describe the annoying part of your week rather than a technical solution. Working out what to build is the part I am being paid for.',
  },
  {
    q: "We have an AI prototype that isn't production ready.",
    a: 'That is one of the most common reasons people get in touch. Send whatever you have, even if it is a notebook and a prompt. The gap between a working demo and something that survives real users is mostly engineering, and it is well trodden ground.',
  },
  {
    q: 'My budget is small. Worth getting in touch?',
    a: 'Yes, and say the number in the form. A tightly scoped automation project starts well below a full build. If your budget genuinely cannot cover the work I will tell you straight away rather than string it out.',
  },
  {
    q: "I'm hiring, not buying a project.",
    a: 'Also welcome. Pick "Full time role" in the form. My last engagement ended in August 2026 and I am open to full stack, backend or AI engineering roles, remote or onsite in Lahore. [The about page](/about) covers what I am looking for.',
  },
  {
    q: "Can you fix something that's already broken?",
    a: 'Often yes. Send whatever error messages or logs you have. I will read the code before quoting and tell you honestly whether repairing it or replacing the broken part is cheaper. Sometimes the answer is that you do not need me at all.',
  },
] as const;
