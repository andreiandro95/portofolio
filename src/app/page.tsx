import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative p-2 md:p-5 w-full">
      <div className="flex gap-3 flex-col lg:flex-row items-center justify-center md:justify-between h-full">
        <div className="w-full ">
          <h3 className="text-lg font-medium text-blue-800 dark:text-teal-300">
            Hi, my name is
          </h3>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 dark:text-teal-300">
            Andrei Andronachi.
          </h1>
          <p className="mt-5 text-base dark:text-white">
            I&apos;m a self-taught web developer with a passion for building
            efficient websites and web applications.
          </p>
          <Link
            className="border-2 inline-block py-1 px-3 border-blue-800 rounded mt-5 dark:text-white dark:border-teal-300 hover:bg-blue-800 hover:text-white dark:hover:bg-teal-300 dark:hover:text-black tracking-wide"
            href={"/contact"}
          >
            Contact
          </Link>
        </div>
        <div className="w-full ">
          <Image
            src={`/presentation.png`}
            alt="code in react"
            width={500}
            height={272}
            className="min-w-full"
          />
        </div>
      </div>
    </main>
  );
}
