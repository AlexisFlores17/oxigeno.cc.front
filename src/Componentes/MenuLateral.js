import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export const MenuLateral = (props) =>{

    const {
        toggleCheckbox,
        tanqueVenta,
        tanqueRenta,
        tanqueRecarga,
        concentradorVenta,
        concentradorRenta,   
        setDomicilioSwitch,
        setTarjetaSwitch,
        domicilioSwitch,
        tarjetaSwitch        
    } = props

    const [tanque, setTanque] = useState(true)
    const [concentrador, setConcentrador] = useState(false)
    const [domicilio, setDomicilio] = useState(false)
    const [tarjeta, setTarjeta] = useState(false)

    
    
    
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

    

    return(
        <div className="menu-lateral-container col-sm-3">
            <div className="menu-lateral-header">
                Filtros avanzados
            </div>
            <Card style={{ width: '100%' }}>
                <Card.Header onClick={ () => toggle(0) } id="tanque-header">
                    <div className="flecha-texto">
                        Tanques
                    </div>
                    <div className="flecha">
                        { !tanque ? <KeyboardArrowDown /> : <KeyboardArrowUp /> }
                    </div>
                </Card.Header>
                { tanque && 
                    <div className="menu-checkbox">
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox color="primary" checked={tanqueVenta} onChange={() => toggleCheckbox(0)} name="checkedA" />}
                                label="Venta"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" checked={tanqueRenta} onChange={() => toggleCheckbox(1) } name="checkedA" />}
                                label="Renta"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" checked={tanqueRecarga} onChange={() => toggleCheckbox(2) } name="checkedA" />}
                                label="Recarga"
                            />
                        </FormGroup>
                    </div>
                }
            </Card>
            <Card style={{ width: '100%' }}>
                <Card.Header onClick={() => toggle(1) } id="tanque-header">
                    <div className="flecha-texto">
                        Concentradores
                    </div>
                    <div className="flecha">
                        { !concentrador ? <KeyboardArrowDown /> : <KeyboardArrowUp /> }
                    </div>
                </Card.Header>
                { concentrador && 
                    <div className="menu-checkbox">
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox color="primary" checked={concentradorVenta} onChange={() => toggleCheckbox(3) } name="checkedA" />}
                                label="Venta"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" checked={concentradorRenta} onChange={() => toggleCheckbox(4) } name="checkedA" />}
                                label="Renta"
                            />
                        </FormGroup>
                    </div>
                }
            </Card>
            <Card style={{ width: '100%' }}>
                <Card.Header onClick={() => toggle(2) } id="tanque-header">
                    <div className="flecha-texto">
                        Servicio a domicilio
                    </div>
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
                    <div className="flecha-texto">
                        Pago con tarjeta
                    </div>
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