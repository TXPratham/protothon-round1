# SEVA-CONNECT Portal

SEVA-CONNECT is a unified Government Public Services Platform designed to bring numerous citizen services, department applications, complaint tracking, and digital document management under one accessible roof. 

The goal of this platform is to ensure **transparency and accountability** within public services by allowing citizens to intuitively interact directly with specialized government departments.

---

## 🌟 Key Features

1. **Integrated Department Directories:** Detailed views for exactly 14 key government departments (Water, Roads, Forestry, IT, Energy, etc.). Each department page clearly outlines their specific public applications and common complaints.
2. **Public Complaints Dashboard:** A guided public complaint submission portal that allows users to rapidly report civic issues. This includes the integration of an AI Voice Assistant to verbally dictate incident details.
3. **Application & Service Tracking:** Real-time lookup of submitted complaints and applications using distinct securely generated tracking IDs without publicly exposing a user's entire submission history.
4. **Digital Document Vault & DigiLocker:** Secure personal file storage system to upload, store, and digitally retrieve critical documents utilizing DigiLocker API request workflows.
5. **Fund Monitoring:** A public interactive dashboard to monitor schemes, allocate budgets, and examine utilized funds for ultimate transparency.
6. **Authentication & Profile Management:** Built-in prototype mock-ups for user registrations, authentication, login routing, and detailed profile setup flows.

---

## 📂 Project Structure Overview

```text
📁 SEVA-CONNECT
├── index.html                  # Root Application Entrance (Redirects to Login)
├── homepage.html               # Main Dashboard & Navigation Portal
├── profile2.html               # User Login Screen
├── signup.html                 # New User Registration Screen
├── profile-setup.html          # Secondary Profile & Identity Configuration Data
├── public complaint.html       # Civic Complaint Form (w/ AI Voice Dictation)
├── track.html                  # Complaint & Application Tracking System
├── application.html            # Public Service Application Hub
├── funds.html                  # Government Budget & Funds Monitoring Dashboard
├── store.html                  # Secure Personal Document Storage
├── digilocker_request.html     # Official DigiLocker API Integration Screen
├── departments.html            # Primary Directory Hub for all 14 Government Departments
└── [department_name].html      # 14 distinct department views (e.g., water, forestry, energy)
```

---

## 🛠️ Technology Stack

* **Frontend Structure:** -- **HTML5** 
* **Styling & UI:**  -- ** CSS**
* **Logic & Functionality:** -- **JavaScript**
* **Iconography:** Integrated **Font Awesome (v6.5.0)**    

---

## 🚀 Getting Started Locally

Because SEVA-CONNECT is built fundamentally on vanilla web architectures, it can be tested instantly without complex build environments.

1. **Clone the Repository:** Download and extract the project files to a local folder on your machine.
2. **Launch the Portal:** Simply navigate to the project folder and double-click the `index.html` file to automatically open the platform directly in your default web browser! No installation or local server is required.

*(Note: Currently, the login & signup logic runs as an unrestricted frontend prototype workflow—meaning the validation is visually simulated to grant users immediate navigation tests!)*
