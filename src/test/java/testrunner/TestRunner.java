package testrunner;
import org.testng.annotations.Test;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
//import cucumber.api.junit.Cucumber;

//@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/test/java/features",
glue = {"stepdefination","hooks"},
monochrome = true,
dryRun = true,
//tags = {"@Regression","@Smoke"},  //Tags using AND Condition
//tags = {"@Regression,@Smoke"}, //Tags using OR condition
tags = {"~@Regression"},  //Skips the Tag
plugin = {"pretty","html:reports/htmlreport","json:reports/jsonreport.json","junit:reports/xmlreport.xml"})

@Test
public class TestRunner extends AbstractTestNGCucumberTests{

}
