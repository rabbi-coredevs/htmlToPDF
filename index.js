

const htmlElement = 
`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* CSS Reset */
        *,
        *::before,
        *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
        }

        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        main,
        menu,
        nav,
        section {
            display: block;
        }

        body {
            line-height: 1;
            padding: 30px;
        }

        ol,
        ul {
            list-style: none;
        }

        blockquote,
        q {
            quotes: none;
        }

        blockquote::before,
        blockquote::after,
        q::before,
        q::after {
            content: "";
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
            border: 1px solid #363636;
        }

        td {
            padding: 6px 12px;
            text-align: left;
        }

        tr {
            border-bottom: 1px solid #363636;
        }

        th {
            font-weight: 700;
            padding: 12px 5px;
            text-align: left;
        }
        
    </style>
</head>

<body>
    <div style="display: flex; justify-content: center;">
        <figure style="height: 15rem; width: 15rem; background: transparent;">
            <img src="https://i.ibb.co/rwXZcHt/urban-ab601d56c15de23c940e.png" alt="logo" style="height: 15rem; width: 15rem;">
        </figure>
    </div>
    <div spellcheck="false" style="padding: 0.75rem;">
        <div contenteditable="false">
            <div style="text-align: center;">
                <h4>Phone : 5129717738</h4>
            </div>
            <div style="text-align: left; margin-top: 1.25rem; font-size: 1.25rem; line-height: 1.75rem;">
                <h4 style="font-size: 1.25rem; line-height: 2rem; color:darkgreen">Shazzad Hossen</h4>
                <h4>Phone : 01400032663</h4>
            </div>
            <div style="margin-top: 1.25rem; font-size: 1.25rem; line-height: 1.75rem;">
                <h4>Job Address :</h4>
                <h4 class="content" style="width: 11rem; max-height: max-content;">House no: 36,<br> Road no: 31,<br> Ceramic Gate,<br> Block D, Mirpur 12</h4>
            </div>
            <div style="font-weight: 700; text-align: right; margin-top: 1.25rem; font-size: 1.5rem; line-height: 2rem;">
                <h3>Print Date : <span style="font-weight: 400;">5/20/2024</span></h3>
            </div>
            <div style="font-size: 1.25rem; line-height: 1.75rem; font-weight: 700;">
                <h4 style="display: flex; justify-content: center;">Proposal for Shazzad Hossen</h4>
            </div>
            <div style="margin-top: 2.5rem; font-size: 1.2rem;">
                <h4>Here’s the quote for the work we discussed. Let me know if you have any questions. I’m happy to help! We can get you scheduled for a start date if everything looks good. Thanks!</h4>
            </div>
        </div>
        <div style="margin-top: 2.5rem; text-align: center;">
            <table style="width: 100%;">
                <thead>
                     <tr style="font-size: 1.25rem; line-height: 1.75rem; background-color: rgb(226, 232, 240);">
                        <th style="width: 15%;">Items</th>
                        <th style="width: 55%;">Description</th>
                        <th>Cost Type</th>
                        <th>Qty/Unit</th>
                        <th>Unit Price</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="width: 15%;">
                            <p style="font-weight: 700; font-size: 1.25rem; line-height: 1.75rem;">Lights</p>
                            <p style="color: rgb(100, 116, 139); font-weight: 700;">Volt lightning </p>
                        </td>
                        <td contenteditable="false" style="width: 55%;">
                            <p></p>
                            <p>per light cost</p>
                        </td>
                        <td contenteditable="false">--</td>
                        <td contenteditable="false">3</td>
                        <td contenteditable="false">309.00</td>
                        <td><span>$</span><span>927.00</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div style="text-align: right; font-weight: 800; font-size: 1.5rem; line-height: 2rem; margin-top: 1.25rem; display: flex; gap: 0.75rem; justify-content: flex-end;">
            <h3>Total Price: $</h3>
            <h3 contenteditable="false" style="display: inline-block; outline: transparent solid 2px; outline-offset: 2px;">927.00</h3>
        </div>
        <div contenteditable="false" style="margin-top: 2.5rem; display: flex; flex-direction: column; gap: 1.5rem;">
            <h2>All pricing includes materials, labor and haul-off. Quoted price does NOT include applicable sales tax.</h2>
            <h2>Any changes to the original proposal will be priced separately. Client is solely responsible for any required permitting or approvals, including H.O.A and city permits. Urban Oasis Contracting can assist with any permitting if notified beforehand.</h2>
            <h2>A 3% transaction fee will be applied to credit card payments. No fees will be added for ACH, Check, or Wire Transfer payments.</h2>
            <h2>To accept this quote, please press "Accept" and a team member from Urban Oasis Contracting will contact you.</h2>
        </div>
        <div contenteditable="false" style="margin-top: 3rem; font-weight: 800; display: flex; flex-direction: column; gap: 1.5rem;">
            <div style="display: flex; align-items: center;">
                <h4 style="width: 20rem;">Signature: </h4>
                <input type="file" hidden="" id="signature">
                <label for="signature" class="cursor-pointer">
                    <figure style="width: 8rem; height: 8rem;">
                        <p></p>
                    </figure>
                </label>
            </div>
            <div style="display: flex; gap: 1.25rem;">
                <h4 style="width: 20rem;">Date: </h4>
                <h4>May 20, 2024, 1:09 PM</h4>
            </div>
            <div style="display: flex; gap: 1.25rem;">
                <h4 style="width: 20rem;">Approved By: </h4>
                <h4 style="font-weight: 700;">-----------</h4>
            </div>
        </div>
    </div>
</body>

</html>

`;

const puppeteer = require("puppeteer");

(async () => {
  // Create a browser instance
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  // Set the HTML content on the page
  await page.setContent(htmlElement, { waitUntil: 'networkidle0' });

  // Wait for all images to load
  await page.waitForSelector("img");

  // To reflect CSS used for screens instead of print
  await page.emulateMediaType("screen");

  // Download the PDF
  const pdf = await page.pdf({
    path: "result.pdf",
    margin: { top: "0px", right: "10px", bottom: "20px", left: "10px" },
    printBackground: true,
    format: "A4",
  });

  // Close the browser instance
  await browser.close();

  // Send a message after completing the PDF download
  console.log('PDF download completed.');
})();
