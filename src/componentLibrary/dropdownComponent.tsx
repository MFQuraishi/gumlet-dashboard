import { ChangeEvent } from "react"

export default function DropdownComponent({onSelect}: {
    onSelect: (selectedVal: string) => void
}) {
    return (
        <div className="flex justify-end my-4">
        <div className="w-full flex justify-center relative lg:max-w-sm">
        <select
            onChange={(e) => onSelect(e.target.value)}
            className="w-80 px-2 py-1 text-l-f-primary bg-gray-300 border border-gray-300 rounded-md shadow-sm outline-none appearance-none"
        >
            <option value={"7"}>7 Days</option>
            <option value={"14"}>14 Days</option>
            <option value={"30"}>30 Days</option>
            <option value={"default"}>Default</option>
        </select>
    </div>
    </div>
    )
}