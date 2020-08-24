Chapter 1

Introduction

Web application development is not what it used to be, even a few years
back. Today, there are so many options, and the uninitiated are often
confused about whats's good for them. There are many choices; not just
the broad stack (the vaious tiers or technologies used), but also for
tools that aid in development.

This book stakes a cliam that the MERN stack is great for developing a
complete web application and takes the reader through all that is necessary
to get that done.

In this chapter, I'll give a broad overview of the technologies that the MERN
stack consists of. I won't go into details or examples in this chapter, instead,
I'll just introduce the high-level concepts. I'll focus on how these concepts
affect an evaluation of whether MERN is a good choice for your next web
application project


What's MERN?
Any web application is built using multiple technologies. The combinations of
these technologies is called a "stack" popularized by the LAMP stack, which
is an acronym for Linux, Apache, MySQL, PHP, which are all open-source software.
As web development matured and their interactivity came to the fore, Single Page
Applications(SPAs) became more popular. An SPA is a web application paradigm
that avoids fetching the contents of an entire web page from the server to
display new contents. It instead uses lightweight calls to the server to get
some data or snippets and changes the web page. The result looks quite nifty
as compared to the old way of reloading the page entirely. This brough about
a rise in front-end frameworks, since a lot of the work was done on the
front-end. At approximately the same time, though completely unrelated, NoSQL
databases also started gaining popularity.

The MEAN (MongoDB, Express, AngularJS, Node.js) stack was one of the early open
source stacks that epitomized this shift toward SPAs and adoption of NoSQL.
AngularJS, a front-end framework based on the Model View Controller (MVC)
design pattern, anchored this stack. MongoDB, avery popular NoSQL database,
was used for persistent data storage. Node.js, a server-side Javascript
runtime enviroment, and Express, a web-server built on Node.js, formed the
middle-tier, or the web server. This stack was arguably the most popular stack
for any new web application until a few years back

Not exactly competing, but React, an alternate front-end technology created
by Facebook, has been gaining popularity, and offers an alternative to
AngularJS. It thus replaces the "A" with an "R" in MEAN, to give us the MERN
Stack. I said "not exactly" since React is not a full fledged MVC framework.
It is a Javascript library for building user interfaces, so in some sense, it's
the View part of the MVC.

Although we pick a few defining technologies to define a stack, these are not
enough to build a complete web application. Other tools are required to help
the process of development, and many libraries are needed to compement React.
This book is about building a complete web application based on the MERN stack
and all these related tools and libraries.


Who Should Read This Book

Developers and Architects who have prior experience in any web app stack other
than the MERN stack will find the book useful for learning about this modern
stack. Prior knoledge of how web applications work is required. It is further
assumed that the reader knows the basics of HTML and CSS. It will greatly help
if you also are familiar with the version control tool git, you could try out
the code just by cloning the git repository that holds all the source code
described in this book and running each step by checkout out a branch


The code in the book uses latest features of Javascript(ES2015+), and it is
assumed that you well-versed in these features such as classes, fat arrow
functionsm, const keyword etc. Whenever I first use any of these modern
Javascript features, I will point it out using a note so that you are aware
that it is a new feature.
In case you are not familiar with a particular feature, you can read up on it
as and when you encounter it.

If you have have decided that your new app will use the MERN stack, then this
book is a perfect enabler for you that lets you quickly get off the ground.
Even if you have not, reading the book will get you excited about MERN and
equip you with enough knowledge to make a choice for a future project.
The most important thing you will learn is to put together multiple technologies
and build a complete, functional web application, and you can be called a
full-stack developer or architect on MERN

Structure of the Book

Although the focus of the book is to let you learn how to build a complete
web application, most of the book revolves around React. That's just because,
as is true of most moders SPAs, the front-end code forms the bulk.
And in this case, React is used for the front end.

The tone of the book is tutorial-like and designed for learning by doing. We
will build a web application during the course of the book. I use the term "we"
because you will need to write code just as I show you the code that is to
be written as part of the plentiful code listings. Unless you write the code
yourself alongside me and solve the exercises, you will not get the benefit
of the book. I encourage you not to copy-paste; instead please type out the code
. I find this very valuable in the learning process. There are very small nuances
- eg:., types of quotes - that can cause a big difference. When you type out the
code, you are much more conscious of this than when you are just reading it.
    Sometimes, you may run into situations where what you typed in doesn't work.
In such cases, you may want to copy-paste to ensure that the code is correct
and overcomes any typos you may have made. In such cases, do not copy-paste
from the electronic version of the book, as the typesetting may not be faithful
to the actual code. I have created a GitHub repository at
https://github.com/vasansr/pro-mern-stack-2
for you to compare, and in unavoidable circumstances, to copy-paste from.

I have also added a checkpoint (a git branch in fact) after every change that
can be tested in isolation so that you can look at the exact diffs between two
checkpoints, online. The checkpoints and links to the diffs are listed in the
home page (the README) of the repository. You may find this more useful than
looking at the entire source, or even the listings in the text of this book, as
GitHub diffs are far more expressive than what I can show in print.

Rather than cover one topic or technology per section, I have adopted a more
practical and problem solving approach. We will have developed a full-fledged
working application by the end of the book, but we'll start small with a Hello
World example. Just as in a real project, we will add more features to the
application as we progress. When we do this, we'll encounter tasks that need
additional concepts or knowledge to proceed. For each of these, I will introduce
the concept or technology that can be used, and I'll discuss that in detail.

  Thus, you may not find every chapter or section devoted purely to one topic
or technology. Some chapters may focus on a technology and others may address
a set of goals we want to achieve in the application. We will be switching
between technologies and tools as we progress
