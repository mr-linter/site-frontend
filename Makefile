.PHONY: build

run:
	npm run dev

build:
	npm run build

docker-build:
	docker build -f build/Dockerfile -t mr-linter/site-frontend .

docker-run:
	docker run mr-linter/site-frontend
