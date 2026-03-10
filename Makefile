SHELL := /bin/bash

THEME_NAME ?= physicsllm
THEME_BUILD_DIR ?= $(THEME_NAME)
THEME_SOURCE_DIR := wordpress-theme

.PHONY: help theme theme-clean theme-tree

help:
	@echo "Available targets:"
	@echo "  make theme        Build ./$(THEME_NAME) from $(THEME_SOURCE_DIR)"
	@echo "  make theme-clean  Remove ./$(THEME_NAME)"
	@echo "  make theme-tree   Show files created in ./$(THEME_NAME)"

theme: theme-clean
	@echo "Building WordPress theme in ./$(THEME_BUILD_DIR)"
	@mkdir -p "$(THEME_BUILD_DIR)/template-parts"
	@mkdir -p "$(THEME_BUILD_DIR)/assets/css"
	@mkdir -p "$(THEME_BUILD_DIR)/assets/js"
	@mkdir -p "$(THEME_BUILD_DIR)/assets/images"

	@cp "$(THEME_SOURCE_DIR)/style.css" "$(THEME_BUILD_DIR)/"
	@cp "$(THEME_SOURCE_DIR)/functions.php" "$(THEME_BUILD_DIR)/"
	@cp "$(THEME_SOURCE_DIR)/index.php" "$(THEME_BUILD_DIR)/"
	@cp "$(THEME_SOURCE_DIR)/header.php" "$(THEME_BUILD_DIR)/"
	@cp "$(THEME_SOURCE_DIR)/footer.php" "$(THEME_BUILD_DIR)/"
	@cp "$(THEME_SOURCE_DIR)/front-page.php" "$(THEME_BUILD_DIR)/"
	@cp "$(THEME_SOURCE_DIR)/README.md" "$(THEME_BUILD_DIR)/"

	@cp $(THEME_SOURCE_DIR)/template-parts/*.php "$(THEME_BUILD_DIR)/template-parts/"
	@cp "$(THEME_SOURCE_DIR)/assets/css/custom.css" "$(THEME_BUILD_DIR)/assets/css/"
	@cp "$(THEME_SOURCE_DIR)/assets/js/main.js" "$(THEME_BUILD_DIR)/assets/js/"
	@cp "$(THEME_SOURCE_DIR)/assets/js/neural-network.js" "$(THEME_BUILD_DIR)/assets/js/"

	@npx tailwindcss -i src/index.css -o "$(THEME_BUILD_DIR)/assets/css/tailwind.css" --minify

	@cp src/assets/bmbf-logo.png "$(THEME_BUILD_DIR)/assets/images/"
	@cp src/assets/erum-data-hub-logo.png "$(THEME_BUILD_DIR)/assets/images/"
	@cp src/assets/aip-logo.jpg "$(THEME_BUILD_DIR)/assets/images/"
	@cp public/favicon.ico "$(THEME_BUILD_DIR)/assets/images/"

	@echo "Theme build completed: ./$(THEME_BUILD_DIR)"

theme-clean:
	@rm -rf "$(THEME_BUILD_DIR)"

theme-tree:
	@find "$(THEME_BUILD_DIR)" -type f | sort
