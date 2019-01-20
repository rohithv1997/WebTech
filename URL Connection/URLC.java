import java.io.*;
import java.net.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
 
public class URLC
{
    public static void main(String[] args) 
    {
        try
        {
            URL url = new URL("http://evarsity.srmuniv.ac.in/");
            URLConnection urlcon = url.openConnection();
            System.out.println(urlcon.getContentType());
            System.out.println(urlcon.getURL());
            System.out.println(new Date(urlcon.getLastModified()));
            System.out.println(urlcon.getContentEncoding());
            System.out.println(urlcon.getContentLength());
            System.out.println(urlcon.getDate());
            System.out.println("Complete source code of the URL is-");
            System.out.println("---------------------------------");
             
            //get the inputstream of the open connection.
            BufferedReader br = new BufferedReader(new InputStreamReader
                                                (urlcon.getInputStream()));
            String i;
             
            //print the source code line by line.
            while ((i = br.readLine()) != null) 
            {
                System.out.println(i);
            }
        } 
         
        catch(Exception e) 
        {
            System.out.println("Not Found");
        }
    }
}