export declare type PostgresTypes = "text" | "boolean" | "date" | "time" | "integer" | "point";
export declare type ETypes = "image" | "video" | "file" | "number";
export declare type AllTableTypes = ETypes | PostgresTypes;
declare type AzureUrl = string;
declare type VariableName = string;
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
}
export interface ITemplateTableStep {
    type: "table";
    columnTypes: ICreateTableColumn[];
    tableName: string;
    data?: AzureUrl;
}
export declare type ITemplateSteps = (ITemplateTableStep | ITemplateFunctionStep)[][];
export interface ITemplateLauncherFunctionStep {
    type: "function";
    zip: AzureUrl;
    functionName: string;
    variables?: Record<VariableName, VariableMetadata & {
        val?: string;
    }>;
    runtime: "nodejs";
    trigger: "http" | "base";
    deployStatus?: "error" | "success" | undefined;
}
export interface ITemplateLauncherTableStep {
    type: "table";
    columnTypes: ICreateTableColumn[];
    tableName: string;
    data?: AzureUrl;
    deployStatus?: "error" | "success" | undefined;
}
export declare type ITemplateLauncherSteps = (ITemplateLauncherTableStep | ITemplateLauncherFunctionStep)[][];
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
export {};
