import app from './app.js';
import envConfig from './app/configs/env.config.js';

const PORT = envConfig.SERVER_PORT || 3000;
app.listen(PORT, () => console.log(`[🚀] Running as: http://localhost:${PORT}/`));