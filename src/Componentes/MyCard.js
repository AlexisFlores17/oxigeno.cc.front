import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

export default function MyCard(props) { 
  const {
    nombre_distribuidor,
    horario,
    estado,
    direccion,
    ciudad,
    a_domicilio,
    pago_con_tarjeta,
    notas,
    telefono,
    ultima_actualizacion,
    concentradores,
    tanques,
  }= props.distribuidor

  let disponibilidadTanques  
  let disponibilidadCOncentradores
  let disponibilidad
  
  switch (concentradores) {
    case concentradores <= 5:
      disponibilidadTanques = "baja"
      
      break;
    case concentradores > 5 && concentradores < 10:
      disponibilidadTanques = "media"
      break;
    case concentradores > 10:
      disponibilidadTanques = "alta"
      break;
    default:
      disponibilidadTanques = "sinInformacion"
      break;
  }


  return (
    <Card bg={"light"}>
      <Card.Header>
        <small className="text-muted ">{ultima_actualizacion} </small>        
      </Card.Header>
      <Card.Body>
        <Card.Title className="card-title">{nombre_distribuidor}</Card.Title>
        <Card.Subtitle className="text-muted">Tanques:</Card.Subtitle>
        <Container>          
          <Row>
            <Col>
              Renta: 
            </Col>
            <Col>
              Venta: <Badge variant="warning">Media</Badge>
            </Col>
            <Col>
              Recarga: <Badge variant="danger">Baja</Badge>
            </Col>
          </Row>          
        </Container>
        <br/>
        <Card.Subtitle className="text-muted">Concentradores:</Card.Subtitle>
        <Container>          
          <Row>
            <Col>
              Renta: <Badge variant="info">Lista de espera</Badge>
            </Col>
            <Col>
              Venta: <Badge variant="danger">Baja</Badge>
            </Col>            
          </Row>          
        </Container>
        
        <br/>
        <Card.Subtitle className="mb-2 text-muted">
          A domicilio:
          {a_domicilio ? <CheckIcon style={{color:"blue"}}/> : <CloseIcon style={{color:"red"}}/>}
        </Card.Subtitle>

        <Card.Subtitle className="text-muted">
          Pago con tarjeta:
          {pago_con_tarjeta ? <CheckIcon style={{color:"blue"}}/> : <CloseIcon style={{color:"red"}}/> }
        </Card.Subtitle>
        <br/>
        <Card.Subtitle className="text-muted">Horario:</Card.Subtitle>
        <p>{horario}</p>
        <Card.Subtitle className="text-muted">Dirección:</Card.Subtitle>
        <p>{direccion}</p>

        <br/>
        <Card.Subtitle className="mb-2 text-muted">Notas:</Card.Subtitle>        
        <Card.Text>
          {notas}
        </Card.Text>
        
      </Card.Body>
      
      <Container className="mycard-footer">          
        <Row>
          <Col className="map">            
            <Card.Link href="#" >Mapa</Card.Link>
          </Col>
          <Col className="tel">
            <Card.Link href="#">{telefono}</Card.Link>
          </Col>            
        </Row>          
      </Container>                      
      
    </Card>
  );
}
