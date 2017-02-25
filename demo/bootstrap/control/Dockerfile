FROM ubuntu

RUN apt-get update \
    && apt-get install -y build-essential libssl-dev libffi-dev curl \
    && apt-get install -y python python-dev python-pip python-virtualenv \ 
    && rm -rf /var/lib/apt/lists/* \
    && pip install --upgrade pip

RUN pip install ansible

WORKDIR /ansible

CMD ["tail", "-f", "/dev/null"]
