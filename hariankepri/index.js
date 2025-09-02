// Random AdSense Code Generator
class RandomAdsManager {
    // Static variable untuk target element yang akan menampilkan iklan di bawahnya
    static AUTO_PLACEMENT_TARGET = '.td-header-template-wrap'; // Ganti dengan selector yang Anda inginkan

    constructor() {
        this.adsenseCodes = [
            `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3909176225498704"
             crossorigin="anonymous"></script>
             <!-- RESP -->
             <ins class="adsbygoogle"
                  style="display:block"
                  data-ad-client="ca-pub-3909176225498704"
                  data-ad-slot="1385408205"
                  data-ad-format="auto"
                  data-full-width-responsive="true"></ins>
             <script>
                  (adsbygoogle = window.adsbygoogle || []).push({});
             </script>`,

            `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1591851851720554"
             crossorigin="anonymous"></script>
             <!-- RESP -->
             <ins class="adsbygoogle"
                  style="display:block"
                  data-ad-client="ca-pub-1591851851720554"
                  data-ad-slot="1137996192"
                  data-ad-format="auto"
                  data-full-width-responsive="true"></ins>
             <script>
                  (adsbygoogle = window.adsbygoogle || []).push({});
             </script>`,

            `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4308755370658701"
             crossorigin="anonymous"></script>
             <!-- RESP -->
             <ins class="adsbygoogle"
                  style="display:block"
                  data-ad-client="ca-pub-4308755370658701"
                  data-ad-slot="2259506174"
                  data-ad-format="auto"
                  data-full-width-responsive="true"></ins>
             <script>
                  (adsbygoogle = window.adsbygoogle || []).push({});
             </script>`,

            `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4243210150400230"
             crossorigin="anonymous"></script>
             <!-- RESP -->
             <ins class="adsbygoogle"
                  style="display:block"
                  data-ad-client="ca-pub-4243210150400230"
                  data-ad-slot="3381016156"
                  data-ad-format="auto"
                  data-full-width-responsive="true"></ins>
             <script>
                  (adsbygoogle = window.adsbygoogle || []).push({});
             </script>`,

            `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1660374475204242"
             crossorigin="anonymous"></script>
             <!-- display ad -->
             <ins class="adsbygoogle"
                  style="display:block"
                  data-ad-client="ca-pub-1660374475204242"
                  data-ad-slot="3102514285"
                  data-ad-format="auto"
                  data-full-width-responsive="true"></ins>
             <script>
                  (adsbygoogle = window.adsbygoogle || []).push({});
             </script>`
        ];
    }

    // Function to get random adsense code
    getRandomAdsenseCode() {
        if (this.adsenseCodes.length === 0) {
            return "";
        }
        const randomIndex = Math.floor(Math.random() * this.adsenseCodes.length);
        return this.adsenseCodes[randomIndex];
    }

    // Function to display ad in specific element
    displayAdInElement(elementSelector) {
        const element = document.querySelector(elementSelector);
        if (!element) {
            console.error(`Element dengan selector "${elementSelector}" tidak ditemukan`);
            return false;
        }

        const randomAdCode = this.getRandomAdsenseCode();
        if (randomAdCode) {
            element.innerHTML = randomAdCode;
            console.log('Iklan berhasil ditampilkan');
            return true;
        } else {
            element.innerHTML = "Tidak ada kode iklan yang tersedia.";
            console.log('Tidak ada kode iklan yang tersedia');
            return false;
        }
    }

    // Function to display ad below specific element
    displayAdBelowElement(elementSelector) {
        const element = document.querySelector(elementSelector);
        if (!element) {
            console.error(`Element dengan selector "${elementSelector}" tidak ditemukan`);
            return false;
        }

        // Create ad container
        let adContainer = document.querySelector('#random-ad-container');
        if (!adContainer) {
            adContainer = document.createElement('div');
            adContainer.id = 'random-ad-container';
            adContainer.style.cssText = 'margin: 20px 0; text-align: center;';
        }

        const randomAdCode = this.getRandomAdsenseCode();
        if (randomAdCode) {
            adContainer.innerHTML = randomAdCode;
            
            // Insert after the target element
            element.insertAdjacentElement('afterend', adContainer);
            console.log('Iklan berhasil ditampilkan di bawah element');
            return true;
        } else {
            adContainer.innerHTML = "Tidak ada kode iklan yang tersedia.";
            element.insertAdjacentElement('afterend', adContainer);
            console.log('Tidak ada kode iklan yang tersedia');
            return false;
        }
    }

    // Auto initialize when DOM is ready
    init(elementSelector, placement = 'inside') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                if (placement === 'below') {
                    this.displayAdBelowElement(elementSelector);
                } else {
                    this.displayAdInElement(elementSelector);
                }
            });
        } else {
            if (placement === 'below') {
                this.displayAdBelowElement(elementSelector);
            } else {
                this.displayAdInElement(elementSelector);
            }
        }
    }
}

// Global instance
window.RandomAdsManager = new RandomAdsManager();

// Shorthand functions for easy use
window.showRandomAd = function(elementSelector) {
    return window.RandomAdsManager.displayAdInElement(elementSelector);
};

window.showRandomAdBelow = function(elementSelector) {
    return window.RandomAdsManager.displayAdBelowElement(elementSelector);
};

// Auto-start if element with class 'random-ad-placement' exists OR target element exists
document.addEventListener('DOMContentLoaded', function() {
    // Check for manual placement element
    const autoPlacementElement = document.querySelector('.random-ad-placement');
    if (autoPlacementElement) {
        window.RandomAdsManager.displayAdInElement('.random-ad-placement');
    }
    
    // Check for auto placement target element
    const targetElement = document.querySelector(RandomAdsManager.AUTO_PLACEMENT_TARGET);
    if (targetElement) {
        window.RandomAdsManager.displayAdBelowElement(RandomAdsManager.AUTO_PLACEMENT_TARGET);
        console.log(`Iklan otomatis ditampilkan di bawah element: ${RandomAdsManager.AUTO_PLACEMENT_TARGET}`);
    } else {
        console.log(`Element target "${RandomAdsManager.AUTO_PLACEMENT_TARGET}" tidak ditemukan untuk penempatan iklan otomatis`);
    }
});