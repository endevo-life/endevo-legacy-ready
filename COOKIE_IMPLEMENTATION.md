# Cookie Policy & Consent Banner Implementation

## 📋 Overview

This implementation provides a comprehensive, GDPR/CCPA-compliant cookie consent system for endevo.life with granular user controls and consent-aware analytics.

## 🎯 Features

✅ **Full GDPR/CCPA Compliance**
- Explicit consent before non-essential cookies
- Granular category controls
- Easy opt-out mechanisms
- Persistent preference storage

✅ **User-Friendly Interface**
- Modal cookie banner on first visit
- Dedicated cookie settings page
- Simple or detailed view options
- Mobile-responsive design

✅ **Privacy-Focused**
- Analytics disabled by default
- Google Analytics with IP anonymization
- Consent Mode v2 integration
- "Do Not Track" respect

✅ **Developer-Friendly**
- Type-safe analytics wrapper
- Automatic consent checking
- Easy-to-use tracking functions
- No external dependencies (except React)

## 📁 File Structure

```
src/
├── components/
│   ├── CookieBanner.tsx          # Main consent banner modal
│   └── Footer.tsx                # Updated with cookie settings link
├── pages/
│   ├── CookiePolicy.tsx          # Comprehensive cookie policy page
│   └── CookieSettings.tsx        # User preference management page
├── lib/
│   └── analytics.ts              # Consent-aware analytics utilities
└── App.tsx                       # Updated with routes and initialization

index.html                        # Updated with Consent Mode v2
```

## 🚀 How It Works

### 1. Cookie Banner (`CookieBanner.tsx`)

Shows automatically on first visit with options:
- **Accept All**: Enable all cookie categories
- **Reject Non-Essential**: Only strictly necessary cookies
- **Customize Settings**: Choose specific categories

```tsx
<CookieBanner />
```

### 2. Cookie Categories

| Category | Description | Required | Default |
|----------|-------------|----------|---------|
| **Strictly Necessary** | Security, authentication, session management | ✅ Yes | ✅ Always On |
| **Functional** | Preferences, language, theme, accessibility | ❌ No | ❌ Off |
| **Analytics** | Google Analytics, error tracking, performance | ❌ No | ❌ Off |
| **Marketing** | Ads, retargeting, social media pixels | ❌ No | ❌ Off |

### 3. Analytics Wrapper (`analytics.ts`)

All tracking functions respect user consent:

```typescript
import { trackPageView, trackEvent, trackButtonClick } from '@/lib/analytics';

// Automatically checks consent before tracking
trackPageView('/solutions');
trackEvent('Button', 'Click', 'Sign Up CTA');
trackButtonClick('Get Started', 'Hero Section');
```

### 4. Cookie Settings Page

Users can change preferences anytime at:
- `/cookie-settings`
- `/legal/cookie-settings`
- Footer link: "Cookie Settings"

## 🔧 Configuration

### Google Analytics

Already configured in `index.html` with:
- Consent Mode v2
- IP anonymization
- Secure cookies
- Default consent: DENIED (updated based on user choice)

```javascript
gtag('consent', 'default', {
  'analytics_storage': 'denied',  // Updated on user consent
  'ad_storage': 'denied',
  'functionality_storage': 'denied',
  'personalization_storage': 'denied',
  'security_storage': 'granted'  // Always granted
});
```

### Adding New Tracking Services

Update `CookieBanner.tsx` `initializeTrackingServices()`:

```typescript
const initializeTrackingServices = (prefs: CookiePreferences) => {
  // Your custom service
  if (prefs.marketing) {
    // Initialize marketing tool
    initializeYourMarketingTool();
  }
};
```

## 📊 Data Storage

Preferences are stored in `localStorage`:

```javascript
{
  "endevo_cookie_consent": "true",
  "endevo_cookie_preferences": {
    "strictlyNecessary": true,
    "functional": true,
    "analytics": false,
    "marketing": false
  },
  "endevo_cookie_consent_date": "2026-02-12T10:30:00.000Z"
}
```

## 🎨 Customization

### Update Brand Colors

The banner uses Tailwind classes. Update in `CookieBanner.tsx`:
- `brand-orange` → Primary action color
- `brand-teal` → Info/secondary color
- `brand-navy` → Headers/text

### Update Cookie Policy Content

Edit `src/pages/CookiePolicy.tsx` to match your:
- Company name
- Contact information
- Specific tracking services
- Legal requirements

## 🧪 Testing

### Test Cookie Banner

1. Clear localStorage: `localStorage.clear()`
2. Refresh page
3. Banner should appear after 1 second
4. Test all three options (Accept/Reject/Customize)

### Test Analytics

```javascript
// Check if tracking works
import { trackEvent } from '@/lib/analytics';

trackEvent('Test', 'Button Click', 'Test Label');

// Check console/network tab for gtag requests
// Should only fire if analytics cookies are accepted
```

### Test Consent Mode

```javascript
// Check consent state in browser console
gtag('consent', 'get')
```

## 📱 Mobile Optimization

- Fully responsive design
- Touch-friendly buttons
- Slide-up animation on mobile
- Optimized for small screens

## ♿ Accessibility

- Keyboard navigation support
- Screen reader friendly
- ARIA labels on interactive elements
- High contrast text
- Focus indicators

## 🔒 Security

- No sensitive data in cookies
- Secure flag on cookies (HTTPS)
- SameSite=None for cross-site compatibility
- XSS protection

## 📚 Legal Compliance

### GDPR (EU/UK)
✅ Explicit consent required
✅ Granular controls
✅ Easy opt-out
✅ Data subject rights

### CCPA (California)
✅ Opt-out option
✅ Clear disclosure
✅ "Do Not Sell" support

### Other Jurisdictions
✅ Cookie policy available
✅ User controls provided
✅ Transparent practices

## 🆘 Troubleshooting

### Banner doesn't appear
- Check localStorage for `endevo_cookie_consent`
- Clear cache and cookies
- Check browser console for errors

### Analytics not tracking
- Verify user accepted analytics cookies
- Check `localStorage.getItem('endevo_cookie_preferences')`
- Verify Google Analytics ID is correct
- Check browser network tab for gtag requests

### Styles look broken
- Ensure Tailwind CSS is properly configured
- Check for CSS conflicts
- Verify Lucide React icons are installed

## 📞 Support

For questions about implementation:
- Email: hello@endevo.life
- Phone: 484-545-4327

## 📝 License

This implementation is part of the ENDevo project and follows the project's licensing terms.

---

**Last Updated:** February 12, 2026
**Version:** 1.0.0
**Compliance:** GDPR, CCPA, ePrivacy Directive
