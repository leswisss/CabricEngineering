import { defineType, defineField } from "sanity";
import {CogIcon} from '@sanity/icons/Cog'

export const services = defineType({
  name: "services",
  title: "Services",
  type: "document",
  icon: TransferIcon,
  fieldsets: [
    {
      name: "name",
      title: "Transaction Name",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    defineField({
      name: "nameen",
      title: "Transaction Name English",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "name",
    }),
    defineField({
      name: "namefr",
      title: "Transaction Name French",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "name",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "namefr" },
      validation: (rule) => rule.required().error("Required"),
    }),
  ],
});