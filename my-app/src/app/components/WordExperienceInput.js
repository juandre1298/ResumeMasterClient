import NormalInput from "./NormaInput";

const formFields = [
  {
    id: "companyName",
    label: "Company Name",
    type: "text",
    placeholder: "",
    mandatory: true,
  },
  {
    id: "startDate",
    label: "Start Date",
    type: "date",
    mandatory: true,
  },
  {
    id: "finishDate",
    label: "Finish Date",
    type: "date",
    mandatory: true,
  },
  {
    id: "desciption",
    label: "desciption",
    type: "text",
    placeholder: "Try to write you achivements and responsabilities",
    mandatory: true,
  },
];

export default function WordExperienceInput() {
  return (
    <form className="py-4">
      <NormalInput
        id={"skills"}
        label={"Technical Skills"}
        type={"text"}
        placeholder={"JavaScript , Python, HTML/CSS, MySQL, PostgreSQL, C++"}
        mandatory={true}
      />
      <h2>Job Description</h2>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        {formFields.map((e) => {
          return (
            <NormalInput
              id={e.id}
              label={e.label}
              type={e.type}
              placeholder={e.placeholder}
              mandatory={e.mandatory}
            />
          );
        })}
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Add +
      </button>
    </form>
  );
}
