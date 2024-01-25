import { ReactNode } from 'react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Each } from '../../utils/Each'

interface ToggleItemProperties {
  icon: ReactNode
  label: string
}

interface ToggleGroupProperties {
  options: ToggleItemProperties[]
  value: string
  onChange: () => void
}

export default function ToggleGroupField({
  options,
  value,
  onChange,
}: ToggleGroupProperties) {
  return (
    <ToggleGroup.Root
      className="flex gap-4 text-gray-600"
      type="single"
      value={value}
      onValueChange={onChange}
    >
      <Each
        of={options}
        render={(item) => (
          <ToggleGroup.Item
            value={item.label}
            className="flex place-items-center gap-3 rounded-md border border-transparent bg-gray-300 p-4 uppercase transition ease-in-out hover:bg-gray-400 data-[state=on]:border-purple-500 data-[state=on]:bg-purple-300 hover:data-[state=on]:opacity-90"
          >
            {item.icon}
            <p>{item.label}</p>
          </ToggleGroup.Item>
        )}
      />
    </ToggleGroup.Root>
  )
}
