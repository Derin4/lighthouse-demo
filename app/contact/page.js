import ContactTabs from "../_components/ContactTabs";
import SectionHead from "../_components/SectionHead";

export const metadata = { title: "Prayer & contact" };

export default function ContactPage() {
  return (
    <div className='mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr]'>
      <div>
        <SectionHead
          eyebrow='Prayer & contact'
          title='We would love to hear from you'
        />
        <ContactTabs />
      </div>
      <aside className='self-start border-t-4 border-gold bg-tint p-7 font-body text-sm'>
        <h2 className='mb-3 font-display text-2xl'>Church office</h2>
        <p>210 Lighthouse Road</p>
        <p>Tue–Fri, 9am–3pm</p>
        <p className='mt-4 text-muted'>
          Pastor Samuel Reyes and the care team are available by appointment.
        </p>
      </aside>
    </div>
  );
}
