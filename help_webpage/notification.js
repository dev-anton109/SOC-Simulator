const alertChannel = new BroadcastChannel('soc_alerts');

function showNotification() {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <strong>[ALERT] A NEW ALERT HAS APPEARED. GO CHECK IT OUT. [ALERT]</strong><br>
        <span>GO TO LOGS/ALERTS FOR TRIAGING</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

alertChannel.onmessage = (event) => {
    showNotification();

    if (event.data && event.data.type === 'NEW_REPORT') {
        const reportNum = event.data.reportNum;

        if (typeof renderReportCard === 'function') {
            renderReportCard(reportNum);
        }

        if (typeof savedReports !== 'undefined' && !savedReports.includes(reportNum)) {
            savedReports.push(reportNum);
        }
    }
};
