export default function Text({
    children,
    className,
    isSecondary
}: {
    children: React.ReactNode
    className?: string,
    isSecondary?: boolean
}) {
    let customClass = !!className?className:""    
    let fontColorClasses = isSecondary?"text-l-f-secondary dark:text-d-f-secondary":"text-l-f-primary dark:text-d-f-primary"

    return (
        <span className={`${fontColorClasses} ${customClass}`}>
            {children}
        </span>
    )
}
