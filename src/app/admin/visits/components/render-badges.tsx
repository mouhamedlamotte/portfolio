export const renderBroswer = (browser: string) => {
    browser = browser.toLowerCase()
    if (browser.includes("chrome")) return "Chrome"
    if (browser.includes("firefox")) return "Firefox"
    if (browser.includes("edge")) return "Edge"
    if (browser.includes("safari")) return "Safari"
    return "Autre"
}