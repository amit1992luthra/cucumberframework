package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/test/java/features",
glue = {"stepdefination"},
monochrome = true,
dryRun = false,
plugin = {"pretty","html:reports/htmlreport","json:reports/jsonreport.json","junit:reports/xmlreport.xml"})

public class TestRunner {

}
