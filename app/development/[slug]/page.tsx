import Link from 'next/link';
import { developmentProjectData } from '@/lib/constants';
import { notFound } from 'next/navigation';

export default async function DevelopmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = developmentProjectData.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <div>
      <div className="p-6 border border-white flex flex-col gap-4 ">
        <Link href="/development">Go Back</Link>
        <div className="space-y-4 py-24">
          <h1>{project.title}</h1>
          <p className="text-4xl">{project.description}</p>
        </div>
      </div>

      <div className="w-screen h-[600px] border border-white">
        <video
          width="100%"
          height="100%"
          controls
          preload="none"
          className="!w-full !h-full"
        >
          <source src={project.videoUrl} type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>
      </div>

      <div className="flex flex-col md:flex-row w-screen">
        {project.projectLink ? (
          <Link
            href={project.projectLink}
            target="_blank"
            className="border border-white hover:bg-white hover:text-black duration-500 w-full md:w-1/2 p-6 flex justify-center items-center"
          >
            View Project
          </Link>
        ) : (
          <div className="border border-white w-full md:w-1/2 p-6 flex justify-center items-center">
            :P
          </div>
        )}
        <div className="border border-white w-full md:w-1/2 p-6 space-y-2">
          <p>Issue</p>
          <p className="text-2xl">{project.issue}</p>
        </div>
      </div>

      <div className="w-screen h-auto p-6 py-24 space-y-4 border border-white">
        <p>Solution</p>
        <p className="text-4xl font-serif ">{project.solution}</p>
      </div>

      {/* First content block */}
      <div className="flex flex-col-reverse md:flex-row justify-start flex-1 w-full">
        <div className="w-full md:w-1/3 flex flex-row md:flex-col flex-1">
          <div className="flex-1 flex flex-col border border-white p-6 gap-4 justify-end">
            <h1 className="text-2xl">Challenges</h1>

            <ul className="space-y-4">
              {project.challenges?.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full md:w-2/3 flex items-end border border-white h-auto">
          <img
            src="https://i.pinimg.com/1200x/c1/28/ba/c128ba7d5f821dcd7ffcb69ac4aef673.jpg"
            alt="Photo of lead (and only) developer, Valentina Valverde"
            className="w-full h-[500px] object-cover object-[0%_30%]"
          />
        </div>
      </div>

      {/* Second content block */}
      <div className="flex flex-col-reverse md:flex-row justify-start flex-1 w-full">
        <div className="w-full md:w-2/3 flex items-end border border-white h-auto">
          <img
            src="https://i.pinimg.com/1200x/c1/28/ba/c128ba7d5f821dcd7ffcb69ac4aef673.jpg"
            alt="Photo of lead (and only) developer, Valentina Valverde"
            className="w-full h-[500px] object-cover object-[0%_30%]"
          />
        </div>

        <div className="w-full md:w-1/3 flex flex-row md:flex-col flex-1">
          <div className="flex-1 flex flex-col border border-white p-6 gap-4">
            <h1 className="text-2xl">Wins</h1>

            <ul className="space-y-4">
              {project.wins?.map((win, index) => (
                <li key={index}>{win}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Final Thoughts / Reflections or Contact  */}
      <div className="w-screen h-auto p-6 py-24 border border-white">
        <p className="text-4xl font-serif">{project.quote}</p>
      </div>

      {/* Footer - Prev / Next */}
      <div className="flex justify-center items-center gap-8 p-6 border border-white">
        <Link href="/">Prev</Link>
        <Link href="/">Next</Link>
      </div>
    </div>
  );
}
