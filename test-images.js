// Test script to verify all mailbox images are loading correctly
const https = require('https');
const http = require('http');

const mailboxImages = [
  {
    url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1993&q=80',
    title: 'Messi and Ronaldo Image'
  },
  {
    url: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Man Utd Image'
  },
  {
    url: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title: 'Premier League Stadium Image'
  },
  {
    url: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title: 'Champions League Image'
  }
];

function testImage(imageObj) {
  return new Promise((resolve) => {
    const url = new URL(imageObj.url);
    const client = url.protocol === 'https:' ? https : http;
    
    const req = client.request(url, (res) => {
      if (res.statusCode >= 200 && res.statusCode < 300) {
        console.log(`✅ ${imageObj.title}: OK (${res.statusCode})`);
        resolve(true);
      } else {
        console.log(`❌ ${imageObj.title}: Failed (${res.statusCode})`);
        resolve(false);
      }
    });
    
    req.on('error', (err) => {
      console.log(`❌ ${imageObj.title}: Error - ${err.message}`);
      resolve(false);
    });
    
    req.setTimeout(10000, () => {
      console.log(`⏰ ${imageObj.title}: Timeout`);
      req.destroy();
      resolve(false);
    });
    
    req.end();
  });
}

async function testAllImages() {
  console.log('🔍 Testing mailbox images...\n');
  
  const results = await Promise.all(mailboxImages.map(testImage));
  const successCount = results.filter(Boolean).length;
  
  console.log(`\n📊 Results: ${successCount}/${mailboxImages.length} images loaded successfully`);
  
  if (successCount === mailboxImages.length) {
    console.log('🎉 All images are working correctly!');
  } else {
    console.log('⚠️  Some images may need to be replaced.');
  }
}

testAllImages();
