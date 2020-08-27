Spring Boot - Tomcat Deployment

By using Spring Boot application, we can create a war file to deploy into the
web server. In this chapter, you are going to learn how to create a WAR file
and deploy the Spring BootApplication in Tomcat web server.

Spring Boot Servlet Initializer

The traditional way of deployment is making the Spring Boot Application
@SpringBootApplication class extend the SpringBootServletInitializer class.
Spring Boot Servlet Initializer class allows you to configure the application
when it is launched by using Servlet Container.

The code for Spring Boot Application class file for JAR file deployment is
given below -

package com.tutorialspoint.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
  public static void main(String[] args){
    SpringApplication.run(DemoApplication.class, args);
  }
}

We need to extend the class SpringBootServletInitializer to support WAR file
deployment. The code of Spring Boot Application class file is given below -

package com.tutorialspoint.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class DemoApplication extends SpringBootServletInitializer {

  @Override
  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
    return application.sources(DemoApplication.class);
  }

  public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
  }
}


Setting Main Class
In Spring Boot, we need to mention the main class that should start in the build
file. For this purpose, you can use the following pieces of code -

For Maven, add the start class in pom.xml properties as shown below -
<start-class>com.tutorialspoint.demo.DemoApplication</start-class>

For Gradle, add the main class name in build.gradle as shown below -
mainClassName="com.tutorialspoint.demo.DemoApplication"

Update packaging from JAR to WAR
We have to update the packaging JAR into WAR using the following pieces of code-
For Maven, add the packaging as WAR in pom.xml as shown below -
<packaging>war</packaging>

For Gradle, add the application plugin and war plugin in the build.gradle as
shown below -
apply plugin: 'war'
apply plugin: 'application'

Now, let us write a simple Rest Endpoint to return the string "Hello World from
Tomcat". To write a Rest Endpoint, we need to add the SpringBootWebStarter
dependency in pom.xml using the code as shown below -

<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
</dependency>

For Gradle, add the Spring Boot starter dependency in build.gradle using the code
as shown below -

dependencies {
  compile('org.springframework.boot:spring-boot-starter-web')
}

Now, write a simple Rest Endpoint in SpringBootApplication class file using
the code as shown below -

package com.tutorialspoint.demo;
