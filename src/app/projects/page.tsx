import Image from "next/image";

export default function Page() {
  return (
    <main className="relative p-2 md:p-5 w-full overflow-y-auto scroll-smooth">
      <h3 className="text-sm mb-4 text-blue-800 dark:text-teal-300 font-extrabold lg:text-base">
        Projects
      </h3>
      <div className="flex flex-wrap gap-10">
        {/* card */}
        <div className="relative bg-backgorund-card-light dark:bg-background-card-dark rounded-md group">
          <Image
            src={`/projects/netflix-homepage-clone.png`}
            alt="netflix clone poster"
            width={300}
            height={150}
          />
          <div className="py-5 text-center font-bold uppercase dark:text-white">
            Netflix homepage clone
          </div>
          <div className="black dark:text-white black dark:text-white flex justify-around py-2 xl:hidden xl:group-hover:flex xl:flex-col xl:gap-2 xl:text-white xl:font-bold xl:items-center xl:justify-center  xl:absolute xl:bg-[rgba(0,0,0,0.65)] xl:w-full xl:h-full xl:top-0">
            <div>
              <a
                href="https://andreiandro95.github.io/my-movies/"
                title="site location"
                rel="noindex"
                target="_blank"
              >
                Live
              </a>
            </div>
            <div>
              <a
                href="https://github.com/andreiandro95/my-movies/tree/master"
                title="code location"
                rel="noindex"
                target="_blank"
              >
                To github
              </a>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="relative bg-backgorund-card-light dark:bg-background-card-dark rounded-md group">
          <Image
            src={`/projects/restaurant-project.png`}
            alt="restaurant project poster"
            width={300}
            height={150}
          />
          <div className="py-5 text-center font-bold uppercase dark:text-white">
            Restaurant project
          </div>
          <div className="black dark:text-white flex justify-around py-2 xl:hidden xl:group-hover:flex xl:flex-col xl:gap-2 xl:text-white xl:font-bold xl:items-center xl:justify-center  xl:absolute xl:bg-[rgba(0,0,0,0.65)] xl:w-full xl:h-full xl:top-0">
            <div>
              <a
                href="https://andreiandro95.github.io/react-restaurant/"
                title="site location"
                rel="noindex"
                target="_blank"
              >
                Live
              </a>
            </div>
            <div>
              <a
                href="https://github.com/andreiandro95/react-restaurant/tree/master"
                title="code location"
                rel="noindex"
                target="_blank"
              >
                To github
              </a>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="relative bg-backgorund-card-light dark:bg-background-card-dark rounded-md group">
          <Image
            src={`/projects/store-project.png`}
            alt="store project poster"
            width={300}
            height={150}
          />
          <div className="py-5 text-center font-bold uppercase dark:text-white">
            Store project
          </div>
          <div className="black dark:text-white flex justify-around py-2 xl:hidden xl:group-hover:flex xl:flex-col xl:gap-2 xl:text-white xl:font-bold xl:items-center xl:justify-center  xl:absolute xl:bg-[rgba(0,0,0,0.65)] xl:w-full xl:h-full xl:top-0">
            <div>
              <a
                href="https://andreiandro95.github.io/sweet-store/"
                title="site location"
                rel="noindex"
                target="_blank"
              >
                Live
              </a>
            </div>
            <div>
              <a
                href="https://github.com/andreiandro95/sweet-store"
                title="code location"
                rel="noindex"
                target="_blank"
              >
                To github
              </a>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="relative bg-backgorund-card-light dark:bg-background-card-dark rounded-md group group">
          <Image
            src={`/projects/rock-paper-scisor.png`}
            alt="rock paper scissors game poster"
            width={300}
            height={150}
          />
          <div className="py-5 text-center font-bold uppercase dark:text-white">
            Rock paper scissors game
          </div>
          <div className="black dark:text-white flex justify-around py-2 xl:hidden xl:group-hover:flex xl:flex-col xl:gap-2 xl:text-white xl:font-bold xl:items-center xl:justify-center  xl:absolute xl:bg-[rgba(0,0,0,0.65)] xl:w-full xl:h-full xl:top-0">
            <div>
              <a
                href="https://andreiandro95.github.io/rock-paper-scisor/"
                title="site location"
                rel="noindex"
                target="_blank"
              >
                Live
              </a>
            </div>
            <div>
              <a
                href="https://github.com/andreiandro95/rock-paper-scisor"
                title="code location"
                rel="noindex"
                target="_blank"
              >
                To github
              </a>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="relative bg-backgorund-card-light dark:bg-background-card-dark rounded-md group">
          <Image
            src={`/projects/to-do-list.png`}
            alt="to do list poster"
            width={300}
            height={150}
          />
          <div className="py-5 text-center font-bold uppercase dark:text-white">
            To do list
          </div>
          <div className="black dark:text-white flex justify-around py-2 xl:hidden xl:group-hover:flex xl:flex-col xl:gap-2 xl:text-white xl:font-bold xl:items-center xl:justify-center  xl:absolute xl:bg-[rgba(0,0,0,0.65)] xl:w-full xl:h-full xl:top-0">
            <div>
              <a
                href="https://andreiandro95.github.io/to-do-list/"
                title="site location"
                rel="noindex"
                target="_blank"
              >
                Live
              </a>
            </div>
            <div>
              <a
                href="https://github.com/andreiandro95/to-do-list"
                title="code location"
                rel="noindex"
                target="_blank"
              >
                To github
              </a>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="relative bg-backgorund-card-light dark:bg-background-card-dark rounded-md group">
          <Image
            src={`/projects/budget-calculator.png`}
            alt="budget calculator poster"
            width={300}
            height={150}
          />
          <div className="py-5 text-center font-bold uppercase dark:text-white">
            Budget calculator
          </div>
          <div className="black dark:text-white flex justify-around py-2 xl:hidden xl:group-hover:flex xl:flex-col xl:gap-2 xl:text-white xl:font-bold xl:items-center xl:justify-center  xl:absolute xl:bg-[rgba(0,0,0,0.65)] xl:w-full xl:h-full xl:top-0">
            <div>
              <a
                href="https://andreiandro95.github.io/budget-calculator/"
                title="site location"
                rel="noindex"
                target="_blank"
              >
                {" "}
                Live
              </a>
            </div>
            <div>
              <a
                href="https://github.com/andreiandro95/budget-calculator"
                title="code location"
                rel="noindex"
                target="_blank"
              >
                {" "}
                Github
              </a>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="relative bg-backgorund-card-light dark:bg-background-card-dark rounded-md group">
          <Image
            src={`/projects/conference-project.jpg`}
            alt="conference project poster"
            width={300}
            height={150}
          />
          <div className="py-5 text-center font-bold uppercase dark:text-white">
            Conference project
          </div>
          <div className="black dark:text-white flex justify-around py-2 xl:hidden xl:group-hover:flex xl:flex-col xl:gap-2 xl:text-white xl:font-bold xl:items-center xl:justify-center  xl:absolute xl:bg-[rgba(0,0,0,0.65)] xl:w-full xl:h-full xl:top-0">
            <div>
              <a
                href="https://andreiandro95.github.io/conference/index.html"
                title="site location"
                rel="noindex"
                target="_blank"
              >
                Live
              </a>
            </div>
            <div>
              <a
                href="https://github.com/andreiandro95/conference"
                title="code location"
                rel="noindex"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
