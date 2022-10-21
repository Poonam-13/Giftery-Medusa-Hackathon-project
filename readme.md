# e-Gifting Website - Giftery🎁
### _Your one and only gifting site_ 1️⃣
## By the _Girl Devs_ 👩🏻‍💻

![GifteryGitHubLogo](https://user-images.githubusercontent.com/115913356/197172583-8ce224a7-e47d-4100-8fae-d8666ce5cbe1.png)

- ✨By Poonam Thakur, Bhavya Hari, Antara Das, Rishi Urode & Ayush Kumar✨

- Star🌟 this repository if you like our project

Connect with us : 

**Poonam Thakur** : [LinkedInPT] [TwitterPT] [GitHubPT] Discord Tag - Poonam thakur#0888

**Bhavya Hari** : [LinkedInBH] [TwitterBH] [GitHubBH] Discord Tag - Bhaavya_hari#9552

**Antara Das** : [LinkedInAD] [TwitterAD] [GitHubAD] Discord Tag - Antara Das#9747

**Rishi Urode** : [TwitterRU] [GitHubRU] Discord Tag - Aadesh#5165

**Ayush Kumar** : [TwitterAK] [GitHubAK] Discord Tag - Mercury7477#3199

## What is Medusa?
> The Open Source Shopify Alternative

> Medusa is a composable engine that combines an amazing developer experience with endless customizations for merchants to scale.

> Medusa powers ambitious e-com startups to global enterprises with over 10000+ Projects and 2000+ Active Community Members

## Project Preview

### Demo Video (YouTube link): [Youtube-Video-Preview-Giftery]

### Image (Screenshots) preview :

<img width="1440" alt="Screenshot 2022-10-20 at 4 38 04 PM" src="https://user-images.githubusercontent.com/115913356/197172687-6bb286d1-76db-48d5-9fea-e068a1c362c3.png">
<img width="1440" alt="Screenshot 2022-10-20 at 4 38 13 PM" src="https://user-images.githubusercontent.com/115913356/197172699-de17d9cd-9918-43c9-bb20-6f53f2f6b259.png">
<img width="1440" alt="Screenshot 2022-10-20 at 4 38 19 PM" src="https://user-images.githubusercontent.com/115913356/197172710-6b5e4426-2ad1-4aee-b915-2b8dfc53e87e.png">
<img width="1440" alt="Screenshot 2022-10-20 at 4 38 23 PM" src="https://user-images.githubusercontent.com/115913356/197173261-e0332405-0544-4108-9871-01cdf9d099cf.png">
<img width="1440" alt="Screenshot 2022-10-20 at 4 38 34 PM" src="https://user-images.githubusercontent.com/115913356/197173087-d8705886-a7e8-4e9b-837d-e6b4518a55ea.png">
<img width="1440" alt="Screenshot 2022-10-20 at 4 38 43 PM" src="https://user-images.githubusercontent.com/115913356/197173284-dba39834-8e28-4d5c-bd9d-30ed295e8c2f.png">
<img width="1440" alt="Screenshot 2022-10-20 at 4 39 03 PM" src="https://user-images.githubusercontent.com/115913356/197173323-eff41e82-f25a-4ee9-8a23-a15095a6ea6b.png">
<img width="1440" alt="Screenshot 2022-10-20 at 4 39 14 PM" src="https://user-images.githubusercontent.com/115913356/197173330-2b86e18f-1899-4d94-a9c0-cfe6fdf0d4c4.png">
<img width="1440" alt="Screenshot 2022-10-20 at 4 39 55 PM" src="https://user-images.githubusercontent.com/115913356/197173343-62dd95ad-36b0-48f3-8245-5d4c09d386dd.png">
<img width="1440" alt="Screenshot 2022-10-20 at 4 40 04 PM" src="https://user-images.githubusercontent.com/115913356/197173363-d6606b5e-e6ba-4a76-ac05-464b88b69d4e.png">
<img width="1440" alt="Screenshot 2022-10-20 at 4 40 10 PM" src="https://user-images.githubusercontent.com/115913356/197173523-a2e2600e-91c5-485c-86d8-c2576d32f0aa.png">

### Admin Page Showing the order just placed :

<img width="1440" alt="Screenshot 2022-10-20 at 4 45 07 PM" src="https://user-images.githubusercontent.com/115913356/197173384-2616f8d8-8321-45b9-88d8-24a2268beaf7.png">

## Installation - Medusa - Get started in minutes

(Assuming you have node package manager {npm} and yarn package manager already installed on your machine)

If not, go to [Node.org] to install node.js

_Use sudo command if administrator error shows up_

```sh
npm install -g @medusajs/medusa-cli
```

## Installation - Others

Open _terminal_ and run the below caommands to install all necessary prerequisites :

# Yarn
```sh
npm install --global yarn
```

# PostgreSQL

Download from [PostgresSQL-Download]

# Docker
```sh
npm install -g docker
```

# Redis
```sh
npm install redis
```

Finally, Open your favourite editor (Used Editor at the end)

## Running our project in your environment

Open terminal on the project folder

1. Change to project folder
```sh
cd Giftery-medusa-project
```
2. Change to my-medusa-store directory
```sh
cd my-medusa-store
yarn install
```
3. Starting the server for content delivery
```sh
medusa develop
```
4. Go back to main project folder change directory to my-store-front
```sh
cd ..
cd ecom-site
yarn install
yarn dev
```
5. Open browser tab and visit the localhost at the port defined by yarn dev
```sh
localhost:8000
```

## Medusa Admin Page Access

Open terminal on the project folder and clone the Admin GitHub Repo
```sh
git clone https://github.com/medusajs/admin medusa-admin
```
1. Change directory to medusa-admin
```sh
cd medusa-admin
```
2. Install dependencies
```sh
yarn install
```
3. Start Development Server
```sh
yarn start
```
4. Make sure that you have the medusa-server on, It is required to access admin page, If not, run the below command in my-medusa-store directory
```sh
cd ..
cd my-medusa-store
medusa develop
```
```sh
Also beware of the port, by default medusa-admin runs at port:7000
If that port is already occupied, type "y" when prompted for port change, port will then change to 7001
```
```sh
localhost:7001
```

# Now you can run the project without any errors
\
\
\
\
Used IDE : Visual Studio 1.67.0 on MacOS Monterey 12.6

Used DigitalOcean Spaces for storage
```sh
Visit official documentation for setup of storage buckets at the end of this page
```
Medusa CLI Version : 1.3.3
Docker Version : 1.0.0
redis : 7.0 (Last Stable) 

Download Visual Studio Code on your machine at [VScode]

## For more info visit official Medusa documentation here [Medusa-Official]

[//]: # 

[LinkedInPT]: <https://www.linkedin.com/in/poonam-thakur-699529237//>
[LinkedInBH]: <https://www.linkedin.com/in/bhavya-hari-34205821a//>
[LinkedInAD]: <https://www.linkedin.com/in/antara-das-a881ba246/>

[TwitterPT]: <https://twitter.com/Poooo_13/>
[TwitterBH]: <https://twitter.com/Bhaavya_Hari/>
[TwitterAD]: <https://twitter.com/das_antara2312/>
[TwitterRU]: <https://twitter.com/AadeshUrode/>
[TwitterAK]: <https://twitter.com/Mercury7477/>

[GitHubPT]: <https://github.com/Poonam-13/>
[GitHubBH]: <https://github.com/Bhaavya22/>
[GitHubAD]: <https://github.com/riapia/>
[GitHubRU]: <https://github.com/AadeshUrode3132/>
[GitHubAK]: <https://github.com/AyushSahu7477/>

[Youtube-Video-Preview-Giftery]: <https://youtu.be/N6rWOhenpts/>

[Node.org]: <https://nodejs.org/en/download//>
[PostgresSQL-Download]: <https://www.postgresql.org/download//>
[VScode]:<https://code.visualstudio.com//>
[Medusa-Official]: <https://medusajs.com//>
Antara Das
