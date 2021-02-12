import React,{ useState } from 'react';
import {useForm} from '../../hooks/useForm';
import Checkbox from '@material-ui/core/Checkbox';


export const ContenidoFormulario = () => {

    const [ boolValues, setBoolValues ] = useState({
        aDomicilio:false,
        pagoConTarjeta: false,
        ofreceVentaDeTanque:false,
        ofreceRentaDeTanque:false,
        ofreceRecargaDeTanque:false,
        ofreceVentaDeConcentrador:false,
        ofreceRentaDeConcentrador:false,
    })

    const initialForm = {
        nombreDistribuidor: '',
        rfc: '',
        telefono: '',
        direccion: '',
        horario: '',
        linkPagina:'',
        whatsapp:'',
    }
    const [ formValues, handleInputChange, reset ] = useForm( initialForm );

    const submit = (e)=>{
        e.preventDefault();
        console.log(formValues);
        console.log(boolValues);
    }

    return (
        <div className="formularioContainer">
            <div className="formularioTitulo">Formulario de registro para distribuidores</div>
            <div className="formulariocontenido">
                <div className="formularioFormulario col-12 col-md-8">
                    <form>
                        <div className="form-group formularioNombre">
                            <label htmlFor="nombreDistribuidor">Nombre de la empresa</label>
                            <input type="text" className="form-control" placeholder="Nombre" name="nombreDistribuidor" onChange={handleInputChange} />
                        </div>

                        <div className="form-group formularioRFCTel">
                            <div className="formularioRFC">
                                <label htmlFor="rfc">RFC</label>
                                <input type="text" className="form-control" placeholder="RFC" name="rfc" onChange={handleInputChange} />
                            </div>
                            <div className="formularioTel">
                                <label htmlFor="telefono">Telefono</label>
                                <input type="text" className="form-control" placeholder="Telefono" name="telefono" onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="form-group formularioDireccion">
                            <label htmlFor="direccion">Dirección</label>
                            <input type="text" className="form-control" placeholder="Dirección" name="direccion" onChange={handleInputChange} />
                        </div>

                        <div className="form-group formularioHorario">
                            <label htmlFor="horario">Horario</label>
                            <input type="text" className="form-control" placeholder="Horario" name="horario" onChange={handleInputChange} />
                        </div>

                        <div className="form-group formularioWebWhats">
                            <div className="formularioWeb">
                                <label htmlFor="linkPagina">Página web</label>
                                <input type="text" className="form-control" placeholder="Página web" name="linkPagina" onChange={handleInputChange} />
                            </div>
                            <div className="formularioWhats">
                                <label htmlFor="whatsapp">Whatsapp</label>
                                <input type="text" className="form-control" placeholder="Whatsapp" name="whatsapp" onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="form-group formularioDomicilioTarjeta">
                         
                            <div className="form-check formularioDomicilio" >
                                <div><label htmlFor="aDomicilio">Servicio a domicilio</label></div>
                                <div className="domicilioBoton">
                                    <span>¿Ofreces servicio a domicilio?</span>
                                    <Checkbox
                                        checked={boolValues.aDomicilio}
                                        onChange={() => setBoolValues({ ...boolValues, aDomicilio: !boolValues.aDomicilio})}
                                        name="aDomicion"
                                        color="primary"
                                    />

                                </div>
                            </div>

                            <div className="form-check formularioTarjeta" >
                                <div><label htmlFor="pagoConTarjeta">Pago con tarjeta</label></div>
                                <div className="tarjetaBoton">
                                    <span>¿Ofreces pago con tarjeta?</span>
                                    <Checkbox
                                        checked={boolValues.pagoConTarjeta}
                                        onChange={() => setBoolValues({ ...boolValues, pagoConTarjeta: !boolValues.pagoConTarjeta})}
                                        name="pagoConTarjeta"
                                        color="primary"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group formularioTanquesConcentradores">
                         
                            <div className="form-check formularioTanques" >
                                <div><label htmlFor="ofreceVentaDeTanque">Tanques</label></div>
                                <div className="botonTanques">
                                    <span>Venta de tanques</span>
                                    <Checkbox
                                        checked={boolValues.ofreceVentaDeTanque }
                                        onChange={() => setBoolValues({ ...boolValues, ofreceVentaDeTanque  : !boolValues.ofreceVentaDeTanque })}
                                        name="ofreceVentaDeTanque"
                                        color="primary"
                                    />
                                </div>
                                <div className="botonTanques">
                                    <span>Renta de tanques</span>
                                    <Checkbox
                                        checked={boolValues.ofreceRentaDeTanque }
                                        onChange={() => setBoolValues({ ...boolValues, ofreceRentaDeTanque  : !boolValues.ofreceRentaDeTanque })}
                                        name="ofreceRentaDeTanque"
                                        color="primary"
                                    />
                                </div>
                                <div className="botonTanques">
                                    <span>Recarga de tanques</span>
                                    <Checkbox
                                        checked={boolValues.ofreceRecargaDeTanque }
                                        onChange={() => setBoolValues({ ...boolValues, ofreceRecargaDeTanque  : !boolValues.ofreceRecargaDeTanque })}
                                        name="ofreceRecargaDeTanque"
                                        color="primary"
                                    />                                
                                </div>
                            </div>

                            <div className="form-check formularioConcentradores" >
                                <label htmlFor="ofreceVentaDeConcentradores">Concentradores</label>
                                <div className="botonConcentradores">
                                    <span>Venta de concentradores</span>
                                    <Checkbox
                                        checked={boolValues.ofreceVentaDeConcentrador }
                                        onChange={() => setBoolValues({ ...boolValues, ofreceVentaDeConcentrador  : !boolValues.ofreceVentaDeConcentrador })}
                                        name="ofreceVentaDeConcentrador"
                                        color="primary"
                                    />                                </div>
                                <div className="botonConcentradores">
                                    <span>Renta de concentradores</span>
                                    <Checkbox
                                        checked={boolValues.ofreceRentaDeConcentrador }
                                        onChange={() => setBoolValues({ ...boolValues, ofreceRentaDeConcentrador  : !boolValues.ofreceRentaDeConcentrador })}
                                        name="ofreceRentaDeConcentrador"
                                        color="primary"
                                    />                                </div>
                            </div>
                        </div>

                        <div className="botonSubmit"><button  type="submit" className="btn btn-primary" onClick={(e)=>submit(e)}>Confirmar</button></div>
                    </form> 
                </div>
            </div>
        </div>
    )
}
