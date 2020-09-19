package com.example.bootstrapMaven;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;
import com.jcraft.jsch.SftpException;

public class Test {
	public static void main(String[] args) {

		/*
		 * Below we have declared and defined the SFTP HOST, PORT, USER and Local
		 * private key from where you will make connection
		 */
		String SFTPHOST = "172.17.0.3";
		int SFTPPORT = 22;
		String SFTPUSER = "root";
		// this file can be id_rsa or id_dsa based on which algorithm is used to create
		// the key
//		String privateKey = "/home/kodehelp/.ssh/id_rsa";
		
		String privateKey = "/home/sunil/id_rsa_two";
		
		String SFTPWORKINGDIR = "/home";

		JSch jSch = new JSch();
		Session session = null;
		Channel channel = null;
		ChannelSftp channelSftp = null;
		try {
			jSch.addIdentity(privateKey);
			System.out.println("Private Key Added.");
			session = jSch.getSession(SFTPUSER, SFTPHOST, SFTPPORT);
			System.out.println("session created.");

			java.util.Properties config = new java.util.Properties();
			config.put("StrictHostKeyChecking", "no");
			session.setConfig(config);
			session.connect();
			channel = session.openChannel("sftp");
			channel.connect();
			System.out.println("shell channel connected....");
			channelSftp = (ChannelSftp) channel;
			channelSftp.cd(SFTPWORKINGDIR);
			System.out.println("Changed the directory...");
		} catch (JSchException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (SftpException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			if (channelSftp != null) {
				channelSftp.disconnect();
				channelSftp.exit();
			}
			if (channel != null)
				channel.disconnect();

			if (session != null)
				session.disconnect();
		}
	}
}
