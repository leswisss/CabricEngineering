import { defineType, defineField } from "sanity";
import { CogIcon } from "@sanity/icons";

export const service = defineType({
  name: "clienttype",
  title: "Service",
  type: "document",
  icon: CogIcon,
  fieldsets: [
    {
      name: "name",
      title: "Service Name",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    defineField({
      name: "nameen",
      title: "Service Name English",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "name",
    }),
    defineField({
      name: "namefr",
      title: "Service Name French",
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