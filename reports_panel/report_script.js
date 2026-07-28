const container = document.getElementById('log-container');

function generateReportButtonsContainers(reportId) {

    const card = document.createElement('div');
    card.className = 'report-btn';

    const title = document.createElement('span');
    title.innerText = `Report ${reportId}`;

    const actionBtn = document.createElement('button');
    actionBtn.className = 'action-btn';
    actionBtn.innerHTML = '&#8594';

    actionBtn.onclick = function() {
        window.location.href = `../cgi-bin/report${reportId}.txt.cgi.html.cgi`;
    };

    card.appendChild(title);
    card.appendChild(actionBtn);
    container.appendChild(card);
}

function loadReports() {
    if (container) container.innerHTML = '';

    const savedReports = JSON.parse(localStorage.getItem('generatedReports') || '[]');

    if (Array.isArray(savedReports)) {
        savedReports.forEach((reportId) => {
            generateReportButtonsContainers(reportId);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadReports();
});

setInterval(loadReports, 2000);
