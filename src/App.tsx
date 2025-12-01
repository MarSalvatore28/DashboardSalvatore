import './App.css'
import { Grid, Paper } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';

function App() {

  const boxStyle = {
    padding: "16px",
    minHeight: "80px",
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "#f5f5f5"
  };

  return (
    <Grid container spacing={3} padding={2}>

      {/* Encabezado */}
      <Grid item xs={12}>
        <Paper style={boxStyle}>
          <HeaderUI />
          <div>Elemento: Encabezado</div>
        </Paper>
      </Grid>

      {/* Alertas */}
      <Grid item xs={12}>
        <Paper style={boxStyle}>
          <AlertUI description="No se preveen lluvias" />
          <div>Elemento: Alertas</div>
        </Paper>
      </Grid>

      {/* Selector */}
      <Grid item xs={12} md={4}>
        <Paper style={boxStyle}>
          <SelectorUI />
          <div>Elemento: Selector</div>
        </Paper>
      </Grid>

      {/* Indicadores */}
      <Grid item xs={12} md={8}>
        <Paper style={boxStyle}>
          Elemento: Indicadores
        </Paper>
      </Grid>

      {/* Gráfico */}
      <Grid item xs={12} md={6}>
        <Paper style={boxStyle}>
          Elemento: Gráfico
        </Paper>
      </Grid>

      {/* Tabla */}
      <Grid item xs={12} md={6}>
        <Paper style={boxStyle}>
          Elemento: Tabla
        </Paper>
      </Grid>

      {/* Información adicional */}
      <Grid item xs={12}>
        <Paper style={boxStyle}>
          Elemento: Información adicional
        </Paper>
      </Grid>

    </Grid>
  )
}

export default App;
