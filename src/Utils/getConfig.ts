const getConfig = () => (
    {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
)

export function fecha(fecha: Date): String {
    const datos: String = new Date(fecha).toString()
    return datos
}

export const url = 'http://localhost:8000'

export default getConfig 
