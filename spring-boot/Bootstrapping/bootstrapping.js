Spring Boot - Bootstrapping
This chapter will explain you how to perform bootstrapping on a Spring Boot
application

Spring Initializer
One of the ways to Bootstrapping a Spring Boot application is by using
Spring Initializer. To do this, you will have to visit the Spring Initializer
web page www.start.spring.io and choose your Build, Spring Boot Version and
platform. Also, you need to provide a Group, Artifact and required dependencies
to run the application.

Observe the following screenshot that shows an example where we added the
spring-boot-starter-web dependency to write REST Endpoints.

Once you provided the Group, Artifact, Dependencies, Build Project, Platform
and Version, click Generate Project button. The zip file will download and
the files will be extracted.

This section explains you the examples by using both Maven and Gradle.
Maven

After you download the project, unzip the file. Now, your pom.xml file looks
as shown below −


<?xml version = "1.0" encoding = "UTF-8"?>
<project xmlns = "http://maven.apache.org/POM/4.0.0"
    xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation = "http://maven.apache.org/POM/4.0.0
    http://maven.apache.org/xsd/maven-4.0.0.xsd" >
<modelVersion>4.0.0</modelVersion>
<groupId>com.tutorialspoint</groupId>
<artifactId>demo</artifactId>
<version>0.0.1-SNAPSHOT</version>
<packaging>jar</packaging>

<name>demo</name>
<description>Demo project for Spring-Boot</description>

<parent>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-parent</artifactId>
  <version>1.5.8.RELEASE</version>
  <relativePath/> <!-- lookup parent from repository -->
</parent>

<properties>
  <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
  <java.version>1.8</java.version>
</properties>

<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>

  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
  </dependency>
</dependencies>

<build>
  <plugins>
    <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
    </plugin>
  </plugins>
</build>


Gradle
Once you download the project, unzip the file. Now your build.gradle file
looks as shown below-

buildScript {
  ext {
    springBootVersion = '1.5.8.RELEASE'
  }
  repositories {
    mavenCentral()
  }
  dependencies {
    classpath("org.springframework.boot:spring-boot-gradle-plugin:${springBootVersion}")
  }
}

apply plugin: 'java'
apply plugin: 'eclipse'
apply plugin: 'org.springframework.boot'

group = 'com.tutorialspoint'
version = '0.0.1-SNAPSHOT'
souceCompatibility = 1.8

repositories {
  mavenCentral()
}
dependencies {
  compile('org.springframework.boot:spring-boot-starter-web')
  testCompile('org.springframework.boot:spring-boot-starter-test')
}

Class Path Dependencies
Spring Boot provides a number of starters to add the jars in our class path.
For example, for writing a Rest Endpoint, we need to add the
spring-boot-starter-web dependency in our class path. Observe the codes shown
below for a better understanding

Maven dependency
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
</dependencies>

Gradle dependency
dependencies {
  compile('org.springframework.boot:spring-boot-starter-web')
}


Main method
The main method should be writing the Spring Boot Application class.
This class should be annotated with @SpringBootApplication. This is the entry
point of the spring boot application to start. You can find the main class file
under src/java/main directories with default package.

In this example, the main class file is located at the src/java/main directories
with the default package com.tutorialspoint.demo. Observe the code shown
here for a better understanding -

package com.tutorialspoint.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
  public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
  }
}

Write a Rest Endpoint
To write a simple Hello World Rest Endpoint in the Spring Boot Application
main class file itself, follow the steps shown below -
- Firstly. add the @RestController annotation at the top of the class
- Now, write a RequestURI method with @RequestMapping annotation
- Then, the Request URI method should return the Hello World string.

Now, your main Spring Boot Application class file will look like as shown in
the code given below -

package com.tutorialspoint.demo

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController

public class DemoApplication {
  public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
  }
  @RequestMapping(value = "/")
  pubic String hello() {
    return "Hello World";
  }
}

Create and Executable JAR
Let us create and executable jar file to run the Spring Boot Application by
using  Maven and Gradle commands in the command prompt as shown below -

Use the Maven command mvn clean install as shown below -
C:\demo> mvn clean install

After executing the command, you can see the BUILD SUCCESS message at the
command prompt as shown below -

[INFO] BUILD SUCCESS

Use the Gradle command gradle clean build as shown below -
C:\demo>gradle clean build

After executing the command, you can see the BUILD SUCCESSFUL message in the
command prompt as shown below -

BUILD SUCCESSFUL

Run Hello World with Java
Once you have created an executable JAR file, you can find it under the
following directories.
For Maven, you can find the JAR file under the target directory as shown below-

C:\demo\target
demo-0.0.1-SNAPSHOT.jar

For Grade, you can find the JAR file under the builds/libs directory as
shown below-

C:\demo\build\libs
demo-0.0.1-SNAPSHOT.jar.original

Now run the JAR file by using the command java -jar demo-0.0.1-SNAPSHOT.jar.
Observe in the above example, the JAR file is named demo-0.0.1-SNAPSHOT.jar

C:\demo\target> java -jar demo-0.0.1-SNAPSHOT.jar

Once you run the jar file, you can see the output in the console window
as shown below -

:Tomcat started on port(s): 8080 (http)
:Started DemoApplication in 6.092 seconds (JVM running for 8.119)

Now, look at the console, Tomcat started on port 8080 (http).
Now, go to the web browser and hit the URL http://localhost:8080/
and you can see the output as shown below -

Hello World

101. Ladies and Gentlemen, I'm the tortoise.
      I can beat anybody, anytime, in any competition.
      Not because I'm the best or the smartest or the
      fastest. I will win because of the habit that
      I have developed and the consistency I use in
      applying it. I'm the world's biggest believer
      in consistencey. I'm living proof that it is the
      ultimate key to success
102. You can become the person you want to be
103. No one has ever failed as many times as I have
104. If History has proven anything, it is the Evolution
        always wins
105. The more music you make, the better listener you become

106. The first week's step should be so small that it will
      become mundane in the second week
107. Knowledge is the new currency
108. Show me your friends and I will show you your future
109. Get comfortable making mistakes
110. Age is just a number

111. Those who fly solo have the strongest wings
112. Get rich first. Philosophize afterward
113. Shut-eye is the secret of my superpowers
114. Familiarity is the crux of productivity
115. You shall not eat or drink anything that may intoxicate
          - Buddha

116. Decision-making is easy if there are no contradictions
      in your value system
117. The me I see, is the me I'll be
118. Brilliance and the Capacity for wisdom have been with
      him all the time
119. If a man uses gifts of mind and speech rightly, he will differ in
      nothing from the immortals
120. An eagle never observes others and never lives in the past

121. A man's highest happiness is found in the bestowel of benefits
        on those he loves
122. It is not possible to live a really complete or successful life
      unless one is rich
123. We always have been the exception.
124. Everything is up for grabs
125. You shall not swear or indulge in idle and vain talk but speak decently
      and with dignity to the purpose, or keep silence

126. Great Scientists have reported that their creative breakthroughs came
      at a time of mental quietitude
127. No idea is perfect. You have to make it one
128. Prodigies are born. They are not developed
129. I thought about that once. Why didn't I do something about it
130. Don't kill the dream. Execute it

131. You won't start winning without a beginning
132. There is only stuff worth stealing and there is stuff worth not stealing
133. The Lion's limitless endurance, aggressiveness and heart power it
        on and on
134. There is no failure until you quit
135. I may not win immediately, but definitely

136. Even the most amazing product on Earth might require 100 calls just to
      get the 10 meetings
137. Top CEOs read 60 books a year
138. You never quit. Do you ?
139. Nothing happens to me. It happens because of me
140. Ask yourself how close you are to your full capability

141. The more actions you take, the better your chances are of getting lucky
142. Any target attacked with the right actions in the right amounts with
      persistence is attainable
143. Never reduce a target, instead increase action
144. I listen and visulaize what goes on in my imagination
145. No one can create something out of nothing
