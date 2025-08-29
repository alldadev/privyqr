/**
 * IndexNow Submission Script for PrivyQR
 * Submits URLs to Bing, Yandex, Seznam, and other IndexNow-compatible search engines
 */

const urls = [
  // Main Pages
  'https://privyqr.com',
  
  // Scanner Pages
  'https://privyqr.com/scan-from-image',
  'https://privyqr.com/scan-from-screenshot',
  'https://privyqr.com/scan-from-pdf',
  
  // Blog Posts
  'https://privyqr.com/blog',
  'https://privyqr.com/blog/qr-code-security-guide',
  'https://privyqr.com/blog/scan-qr-from-screenshot',
  'https://privyqr.com/blog/extract-qr-from-pdf',
  'https://privyqr.com/blog/wifi-qr-codes-guide',
  'https://privyqr.com/blog/qr-code-business-cards',
  'https://privyqr.com/blog/event-qr-codes',
  'https://privyqr.com/blog/restaurant-menu-qr-codes',
  'https://privyqr.com/blog/qr-codes-in-education',
  
  // Info Pages
  'https://privyqr.com/about',
  'https://privyqr.com/faq',
  'https://privyqr.com/contact',
  'https://privyqr.com/privacy',
  'https://privyqr.com/terms'
];

// Generate a unique key for IndexNow (you can also use an existing one)
const key = 'ef6d0af2e7384affb7353a1dd493891c'; // Your IndexNow key
const keyLocation = 'https://privyqr.com/ef6d0af2e7384affb7353a1dd493891c.txt';

async function submitToIndexNow() {
  const endpoints = [
    'https://www.bing.com/indexnow',
    'https://yandex.com/indexnow',
    'https://www.seznam.cz/indexnow',
    'https://api.yep.com/indexnow'
  ];
  
  const payload = {
    host: 'privyqr.com',
    key: key,
    keyLocation: keyLocation,
    urlList: urls
  };
  
  console.log('🚀 Submitting PrivyQR URLs to IndexNow...\n');
  console.log(`📋 URLs to submit: ${urls.length}`);
  console.log('🌐 Search engines: Bing, Yandex, Seznam, Yep\n');
  
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      
      const engineName = endpoint.includes('bing') ? 'Bing' :
                        endpoint.includes('yandex') ? 'Yandex' :
                        endpoint.includes('seznam') ? 'Seznam' :
                        endpoint.includes('yep') ? 'Yep' : 'Unknown';
      
      if (response.ok || response.status === 200 || response.status === 202) {
        console.log(`✅ ${engineName}: Successfully submitted`);
      } else {
        console.log(`⚠️ ${engineName}: Status ${response.status}`);
      }
    } catch (error) {
      console.log(`❌ Error submitting to ${endpoint}:`, error.message);
    }
  }
  
  console.log('\n✨ IndexNow submission complete!');
  console.log('📊 URLs will be indexed within 24-48 hours');
  console.log('💡 Tip: Add the IndexNow key file to your public folder for verification');
}

// Run the submission
submitToIndexNow().catch(console.error);