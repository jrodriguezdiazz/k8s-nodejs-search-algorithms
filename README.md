# Kubernetes & NodeJS - Search Algorithms

This repository demonstrates the implementation of various search algorithms using NodeJS, deployed on Kubernetes (k8s) with pods, load balancing, resource limits, and more.

## Overview

The project consists of two NodeJS pods, each implementing different search algorithms:

- **First Pod**:
    - Linear or Sequential Search Algorithm.
    - Jump Search Algorithm.

- **Second Pod**:
    - Binary Search Algorithm.
    - Bubble Sort Algorithm.

Both pods are equipped with load balancing, a defined API endpoint, Docker configurations, and specified CPU/memory limits in Kubernetes configurations.

## Features

- **Load Balancing**: Ensures efficient distribution of network or application traffic across the pods.
- **API Endpoints**: Each pod has its own API listening on a chosen port for algorithm interaction.
- **Dockerization**: Includes Dockerfiles with the images used for each NodeJS application.
- **Resource Management**: CPU and memory limits are set in the Kubernetes configuration files to optimize performance.
- **Descriptive App Naming**: Clear and descriptive naming for each application within the Kubernetes cluster.

## Structure

- `/FirstPod`: Contains the NodeJS application for the first pod along with its Dockerfile and Kubernetes configuration.
- `/SecondPod`: Contains the NodeJS application for the second pod along with its Dockerfile and Kubernetes configuration.
- `/docs`: Additional documentation and resources.

## Getting Started

To deploy these applications on a Kubernetes cluster, follow these steps:

1. **Set Up Kubernetes Cluster**: Ensure you have a working Kubernetes cluster.
2. **Build Docker Images**: Use the Dockerfiles provided in each pod directory to build your images.
3. **Deploy to Kubernetes**: Apply the Kubernetes configurations using `kubectl apply -f <k8s-config-file.yaml>` for each pod.
4. **Access the APIs**: Use the designated ports to interact with each pod's API.

## Prerequisites

- Kubernetes Cluster
- Docker
- NodeJS



## Scripts

```shell
10213  kubectl expose pod nodejs-search-app-1 --type=LoadBalancer --name=nodejs-search-app-1 --port=3000 --target-port=3000
10214  kubectl expose pod nodejs-search-app-2 --type=LoadBalancer --name=nodejs-search-app-2 --port=3001 --target-port=3001
10219  minikube service nodejs-search-app-1
10222  minikube service nodejs-search-app-2
```



## Contributions

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/jrodriguezdiazz/k8s-nodejs-search-algorithms/issues) for open issues or to open a new issue.

## License

This project is [MIT licensed](https://github.com/jrodriguezdiazz/k8s-nodejs-search-algorithms/blob/main/LICENSE).
