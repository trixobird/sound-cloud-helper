# Sound cloud helper

Increase your followers in sound cloud.

## Development Setup

### Prerequisites

- [postgres](https://www.postgresql.org/download/)
- [pnpm](https://pnpm.io/installation)

### Setup

1. Clone the repo
2. Create a db named `sound_cloud_helper` in postgres
3. Create a .env file in the `packages/database`, `packages/backoffice`, `packages/web` directory with the following content:
   ```env
   DATABASE_URL=postgresql://postgres@localhost:5432/sound_cloud_helper
   ```
4. Run `pnpm i`
5. `pnpm dev`
6. Open [http://localhost:3000](http://localhost:3000)
