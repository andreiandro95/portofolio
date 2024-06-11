import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import SendEmailForm from "./components/SendEmailForm";

export default function Page() {
  return (
    <main className="relative p-2 md:p-5 w-full overflow-y-auto scroll-smooth">
      <h3 className="text-sm mb-4 text-blue-800 dark:text-teal-300 font-extrabold lg:text-base">
        Contact
      </h3>
      <div className="flex justify-between flex-col lg:flex-row gap-10">
        <div className="grow">
          <h5 className="text-sm mb-5 text-black dark:text-white font-bold">
            Send an email
          </h5>
          <SendEmailForm />
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <a
            href="https://www.linkedin.com/in/andrei-andronachi-575923167/"
            target="_blank"
          >
            <FaLinkedinIn className="dark:text-white" size={30} />
          </a>
          <a href="https://github.com/andreiandro95" target="_blank">
            <FaGithub className="dark:text-white" size={30} />
          </a>
          <span className="flex items-center gap-1 dark:text-white">
            <FaLocationDot className="dark:text-white" size={30} /> Bucharest
          </span>
          <span className="flex items-center gap-1 dark:text-white">
            <MdAlternateEmail className="dark:text-white" size={30} />{" "}
            andrei.andronachi95@gmail.com
          </span>
        </div>
      </div>
    </main>
  );
}
