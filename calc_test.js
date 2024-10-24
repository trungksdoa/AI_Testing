const { pause } = require("codeceptjs");

Feature("KoiControl AI-Guided Website Testing");

Scenario("Test with correct credentials", async ({ I }) => {
  await I.amOnPage("https://swp-project-topic-7.vercel.app/");

  // Wait for the user icon to be visible
  I.waitForElement(".items-center.flex-shrink-0.hidden.lg\\:flex", 10);

  // Click on the user icon to open the login dropdown
  I.click(
    ".items-center.flex-shrink-0.hidden.lg\\:flex .flex.flex-row.items-center.gap-1"
  );

  // Wait for the login-dialog button to be visible and click it
  I.waitForElement("#login-dialog", 10);
  I.click("#login-dialog");

  // Wait for the modal to open (assuming it has a class 'ant-modal-content')
  I.waitForElement(".ant-modal-content", 10);

  // Wait for the login form to become visible within the modal

  I.fillField("input[name=email]", "trungvo020@gmail.com");
  I.fillField("input[name=password]", "xNVyJDoDr0bL");
  I.waitForElement("button[type=submit]", 1);
  I.say("Attempting to click the login button");
  I.click("#login-button");
  // If healing doesn't work, it will fall back to this correct locator
  // I.click("button[type=submit]");

  pause();

  console.log("AI-guided comprehensive website test completed");
  pause();
});

// Scenario("Test with invalid credentials", async ({ I }) => {
//   await I.amOnPage("https://swp-project-topic-7.vercel.app/");

//   // Wait for the user icon to be visible
//   I.waitForElement(".items-center.flex-shrink-0.hidden.lg\\:flex", 10);

//   // Click on the user icon to open the login dropdown
//   I.click(
//     ".items-center.flex-shrink-0.hidden.lg\\:flex .flex.flex-row.items-center.gap-1"
//   );

//   // Wait for the login-dialog button to be visible and click it
//   I.waitForElement("#login-dialog", 10);
//   I.click("#login-dialog");

//   // Wait for the modal to open (assuming it has a class 'ant-modal-content')
//   I.waitForElement(".ant-modal-content", 10);

//   // Wait for the login form to become visible within the modal

//   I.fillField("input[name=email]", "trungksdoa@gmail.com");
//   I.fillField("input[name=password]", "123#E8O");
//   I.waitForElement("button[type=submit]", 50);
//   I.click("button[type=submit]");

//   console.log("AI-guided comprehensive website test completed");
//   pause();
// });
