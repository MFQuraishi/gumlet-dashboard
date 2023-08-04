import Image from 'next/image'
import Text from './darkSupportedFont'


export default function AggregatedCard({
    title,
    value,
    imageSrc,
    rightBorderPresent,
}: {
    title: string,
    value: string,
    imageSrc: string,
    rightBorderPresent?: boolean
}) {
  return (
    <div className={`w-1/3 relative px-6 py-2 ${rightBorderPresent?"border-solid border-r dark:border-r-gray-800 border-r-gray-400":""}`}>
      <div className='flex flex-col'>
        <Text isSecondary className='text-sm font-bold'>
          {title}
        </Text>
        <Text className='font-bold'>
          {value}
        </Text>
      </div>
      <Image
        className='absolute top-1 right-6'
        src={imageSrc}
        alt='card-identifier-image'
        width={20}
        height={20}
      />
    </div>
  )
}
