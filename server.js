const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/report-count', (req, res) => {
    const directoryPath = path.join(__dirname, 'reports');

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to scan directory' });
        }

        const fileCount = files.filter(file => fs.lstatSync(path.join(directoryPath, file)).isFile()).length;

        res.json({ count: fileCount });
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
