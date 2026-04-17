# Development Automation (Makefile)

This project uses a Makefile to simplify Docker and npm development workflows.

All commands are executed inside the Docker container: `vite-frontend`.

## Requirements

- Docker
- Docker Compose
- GNU Make

## Default Command

make  # Show all available commands (help menu)

## Docker Commands

make up       # Start containers in foreground (shows logs)
make upd      # Start containers in detached mode (background)
make down     # Stop and remove containers
make build    # Build Docker images
make logs     # Show live container logs
make restart  # Restart containers (down + up detached)

## Application Commands

make install  # Install dependencies inside the container
make dev      # Run development server inside the container
make format   # Format code
make icons    # Generate icons
make dist     # Build production (icons + format + build)

## Status

make status  # Check project status (Docker, Node.js, npm versions)

This shows:
- Docker container status
- Node.js version inside container
- npm version inside container

## Configuration

- Container name: `vite-frontend`
- Docker Compose file: `compose/docker-compose.dev.yml`
- All npm commands run inside Docker container using `docker exec`
- Some commands require the container to be running

## Example Workflow

make upd       # start environment
make install   # install dependencies
make dev       # start development server

## Notes

- Use `make status` before running commands
- If container is not running, some commands will not execute
- This Makefile reduces repetitive Docker + npm commands and simplifies development workflow

## Build System Features

- html partials
- scss
- js
- static files
- images
- fonts
- icon fonts
- postcss
- autoprefixer
- postcss-sort-media-queries
- browserslist
- prettier