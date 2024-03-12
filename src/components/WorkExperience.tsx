//       <div className="space-y-6 mt-4">
//         <div className="flex items-center space-x-4">
//           <Card className="w-full hover:shadow-xl transition-shadow duration-300 ease-int-out">
//             <CardContent className="flex space-x-4 mt-4">
//               <div className="flex flex-col gap-1 min-w-44">
//                 {" "}
//                 <p className="text font-medium">Jul 2019 - Nov 2021</p>
//                 <p className="text text-gray-500 dark:text-gray-400">
//                   Operations Manager
//                 </p>
//               </div>
//               <div className="ml-auto grid gap-1">
//                 <p className="text font-medium">Aritech</p>
//                 <p className=" text-gray-500 dark:text-gray-400">
//                   Cofounded a new company as a spinoff from the Zedi team,
//                   focused on automation solutions. My work involved business
//                   development, marketing, project specification and quote
//                   generation, technical installation, accounting, web
//                   development, and documentation preparation. Notable clients
//                   include ATCO, WeedMe, and VPG in Israel.
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//       <div className="space-y-6 mt-4">
//         <div className="flex items-center space-x-4">
//           <Card className="w-full hover:shadow-xl transition-shadow duration-300 ease-int-out">
//             <CardContent className="flex space-x-4 mt-4">
//               <div className="flex flex-col gap-1 min-w-44">
//                 {" "}
//                 <p className="text font-medium">Jul 2018 - Jun 2019</p>
//                 <p className="text text-gray-500 dark:text-gray-400">
//                   Business Development Solutions Architect
//                 </p>
//               </div>
//               <div className="ml-auto grid gap-1">
//                 <p className="text font-medium">Zedi Solutions</p>
//                 <p className=" text-gray-500 dark:text-gray-400">
//                   Joined the Business Development where we researched how to
//                   apply technologies from the oil and gas sector to other
//                   sectors e.g. cannabis, smart buildings, industrial, water,
//                   renewables, and outdoor agriculture. Responsibilities included
//                   reaching out to prospective clients, developing solutions,
//                   generating quote, and performing market research.
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//       <div className="space-y-6 mt-4">
//         <div className="flex items-center space-x-4">
//           <Card className="w-full hover:shadow-xl transition-shadow duration-300 ease-int-out">
//             <CardContent className="flex space-x-4 mt-4">
//               <div className="flex flex-col gap-1 w-44">
//                 {" "}
//                 <p className="text font-medium">2016</p>
//                 <p className="text text-gray-500 dark:text-gray-400">
//                   Master of Science
//                 </p>
//               </div>
//               <div className="ml-auto grid gap-1">
//                 <p className="text font-medium">University of Alberta</p>
//                 <p className=" text-gray-500 dark:text-gray-400">Physics</p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//       <div className="space-y-6 mt-4">
//         <div className="flex items-center space-x-4">
//           <Card className="w-full hover:shadow-xl transition-shadow duration-300 ease-int-out">
//             <CardContent className="flex space-x-4 mt-4">
//               <div className="flex flex-col gap-1 w-44">
//                 {" "}
//                 <p className="text font-medium">2014</p>
//                 <p className="text text-gray-500 dark:text-gray-400">
//                   Bachelor of Science
//                 </p>
//               </div>
//               <div className="ml-auto grid gap-1">
//                 <p className="text font-medium">University of Alberta</p>
//                 <p className=" text-gray-500 dark:text-gray-400">Physics</p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//       <div className="space-y-6 mt-4">
//         <div className="flex items-center space-x-4">
//           <Card className="w-full hover:shadow-xl transition-shadow duration-300 ease-int-out">
//             <CardContent className="flex space-x-4 mt-4">
//               <div className="flex flex-col gap-1 w-44">
//                 {" "}
//                 <p className="text font-medium">2011</p>
//                 <p className="text text-gray-500 dark:text-gray-400">
//                   Bachelor of Science
//                 </p>
//               </div>
//               <div className="ml-auto grid gap-1">
//                 <p className="text font-medium">University of Alberta</p>
//                 <p className=" text-gray-500 dark:text-gray-400">
//                   Electrical Engineering
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Card, CardContent } from "./ui/card";

export default function WorkExperience() {
  const cardClass =
    "w-full hover:shadow-xl transition-shadow duration-300 ease-in-out";
  const cardContentClass =
    "flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4";
  const dateRoleClass = "flex flex-col gap-1 min-w-40 md:max-w-40";
  const descriptionClass = "text text-gray-500 dark:text-gray-400 mt-3";

  const renderCard = (
    startDate: string,
    endDate: string | null,
    title: string,
    organization: string,
    description: string[]
  ) => (
    <Card className={cardClass}>
      <CardContent className={cardContentClass}>
        <div className={dateRoleClass}>
          <p className="text font-medium">
            {endDate ? `${startDate} - ${endDate}` : `${startDate}`}
          </p>
          <p className={descriptionClass}>{title}</p>
        </div>
        <div className="mt-3 md:mt-0 md:ml-auto">
          <p className="text font-medium">{organization}</p>
          {description.map((paragraph: string, index: number) => (
            <p key={index} className={descriptionClass}>
              {paragraph}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="work-experience">
      <h2 className="text-2xl text-primary">
        Recent Work Experience and Education
      </h2>
      <div className="space-y-6 mt-4">
        {renderCard(
          "May 2022",
          "Feb 2024",
          "Software Developer",
          "Lighthouse Labs",
          [
            "Hired by Lighthouse after my bootcamp as one of the top-performing graduates.",
            "I contributed to the development of their core products,including a learning management system (Compass) and a service for connecting students with a staff of available mentors (Rudder). These applications were comprised of a Rails backend and a React frontend. My work covered the full stack: architecting and modifying the data model for a ProstgreSQL database, adding API routes, refactoring to use the interactor pattern, adding features to the React front-end like an embedded Zoom client, migrating the client from JavaScript to TypeScript with Zod validation, and monitoring production with Sentry.",
            "I built and managed several Discord bots written in TypeScript with Node.js + Express that both students and mentors used. This included an AI assistant bot using the OpenAI API that made an initial attempt to resolve student assistance requests.",
            "On the Rudder team, it was my responsbility to mentor new hires to get them rapidly up to speed and fostering an environment of daily code reviews and issue generation through GitHub. I was acknowledged for fostering a positive and productive work environment.",
          ]
        )}
        {renderCard(
          "Jan 2022",
          "March 2024",
          "Web Development Bootcamp",
          "Lighthouse Labs",
          [
            "Enrolled in and completed Lighthouse Labs' intensive web development bootcamp.",
          ]
        )}
        {renderCard("Jul 2019", "Nov 2021", "Operations Manager", "Aritech", [
          "Cofounded a new company as a spinoff from the Zedi team, focused on automation solutions. My work involved business development, marketing, project specification and quote generation, technical installation, accounting, web development, and documentation preparation. Notable clients include ATCO, WeedMe, and VPG in Israel.",
        ])}
        {renderCard(
          "Jul 2018",
          "Jun 2019",
          "Business Development Solutions Architect",
          "Zedi Solutions",
          [
            "Joined the Business Development where we researched how to apply technologies from the oil and gas sector to other sectors e.g. cannabis, smart buildings, industrial, water, renewables, and outdoor agriculture. Responsibilities included reaching out to prospective clients, developing solutions, generating quote, and performing market research.",
          ]
        )}
        {renderCard(
          "2016",
          null,
          "Master of Science",
          "University of Alberta",
          ["Physics"]
        )}
        {renderCard(
          "2014",
          null,
          "Bachelor of Science",
          "University of Alberta",
          ["Physics"]
        )}
        {renderCard(
          "2011",
          null,
          "Bachelor of Science",
          "University of Alberta",
          ["Electrical Engineering"]
        )}
      </div>
    </section>
  );
}
