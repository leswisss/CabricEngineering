import { defineType, defineField } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export const gallery = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  icon: ImagesIcon,
  fields: [
    defineField({
      name: "image",
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
