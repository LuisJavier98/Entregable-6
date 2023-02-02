const getConfig = () => (
    {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
)

export function fecha(fecha) {
    const datos = new Date(fecha).toDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })
    return datos
}

export default getConfig 
