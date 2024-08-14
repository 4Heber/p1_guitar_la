export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

/**
 * CartItem hereda los types de Guitar.
 * Para las interfaces se utiliza 'extends':
 * export interface CartItem extends Guitar
 */
export type CartItem = Guitar &{
    quantity: number
}

/**
 * Utility Type - Pick
 * Permite seleccionar los types a heredar
 */
// export type CartItem = Pick<Guitar, 'id'|'name'|'price'> & {
//     quantity: number
// }