# Django Golang React Postgres Redis Starter

This repository holds a very small starter project intended for experiments with Large Language Models (LLMs). All services are kept simple so that LLMs can easily navigate and modify the codebase.

## Services

- **service.api** – Django backend using Python 3.12 and `uv` for dependency management
- **service.ws** – Golang WebSocket server implemented in Go 1.24
- **client.web** – React frontend (placeholder)
- **infra.postgres** – PostgreSQL database

The Django backend lives in `service/api` and is built with a multi-stage `Dockerfile`.
The WebSocket server code lives in `service/ws` and exposes port `8080`.

A `docker-compose.yml` file is provided with placeholders for these services. Each service connects to a shared network named `app-network` and exposes its development port.

To start the stack once real implementations exist:

```bash
docker-compose up
```

Copy `.env.example` to `.env` and adjust values if needed for local development.

## Contributing

Keep documentation short and clear so that LLMs can follow it. After modifying code, run the Python, Go and Node test suites as described in `AGENTS.md`.
