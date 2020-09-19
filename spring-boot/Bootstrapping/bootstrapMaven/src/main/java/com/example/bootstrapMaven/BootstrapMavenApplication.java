package com.example.bootstrapMaven;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelExec;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;

@SpringBootApplication
@RestController
public class BootstrapMavenApplication {

	public static void main(String[] args) {
		SpringApplication.run(BootstrapMavenApplication.class, args);
		connectSSH();
	}
	
	@RequestMapping(value = "/")
	public String hello() {
		return "Hello world";
	}

	public static void connectSSH() {
		JSch jsch = new JSch();
		Session session = null;
		String privateKeyPath = "/home/sunil/id_rsa_two";
		try {
			jsch.addIdentity(privateKeyPath);
			session = jsch.getSession("root", "172.17.0.3", 22);
			session.setConfig("PreferredAuthentications", "publickey,keyboard-interactive,password");
			java.util.Properties config = new java.util.Properties();
			config.put("StrictKeyHostChecking", "no");
			session.setConfig(config);
		} catch (JSchException e) {
			throw new RuntimeException("Failed to create Jsch `Session object.", e);
		}
		
		String command = "echo \"Sit down, relax, mix yourself a drink and "
				+ "enjoy the show...\" >> /tmp/test/out";
		try {
			session.connect();
			Channel channel = session.openChannel("exec");
			((ChannelExec) channel).setCommand(command);
			((ChannelExec) channel).setPty(false);
			channel.connect();
			channel.disconnect();
			session.disconnect();
		} catch (JSchException e) {
			throw new RuntimeException("Error during SSH command execution. Command: " + command);
		}
	}
}
