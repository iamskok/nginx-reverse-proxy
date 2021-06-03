[![ci](https://github.com/iamskok/nginx-reverse-proxy/actions/workflows/ci.yml/badge.svg)](https://github.com/iamskok/nginx-reverse-proxy/actions/workflows/ci.yml)
[![GitHub release](https://img.shields.io/github/v/release/iamskok/nginx-reverse-proxy)](https://github.com/iamskok/nginx-reverse-proxy/releases)
[![Docker Image Size](https://img.shields.io/docker/image-size/iamskok/express-echo-hostname?sort=semver)](https://hub.docker.com/r/iamskok/express-echo-hostname "Click to view the image on Docker Hub")
[![Docker stars](https://img.shields.io/docker/stars/iamskok/express-echo-hostname.svg)](https://hub.docker.com/r/iamskok/express-echo-hostname 'DockerHub')
[![Docker pulls](https://img.shields.io/docker/pulls/iamskok/express-echo-hostname.svg)](https://hub.docker.com/r/iamskok/express-echo-hostname 'DockerHub')
[![](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/iamskok/nginx-reverse-proxy/tags)
![nginx 1.19.10](https://img.shields.io/badge/nginx-1.19.10-brightgreen.svg)
![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)


# Nginx Reverse Proxy

This repository shows how to run multiple instances of the app behind [Nginx](https://www.nginx.com/) reverse proxy and served via HTTPS using [Let's Encrypt](https://letsencrypt.org/) certificate.

## Features ⚙️

- Updates Nginx config and reloads when containers are started or stopped
- Automatically renews Let's Encrypt certificates
- GitHub Action workflow:
  - determines the next release version
  - builds and pushes the image to Docker Hub
  - starts Docker containers on a remote host

## GitHub Secrets 🔒

[GitHub secrets](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) that are required to run the workflow:

```
DOCKERHUB_TOKEN
DOCKERHUB_USERNAME
DOMAIN
EMAIL
REMOTE_IP
REMOTE_SSH_PRIVATE_KEY
REMOTE_USERNAME
```

## Credits ❤️

- [nginx-proxy](https://github.com/nginx-proxy/nginx-proxy)
- [docker-gen](https://github.com/nginx-proxy/docker-gen)
- [acme-companion](https://github.com/nginx-proxy/acme-companion)
- [semantic-release](https://github.com/semantic-release/semantic-release)
