import React from 'react';
import {useForm} from '../../hooks/useForm';

export const ContenidoFormulario = () => {

    const initialForm = {
        nombreDistribuidor: '',
        rfc: '',
        telefono: '',
        direccion: '',
        horario: '',
        linkPagina:'',
        whatsapp:'',
        aDomicilio:false,
        pagoConTarjeta: "on",
        ofreceVentaDeTanque:false,
        ofreceRentaDeTanque:false,
        ofreceRecargaDeTanque:false,
        ofreceVentaDeConcentrador:false,
        ofreceRentaDeConcentrador:false,
    }
    const [ formValues, handleInputChange, reset ] = useForm( initialForm );

    const submit = (e)=>{
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <div className="formularioContainer">
            <div className="formularioTitulo">Formulario de registro para distribuidores</div>
            <div className="formulariocontenido">
                <div className="formularioFormulario">
                    <form>
                        <div className="form-group formularioNombre">
                            <label htmlFor="nombreDistribuidor">Nombre de la empresa</label>
                            <input type="text" className="form-control" placeholder="Nombre" name="nombreDistribuidor" onChange={handleInputChange} />
                        </div>

                        <div className="form-group formularioRFCTel">
                            <label htmlFor="rfc">RFC</label>
                            <input type="text" className="form-control" placeholder="RFC" name="rfc" onChange={handleInputChange} />
                            <label htmlFor="telefono">Telefono</label>
                            <input type="text" className="form-control" placeholder="Telefono" name="telefono" onChange={handleInputChange} />
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
                            <label htmlFor="linkPagina">Página web</label>
                            <input type="text" className="form-control" placeholder="Página web" name="linkPagina" onChange={handleInputChange} />
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input type="text" className="form-control" placeholder="Whatsapp" name="whatsapp" onChange={handleInputChange} />
                        </div>

                        <div className="form-group formularioDomicilioTarjeta">
                         
                            <div className="form-check formularioDomicilio" >
                                <label htmlFor="aDomicilio">Servicio a domicilio</label>
                                <span>¿Ofreces servicio a domicilio?</span><input className="form-check-input" type="checkbox" type="radio" name="aDomicilio" onChange={handleInputChange} />
                            </div>

                            <div className="form-check formularioDomicilio" >
                                <label htmlFor="checkbox">Pago con tarjeta</label>
                                <span>¿Ofreces pago con tarjeta?</span><input className="form-check-input" type="checkbox" value={formValues.pagoConTarjeta}  type="radio" name="pagoConTarjeta" onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="form-group formularioTanquesConcentradores">
                         
                            <div className="form-check formularioTanques" >
                                <label htmlFor="ofreceVentaDeTanque">Tanques</label>
                                <span>Venta de tanques</span><input className="form-check-input" type="checkbox" value={formValues.ofreceVentaDeTanque}  type="radio" name="ofreceVentaDeTanque" onChange={handleInputChange} />
                                <span>Renta de tanques</span><input className="form-check-input" type="checkbox" value={formValues.ofreceRentaDeTanque}  type="radio" name="ofreceRentaDeTanque" onChange={handleInputChange} />
                                <span>Recarga de tanques</span><input className="form-check-input" type="checkbox" value={formValues.ofreceRecargaDeTanque}  type="radio" name="ofreceRecargaDeTanque" onChange={handleInputChange} />
                            </div>

                            <div className="form-check formularioConcentradores" >
                                <label htmlFor="ofreceVentaDeConcentradores">Concentradores</label>
                                <span>Venta de concentradores</span><input className="form-check-input" type="checkbox" value={formValues.ofreceVentaDeConcentrador}  type="radio" name="ofreceVentaDeConcentrador" onChange={handleInputChange} />
                                <span>Renta de concentradores</span><input className="form-check-input" type="checkbox" value={formValues.ofreceRentaDeConcentrador}  type="radio" name="ofreceRentaDeConcentrador" onChange={handleInputChange} />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={(e)=>submit(e)}>Confirmar</button>
                    </form> 
                </div>
            </div>
        </div>
    )
}
