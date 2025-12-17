import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import { type OpenMeteoResponse } from '../types/DashboardTypes';

function combineArrays(arrLabels: Array<string>, arrValues1: Array<number>, arrValues2: Array<number>) {
   return arrLabels.map((label, index) => ({
      id: index,
      label: label,
      value1: arrValues1[index],
      value2: arrValues2[index]
   }));
}

const columns: GridColDef[] = [
   { field: 'id', headerName: 'ID', width: 90 },
   {
      field: 'label',
      headerName: 'Hora',
      width: 125,
   },
   {
      field: 'value1',
      headerName: 'Temperatura (°C)',
      width: 125,
   },
   {
      field: 'value2',
      headerName: 'Viento (km/h)',
      width: 125,
   },
   {
      field: 'resumen',
      headerName: 'Resumen',
      description: 'No es posible ordenar u ocultar esta columna.',
      sortable: false,
      hideable: false,
      width: 200,
      valueGetter: (_, row) => `${row.label || ''} - ${row.value1 || ''}°C - ${row.value2 || ''}km/h`,
   },
];

// ✅ AGREGAR: Interfaz para recibir datos como prop
interface TableUIProps {
   data: OpenMeteoResponse | null | undefined;
}

// ✅ MODIFICAR: Recibir data como prop en lugar de usar el hook
export default function TableUI({ data }: TableUIProps) {

   // Manejo de estado de carga
   if (!data) {
      return (
         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 350 }}>
            <CircularProgress />
         </Box>
      );
   }

   // Extraer datos horarios (primeras 24 horas)
   const arrLabels = data.hourly.time.slice(0, 24).map(time => {
      const date = new Date(time);
      return date.toLocaleTimeString('es-EC', { hour: '2-digit', minute: '2-digit' });
   });
   const arrValues1 = data.hourly.temperature_2m.slice(0, 24);
   const arrValues2 = data.hourly.wind_speed_10m.slice(0, 24);

   const rows = combineArrays(arrLabels, arrValues1, arrValues2);

   return (
      <Box sx={{ height: 350, width: '100%' }}>
         <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
               pagination: {
                  paginationModel: {
                     pageSize: 5,
                  },
               },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
         />
      </Box>
   );
}