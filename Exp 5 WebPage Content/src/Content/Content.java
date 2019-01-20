package Content;
import java.net.*;
import java.io.*;

public class Content {
    public static void main(String args[])throws Exception{
      
    URL url;
    InputStream is = null;
    BufferedReader br;
    String line;

    try {
        url = new URL("http://evarsity.srmuniv.ac.in");
        is = url.openStream(); 
        br = new BufferedReader(new InputStreamReader(is));

        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }
    } catch (Exception mue) {
         System.out.println(mue);
    } 
    } 
    
}
