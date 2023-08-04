import Text from "./darkSupportedFont"

export default function VisualiserContainer({
    title,
    children
}: {
    title: string,
    children: React.ReactNode
}) {
  return (
    <div className={` w-1/2 px-2 py-2 mt-1`}>
        <div className="dark:border-gray-900 bg-l-foreground dark:bg-d-foreground rounded-lg">
            <div className="py-4 px-4 border-solid border-b dark:border-gray-800 border-gray-400">
                <Text className="text-xl font-bold">
                    {title}
                </Text>
            </div>
            <div className="py-4 px-4">
                {children}
            </div>
        </div>
    </div>
  )
}
