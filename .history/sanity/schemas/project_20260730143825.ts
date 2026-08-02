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
          .max(110)
          .error("Project Name should be between 3 -  characters."),
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
  ],
});
