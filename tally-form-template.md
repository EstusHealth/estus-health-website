# Tally Form Template - Lead Magnet Setup

## Form Configuration

### Step 1: Create New Form in Tally
Go to [tally.so](https://tally.so) → New Form → Start from Scratch

---

## Form Structure

### Welcome Screen
**Title:** "Get Your Free Hormone Health Guide"
**Description:**
```
Discover science-backed strategies to optimize your hormone health naturally.

✓ Evidence-based recommendations
✓ Practical action steps
✓ Instant PDF download

Takes less than 1 minute to get your guide.
```

**Button Text:** "Get My Free Guide"

---

### Question 1: Name
- **Type:** Short text
- **Question:** "What's your first name?"
- **Placeholder:** "Enter your name"
- **Required:** Yes
- **Variable name:** `name`

---

### Question 2: Email
- **Type:** Email
- **Question:** "Where should we send your guide?"
- **Placeholder:** "your@email.com"
- **Required:** Yes
- **Validation:** Email format
- **Variable name:** `email`

---

### Question 3: Phone (Optional)
- **Type:** Phone number
- **Question:** "Phone number (optional - for exclusive health tips via text)"
- **Placeholder:** "(555) 123-4567"
- **Required:** No
- **Variable name:** `phone`

---

### Question 4: Primary Health Goal (Optional but Recommended)
- **Type:** Multiple choice (single select)
- **Question:** "What's your primary hormone health goal?"
- **Options:**
  - Balance hormones naturally
  - Improve energy levels
  - Better sleep quality
  - Weight management
  - Stress reduction
  - Fertility support
  - Other
- **Required:** No
- **Variable name:** `health_goal`

---

### Thank You Screen
**Title:** "🎉 Success! Your Guide Is Ready"

**Message:**
```
Thanks {{name}}!

Your Hormone Health Guide has been sent to {{email}}.

⬇️ You can also download it instantly below:
```

**Add Button:**
- **Button Text:** "📥 Download Your Guide Now"
- **Link:** `[YOUR-PDF-GOOGLE-DRIVE-LINK-HERE]`
- **Open in:** New tab

**Additional Text:**
```
📧 Check your inbox (and spam folder) for your guide.

Want personalized support? Book a free 15-minute consultation:
[ADD YOUR CALENDAR LINK]
```

---

## Settings to Configure

### General Settings
- **Form Name:** "Hormone Health Guide - Lead Magnet"
- **Auto-save:** Enabled
- **Progress bar:** Hide (it's a short form)

### Design Settings
- **Theme:** Choose a clean, professional theme
- **Primary Color:** Match your brand (suggest: calming blue/green)
- **Font:** Sans-serif (Inter or System)
- **Layout:** Card style

### Privacy & Compliance
- ✅ Add GDPR compliance text:
  ```
  By submitting this form, you agree to receive health tips and updates from Estus Health.
  Unsubscribe anytime. View our Privacy Policy.
  ```
- **Privacy Policy Link:** [Add your privacy policy URL]

### Notifications
- **Email notifications:** Enable
- **Send to:** Your admin email
- **Subject:** "New lead: {{name}} downloaded Hormone Guide"

---

## Notion Integration Setup

### Connect to Notion
1. In Tally: Settings → Integrations → Notion
2. Click "Connect Notion"
3. Select your Notion workspace
4. Select your CRM database

### Field Mapping
Map Tally fields to Notion properties:

| Tally Field | → | Notion Property |
|-------------|---|-----------------|
| name        | → | Name            |
| email       | → | Email           |
| phone       | → | Phone           |
| health_goal | → | Health Goal     |
| (auto)      | → | Submitted Date  |
| (auto)      | → | Source          | (set to "Website Lead Magnet")

---

## Embed Code for Your Website

### Option 1: Popup (Recommended)
```html
<!-- Add this button to your page -->
<button
  data-tally-open="YOUR-FORM-ID"
  data-tally-width="600"
  data-tally-emoji-text="📋"
  data-tally-emoji-animation="wave"
  class="cta-button">
  Get Your Free Guide
</button>

<!-- Add this script before </body> -->
<script async src="https://tally.so/widgets/embed.js"></script>
```

### Option 2: Inline Embed
```html
<iframe
  src="https://tally.so/r/YOUR-FORM-ID"
  width="100%"
  height="600"
  frameborder="0"
  marginheight="0"
  marginwidth="0"
  title="Hormone Health Guide Download">
  Loading…
</iframe>
```

### Option 3: Full Page
```html
<!-- Add this to a dedicated landing page -->
<div style="width: 100%; height: 100vh;">
  <iframe
    src="https://tally.so/r/YOUR-FORM-ID"
    width="100%"
    height="100%"
    frameborder="0"
    marginheight="0"
    marginwidth="0"
    title="Hormone Health Guide Download">
  </iframe>
</div>
```

---

## PDF Hosting Setup

### Google Drive Method (Recommended)
1. Upload your PDF to Google Drive
2. Right-click → Share → "Anyone with the link"
3. Copy the link (looks like: `https://drive.google.com/file/d/XXXXX/view`)
4. Convert to direct download link:
   ```
   Original: https://drive.google.com/file/d/FILE_ID/view
   Direct Download: https://drive.google.com/uc?export=download&id=FILE_ID
   ```
5. Use the direct download link in your Thank You page button

### Alternative: Dropbox
1. Upload PDF to Dropbox
2. Get shareable link
3. Change `?dl=0` to `?dl=1` at the end
4. Use this link in your form

---

## Testing Checklist

Before going live, test:
- [ ] Form loads correctly
- [ ] All fields are working
- [ ] Email validation works
- [ ] Required fields are enforced
- [ ] Thank you page displays
- [ ] PDF download link works
- [ ] Notion integration creates new rows
- [ ] Mobile responsive design
- [ ] Email notifications arrive
- [ ] Privacy policy link works

---

## Next Steps After Setup

1. **Set up email automation** (optional but recommended)
   - Use Zapier or Make.com to send automated welcome email
   - Include PDF attachment in email
   - Add to email marketing list (Mailchimp, ConvertKit, etc.)

2. **Track conversions**
   - Add Google Analytics event tracking
   - Monitor Tally analytics dashboard
   - Track Notion database growth

3. **Optimize**
   - A/B test form copy
   - Test different CTAs
   - Monitor drop-off rates

---

## Quick Start Command

Replace these placeholders:
- `YOUR-FORM-ID`: Get from Tally after creating form
- `YOUR-PDF-GOOGLE-DRIVE-LINK-HERE`: Your hosted PDF link
- `[Add your privacy policy URL]`: Your privacy policy page
- `[ADD YOUR CALENDAR LINK]`: Your Calendly/booking link (optional)

---

## Support

If you need help:
1. Tally documentation: https://tally.so/help
2. Notion integration guide: https://tally.so/help/notion
3. Video tutorial: Search "Tally Notion integration" on YouTube

---

**Estimated Setup Time:** 20-30 minutes
**Cost:** $0 (Free tier handles 100+ submissions/month)
**Difficulty:** Easy (No coding required)
