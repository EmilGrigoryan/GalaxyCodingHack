import React from 'react';
import "react-image-tooltips/dist/index.css";
import FormControl from '@material-ui/core/FormControl/FormControl';
import { makeStyles} from '@material-ui/core/styles';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Input, Select, Typography } from '@material-ui/core';
import { Divider } from '@blueprintjs/core';
import Scheme from '../../assets/img/dt.png'
import NavBar from '../../components/NavBar';
import s from './ElectricDistribution.module.scss';
import electro from './electro';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width: '100px'
  },
  white: {
    paddingTop: '5px',
    color: 'white'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'white'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 420,
  },
}));

const ElectricDistribution: React.FC = () => {
  const [choice, setChoice] = React.useState('');
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: any) => {
    setChoice(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <NavBar name="Electric Distribution" />
      <div className={s.main}>
        <img className={s.image} src={Scheme} alt="website logo" />
        <>
          <div>
            <Button style={{backgroundColor: 'lightgrey', marginLeft: '50px'}} onClick={handleClickOpen}>
              Choose mode
            </Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
              <DialogTitle style={{textAlign: 'center'}}>Mode state</DialogTitle>
              <Divider/>
              <DialogContent>
                <form className={classes.container}>
                  <FormControl className={classes.formControl}>
                    <DialogContentText id="dialog-description">
                      <Box fontWeight="fontWeightBold" m={1}>
                        - Отключить неиспользуемое оборудование
                      </Box>
                      Режим отключает элементы электросети от питания, которые в данный момент не используются и в ближайшее время не будут использоваться, если в сети какой-то элемент потребляет энергии больше среднего значения и не может быть выключен
                    </DialogContentText>
                    <DialogContentText id="dialog-description">
                      <Box fontWeight="fontWeightBold" m={1}>
                        - Снижение потребления до среднего значения
                      </Box>
                      Режим снижает потребляемую мощность элементов электросети до среднего значения, кроме элементов мощность которых не может быть снижена в данный момент
                    </DialogContentText>
                    <Select
                      native
                      value={choice}
                      onChange={handleChange}
                      input={<Input id="dialog-native" />}
                    >
                      <option aria-label="None" value="" />
                      <option value='off_unnecessary'>Отключить неиспользуемое оборудование</option>
                      <option value='reduce_power'>Снижение потребления до среднего значения</option>
                    </Select>
                  </FormControl>
                </form>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
            <div style={{marginLeft: '20px', marginTop: '20px'}}>
              <Typography style={{color: 'white'}} gutterBottom variant="h5" component="h2">
                {electro.name}
              </Typography>
              <Typography style={{color: 'white'}} variant="body2" color="textSecondary" component="p">
                Numbers Of SubControllers: {electro.numbersOfSubControllers}
                <br/>
                General Power: {electro.generalPower}
                <br/>
                <br/>
                Controllers:
                <br/>
                <br/>
                1. {electro.controllers[0].name}
                <br/>
                Power: {electro.controllers[0].power}
                <br/>
                Status: {electro.controllers[0].status}
                <br/>
                Number Of Elements: {electro.controllers[0].numberOfElements}
                <br/>

                <br/>
                2. {electro.controllers[1].name}
                <br/>
                Power: {electro.controllers[1].power}
                <br/>
                Status: {electro.controllers[1].status}
                <br/>
                Number Of Elements: {electro.controllers[1].numberOfElements}
                <br/>
                <br/>
                3. {electro.controllers[2].name}
                <br/>
                Power: {electro.controllers[2].power}
                <br/>
                Status: {electro.controllers[2].status}
                <br/>
                Number Of Elements: {electro.controllers[2].numberOfElements}

              </Typography>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default ElectricDistribution;
