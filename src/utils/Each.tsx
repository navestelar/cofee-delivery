import { Children, ReactNode } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type allDataTypes = any

interface EachProperties {
  of: allDataTypes[]
  render: (item: allDataTypes, index: number) => ReactNode
}

export const Each = ({ render, of }: EachProperties) =>
  Children.toArray(of.map((item, index) => render(item, index)))
