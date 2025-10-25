
<p align="center">
  <img src="/public/icons/g.png" alt="Shadhin Bangla Logo" width="130" />
</p>

<h1 align="center"> Shadhin Bangla 2.0</h1>

<p align="center">
  <strong>বাংলার কণ্ঠস্বর — নতুন প্রজন্মের জন্য ডিজিটাল বাংলাদেশ।</strong><br>
  জুলাই আন্দোলন, স্বাধীনতা সংগ্রাম, শহীদদের স্মৃতি এবং আধুনিক বাংলাদেশের গল্প — সব এক জায়গায়।
</p>

<p align="center">
  <a href="https://github.com/kamrul2006/shadin-bangla-2.0/stargazers">
    <img src="https://img.shields.io/github/stars/kamrul2006/shadin-bangla-2.0?style=for-the-badge&color=gold" alt="Stars">
  </a>
  <a href="https://github.com/kamrul2006/shadin-bangla-2.0/issues">
    <img src="https://img.shields.io/github/issues/kamrul2006/shadin-bangla-2.0?style=for-the-badge&color=red" alt="Issues">
  </a>
  <a href="https://vercel.com">
    <img src="https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel" alt="Vercel">
  </a>
</p>

---


> “বাংলাদেশের স্বাধীনতা, সংগ্রাম ও তরুণদের আত্মত্যাগের ডিজিটাল স্মারক।”

---

## 🚀 প্রকল্পের সংক্ষিপ্ত বিবরণ  

**Shadhin Bangla 2.0** হলো একটি ডিজিটাল প্ল্যাটফর্ম যেখানে বাংলাদেশের **জুলাই কোটা আন্দোলনের শহীদদের স্মৃতি, স্বাধীনতা সংগ্রামের ইতিহাস, ব্লগ, ছবি ও শ্রদ্ধা বার্তা** — একত্রে উপস্থাপন করা হয়েছে।

এটি শুধু একটি ওয়েবসাইট নয় — এটি নতুন প্রজন্মের জন্য **বাংলার ইতিহাস ও চেতনার ডিজিটাল দলিল।**

---

## 🧠 প্রযুক্তি (Tech Stack)

| বিভাগ | প্রযুক্তি |
|--------|-----------|
| **Frontend** | React.js (v19), React Router v7 |
| **Styling** | TailwindCSS, DaisyUI, Framer Motion |
| **Animation** | react-awesome-reveal, react-fast-marquee |
| **Icons** | react-icons |
| **Backend/API** | Node.js + Express + MongoDB |
| **Authentication** | Firebase Auth |
| **Hosting** | Vercel (backend), Firebase(Frontend)|
| **Alert System** | SweetAlert2 |

---

## 🏗️ ফোল্ডার স্ট্রাকচার  

```bash
shadin-bangla-ui/
├─ public/
│  ├─ backgrounds/
│  ├─ icons/
│  ├─ media/
│  ├─ sohid/
│  ├─ blogs.json
│  └─ julyGallery.json
│
├─ src/
│  ├─ assets/
│  ├─ Auth/
│  ├─ Components/
│  │  ├─ Fixed/ → Navbar, Footer, ErrorPage
│  │  └─ Other/ → Blogs, History, Home, Sohid, Tribute
│  ├─ Layouts/
│  ├─ Pages/
│  ├─ Router/
│  ├─ index.css
│  └─ main.jsx
│
├─ package.json
└─ vite.config.js
````

---

## ⚙️ ইনস্টলেশন গাইড

প্রজেক্টটি লোকাল মেশিনে চালাতে নিচের ধাপগুলো অনুসরণ করুন 👇

```bash
# 1️⃣ রিপোজিটরি ক্লোন করুন
git clone https://github.com/rafi983/shadhin-bangla-2.0.git
cd shadhin-bangla-2.0

# 2️⃣ ডিপেন্ডেন্সি ইনস্টল করুন
npm install

# 3️⃣ ডেভেলপমেন্ট সার্ভার চালু করুন
npm run dev
```

এরপর খুলুন 👉 **[http://localhost:5173](http://localhost:5173)**

---

## 💡 মূল বৈশিষ্ট্য (Core Features)

### 🏠 হোম পেজ

* 🇧🇩 অনুপ্রেরণামূলক ব্যানার ও কোটেশন
* **Shohid Marquee Section** — শহীদদের ছবি ও নাম চলমানভাবে প্রদর্শিত
* **Tribute Section** — শ্রদ্ধা নিবেদনের ফর্ম (নাম + বার্তা + ইমোজি 🕯️🌹🇧🇩🕊️)
* Floating Candle Animation ও Flag Overlay
* “একটি শ্রদ্ধা বার্তা দিন” বাটন সহ পপআপ ফর্ম
* সম্পূর্ণ **responsive layout**

---

### 🕯️ Tribute Section

* 🇧🇩 বাংলাদেশের পতাকার রঙে গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড
* Motion particle effect (হালকা আলো ও কণার নড়াচড়া)
* শহীদদের ছবি marquee আকারে প্রদর্শিত
* SweetAlert2 দিয়ে শ্রদ্ধা বার্তা সাবমিশন
* সুন্দর অ্যানিমেশনসহ রেসপন্সিভ ডিজাইন

---

### 🧾 Shohid List Page

* শহীদদের তথ্য API থেকে ডাইনামিকভাবে ফেচ করা হয়
* Grid layout এ প্রদর্শন (Mobile-এ 2টি কার্ড, Desktop-এ 4টি)
* সার্চ অপশন — নাম দিয়ে অনুসন্ধান
* Pagination (প্রতি পেজে ১২টি কার্ড)
* Responsive ও অ্যানিমেটেড UI

---

### 📰 Blog System

* নতুন ব্লগ যুক্ত, সম্পাদনা ও প্রদর্শন সুবিধা
* Admin Approval System — (Pending → Approved)
* ব্লগ ডিটেইল পেজ সহ সম্পূর্ণ ডাইনামিক
* রিচ টেক্সট ও ইমেজ সাপোর্ট

---

### 👥 User Management

* সকল ইউজার লিস্ট দেখা
* Role পরিবর্তন (User ⇆ Admin)
* Super Admin নিরাপদ — পরিবর্তন করা যায় না

---

### 🧭 Manage Panel (Admin Dashboard)

* Manage Blogs
* Manage Reviews
* Manage Shohid Info
* Manage Users
* Sidebar Navigation ও Logout সাপোর্ট

---

### 📜 Footer Section

* Quick Links: **Home | Shohid List | Blogs | About**
* সোশ্যাল মিডিয়া আইকনসহ কনটাক্ট ইনফো
* Copyright
* “Developed by Team Shadhin Bangla 💚”

---

## 📱 রেসপনসিভ ডিজাইন

* Mobile-first ডিজাইন
* Grid ও Typography auto-adjusted
* Small devices-এ compact card ও image view

---

## 📡 API রুটসমূহ

| মেথড   | এন্ডপয়েন্ট                | কাজ                        |
| ------ | ------------------------- | -------------------------- |
| GET    | `/Shohid`                 | সব শহীদের তথ্য পাওয়া       |
| POST   | `/Shohid`                 | নতুন শহীদের তথ্য যুক্ত করা |
| GET    | `/blogs`                  | সব ব্লগ দেখা               |
| PATCH  | `/blogs/approve/:id`      | ব্লগ অনুমোদন               |
| DELETE | `/blogs/:id`              | ব্লগ মুছে ফেলা             |
| GET    | `/reviews`                | রিভিউ লিস্ট                |
| POST   | `/reviews`                | রিভিউ যোগ করা              |
| PATCH  | `/Users/admin/:id`        | ইউজারকে অ্যাডমিন করা       |
| PATCH  | `/Users/remove-admin/:id` | অ্যাডমিন রোল সরানো         |

---

## 💬 অনুপ্রেরণামূলক উক্তি

> “তাদের রক্তে রচিত আমাদের স্বাধীনতার পথ।”
> — জুলাই আন্দোলনের বীর শহীদদের প্রতি শ্রদ্ধা

> “বাংলার মাটি অন্যায়ের কাছে কখনও মাথা নত করেনি।”
> “তরুণরাই জাতির সত্যিকারের পথপ্রদর্শক।”

---

## 👨‍💻 নির্মাতা

* **ডেভেলপ করেছেন:** [Kamrul Islam Apurba](https://github.com/rafi983)
* 📧 **ইমেল:** [rafiirfan211@gmail.com](mailto:rafiirfan211@gmail.com)
* 🌐 **GitHub:** [github.com/rafi983](https://github.com/rafi983)

---

## ⚖️ লাইসেন্স

এই প্রকল্পটি **MIT License** এর আওতাভুক্ত —
আপনি এটি অনুমতি সাপেক্ষে ব্যবহার করতে পারবেন যথাযথ attribution সহ।
কোন রকম পরিবর্তন বা অনুমতি ছাড়া পুনঃবিতরণ করতে পারবেন না।

---

## 🛑 গুরুত্বপূর্ণ ঘোষণা

🔒 **Shadhin Bangla 2.0 এখন সম্পূর্ণ!**
এই সংস্করণে সব ফিচার যুক্ত হয়েছে এবং এটি প্রকল্পের ভার্শন ১.০.০ এর **চূড়ান্ত সংস্করণ**।
👉 **আর কোনো Pull Request, Commit বা পরিবর্তন গ্রহণ করা হবে না।**

---

<p align="center">
  <b>🇧🇩 Shadhin Bangla 2.0 — বাংলার ইতিহাস, তরুণের কণ্ঠ, স্বাধীনতার চেতনা।</b><br>
  <i>“তাদের রক্তে রচিত আমাদের আগামী।”</i>
</p>

----
