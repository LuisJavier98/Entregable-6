

import style from './DiscoverMore.module.scss'
import Card from 'react-bootstrap/Card';

const DiscoverMore = () => {
  return (
    <section className='min-h-screen'>
      <h2 className='font-bold text-center text-navBar mb-5'>Descubre más</h2>
      <div className={style.containerDiscover}>
        <Card>
          <Card.Img variant='top' src='https://via.placeholder.com/800x400' ></Card.Img>
          <Card.Body>
            <Card.Title>Titulo</Card.Title>
            <Card.Text>Contenido</Card.Text>
          </Card.Body>
          <Card.Footer>Fecha</Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='https://via.placeholder.com/800x400' ></Card.Img>
          <Card.Body>
            <Card.Title>Titulo</Card.Title>
            <Card.Text>Contenido</Card.Text>
          </Card.Body>
          <Card.Footer>Fecha</Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='https://via.placeholder.com/800x400' ></Card.Img>
          <Card.Body>
            <Card.Title>Titulo</Card.Title>
            <Card.Text>Contenido</Card.Text>
          </Card.Body>
          <Card.Footer>Fecha</Card.Footer>
        </Card>
      </div>
    </section>
  )
}

export default DiscoverMore
