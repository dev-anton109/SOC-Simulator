const container = document.getElementById('log-container');

function initReportsOnPage(totalFileCount) {
    container.innerHTML = '';

    const savedReports = JSON.parse(localStorage.getItem('generatedReports') || '[]');

    savedReports.forEach((reportNum) => {
        renderReportCard(reportNum);
    });

    const remainingReports = [];
    for (let i = 1; i <= totalFileCount; i++) {
        if (!savedReports.includes(i)) {
            remainingReports.push(i);
        }
    }

    function addNextReport() {
        if (remainingReports.length === 0) return;

        const randomIndex = Math.floor(Math.random() * remainingReports.length);
        const reportNum = remainingReports.splice(randomIndex, 1)[0];

        renderReportCard(reportNum);

        savedReports.push(reportNum);
        localStorage.setItem('generatedReports', JSON.stringify(savedReports));

        showNotification();
        alertChannel.postMessage({ type: 'NEW_REPORT', reportNum: reportNum });

        const randomDelay = Math.floor(Math.random() * 120000) + 120000;
        setTimeout(addNextReport, randomDelay);
    }

    if (remainingReports.length > 0) {
        addNextReport();
    }
}

function renderReportCard(reportNum) {
    const card = document.createElement('div');
    card.className = 'report-btn';

    const title = document.createElement('span');
    title.innerText = `Report ${reportNum}`;

    const actionBtn = document.createElement('button');
    actionBtn.className = 'action-btn';
    actionBtn.innerHTML = '&#8594';

    actionBtn.onclick = function() {
        window.location.href = `../cgi-bin/report${reportNum}.txt.cgi`;
    };

    card.appendChild(title);
    card.appendChild(actionBtn);
    container.appendChild(card);
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/report-count')
        .then(response => response.json())
        .then(data => {
            const totalReports = data.count;
            initReportsOnPage(totalReports);
        })
        .catch(error => console.error('Error fetching report count:', error));
});
