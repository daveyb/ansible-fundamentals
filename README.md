# Ansible Fundamentals
Material associated with Ansible Fundamentals webinar

## Getting Started

- Install docker toolbox for [Mac](https://www.docker.com/products/docker-toolbox) or [Windows] (https://www.docker.com/products/docker-toolbox) [*] (#windows-disclaimer)
  - Install [docker-engine](https://docs.docker.com/engine/installation/) and [docker-compose] (https://docs.docker.com/compose/install/) for Linux

- Clone this repo to your local computer
```
cd ~/
git clone https://github.com/daveyb/ansible-fundamentals.git
```

- Change into the demo directory and bring up the ansible sandbox cluster (this will take a few minutes)
```
cd ~/ansible-fundamentals/demo
docker-compose up -d
```

- Connect to the control machine and run the playbook
```
docker exec -it demo_control_1 /bin/bash
ansible-playbook playbook.yml
```

## Stopping the Cluster
```
docker-compose down
```

## Rebuild the Cluster
```
docker-compose up --build
```

## Windows Disclaimer (#windows-disclaimer)
The latest docker toolbox for Windows 10 preview includes support for Linux containers via Hyper-V virtualization. This configuration has not been tested.
