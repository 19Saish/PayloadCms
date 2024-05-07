import { CollectionConfig } from "payload/types";

const Employees: CollectionConfig = {
  slug: "employees",
  labels: {
    singular: "Employee",
    plural: "Employees",
  },
  fields: [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      required: true,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      required: true,
    },
    {
      name: "empId",
      label: "Employee Id",
      type: "text",
      required: true,
    },
    {
      name: "jobtitle",
      label: "Job Title",
      type: "text",
      required: true,
    },
    // {
    //   name: "employeeImage",
    //   label: "Employee Image",
    //   type: "upload",
    //   relationTo: "employees",
    // }
  ],
};


export default Employees;
