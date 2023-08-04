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
    <div className={`md:w-1/3 relative px-6 md:py-2 py-4 ${rightBorderPresent?"border-solid max-md:border-b md:border-r dark:border-gray-800 border-gray-400":""}`}>
      <div className='flex flex-col'>
        <Text isSecondary className='text-sm font-bold mb-2'>
          {title}
        </Text>
        <Text className='font-bold'>
          {value}
        </Text>
      </div>
      <Image
        className='absolute md:top-1 top-3 right-6'
        src={imageSrc}
        alt='card-identifier-image'
        width={20}
        height={20}
      />
    </div>
  )
}
