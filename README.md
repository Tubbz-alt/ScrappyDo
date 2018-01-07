# Project
ScrappyDo

## Elevator pitch
From your scraps, do some hardware hacks!

## Inspiration
Since we were at a hardware-focused hackathon, we wanted to build something with our available hardware.  Overwhelmed, we couldn’t find any projects online that we had the components to build -- nor any websites that let us put in components to find suitable projects. As a result, we decided to build ScrappyDo, the very first application that does just that!  Inspired by IBM Chef Watson which finds recipes based on input ingredients, ScrappyDo enables hackers worldwide and anybody with a lot of scrap components to find projects that they can actually build!

## What it does
A hardware-focused software hack!
Recommends and lists hardware projects based on what spare parts you have
Using computer vision, ScrappyDo enables the user to take a pictures of hardware for lightning-fast identification and seamless component entry (thanks Mystery Gang!)
Fosters a community of eager engineers with forum catered to projects c:
Empowers education and creativity -- making everyone’s lives better :D

## How we built it
This web application is based on the Cloud and is stored on Amazon AWS, S3, and MongoDB.  Our image detection is powered by Amazon Rekognition, an API that can rekognize items from pictures. We knit everything together with Node.js, Socket.io and embedded JavaScript into a nice, sleek website.  Finally hosted on Amazon Elastic Beanstalk for all to enjoy!!

## Challenges we ran into
We were not able to set up our domain name (www.scrappydo.org) in time, since name server changes take up to 24 hours to fully start working. However, everything is set up from domain.com, so expect the correct address to become active soon.  Maintaining the databases was also a surprising struggle because we accidentally messed it up thrice with minimal lines of evil code. They would’ve gotten away with it too if it weren’t for us meddling kids! 

## Accomplishments that we're proud of
Everything. First and foremost, we are very proud of our domain name and the theme. Unfortunately, it’s gonna take 24 hrs to take effect :c  We are also pretty proud of the usability and usefulness of our website. 

## What we learned
We learned how to communicate effectively as a team. At some points, all of us were working on the same files at the same time. This created merge conflicts, but we communicated well and resolved them without any issues. We also learned how to use Amazon Web Services’ products, MongoDB, and Socket.io. We learned how to use Amazon Rekognition to detect images and host webapps using AWS Elastic Beanstalk.  And probably the most boring part… we learned how to better read and understand documentation.

## What's next for ScrappyDo
Instead of using the Mystery Gang’s favorite tool, Amazon Rekognition, we could train  our own ML model for image detection that is geared towards hack/hardware components, thus improving accuracy.
Program a scraper to get new projects from existing DIY project websites to build up our database of projects.
Create user profiles and cater potential projects based on what they enjoy hacking.
Create an off-brand Scrappy Doo mascot to avoid copyright claims!
