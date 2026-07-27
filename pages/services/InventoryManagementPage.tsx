import React from 'react';
import { Link } from 'react-router-dom';
import { Package, CheckCircle2, ArrowRight, HelpCircle, ChevronRight, Boxes, ShieldCheck, RefreshCcw, Layers } from 'lucide-react';
import { SEO } from '../../components/SEO';

export const InventoryManagementPage: React.FC = () => {
  const pageFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ABC/XYZ inventory analysis, and how does it help an Indian business owner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ABC analysis categorizes stock by revenue value (Class A = top 80% revenue drivers), while XYZ analysis categorizes by demand predictability. Combining them allows you to focus safety stock capital strictly on high-value, fast-moving items while eliminating dead stock."
        }
      },
      {
        "@type": "Question",
        "name": "Do we need expensive warehouse management software (WMS) to improve inventory control?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Most MSMEs can achieve 98%+ inventory accuracy using simple barcode/QR mobile scanning tools integrated directly with Tally Prime, Zoho Inventory, or lightweight Google Cloud registers without heavy software investments."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle raw material inventory management for custom job-work manufacturers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We establish Bill of Materials (BOM) explosion models and minimum order quantity (MOQ) reorder triggers based on active client order pipelines, ensuring raw material arrives just in time for scheduled production runs."
        }
      },
      {
        "@type": "Question",
        "name": "Can inventory management systems integrate with our current Tally ERP setup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We configure automated sync scripts that update Tally stock journals in real time whenever goods receipt notes (GRN) or dispatch delivery challans are logged on the warehouse floor."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can an MSME expect to see cash unlocked after inventory optimization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients identify non-moving 'dead' stock and overstocked Class C items within 2 to 3 weeks of the initial inventory audit, unlocking liquid cash through promotional liquidation within 60 days."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://analyticsspire.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://analyticsspire.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Inventory Management", "item": "https://analyticsspire.com/services/inventory-management" }
    ]
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <SEO 
        title="Inventory Management Consultant India | Analytics Spire"
        description="Premier inventory management consultant in India. Optimize stock levels, cut holding costs, prevent stockouts, and boost warehouse productivity. Book consult."
        url="https://analyticsspire.com/services/inventory-management"
        schemaType="Service"
        additionalSchemas={[pageFaqSchema, breadcrumbSchema]}
      />

      {/* Hero / Header Section */}
      <section className="relative pt-32 pb-20 border-b border-gray-900 bg-gradient-to-b from-gray-950 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-400 font-bold mb-6">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={12} className="text-gray-600" />
            <Link to="/services" className="hover:text-white transition">Services</Link>
            <ChevronRight size={12} className="text-gray-600" />
            <span className="text-gray-300">Inventory Management</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="bg-brand-950/80 border border-brand-800/60 text-brand-400 text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-4">
                Warehouse, Stock Control & Holding Cost Reduction
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Inventory management consultant in India to optimize stock and cut holding costs
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed border-l-2 border-brand-500 pl-6 mb-8">
                Excessive inventory traps precious working capital in dust-covered warehouse shelves, while frequent stockouts lead to cancelled client orders and damaged brand reputation. In many Indian MSMEs, inventory control relies on informal physical counts recorded on paper logs, leading to phantom stock, shrinkage, and mismatched Tally ledgers. As a trusted inventory management consultant in India, Analytics Spire implements ABC/XYZ stock categorization, automated reorder point alerts, safety stock formulas, barcode/QR tracking systems, and dead stock liquidation strategies to maximize inventory turnover and free up locked cash.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-3.5 rounded-lg transition duration-300 shadow-[0_0_20px_rgba(2,132,199,0.4)] flex items-center gap-2 text-sm uppercase tracking-wide"
                >
                  Book Free Consultation <ArrowRight size={16} />
                </Link>
                <a
                  href="#included"
                  className="bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-800 font-semibold px-6 py-3.5 rounded-lg transition text-sm"
                >
                  Explore Deliverables
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gray-900/90 border border-gray-800 p-8 rounded-xl shadow-2xl">
              <Package className="w-12 h-12 text-brand-500 mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Key Highlights</h2>
              <ul className="space-y-3 text-sm text-gray-300 border-t border-gray-800 pt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>ABC/XYZ Stock Matrix & Categorization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Automated Reorder Point (ROP) Alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Barcode/QR Mobile Warehouse Tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Dead Stock Identification & Liquidation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What's Included */}
      <section id="included" className="py-20 border-b border-gray-900 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block mb-2">Capabilities</span>
            <h2 className="font-heading text-3xl font-bold text-white">What's included</h2>
            <p className="text-gray-400 mt-2">
              Our inventory management consulting provides systematic stock control mechanisms that eliminate warehouse chaos and unlock locked working capital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">01</div>
              <h3 className="text-xl font-bold text-white mb-3">ABC/XYZ Stock Analysis & Classification</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We perform multi-dimensional stock categorization based on annual consumption value (ABC) and demand predictability (XYZ), allowing you to focus safety stock capital strictly on high-impact SKUs.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Automated Reorder Point & Safety Stock Engine</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We calculate supplier lead times, buffer stock tolerances, and order frequencies to build automated reorder alerts that notify purchase teams on WhatsApp when stock levels touch minimum thresholds.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Warehouse Layout & Bin Location Optimization</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We re-organize physical warehouse racks, assign standardized bin codes, and optimize picking paths to reduce order picking times and physical damage during material handling.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">04</div>
              <h3 className="text-xl font-bold text-white mb-3">Barcode/QR Mobile Scanning & Tally Integration</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We introduce smartphone barcode scanning for inward goods receipts (GRN) and outbound dispatch challans, auto-syncing physical inventory counts with Tally ledgers in real time.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">05</div>
              <h3 className="text-xl font-bold text-white mb-3">Dead Stock Identification & Liquidation Strategy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We flag slow-moving and obsolete inventory aged over 180 days, designing promotional bundling, dealer discount schemes, and scrap clearance strategies to convert dead stock into cash.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">06</div>
              <h3 className="text-xl font-bold text-white mb-3">Perpetual Stock Auditing & Cycle Counting</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We establish daily perpetual cycle counting procedures so your warehouse team verifies a subset of SKUs every morning, maintaining 98%+ inventory accuracy without shutting down operations for annual audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Who this is for */}
      <section className="py-20 border-b border-gray-900 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block mb-2">Target Profile</span>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">Who this is for</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Designed for stockists, wholesale distributors, retail chain operators, and manufacturing business owners holding significant capital in physical stock across India.
              </p>
              <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                <h3 className="text-brand-400 font-bold mb-2">Typical Business Profile:</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Stock Value: ₹20 Lakh to ₹10 Crore
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    SKU Count: 100 to 10,000 active SKUs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Sectors: Wholesale trade, FMCG distribution, auto spare parts, electrical goods, manufacturing raw material warehouses
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Boxes className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">High-SKU Distributors</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Wholesalers managing thousands of spare parts or product variants struggling with stock mismatch between physical bins and computer registers.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <ShieldCheck className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Stockout-Prone Businesses</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Retailers and traders losing revenue because high-demand items run out unexpected while slow-selling items occupy prime rack space.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <RefreshCcw className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Manufacturing Raw Stock</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Factory owners who experience assembly line halts due to missing sub-components or unmonitored raw material stock levels.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Layers className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Multi-Godown Enterprises</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Companies operating multiple godowns across Tamil Nadu or South India needing central visibility over inter-godown transfers and stock holding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How it works */}
      <section className="py-20 border-b border-gray-900 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block mb-2">Methodology</span>
            <h2 className="font-heading text-3xl font-bold text-white">How it works</h2>
            <p className="text-gray-400 mt-2">
              Our inventory management consulting engagement is delivered in 4 practical implementation phases over 6 to 8 weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 1-2</span>
              <h3 className="text-xl font-bold text-white mb-3">1. Physical Stock Audit & ABC Matrix</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We audit physical inventory, reconcile discrepancies with Tally ledgers, and build your ABC/XYZ stock matrix based on historical sales velocity.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 3-4</span>
              <h3 className="text-xl font-bold text-white mb-3">2. Safety Stock & Reorder Rules</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We formulate reorder points (ROP) and safety stock levels for all Class A/B items and configure automated reorder notifications for purchase staff.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 5-6</span>
              <h3 className="text-xl font-bold text-white mb-3">3. Bin Layout & Mobile Barcode Setup</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We re-label warehouse bin locations, deploy smartphone barcode/QR scanning for GRN and dispatch, and train warehouse staff.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Ongoing</span>
              <h3 className="text-xl font-bold text-white mb-3">4. Cycle Counting & Dead Stock Clearance</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We establish daily cycle counting protocols and execute quarterly dead stock liquidation campaigns to keep inventory lean and liquid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What results to expect */}
      <section className="py-20 border-b border-gray-900 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block mb-2">Outcomes</span>
            <h2 className="font-heading text-3xl font-bold text-white">What results to expect</h2>
            <p className="text-gray-400 mt-2">
              Honest, measurable warehouse productivity and stock holding cost improvements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-brand-500" />
                Measurable Impact Areas
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>20-30% Reduction in Holding Costs:</strong> Unlock capital locked in excess inventory and eliminate warehouse space clutter.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>98%+ Inventory Accuracy:</strong> Real-time barcode scanning eliminates stock mismatches between physical racks and accounting books.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Near-Zero Fast-Mover Stockouts:</strong> Automated reorder point alerts ensure top-selling items are reordered well in advance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Faster Order Picking:</strong> Optimized rack layouts and bin codes reduce customer dispatch turnaround times by up to 40%.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-2">Real-World Case Example</span>
                <h3 className="text-xl font-bold text-white mb-4">Client Impact Highlight</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  By implementing ABC inventory classification and barcode scanning, a Chennai electrical goods distributor unlocked liquid capital trapped in slow-moving stock while drastically reducing fulfillment delays.
                </p>
                <div className="p-4 bg-black/60 rounded border border-gray-800 text-xs text-brand-300 font-mono">
                  [ANAND: add a real example here of inventory holding cost reduction for a distributor or manufacturer]
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-950 p-6 rounded-lg border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block">Recommended Reading</span>
              <h4 className="text-white font-bold text-base mt-1">Strategies to Reduce Inventory Holding Costs in Small Indian Businesses</h4>
            </div>
            <Link 
              to="/blog/reduce-inventory-costs-small-business-india" 
              className="text-brand-400 hover:text-white font-bold text-sm flex items-center gap-1.5 whitespace-nowrap"
            >
              Read Article <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Frequently Asked Questions */}
      <section className="py-20 border-b border-gray-900 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block mb-2">FAQ</span>
            <h2 className="font-heading text-3xl font-bold text-white">Frequently asked questions</h2>
            <p className="text-gray-400 mt-2">
              Common questions Indian business owners ask about inventory management consulting.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl">
            {pageFaqSchema.mainEntity.map((item, idx) => (
              <div key={idx} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-lg font-bold text-white mb-2 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                  {item.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-8">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-gray-950 via-black to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to streamline your warehouse and cut inventory holding costs?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base">
            Book a free 1-on-1 strategic consultation with Anand Rengasamy. We will assess your stock levels and build a tailored inventory optimization plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-4 rounded-lg transition duration-300 shadow-[0_0_20px_rgba(2,132,199,0.4)] text-sm uppercase tracking-wide flex items-center gap-2"
            >
              Schedule Consultation <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-800 font-semibold px-6 py-4 rounded-lg transition text-sm"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
