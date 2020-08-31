Spring Boot - Code Structure

Spring Boot does not have any code layout to work with. However, there are some
best practices that will help us. This chapter talks about them in detial.


Default package
A class that does not have any package declaration is considered as a default
package. Note that generally a defualt package declaration is not recommended.
Spring Boot will cause issues such as malfunctioning of auto configuration
or Component Scan, when you use default package.

Note - Java's recommended naming convention for package declaration is reversed
domain name. For example com.tutorialspoint.myproject

Typical Layout

The typical layout of Spring Boot application is shown in the image given below:-

com
+- tutorialspoint
  +- myproject
    +- Application.java
    |
    +- model
    | +- Product.java
    +- dao
    | +- ProductRepository.java
    +- controller
    | +- ProductController.java
    +- service
    | +- ProductService.java

The Application.java file should declare the main method along with
@SpringBootApplication. Observe the code given below for a better understanding -

package com.tutorialspoint.myproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }
}
