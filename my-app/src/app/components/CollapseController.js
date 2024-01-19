import { Collapse } from "react-collapse";
import { useState } from "react";
import PersonalInfoInput from "./PersonalInfoInput";
import WorkExperienceInput from "./WorkExperienceInput";
import JobInforInput from "./JobInforInput";
import * as React from "react";

export default function CollapseController() {
  const [openPersonalInfo, setOpenPersonalInfo] = useState(true);
  const [openWorkExperienceInfo, setOpenWorkExperienceInfo] = useState(false);
  const [openCompanyInfo, setOpenCompanyInfo] = useState(false);

  return (
    <section lang="en" className="flex gap-4 flex-col lg:w-1/2">
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setOpenPersonalInfo(!openPersonalInfo)}
        >
          Personal Info
        </button>
        <Collapse isOpened={openPersonalInfo}>
          <PersonalInfoInput />
        </Collapse>
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setOpenWorkExperienceInfo(!openWorkExperienceInfo)}
        >
          Work Experience
        </button>
        <Collapse isOpened={openWorkExperienceInfo}>
          <WorkExperienceInput />
        </Collapse>
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setOpenCompanyInfo(!openCompanyInfo)}
        >
          Job Information
        </button>
        <Collapse isOpened={openCompanyInfo}>
          <JobInforInput />
        </Collapse>
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <label
          for="remember"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          I agree with the{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
          .
        </label>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </section>
  );
}
