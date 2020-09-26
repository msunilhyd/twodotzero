apt install tmux
sudo apt install tmux
sudo useradd -d /home/jdoe -m jdoe
ls -l /home
sudo passwd jdoe
sudo adduser dscully
nano /usr/sbin/adduser
sudo userdel dscully
ls -l /home
sudo mv /home/dscully /store/file_archive
sudo mkdir -p /store/file_archive
sudo userdel -r dscully
sudo rm -r /home/dscully
sudo rm -r / home/dscully
cat /etc/passwd
sudo cat /etc/shadow
sudo cat /etc/shadow | grep root
sudo passwd -S <username>
ls -la /etc/skel
sudo passwd
sudo su -
su - <username>
sudo su - <username>
ls -l
cat /etc/group
sudo groupadd admins
sudo groupdel admins
sudo usermod -aG admins myuser
sudo usermod -g <group-name> <username>
man usermod
sudo usermod -d /home/jsmith jdoe -m
sudo usermod -l jsmith jdoe
sudo gpasswd -d <username> <grouptoremove>
sudo gpasswd -a <username> <group>
sudo passwd -l <username>
sudo passwd -u <username>
sudo chage -l <username>
sudo chage -d 0 <username>
sudo chage -l <username>
sudo chage -M 90 <username>
sudo chage -m 5 dscully
sudo apt install libpam-cracklib
sudo nano /etc/pam.d/common-password
sudo usermod -aG sudo <username>
sudo EDITOR=vim visudo
ls -l
chmod o-r budget.txt
chmod o-r /home/sue/budget.txt
chmod u+rw <filename>
chmod g+r <filename>
chmod o-rw <filename>
chmod 600 filename.txt
chmod 740 filenmae.txt
chmod 770 filename.txt
chmod 770 -R mydir
find /path/to/dir/ -type f -exec chmod 644 {};
find /path/to/dir/ -type d -exec chmod 755 {};
sudo chown sue myfile.txt
sudo chown -R sue mydir
sudo chown sue:sales myfile.txt
sudo chown sales myfile.txt

ssh-keygen
ls -l /home/<user>/.ssh
ls -l /home/jay/.ssh
ssh-copy-id -i ~/.ssh/id_rsa.pub unicorn
eval $(ssh-agent)
ssh-add ~/.ssh/id_rsa
ssh-keygen -p
/home/jay/.ssh/config
nano /home/your_username/.ssh/config
ssh nagios
ssh -p 2222 nagiouser@nagios.local.lan

sudp apt install openssh-server
sudo apt install package1 package2 package3
sudo apt-get install apache2
sudo apt update
sudo apt remove package
sudo apt remove package1 package2 package3
sudo apt remove --purge package
snap find package
snap find nmap
sudo snap install nmap
which nmap
sudo snap remove nmap
sudo snap refresh nmap
sudo snap refresh
apt search apache php
apt-cache show libapache2-mod-php
sudo apt update
sudo apt-add-repository ppa:username/myawsomesoftware-1.0
dpkg --get-selections > packages.list
tmux install
sudo apt update
/usr/bin/dselect
sudo apt install dselect
sudo dselect update
sudo dpkg --set-selections < packages.list
sudo apt-get dselect-upgrade
sudo apt-get install mariadb-server
sudo apt install aptitude
sudo aptitude
ps
pidof vim
ps a
ps au
ps aux
ps aux | grep nginx
ps u -C nginx
ps aux --sort=-pcpu
ps aux --sort=-pcpu | head -n 5
ps aux --sort=-pmem | head -n 5
sudo apt install vim-nox
ps au | grep nano
fg 1
sudo apt install htop
htop &
sudo kill 31258
man 7 signal
sudo kill -9 31258
sudo killall myprocess
sudo killall -9 myprocess
sudo apt install htop
htop -d 70
systemctl | grep ssh
systemctl status ssh
systemctl status -l ssh
sudo systemctl stop ssh
sudo systemctl start ssh
sudo systemctl enable ssh
sudo systemctl disable ssh
service ssh status
ssh start/running, process 907
sudo service ssh stop
ssh stop/waiting
sudo service ssh start
ssh start/running, process 1304


/etc/init.d/ssh start
/etc/init.d/ssh stop
/etc/init.d/ssh restart
/etc/init.d/ssh reload
/etc/init.d/ssh status

sudo systemctl enable myservice@myuser
free -m
cat /proc/sys/vm/swappiness

sudo sysctl vm.swappiness=30
/etc/systcl.conf
vm.swappiness = 30
crontab -l
sudo crontab -u jdoe -l
no crontab for jdoe
crontab -e
EDITOR=vim crontab -e
m h dom mon dow command
cat /proc/loadavg
sudo apt install isc-dhcp-server
systemctl status isc-dhcp-server
sudo systemctl stop isc-dhcp-server
sudo mv /etc/dhcp/dhcpd.conf /etc/dhcp/dhcpd.conf.orig
sudo systemctl start isc-dhcp-server
sudo systemctl status isc-dhcp-server
sudo tail -f /var/log/syslog
sudo apt install bind9
sudo systemctl restart bind9
systemctl status bind9
sudo systemctl restart bind9
systemctl status bind9
cat /var/log/syslog | grep bind9
systemd-resolve --status | grep DNS Servers
echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward
sudo nano /etc/sysctl.conf
sudo apt install ntp
systemctl status ntp
