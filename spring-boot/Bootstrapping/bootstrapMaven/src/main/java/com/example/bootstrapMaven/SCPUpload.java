package com.example.bootstrapMaven;
import net.schmizz.sshj.SSHClient;
import net.schmizz.sshj.common.DisconnectReason;
import net.schmizz.sshj.transport.TransportException;
import net.schmizz.sshj.transport.verification.PromiscuousVerifier;
import net.schmizz.sshj.xfer.FileSystemFile;

import java.io.File;
import java.io.IOException;
public class SCPUpload {

    public static void main(String[] args)
            throws IOException, ClassNotFoundException {
        SSHClient ssh = new SSHClient();
//        ssh.loadKnownHosts();
        ssh.loadKnownHosts(new File("/home/sunil/known_hosts"));

		   ssh.addHostKeyVerifier("ca:0b:b3:7f:53:5a:e3:bc:bf:44:63:d8:2d:26:c0:41");

        ssh.connect("172.17.0.3");
//
        ssh.addHostKeyVerifier(new PromiscuousVerifier());
        
		   System.out.println("Hello sunil");

        try {
            ssh.authPublickey("/home/sunil/id_rsa_two.pub");
            System.out.println("Came here");
            // Present here to demo algorithm renegotiation - could have just put this before connect()
            // Make sure JZlib is in classpath for this to work
            ssh.useCompression();

            final String src = System.getProperty("user.home") + File.separator + "test_file";
            ssh.newSCPFileTransfer().upload(new FileSystemFile(src), "/tmp/");
        } 
     catch (TransportException e) {

    	   if (e.getDisconnectReason() == DisconnectReason.HOST_KEY_NOT_VERIFIABLE) {
    	        String msg = e.getMessage();
    	        String[] split = msg.split("`");
    	        String vc = split[3]; 
    	        System.out.println("vc is  === "+ vc);
    	        ssh = new SSHClient();
    	        ssh.addHostKeyVerifier(vc);
    	        ssh.connect("172.17.0.3");
    	    } else {
    	        throw e;
    	    }
    }finally {
            ssh.disconnect();
        }
    }
}
