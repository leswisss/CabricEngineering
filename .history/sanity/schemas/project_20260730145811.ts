import { defineType, defineField } from "sanity";
import { ProjectsIcon } from "@sanity/icons";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: "name",
      title: "Project Name",
      type: "string",
      validation: (rule) =>
        rule
          .required()
          .min(3)
          .max(96)
          .error("Project Name should be between 3 - 96 characters."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "object",
      fields: [
        {
          name: "locationen",
          title: "Location English",
          type: "string",
          validation: (rule) => rule.required().error("Required"),
        },
        {
          name: "locationfr",
          title: "Location French",
          type: "string",
          validation: (rule) => rule.required().error("Required"),
        },
      ],
    }),
    defineField({
      name: "projecttype",
      title: "Project Type",
      type: "object",
      fields: [
        {
          name: "projecttypeen",
          title: "project type English",
          type: "string",
          validation: (rule) => rule.required().error("Required"),
        },
        {
          name: "projecttypefr",
          title: "projecttype French",
          type: "string",
          validation: (rule) => rule.required().error("Required"),
        },
      ],
    }),
    defineField({
      name: "mainimage",
      title: "Project Image",
      type: "image",
      fields: [
        {
          type: "string",
          name: "alt",
          title: "Alt",
        },
      ],
      validation: (rule) => rule.required().error("Required"),
    }),
  ],
});
