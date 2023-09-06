export interface ParameterValue {
    title: string;
    value: string;
}

export interface ParameterCategory {
    count: [string, ParameterValue[]];
    power: [string, ParameterValue[]];
    voltage: [string, ParameterValue[]];
    smoothStart: [string, ParameterValue[]];
    electricHeater: [string, ParameterValue[]];
}

export interface Parameters {
    ventilators: [string, ParameterCategory];
    valves: [string, ParameterCategory];
    cabinetParams: [string, ParameterCategory];
}
