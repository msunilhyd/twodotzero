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
