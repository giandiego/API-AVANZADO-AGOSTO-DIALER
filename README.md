# REST API BASE / Node - Mongoose

This project is a REST API BASE. 
Developed using:
* Nodejs
* Express
* Mongodb
* Mongoose
* Babel (ES6+)

Frontend application.

# Endpoints

[Doc](https://github.com/giandiego/API-AVANZADO-AGOSTO-DIALER/blob/main/requests/prog.http)

# Install

``Requires installing git, nodejs, npm and pm2``

Install MongoDB

Create a /etc/yum.repos.d/mongodb-org-4.4.repo file so that you can install MongoDB directly using yum:

```
vim /etc/yum.repos.d/mongodb-org-4.4.repo
```

```
[mongodb-org-4.4]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc
```

Install
```
sudo yum install -y mongodb-org
```


Verify that MongoDB has started successfully and enable
```
sudo systemctl enable mongod
sudo systemctl start mongod
sudo systemctl status mongod
```


Clone project
```
cd /opt/
git clone https://github.com/giandiego/API-AVANZADO-AGOSTO-DIALER.git
```

Edit enviroment variables in /opt/API-AVANZADO-AGOSTO-DIALER/ (changues values)
```
cp env-example .env
```

Install Dependencies
```
cd /opt/API-AVANZADO-AGOSTO-DIALER/
npm install --force
npm run build
```

# Run the Project
In production
```
npm start
```

In development
```
npm run dev
```

Init pm2
```
cd /opt/API-AVANZADO-AGOSTO-DIALER/
npm run build
pm2 start dist/index.js --name API-AVANZADO-AGOSTO-DIALER --time
pm2 startup
```
Remove init script via:
```
pm2 unstartup systemd
```

# Info
Gian Diego Javes Leccas