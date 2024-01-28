interface buttonProperties {
  id: string
  label?: string
  value?: string
  isRequired?: boolean
  inputWidth?: number
  onChange: (value?: string) => void
}

export default function Input({
  id,
  label,
  value,
  isRequired,
  inputWidth,
  onChange,
}: buttonProperties) {
  console.log(value)

  return (
    <div className="relative flex w-full" style={{ maxWidth: inputWidth }}>
      <label
        className={`absolute left-3 top-0 cursor-text text-[10px] text-yellow-700 transition ease-in-out ${value ? 'opacity-100' : 'opacity-0'}`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-gray-300 bg-gray-200 p-3 outline-none focus-within:border-yellow-700"
        style={{ maxWidth: inputWidth }}
      />
      <label
        className={`absolute right-2 cursor-text self-center text-xs font-normal text-gray-500 transition ease-in-out ${isRequired || value ? 'opacity-0' : 'opacity-100'}`}
        htmlFor={id}
      >
        Opcional
      </label>
    </div>
  )
}
