"use client";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export default function Page() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formObject = Object.fromEntries(formData.entries());
    try {
      const response = await fetch("/api/sendEmail", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      if (response.statusText === "OK") {
        alert("Email sent successfully");
        const form = event.target as HTMLFormElement;
        form.reset();
      }
    } catch (err) {
      console.error(err);
      alert("Error, please try to submit the form again");
    }
  };
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 items-start "
          >
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="block w-full py-2 px-5 rounded-md border-2 border-blue-800 dark:border-teal-300 text-black dark:text-white"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="block w-full py-2 px-5 rounded-md border-2 border-blue-800 dark:border-teal-300 text-black dark:text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your e-mail"
              className="block w-full py-2 px-5 rounded-md border-2 border-blue-800 dark:border-teal-300 text-black dark:text-white"
              required
            />
            <textarea
              name="content"
              placeholder="Enter your message"
              className="block w-full py-2 px-5 rounded-md border-2 border-blue-800 dark:border-teal-300 text-black dark:text-white"
              required
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="block w-full py-2 px-5 rounded-md border-2 border-blue-800 dark:border-teal-300 text-black dark:text-white cursor-pointer"
            />
          </form>
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
