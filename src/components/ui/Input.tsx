interface buttonProperties {
  id: string
  label?: string
  isRequired?: boolean
  value?: string
  onChange: (value?: string) => void
}

export default function Input({
  label,
  isRequired,
  value,
  onChange,
  id,
}: buttonProperties) {
  console.log(value)

  return (
    <div className="relative flex w-fit">
      <span
        className={`absolute left-3 top-0 text-[10px] text-yellow-700 transition ease-in-out ${value ? 'opacity-100' : 'opacity-0'}`}
      >
        {label}
      </span>
      <input
        type="text"
        id={id}
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border border-transparent bg-gray-300 p-3 outline-none focus-within:border-yellow-700"
      />
      <span
        className={`absolute right-2 self-center text-xs font-normal text-gray-500 transition ease-in-out ${isRequired || value ? 'opacity-0' : 'opacity-100'}`}
      >
        Opcional
      </span>
    </div>
  )
}
