document.addEventListener('DOMContentLoaded', () => {
    // Check if URL has a tab parameter to open directly
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    if (tabParam) {
        switchTab(tabParam);
    }
});



function switchTab(tab) {
    const tabComplaint = document.getElementById("tab-complaint");
    const tabApplication = document.getElementById("tab-application");
    const secComplaint = document.getElementById("section-complaint");
    const secApplication = document.getElementById("section-application");

    const activeStyle = "flex: 1; text-align: center; padding: 1.5rem; background: linear-gradient(135deg, #ff8c00, #6a0dad); color: white; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 1.2rem; border: 2px solid #ff8c00; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s;";
    const inactiveStyle = "flex: 1; text-align: center; padding: 1.5rem; background: #e0e0e0; color: #555; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 1.2rem; border: 2px solid transparent; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s;";

    if (tab === 'complaint') {
        tabComplaint.style.cssText = activeStyle;
        tabApplication.style.cssText = inactiveStyle;
        secComplaint.style.display = "block";
        secApplication.style.display = "none";
    } else {
        tabApplication.style.cssText = activeStyle;
        tabComplaint.style.cssText = inactiveStyle;
        secApplication.style.display = "block";
        secComplaint.style.display = "none";
    }
}

function trackComplaint() {
    const tracking = document.getElementById("trackInput").value.trim();
    const complaints = JSON.parse(localStorage.getItem("complaints")) || {};
    const result = document.getElementById("statusResult");

    if (!tracking) {
        result.innerText = "⚠️ Please enter a tracking number.";
        result.style.color = "yellow";
        return;
    }

    if (!complaints[tracking]) {
        result.innerText = "❌ Tracking number not found.";
        result.style.color = "yellow";
    } else {
        result.innerText = "✅ Status: " + complaints[tracking].status;
        result.style.color = "lightgreen";
    }
}

function trackApplication() {
    const tracking = document.getElementById("appInput").value.trim();
    // Simulate application tracking
    const applications = JSON.parse(localStorage.getItem("applications")) || {};
    const result = document.getElementById("appStatusResult");

    if (!tracking) {
        result.innerText = "⚠️ Please enter an application ID.";
        result.style.color = "yellow";
        return;
    }

    if (applications[tracking]) {
        result.innerText = "✅ Status: " + applications[tracking].status;
        result.style.color = "lightgreen";
    } else {
        // Fallback for prototype: mock the tracking to show success
        const mockStatuses = ["Application Submitted", "Under Review", "Pending Document Verification", "Approved"];
        const randomStatus = mockStatuses[Math.floor(Math.random() * mockStatuses.length)];
        result.innerText = "🔍 Status: " + randomStatus + " (ID: " + tracking + ")";
        result.style.color = "lightgreen";
    }
}