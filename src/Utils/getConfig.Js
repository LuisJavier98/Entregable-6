const getConfig = () => (
    {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
)

export function fecha(fecha) {
    const datos = new Date(fecha).toString()
    return datos
}

export const url = import.meta.env.VITE_URL

export default getConfig 
