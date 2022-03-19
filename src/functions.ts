export type IFunctionParamCors = true | { 
    allowedOrigins: string[];
    allowedHeaders: ["Content-Type", "X-Amz-Date", "Authorization", "X-Api-Key", "X-Amz-Security-Token", "X-Amz-User-Agent"];
    allowCredentials: false;
};

export interface IFunctionParams {
    runtime: "nodejs12.x";
    memorySize: number;
    timeout: number;
    cors: IFunctionParamCors
}

export interface IFunctionOptions {
    dbName: string;
    route: string;
    functionName: string;
    envVariables: Record<string, any>;
    trigger: "http" | "base";
    packageName: string;
    runtime: "nodejs";
    params: IFunctionParams;
}
