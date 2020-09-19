package com.example.bootstrapMaven;

import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;
import com.jcraft.jsch.SftpException;

public class BaeldungExample {

	
	private static String remoteHost = "172.17.0.3";
	private static String username = "root";
	private static String password = "Passw0rd";
	
	public static void main(String[] args) throws JSchException, SftpException {
		whenUploadFileUsingJsch_thenSuccess();
	}
	
	private static ChannelSftp setupJsch() throws JSchException {
		JSch jsch = new JSch();
		jsch.setKnownHosts("/home/sunil/.ssh/known_hosts");
		Session jschSession = jsch.getSession(username, remoteHost);
		// Generate the key with command :- ssh-keygen -m PEM -t rsa -b 2048
		String privateKeyPath = "/home/sunil/id_rsa_one";
		jsch.addIdentity(privateKeyPath);
//		jschSession.setPassword(password);
		jschSession.connect();
		return (ChannelSftp) jschSession.openChannel("sftp");
	}
	
	public static void whenUploadFileUsingJsch_thenSuccess() throws JSchException, SftpException {
		ChannelSftp channelSftp = setupJsch();
		channelSftp.connect();
		
		String localFile = "src/main/resources/sample.txt";
		String remoteDir = "remoteDir/";
		
		channelSftp.put(localFile, remoteDir);
		channelSftp.exit();
	}
}
