---
layout: single
title: "Projects"
permalink: /projects/
toc: true
toc_sticky: true
#classes: wide
header:
  overlay_image: /assets/images/header_projects.jpg
  caption: |
    [Photo: **Unsplash** <i class="fas fa-external-link-alt"></i>](https://unsplash.com/photos/FO7JIlwjOtU)
---

# GitHub Contributions

The graph below shows my GitHub contributions in the last year. These are mostly
commits to small personal projects (some of which you can read about below!) and
does not include any of my day to day work as a full time SWE.

<script
  src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js">
</script>
<link
  rel="stylesheet"
  href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
/>
<style>
  .calendar {
    margin: auto;
    margin-bottom: 20px;
  }
  .contrib-number {
    color: white;
  }
}
</style>
<div class="calendar">
  Loading...
</div>
<script>
  GitHubCalendar(".calendar", "chrisdueck", { responsive: true });
</script>

<sub>
  Embedded using [GitHub Calendar](https://github.com/Bloggify/github-calendar) &copy; Bloggify.
</sub>

<!-- # Current Projects

_I'm currently taking a break from new projects as I've just finished my
bachelor's degree. Check back soon!_ -->

# Current Projects

## Real-time card games

- Work in progress project for building experience with websockets and animated
  components.
- Consists of a React client app that connects to a Node backend, both written
  in TypeScript and making use of [socket.io](https://socket.io/).
- Able to create and join rooms with other players via unique generated codes.
- Playing cards can be dragged around the screen, and flipped over.
- Much more to come...

![image](/assets/images/cardgames.gif){: style="width: 26em; margin-left: 3em;"}

# Past Projects

## Poll sharing application

- Web application built with React, Material UI and ChartJS.
- Implemented user authentication and data storage using the Supabase API and
  PostgreSQL database.
- Able to create and respond to polls, view graphed results and update details
  as necessary.

![image](/assets/images/pollshare-polls.png){: style="float: left; margin-right:
20px; height: 15em;"}
![image](/assets/images/pollshare.png){: style="float: left; height: 15em;"}
<br style="clear: both" />

## Test Platform for Byzantine Consensus

_University Final Year Project, 2020/2021_

![image](/assets/images/consensus.png){: style="float: right; width: 8em;"}

- Created a web application for testing view synchronisation algorithms. Written
  in Elixir, using the Phoenix web framework.
- Able to create tests for algorithms to run across a distributed set of
  nodes and track their progress on screen in real-time, using Phoenix
  LiveView.
- Able to set up Byzantine (malicious) nodes which try to interfere with the
  algorithm's progress and safety.
- Used logging capabilities to carry out an analysis and critical evaluation of
  algorithm performance.

## Lyric-based Musical Genre Classification

_University Group Project, 2021_

![image](/assets/images/nlp.png){: style="float: right; width: 7em;"}

- Created a Natural Language Processing model to identify a song's possible
  genres from reading its lyrics.
- Built the lyrics dataset for training/testing with a Python script that takes
  tracks from Last.fm's existing dataset of song IDs and tags, and queried the
  Genius API to collect ordered lyrics for each.
- Experimented with data preprocessing, tokenisation, models and tuning of
  hyperparameters using a range of Python libraries (Pandas, NLTK, Scikit-learn,
  Gensim, SpaCy etc.)
- Final model deployed online with REST API and a gitlab CI/CD pipeline which
  updates saved model weights whenever new data is added to the repo.

## This Website!

_Side Project, 2020_

![image](/assets/images/project.png){: style="float: right; width: 6em;"}

- Built with [Jekyll](https://jekyllrb.com/), using the [Minimal
  Mistakes](https://mademistakes.com/work/minimal-mistakes-jekyll-theme/) theme
  and my own CSS adjustments.
- All the content is written in markdown and HTML.
- Created as a portfolio of my experience in software development.

## Unity Ball Bouncing Game

_Side Project, 2019_

Bounce a ball on the bar for as long as possible while avoiding various falling
obstacles! Catch bonus lives to stay alive! Every 15 seconds the spawn rate of
the obstacles will increase, making the game progressively harder. Your overall
score increases with each second played until out of lives.

- Written in C# using free assets from the Unity Asset Store.
- Built for Android, controlled by touching either side of the screen.
- Includes sound and particle effects for all collisions.

![image](/assets/images/bouncinggame.gif)

<sup>To view this project on GitHub, <a
href="https://github.com/chrisdueck/bouncing-game">click here.</a></sup>

## GitFit

_University Team Project, 2019_

![image](/assets/images/gitfit-screenshot.jpg){: style="float: right; width:
12em; margin-left: 5px;"}

- Android application written in Java.
- Allowed users to track health data and complete challenges with friends.
- Contributions:
  - Storage of user data. User stats were stored in Cloud Firestore, while
    personal data was restricted to local storage for privacy.
  - Developed core UI for viewing stats and challenge progress over time.
  - Managed development meetings, wrote and distributed minutes.
  - Developed functionality for approximating calories burned while walking.
  - Aided other team members in testing and bug fixing.

## Massive Music Online

_University Project, 2018_

- Web application created with the Ruby on Rails framework.
- Included use of jQuery and AJAX for a more dynamic and responsive UI.
- Features:
  - Manage and view songs, albums and artists.
  - User account creation - login/sign-up.
  - Create and save playlists as well as your favourite songs.
  - Upload and view album covers - powered by CarrierWave.
  - A contact form to send me an email!

{% include figure image_path="/assets/images/mmo.png" alt="Viewing albums in
Massive Music Online" caption="The UI could do with some work, but this project
was great for learning about MVC." %}{:
style="width: 32em;"}

## VirtualCache

_University Project, 2018_

![image](/assets/images/virtualcache.png){: style="float: right; width: 6em;"}

- VirtualCache is a an Android app written in Java which facilitates virtual
  [geocaching!](https://en.wikipedia.org/wiki/Geocaching)
- Create your own cache at your current location and fill it with photos, or
  other images.
- Anyone else who walks within a certain radius of your cache will be able to
  look inside and add to it for others to find later on.
- Using the GoogleMaps API, the app displays your current location and marks the
  area of caches you can open.

<br /> <sub> Icons made by <a href="https://www.flaticon.com/authors/eucalyp"
title="Eucalyp">Eucalyp</a>, <a href="https://www.freepik.com"
title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/ddara"
title="dDara">dDara</a> from <a href="https://www.flaticon.com/"
title="Flaticon">www.flaticon.com</a> </sub>
