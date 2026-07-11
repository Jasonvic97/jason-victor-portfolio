
type ExperienceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  summary: string;
  highlights: string[];
  skills: string[];
  philosophy: string;
  image: string;
};

export default function ExperienceModal({
  isOpen,
  onClose,
  title,
  subtitle,
  summary,
  highlights,
  skills,
  philosophy,
  image,
}: ExperienceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="relative w-full max-w-4xl rounded-3xl bg-white p-12 shadow-2xl">

        <button
          onClick={onClose}
          className="absolute right-8 top-8 text-3xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        <div className="grid grid-cols-2 gap-10">

          <div className="h-96 rounded-2xl bg-gray-200 flex items-center justify-center">
            PHOTO
          </div>

          <div>

            <h1 className="text-5xl font-bold">
              {title}
            </h1>

            <h2 className="mt-3 text-xl text-gray-500">
              {subtitle}
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-700">
                {summary}
            </p>

            <div className="mt-10">

              <h3 className="font-bold uppercase tracking-wider">
                Key Achievements
                </h3>
                
                <ul className="mt-4 space-y-3 text-gray-700">
                    {highlights.map((item) => ( 
                    <li key={item}>✓ {item}</li>
                    ))}
                 </ul>

                 <div className="mt-10"> 
                    <h3 className="font-bold uppercase tracking-wider">
                        Core Skills
                    </h3>
                    
                <div className="mt-4 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <span
                            key={skill} 
                            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

            </div>

            <div className="mt-10">

                <h3 className="font-bold uppercase tracking-wider">
                    Leadership Philosophy
                </h3>

                <p className="mt-4 text-gray-700">
                    "{philosophy}"
                </p>

            </div>    

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}