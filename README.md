# School Management System (SchoolHub)

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Nx](https://img.shields.io/badge/Nx-143055?style=for-the-badge&logo=nx&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

SchoolHub is a comprehensive and scalable **School Management System** built to streamline administrative tasks, enhance communication, and provide dedicated portals for all key stakeholders in an educational institution.

This project is structured as an **Nx Monorepo** powered by **Angular**, ensuring high performance, modularity, and a seamless developer experience.

## ✨ Features

The application is divided into dedicated functional modules to serve different user roles effectively:

- **👨‍🎓 Student Portal**: Allows students to view their timetables, track attendance, check grades/results, and access learning materials.
- **👨‍🏫 Teacher Portal**: Empowers teachers to manage classes, record attendance, grade assignments, and communicate with students and parents.
- **👪 Parent Portal**: Provides parents with real-time updates on their child's academic progress, attendance records, and school announcements.
- **🏫 School Admin Dashboard**: Enables school administrators to manage daily operations, staff, student enrollments, and school-specific configurations.
- **🛡️ Super Admin Dashboard**: The central control system for managing multiple schools, global settings, subscription plans, and platform-wide analytics.

## 🛠️ Technology Stack

- **Frontend Framework**: [Angular](https://angular.dev/) (v19+)
- **Workspace/Monorepo Management**: [Nx](https://nx.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom reusable UI elements (`libs/shared/ui-elements`)
- **Routing & State**: Angular Router, RxJS
- **Linting & Formatting**: ESLint, Prettier, Husky & Commitlint

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- `npm`, `yarn`, or `pnpm` (Project is configured using `pnpm`)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/waheedianho/school-management-system.git
   cd school-hub
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development Server

Run the application locally using Nx. By default, you can serve the main application:

```bash
npx nx serve <app-name>
```

Navigate to `http://localhost:4200/` to view it in your browser. The app will automatically reload if you change any of the source files.

## 🏗️ Project Structure

This workspace follows a modular architecture using Nx libraries:

```text
school-hub/
├── apps/                 # Application entry points
├── libs/
│   ├── module/
│   │   ├── parent/       # Parent portal features
│   │   ├── school-admin/ # School Admin features
│   │   ├── student/      # Student portal features
│   │   ├── super-admin/  # Super Admin features
│   │   └── teacher/      # Teacher portal features
│   └── shared/           # Shared UI components, utilities, and services
└── package.json
```

## 📜 Commands (Nx Workspace)

- **Build an app:** `npx nx build <app-name>`
- **Run Unit Tests:** `npx nx test <project-name>`
- **Run Linting:** `npx nx lint <project-name>`
- **Format Code:** `npm run format`

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/waheedianho/school-management-system/issues).

## 📝 License

This project is licensed under the [MIT License](LICENSE).
