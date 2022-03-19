export interface IWorkspace {
    titles_arr: string[];
    root_db: string;
    workspaces_arr: string[];
}

export type PricingTier = "Plus" | "Growth" | "Plus annual" | "Growth annual" | "Bootstrapper" | "Enterprise" | "Free";
