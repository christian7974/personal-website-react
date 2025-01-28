import convexHull from './images/project_images/convex_hull_example.jpg';
import personalWebsitePhoto from './images/project_images/personal_website_photo.png';
import apiPhoto from './images/project_images/api_repo_photo.png';
import arithPhoto from './images/project_images/arith_photo.png';
import appTrackPhoto from './images/project_images/app_tracker.png';
import dataStructuresPhoto from './images/project_images/data_structures_repo.png'
export const project_list = [
    {
        title: "College Basketball API",
        image: apiPhoto,
        description: "API that I designed to retrieve NCAA D1 Men's Basketball Team Stats using Typescript, Node.js, MongoDB and Express.js.",
        extendedDescription: 
            `When creating a bracket for March Madness, I found that there was no easy way to pull the statistics of every team in the tournament. The tools that I 
            found were either expensive or did not have what I was looking for. I created the API to help me compare two teams and to help decide which teams should 
            advance in the tournament. I wrote a web scraper that would pull the data from College Basketball Reference and then I would store the data in a 
            MongoDB database. The API calls from this database of teams and users can find a certain team, sort the teams by a statistic as well as other features to help them make a bracket.`,
        link: "https://github.com/christian7974/college-basketball-api-ts",
    }, 
    {
        title: "Job Application Tracker",
        image: appTrackPhoto,
        description: "Web application developed to help people keep track of their job applications using React.js, Next.js with a PostgreSQL database.",
        extendedDescription: 
            `When applying jor jobs out of undergrad, I found myself having a hard time recording the jobs that I applied for and would often apply to the same position at the same
            company multiple times. This would be taking away time from sending more meaningful applications. I created this web application to help keep track of my applications
            and to help me stay organized. I used React.js and Next.js for the frontend and used Supabase (for authentication and the database) for the backend. While I used this
            when applying for jobs after college, anyone who is mass applying for jobs can use this tool as well. Use the link below to find the repository and click the link to see the actual application.`,
        link: "https://github.com/christian7974/simple-job-app",
    }, 
    {
        title: "Data Structures/Algorithms Portfolio",
        image: dataStructuresPhoto,
        description: "Repository of well-known data structures and algorithms written in Java.",
        extendedDescription: 
            `One language that I always wanted to learn and master was Java, however I never had the opportunity to do so in undergrad. I wanted to learn it since I did not have
            too much experience with object-oriented programming which is a pillar of computer science and software engineering. I also wanted a way to stay sharp with
            data strucutres and algorithms, since those are also important for software engineering. This repository is a way for me to practice using Java while also learning
            and strengthening my skills in data structures.`,
        link: "https://github.com/christian7974/DataStructures",
    }, 
    {
        title: "This Website",
        image: personalWebsitePhoto,
        description: "Website I created to showcase my skills, projects as well as my interests and future goals. I used React.js, Tailwind CSS and Framer Motion.",
        extendedDescription: 
            `I created this website as a way to strengthen my skills in React.js and to showcase my projects. I wanted to create a website that was visually 
            appealing and easy to navigate. I styled the website with Tailwind CSS and also used Framer Motion to add animations to the website. I used Typed.js
            to create the typing effect on the home page. This was a fun project to work on as I spent a lot of time planning the layout, choosing the color and
            figuring out ways to make the website stand out. The most challenging part of this project was making the webpage responsive so that it would look
            pleasing on all kinds of devices.`,
        link: "https://github.com/christian7974/personal-website-react",
    }, 
    {
        title: "Convex Hull",
        image: convexHull,
        description: "Program my group wrote in C++ for our Data Structures and Abstractions class that finds the convex hull of a set of points using the Graham Scan algorithm.",
        extendedDescription: 
            `In my Data Structures and Abstractions course, we had to choose a topic to write a program on in a group of 3 students. My peers and I chose to program
            Convex Hull as it was one of the more difficult choices and we wanted to challenge ourselves. The most difficult part of this project was first learning
            the algorithm (Graham Scan) and implementing that in C++. Before every meeting, our team would trace out the algorithm on a whiteboard until we could do it
            successfully. We also had to present the program in front of a panel of judges consisting of the TAs and the Professor. We presented our algorithm perfectly
            and acheived an automatic A grade in the course.`,
        link: "https://github.com/christian7974/Convex-Hull",
    }, 
    {
        title: "Arith (Lossy Image Compression)",
        image: arithPhoto,
        description: "An implementation of lossy image compression using the Discrete Cosine Transformation Formula in Rust.",
        extendedDescription: 
        `In my Computer Organization course, we were tasked with performing lossy image compression on a .ppm file using the Discrete Cosine Transformation formula in Rust.
        This involved converting every pixel to a different value, then grouping the pixels in groups of 2x2 blocks and then having to undo that process when we had to
        decompress the photo. The hardest part of this assignment for my group was breaking down the photo into the 2x2 blocks and then having to undo that process.
        One technique that my partner and I used was to program incrementally, where we would write one step of the compression and then write the step to decompress
        the photo (the inverse process). This helped us find bugs throughout the process and made working on the program easier.`,
        link: "NA", 
    }, 
];