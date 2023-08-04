export interface BandwidthConsumptionModel {
    units: number;
    timestamp: number;
}

export interface TopAssetModel {
    collection_id: string;
    asset_id: string;
    units: number;
    collection_name: string;
}

export interface AssetDurationModel {
    units: number;
    timestamp: number;
}

export interface StorageUnitModel {
    units: number;
    timestamp: number;
}

export interface AllDataModel {
    bandwidth_consumption: BandwidthConsumptionModel[],
    top_assets: TopAssetModel[],
    asset_duration: AssetDurationModel[],
    storage_unit: StorageUnitModel[],
}