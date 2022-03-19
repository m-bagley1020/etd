export type MetricLabel = "Invocations" | "Errors" | "ConcurrentExecutions" | "Duration";
export type QueryStat = "SampleCount" | "Average" | "Sum" | "Minimum" | "Maximum";
export type IGetFunctionMetricsResult = Record<MetricLabel, { Timestamp: number, Value: number, QueryStat: QueryStat }>;
export interface FunctionMetrics {
    QueryStat: QueryStat;
    Timestamps: string[];
    Values: number[];
}
