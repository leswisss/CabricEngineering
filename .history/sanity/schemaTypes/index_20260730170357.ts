import { type SchemaTypeDefinition } from "sanity";
import { service } from "../schemas/service";
import { clienttype } from "../schemas/clienttype";
import { clienttype } from "../schemas/clienttype";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, clienttype],
};
