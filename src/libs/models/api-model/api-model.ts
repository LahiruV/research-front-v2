export interface AmountPayload {
    Year: number;
    Month: number;
}

export interface AmountResponse {
    Ensemble: number;
    GradientBoosting: number;
    LinearRegression: number;
    RandomForest: number;
}

export interface PricePayload {
    Year: number;
    Month: number;
}

export interface PriceResponse {
    ensemble_prediction: number;
    individual_predictions: {
        GradientBoosting: number;
        LinearRegression: number;
        RandomForest: number;
    };
}

export type BugPayload = {
    file?: File;
} | FormData;

export interface BugResponse {
    class: string;
    confidence: number;
}
