# Django Golang React Postgres Redis Starter

This repository holds a very small starter project intended for experiments with Large Language Models (LLMs). All services are kept simple so that LLMs can easily navigate and modify the codebase.

## Services

- **service.api** – Django backend using Python 3.12 and `uv` for dependency management
- **service.ws** – Golang WebSocket service (placeholder)
- **client.web** – React frontend built with Vite (Node 22) and served via Nginx
- **infra.postgres** – PostgreSQL database

The Django backend lives in `service/api` and is built with a multi-stage `Dockerfile`.
Run `django-admin startproject myproject .` inside that folder once before the first build to generate the project skeleton.

A `docker-compose.yml` file is provided with placeholders for these services. Each service connects to a shared network named `app-network` and exposes its development port. The React frontend runs the Vite dev server in development and serves the built files with Nginx in production.

To start the stack once real implementations exist:

```bash
docker-compose up
```

Copy `.env.example` to `.env` and adjust values if needed for local development.
During development the `client.web` container mounts the source directory and runs the Vite dev server on port 3000.

## Contributing

Keep documentation short and clear so that LLMs can follow it. After modifying code, run the Python, Go and Node test suites as described in `AGENTS.md`.

### Frontend

The `client.web` folder contains a minimal Vite React app. During local
development the folder is mounted into the `client.web` container and `npm start`
launches the Vite dev server on <http://localhost:3000>. For production builds
the multi-stage `Dockerfile` compiles the app and serves the `build/` directory
with Nginx. Requests to `/api/` are proxied to the Django backend.

Run the frontend unit tests with:

```bash
cd client/web
npm test --silent
```
