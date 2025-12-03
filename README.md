# Sales Dashboard

A modern **Sales Dashboard** built with **Next.js**, **TailwindCSS**, and **ShadCN UI**.  
This dashboard allows you to monitor sales, filter data, sort by columns, and view total sales in a **dark-themed, user-friendly interface**.

---

## **Live Demo**

🚀 **[View Live Dashboard](https://sales-dashboard-alpha-livid.vercel.app/)**

---

## **Features**

- **Dark Mode Dashboard** – Smooth dark theme with modern UI components.
- **Filter Panel** – Filter sales by date range, email, phone, and minimum price.
- **Sortable Table** – Click on column headers to sort by date or price (1st click ascending order, 2nd click descending order adn 3rd click reset to default).
- **Pagination** – Navigate through sales with next/previous buttons.
- **Interactive Sales Chart** – Line chart for total sales over time using **Recharts**.
- **Custom Date Picker** – Friendly month/year selection with dark theme and clear button.
- **Token Authentication** – Frontend token management with automatic expiration.
- **Instant Data Loading with Caching** – Returning to previous filters or pages loads instantly without refetching.
- **Responsive Design** – Fully responsive and mobile-friendly.

---

## **Tech Stack**

- **Frontend:** Next.js 16 (App Router), React 19
- **Styling:** TailwindCSS, ShadCN UI
- **Charts:** Recharts
- **State Management:** React Hooks + TanStack Query (React Query)
- **HTTP Requests:** Axios with token-based authentication

---

## **Folder Structure**

```
/app              # Next.js pages & dashboard components
/components       # Reusable components (FilterPanel, SalesTable, CustomDateInput, etc.)
/hooks            # Custom React hooks (useSalesData)
/lib              # Types, constants, and utilities (Axios config, token handling)
```

---

## **Getting Started**

### **Clone the Repository**

```bash
git clone https://github.com/atikur-24/single-page-sales-dashboard.git
cd single-page-sales-dashboard
```

### **Install Dependencies**

```bash
npm install
# or
yarn install
```

### **Run the Development Server**

```bash
npm run dev
# or
yarn dev
```

### **Build for Production**

```bash
npm run build
npm run start
# or
yarn build
yarn start
```
