# RateMyCustomer executable application foundation

This package runs the interactive UI and a dependency-free prototype API for verified interactions, reciprocal QR invitations, complaints, benefits, metadata consent, and DISC/VISC/AMDX test rewards.

## Start

1. Install Node.js 20 or newer.
2. Open a terminal in this folder.
3. Run `npm start`.
4. Open `http://localhost:4173`.

Open `http://localhost:4173/platform-gallery.html` for the dedicated high-fidelity iOS, Android, iPad, web/laptop, Smart TV, and smartwatch design boards.

Open `http://localhost:4173/device-lab.html` to interact with coded device-specific states and navigate between standing, QR, servicer, complaint, evidence, report, benefits, and AI Data Exchange flows.

Open `http://localhost:4173/live-demo.html` and choose **Run live trust journey** for a clickable end-to-end API demonstration with verified interaction, signed QR, sentiment-neutral points, benefit redemption, protected complaint, and visible audit receipts.

Open `http://localhost:4173/portal.html` for the responsive customer and servicer dashboards. Switch roles to create verified interactions, issue reciprocal QR invitations, redeem benefits, open protected complaints, and opt into metadata-tagged DISC/VISC/AMDX test rewards.

## Test

Run `npm test`.

This is an engineering foundation, not a production service. It uses in-memory records and test-only reward entries. Production requires authenticated accounts, persistent encrypted storage, managed secrets, rate limiting, audit logging, approved token specifications, and a connected deployment repository.

Set `RMC_DATA_FILE` to a writable JSON path to enable development persistence. Version 0.6 also validates and consumes signed single-use QR invitations, awards customer participation points independently of sentiment, routes servicer invitations to the configured Google-review destination, and issues auditable benefit-redemption receipts.

Set `RMC_REQUIRE_AUTH=1` to enforce role-aware bearer sessions on protected write operations. Prototype sessions are issued through `/api/sessions` with the non-production demo code documented in the automated tests. Set `RMC_RATE_LIMIT` to control the per-minute API request ceiling. Mutating operations create audit records retrievable by an authorized servicer or administrator.
