import { Builder, Browser, By, until } from 'selenium-webdriver';
import {load} from 'cheerio';
import sleep from './seleniumhelpers'

//Build initial driver
const driver = new Builder().forBrowser(Browser.EDGE).setEdgeOptions({headless:false}).build()

export async function authenticate() {

	//Set driver options
	await driver.manage().setTimeouts({ implicit: 60000 });
	await driver.manage().window().maximize();;

	await driver.get(process.env.NEXT_PUBLIC_SIGNIN_URL);
	
  	//Handle the launch of a new modal signIn window	
	const signInWindow = await driver.getWindowHandle();

	await driver.wait(until.elementLocated(By.xpath("//span[contains(.,'Sign in with Apple')]")), 3000).click();
	await driver.wait(async () => (await driver.getAllWindowHandles()).length === 2, 10000);
	
	const windows = await driver.getAllWindowHandles();
	windows.forEach(async (handle) => {
		if (handle !== signInWindow) {
			await driver.switchTo().window(handle);
		}
	});

	//Populate the email/username
	await driver.wait(until.elementLocated(By.id('account_name_text_field')), 10000).sendKeys(process.env.NEXT_PUBLIC_AUTH_USERNAME);
	await driver.wait(until.elementLocated(By.id('sign-in')), 10000).click();

	//Populate the password
	await driver.wait(until.elementLocated(By.id('password_text_field')), 10000).sendKeys(process.env.NEXT_PUBLIC_AUTH_PASSWORD);
	await driver.wait(until.elementLocated(By.id('sign-in')), 10000).click();

	//User interaction needed (submit the TOTP)
	await driver.wait(until.elementLocated(By.xpath('//button[text()="Trust"]')), 10000).click();
	await driver.wait(until.elementLocated(By.css('.button.button-primary')), 10000).click();

	//MUST return to the original signIn window
	//This has now been redirected to the Market page
	sleep(3000);
	await driver.switchTo().window(signInWindow);

}

export async function getNewLoans() {

	//Scroll the Market to generate all elements
	var currHeight = await driver.executeScript("return document.body.scrollHeight");

	while (true){
		await driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
		sleep(1500);

		var newHeight = await driver.executeScript("return document.body.scrollHeight");
		if(newHeight == currHeight){
			break;
		}
		currHeight = newHeight;
	}

	//Send HTML to Cheerio
	const data = await driver.getPageSource();
	const $ = load(data);
	const loans = $('.MuiGrid-item');

	const loansArray = loans.map(function (){

		const loanID = $(this).index();
		const loanTable = $(this).children()
		const col1Rows = loanTable.children().first().children()
		const col2Rows = loanTable.children().first().next().children()

		const requesterScores = col1Rows.first().children().first().next().children().first().children().first().children().first()
		const requesterNames = col1Rows.first().next()
		const requesterLoansRepaids = col1Rows.next().next()

		const loanAmounts = col2Rows.first().children().first().next()
		const loanLenderTips = col2Rows.first().next().children().first().next()
		const loanDueDates = col2Rows.first().next().next().children().first().next()
		const loanReasons = col2Rows.first().next().next().next().children().first().next()	
	
		return {
			loan_id: loanID,
			loan_amount: loanAmounts.text(), 
			loan_lender_tip: loanLenderTips.text(), 
			loan_reason: loanReasons.text(), 
			loan_due_date: loanDueDates.text(), 			
			requester_name: requesterNames.text(),						
			requester_score: requesterScores.text(),
			requester_loans_repaid: requesterLoansRepaids.text(),

		}
	}).toArray();	
	
	return loansArray;
}


export async function getCurrentLoans() {
	
	await driver.get(process.env.NEXT_PUBLIC_CURRENT_LOANS_URL);

	//Scroll the Current loans to generate all elements
	var currHeight = await driver.executeScript("return document.body.scrollHeight");

	while (true){
		await driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
		sleep(1500);

		var newHeight = await driver.executeScript("return document.body.scrollHeight");
		if(newHeight == currHeight){
			break;
		}
		currHeight = newHeight;
	}

	//Send HTML to Cheerio
	const data = await driver.getPageSource();
	const $ = load(data);
	const loans = $('.MuiGrid-item');

	const loansArray = loans.map(function (){

		const loanID = $(this).index();
		const loanTable = $(this).children().first().next()
		const col1Rows = loanTable.children().first().children().first().children()
		const col2Rows = loanTable.children().first().children().first().next().children()

		const requesterScores = col1Rows.first().children().first().next().children().first().children().first().children().first()
		const requesterNames = col1Rows.first().next()
		const requesterLoansRepaids = col1Rows.next().next()

		const loanAmounts = col2Rows.first().children().first().next()
		const loanLenderTips = col2Rows.first().next().children().first().next()
		const loanDueDates = col2Rows.first().next().next().children().first().next()
		const loanReasons = col2Rows.first().next().next().next().children().first().next()	
	
		return {
			loan_id: loanID,
			loan_amount: loanAmounts.text(), 
			loan_lender_tip: loanLenderTips.text(), 
			loan_reason: loanReasons.text(), 
			loan_due_date: loanDueDates.text(), 			
			requester_name: requesterNames.text(),						
			requester_score: requesterScores.text(),
			requester_loans_repaid: requesterLoansRepaids.text(),
			user_id: 'c8dbdb37-3447-4f1b-8c36-66b47f5eaf8b',

		}
	}).toArray();	
	
	return loansArray;
	
}

export async function getCompletedLoans() {
	
	await driver.get(process.env.NEXT_PUBLIC_COMPLETED_LOANS_URL);

	//Scroll the Current loans to generate all elements
	var currHeight = await driver.executeScript("return document.body.scrollHeight");

	while (true){
		await driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
		sleep(1500);

		var newHeight = await driver.executeScript("return document.body.scrollHeight");
		if(newHeight == currHeight){
			break;
		}
		currHeight = newHeight;
	}

	//Send HTML to Cheerio
	const data = await driver.getPageSource();
	const $ = load(data);
	const loans = $('.MuiGrid-item');

	const loansArray = loans.map(function (){

		const loanID = $(this).index();
		const loanTable = $(this).children().first().next()
		const col1Rows = loanTable.children().first().children().first().children()
		const col2Rows = loanTable.children().first().children().first().next().children()

		const requesterScores = col1Rows.first().children().first().next().children().first().children().first().children().first()
		const requesterNames = col1Rows.first().next()
		const requesterLoansRepaids = col1Rows.next().next()

		const loanAmounts = col2Rows.first().children().first().next()
		const loanLenderTips = col2Rows.first().next().children().first().next()
		const loanDueDates = col2Rows.first().next().next().children().first().next()
		const loanReasons = col2Rows.first().next().next().next().children().first().next()
	
		return {
			loan_id: loanID,
			loan_amount: loanAmounts.text(), 
			loan_lender_tip: loanLenderTips.text(), 
			loan_reason: loanReasons.text(), 
			loan_due_date: loanDueDates.text(), 			
			requester_name: requesterNames.text(),						
			requester_score: requesterScores.text(),
			requester_loans_repaid: requesterLoansRepaids.text(),
			user_id: 'c8dbdb37-3447-4f1b-8c36-66b47f5eaf8b',

		}
	}).toArray();	
	
	return loansArray;
	
}

export async function closeDriver() {
	
	await driver.quit();
}