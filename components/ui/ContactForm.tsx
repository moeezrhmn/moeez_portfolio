'use client';

import { useState } from 'react';

const KINDS = [
  'Not sure yet',
  'AI agent or MCP build',
  'Integration or automation',
  'Full stack product build',
  'Fixing something that is broken',
  'Monthly retainer',
  'Full time role',
];

const BUDGETS = [
  'Not sure yet',
  'Under $2,000',
  '$2,000 to $6,000',
  '$6,000 to $15,000',
  '$15,000+',
  'Retainer, ongoing',
  'Not applicable, hiring',
];

type State = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm({ email }: { email: string }) {
  const [state, setState] = useState<State>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? '').trim();

    if (!get('name') || !get('email') || !get('message')) {
      setState('error');
      setError('Name, email and a description are all needed.');
      return;
    }

    setState('sending');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Sent as discrete fields so they land in their own columns and stay
        // queryable, rather than being flattened into one subject string.
        body: JSON.stringify({
          name: get('name'),
          email: get('email'),
          company: get('company'),
          kind: get('kind'),
          budget: get('budget'),
          message: get('message'),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Something went wrong.');
      }

      setState('sent');
      form.reset();
    } catch (err) {
      setState('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (state === 'sent') {
    return (
      <div className="border border-brass p-9">
        <div className="meta text-brass mb-4">Message sent</div>
        <p className="text-[1.0625rem] leading-relaxed">
          It is in my inbox. You will get a reply from a person within 24 hours, usually
          sooner.
        </p>
        <button type="button" onClick={() => setState('idle')} className="btn-ghost grp mt-8">
          Send another <span className="arw">&rarr;</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5" noValidate>
      <label className="block">
        <span className="meta block mb-[.55rem]">Your name</span>
        <input className="field" type="text" name="name" required placeholder="Jane Cooper" />
      </label>

      <label className="block">
        <span className="meta block mb-[.55rem]">Email</span>
        <input className="field" type="email" name="email" required placeholder="jane@company.com" />
      </label>

      <label className="block">
        <span className="meta block mb-[.55rem]">
          Company <span className="!text-dim">(optional)</span>
        </span>
        <input className="field" type="text" name="company" placeholder="Cooper &amp; Co." />
      </label>

      <label className="block">
        <span className="meta block mb-[.55rem]">What kind of work?</span>
        <select className="field" name="kind" defaultValue={KINDS[0]}>
          {KINDS.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>
      </label>

      <label className="block sm:col-span-2">
        <span className="meta block mb-[.55rem]">Budget range</span>
        <select className="field" name="budget" defaultValue={BUDGETS[0]}>
          {BUDGETS.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </label>

      <label className="block sm:col-span-2">
        <span className="meta block mb-[.55rem]">What are you trying to fix?</span>
        <textarea
          className="field"
          name="message"
          rows={7}
          required
          placeholder="The more specific the better. Which systems, how often the task runs, and roughly how long it takes each time."
        />
      </label>

      <div className="sm:col-span-2 flex flex-wrap items-center gap-5 pt-2">
        <button type="submit" className="btn grp" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending…' : 'Send message'} <span className="arw">&rarr;</span>
        </button>
        <p className="meta !text-dim max-w-[30ch] leading-relaxed">
          No newsletter, no follow up sequence. One reply from a person.
        </p>
      </div>

      {state === 'error' ? (
        <p className="sm:col-span-2 meta !text-brass" role="alert">
          {error} You can also email{' '}
          <a href={`mailto:${email}`} className="ln">
            {email}
          </a>{' '}
          directly.
        </p>
      ) : null}
    </form>
  );
}
