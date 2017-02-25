# Ansible Fundamentals
Material associated with Ansible Fundamentals webinar

## Getting Started

1. Install docker toolbox for Mac or Windows
- Install docker-engine and docker-compose for Linux

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

4. Connect to the control machine
```
docker exec -it demo_control_1 /bin/bash
ansible-playbook playbook.yml
```
