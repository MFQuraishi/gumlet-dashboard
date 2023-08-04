"use client"

import Text from '@/componentLibrary/darkSupportedFont'
import AggregatedCard from "@/componentLibrary/aggregatedCard"
import Image from 'next/image'
import VisualiserContainer from '@/componentLibrary/visualiserContainer'
import { LineChart } from '@/componentLibrary/lineChart'
import React, { useEffect, useState } from 'react'
import { StorageUsage, StreamingUsage, TranscodingUsage } from './pageModelStore'
import { AllDataModel, TopAssetModel } from './api/adhocData/allDataModels'
import { BarChart } from '@/componentLibrary/barChart'
import TopAssets from '@/componentLibrary/topAssets'

const Page: React.FC = () => {

  const [steamingUsage, setSteamingUsage] = useState<StreamingUsage>({x: [], y: []} as StreamingUsage)
  const [totalStreamingUsage, setTotalStreamingUsage] = useState<string>("--Hr --Min")
  const [transcodingUsage, setTranscodingUsage] = useState<TranscodingUsage>({x: [], y: []} as TranscodingUsage)
  const [totalTranscodingUsage, setTotalTranscodingUsage] = useState<string>("--Hr --Min")
  const [storageValues, setStorageValues] = useState<StorageUsage>({x: [], y: []} as StorageUsage)
  const [totalStorageUsage, setTotalStorageUsage] = useState<string>("--Hr --Min")
  const [topAssets, setTopAssets] = useState<TopAssetModel[]>([] as TopAssetModel[])

  useEffect(() => {
    getAndPopulatePageData()
  }, [])
  
  async function getAndPopulatePageData()  {    
    const data = await fetch(process.env.NEXT_PUBLIC_API_HOST+"api/getAllData", {
      method: "GET"
    });
    const jsonData: AllDataModel = await data.json();

    // setting top assets 
    setTopAssets(jsonData.top_assets)

    // setting streaming values
    let streamingUsageQuantity = 0
    let streamingUsageRaw: StreamingUsage = {x:[], y: []} as StreamingUsage
    jsonData.asset_duration.forEach((element, idx) => {
      streamingUsageRaw.y.push(element.units)
      streamingUsageRaw.x.push(idx)
      streamingUsageQuantity += element.units
    })
    
    setSteamingUsage(streamingUsageRaw)
    setTotalStreamingUsage(convertToHrsAndMinsStr(streamingUsageQuantity))

    // setting storage values
    let storageUsageQuantity = 0
    let storageUsageRaw: StorageUsage ={x:[], y: []} as StorageUsage
    jsonData.storage_unit.forEach((element, idx) => {
      storageUsageRaw.y.push(element.units)
      storageUsageRaw.x.push(idx)
      storageUsageQuantity += element.units
    })
    setStorageValues(storageUsageRaw)
    setTotalStorageUsage(convertToHrsAndMinsStr(storageUsageQuantity))

    // setting transcoding values
    let transcodingUsageQuantity = 0
    let transcodingUsageRaw: TranscodingUsage ={x:[], y: []} as TranscodingUsage
    jsonData.bandwidth_consumption.forEach((element, idx) => {
      transcodingUsageRaw.y.push(element.units)
      transcodingUsageRaw.x.push(idx)
      transcodingUsageQuantity += element.units
    })
    setTranscodingUsage(transcodingUsageRaw)
    setTotalTranscodingUsage(convertToHrsAndMinsStr(transcodingUsageQuantity))
  }

  function convertToHrsAndMinsStr(seconds: number):string {
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    minutes = minutes % 60

    return `${hours.toFixed(0)}Hrs ${minutes.toFixed(0)}Mins`
  }

  return (
    <main>
      <div className='border-solid border dark:border-gray-900 bg-l-foreground dark:bg-d-foreground rounded-xl px-4 py-2 flex flex-col md:flex-row'>
        <AggregatedCard 
          title={"STREAMING USAGE"}
          value={totalStreamingUsage}
          imageSrc={"/waves.svg"}
          rightBorderPresent
        />
        <AggregatedCard 
          title={"STORAGE USAGE"}
          value={totalStorageUsage}
          imageSrc={"/storage.svg"}
          rightBorderPresent
        />
        <AggregatedCard 
          title={"TRANSCODING USAGE"}
          value={totalTranscodingUsage}
          imageSrc={"/processor.svg"}
        />
      </div>

      <div className='py-2 mt-5 flex flex-row flex-wrap'>
        <VisualiserContainer 
          title='Streaming Usage'
        >
          <LineChart
            data={steamingUsage.y}
            labels={steamingUsage.x}
          />
        </VisualiserContainer>
        <VisualiserContainer 
          title='Transcoding Usage'
        >
          <LineChart
            data={transcodingUsage.y}
            labels={transcodingUsage.x}
          />
        </VisualiserContainer>
        <VisualiserContainer 
          title='Storage Usage'
        >
          <BarChart
            data={storageValues.y}
            labels={storageValues.x}
          />
        </VisualiserContainer>
        <VisualiserContainer 
          title='Top Assets'
        >
          <TopAssets
            topAssetsData={topAssets}
          />
        </VisualiserContainer>
      </div>      
    </main>
  )
}


export default Page