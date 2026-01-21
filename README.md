# Analytics Spire Web Application

This is the complete React application for Analytics Spire, designed according to the requirements for a management consulting firm.

## Features
- **Responsive Design**: Mobile-first approach using Tailwind CSS.
- **Authentication**: Secure login simulation (Admin & Client roles).
- **Service Portfolio**: Detailed display of services.
- **Dashboard**: Protected area for logged-in users.

## Setup Instructions

1.  **Install Dependencies**:
    Run `npm install react react-dom react-router-dom lucide-react` in your project folder.
    (Note: `lucide-react` is used for icons).

2.  **Run Application**:
    Run `npm start` (if using Create React App) or `npm run dev` (if using Vite).

## Google Sheets Integration Guide

To connect this frontend to a real Google Sheet backend:

1.  **Create a Google Sheet**:
    - Create a new sheet named "AnalyticsSpireDB".
    - Create a tab named "Users" with columns: `Email`, `Password`, `Name`, `Role`.
    - Create a tab named "Leads" with columns: `Name`, `Email`, `Subject`, `Message`, `Date`.

2.  **Create Google Apps Script**:
    - In the Sheet, go to Extensions > Apps Script.
    - Write a script to accept `doGet` and `doPost` requests.
    - `doPost` should handle login verification and form submissions.
    - Deploy the script as a Web App (Access: "Anyone").

3.  **Update Frontend**:
    - In `services/`, create a file `api.ts`.
    - Use `fetch()` to send requests to your Web App URL.
    - Replace the mock logic in `AuthContext.tsx` and `ContactPage.tsx` with these fetch calls.

## Demo Login Credentials

The app currently uses a mock authentication service for demonstration purposes.

*   **Admin User**:
    *   Email: `admin@analyticsspire.com`
    *   Password: `admin123`
*   **Client User**:
    *   Email: `client@test.com`
    *   Password: `client123`

## Mobile Support
The application uses Tailwind CSS utility classes (e.g., `md:flex`, `hidden md:block`) to ensure the layout adapts perfectly to mobile phones (iPhone/Android) and desktops.
