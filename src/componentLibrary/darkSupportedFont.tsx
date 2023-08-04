export default function Text({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    let customClass = !!className?className:""    

    return (
        <span className={`text-slate-950 dark:text-slate-100 ${customClass}`}>
            {children}
        </span>
    )
}
