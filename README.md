# ByteBash

ByteBash is a Next.js-powered application designed to monitor and manage various aspects of a school's infrastructure. It tracks student absenteeism, PC usage, peripheral devices, network status, and lighting conditions, ensuring optimal school operations.

## Features
- **Absentee Monitoring**: Tracks student attendance and reports absences.
- **PC & Peripheral Tracking**: Monitors computer and connected device statuses.
- **Network Monitoring**: Keeps track of network performance and uptime.
- **Lighting Control**: Observes and manages lamp status within the school.
- **User Authentication**: Powered by Clerk for seamless user management.
- **Responsive UI**: Built with Radix UI components and TailwindCSS.

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (TypeScript)
- **Authentication**: [Clerk](https://clerk.com/)
- **Database**: PostgreSQL (via [Drizzle ORM](https://orm.drizzle.team/))
- **State Management**: [TanStack React Query](https://tanstack.com/query/latest)
- **UI Components**: Radix UI, TailwindCSS, Geist
- **Charts & Data Visualization**: Recharts
- **HTTP Requests**: Axios
- **Form Handling**: React Hook Form + Zod Validation

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v18+)
- PostgreSQL
- pnpm

### Clone Repository
```sh
git clone https://github.com/your-repo-url.git
cd bytebash
```

### Install Dependencies
Using pnpm:
```sh
pnpm install
```

### Configure Environment Variables
Create a `.env` file and configure the necessary environment variables:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
DATABASE_URL="your_postgres_connection_string"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```

### Run Development Server
```sh
pnpm dev
```
The app will be available at [http://localhost:3000](http://localhost:3000).

## Dependencies
This project relies on the following major dependencies:
```json
{"@clerk/nextjs": "^6.12.0", "@radix-ui/react-tooltip": "^1.1.8", "drizzle-orm": "^0.33.0", "axios": "^1.7.9", "recharts": "^2.15.1", "react-hook-form": "^7.54.2", "zod": "^3.24.2", "tailwindcss-animate": "^1.0.7"}
```
[View Full List](package.json)

## Contributors
- [Crea7orX](https://github.com/Crea7orX)
- [Stoil100](https://github.com/Stoil100)
- [Maximus019BG](https://github.com/Maximus019BG)
- [SimoSabev](https://github.com/SimoSabev)

## License
This project is licensed under the MIT License.

## Feedback & Issues
If you encounter any issues or have suggestions, please open an issue on GitHub.
