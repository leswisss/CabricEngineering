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
      title: "Image",
      type: "image",
      fields: [
        {
          type: "string",
          name: "alt",
          title: "Alt",
        },
        { name: "aspectRatio", title: "Aspect Ratio", type: "string" },
      ],
      validation: (rule) => rule.required().error("Required"),
    }),
  ],
  preview: {
    select: {
      title: "image.alt",
      media: "image",
    },
  },
});
