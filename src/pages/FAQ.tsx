import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "General",
    question: "What is PrivyQR?",
    answer: "PrivyQR is a privacy-first QR code scanner that works entirely in your browser. Unlike traditional QR scanners, we don't upload your images to any server - all processing happens locally on your device."
  },
  {
    category: "General",
    question: "Is PrivyQR really free?",
    answer: "Yes! PrivyQR is completely free to use. Our core features will always remain free. We believe privacy and security tools should be accessible to everyone."
  },
  {
    category: "Privacy",
    question: "Do you store my scanned QR codes or images?",
    answer: "No, we never store your images or QR code data. All processing happens directly in your browser using JavaScript. Once you close the tab, all data is gone."
  },
  {
    category: "Privacy",
    question: "How can I verify you're not uploading my data?",
    answer: "You can open your browser's developer tools (F12) and check the Network tab. You'll see that no images or QR data are being sent to any server. All processing is done locally."
  },
  {
    category: "Privacy",
    question: "Do you use cookies or tracking?",
    answer: "We use minimal analytics to understand how our service is used, but we don't track individual users or store personal information. No login is required, and we don't use tracking cookies."
  },
  {
    category: "Technical",
    question: "What QR code formats do you support?",
    answer: "PrivyQR supports all standard QR code formats including URLs, text, WiFi credentials, contact information (vCard), email, SMS, phone numbers, and more."
  },
  {
    category: "Technical",
    question: "Can I scan QR codes from PDFs?",
    answer: "Yes! PrivyQR can extract and scan QR codes from PDF documents. Simply upload your PDF and we'll scan all pages for QR codes."
  },
  {
    category: "Technical",
    question: "What image formats are supported?",
    answer: "We support all common image formats including JPG, PNG, GIF, BMP, and WebP. You can also paste images directly from your clipboard."
  },
  {
    category: "Technical",
    question: "Is there a file size limit?",
    answer: "We recommend images under 10MB for best performance, but since processing happens in your browser, the limit depends on your device's capabilities."
  },
  {
    category: "Technical",
    question: "Why can't it read my QR code?",
    answer: "Make sure the QR code is clear and not blurry. The code should be fully visible without any obstructions. If it's still not working, try taking a photo with better lighting or from a different angle."
  },
  {
    category: "Features",
    question: "Can I scan multiple QR codes at once?",
    answer: "Yes! You can upload multiple images or a PDF with multiple pages, and PrivyQR will scan all QR codes found in them."
  },
  {
    category: "Features",
    question: "Does PrivyQR work offline?",
    answer: "Once the page is loaded, PrivyQR can scan QR codes without an internet connection. However, you'll need internet to visit links found in QR codes."
  },
  {
    category: "Features",
    question: "Can I use my webcam to scan QR codes?",
    answer: "Yes! Click the camera icon to use your device's camera for real-time QR code scanning. Your browser will ask for camera permission."
  },
  {
    category: "Security",
    question: "Is it safe to scan unknown QR codes?",
    answer: "PrivyQR shows you the content of QR codes before you take any action. Always review URLs before visiting them, and be cautious with QR codes from unknown sources."
  },
  {
    category: "Security",
    question: "How do you handle malicious QR codes?",
    answer: "We display the full content of QR codes so you can review them before taking action. We also provide warnings for shortened URLs and suspicious patterns."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const categories = [...new Set(faqs.map(faq => faq.category))];

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <Layout>
      <Helmet>
        <title>Frequently Asked Questions - PrivyQR</title>
        <meta name="description" content="Common questions about PrivyQR's privacy-first QR code scanner. Learn about our security, features, and how we protect your data." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Everything you need to know about PrivyQR
          </p>

          {categories.map(category => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">{category}</h2>
              <div className="space-y-4">
                {faqs
                  .filter(faq => faq.category === category)
                  .map((faq) => {
                    const globalIndex = faqs.indexOf(faq);
                    const isOpen = openItems.has(globalIndex);
                    return (
                      <div
                        key={globalIndex}
                        className="bg-card rounded-lg border"
                      >
                        <button
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                          onClick={() => toggleItem(globalIndex)}
                        >
                          <span className="font-semibold pr-4">{faq.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}

          <div className="mt-12 text-center bg-card rounded-lg p-8 border">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              We're here to help! Reach out to us anytime.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}