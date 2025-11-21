Here’s a **complete, professional `README.md`** for your **Aswenna (අස්වැන්න)** project — fully written, formatted, and ready to use in your GitHub repository.
It includes project overview, features, architecture, setup guide, and contribution notes for a React + Vite frontend stack.

---

```markdown
# 🌾 Aswenna (අස්වැන්න)

> **Empowering Farmers, Landowners, and Sponsors through Digital Connection**

Aswenna (අස්වැන්න) is a smart agriculture platform designed to build a sustainable ecosystem by connecting **Farmers**, **Landowners**, and **Sponsors**.  
It provides a digital space for collaboration, transparency, and growth in Sri Lanka’s agricultural sector.

---

## 🧭 Overview

**Aswenna** aims to revolutionize agriculture through technology and community empowerment.  
The platform offers three user portals — Farmers, Landowners, and Sponsors — connected via a unified **E-Link system** that facilitates trust, resource management, and investment in agriculture.

---

## 🎯 Core Objectives

- Empower farmers with digital access to land, sponsors, and crop management tools.
- Enable landowners to efficiently manage and monitor land utilization.
- Allow sponsors to fund verified agricultural projects transparently.
- Foster collaboration between all three stakeholders through digital linking.
- Support sustainable agriculture via technology and community integration.

---

## 🌱 Key Features

| Feature | Description |
|----------|-------------|
| 👨‍🌾 **Farmer Portal** | Manage crops, view sponsor offers, and monitor land allocations. |
| 🏡 **Landowner Dashboard** | Assign land to farmers, view crop progress, and approve usage. |
| 💰 **Sponsor Hub** | Browse projects, fund initiatives, and track their impact. |
| 🔗 **E-Link Network** | Visual representation of connected users and projects. |
| 🎥 **Intro Page** | Welcome video introducing Aswenna’s mission and features. |
| 🌍 **Multilingual Support** | Sinhala 🇱🇰, Tamil 🇮🇳, and English 🇬🇧 interfaces. |
| 🔒 **Role-Based Authentication** | Secure sign-in and personalized dashboards. |
| 📱 **Responsive Design** | Works seamlessly across desktop, tablet, and mobile. |
| ⚡ **PWA Enabled** | Installable app with offline capabilities. |

---

## 🖥️ Frontend Tech Stack

| Layer | Technology | Purpose |
|--------|-------------|----------|
| **Framework** | [React.js](https://react.dev/) + [Vite](https://vitejs.dev/) | Fast, modular frontend setup |
| **Language** | TypeScript | Type-safe component logic |
| **Routing** | React Router v6 | Role-based routing and navigation |
| **State Management** | React Query + Zustand | Async data & global state |
| **Styling** | Tailwind CSS + shadcn/ui | Modern, responsive UI |
| **Validation** | React Hook Form + Zod | Form management and validation |
| **Internationalization** | react-i18next | Multilingual UI (Sinhala, Tamil, English) |
| **Charts / Visuals** | Recharts, D3 / React Flow | Data visualization & E-Link map |
| **Testing** | Vitest + React Testing Library | Unit & integration testing |
| **PWA Support** | vite-plugin-pwa | Offline access & installable app |
| **Icons** | lucide-react | Clean SVG icon set |

---

## 🧩 Folder Structure

```

/src
├── api/                # API clients and fetch hooks
├── assets/             # Images, logos, and static files
├── components/         # Reusable UI components
├── features/
│   ├── auth/           # Login, signup, role handling
│   ├── farmer/         # Farmer dashboard components
│   ├── landowner/      # Landowner dashboard
│   └── sponsor/        # Sponsor hub
├── hooks/              # Custom React hooks
├── i18n/               # Translations and language config
├── routes/             # App routing setup
├── services/           # API service calls
├── styles/             # Global styles and Tailwind config
├── utils/              # Helper functions and constants
├── App.tsx             # Root component
└── main.tsx            # Entry point

````

---

## ⚙️ Installation & Setup

### 1️⃣ Prerequisites
- Node.js (v18+)
- npm or yarn
- Git

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/aswenna.git
cd aswenna
````

### 3️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 4️⃣ Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to view the app.

### 5️⃣ Build for Production

```bash
npm run build
```

### 6️⃣ Preview Production Build

```bash
npm run preview
```

---

## 🧠 Functional Requirements Summary

### ✅ MVP Features

* User registration and login for **Farmers**, **Landowners**, **Sponsors**.
* Role-based dashboards with CRUD functionality.
* E-Link network showing active connections.
* Multilingual UI with runtime language switching.
* Intro video and splash screen.
* Mobile-first, accessible UI (WCAG AA compliance).

### 🧩 Phase 2 (P1)

* Real-time notifications (WebSocket / polling).
* PWA offline capabilities.
* E2E testing via Cypress.
* Sponsor payment integration (mock API / sandbox).
* Analytics dashboard for stakeholders.

---

## 🎨 Design & Branding

* **Primary Color:** Green `#2E8B57` (growth, nature)
* **Accent:** White `#FFFFFF` (purity, simplicity)
* **Font:** Sinhala-compatible web font (e.g., Noto Sans Sinhala)
* **Logo:** *Aswenna (අස්වැන්න)* — symbolizing unity among farmers, landowners, and sponsors through a digital connection link.

---

## 🔐 Environment Variables (Example)

Create `.env` file in project root:

```env
VITE_API_BASE_URL=https://api.aswenna.lk
VITE_APP_NAME=Aswenna
VITE_DEFAULT_LANGUAGE=si
```

---

## 🧪 Testing

Run tests:

```bash
npm run test
```

E2E tests (optional):

```bash
npm run e2e
```

Coverage:

```bash
npm run test:ci
```

---

## 🚀 Deployment

Recommended hosting options:

* [Vercel](https://vercel.com)
* [Netlify](https://netlify.com)
* [Firebase Hosting](https://firebase.google.com/)
* AWS S3 + CloudFront

CI/CD with **GitHub Actions** is supported for automated build and deploy.

---

## 🧑‍💻 Contributing

We welcome contributions!

1. Fork the repository
2. Create a feature branch (`feature/your-feature-name`)
3. Commit your changes with clear messages
4. Open a pull request

Make sure to run linting before submitting:

```bash
npm run lint
npm run format
```

---

## 🧾 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute with attribution.

---

## 📞 Contact & Credits

**Project Lead:** Nimsara Jayathilaka
**Vision:** To connect Sri Lanka’s agriculture community through digital empowerment.
**Theme:** “Growing Together — Digitally Connected Agriculture”

---

### 🌿 *Aswenna — Cultivating connections for a sustainable future.*

```

---

Would you like me to **add a “Tech Architecture Diagram” section (React → Spring Boot → Database)** to this README as well?  
That would make it perfect for documentation or investor presentation.
```
