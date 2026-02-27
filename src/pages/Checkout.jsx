import { useForm } from 'react-hook-form';

const Checkout = () => {
  //el handleSubmit se encarga de validar el formulario y llamar a onSubmit si todo es correcto

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <p className="text-gray-600">Aquí puedes revisar tu pedido y proceder al pago.</p>
      <form className='mb-3' onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Nombre Completo</label>
          <input
            type="text"
            className='input w-full'
            //el register se encarga de registrar el input en el formulario y aplicar las validaciones
            {...register("fullName", { required: true })}
          />

          <button className="btn btn-primary" type="submit">Guardar Información</button>
        </div>
      </form>
      <div className="mt-6">

      </div>
    </div>
  )
}

export default Checkout
