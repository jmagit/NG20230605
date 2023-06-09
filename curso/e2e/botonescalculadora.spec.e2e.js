// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Botones calculadora', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Botones calculadora', async function() {
    await driver.get("http://localhost:4200/")
    await driver.manage().window().setRect({ width: 1547, height: 814 })
    await driver.findElement(By.linkText("calculadora")).click()
    await driver.findElement(By.css(".btnDigito:nth-child(8)")).click()
    await driver.findElement(By.css(".btnDigito:nth-child(7)")).click()
    await driver.findElement(By.css(".btnDigito:nth-child(6)")).click()
    await driver.findElement(By.css(".btnDigito:nth-child(12)")).click()
    await driver.findElement(By.css(".btnDigito:nth-child(11)")).click()
    await driver.findElement(By.css(".btnDigito:nth-child(10)")).click()
    await driver.findElement(By.css(".btnDigito:nth-child(16)")).click()
    await driver.findElement(By.css(".btnDigito:nth-child(15)")).click()
    await driver.findElement(By.css(".btnDigito:nth-child(14)")).click()
    await driver.findElement(By.css(".btnDigito:nth-child(19)")).click()
    await driver.findElement(By.css(".btnDigito:nth-child(18)")).click()
    await driver.findElement(By.css(".btnDigito:nth-child(20)")).click()
    await driver.findElement(By.css(".btnDigito:nth-child(15)")).click()
    assert(await driver.findElement(By.css(".Pantalla")).getText() == "-9876543210.2")
    await driver.findElement(By.css(".btnOperar:nth-child(4)")).click()
    await driver.findElement(By.css(".btnOperar:nth-child(4)")).click()
    await driver.findElement(By.css(".btnOperar:nth-child(4)")).click()
    assert(await driver.findElement(By.css(".Pantalla")).getText() == "-987654321")
    await driver.findElement(By.css(".btnOperar:nth-child(5)")).click()
    assert(await driver.findElement(By.css(".Resumen")).getText() == "-987654321 +")
    await driver.findElement(By.css(".btnDigito:nth-child(15)")).click()
    await driver.findElement(By.css(".btnOperar:nth-child(13)")).click()
    assert(await driver.findElement(By.css(".Resumen")).getText() == "-987654319 *")
    await driver.findElement(By.css(".btnDigito:nth-child(19)")).click()
    await driver.findElement(By.css(".btnOperar:nth-child(9)")).click()
    assert(await driver.findElement(By.css(".Resumen")).getText() == "0 -")
    await driver.findElement(By.css(".btnDigito:nth-child(12)")).click()
    await driver.findElement(By.css(".btnOperar:nth-child(17)")).click()
    assert(await driver.findElement(By.css(".Resumen")).getText() == "-6 /")
    await driver.findElement(By.css(".btnDigito:nth-child(19)")).click()
    await driver.findElement(By.css(".btnOperar:nth-child(21)")).click()
    assert(await driver.findElement(By.css(".Pantalla")).getText() == "-Infinity")
    await driver.findElement(By.css(".col-1x2")).click()
    assert(await driver.findElement(By.css(".Pantalla")).getText() == "0")
  })
})
