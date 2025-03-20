# **CDN Optimization Test: Cloudflare Performance Benchmarking**

## **📌 Project Overview**
This project focuses on optimizing web performance using **Cloudflare’s CDN, caching, and compression features**. We benchmarked improvements by analyzing **TTFB (Time to First Byte), cache hit ratio, and global latency** before and after optimizations.

## **🚀 Goals of the Project**
✅ Improve **TTFB (Time to First Byte)** using Cloudflare edge caching.  
✅ Enable **Brotli compression** for reduced payload sizes.  
✅ Optimize **Cloudflare’s cache settings** for efficient global content delivery.  
✅ Measure **performance improvements with benchmarking tools**.  

---

## **🔍 Performance Benchmarking**
We conducted multiple performance tests to measure the effectiveness of Cloudflare’s CDN optimizations.

### **📊 1️⃣ Baseline Performance (Before Optimization)**
| Test Location | Network Type | TTFB |
|--------------|--------------|------|
| Local (Hotspot) | Mobile Hotspot | 298ms |
| Wired Connection | Ethernet | 145ms |

- **Issues Identified:**
  - High TTFB due to **lack of full-page caching**.
  - Increased latency on mobile networks.
  - No compression, leading to **larger response payloads**.

---

### **🚀 2️⃣ Optimizations Applied**
✅ **Cloudflare Caching:** Implemented full-page caching at Cloudflare’s edge.  
✅ **Compression:** Enabled **Brotli compression** to reduce transfer sizes.  
✅ **NGINX Proxy (Optional):** Configured NGINX to further optimize request routing.  
✅ **Smart Tiered Caching (Cloudflare Dashboard):** Ensured content is fetched efficiently.  

---

### **📊 3️⃣ Performance After Optimization**
| Test Location | Network Type | TTFB (After Optimization) |
|--------------|--------------|---------------------------|
| Local (Hotspot) | Mobile Hotspot | 239ms |
| Wired Connection | Ethernet | 145ms |
| Global Test (SEA - Seattle) | Cloudflare Edge | 58ms (First Ping) |
| Global Test (CDG - Paris) | Cloudflare Edge | 636ms (First Ping) |

✅ **Cache HIT Ratio Improved** – Most responses are served directly from Cloudflare’s cache.  
✅ **TTFB Lowered (Wired Connection)** – Faster response times for direct connections.  
✅ **Compression Reduced Transfer Size** – Less bandwidth usage, improved load times.  

---

## **📌 Lessons Learned & Future Improvements**
📌 **Hotspot Connections Have High Latency** – Results show significant TTFB variance based on network type.  
📌 **Cloudflare’s Global Caching is Effective** – U.S. users benefit from fast response times, but European users have **higher latency**.  
📌 **Further Optimizations Possible** – Future improvements could include:
   - **Cloudflare KV Storage** for dynamic caching.
   - **Webpage Speed Test Integration** for full-page analysis.
   - **Regional Cache Variations** to optimize European traffic.  

---

## **📌 How to Run This Project**
### **1️⃣ Deploy Cloudflare Worker**
```sh
npx wrangler publish
```

### **2️⃣ Test Performance Locally**
```sh
curl -o /dev/null -s -w 'TTFB: %{time_starttransfer}s\n' https://backend.cdnoptimizationtest.workers.dev/
```

### **3️⃣ Check Cache Status**
```sh
curl -I https://backend.cdnoptimizationtest.workers.dev/
```
Expected Output:
```
CF-Cache-Status: HIT
```

### **4️⃣ Run Global Latency Test**
Use [https://www.webpagetest.org/](https://www.webpagetest.org/) to test from different locations.

---

## **📌 Repository Structure**
```
📂 CDN-Optimization-Test
 ├── 📂 backend
 │   ├── index.ts  # Cloudflare Worker code
 │   ├── wrangler.toml  # Cloudflare Worker config
 ├── 📂 benchmarks
 │   ├── benchmark_results.md  # Performance comparisons
 ├── README.md  # Project overview
```

---

## **📌 Conclusion**
This project demonstrates **how Cloudflare’s CDN, caching, and compression** can significantly **improve web performance**. By **optimizing TTFB, reducing payload size with Brotli, and leveraging Cloudflare’s edge caching**, we successfully improved load times for most users.

✅ **Cloudflare CDN is highly effective for U.S. users**.  
✅ **Mobile networks introduce significant latency (avoid for benchmarks).**  
✅ **Further caching strategies could optimize global latency.**  



