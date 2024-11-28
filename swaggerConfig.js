const swaggerUi = require('swagger-ui-express');
const yaml = require('yaml');

// Charger le fichier YAML
const swaggerDocument = yaml.load('./config/swagger.yaml');

// Configuration Swagger UI avec des options personnalisées
const swaggerOptions = {
    customCssUrl: '/assets/swagger-custom.css',
    customSiteTitle: 'Car API Documentation',
};

module.exports = {
    serve: swaggerUi.serve,
    setup: swaggerUi.setup(swaggerDocument, swaggerOptions),
};
