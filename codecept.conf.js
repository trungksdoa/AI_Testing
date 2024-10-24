const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
require("./helper/heal");

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",

  helpers: {
    Playwright: {
      url: "https://swp-project-topic-7.vercel.app/",
      show: true,
      browser: "chromium",
      waitForNavigation: "networkidle0",
      waitForTimeout: 60000,
      waitForAction: 500,
    },
    ai: {
      request: async (messages) => {
        const Groq = require("groq-sdk");
        const groq = new Groq({
          apiKey: "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",
        });
        const chatCompletion = await groq.chat.completions.create({
          messages,
          model: "mixtral-8x7b-32768",
        });
        return chatCompletion.choices[0]?.message?.content || "";
      },
    },
  },
  include: {
    I: "./steps_file.js",
  },
  name: "AI",
  plugins: {
    heal: {
      enabled: true,
      debug: true,
      retries: 3,
      delay: 500,
      output_dir: "./healing",
      output: "./output/healings.json",
    },
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
      outputDir: "./allure-results",
    },
  },
};
