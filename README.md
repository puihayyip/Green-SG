# **GreenSG**

## **Introduction**

This individual fullstack project is an electric car rental clone of the popular **BlueSG** service in Singapore. Submitted as the capstone project for General Assembly's 12 weeks software engineering bootcamp. This project is built using the following stack.

 - Frontend: **_Typescript with React_**
 - Backend: **_Java with Springboot_**
 - Database: **_PostgreSQL_**
 - Styling: **_MaterialUI_**
 - Additional libraries used:
 - Simplier calendar functions: **_MomentJS_**
 - Number formatting: **_NumeralJS_**
 - Frontend form validation: **_Formik with Yup_**
 - Map rendering: **_Leaflet (React)_**
 - API calls: **_Axios_**

Key objectives for selection of project and tech stack:

1. Exposure to more enterprise ready tech stacks
2. Exposure to type-safe languages
3. Work with relational database
4. Experiment with using more libraries

## **Features**

User Menu:

- Login/logout
- Create new user
- Amend login details

Map:

- Search and locate carparks
- Show number of cars in each carpark
- Click on carpark to start/end booking

Details tab:

- View current booking
- View previous bookings
- View messages from **GreenSG**

## **App Structure**

Backend

```
📦project4
 ┣ 📂controllers
 ┃ ┣ 📜CarController.java
 ┃ ┣ 📜HomeController.java
 ┃ ┣ 📜MscpController.java
 ┃ ┗ 📜UserController.java
 ┣ 📂entities
 ┃ ┣ 📜Car.java
 ┃ ┣ 📜LoginForm.java
 ┃ ┣ 📜Mscp.java
 ┃ ┣ 📜PutForm.java
 ┃ ┗ 📜User.java
 ┣ 📂repository
 ┃ ┣ 📜CarRepository.java
 ┃ ┣ 📜MscpRepository.java
 ┃ ┗ 📜UserRepository.java
 ┣ 📂services
 ┃ ┣ 📜CarService.java
 ┃ ┣ 📜MscpService.java
 ┃ ┗ 📜UserService.java
 ┗ 📜Project4Application.java
```

Frontend

```
📦src
┣ 📂assets
┃ ┗ 📜carBackground2.jpg
┣ 📂pages
┃ ┣ 📂dropdownDialogs
┃ ┃ ┣ 📜Bill.tsx
┃ ┃ ┣ 📜CurrentBooking.tsx
┃ ┃ ┣ 📜EditProfile.tsx
┃ ┃ ┗ 📜Message.tsx
┃ ┣ 📜DropdownList.tsx
┃ ┣ 📜Footer.tsx
┃ ┣ 📜Home.tsx
┃ ┣ 📜LoginForm.tsx
┃ ┣ 📜MainHeader.tsx
┃ ┣ 📜Map.tsx
┃ ┣ 📜MapPopup.tsx
┃ ┣ 📜PasswordInputField.tsx
┃ ┣ 📜RegisterForm.tsx
┃ ┣ 📜Sidebar.tsx
┃ ┗ 📜TextInputField.tsx
┣ 📜App.css
┣ 📜App.tsx
┣ 📜index.css
┣ 📜index.tsx
┗ 📜interfaces.tsx
```
