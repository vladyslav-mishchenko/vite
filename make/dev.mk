# =====================================================
# Project Makefile
# =====================================================

# ==========================================
# Configuration
# ==========================================

# Default target
.DEFAULT_GOAL := help

# ==========================================
# VARIABLES
# ==========================================

CONTAINER_NAME := frontend-dev
COMPOSE_DEV := docker compose -f compose/docker-compose.dev.yml

DOCKER_EXEC := docker exec -it $(CONTAINER_NAME)

INSTALL := $(DOCKER_EXEC) npm install
DEV := $(DOCKER_EXEC) npm run dev
DIST := $(DOCKER_EXEC) npm run build
ICONS := $(DOCKER_EXEC) npm run icons
FORMAT := $(DOCKER_EXEC) npm run format

# ==========================================
# Docker status variables
# ==========================================

# Checks whether the Docker container is running.
# Returns:
#   1: running
#   0: not running
IS_RUNNING = $(shell \
	docker ps --filter "name=$(CONTAINER_NAME)" \
	--filter "status=running" -q | \
	wc -l | tr -d ' ' \
)

# ==========================================
# Macros
# ==========================================

# IF_RUNNING:
# Returns "1" if the container is running, otherwise "0"
define IF_RUNNING
@if [ "$(IS_RUNNING)" = "1" ]; then \
	$(1); \
else \
	echo "Container is not running. Please start it first."; \
fi
endef

# ==========================================
# PHONY TARGETS
# ==========================================

# Help / Utils
.PHONY: help status

# Docker lifecycle
.PHONY: up upd down build logs restart

# App commands
.PHONY: install dev format icons dist

# ==========================================
# HELP
# ==========================================

help:
	@echo "Available commands:"
	@awk -F':.*##' \
		'/^[a-zA-Z_-]+:.*##/ {printf "  %-12s %s\n", $$1, $$2}' \
		$(MAKEFILE_LIST)

# ==========================================
# DOCKER COMMANDS
# ==========================================

up: ## Start docker compose (foreground)
	@$(COMPOSE_DEV) up

upd: ## Start docker compose (detached)
	@$(COMPOSE_DEV) up -d

down: ## Stop docker compose
	@$(COMPOSE_DEV) down

build: ## Build docker images
	@$(COMPOSE_DEV) build

logs: ## Show docker logs
	@$(COMPOSE_DEV) logs -f

restart: ## Restart containers
	@$(COMPOSE_DEV) down && $(COMPOSE_DEV) up -d

# ==========================================
# APP COMMANDS
# ==========================================

install: ## Install npm dependencies
	@$(call IF_RUNNING, \
		echo "=== Installing dependencies ==="; \
		$(INSTALL) \
	)

dev: ## Run frontend in dev mode
	@$(call IF_RUNNING, \
		echo "=== Run frontend in dev mode ==="; \
		$(DEV) \
	)

format: ## Format code
	@$(call IF_RUNNING, \
		echo "=== Format code ==="; \
		$(FORMAT) \
	)

icons: ## Icons
	@$(call IF_RUNNING, \
		echo "=== Icons ==="; \
		$(ICONS) \
	)

dist: ## Build production (icons + format + dist)
	@$(call IF_RUNNING, \
		echo "=== Build production (icons + format + dist) ==="; \
		$(ICONS); \
		$(FORMAT); \
		$(DIST) \
	)

status: ## Show project status
	@echo "=== Docker containers ==="
	@$(COMPOSE_DEV) ps

	@echo ""
	@echo "=== Node version ==="
	@$(call IF_RUNNING, \
		$(DOCKER_EXEC) node -v \
	)

	@echo ""
	@echo "=== NPM version ==="
	@$(call IF_RUNNING, \
		$(DOCKER_EXEC) npm -v \
	)