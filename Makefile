.PHONY: build

run:
	npm run dev

build:
	npm run build

docker-build:
	docker build -f build/Dockerfile -t ghcr.io/mr-linter/site-frontend .

docker-push:
	@echo "${TOKEN}" | docker login ghcr.io -u ${USER} --password-stdin
	docker push ghcr.io/mr-linter/site-frontend

docker-run:
	docker run -p 8080:8080 ghcr.io/mr-linter/site-frontend
