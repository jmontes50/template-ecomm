import { useForm } from 'react-hook-form';
import { MapContainer, TileLayer } from 'react-leaflet'

const Checkout = () => {
  //el handleSubmit se encarga de validar el formulario y llamar a onSubmit si todo es correcto

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <p className="text-gray-600">
        Aquí puedes revisar tu pedido y proceder al pago.
      </p>
      <div className='mt-4 grid-cols-1 md:grid-cols-2 gap-4 grid'>
        {/* form */}
        <form className="mb-3 col-span-1" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">
            Nombre Completo
          </label>
          <input
            type="text"
            className="input w-full"
            //el register se encarga de registrar el input en el formulario y aplicar las validaciones
            // {...register("fullName", { required: true, minLength: 3, maxLength: 50 })}
            {...register("fullName", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 50,
                message: "El nombre no debe exceder los 50 caracteres",
              },
            })}
          />
            {errors.fullName && (
              // preguntamos si hay un error en el campo fullName y mostramos el mensaje de error correspondiente
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}

        </div>
        <div className='mb-2'>
          <label className="block text-sm font-medium mb-1">
            Correo Electrónico
          </label>
          <input
            type="email"
            className="input w-full"
            {...register("email", {
              required: "Este campo es obligatorio",
              //pattern, se encarga de validar el formato del correo electrónico utilizando una expresión regular
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Correo electrónico inválido",
              },
            })}
          />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
        </div>
        <div className='mb-2'>
          <label className="block text-sm font-medium mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            className="input w-full"
            {...register("phone", {
              required: "Este campo es obligatorio",
            })}
          />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
        </div>
        <div className='mb-2'>
          <label className="block text-sm font-medium mb-1">
            Dirección de Envío
          </label>
          <input
            type="text"
            className="input w-full"
            {...register("address", {
              required: "Este campo es obligatorio",
            })}
          />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
        </div>
        <button className="btn btn-primary" type="submit">
            Guardar Información
        </button>
        </form>
        {/* leaflet */}
        <div className='col-span-1 h-105'>
          <MapContainer center={[-12.08385, -77.02832]} zoom={13} className="h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </MapContainer>
        </div>
      </div>



      <div className="mt-6"></div>
    </div>
  );
}

export default Checkout
