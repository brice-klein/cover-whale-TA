# Cover Whale TA
======
###### Brice Klein's simple insurance agent web app.
======

## Setup
1: Run ```docker build -t cover-whale-db ./```
2: Run ```docker run --name cover-whale-container -p 5432:5432 cover-whale-db```
3: Run ```npm run start```


###### nnOTES
sudo docker exec -it cover-whale-container /bin/bash