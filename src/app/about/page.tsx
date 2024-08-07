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
            I hold a Bachelor&apos;s degree in Applied Informatics from the
            &quot;Gheorghe Asachi&quot; Technical University, Faculty of
            Electrical Engineering. My coding journey began in high school, and
            in June 2020, I transitioned to web development. After six months of
            self-learning, I secured a position as a web developer and have
            since gained over three years of professional experience.
          </p>
          <p className="text-xs mb-2 dark:text-white font-medium lg:text-sm">
            My skill set includes core technologies such as HTML, CSS,
            JavaScript, MySql and PHP, along with proficiency in frameworks and
            libraries like Bootstrap, Tailwind CSS, SASS, jQuery and React.
            Throughout my career, I&apos;ve expanded my expertise to include
            Magento 1 and 2, WordPress, Next.js, which I actively use in my
            work.
          </p>
        </div>
      </div>
    </main>
  );
}
