# RateMyCustomer shared data model

| Entity | Purpose | Critical controls |
| --- | --- | --- |
| Account | Customer, servicer, reviewer, administrator | Role separation and progressive identity assurance |
| Interaction | Verified service relationship | Both parties, time, category, provenance |
| QR invitation | Reciprocal review request | Signed, expiring, single-use and transaction-specific |
| Complaint | Structured factual allegation | No rating effect at submission or while materially disputed |
| Evidence | Original supporting material | Hash, source, chronology and authenticity status |
| Response | Customer confirmation, denial or counter-evidence | Free meaningful response and identity mismatch control |
| Standing | Explainable reliability outcome | Principal factors, exclusions, dispute and rebuild path |
| Benefit | Provider-funded positive opportunity | Tier, eligibility, location, expiration and redemption receipt |
| Consent | Metadata license for the AI Data Exchange | Per-tag purpose, duration, revocation and provenance receipt |
| Reward | DISC, VISC or AMDX ledger entry | Test-only until network, contracts, custody and rules are approved |

## Complaint state machine

`submitted → transaction_verified → evidence_screening → customer_response → human_review → verified_unresolved | resolved | rejected`

Only `verified_unresolved`, reached after an explicit human decision, may create a limited rating effect.
