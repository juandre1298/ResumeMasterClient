import NormalInput from "./NormaInput";

const formFields = [
  {
    id: "first_name",
    label: "First name",
    type: "text",
    placeholder: "John",
    mandatory: true,
  },
  {
    id: "last_name",
    label: "Last name",
    type: "text",
    placeholder: "Doe",
    mandatory: true,
  },
  {
    id: "company",
    label: "Company",
    type: "text",
    placeholder: "Flowbite",
    mandatory: true,
  },
  {
    id: "phone",
    label: "Phone number",
    type: "tel",
    placeholder: "123-45-678",
    pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
    mandatory: true,
  },
  {
    id: "website",
    label: "Website URL / Portfolio",
    type: "url",
    placeholder: "flowbite.com",
    mandatory: true,
  },
  {
    id: "email",
    label: "Email address",
    type: "email",
    placeholder: "john.doe@company.com",
    mandatory: true,
  },
];

export default function PersonalInfoInput() {
  return (
    <form className="py-4">
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
    </form>
  );
}
