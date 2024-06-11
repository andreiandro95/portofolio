import Image from "next/image";

export default function Page() {
  return (
    <main className="relative p-2 md:p-5 w-full">
      <h3 className="text-sm mb-4 text-blue-800 dark:text-teal-300 font-extrabold lg:text-base">
        Skills
      </h3>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center h-[96px]">
            <Image
              src={"/skills/html.svg"}
              width={96}
              height={96}
              alt="html logo"
              className="lg:grayscale hover:filter-none transition-all"
            ></Image>
          </div>
          <p className="text-base mt-2 dark:text-white">HTML</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center h-[96px]">
            <Image
              src={"/skills/css.svg"}
              width={96}
              height={96}
              alt="css logo"
              className="lg:grayscale hover:filter-none transition-all"
            ></Image>
          </div>
          <p className="text-base mt-2 dark:text-white">CSS</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center h-[96px]">
            <Image
              src={"/skills/sass.svg"}
              width={96}
              height={96}
              alt="sass logo"
              className="lg:grayscale hover:filter-none transition-all"
            ></Image>
          </div>
          <p className="text-base mt-2 dark:text-white">Sass</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center h-[96px]">
            <Image
              src={"/skills/bootstrap.svg"}
              width={96}
              height={96}
              alt="bootstrap logo"
              className="lg:grayscale hover:filter-none transition-all"
            ></Image>
          </div>
          <p className="text-base mt-2 dark:text-white">Bootstrap</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center h-[96px]">
            <Image
              src={"/skills/tailwind.svg"}
              width={96}
              height={96}
              alt="tailwind logo"
              className="lg:grayscale hover:filter-none transition-all"
            ></Image>
          </div>
          <p className="text-base mt-2 dark:text-white">Tailwind</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center h-[96px]">
            <Image
              src={"/skills/js.svg"}
              width={96}
              height={96}
              alt="javascript logo"
              className="lg:grayscale hover:filter-none transition-all"
            ></Image>
          </div>
          <p className="text-base mt-2 dark:text-white">Javascript</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center h-[96px]">
            <Image
              src={"/skills/jquery.svg"}
              width={96}
              height={96}
              alt="jquery logo"
              className="lg:grayscale hover:filter-none transition-all"
            ></Image>
          </div>
          <p className="text-base mt-2 dark:text-white">Jquery</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center h-[96px]">
            <Image
              src={"/skills/react.svg"}
              width={96}
              height={96}
              alt="react logo"
              className="lg:grayscale hover:filter-none transition-all"
            ></Image>
          </div>
          <p className="text-base mt-2 dark:text-white">React Js</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center h-[96px]">
            <Image
              src={"/skills/next.svg"}
              width={96}
              height={96}
              alt="next logo"
              className="lg:grayscale hover:filter-none transition-all"
            ></Image>
          </div>
          <p className="text-base mt-2 dark:text-white">Next Js</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center h-[96px]">
            <Image
              src={"/skills/php.svg"}
              width={96}
              height={96}
              alt="php logo"
              className="lg:grayscale hover:filter-none transition-all"
            ></Image>
          </div>
          <p className="text-base mt-2 dark:text-white">PHP</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center h-[96px]">
            <Image
              src={"/skills/mysql.svg"}
              width={96}
              height={96}
              alt="mysql logo"
              className="lg:grayscale hover:filter-none transition-all"
            ></Image>
          </div>
          <p className="text-base mt-2 dark:text-white">MySql</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center h-[96px]">
            <Image
              src={"/skills/magento.svg"}
              width={96}
              height={96}
              alt="magento logo"
              className="lg:grayscale hover:filter-none transition-all"
            ></Image>
          </div>
          <p className="text-base mt-2 dark:text-white">Magento 1&2</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center h-[96px]">
            <Image
              src={"/skills/wordpress.svg"}
              width={96}
              height={96}
              alt="wordpress logo"
              className="lg:grayscale hover:filter-none transition-all"
            ></Image>
          </div>
          <p className="text-base mt-2 dark:text-white">Wordpress</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center h-[96px]">
            <Image
              src={"/skills/git.svg"}
              width={96}
              height={96}
              alt="git logo"
              className="lg:grayscale hover:filter-none transition-all"
            ></Image>
          </div>
          <p className="text-base mt-2 dark:text-white">Git</p>
        </div>
      </div>
    </main>
  );
}
