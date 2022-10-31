import { useForm } from 'react-hook-form'

export const OrderFilter = ({ filters, setFilters }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form id='sorting-form' onSubmit={handleSubmit((data) => {
      setFilters({
        ...filters,
        sort: {
          field: data.field,
          order: data.order
        }
      })
    })}>
      <select {...register('field')} defaultValue={filters.sort.field}>
        <option value={'brand'}>Nombre</option>
        <option value={'manufacturer'}>Fabricante</option>
        <option value={'price'}>Precio</option>
        <option value={'color'}>Color</option>
      </select>

      <select {...register('order')} defaultValue={filters.sort.order}>
        <option value={'ASC'}>Ascendente</option>
        <option value={'DESC'}>Descendente</option>
      </select>
      <button>Ordenar</button>
    </form>
  )
}
