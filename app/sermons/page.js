import SermonList from "../_components/SermonList";
import SectionHead from "../_components/SectionHead";

export const metadata = { title: "Sermons" };

export default function SermonsPage() {
  return (
    <div className='mx-auto max-w-4xl px-6 py-16'>
      <SectionHead
        eyebrow='Sermons'
        title='Listen again'
        text='Messages from recent Sundays, grouped by series.'
      />
      <SermonList />
    </div>
  );
}
