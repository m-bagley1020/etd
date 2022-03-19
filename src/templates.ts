import type { JSONSchema7 } from './schemas';

export type PostgresTypes = "text" | "boolean" | "date" | "time" | "integer" | "point";
export type ETypes = "image" | "video" | "file" | "number";
export type AllTableTypes = ETypes | PostgresTypes;

type AzureUrl = string;
type VariableName = string;

export interface ICreateTableColumn {
    columnType: AllTableTypes;
    columnAccessor: string;
    columnConstraints?: string;
}

export interface VariableMetadata {
    hint?: string;
    type: "text" | "number" | "date" | "boolean";
    optional: boolean;
    global?: boolean;
}

export interface ITemplateFunctionStep {
    type: "function";
    zip: AzureUrl;
    functionName: string;
    variables?: Record<VariableName, VariableMetadata>;
    runtime: "nodejs";
    trigger: "http" | "base";
    schema?: { input?: JSONSchema7, output?: JSONSchema7 };
}

export interface ITemplateTableStep {
    type: "table";
    columnTypes: ICreateTableColumn[];
    tableName: string;
    data?: AzureUrl;
}

export type ITemplateSteps = (ITemplateTableStep | ITemplateFunctionStep)[][];

export interface ITemplateLauncherFunctionStep extends ITemplateFunctionStep {
    variables?: Record<VariableName, VariableMetadata & { val?: string }>;
    deployStatus?: "error" | "success" | undefined;
}


export interface ITemplateLauncherTableStep extends ITemplateTableStep {
    deployStatus?: "error" | "success" | undefined;
}

export type ITemplateLauncherSteps = (ITemplateLauncherTableStep | ITemplateLauncherFunctionStep)[][];

export interface ITemplate {
    _id: number;
    title: string;
    description: string | null;
    created_at: string;
    tags: string[] | null;
    image: string | null;
    rating_avg: number | null;
    rating_count: number | null;
    user_rating: number | null;
    user_downloaded: boolean;
    is_verified: boolean;
}

export interface ITemplateFull extends Omit<ITemplate, "_id"> {
    steps: string;
    is_private: boolean;
    is_admin: boolean;
}
