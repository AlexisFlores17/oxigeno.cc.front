import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export const MenuLateral = () =>{

    const [tanque, setTanque] = useState(false)
    const [concentrador, setConcentrador] = useState(false)
    const [domicilio, setDomicilio] = useState(false)
    const [tarjeta, setTarjeta] = useState(false)

    const [domicilioSwitch, setDomicilioSwitch] = useState(false)
    const [tarjetaSwitch, setTarjetaSwitch] = useState(false)

    const toggle = (id) =>{

        switch (id) {
            case 0:
                setTanque(!tanque);
                break;
            case 1: 
                setConcentrador(!concentrador);
                break;
            case 2:
                setDomicilio(!domicilio);
                break;
            case 3: 
                setTarjeta(!tarjeta);
                break;
            default:
                break;
        }
    }

    const prueba = () => {
        console.log("algo")
    }


    return(
        <div className="menu-lateral-container col-sm-3">
            <div className="menu-lateral-header">
                Filtros avanzados
            </div>
            <Card style={{ width: '100%' }}>
                <Card.Header onClick={ () => toggle(0) } id="tanque-header">
                    Tanques
                    <div className="flecha">
                        { !tanque ? <KeyboardArrowDown /> : <KeyboardArrowUp /> }
                    </div>
                </Card.Header>
                { tanque && 
                    <div className="menu-checkbox">
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox color="primary" checked={true} onChange={() => {} } name="checkedA" />}
                                label="Venta"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" checked={true} onChange={() => {} } name="checkedA" />}
                                label="Renta"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" checked={true} onChange={() => {} } name="checkedA" />}
                                label="Recarga"
                            />
                        </FormGroup>
                    </div>
                }
            </Card>
            <Card style={{ width: '100%' }}>
                <Card.Header onClick={() => toggle(1) } id="tanque-header">
                    Concentradores
                    <div className="flecha">
                        { !concentrador ? <KeyboardArrowDown /> : <KeyboardArrowUp /> }
                    </div>
                </Card.Header>
                { concentrador && 
                    <div className="menu-checkbox">
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox color="primary" checked={true} onChange={() => {} } name="checkedA" />}
                                label="Venta"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" checked={true} onChange={() => {} } name="checkedA" />}
                                label="Renta"
                            />
                        </FormGroup>
                    </div>
                }
            </Card>
            <Card style={{ width: '100%' }}>
                <Card.Header onClick={() => toggle(2) } id="tanque-header">
                    Servicio a domicilio
                    <div className="flecha">
                        { !domicilio ? <KeyboardArrowDown /> : <KeyboardArrowUp /> }
                    </div>
                </Card.Header>
                
                    { domicilio && 
                        <div className="switch-container">
                            <Switch
                                className="switch"
                                checked={domicilioSwitch}
                                onChange={() => setDomicilioSwitch(!domicilioSwitch)}
                                name="checkedA"
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </div>
                    }
            </Card>
            <Card style={{ width: '100%' }}>
                <Card.Header onClick={ () => toggle(3) } id="tanque-header">
                    Pago con tarjeta
                    <div className="flecha">
                        { !tarjeta ? <KeyboardArrowDown /> : <KeyboardArrowUp /> }
                    </div>
                </Card.Header>
                    { tarjeta && 
                        <div className="switch-container">
                            <Switch
                                checked={tarjetaSwitch}
                                onChange={() => setTarjetaSwitch(!tarjetaSwitch)}
                                name="checkedA"
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </div>
                    }
            </Card>
        </div>
    );
}