require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimiter = require('./middlewares/rateLimiterMiddleware');
const swaggerUi = require('./swaggerConfig');
const fs = require('fs');
const yaml = require('yaml');
const path = require('path');

// Créer l'application Express
const app = express();

// Middlewares de base
app.use(express.json()); // Parse les requêtes JSON
app.use(express.urlencoded({ extended: true })); // Parse les requêtes URL-encoded
app.use(cors()); // Gérer les autorisations CORS
app.use(helmet()); // Headers de sécurité
app.use(compression()); // Compression des réponses HTTP
app.use(xss()); // Protection contre les attaques XSS
app.use(mongoSanitize()); // Protection contre les injections MongoDB

// Ajouter un limiteur de requêtes global
app.use(rateLimiter);

// Importer les routes
const carRoutes = require('./routes/carRoutes'); // Routes pour les voitures
const userRoutes = require('./routes/userRoutes'); // Routes pour les utilisateurs

// Charger le fichier YAML de Swagger
const swaggerFile = fs.readFileSync(path.join(__dirname, 'config', 'swagger.yaml'), 'utf8');
const swaggerDocument = yaml.parse(swaggerFile);

// Configuration des routes
app.use('/api/cars', carRoutes); // Routes pour les voitures
app.use('/api/users', userRoutes); // Routes pour les utilisateurs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup);

// Gestion des erreurs 404
app.use((req, res) => {
    res.status(404).json({ message: 'Route non trouvée' });
});

// Middleware global de gestion des erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        message: err.message || 'Erreur interne du serveur',
    });
});

// Connexion à MongoDB Atlas
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connecté à MongoDB Atlas');
        // Démarrer le serveur
        app.listen(PORT, () => {
            console.log(`Serveur en écoute sur le port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Erreur lors de la connexion à MongoDB Atlas:', err.message);
        process.exit(1); // Arrêter le processus en cas d'échec
    });
