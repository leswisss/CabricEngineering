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
          name: "typeen",
          title: "Project Type English",
          type: "string",
          validation: (rule) => rule.required().error("Required"),
        },
        {
          name: "typefr",
          title: "Project Type French",
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
    defineField({
      name: "intro",
      title: "Intro",
      type: "object",
      fields: [
        {
          name: "introen",
          title: "Intro English",
          type: "text",
          validation: (rule) => rule.required().error("Required"),
        },
        {
          name: "introfr",
          title: "Intro French",
          type: "text",
          validation: (rule) => rule.required().error("Required"),
        },
      ],
    }),
    defineField({
      name: "brief",
      title: "Brief",
      type: "object",
      fields: [
        {
          name: "briefen",
          title: "Brief English",
          type: "text",
          validation: (rule) => rule.required().error("Required"),
        },
        {
          name: "brieffr",
          title: "Brief French",
          type: "text",
          validation: (rule) => rule.required().error("Required"),
        },
      ],
    }),
    defineField({
      name: "rooms",
      title: "Rooms",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "roomen",
              title: "Room English",
              type: "string",
              validation: (rule) => rule.required().error("Required"),
            },
            {
              name: "roomfr",
              title: "Room French",
              type: "string",
              validation: (rule) => rule.required().error("Required"),
            },
          ],
        },
      ],
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "featureen",
              title: "Feature English",
              type: "string",
              validation: (rule) => rule.required().error("Required"),
            },
            {
              name: "featurefr",
              title: "Feature French",
              type: "string",
              validation: (rule) => rule.required().error("Required"),
            },
          ],
        },
      ],
    }),
    defineField({
      name: "floors",
      title: "Floors",
      type: "number",
    }),
    defineField({
      name: "clienttype",
      title: "Client Type",
      type: "reference",
      to: [
        {
          type: "clienttype",
        },
      ],
      validation: (rule) =>
        rule.required().error("Please select a client type."),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "object",
      fields: [
        {
          name: "statusen",
          title: "Status English",
          type: "string",
          validation: (rule) => rule.required().error("Required"),
        },
        {
          name: "statusfr",
          title: "Status French",
          type: "string",
          validation: (rule) => rule.required().error("Required"),
        },
      ],
      validation: (rule) => rule.required().error("Please set a status."),
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }],
        },
      ],
      validation: (rule) =>
        rule.required().error("Please select at least service."),
    }),
    defineField({
      name: "area",
      title: "Floor Area (m²)",
      type: "number",
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "year",
      title: "year",
      type: "object",
      fields: [
        {
          name: "yearen",
          title: "Year English",
          type: "string",
          validation: (rule) => rule.required().error("Required"),
        },
        {
          name: "yearfr",
          title: "Year French",
          type: "string",
          validation: (rule) => rule.required().error("Required"),
        },
      ],
    }),
    defineField({
      name: "technical",
      title: "Technical Highlights",
      type: "object",
      fields: [
        {
          name: "technicalen",
          title: "Technical English",
          type: "text",
          validation: (rule) => rule.required().error("Required"),
        },
        {
          name: "technicalfr",
          title: "Technical French",
          type: "text",
          validation: (rule) => rule.required().error("Required"),
        },
      ],
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          title: "Image",
          options: { hotspot: true },
          fields: [
            { name: "caption", title: "Caption", type: "string" },
            { name: "aspectRatio", title: "Aspect Ratio", type: "string" },
          ],
        },
        {
          type: "file",
          title: "Video MP4",
          options: { accept: "video/mp4" },
          fields: [
            { name: "caption", title: "Caption", type: "string" },
            { name: "aspectRatio", title: "Aspect Ratio", type: "string" },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
