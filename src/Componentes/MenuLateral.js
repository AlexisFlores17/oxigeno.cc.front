import React, { useState } from 'react';

// Menu imports
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

// Menu 
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export const MenuLateral = () =>{

    const [tanque, setTanque] = useState(false)
    const [concentrador, setConcentrador] = useState(false)
    const [domicilio, setDomicilio] = useState(false)
    const [tarjeta, setTarjeta] = useState(false)

    const handleTanque = () => {
        setTanque(!tanque);
    };
    const handleConcentrador = () => {
        setConcentrador(!concentrador);
    };
    const handleDomicilio = () => {
        setDomicilio(!domicilio);
    };
    const handleTarjeta = () => {
        setTarjeta(!tarjeta);
    };

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return(
        <>
            <div className="menu-lateral-container">
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                        Filtros avanzados
                        </ListSubheader>
                    }
                >
                    <ListItem button onClick={handleTanque}>
                        <ListItemText primary="Tanques" />
                        {tanque ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={tanque} timeout="auto" unmountOnExit>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                            <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                        </RadioGroup>
                    </Collapse>
                    
                    <ListItem button onClick={handleConcentrador}>
                        <ListItemText primary="Concentradores" />
                        {concentrador ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={concentrador} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button >
                                <ListItemIcon>
                                <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleDomicilio}>
                        <ListItemText primary="Servicio a domicilio" />
                        {domicilio ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={domicilio} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button >
                                <ListItemIcon>
                                <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleTarjeta}>
                        <ListItemText primary="Pago con tarjeta" />
                        {tarjeta ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={tarjeta} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button >
                                <ListItemIcon>
                                <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </div>
        </>
    );
}