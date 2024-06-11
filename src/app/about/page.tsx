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
            I hold a Bachelor&lsquo;s degree in Applied Informatics from
            &quot;Gheorghe Asachi&quot; Technical University, Faculty of
            Electrical Engineering. My journey in coding began in high school,
            and I transitioned to web development in June 2020. After six months
            of self-learning, I secured a position as a web developer and have
            amassed over three years of professional experience since then.
          </p>
          <p className="text-xs mb-2 dark:text-white font-medium lg:text-sm">
            My skill set includes foundational technologies such as HTML, CSS,
            JavaScript, and PHP, along with proficiency in Bootstrap, SASS and
            React. My professional career has expanded my expertise to include
            Magento 1 and 2, WordPress, Next.js, and Tailwind CSS.
          </p>
        </div>
      </div>
    </main>
  );
}
