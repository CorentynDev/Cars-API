const rateLimit = require('express-rate-limit');

// Middleware de limitation des requêtes
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // Période de 15 minutes
    max: 100, // Limite de 100 requêtes par IP
    standardHeaders: true, // Retourne les infos de limitation dans les headers standards
    legacyHeaders: false, // Désactive les headers obsolètes `X-RateLimit-*`
    message: {
        status: 429,
        message: 'Trop de requêtes depuis cette IP, veuillez réessayer plus tard.',
    },
});

module.exports = limiter;
