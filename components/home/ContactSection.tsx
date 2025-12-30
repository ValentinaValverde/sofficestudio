export default function ContactSection() {
  return (
    <div className="flex flex-col flex-col-reverse md:flex-row justify-between items-center min-h-[70vh]">
      <div className="p-6 border border-white h-full w-full md:w-1/2 space-y-6 flex flex-col justify-end">
        <p className="text-4xl md:text-6xl !font-mono">
          Let&apos;s build something cool together.{' '}
        </p>

        <div>
          <span>Email me at </span>
          <a href="mailto:sofficestudio@gmail.com" className="link-underline">
            sofficestudio@gmail.com
          </a>{' '}
        </div>
      </div>

      <div className="p-6 border border-white h-full w-full md:w-1/2 ">
        {/* Placeholder for something cool ;) */}
      </div>
    </div>
  );
}
