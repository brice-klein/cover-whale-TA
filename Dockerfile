# Docker container for a node application
FROM postgres
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB coverwhale
COPY db-setup.sql /docker-entrypoint-initdb.d/
