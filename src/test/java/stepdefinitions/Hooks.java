package stepdefinitions;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.Driver;
import java.util.concurrent.TimeUnit;
public class Hooks {
    //@Before is similar to @BeforeMethod in TestNG
    //In our case, @Before will run before each Scenario:
    //GLOBAL Hooks Annotation
    //This will run before every scenario
    @Before(order = 1)
    public void setUp(){
        System.out.println("This is SetUp Method in the Hooks");
        Driver.getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }
    //Tagged Hooks Annotation
    //This will run before any SPECIFIC SCENARIO
    @Before(value = "@iphone",order = 2)
    public void searchIphone(){
        System.out.println("This is IPHONE SETUP Method in the Hooks");
    }
    //This will run After each Scenario
    @After
    public void tearDown(Scenario scenario) {
        System.out.println("This is TearDown Method in the Hooks");
       //Taking the screenshot
        final byte[] screenshot = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
        //We are embedding the screenshot as an image in our framework
        //We should get screenshot after every FAİLİNG scenerio
       //Attaching the image if scenerio fails
        if (scenario.isFailed()) {
            scenario.embed(screenshot, "image/png");

        }
        Driver.closeDriver();
    }
}
