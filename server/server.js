const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// route for GET request, req(uest) and res(ponse)
app.get('/', (req, res) => {
    // send json data when this is accessed
    res.json({
        message: "Welcome to Express Server",
        data: { key: 'value' },
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});