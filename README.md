# Go4me.ai Marketing Website

The world's first **Digital-to-Physical** Agent service. AI suggests it. Human gophers do it.

## 🌐 Live Deployment

**Production URL:** https://go4me-yb92br.manus.space/

## 📋 Project Description

This is the marketing and landing page for Go4me.ai, showcasing our digital-to-physical agent services including:

- **In-N-Out Delivery** - $10 flat delivery
- **Grocery Runs** - Trader Joe's to your door
- **Feels on Wheels** - Empathetic listening sessions
- **DMV Proxy** - We wait in line so you don't
- **Eyes On** - Property checks and photo proof
- **Lost & Found** - Item recovery service
- **Dry Cleaning** - Pickup and delivery
- **Custom Errands** - Open requests for any legal task

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Baloo 2 & Inter** - Google Fonts

## 📁 Project Structure

```
go4me-website/
├── public/
│   ├── gopher-hero.png          # Main gopher mascot
│   ├── gopher-running.png        # Header logo gopher
│   ├── gopher-waving.png         # Join page gopher
│   ├── robots.txt                # SEO crawler config
│   ├── sitemap.xml               # Site structure for search engines
│   └── ai-info.txt               # AI assistant reference guide
├── src/
│   ├── components/
│   │   ├── Header.jsx            # Navigation header
│   │   └── Footer.jsx            # Site footer
│   ├── pages/
│   │   ├── Home.jsx              # Landing page
│   │   ├── Services.jsx          # Services overview
│   │   ├── HowItWorks.jsx        # Process explanation
│   │   ├── Pricing.jsx           # Pricing details
│   │   ├── UseCases.jsx          # Customer stories
│   │   ├── Business.jsx          # B2B solutions
│   │   ├── Coverage.jsx          # Service areas
│   │   ├── Join.jsx              # Gopher recruitment
│   │   ├── Contact.jsx           # Contact form
│   │   ├── FAQ.jsx               # Frequently asked questions
│   │   ├── Privacy.jsx           # Privacy policy
│   │   ├── Terms.jsx             # Terms of service
│   │   └── services/
│   │       ├── InNOut.jsx        # In-N-Out delivery details
│   │       ├── GroceryRuns.jsx   # Grocery delivery details
│   │       ├── FeelsOnWheels.jsx # Listening sessions details
│   │       ├── DMV.jsx           # DMV proxy details
│   │       ├── EyesOn.jsx        # Property check details
│   │       ├── LostAndFound.jsx  # Item recovery details
│   │       ├── DryCleaning.jsx   # Dry cleaning details
│   │       └── OpenRequest.jsx   # Custom errand details
│   ├── App.jsx                   # Main app component with routing
│   ├── App.css                   # Global styles
│   └── main.jsx                  # React entry point
├── index.html                    # HTML template
├── package.json                  # Dependencies
├── vite.config.js                # Vite configuration
└── README.md                     # This file
```

## 🚀 Setup Instructions

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GO4ME1/go4me-marketing.git
   cd go4me-marketing
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run development server:**
   ```bash
   pnpm run dev
   ```
   
   The site will be available at `http://localhost:5173`

4. **Build for production:**
   ```bash
   pnpm run build
   ```
   
   Output will be in the `dist/` directory

5. **Preview production build:**
   ```bash
   pnpm run preview
   ```

## 🔗 Integration

### Booking Form Integration

All "Order a Gopher" buttons link to the booking form application:

**Production Booking Form:** https://go4me-ar7jjn.manus.space/new-task

Service-specific parameters are passed via URL:
- In-N-Out: `?svc=in_n_out&city=san_diego`
- Grocery Runs: `?svc=grocery_runs&city=san_diego`
- Feels on Wheels: `?svc=feels_on_wheels&city=san_diego`
- DMV: `?svc=dmv&city=san_diego`
- Eyes On: `?svc=eyes_on&city=san_diego`

### Backend API

The booking form connects to the backend API:

**Backend API:** https://e5h6i7cvqenj.manus.space

## 🎨 Brand Guidelines

### Colors

- **Primary Green:** `#2ECC71` - Main brand color
- **Secondary Blue:** `#3498DB` - Trust and reliability
- **Accent Orange:** `#E67E22` - Energy and action
- **Accent Purple:** `#9B59B6` - Premium services
- **Accent Yellow:** `#F1C40F` - Attention and highlights

### Typography

- **Headings:** Baloo 2 (playful, friendly)
- **Body:** Inter (clean, professional)

### Mascot

The Go4me gopher represents our field agents who "go for" you. Three variations:
- **Gopher Hero** - Main landing page (thumbs up with phone)
- **Gopher Running** - Header logo (running with delivery bag)
- **Gopher Waving** - Join page (friendly greeting)

## 🔍 SEO & AI Optimization

The site is optimized for discovery by AI assistants (ChatGPT, Claude, Perplexity):

- **Structured Data:** JSON-LD schema for services and FAQs
- **AI Info File:** `/ai-info.txt` with service descriptions
- **Robots.txt:** Allows GPTBot, Claude-Web, PerplexityBot
- **Sitemap:** Complete site structure at `/sitemap.xml`
- **Meta Tags:** Comprehensive SEO and social sharing tags

## 📊 Performance

- **Bundle Size:** ~132 KB (gzipped)
- **Load Time:** 1.5s (Desktop), 4s (Mobile 3G)
- **Code Splitting:** React vendor, icons, and main app separated
- **Mobile Responsive:** 231+ breakpoints, mobile-first design

## 🚢 Deployment

The site is deployed on Manus hosting:

1. Build the production bundle:
   ```bash
   pnpm run build
   ```

2. Deploy the `dist/` directory to Manus

3. The site will be live at: https://go4me-yb92br.manus.space/

## 📝 Content Updates

### Adding a New Service

1. Create service detail page in `src/pages/services/ServiceName.jsx`
2. Add route in `src/App.jsx`
3. Add service card to `src/pages/Services.jsx`
4. Add service to homepage `src/pages/Home.jsx` services array
5. Update sitemap.xml and ai-info.txt

### Updating Pricing

Pricing is displayed in multiple locations:
- Homepage service cards
- Services overview page
- Individual service detail pages
- Pricing page
- Use Cases examples

Update all locations for consistency.

## 🤝 Contributing

This is a private repository for Go4me.ai internal development.

For questions or issues, contact the development team.

## 📄 License

Proprietary - © 2025 Go4me.ai. All rights reserved.

## 🔗 Related Repositories

- **go4me-backend** - Backend API with Stripe and Twilio integration
- **go4me-frontend** - Booking form application
- **go4me-marketing** - This repository (marketing website)

---

**Built with ❤️ by the Go4me.ai team**

*The world's first Digital-to-Physical Agent service*

