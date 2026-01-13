export function initAds() {
    try {
        const adSlots = document.querySelectorAll('.adsbygoogle');
        if (adSlots.length > 0) {
            adSlots.forEach(slot => {
                // Prevent double injection if ad is already loaded
                if (!slot.getAttribute('data-adsbygoogle-status')) {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                }
            });
        }
    } catch (e) {
        console.error('AdSense error:', e);
    }
}
