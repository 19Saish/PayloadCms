import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";

const Customers:CollectionConfig = {
    slug: "customers",
    auth: true,
    fields: [
        {
            name: "firstName",
            label: "First Name",
            type: "text",
            required: true
        },
        {
            name: "lastName",
            label: "Last Name",
            type: "text",
            required: true
        },
    ]
}

export default Customers