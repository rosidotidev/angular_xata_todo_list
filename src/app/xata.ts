// Generated by Xata Codegen 0.30.1. Please do not edit.
import { buildClient } from "@xata.io/client";
import { secrets } from './secrets';
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "prj_todo_item",
    columns: [
      { name: "description", type: "text" },
      { name: "status", type: "int", notNull: true, defaultValue: "0" },
      { name: "user", type: "string", notNull: true, defaultValue: "user" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type PrjTodoItem = InferredTypes["prj_todo_item"];
export type PrjTodoItemRecord = PrjTodoItem & XataRecord;

export type DatabaseSchema = {
  prj_todo_item: PrjTodoItemRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  apiKey: secrets.XATA_API_KEY,
  enableBrowser: true,
  databaseURL:
   secrets.XATA_DATABASE_URL,

};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};