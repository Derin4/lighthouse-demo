import EventList from "../_components/EventList";
import Photo from "../_components/Photo";
import SectionHead from "../_components/SectionHead";

export const metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <>
      <Photo
        id='events'
        label='People gathered at a church event'
        swatch={["#5b5f9e", "#171833"]}
        sizes='100vw'
        className='h-48 w-full sm:h-64'
      />
      <div className='mx-auto max-w-5xl px-6 py-16'>
        <SectionHead eyebrow='Events' title='What is coming up' />
        <EventList />
      </div>
    </>
  );
}
