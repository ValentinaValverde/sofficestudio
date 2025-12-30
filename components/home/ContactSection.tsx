export default function ContactSection() {
  return (
    <div className="flex justify-between items-center min-h-[70vh]">
      <div className="p-6 border border-white h-full w-1/2 space-y-6 flex flex-col justify-end">
        <p className="text-6xl !font-mono">
          Let&apos;s build something cool together.{' '}
        </p>

        <div>
          <span>Email me at </span>
          <a href="mailto:sofficestudio@gmail.com" className="link-underline">
            sofficestudio@gmail.com
          </a>{' '}
        </div>
      </div>

      <div className="p-6 border border-white h-full w-1/2">
        {/* Placeholder for something cool ;) */}
      </div>
    </div>
  );
}
