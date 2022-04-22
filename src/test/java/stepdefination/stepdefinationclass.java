package stepdefination;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepdefinationclass {
	
	@Given("User navigates to the login page")
	public void user_navigates_to_the_login_page() {
		
	    System.out.println("user is navigated to the login page");
	}

	@Given("enter valid credentials")
	public void enter_valid_credentials() {
		
		System.out.println("user is logged in with valid credentials");
	   
	}
	
	@Given("User clicks on My Profile")
	public void user_clicks_on_My_Profile() {
		
		System.out.println("user clicked on the my profile");
	    
	}

	@Given("click on Edit button")
	public void click_on_Edit_button() {
	    System.out.println("user clicks on edit button");
	}

	@Given("User navigates to the signup page")
	public void user_navigates_to_the_signup_page() {
	    System.out.println("user is navigated to the signup page");
	}

	@Given("enter valid values")
	public void enter_valid_values() {
	    System.out.println("user entered the valid values");
	}
	
	@When("User enter valid value")
	public void user_enter_valid_value() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@When("Click on Save button")
	public void click_on_Save_button() {
	    
	}

	@Then("Value should be save")
	public void value_should_be_save() {
	   
	}

	@Given("User navigated to the Login page")
	public void user_navigated_to_the_Login_page() {
	    System.out.println("user is navigated to the login page");
	}

	@Given("Enter Username {string} and password {string}")
	public void enter_Username_and_password(String username, String password) {
		
		System.out.println("my user name is "+username+" and my password is "+password);
	    
	}



}
