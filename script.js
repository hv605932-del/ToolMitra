/* =====================================
   DARK MODE
===================================== */

const darkModeBtn =
    document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkModeBtn.textContent = "☀️";

    } else {

        darkModeBtn.textContent = "🌙";

    }

});


/* =====================================
   SEARCH TOOLS
===================================== */

const searchInput =
    document.getElementById("toolSearch");

searchInput.addEventListener("input", function () {

    const search =
        searchInput.value.toLowerCase();

    const cards =
        document.querySelectorAll(".tool-card");

    cards.forEach(function (card) {

        const name =
            card.dataset.name.toLowerCase();

        if (name.includes(search)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

});


/* =====================================
   OPEN TOOL
===================================== */

function openTool(tool) {

    const modal =
        document.getElementById("toolModal");

    const content =
        document.getElementById("toolContent");

    modal.style.display = "block";

    content.innerHTML = getToolHTML(tool);

    attachToolFunction(tool);
}


/* =====================================
   CLOSE TOOL
===================================== */

function closeTool() {

    document.getElementById("toolModal")
        .style.display = "none";

}


/* =====================================
   CLOSE WHEN CLICK OUTSIDE
===================================== */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("toolModal");

    if (event.target === modal) {

        closeTool();

    }

});


/* =====================================
   TOOL HTML
===================================== */

function getToolHTML(tool) {


    /* ===============================
       PROMPT GENERATOR
    =============================== */

    if (tool === "promptTool") {

        return `

        <div class="tool-page">

            <h2>🤖 AI Prompt Generator</h2>

            <p>
                Create a useful prompt for AI.
            </p>

            <input
                id="promptTopic"
                placeholder="Example: YouTube video about fitness"
            >

            <select id="promptType">

                <option>Blog</option>
                <option>YouTube Video</option>
                <option>Instagram</option>
                <option>Business</option>
                <option>Study</option>

            </select>

            <button id="generatePrompt">
                Generate Prompt
            </button>

            <div
                id="promptResult"
                class="result-box">
            </div>

        </div>

        `;

    }


    /* ===============================
       YOUTUBE TITLE
    =============================== */

    if (tool === "youtubeTool") {

        return `

        <div class="tool-page">

            <h2>▶️ YouTube Title Generator</h2>

            <p>
                Enter your video topic.
            </p>

            <input
                id="youtubeTopic"
                placeholder="Example: AI tools for students"
            >

            <button id="generateTitles">
                Generate Titles
            </button>

            <div
                id="youtubeResult"
                class="result-box">
            </div>

        </div>

        `;

    }


    /* ===============================
       INSTAGRAM
    =============================== */

    if (tool === "instagramTool") {

        return `

        <div class="tool-page">

            <h2>📱 Instagram Caption Generator</h2>

            <input
                id="instagramTopic"
                placeholder="Enter your post topic"
            >

            <button id="generateCaption">
                Generate Caption
            </button>

            <div
                id="instagramResult"
                class="result-box">
            </div>

        </div>

        `;

    }


    /* ===============================
       TEXT SUMMARIZER
    =============================== */

    if (tool === "summaryTool") {

        return `

        <div class="tool-page">

            <h2>✍️ Text Summarizer</h2>

            <textarea
                id="summaryText"
                placeholder="Paste your text here...">
            </textarea>

            <button id="summarize">
                Summarize
            </button>

            <div
                id="summaryResult"
                class="result-box">
            </div>

        </div>

        `;

    }


    /* ===============================
       PERCENTAGE
    =============================== */

    if (tool === "percentageTool") {

        return `

        <div class="tool-page">

            <h2>📊 Percentage Calculator</h2>

            <input
                type="number"
                id="percentNumber"
                placeholder="Enter number"
            >

            <input
                type="number"
                id="percentTotal"
                placeholder="Enter total"
            >

            <button id="calculatePercentage">
                Calculate
            </button>

            <div
                id="percentageResult"
                class="result-box">
            </div>

        </div>

        `;

    }


    /* ===============================
       GST
    =============================== */

    if (tool === "gstTool") {

        return `

        <div class="tool-page">

            <h2>💰 GST Calculator</h2>

            <input
                type="number"
                id="gstPrice"
                placeholder="Price"
            >

            <input
                type="number"
                id="gstRate"
                placeholder="GST %"
            >

            <button id="calculateGST">
                Calculate GST
            </button>

            <div
                id="gstResult"
                class="result-box">
            </div>

        </div>

        `;

    }


    /* ===============================
       AGE
    =============================== */

    if (tool === "ageTool") {

        return `

        <div class="tool-page">

            <h2>📅 Age Calculator</h2>

            <input
                type="date"
                id="birthDate"
            >

            <button id="calculateAge">
                Calculate Age
            </button>

            <div
                id="ageResult"
                class="result-box">
            </div>

        </div>

        `;

    }


    /* ===============================
       EMI
    =============================== */

    if (tool === "emiTool") {

        return `

        <div class="tool-page">

            <h2>🏦 EMI Calculator</h2>

            <input
                type="number"
                id="loanAmount"
                placeholder="Loan Amount"
            >

            <input
                type="number"
                id="interestRate"
                placeholder="Annual Interest %"
            >

            <input
                type="number"
                id="loanYears"
                placeholder="Loan Period (Years)"
            >

            <button id="calculateEMI">
                Calculate EMI
            </button>

            <div
                id="emiResult"
                class="result-box">
            </div>

        </div>

        `;

    }


    /* ===============================
       WORD COUNTER
    =============================== */

    if (tool === "wordTool") {

        return `

        <div class="tool-page">

            <h2>📚 Word Counter</h2>

            <textarea
                id="wordText"
                placeholder="Type or paste text...">
            </textarea>

            <button id="countWords">
                Count
            </button>

            <div
                id="wordResult"
                class="result-box">
            </div>

        </div>

        `;

    }


    /* ===============================
       CASE CONVERTER
    =============================== */

    if (tool === "caseTool") {

        return `

        <div class="tool-page">

            <h2>🔤 Case Converter</h2>

            <textarea
                id="caseText"
                placeholder="Enter text...">
            </textarea>

            <button id="upperCase">
                UPPERCASE
            </button>

            <button id="lowerCase">
                lowercase
            </button>

            <button id="titleCase">
                Title Case
            </button>

            <div
                id="caseResult"
                class="result-box">
            </div>

        </div>

        `;

    }


    /* ===============================
       PASSWORD
    =============================== */

    if (tool === "passwordTool") {

        return `

        <div class="tool-page">

            <h2>🔐 Password Generator</h2>

            <input
                type="number"
                id="passwordLength"
                value="16"
                min="6"
                max="50"
            >

            <button id="generatePassword">
                Generate Password
            </button>

            <div
                id="passwordResult"
                class="result-box">
            </div>

        </div>

        `;

    }


    /* ===============================
       UNIT CONVERTER
    =============================== */

    if (tool === "unitTool") {

        return `

        <div class="tool-page">

            <h2>📏 Unit Converter</h2>

            <input
                type="number"
                id="kmValue"
                placeholder="Kilometers"
            >

            <button id="convertKM">
                Convert to Miles
            </button>

            <div
                id="unitResult"
                class="result-box">
            </div>

        </div>

        `;

    }


    /* ===============================
       QR
    =============================== */

    if (tool === "qrTool") {

        return `

        <div class="tool-page">

            <h2>📱 QR Code Generator</h2>

            <input
                id="qrText"
                placeholder="Enter text or URL"
            >

            <button id="generateQR">
                Generate QR
            </button>

            <div
                id="qrResult"
                class="result-box">
            </div>

        </div>

        `;

    }


    /* ===============================
       COLOR
    =============================== */

    if (tool === "colorTool") {

        return `

        <div class="tool-page">

            <h2>🎨 Color Palette Generator</h2>

            <button id="generateColors">
                Generate Palette
            </button>

            <div
                id="colorResult"
                class="result-box">
            </div>

        </div>

        `;

    }


    /* ===============================
       IMAGE COMPRESS
    =============================== */

    if (tool === "compressTool") {

        return `

        <div class="tool-page">

            <h2>🖼️ Image Compressor</h2>

            <p>
                Select an image to compress.
            </p>

            <input
                type="file"
                id="compressImage"
                accept="image/*"
            >

            <button id="compressBtn">
                Compress Image
            </button>

            <div
                id="compressResult"
                class="result-box">
            </div>

        </div>

        `;

    }


    /* ===============================
       WEBP
    =============================== */

    if (tool === "webpTool") {

        return `

        <div class="tool-page">

            <h2>📸 Image to WebP</h2>

            <input
                type="file"
                id="webpImage"
                accept="image/*"
            >

            <button id="convertWebP">
                Convert to WebP
            </button>

            <div
                id="webpResult"
                class="result-box">
            </div>

        </div>

        `;

    }

}


/* =====================================
   TOOL FUNCTIONS
===================================== */

function attachToolFunction(tool) {


    /* PROMPT */

    if (tool === "promptTool") {

        document
        .getElementById("generatePrompt")
        .onclick = function () {

            const topic =
                document.getElementById("promptTopic").value;

            const type =
                document.getElementById("promptType").value;

            document.getElementById("promptResult")
                .textContent =
`
Create a high-quality ${type} about:

"${topic}"

Requirements:

- Make it engaging
- Use clear language
- Provide useful information
- Structure the content properly
- Add practical examples
- Keep the audience interested
`;

        };

    }


    /* YOUTUBE */

    if (tool === "youtubeTool") {

        document
        .getElementById("generateTitles")
        .onclick = function () {

            const topic =
                document.getElementById("youtubeTopic").value;

            document.getElementById("youtubeResult")
                .textContent =
`
1. ${topic} - Everything You Need to Know

2. 10 Amazing ${topic} Tips You Should Know

3. I Tried ${topic} - Here's What Happened

4. ${topic}: Beginner's Complete Guide

5. The Truth About ${topic}
`;

        };

    }


    /* INSTAGRAM */

    if (tool === "instagramTool") {

        document
        .getElementById("generateCaption")
        .onclick = function () {

            const topic =
                document.getElementById("instagramTopic").value;

            document.getElementById("instagramResult")
                .textContent =
`
✨ ${topic}

Small steps.
Big dreams.
Keep going. 🚀

#${topic.replace(/\s+/g, "")}
#Trending
#Inspiration
`;

        };

    }


    /* SUMMARY */

    if (tool === "summaryTool") {

        document
        .getElementById("summarize")
        .onclick = function () {

            const text =
                document.getElementById("summaryText").value;

            const sentences =
                text.split(/[.!?]+/)
                .filter(s => s.trim().length > 0);

            const summary =
                sentences.slice(0, 3).join(". ") + ".";

            document.getElementById("summaryResult")
                .textContent =
                summary;

        };

    }


    /* PERCENTAGE */

    if (tool === "percentageTool") {

        document
        .getElementById("calculatePercentage")
        .onclick = function () {

            const number =
                Number(
                    document.getElementById(
                        "percentNumber"
                    ).value
                );

            const total =
                Number(
                    document.getElementById(
                        "percentTotal"
                    ).value
                );

            if (!total) return;

            const result =
                (number / total) * 100;

            document.getElementById(
                "percentageResult"
            ).textContent =
                result.toFixed(2) + "%";

        };

    }


    /* GST */

    if (tool === "gstTool") {

        document
        .getElementById("calculateGST")
        .onclick = function () {

            const price =
                Number(
                    document.getElementById(
                        "gstPrice"
                    ).value
                );

            const rate =
                Number(
                    document.getElementById(
                        "gstRate"
                    ).value
                );

            const gst =
                price * rate / 100;

            const total =
                price + gst;

            document.getElementById(
                "gstResult"
            ).textContent =
`
GST Amount: ₹${gst.toFixed(2)}

Total Amount: ₹${total.toFixed(2)}
`;

        };

    }


    /* AGE */

    if (tool === "ageTool") {

        document
        .getElementById("calculateAge")
        .onclick = function () {

            const birth =
                new Date(
                    document.getElementById(
                        "birthDate"
                    ).value
                );

            const today =
                new Date();

            let age =
                today.getFullYear() -
                birth.getFullYear();

            const month =
                today.getMonth() -
                birth.getMonth();

            if (
                month < 0 ||
                (
                    month === 0 &&
                    today.getDate() < birth.getDate()
                )
            ) {
                age--;
            }

            document.getElementById(
                "ageResult"
            ).textContent =
                "Your age is " + age + " years.";

        };

    }


    /* EMI */

    if (tool === "emiTool") {

        document
        .getElementById("calculateEMI")
        .onclick = function () {

            const principal =
                Number(
                    document.getElementById(
                        "loanAmount"
                    ).value
                );

            const annualRate =
                Number(
                    document.getElementById(
                        "interestRate"
                    ).value
                );

            const years =
                Number(
                    document.getElementById(
                        "loanYears"
                    ).value
                );

            const monthlyRate =
                annualRate / 12 / 100;

            const months =
                years * 12;

            const emi =
                principal *
                monthlyRate *
                Math.pow(
                    1 + monthlyRate,
                    months
                ) /
                (
                    Math.pow(
                        1 + monthlyRate,
                        months
                    ) - 1
                );

            document.getElementById(
                "emiResult"
            ).textContent =
`
Monthly EMI: ₹${emi.toFixed(2)}

Total Payment: ₹${(emi * months).toFixed(2)}
`;

        };

    }


    /* WORD COUNTER */

    if (tool === "wordTool") {

        document
        .getElementById("countWords")
        .onclick = function () {

            const text =
                document.getElementById(
                    "wordText"
                ).value.trim();

            const words =
                text ?
                text.split(/\s+/).length :
                0;

            const characters =
                text.length;

            document.getElementById(
                "wordResult"
            ).textContent =
`
Words: ${words}

Characters: ${characters}
`;

        };

    }


    /* CASE */

    if (tool === "caseTool") {

        const text =
            document.getElementById("caseText");

        const result =
            document.getElementById("caseResult");

        document.getElementById(
            "upperCase"
        ).onclick = function () {

            result.textContent =
                text.value.toUpperCase();

        };

        document.getElementById(
            "lowerCase"
        ).onclick = function () {

            result.textContent =
                text.value.toLowerCase();

        };

        document.getElementById(
            "titleCase"
        ).onclick = function () {

            result.textContent =
                text.value
                .toLowerCase()
                .replace(
                    /\b\w/g,
                    c => c.toUpperCase()
                );

        };

    }


    /* PASSWORD */

    if (tool === "passwordTool") {

        document
        .getElementById("generatePassword")
        .onclick = function () {

            const length =
                Number(
                    document.getElementById(
                        "passwordLength"
                    ).value
                );

            const characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
                "abcdefghijklmnopqrstuvwxyz" +
                "0123456789!@#$%^&*()";

            let password = "";

            for (
                let i = 0;
                i < length;
                i++
            ) {

                password +=
                    characters[
                        Math.floor(
                            Math.random() *
                            characters.length
                        )
                    ];

            }

            document.getElementById(
                "passwordResult"
            ).textContent =
                password;

        };

    }


    /* UNIT */

    if (tool === "unitTool") {

        document
        .getElementById("convertKM")
        .onclick = function () {

            const km =
                Number(
                    document.getElementById(
                        "kmValue"
                    ).value
                );

            const miles =
                km * 0.621371;

            document.getElementById(
                "unitResult"
            ).textContent =
                `${km} km = ${miles.toFixed(3)} miles`;

        };

    }


    /* QR */

    if (tool === "qrTool") {

        document
        .getElementById("generateQR")
        .onclick = function () {

            const text =
                document.getElementById(
                    "qrText"
                ).value;

            if (!text) return;

            const url =
                "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
                encodeURIComponent(text);

            document.getElementById(
                "qrResult"
            ).innerHTML =
`
<img
src="${url}"
alt="Generated QR Code"
style="max-width:250px;"
>
<br><br>

<a
href="${url}"
target="_blank"
>
Open QR Image
</a>
`;

        };

    }


    /* COLOR */

    if (tool === "colorTool") {

        document
        .getElementById("generateColors")
        .onclick = function () {

            let html = "";

            for (let i = 0; i < 5; i++) {

                const color =
                    "#" +
                    Math.floor(
                        Math.random() *
                        16777215
                    )
                    .toString(16)
                    .padStart(6, "0");

                html +=
`
<div style="
height:60px;
background:${color};
border-radius:8px;
margin:8px 0;
display:flex;
align-items:center;
justify-content:center;
color:white;
font-weight:bold;
">
${color}
</div>
`;

            }

            document.getElementById(
                "colorResult"
            ).innerHTML = html;

        };

    }


    /* IMAGE COMPRESS */

    if (tool === "compressTool") {

        document
        .getElementById("compressBtn")
        .onclick = function () {

            const file =
                document.getElementById(
                    "compressImage"
                ).files[0];

            if (!file) {

                alert("Please select an image.");

                return;

            }

            const reader =
                new FileReader();

            reader.onload = function(e) {

                const img =
                    new Image();

                img.onload = function() {

                    const canvas =
                        document.createElement(
                            "canvas"
                        );

                    const ctx =
                        canvas.getContext(
                            "2d"
                        );

                    canvas.width =
                        img.width;

                    canvas.height =
                        img.height;

                    ctx.drawImage(
                        img,
                        0,
                        0
                    );

                    canvas.toBlob(
                        function(blob) {

                            const url =
                                URL.createObjectURL(
                                    blob
                                );

                            document.getElementById(
                                "compressResult"
                            ).innerHTML =
`
Compressed image ready.

<br><br>

<a
href="${url}"
download="compressed-image.jpg"
>
Download Image
</a>
`;

                        },
                        "image/jpeg",
                        0.6
                    );

                };

                img.src = e.target.result;

            };

            reader.readAsDataURL(file);

        };

    }


    /* WEBP */

    if (tool === "webpTool") {

        document
        .getElementById("convertWebP")
        .onclick = function () {

            const file =
                document.getElementById(
                    "webpImage"
                ).files[0];

            if (!file) {

                alert("Select an image.");

                return;

            }

            const reader =
                new FileReader();

            reader.onload = function(e) {

                const img =
                    new Image();

                img.onload = function() {

                    const canvas =
                        document.createElement(
                            "canvas"
                        );

                    canvas.width =
                        img.width;

                    canvas.height =
                        img.height;

                    canvas.getContext("2d")
                        .drawImage(
                            img,
                            0,
                            0
                        );

                    const webp =
                        canvas.toDataURL(
                            "image/webp",
                            0.8
                        );

                    document.getElementById(
                        "webpResult"
                    ).innerHTML =
`
WebP image ready.

<br><br>

<a
href="${webp}"
download="image.webp"
>
Download WebP
</a>
`;

                };

                img.src =
                    e.target.result;

            };

            reader.readAsDataURL(file);

        };

    }

}