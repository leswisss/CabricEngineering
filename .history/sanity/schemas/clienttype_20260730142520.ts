import { defineType, defineField } from "sanity";
import { UserIcon } from "@sanity/icons";

export const clienttype = defineType({
  name: "clienttype",
  title: "Client Type",
  type: "document",
  icon: UserIcon,
  fieldsets: [
    {
      name: "name",
      title: "Client Type Name",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    defineField({
      name: "nameen",
      title: "Client Type Name English",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "name",
    }),
    defineField({
      name: "namefr",
      title: "Client Type Name French",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "name",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "nameen" },
      validation: (rule) => rule.required().error("Required"),
    }),
  ],
});
