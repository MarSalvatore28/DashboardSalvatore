import Typography from '@mui/material/Typography';

/**
 * Componente funcional para el encabezado de la aplicación (Dashboard del Clima).
 * Utiliza Typography de MUI con estilos específicos.
 */
export default function HeaderUI() {
    return (
        <Typography
            // Estilo tipográfico de un encabezado de nivel 2
            variant="h2"
            // Renderización como un encabezado de nivel 1 semántico
            component="h1"
            // Estilo en línea para mostrar el texto en negrita
            sx={{ fontWeight: 'bold' }}>
            Dashboard del Clima
        </Typography>
    );
}