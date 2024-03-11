import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileLines, faEnvelope } from "@fortawesome/free-regular-svg-icons";

const ExternalLink = {
  GitHub: "https://github.com/leepavelich",
  Resume: "https://flowcv.com/resume/jv3t6wacj3",
  LinkedIn: "https://www.linkedin.com/in/lee-pavelich/",
  Email: "mailto:leepavelich@gmail.com",
} as const;

export default function Hero() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="flex flex-col">
        <div className="flex flex-wrap items-center justify-between space-y-2 md:space-y-0">
          <h1 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Lee Pavelich
          </h1>
          <div className="flex items-center gap-4">
            <a
              className="flex items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              href={ExternalLink.GitHub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              className="flex items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              href={ExternalLink.Resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFileLines} size="2x" />
            </a>
            <a
              className="flex items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              href={ExternalLink.LinkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              className="flex items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              href={ExternalLink.Email}
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </div>
        <p className="max-w-[700px] text-gray-500 dark:text-gray-400 mt-4">
          I build feature-rich web applications. Welcome to my portfolio.
        </p>
      </div>
    </section>
  );
}
