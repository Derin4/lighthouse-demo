"use client";

import { useState } from "react";
import { funds } from "../_libs/data";
import { money, refCode } from "../_libs/helpers";

const AMOUNTS = [25, 50, 100, 250];
const FIELD =
  "w-full border border-line bg-white px-3 py-2.5 font-body text-sm outline-none transition-colors focus:border-accent focus:ring-4 focus:ring-gold/20";

export default function GiveForm() {
  const [freq, setFreq] = useState("One time");
  const [amt, setAmt] = useState(50);
  const [other, setOther] = useState("");
  const [fund, setFund] = useState(funds[0]);
  const [done, setDone] = useState(null);

  const value = amt === "other" ? Number(other) || 0 : amt;

  if (done) {
    return (
      <div className='step-in border border-line bg-white p-8'>
        <p className='font-display text-2xl'>Thank you for your gift</p>
        <p className='mt-2 font-body text-sm text-muted'>
          {money(done.value)} {done.freq.toLowerCase()} to {done.fund}.
          Reference: <span className='text-ink'>{done.code}</span>
        </p>
        <p className='mt-4 font-body text-sm text-muted'>
          A tax receipt would be emailed to you. No payment has been taken.
        </p>
        <p className='mt-6 font-body text-xs text-muted/70'>
          This is a demo confirmation — nothing has actually been sent.
        </p>
        <button
          type='button'
          onClick={() => setDone(null)}
          className='mt-5 font-body text-sm text-ink underline underline-offset-4'
        >
          Give again
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (value > 0) setDone({ value, freq, fund, code: refCode("LR") });
      }}
      className='space-y-5'
    >
      <div
        className='grid grid-cols-2 bg-paper p-1 text-sm font-medium'
        role='group'
        aria-label='How often'
      >
        {["One time", "Monthly"].map((f) => (
          <button
            key={f}
            type='button'
            aria-pressed={freq === f}
            onClick={() => setFreq(f)}
            className={`py-2.5 transition-all ${freq === f ? "bg-deep text-paper shadow" : "text-accent-deep hover:text-ink"}`}
          >
            {f}
          </button>
        ))}
      </div>
      <div>
        <p className='mb-2 font-body text-sm text-muted'>Amount (CAD)</p>
        <div
          className='grid grid-cols-5 gap-2'
          role='group'
          aria-label='Amount'
        >
          {AMOUNTS.map((a) => (
            <button
              key={a}
              type='button'
              aria-pressed={amt === a}
              onClick={() => setAmt(a)}
              className={`border py-2.5 font-display text-lg transition-colors ${amt === a ? "pop border-deep bg-deep text-paper" : "border-line bg-white hover:border-accent"}`}
            >
              ${a}
            </button>
          ))}
          <button
            type='button'
            aria-pressed={amt === "other"}
            onClick={() => setAmt("other")}
            className={`border py-2.5 font-body text-sm transition-colors ${amt === "other" ? "pop border-deep bg-deep text-paper" : "border-line bg-white hover:border-accent"}`}
          >
            Other
          </button>
        </div>
        {amt === "other" ? (
          <input
            type='number'
            min='1'
            inputMode='numeric'
            aria-label='Other amount'
            placeholder='Enter an amount'
            value={other}
            onChange={(e) => setOther(e.target.value)}
            className={`step-in mt-2 ${FIELD}`}
          />
        ) : null}
      </div>
      <div>
        <label
          htmlFor='fund'
          className='mb-1.5 block font-body text-sm text-muted'
        >
          Fund *
        </label>
        <select
          id='fund'
          value={fund}
          onChange={(e) => setFund(e.target.value)}
          className={FIELD}
        >
          {funds.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
      </div>
      <div className='grid gap-5 sm:grid-cols-2'>
        <div>
          <label
            htmlFor='g-name'
            className='mb-1.5 block font-body text-sm text-muted'
          >
            Name *
          </label>
          <input id='g-name' required className={FIELD} />
        </div>
        <div>
          <label
            htmlFor='g-email'
            className='mb-1.5 block font-body text-sm text-muted'
          >
            Email *
          </label>
          <input id='g-email' type='email' required className={FIELD} />
        </div>
      </div>
      <button
        type='submit'
        className='w-full bg-gold py-3.5 font-body text-sm font-semibold text-night transition-colors hover:bg-deep hover:text-paper'
      >
        {value > 0
          ? `Give ${money(value)} ${freq.toLowerCase()} (demo)`
          : "Give (demo)"}
      </button>
    </form>
  );
}
