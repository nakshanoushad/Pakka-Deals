function showSection(id) {
    document.querySelectorAll(".page").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}

function analyzeProduct() {
    const product = document.getElementById("product").value.toLowerCase();
    const urgency = document.getElementById("urgency").value;
    const result = document.getElementById("result");

    let decision = "COMPARE";
    let platform = "Amazon";
    let timeWindow = "No specific sale window";
    let bestSaleDates = "";
    let confidence = "Medium";

    // REAL SALE WINDOWS
    const saleCalendar = {
        amazonGIF: { name: "Great Indian Festival", range: "Sep 20 – Oct 5" },
        flipkartBBD: { name: "Big Billion Days", range: "Sep 22 – Oct 4" },
        primeDay: { name: "Amazon Prime Day", range: "Jul 12 – Jul 15" },
        myntraEndOfSeason: { name: "Myntra End-of-Season Sale", range: "Jun & Dec" },
        nykaaPinkFriday: { name: "Nykaa Pink Friday Sale", range: "Nov 10 – Nov 20" },
        repDay: { name: "Republic Day Sale", range: "Jan 18 – Jan 26" }
    };

    // ELECTRONICS & SMARTPHONES
    if (
        product.includes("iphone") ||
        product.includes("samsung") ||
        product.includes("mobile") ||
        product.includes("laptop") ||
        product.includes("macbook") ||
        product.includes("electronics")
    ) {
        decision = urgency === "Need soon" ? "COMPARE" : "WAIT";
        platform = "Amazon / Flipkart";
        confidence = "High";

        const gif = saleCalendar.amazonGIF;
        const bbd = saleCalendar.flipkartBBD;
        const prime = saleCalendar.primeDay;

        timeWindow = `${gif.name} or ${bbd.name}`;
        bestSaleDates = `
      <p><b>Amazon:</b> ${gif.range}</p>
      <p><b>Flipkart:</b> ${bbd.range}</p>
      <p><b>Prime Day (bonus sale):</b> ${prime.range}</p>
    `;
    }

    // FASHION & CLOTHING
    if (
        product.includes("nike") ||
        product.includes("adidas") ||
        product.includes("clothes") ||
        product.includes("jeans") ||
        product.includes("tshirt") ||
        product.includes("shoes")
    ) {
        decision = urgency === "Need soon" ? "BUY" : "WAIT";
        platform = "Myntra";
        confidence = "High";

        const eos = saleCalendar.myntraEndOfSeason;
        timeWindow = eos.name;
        bestSaleDates = `<p>${eos.range}</p>`;
    }

    // BEAUTY & PERSONAL CARE
    if (
        product.includes("makeup") ||
        product.includes("beauty") ||
        product.includes("skincare")
    ) {
        decision = urgency === "Need soon" ? "COMPARE" : "WAIT";
        platform = "Nykaa / Purplle";
        confidence = "Medium";

        const pink = saleCalendar.nykaaPinkFriday;
        timeWindow = pink.name;
        bestSaleDates = `<p>${pink.range}</p>`;
    }

    // APPLIANCES
    if (
        product.includes("tv") ||
        product.includes("washing machine") ||
        product.includes("ac")
    ) {
        decision = urgency === "Need soon" ? "COMPARE" : "WAIT";
        platform = "Amazon / Flipkart";
        confidence = "High";

        const rep = saleCalendar.repDay;
        const gif = saleCalendar.amazonGIF;
        timeWindow = `${gif.name} or ${rep.name}`;
        bestSaleDates = `
      <p><b>GIF:</b> ${gif.range}</p>
      <p><b>Republic Day:</b> ${rep.range}</p>
    `;
    }

    if (product.trim() === "") {
        result.innerHTML = `<p>Please enter a product or brand name.</p>`;
        return;
    }

    result.innerHTML = `
    <h3>${decision}</h3>
    <p><b>Best Platform:</b> ${platform}</p>
    <p><b>Recommended Sale Period:</b> ${timeWindow}</p>
    <p><b>Confidence:</b> ${confidence}</p>
    ${bestSaleDates}
    <p style="opacity:0.7;margin-top:8px;">
      Based on historical sale calendars — no scraping or live pricing.
    </p>
  `;
}
