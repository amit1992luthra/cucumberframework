package stepdefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.hooksclass;

public class stepdefinationclass {
	
	
	WebDriver driver = hooksclass.driver;
	


	@Given("User navigated to the Login page")
	public void user_navigated_to_the_Login_page() {
		
		
		driver.get("https://www.facebook.com/");
		driver.manage().window().maximize();
		
	    System.out.println("user is navigated to the login page");
	    System.out.println("user is navigated to the login page");
	}

	@Given("Enter Username {string} and password {string}")
	public void enter_Username_and_password(String un, String pw) throws InterruptedException {
		
		driver.findElement(By.id("email")).sendKeys(un);;
		
		driver.findElement(By.id("pass")).sendKeys(pw);
		
		driver.findElement(By.name("login")).click();
		Thread.sleep(5000);
		
		
		//System.out.println("my user name is "+username+" and my password is "+password);
	    
	}
	
	@Then("Error message displayed")
	public void error_message_displayed() {
	   System.out.println("error message");
	}



}
