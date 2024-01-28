import { MapPinLine } from '@phosphor-icons/react'
import colors from 'tailwindcss/colors'

import Input from '../../components/ui/Input'

export default function AddressForm() {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-baloo text-lg font-bold text-gray-700">
        Complete seu pedido
      </p>
      <div className="flex w-full max-w-[640px] flex-col gap-8 rounded-md bg-gray-100 p-10">
        <div className="flex items-start gap-2">
          <MapPinLine size={22} color={colors.yellow['700']} />
          <div className="flex flex-col gap-1">
            <h3 className="text-base leading-4 text-gray-700">
              Endereço de Entrega
            </h3>
            <p className="text-sm text-gray-600">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </div>

        <form className="flex flex-col gap-4">
          <Input
            id="cep"
            onChange={() => console.log('aaaa')}
            label="CEP"
            value=""
            isRequired
            inputWidth={200}
          />

          <Input
            id="rua"
            onChange={() => console.log('aaaa')}
            label="Rua"
            value=""
            isRequired
          />

          <div className="flex gap-3">
            <Input
              id="numero"
              onChange={() => console.log('aaaa')}
              label="Número"
              value=""
              isRequired
              inputWidth={200}
            />
            <Input
              id="complemento"
              onChange={() => console.log('aaaa')}
              label="Complemento"
              value=""
            />
          </div>

          <div className="flex gap-3">
            <Input
              id="bairro"
              onChange={() => console.log('aaaa')}
              label="Bairro"
              value=""
              isRequired
              inputWidth={200}
            />
            <Input
              id="cidade"
              onChange={() => console.log('aaaa')}
              label="Cidade"
              value=""
              isRequired
            />
            <Input
              id="uf"
              onChange={() => console.log('aaaa')}
              label="UF"
              value=""
              isRequired
              inputWidth={60}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
