import axios from 'axios';

const api = axios.create({
  baseUrl: 'http://localhost:3333',
});

export default api;

/**
 *
 * ios com emulador: localhost
 * ios com fisico: ip da maquina
 * Android com Emulador: localhost (adb reverse)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com Físico: IP da máquina
 *
 */
