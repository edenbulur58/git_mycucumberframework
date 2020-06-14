package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class DataTablesPage {
   public  DataTablesPage(){
       PageFactory.initElements(Driver.getDriver(),this);

   }
   @FindBy(xpath = "//button[@class='dt-button buttons-create']")
   public WebElement newButton;


    @FindBy(xpath = "//input[@id='DTE_Field_first_name']")
    public WebElement firstname;

    @FindBy(xpath = "//input[@id='DTE_Field_last_name']")
    public WebElement lastname;

    @FindBy(xpath="//input[@id='DTE_Field_position']")
    public WebElement position;

    @FindBy( id=("DTE_Field_office"))
    public WebElement office;

    @FindBy(id=("DTE_Field_extn"))
    public WebElement extention;

    @FindBy(id=("DTE_Field_start_date"))
    public WebElement startDate;

    @FindBy(id=("DTE_Field_salary"))
    public WebElement salary;

    @FindBy(css="button[class='btn']")
    public WebElement create;

    @FindBy(css="input[type='search']")
    public WebElement searchbox;

    @FindBy(xpath = "//td[@class='sorting_1']")
    public WebElement nameField;
}
