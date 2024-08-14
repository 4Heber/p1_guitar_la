import type { Guitar } from "../types"
/**
 * TS
 * Se definen los tipos de datos que recibe como props.
 * Se asigna el type/interface del objeto 'guitar'.
 * Idicamos el tipo de dato que recibe la función como parámetro (type Guitar) y el valor que retorna (nada void) 
 */
type GuitarProps = {
    guitar: Guitar,
    addToCart: (item: Guitar) => void
}

export default function Guitar({guitar, addToCart} : GuitarProps){

    const { name, image, description, price} = guitar 

    // function handleClick(guitar){
    //     console.log(guitar);
    // }

    return(
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                    <p>{description}</p>
                    <p className="fw-black text-primary fs-3">${price}</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100"
                        /** Call function in callback */
                        // onClick={() => handleClick(guitar)}

                        /** 
                         * setCart tiene acceso al state previo, por convención de nombre con prefijo prev
                         * spread operator para copiar todos lo elementos del state previo y añadir el elemento nuevo
                         * */
                        // onClick={() => setCart((prevCart) => [...prevCart, guitar])}

                        /** Logica de función definida en componente padre App */
                        onClick={() => addToCart(guitar)}
                    >Agregar al Carrito</button>
                </div>
            </div>
    )
}