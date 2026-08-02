import { type SchemaTypeDefinition } from "sanity";
import { service } from "../schemas/service";
import { clienttype } from "../schemas/clienttype";
import proje

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, clienttype],
};
