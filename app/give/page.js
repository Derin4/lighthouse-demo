import GiveForm from "../_components/GiveForm";
import SectionHead from "../_components/SectionHead";

export const metadata = { title: "Give" };

export default function GivePage() {
  return (
    <div className='mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1fr_1.1fr]'>
      <div>
        <SectionHead
          eyebrow='Give'
          title='Generosity is part of worship'
          text='Your gifts keep the lights on and the pantry stocked. This is a demo: no payment is taken.'
        />
        <ul className='space-y-5 font-body text-sm text-muted'>
          {[
            ["Online.", "One-time or monthly, by card or bank transfer."],
            ["On Sunday.", "Offering boxes are at the back of the sanctuary."],
            [
              "By e-transfer.",
              "Send to the church office using the address on the contact page.",
            ],
          ].map(([a, b]) => (
            <li key={a} className='flex gap-4 border-l-2 border-gold pl-4'>
              <span>
                <strong className='text-ink'>{a}</strong> {b}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='border-t-4 border-gold bg-tint p-7'>
        <h2 className='mb-5 text-2xl'>Give online</h2>
        <GiveForm />
      </div>
    </div>
  );
}
