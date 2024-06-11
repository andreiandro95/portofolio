"use client";

import React from "react";

const SendEmailForm = () => {
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
      console.log(response);
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
    <>
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
    </>
  );
};

export default SendEmailForm;
