# Django Golang React Postgres Redis Starter

This repository holds a very small starter project intended for experiments with Large Language Models (LLMs). All services are kept simple so that LLMs can easily navigate and modify the codebase.

## Services

- **service.api** – Django backend (placeholder)
- **service.ws** – Golang WebSocket service (placeholder)
- **client.web** – React frontend (placeholder)
- **infra.postgres** – PostgreSQL database

A `docker-compose.yml` file is provided with placeholders for these services. Each service connects to a shared network named `app-network` and exposes its development port.

To start the stack once real implementations exist:

```bash
docker-compose up
```

Environment variables can be placed in the provided `.env` file.

## Contributing

Keep documentation short and clear so that LLMs can follow it. After modifying code, run the Python, Go and Node test suites as described in `AGENTS.md`.
