import { type SchemaTypeDefinition } from "sanity";
import { service } from "../schemas/service";
import { clienttype } from "../schemas/clienttype";
import { project } from "../schemas/project";
import { gallery } from "../schemas/gallery";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, clienttype, project, gallery],
};
