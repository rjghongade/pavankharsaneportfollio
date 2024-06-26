# **Developer Portfolio**
## Are you struggling to create a professional portfolio website? Look no further! You can use the Developer Portfolio template and create your very own personalized portfolio today! My website is designed to be user-friendly and easily customizable, making it perfect for both developers and freelancers.
# **Demo 🎥**
![screenshort_1](1.png)

# View live preview [here](https://pavankharsaneportfollio-ikql.vercel.app/).
# **Table of Contents 📜**
- **[Sections](#section)**
- **[Demo](https://pavankharsaneportfollio-ikql.vercel.app/)**
- **[Installation](#installation)**
- **[Getting Started](#getting-started)**
- **[Usage](#usage)**
- **[Packages Used](#packages-used)**
# **Sections 🔖**
- **HERO SECTION**
- **ABOUT ME**
- **EXPERIENCE**
- **SKILLS**
- **PROJECTS**
- **EDUCATION**
- **BLOG**
- **CONTACTS**

# **Installation ⬇️**
## You will need to download Git and Node to run this project
- **[Git](https://git-scm.com/downloads)**
- **[Node](https://nodejs.org/en/download/)**
## Make sure you have the latest version of both Git and Node on your computer.

```bash
node --version
git --version
```
# **Getting Started 🎯**
## Fork and Clone the repo
To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands
```bash
git clone https://github.com/rjghongade/pavankharsaneportfollio.git
```
## Install packages from the root directory
```bash
npm install
# or
yarn install
```
Then, run the development server:
```bash
npm run dev
# or
yarn dev
```
Open http://localhost:4200 with your browser to see the result.

# **Usage 🕹️**
Go to emailjs.com and create a new account for mail sending. In a free trial, you will get 200 emails per month. After setting up the email JS account, Please create a new .env file from the .env.example file.

Eg:
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID =
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY =
```
## Then, Customize data in the utils/data folder.
Eg:
```bash
export const personalData = {
  name: "Rajendra Ghongade",
  profile: "",
  designation: "Full-Stack Software Developer",
  description: "My name is Rajendra Ghongade....",
  email: "",
  phone: "+91 9022328048",
  address: "",
  github: "https://github.com/rjghongade",
  linkedIn: "https://www.linkedin.com/in/rajendra-ghongade-07b337259/",
  resume: "...",
};
```
devUsername Used for fetching blog from dev. to.

# **Packages Used 📦**

Here is a list of packages used in this project:

| Package             | Description             |
|---------------------|-------------------------|
| Angular             | Angular framework       |
| @emailjs/browser    | Email sending library   |
| font Awesome-icons         | Icon library     |
| toaster     | Notification library    |
| css                | CSS preprocessor        |
| bootstrap         | CSS framework           |

[screen-capture (1).webm](https://github.com/rjghongade/pavankharsaneportfollio/assets/105046011/8ad1e945-b458-490e-b60e-9c1ca6114789)
