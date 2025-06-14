# Makefile for unified dev environment

.PHONY: up down build logs restart stop test test-django test-go test-react shell-api shell-ws shell-web

up:
	docker-compose up

upd:
	docker-compose up -d

down:
	docker-compose down

build:
	docker-compose build

restart:
	docker-compose down && docker-compose up -d

logs:
	docker-compose logs -f

stop:
	docker-compose stop

# Shell access
shell-api:
	docker-compose exec service.api bash

shell-ws:
	docker-compose exec service.ws sh

shell-web:
	docker-compose exec client.web sh

# Testing
test: test-django test-go test-react

test-django:
	docker-compose exec service.api python manage.py test

test-go:
	docker-compose exec service.ws go test ./...

test-react:
	docker-compose exec client.web npm test -- --watchAll=false
