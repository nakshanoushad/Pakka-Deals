function analyze() {
    const product = document.getElementById("productInput").value.toLowerCase();
    const urgency = document.getElementById("urgency").value;

    let decision = "WAIT";
    let platform = "Amazon";
    let sale = "Great Indian Festival";
    let month = "October";
    let confidence = "Medium";

    // Fashion brands
    if (
        product.includes("nike") ||
        product.includes("adidas") ||
        product.includes("puma") ||
        product.includes("zara") ||
        product.includes("hm")
    ) {
        platform = "Myntra";
        sale = "End-of-Season Sale";
        month = "June, December";
        confidence = "High";
    }

    // Electronics
    if (
        product.includes("phone") ||
        product.includes("laptop") ||
        product.includes("tv") ||
        product.includes("earbuds")
    ) {
        platform = "Amazon / Flipkart";
        sale = "Great Indian Festival / Big Billion Days";
        month = "September, October";
        confidence = "High";
    }

    // Urgency logic
    if (urgency === "soon") {
        decision = "BUY";
    }

    // Update UI
    document.getElementById("decision").innerText = decision;
    document.getElementById("platform").innerText = platform;
    document.getElementById("salePeriod").innerText = sale;
    document.getElementById("bestMonth").innerText = month;
    document.getElementById("confidence").innerText = confidence;

    document.getElementById("result").classList.remove("hidden");
}
