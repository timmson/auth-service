import {expect, test} from "@playwright/test"

test("Should insert valid card number", async ({page}) => {
	await page.goto(".")

	await page.getByLabel("Card number").pressSequentially("2200770212727079", {delay: 100})

	await expect(page.getByText("is valid")).toBeVisible()

	await page.waitForTimeout(500)
})
