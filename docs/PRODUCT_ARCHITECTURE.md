# RateMyCustomer product architecture

## Shared product model

All platforms use the same account, transaction, review, evidence, standing, benefit, consent, and reward concepts. Device experiences differ only where screen size, privacy, or input constraints require it.

## Trust boundaries

- Private records and AI processing remain off-chain.
- Blockchain records consent proofs, provenance, permitted use, and reward receipts.
- A complaint has no rating effect until identity, transaction, evidence, customer response, and human review are complete.
- QR invitations are transaction-specific, expiring, single-purpose signed links in production.
- Review participation points never depend on positive sentiment.
- DISC, VISC, and AMDX remain test rewards until their networks, contracts, wallets, and redemption rules are confirmed.

## Platform allocation

| Platform | Primary jobs |
| --- | --- |
| iPhone / Android | Full customer and servicer journeys, QR sharing, evidence capture, benefits |
| iPad | Evidence comparison, case resolution, business operations |
| Watch | Alerts, standing glance, benefit pass, QR presentation |
| Smart TV | Read-only household or business overview with private-device handoff |
| Desktop / Web | Administration, verification, benefit configuration, consent audit |
