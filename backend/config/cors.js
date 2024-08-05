const corsOptions = {
    origin: 'http://example.com', // Allow only this origin
    methods: ['GET', 'POST'], // Allow only specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow only specific headers
    credentials: true // Allow cookies and authorization headers with the requests
};

module.exports = corsOptions;