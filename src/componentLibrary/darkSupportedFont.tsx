export default function Text({
    children,
    darkThemeColor,
    lightThemeColor, 
    customClassName,
}: {
    children: React.ReactNode
    darkThemeColor?: string,
    lightThemeColor?: string,
    customClassName?: string
}) {
    let darkColor = !!darkThemeColor?darkThemeColor:"dark:text-slate-100"
    let lightColor = !!lightThemeColor?lightThemeColor:"text-slate-950"
    let customClass = !!customClassName?customClassName:""

    return (
        <span className={`${darkColor} ${lightColor} text-slate-950 dark:text-slate-100 ${customClass}`}>
            {children}
        </span>
    )
}
