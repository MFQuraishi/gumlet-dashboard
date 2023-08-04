import Text from '@/componentLibrary/darkSupportedFont'
import AggregatedCard from "@/componentLibrary/aggregatedCard"
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='border-solid border dark:border-gray-900 bg-l-foreground dark:bg-d-foreground rounded-xl px-4 py-2 flex flex-row'>
        <AggregatedCard 
          title={"streaming usage"}
          value={"381 Hr 19 Min"}
          imageSrc={"/waves.svg"}
          rightBorderPresent
        />
        <AggregatedCard 
          title={"streaming usage"}
          value={"381 Hr 19 Min"}
          imageSrc={"/storage.svg"}
          rightBorderPresent
        />
        <AggregatedCard 
          title={"streaming usage"}
          value={"381 Hr 19 Min"}
          imageSrc={"/processor.svg"}
        />
      </div>
    </main>
  )
}
