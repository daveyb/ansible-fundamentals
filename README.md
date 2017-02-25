# Ansible Fundamentals
Material associated with Ansible Fundamentals webinar

## Getting Started

1. Install docker toolbox for [Mac](https://www.docker.com/products/docker-toolbox) or [Windows] (https://www.docker.com/products/docker-toolbox)
  - Install [docker-engine](https://docs.docker.com/engine/installation/) and [docker-compose] (https://docs.docker.com/compose/install/) for Linux

2. Clone this repo to your local computer
```
cd ~/
git clone https://github.com/daveyb/ansible-fundamentals.git
```

3. Change into the demo directory and bring up the ansible sandbox cluster
```
cd ansible-fundamentals/demo
docker-compose up -d
```

4. Connect to the control machine and run the playbook
```
docker exec -it demo_control_1 /bin/bash
ansible-playbook playbook.yml
```
