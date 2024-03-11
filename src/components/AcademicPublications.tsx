import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AcademicPublications() {
  return (
    <section id="academic-publications">
      <h2 className="text-2xl text-primary">Academic Publications</h2>
      <p className="mt-2">
        In my previous academic career, I successfully published several papers
        in physics, which had an emphasis on new methods in teaching quantum
        mechanics.
      </p>
      <div className="grid grid-cols-1 gap-6 max-w-3xl mt-4">
        <div className="flex flex-col gap-1 mt-2 hover:shadow-md">
          <a
            href="https://iopscience.iop.org/article/10.1088/1361-6404/abccfa/meta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="font-semibold text-lg">
              The relation between the effective band mass in a solid and the
              free electron mass{" "}
              <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              G. Forcade, D. van Paridon, R. L. Pavelich and F. Marsiglio
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              <i>Eur. P. Physic.</i> <b>42</b> 025408 (2021)
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              A followup paper that showed that the electron-hole asymmetry is
              to be expected without considering electron-electron interactions.
            </p>
          </a>
        </div>
        <div className="flex flex-col gap-1 hover:shadow-md">
          <a
            href="https://www.nature.com/articles/s41598-017-17223-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="font-semibold text-lg">
              The tight-binding formulation of the Kronig-Penney model{" "}
              <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              F. Marsiglio and R. L. Pavelich
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              <i>Sci Rep</i> <b>7</b>, 17041 (2017)
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              In this paper we analytically derived a tight-binding formulation
              from the Kronig-Penney model and examined some of its
              consequences.
            </p>
          </a>
        </div>
        <div className="flex flex-col gap-1 hover:shadow-md">
          <a
            href="https://era.library.ualberta.ca/items/4835014b-1dbc-48e1-bbec-c175c87c9b03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="font-semibold text-lg">
              Calculation of Bulk Material Electronic Band Structure Using
              Matrix Mechanics: A Pedagogical Approach{" "}
              <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              R. L. Pavelich
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              (Master's thesis). University of Alberta, Edmonton, Canada (2016)
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              My master's thesis, in which I combined my two previous papers as
              well as some extension to three dimensions, and included work that
              would later go into the tight-binding paper.
            </p>
          </a>
        </div>
        <div className="flex flex-col gap-1 hover:shadow-md">
          <a
            href="https://pubs.aip.org/aapt/ajp/article/84/12/924/310750"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="font-semibold text-lg">
              Calculation of 2D electronic band structure using matrix mechanics{" "}
              <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              R. L. Pavelich and F. Marsiglio
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              <i>Am. J. Phys.</i> <b>84</b>, 924-935 (2016)
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              My initial paper consider the one-dimensional case, and this paper
              extended that work to two dimensions.
            </p>
          </a>
        </div>
        <div className="flex flex-col gap-1 hover:shadow-md">
          <a
            href="https://pubs.aip.org/aapt/ajp/article-abstract/83/9/773/1056970/The-Kronig-Penney-model-extended-to-arbitrary?redirectedFrom=fulltext"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="font-semibold text-lg">
              The Kronig-Penney model extended to arbitrary potentials via
              numerical matrix mechanics{" "}
              <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              R. L. Pavelich and F. Marsiglio
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              <i>Am. J. Physics</i> <b>83</b>, 773-781 (2015)
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              My first paper where we took a technique my supervisor, Frank
              Marsiglio, had developed for an individual unit cell, and extended
              it to a period array (like a crystal) to do electronic band
              structure calculations in a way available to undergraduates.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AcademicPublications;
