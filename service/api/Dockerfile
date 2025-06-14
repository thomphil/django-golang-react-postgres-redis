# syntax=docker/dockerfile:1

FROM python:3.12-slim AS base
WORKDIR /app

RUN pip install --no-cache-dir uv
COPY pyproject.toml uv.lock ./
RUN uv pip install --system --no-deps -r uv.lock

FROM python:3.12-slim
WORKDIR /app
COPY --from=base /usr/local /usr/local
COPY . .
EXPOSE 8000
CMD ["./wait-for-it.sh", "infra.postgres:5432", "--", "python", "manage.py", "runserver", "0.0.0.0:8000"]
