# UniAir
A system to convert a mundane air-conditioner to a smart one\
Project for [NUS Orbital](https://orbital.comp.nus.edu.sg/) (CP2106: Independent Software Development Project)

## Description
Our project is split into the front-end and the back-end. The front-end is a React Native mobile application called UniAir. The back-end is a Python Web Server running on the Flask WebFramework called the UniAir Server. UniAir which serves as a client to the UniAir Server which handles sending IR signals to the air-conditioner. Each of them have their own features and details.

<img src="https://user-images.githubusercontent.com/1343896/178143204-67432bf9-6a33-4d79-b228-5be1609ec362.png" width="750" />

### Features

#### Primary Features
1. To be able to remotely control the conditioner through a mobile application.

#### Secondary Features
1. Control multiple air-conditioners using one mobile app.
2. To be able to schedule actions via the controller.
3. To be able to save your configured air-conditioners and sync it with your google account for ease of backup or use with multiple devices.
4. Web API Access

### Tech Stack
Front-End:
- ReactNative
- JavaScript

Back-End:
- Python
- Flask Web Framework
- Linux Infrared Remote Control (LIRC) Package
- Raspberry Pi
- IR Transmitters and Receivers
- Postman (testing APIs)

<img src="https://user-images.githubusercontent.com/1343896/178143074-e84c0aa1-bea5-47fb-8ad8-bbe59e88241c.png" width="750" />
