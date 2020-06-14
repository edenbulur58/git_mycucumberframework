package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.DataTablesPage;
import utilities.Driver;

public class ScenerioOutline_StepDefinition {
    DataTablesPage dtPage=new DataTablesPage();

    @Given("User is on the datatables homepage")
    public void user_is_on_the_datatables_homepage() {
        Driver.getDriver().get("https://editor.datatables.net/");

    }

    @When("user clicks on new button")
    public void user_clicks_on_new_button() throws InterruptedException {
        Thread.sleep(3000);
        dtPage.newButton.click();

    }

    @When("User enters firstname")
    public void user_enters_firstname() {
        dtPage.firstname.sendKeys("TestFirst");
    }

    @When("User enters lastname")
    public void user_enters_lastname() {
        dtPage.lastname.sendKeys("TestLast");
    }

    @When("User enters position")
    public void user_enters_position() {
        dtPage.position.sendKeys("QA");
    }

    @When("User enters office")
    public void user_enters_office() {
        dtPage.office.sendKeys("New York");
    }

    @When("User enters extension")
    public void user_enters_extension() {
        dtPage.extention.sendKeys("225");


    }

    @When("User enters startdate")
    public void user_enters_startdate() {
        dtPage.startDate.sendKeys("2020-05-06");


    }

    @When("User enters salary")
    public void user_enters_salary() {
        dtPage.salary.sendKeys("90000");

    }

    @Then("cliks create button")
    public void cliks_create_button() {
        dtPage.create.click();


    }
    @Then("user enters firstname to the searchbox")
    public void user_enters_firstname_to_the_searchbox() {
        dtPage.searchbox.sendKeys("Test First");
    }

    @Then("verify that user see the first name in the searchbox")
    public void verify_that_user_see_the_first_name_in_the_searchbox() {
        String name=dtPage.nameField.getText(); //Test First Test Last
        Assert.assertTrue(name.contains("TestFirst"));
    }

    @When("User enters firstname {string}")
    public void user_enters_firstname(String firstname) {

        dtPage.firstname.sendKeys(firstname);

    }

    @When("User enters lastname {string}")
    public void user_enters_lastname(String lastname) {
        dtPage.lastname.sendKeys(lastname);


    }

    @When("User enters position {string}")
    public void user_enters_position(String position) {
        dtPage.position.sendKeys(position);



    }

    @When("User enters office {string}")
    public void user_enters_office(String office) {
        dtPage.office.sendKeys(office);


    }

    @When("User enters extension {string}")
    public void user_enters_extension(String extension) {
        dtPage.extention.sendKeys(extension);



    }

    @When("User enters startdate {string}")
    public void user_enters_startdate(String startdate) throws InterruptedException {
        Thread.sleep(3000);
        dtPage.startDate.sendKeys(startdate);


    }

    @When("User enters salary {string}")
    public void user_enters_salary(String salary) throws InterruptedException {
        Thread.sleep(3000);
        dtPage.salary.sendKeys(salary);


    }

    @Then("user enters firstname {string} to the searchbox")
    public void user_enters_firstname_to_the_searchbox(String firstname) {
        dtPage.searchbox.sendKeys(firstname);

    }

    @Then("verify that user see the first name {string} in the searchbox")
    public void verify_that_user_see_the_first_name_in_the_searchbox(String firstname) throws InterruptedException {

        String name=dtPage.nameField.getText();
        Thread.sleep(1000);
        Assert.assertTrue(name.contains(firstname));


    }











}