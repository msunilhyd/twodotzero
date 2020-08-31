Beans and Dependency Injection

In Spring Boot, we can use Spring Framework to define our beans and their
dependency injection. The @ComponentScan annotation is used to find beans and
the corresponing injected with @Autowired annotation.

If you followed the Spring Boot typical layout, no need to specify any arguments
for @ComponentScan annotation. All component class files are automatically
registered with Spring Beans.

The following example provides an idea about Auto wiring the Rest template object
and creating a Bean for the same -
@Bean
public RestTemplate getRestTemplate() {
  return new RestTemplate();
}

The following code shows the code for auto wired Rest Template object and bean
creation object in main Spring Boot Application class file -

package com.tutorialspoint.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication

public class DemoApplication {
@Autowired
    RestTemplate restTemplate;

    public static void main(String[] args) {
      SpringApplication.run(DemoApplication.class, args);
    }
    @Bean
    public RestTemplate getRestTemplate() {
      return new RestTemplate();
    }
}
