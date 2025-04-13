
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    java,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads
} from "../assets/icons";




export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/vanshgarg110505',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vansh-garg11',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'E-Commerce Web Application',
        description: 'Developed a full-stack MERN eCommerce platform with essential features like secure JWT authentication, product management, and a smooth checkout process with Stripe integration.',
        link: 'https://github.com/vanshgarg110505/ecommerce',
    },
    {
        iconUrl: car,
        theme: 'btn-back-green',
        name: 'RideSync - Cab Booking Platform',
        description: 'Built a ride-hailing app with user registration, ride booking, driver management, real-time tracking, and Google Maps integration.',
        link: 'https://github.com/vanshgarg110505/carpooling-MERN',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-blue',
        name: 'Expense Tracker',
        description: 'Expense Tracker is a powerful MERN stack application designed to simplify financial management. With intuitive dashboards, detailed analytics, and easy data export.',
        link: 'https://github.com/vanshgarg110505/Expense-Tracker',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Remote Interview Platform',
        description: 'Our Remote Interview Platform, built with Next.js, streamlines the process of conducting technical and non-technical interviews remotely',
        link: 'https://github.com/vanshgarg110505/remote-interview-platform',
    }
];
