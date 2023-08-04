"use client"

import Text from '@/componentLibrary/darkSupportedFont'
import AggregatedCard from "@/componentLibrary/aggregatedCard"
import Image from 'next/image'
import VisualiserContainer from '@/componentLibrary/visualiserContainer'
import { LineChart } from '@/componentLibrary/lineChart'
import React, { useEffect, useState } from 'react'
import { StreamingUsage, TranscodingUsage } from './pageModelStore'
import { AllDataModel } from './api/adhocData/allDataModels'

const Page: React.FC = () => {

  const [steamingUsage, setSteamingUsage] = useState<StreamingUsage>({} as StreamingUsage)
  const [totalStreamingUsage, setTotalStreamingUsage] = useState<string>("--Hr --Min")
  const [transcodingUsage, setTranscodingUsage] = useState<TranscodingUsage>({} as TranscodingUsage)
  const [totalTranscodingUsage, setTotalTranscodingUsage] = useState<string>("--Hr --Min")
  // const [transcodingUsage, setTranscodingUsage] = useState<TranscodingUsage>({} as TranscodingUsage)
  const [totalStorageUsage, setTotalStorageUsage] = useState<string>("--Hr --Min")

  useEffect(() => {
    getAndPopulatePageData()
  }, [])
  
  async function getAndPopulatePageData()  {    
    const data = await fetch(process.env.NEXT_PUBLIC_API_HOST+"api/getAllData", {
      method: "GET"
    });
    const jsonData: AllDataModel = await data.json();

    let streamingUsageQuantity = 0
    let streamingUsageRaw: StreamingUsage = {x:[], y: []} as StreamingUsage
    jsonData.asset_duration.forEach((element, idx) => {
      streamingUsageRaw.y.push(element.units)
      streamingUsageRaw.x.push(idx)
      streamingUsageQuantity += element.units
    })
    
    setSteamingUsage(streamingUsageRaw)
    setTotalStreamingUsage(convertToHrsAndMinsStr(streamingUsageQuantity))

    let storageUsageQuantity = 0
    jsonData.storage_unit.forEach((element, idx) => {
      // steamingUsage.y.push(element.units)
      // steamingUsage.x.push(idx)
      storageUsageQuantity += element.units
    })
    setTotalStorageUsage(convertToHrsAndMinsStr(storageUsageQuantity))

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
          <Text>
            Coming soon...
          </Text>
        </VisualiserContainer>
        <VisualiserContainer 
          title='Top Assets'
        >
          <Text>
            Coming soon...
          </Text>
        </VisualiserContainer>
      </div>      
    </main>
  )
}


export default Page