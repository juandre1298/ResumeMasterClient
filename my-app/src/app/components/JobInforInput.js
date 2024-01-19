export default function JobInforInput() {
  return (
    <form>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            for="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Paste the Job Description
          </label>
          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="60"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            Lit the job description
          </textarea>
        </div>
        <div>
          <label
            for="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Some aditional info about the company you have
          </label>
          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="60"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
      </div>
    </form>
  );
}
