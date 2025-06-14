# AGENT Instructions

This repository is intended as a Django + Golang + React starter project. All pull requests must include unit tests for any new functionality. Keep the instructions and tooling easy for an LLM to follow.

A stub `docker-compose.yml` defines the following services connected by the `app-network`:
- `service.api` (Django backend)
- `service.ws` (Golang WebSocket service)
- `client.web` (React frontend)
- `infra.postgres` (PostgreSQL)

The stack reads environment variables from `.env`.

## Testing

- Python unit tests are run with `pytest`.
- Golang unit tests are run with `go test ./...`.
- React/Node unit tests are run with `npm test --silent`.
- Run all relevant test suites after making changes and before committing. If a test command fails because dependencies are missing, mention this in the PR as required by the main instructions.
- Confirm the Docker Compose stack builds successfully with `docker compose build`.

## Documentation

- Keep `README.md` up to date with explanations for project layout and usage instructions.
