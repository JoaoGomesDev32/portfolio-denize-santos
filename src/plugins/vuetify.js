import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';  // Importa os ícones do MDI
import { createVuetify } from 'vuetify';

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',  // Define mdi como o conjunto padrão de ícones
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#D50000',
          secondary: '#FFEB3B',
          accent: '#FF9800',
          background: '#FFFFFF',
        }
      }
    }
  }
});

export default vuetify;

