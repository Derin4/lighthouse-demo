"use client";

import { useState } from "react";
import DemoForm from "./DemoForm";

export default function ContactTabs() {
  const [tab, setTab] = useState("prayer");
  return (
    <div>
      <div className='mb-8 flex gap-2' role='tablist'>
        {[
          ["prayer", "Prayer request"],
          ["contact", "Contact the church"],
        ].map(([id, label]) => (
          <button
            key={id}
            type='button'
            role='tab'
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`border px-5 py-2.5 font-body text-sm transition-colors ${tab === id ? "border-deep bg-deep text-paper" : "border-line hover:border-deep"}`}
          >
            {label}
          </button>
        ))}
      </div>
      {tab === "prayer" ? (
        <DemoForm
          key='prayer'
          prefix='PR'
          submitLabel='Send prayer request (demo)'
          successTitle='We are praying with you'
          successText='Our prayer team will remember your request this week.'
          fields={[
            { name: "name", label: "Name (optional)" },
            { name: "email", label: "Email (optional)", type: "email" },
            {
              name: "request",
              label: "How can we pray?",
              type: "textarea",
              required: true,
              rows: 5,
            },
            {
              name: "share",
              label: "Share with",
              type: "select",
              options: ["Pastors only", "Prayer team", "Whole congregation"],
              wide: true,
            },
          ]}
        />
      ) : (
        <DemoForm
          key='contact'
          prefix='LC'
          submitLabel='Send message (demo)'
          successTitle='Message received'
          successText='Someone from the church office will reply within two business days.'
          fields={[
            { name: "name", label: "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            {
              name: "topic",
              label: "Topic",
              type: "select",
              options: [
                "Plan a visit",
                "Ministries",
                "Weddings and funerals",
                "Something else",
              ],
              wide: true,
            },
            { name: "msg", label: "Message", type: "textarea", required: true },
          ]}
        />
      )}
    </div>
  );
}
