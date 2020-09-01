Spring Boot - Runners


select *  from provider_change_log ;
delete  from provider_change_log where 1 = 1;

Application Runner and Command Line interfaces lets you to execute the code
after the Spring Boot application is started. You can use these interfaces to
perform any actions immediately after the application has started.
This chapter talks about them in detail

Application Runner
Application Runner is an interface used to execute the code after the Spring Boot
application started. The example given below shows how to implement the
Application Runner interface on the main class file.

package com.tutorialspoint.demo;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication implements ApplicationRunner {
  public static void main(String[] args){
    SpringApplication.run(DemoApplication.class, args);
  }
  @Override
  public void run(ApplicationArguments arg0) throws Exception {
    System.out.println("Hello World from Application Runner");
  }
}

Now, if you observe the console window below Hello World from Application Runner,
the println statement is executed after the Tomcat started. Is the following
screenshot relevant?

  Tomcat started on port 8080
Hello World from Application Runner
  Started DemoApplication in 4.156 seconds

Command Line Runner
Command Line Runner is an interface. It is used to execute the code after the
Spring Boot application started. The example given below shows how to implement
the Command Line Runner interface on the main class file.

package com.tutorialspoint.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
  public static void main(String[] args){
    SpringApplication.run(DemoApplication.class, args);
  }
  @Override
  public void run(String... arg0) throws Exception {
    System.out.println("Hello world from Command Line Runner");
  }
}

Look at the console window below "Hello world from Command Line Runner" println
statement is executed after the Tomcat started.

Tomcat started on port: 8080
Hello World from Command Line Runner
Started DemoApplication in 3.45 seconds
