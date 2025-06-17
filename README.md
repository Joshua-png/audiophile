# Audiophile E-Commerce Platform

A functional, multi-page e-commerce website for premium audio products.

## Live Demo

[View deployed version](https://audiophile.vercel.app/)

## Features

### Product Catalog
- Browse audio products including earphones, headphones, and speakers
- Product details stored in Contentful (headless CMS)
- Responsive product pages

### Cart Management
- Add/remove products with quantity adjustments
- Persistent cart storage using localStorage

### Technical Features
- Responsive design
- Accessible navigation

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Vite

### Services
- Contentful (CMS)
- Vercel (Hosting)

## Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/Joshua-png/audiophile.git]
   cd audiophile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file with your Contentful credentials:
   ```env
   VITE_CONTENTFUL_SPACE_ID=your_space_id
   VITE_CONTENTFUL_DELIVERY_API=your_api_key
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
audiophile/
├── node_modules/
├── public/
├── src/
│   ├── actions/
│   ├── assets/
│   ├── components/
│   │   ├── cart/
│   │   ├── categories/
│   │   ├── checkout/
│   │   ├── homepage/
│   │   ├── navigation/
│   │   ├── products/
│   │   └── shared/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── reducers/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .env.example
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
└── vite.config.js
```

## Acknowledgments

- Contentful CMS  
- Vercel hosting   
- Created by Joshua Aryee
