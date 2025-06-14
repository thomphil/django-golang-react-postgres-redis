# syntax=docker/dockerfile:1

#################
# Build stage   #
#################
FROM golang:1.24-alpine AS build
WORKDIR /app

# Dependencies
COPY go.mod .
RUN go mod download

# Source
COPY . .

# Build the binary
RUN go build -o main .

#################
# Final stage   #
#################
FROM gcr.io/distroless/static
WORKDIR /app
COPY --from=build /app/main /main
EXPOSE 8080
ENTRYPOINT ["/main"]
# During development you can use the air tool for live reloading.
