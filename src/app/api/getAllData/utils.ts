import allData from "../adhocData/allData"
import { AllDataModel } from "../adhocData/allDataModels"

export const generateRandomData = (): AllDataModel => {
    let allDataClone: AllDataModel = JSON.parse(JSON.stringify(allData))
    
    allDataClone.asset_duration = allDataClone.asset_duration.map(ele => {
        return {
            units: generateRandomNumber(35000, 24000), 
            timestamp: ele.timestamp
        }
    })

    allDataClone.bandwidth_consumption = allDataClone.bandwidth_consumption.map(ele => {
        return {
            units: generateRandomNumber(132000, 50000), 
            timestamp: ele.timestamp
        }
    })

    allDataClone.storage_unit = allDataClone.storage_unit.map(ele => {
        return {
            units: generateRandomNumber(5000000, 4400000), 
            timestamp: ele.timestamp
        }
    })
    

    return allDataClone
}

function generateRandomNumber(max: number, min: number): number {
    return Math.round((Math.random() * (max-min) + min) * 100)/100
} 
