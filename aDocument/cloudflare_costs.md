# Cloudflare Hosting Cost Breakdown

This document outlines the costs of hosting a web application on Cloudflare, comparing the **Free Tier** and the **Paid Tier** (Pay-as-you-go).

---

## 1. Cloudflare Workers (Compute)

| Metric | Free Plan | Paid Plan (Starts at $5/mo) |
| :--- | :--- | :--- |
| **Included Requests** | 100,000 / day | 10 Million / month |
| **Additional Requests**| N/A (Limits enforced) | $0.30 per Million requests |
| **CPU Time Limit** | 10ms per request | Up to 30s |

---

## 2. Cloudflare D1 (SQL Database)

| Metric | Free Plan | Paid Plan (Included with Workers Paid) |
| :--- | :--- | :--- |
| **Included Reads** | 5 Million / day | 25 Billion / month ($0.001 per extra Million) |
| **Included Writes** | 100,000 / day | 50 Million / month ($1.00 per extra Million) |
| **Included Storage** | 500 MB | 5 GB ($0.75 per extra GB/month) |

---

## 3. Cloudflare R2 (Object & Image Storage)

| Metric | Free Plan | Paid Plan (Pay-as-you-go) |
| :--- | :--- | :--- |
| **Included Storage** | 10 GB / month | $0.015 per GB / month |
| **Class A Operations** (Write/List) | 1 Million / month | $4.50 per Million operations |
| **Class B Operations** (Read) | 10 Million / month | $0.36 per Million operations |
| **Egress (Data Transfer Out)** | **Free** ($0.00) | **Free** ($0.00) |

---

## 4. Key Takeaways & Cost Scenarios

1. **Zero-Cost Entry**: You can run a small production website entirely on the **Free Tier** (100k requests/day, 10GB image storage, and 500MB SQL database) for **$0.00 / month**.
2. **Paid Scaling**: Moving to the paid plan costs **$5 / month**, which expands your compute resource limits, increases SQL database capacity to 5GB, and bills storage/operations on a highly economical utility basis.
3. **No Egress Fees**: Unlike AWS S3 or Google Cloud Storage, Cloudflare R2 has **zero egress fees**, making image hosting extremely cost-effective even with high traffic.
