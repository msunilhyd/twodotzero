Spring Boot - Application Properties

Application properties support us to work in different environments. In this
chapter, you are going to learn how to configure and specify the properties
to a Spring Boot Application.

Command Line Properties
  Spring Boot application converts the command line properties into Spring Boot
Environment properties. Command line properties take precendency over other
sources. By default, Spring Boot uses the 8080 port number to start the Tomcat.
Let us learn how to change the port number by using command line properties.

Step 1 - After creating an executable jar file, run it by using the command
java -jar <JARFILE>
Step 2 - Use the command given in the screenshot given below to change the port
number for Spring Boot Application by using command line properties.

java -jar demo-0.0.1-SNAPSHOT.jar --server.port=9090

Note - You can provide more than one application properties by using the
delimiter -.

Properties File
  Properties files are used to keep 'N' number of properties in a single file to
run the application in a different environment. In Spring Boot, properties are
kept in the application.properties file under the classpath.

The application.properties file is located in the src/main/resources directory.
The code for sample application.properties file is given below -

server.port = 9090
spring.application.name = demoservice

Note that in the code shown above the Spring Boot application demoservice starts
on port 9090

YAML File

  Spring Boot supports YAML based properties configurations to run the application.
Instead of application.properties, we can use application.yml file. This YAML file
also should be kept inside the classpath. The sample application.yml file is
given below -

spring:
  application:
    name: demoservice
  server:
port: 9090

Externalized Properties
  Instead of keeping the properties file under the classpath, we can keep the
properties file in different location or path. While running the JAR file, we
can specify the properties file path. You can use the following command to specify
the location of properties file while running the JAR -

-Dspring.config.location = C:\application.properties

command :-
  java -jar -Dspring.config.location=C:\application.properties demo-0.0.1-SNAPSHOT.jar

Use of @Value Notation
The @Value notation is used to read the environment or application property value
in Java code. The syntax to read the property value is shown below -

@Value("${propety_key_name}")

Look at the following example that shows the syntax to read the
spring.application.name property value in Java variable by using @Value annotation.

@Value("${spring.application.name}")

Observe the code given below for a better understanding -

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.bind.annotation.RequestMapping;
import org.springframework.boot.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DempApplication {
  @Value("${spring.application.name}")
  private String name;
  public static void main(String[] args){
    SpringApplication.run(DemoApplication.class, args);
  }
  @RequestMapping(value = "/")
  public String name() {
    return name;
  }
}

Note - If the property is not found while running the application, Spring Boot
throws the Illegal Argument exception as Could not resolve placeholder
'spring.application.name' in value "${spring.application.name}"

To resolve the placeholder issue, we can set the default value for the property
using the syntax given below -

@Value("${property_key_name:default_value}")

@Value("${spring.application.name:demoservice}")

Spring Boot Active Profile
  Spring Boot supports different properties based on the Spring active profile.
For example, we can keep two separate files for development and production to
run the Spring Boot application.

Spring active profile in application.properties
  Let us understand how to have Spring active profile in application.properties.
By default, application.properties will be used to run the Spring Boot application.
If you want to use profile based properties, we can keep separate properties file
for each profile as shown below -

application.properties
server.port = 8080
spring.application.name = demoservice

application-dev.properties
server.port = 9090
spring.application.name = demoservice
