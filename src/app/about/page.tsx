import Image from "next/image";

export default function Page() {
  return (
    <main className="relative p-2 md:p-5 w-full flex items-center justify-center">
      <div className="relative rounded-xl bg-backgorund-card-light dark:bg-background-card-dark p-5 sm:w-9/12 sm:ml-auto lg:m-auto">
        <Image
          className="w-36 rounded-full absolute -top-24 left-1/2 -translate-x-1/2 sm:rounded-lg sm:left-0"
          src={"/me.jpg"}
          width={339}
          height={298}
          alt="me"
        />
        <div className="mt-10">
          <h3 className="text-sm mb-4 text-blue-800 dark:text-teal-300 font-extrabold lg:text-base">
            About me
          </h3>
          <p className="text-xs mb-2 dark:text-white font-medium lg:text-sm">
            Frontend Developer specializing in building and customizing modern
            web applications. I began my professional journey with Magento 2
            development in 2020, later expanding into Magento 1 and
            WordPress-based solutions. Since 2024, I have been working with
            React, Next.js, and TypeScript to develop scalable, component-driven
            applications.
          </p>
          <p className="text-xs mb-2 dark:text-white font-medium lg:text-sm">
            I focus on transforming UI designs into responsive, high-performance
            interfaces, developing custom modules and integrations, and building
            maintainable full-stack solutions using modern tools such as Prisma
            and server-side rendering frameworks. I am committed to writing
            clean, scalable code and continuously refining my expertise within
            the JavaScript ecosystem
          </p>
        </div>
      </div>
    </main>
  );
}
