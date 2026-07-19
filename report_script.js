const container = document.getElementById('log-container');

function generateReportButtons(fileCount) {
    container.innerHTML = '';

    for (let i = 1; i <= fileCount; i++) {
        const btn = document.createElement('button');

        btn.innerText = `Report ${i}`;
        btn.className = 'report-btn';

        btn.onclick = function() {
            window.location.href = `/cgi-bin/report${i}.txt.cgi.html.cgi`;
        };

        container.appendChild(btn);
    }
}

fetch('http://localhost:3000/api/report-count')
    .then(response => response.json())
    .then(data => {
        const totalReports = data.count;

        generateReportButtons(totalReports)
    })
    .catch(error => console.error('Error fetching report count:', error));
