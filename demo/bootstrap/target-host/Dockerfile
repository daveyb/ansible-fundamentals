FROM ubuntu

RUN apt-get update && apt-get install -y iproute2 openssh-server sudo \
    && rm -rf /var/lib/apt/lists/* \
    && sed -i 's/^#AuthorizedKeysFile/AuthorizedKeysFile/g' /etc/ssh/sshd_config \
    && mkdir /var/run/sshd \
    && sed -i 's/^%sudo.*/%sudo   ALL=(ALL:ALL) NOPASSWD: ALL/g' /etc/sudoers

RUN useradd -m automation_user && usermod -aG sudo automation_user

USER automation_user
COPY not_a_real_key.pub /home/automation_user/not_a_real_key.pub
RUN mkdir -p /home/automation_user/.ssh \
    && touch /home/automation_user/.ssh/authorized_keys \
    && cat /home/automation_user/not_a_real_key.pub > /home/automation_user/.ssh/authorized_keys \
    && chmod 0600 /home/automation_user/.ssh/authorized_keys \
    && chown automation_user:automation_user /home/automation_user/.ssh/authorized_keys

USER root

EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]
