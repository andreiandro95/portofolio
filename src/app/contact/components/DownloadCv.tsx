"use client";

import React from "react";
import { FaFile } from "react-icons/fa";

const DownloadCv = () => {
  const handleDownloadCv = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (confirm("Are you sure you want to download the CV?")) {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = "/CV Andrei Andronachi.pdf";
      link.download = "cv_andrei_andronachi.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <span
      className="flex items-center gap-1 dark:text-white cursor-pointer"
      onClick={handleDownloadCv}
    >
      <FaFile className="dark:text-white" size={30} title="CV" /> CV
    </span>
  );
};

export default DownloadCv;
