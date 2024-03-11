import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-2xl text-primary">Projects</h2>
      <div className="grid auto-rows-auto md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        <div className="space-y-1">
          <Card className="h-full hover:shadow-xl transition-shadow duration-300 ease-int-out">
            <a
              href="https://github.com/leepavelich/interpreter-ts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardHeader className="p-0">
                <img
                  alt="ui"
                  className="object-cover h-48"
                  src="https://github.com/leepavelich/portfolio-page/blob/main/src/assets/interpreter-ts.png?raw=true"
                  width={400}
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>interpeter-ts</CardTitle>
                <div className="text-gray-500 dark:text-gray-400 mt-1">
                  Work In Progress
                </div>
                <CardDescription>
                  Implementation of Thorsten Ball's{" "}
                  <i>Writing an Interpreter in Go</i> book in TypeScript
                </CardDescription>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">TypeScript</div>
                </div>
              </CardContent>
            </a>
          </Card>
        </div>
        <div className="space-y-1">
          <Card className="h-full hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <a
              href="https://github.com/leepavelich/codegpt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardHeader className="p-0">
                <img
                  alt="ui"
                  className="object-cover h-48"
                  src="https://github.com/leepavelich/portfolio-page/blob/main/src/assets/codegpt.png?raw=true"
                  width={400}
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>CodeGPT</CardTitle>
                <div className="text-gray-500 dark:text-gray-400 mt-1">
                  Work in Progress
                </div>
                <CardDescription>
                  Custom ChatGPT-like interface using the OpenAI API with an
                  emphasis on assistance with code generation.
                </CardDescription>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    TypeScript, React, preact-signals, OpenAI
                  </div>
                </div>
              </CardContent>
            </a>
          </Card>
        </div>
        <div className="space-y-1">
          <Card className="h-full hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <a
              href="https://github.com/leepavelich/spacex-graphs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardHeader className="p-0">
                <img
                  alt="ui"
                  className="object-cover h-48"
                  src="https://github.com/leepavelich/portfolio-page/blob/main/src/assets/portfolio.png?raw=true"
                  width={400}
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>Personal Portfolio</CardTitle>
                <div className="text-gray-500 dark:text-gray-400 mt-1">
                  Apr 2024
                </div>
                <CardDescription>The very page you're on!</CardDescription>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    TypeScript, React, Vite, shadcn/ui, Tailwind, Vercel
                  </div>
                </div>
              </CardContent>
            </a>
          </Card>
        </div>
        <div className="space-y-1">
          <Card className="h-full hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <a
              href="https://github.com/leepavelich/spacex-graphs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardHeader className="p-0">
                <img
                  alt="ui"
                  className="object-cover h-48"
                  src="https://raw.githubusercontent.com/leepavelich/portfolio-page/f3e584031dac02a14c834b2132bac7942c6f72e9/src/assets/payload_mass_to_orbit_by_year.svg"
                  width={400}
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>SpaceX Mass-to-Orbit Graphs</CardTitle>
                <div className="text-gray-500 dark:text-gray-400 mt-1">
                  Dec 2023
                </div>
                <CardDescription>
                  Scheduled service to scrape Wikipedia tables to generate
                  custom plots of mass-to-orbit graphs.
                </CardDescription>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    Python, GitHub Actions, pandas, matplotlib
                  </div>
                </div>
              </CardContent>
            </a>
          </Card>
        </div>
        <div className="space-y-1">
          <Card className="h-full hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <a
              href="https://github.com/leepavelich/codecrafters-redis-javascript"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardHeader className="p-0">
                <img
                  alt="ui"
                  className="object-cover h-48"
                  src="https://raw.githubusercontent.com/leepavelich/portfolio-page/f3e584031dac02a14c834b2132bac7942c6f72e9/src/assets/redis.svg"
                  width={400}
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>Redis clone</CardTitle>
                <div className="text-gray-500 dark:text-gray-400 mt-1">
                  Mar 2023
                </div>
                <CardDescription>
                  Codecrafters challenge where I implemented a toy Redis clone.
                </CardDescription>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">JavaScript</div>
                </div>
              </CardContent>
            </a>
          </Card>
        </div>
        <div className="space-y-1">
          <Card className="h-full hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <a
              href="https://github.com/leepavelich/toStrong"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardHeader className="p-0">
                <img
                  alt="ui"
                  className="object-contain h-48"
                  src="https://github.com/leepavelich/toStrong/raw/main/docs/screenshots/current_program_progress.png"
                  width={400}
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>.toStrong( )</CardTitle>
                <div className="text-gray-500 dark:text-gray-400 mt-1">
                  Apr 2022
                </div>
                <CardDescription>
                  A minimum viable demo for a strength training workout tracking
                  mobile app.
                </CardDescription>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    TypeScript, React, Patternfly, Bulma, Express
                  </div>
                </div>
              </CardContent>
            </a>
          </Card>
        </div>
        <div className="space-y-1">
          <Card className="h-full hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <a
              href="https://github.com/leepavelich/jungle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardHeader className="p-0">
                <img
                  alt="ui"
                  className="object-contain h-48"
                  src="https://github.com/leepavelich/jungle/raw/master/docs/adding-to-cart.png?raw=true"
                  width={400}
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>Jungle</CardTitle>
                <div className="text-gray-500 dark:text-gray-400 mt-1">
                  Mar 2022
                </div>
                <CardDescription>
                  A challenge project about adding features to an existing
                  project simulating an online retailer in a language I was not
                  then familiar.
                </CardDescription>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    Ruby on Rails, RSpec, Capybara, Poltergeist
                  </div>
                </div>
              </CardContent>
            </a>
          </Card>
        </div>
        <div className="space-y-1">
          <Card className="h-full hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <a
              href="https://github.com/leepavelich/scheduler"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardHeader className="p-0">
                <img
                  alt="ui"
                  className="object-contain h-48"
                  src="https://github.com/leepavelich/portfolio-page/blob/main/src/assets/scheduler.png?raw=true"
                  width={400}
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>Interview Scheduler</CardTitle>
                <div className="text-gray-500 dark:text-gray-400 mt-1">
                  Mar 2022
                </div>
                <CardDescription>
                  A scheduling app where the user can create, edit, and cancel
                  interview appointments.
                </CardDescription>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    React, Express, Websockets, Sass, Jest, Cypress, Storybook,
                    PostgreSQL
                  </div>
                </div>
              </CardContent>
            </a>
          </Card>
        </div>
        <div className="space-y-1">
          <Card className="h-full hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <a
              href="https://github.com/leepavelich/Resource-Wall"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardHeader className="p-0">
                <img
                  alt="ui"
                  className="object-contain h-48"
                  src="https://github.com/leepavelich/Resource-Wall/raw/master/docs/app-main.png?raw=true"
                  width={400}
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>Resource Wall</CardTitle>
                <div className="text-gray-500 dark:text-gray-400 mt-1">
                  Feb 2022
                </div>
                <CardDescription>
                  A resource collection web app where users can submit URL links
                  as well as comment on, like, and rate other user's posts.
                </CardDescription>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    jQuery, Express, PostgresSQL, LinkPreview
                  </div>
                </div>
              </CardContent>
            </a>
          </Card>
        </div>
        <div className="space-y-1">
          <Card className="h-full hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <a
              href="https://github.com/leepavelich/tweeter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardHeader className="p-0">
                <img
                  alt="ui"
                  className="object-contain h-48"
                  src="https://github.com/leepavelich/tweeter/raw/master/docs/tweeter.png?raw=true"
                  width={400}
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>Tweeter</CardTitle>
                <div className="text-gray-500 dark:text-gray-400 mt-1">
                  Feb 2022
                </div>
                <CardDescription>
                  A toy single-page Twitter clone, to practice some front-end
                  skills.
                </CardDescription>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">jQuery, Express, CSS</div>
                </div>
              </CardContent>
            </a>
          </Card>
        </div>
        <div className="space-y-1">
          <Card className="h-full hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <a
              href="https://github.com/leepavelich/tinyapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardHeader className="p-0">
                <img
                  alt="ui"
                  className="object-contain h-48"
                  src="https://github.com/leepavelich/tinyapp/raw/master/docs/shortened-page.png?raw=true"
                  width={400}
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>TinyApp</CardTitle>
                <div className="text-gray-500 dark:text-gray-400 mt-1">
                  Jan 2022
                </div>
                <CardDescription>
                  A bit.ly clone full-stack web application.
                </CardDescription>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    Express, EJS, bcryptjs
                  </div>
                </div>
              </CardContent>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
