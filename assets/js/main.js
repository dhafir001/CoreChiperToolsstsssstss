const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const yearTarget = document.querySelector("#year");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const TOOL_INDEX = [
  ["Merge PDF", "tools/pdf/merge-pdf.html", "PDF"],
  ["Split PDF", "tools/pdf/split-pdf.html", "PDF"],
  ["Edit PDF", "tools/pdf/edit-pdf.html", "PDF"],
  ["Convert PDF", "tools/pdf/convert-pdf.html", "PDF"],
  ["Compress PDF", "tools/pdf/compress-pdf.html", "PDF"],
  ["PDF to Image", "tools/pdf/pdf-to-image.html", "PDF"],
  ["Digital Signature PDF", "tools/pdf/digital-signature-pdf.html", "PDF"],
  ["Watermark PDF", "tools/pdf/watermark-pdf.html", "PDF"],
  ["Rotate PDF", "tools/pdf/rotate-pdf.html", "PDF"],
  ["PDF Redactor", "tools/pdf/pdf-redactor.html", "PDF"],
  ["Smart PDF Editor", "tools/pdf/smart-pdf-editor.html", "PDF"],
  ["Lock PDF", "tools/pdf/lock-pdf.html", "PDF"],
  ["Compress Image", "tools/image/compress-image.html", "Image"],
  ["Convert Image", "tools/image/convert-image.html", "Image"],
  ["Resize Image", "tools/image/resize-image.html", "Image"],
  ["Crop Image", "tools/image/crop-image.html", "Image"],
  ["Remove Background", "tools/image/remove-background.html", "Image"],
  ["Image to Text (OCR)", "tools/image/image-to-text-ocr.html", "Image"],
  ["Watermark Image", "tools/image/watermark-image.html", "Image"],
  ["Enhance Image", "tools/image/enhance-image.html", "Image"],
  ["Blur / Pixelate Image", "tools/image/blur-pixelate-image.html", "Image"],
  ["Convert to WebP", "tools/image/convert-to-webp.html", "Image"],
  ["Word Counter", "tools/text/word-counter.html", "Text"],
  ["Remove Spaces", "tools/text/remove-spaces.html", "Text"],
  ["Remove Duplicate Lines", "tools/text/remove-duplicate-lines.html", "Text"],
  ["Case Converter", "tools/text/case-converter.html", "Text"],
  ["Text Sorter", "tools/text/text-sorter.html", "Text"],
  ["Text Compare", "tools/text/text-compare.html", "Text"],
  ["JSON Formatter", "tools/text/json-formatter.html", "Text"],
  ["JPG to PNG", "tools/converter/jpg-to-png.html", "Converter"],
  ["PNG to JPG", "tools/converter/png-to-jpg.html", "Converter"],
  ["PDF to JPG", "tools/converter/pdf-to-jpg.html", "Converter"],
  ["PDF to PNG", "tools/converter/pdf-to-png.html", "Converter"],
  ["JPG to PDF", "tools/converter/jpg-to-pdf.html", "Converter"],
  ["PNG to PDF", "tools/converter/png-to-pdf.html", "Converter"],
  ["PDF to Word", "tools/converter/pdf-to-word.html", "Converter"],
  ["Word to PDF", "tools/converter/word-to-pdf.html", "Converter"],
  ["PDF to Excel", "tools/converter/pdf-to-excel.html", "Converter"],
  ["Excel to PDF", "tools/converter/excel-to-pdf.html", "Converter"],
  ["PDF to PPT", "tools/converter/pdf-to-ppt.html", "Converter"],
  ["PPT to PDF", "tools/converter/ppt-to-pdf.html", "Converter"],
  ["JPG to WebP", "tools/converter/jpg-to-webp.html", "Converter"],
  ["PNG to WebP", "tools/converter/png-to-webp.html", "Converter"],
  ["WebP to JPG", "tools/converter/webp-to-jpg.html", "Converter"],
  ["WebP to PNG", "tools/converter/webp-to-png.html", "Converter"],
  ["PDF to Text", "tools/converter/pdf-to-text.html", "Converter"],
  ["PDF to HTML", "tools/converter/pdf-to-html.html", "Converter"],
  ["Image to PDF", "tools/converter/image-to-pdf.html", "Converter"],
  ["Image to Text (OCR)", "tools/converter/image-to-text-ocr.html", "Converter"],
  ["Word to TXT", "tools/converter/word-to-txt.html", "Converter"],
  ["TXT to Word", "tools/converter/txt-to-word.html", "Converter"],
  ["HTML to PDF", "tools/converter/html-to-pdf.html", "Converter"],
  ["HTML to Text", "tools/converter/html-to-text.html", "Converter"],
  ["Markdown to HTML", "tools/converter/markdown-to-html.html", "Converter"],
  ["Markdown to PDF", "tools/converter/markdown-to-pdf.html", "Converter"],
  ["Text to PDF", "tools/converter/text-to-pdf.html", "Converter"],
  ["CSV to JSON", "tools/converter/csv-to-json.html", "Converter"],
  ["JSON to CSV", "tools/converter/json-to-csv.html", "Converter"],
  ["BMI Calculator", "tools/calculator/bmi.html", "Calculator"],
  ["Discount Calculator", "tools/calculator/discount.html", "Calculator"],
  ["Percentage Calculator", "tools/calculator/percentage.html", "Calculator"],
  ["Loan / Cicilan Calculator", "tools/calculator/loan-cicilan.html", "Calculator"],
  ["Currency Converter", "tools/calculator/currency-converter.html", "Calculator"],
  ["Unit Converter (All-in-One)", "tools/calculator/unit-converter.html", "Calculator"],
  ["Tax Calculator (PPN / VAT)", "tools/calculator/tax-calculator.html", "Calculator"],
  ["Profit / Margin Calculator", "tools/calculator/profit-margin.html", "Calculator"],
  ["Tip Calculator", "tools/calculator/tip-calculator.html", "Calculator"],
  ["Simple Interest Calculator", "tools/calculator/simple-interest.html", "Calculator"],
  ["Compound Interest Calculator", "tools/calculator/compound-interest.html", "Calculator"],
  ["Age Calculator", "tools/calculator/age-calculator.html", "Calculator"],
  ["Savings Goal Calculator", "tools/calculator/savings-goal.html", "Calculator"],
  ["QR Generator", "tools/utility/qr-generator.html", "Utility"],
  ["QR Code Scanner", "tools/utility/qr-scanner.html", "Utility"],
  ["Password Generator", "tools/utility/password-generator.html", "Utility"],
  ["Color Picker", "tools/utility/color-picker.html", "Utility"],
  ["Favicon Generator", "tools/utility/favicon-generator.html", "Utility"],
  ["URL Encoder / Decoder", "tools/utility/url-encoder-decoder.html", "Utility"],
  ["Base64 Encoder / Decoder", "tools/utility/base64-encoder-decoder.html", "Utility"],
  ["UUID Generator", "tools/utility/uuid-generator.html", "Utility"],
  ["Slug Generator", "tools/utility/slug-generator.html", "Utility"],
].map(([title, href, category]) => ({ title, href, category }));

const globalSearchInput = document.querySelector("#global-search-input");
const globalSearchResults = document.querySelector("#global-search-results");

if (globalSearchInput && globalSearchResults) {
  const renderResults = (query) => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) {
      globalSearchResults.innerHTML = '<p class="small-note">Ketik nama tool untuk melihat hasil pencarian cepat.</p>';
      return;
    }
    const results = TOOL_INDEX.filter((item) => `${item.title} ${item.category}`.toLowerCase().includes(keyword)).slice(0, 12);
    globalSearchResults.innerHTML = results.length
      ? results.map((item) => `<a class="search-result-item" href="${item.href}"><strong>${item.title}</strong><span>${item.category}</span></a>`).join("")
      : '<p class="small-note">Tidak ada tool yang cocok dengan kata kunci tersebut.</p>';
  };
  globalSearchInput.addEventListener("input", (event) => renderResults(event.target.value));
}

document.querySelectorAll('input[data-filter-target]').forEach((input) => {
  input.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    const targetSelector = event.target.dataset.filterTarget;
    document.querySelectorAll(targetSelector).forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.style.display = !query || text.includes(query) ? "" : "none";
    });
  });
});
