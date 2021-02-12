import React from 'react'

export const ContenidoFormulario = () => {
    return (
        <div className="formularioContainer">
            <div className="formularioTitulo">Formulario de registro para distribuidores</div>
            <div className="formulariocontenido">
                <div className="formularioFormulario">
                    <form>
                        <div className="form-group formularioNombre">
                            <label for="">Nombre de la empresa</label>
                            <input type="text" className="form-control" placeholder="Nombre" />
                        </div>

                        <div className="form-group formularioRFCTel">
                            <label for="">RFC</label>
                            <input type="text" className="form-control" placeholder="RFC" />
                            <label for="">Telefono</label>
                            <input type="text" className="form-control" placeholder="Telefono" />
                        </div>

                        <div className="form-group formularioDireccion">
                            <label for="">Dirección</label>
                            <input type="text" className="form-control" placeholder="Dirección" />
                        </div>

                        <div className="form-group formularioHorario">
                            <label for="">Horario</label>
                            <input type="text" className="form-control" placeholder="Horario" />
                        </div>

                        <div className="form-group formularioWebWhats">
                            <label for="">Página web</label>
                            <input type="text" className="form-control" placeholder="Página web" />
                            <label for="">Whatsapp</label>
                            <input type="text" className="form-control" placeholder="Whatsapp" />
                        </div>

                        <div className="form-group formularioDomicilioTarjeta">
                         
                            <div className="form-check formularioDomicilio" >
                                <label for="">Servicio a domicilio</label>
                                <span>¿Ofreces servicio a domicilio?</span><input class="form-check-input" type="checkbox" value="" type="radio" />
                            </div>

                            <div className="form-check formularioDomicilio" >
                                <label for="">Pago con tarjeta</label>
                                <span>¿Ofreces pago con tarjeta?</span><input class="form-check-input" type="checkbox" value="" type="radio" />
                            </div>
                        </div>

                        <div className="form-group formularioTanquesConcentradores">
                         
                            <div className="form-check formularioTanques" >
                                <label for="">Tanques</label>
                                <span>Venta de tanques</span><input class="form-check-input" type="checkbox" value="" type="radio" />
                                <span>Renta de tanques</span><input class="form-check-input" type="checkbox" value="" type="radio" />
                                <span>Recarga de tanques</span><input class="form-check-input" type="checkbox" value="" type="radio" />
                            </div>

                            <div className="form-check formularioConcentradores" >
                                <label for="">Concentradores</label>
                                <span>Venta de concentradores</span><input class="form-check-input" type="checkbox" value="" type="radio" />
                                <span>Renta de concentradores</span><input class="form-check-input" type="checkbox" value="" type="radio" />
                            </div>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    )
}
