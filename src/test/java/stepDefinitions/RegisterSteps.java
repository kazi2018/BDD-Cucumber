package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.omg.PortableServer.THREAD_POLICY_ID;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class RegisterSteps {

    WebDriver driver;

   @Given("^user in the register page")

   public void  user_in_the_register_page(){

       System.setProperty("webdriver.chrome.driver", "C:\\Drivers\\googleDriver\\chromedriver.exe");
       driver = new ChromeDriver();
       driver.navigate().to("https://reg.ebay.com/reg/PartialReg?ru=https%3A%2F%2Fwww.ebay.com%2F");}

       @Then("^put first name$")
       public void put_first_name() throws Throwable {
           driver.findElement(By.id("firstname")).sendKeys("Moga");

       }

       @Then("^put last last name$")
       public void put_last_last_name() throws Throwable {
           driver.findElement(By.id("lastname")).sendKeys("Shosha");


       }

       @Then("^provide email address$")
       public void provide_email_address() throws Throwable {
           driver.findElement(By.id("email")).sendKeys("123@gmail.com");

       }

       @Then("^given password$")
       public void given_password() throws Throwable {
           driver.findElement(By.id("PASSWORD")).sendKeys("ABC123");

       }

       @Then("^click created account button$")
       public void click_created_account_button() throws Throwable {
       Thread.sleep(3000);
       driver.quit();
       }


   }


