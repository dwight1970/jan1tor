# Variables
DEV_SERVICE=dev
PROD_SERVICE=prod
COMPOSE_FILE=docker-compose.yml

# Build targets
dev-init:
	docker compose -f $(COMPOSE_FILE) build $(DEV_SERVICE)

prod-init:
	docker compose -f $(COMPOSE_FILE) build $(PROD_SERVICE)

# Start targets
dev-up:
	docker compose -f $(COMPOSE_FILE) up -d $(DEV_SERVICE)

prod-up:
	docker compose -f $(COMPOSE_FILE) up -d $(PROD_SERVICE)

# Stop targets
dev-down:
	docker compose -f $(COMPOSE_FILE) stop $(DEV_SERVICE)

prod-down:
	docker compose -f $(COMPOSE_FILE) stop $(PROD_SERVICE)

# Logs
dev-logs:
	docker compose -f $(COMPOSE_FILE) logs -f $(DEV_SERVICE)

prod-logs:
	docker compose -f $(COMPOSE_FILE) logs -f $(PROD_SERVICE)

# Cleanup
clean:
	docker compose -f $(COMPOSE_FILE) down --rmi all --volumes --remove-orphans
