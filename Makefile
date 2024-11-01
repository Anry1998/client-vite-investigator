build:
	docker build -t anry1998/client:1.0.0 . 

run:
	docker run --rm -p 5173:5173 -d --name client anry1998/client:1.0.0

stop:
	docker stop client

push:
	docker push anry1998/client:1.0.0

pull:
	docker pull anry1998/client:1.0.0