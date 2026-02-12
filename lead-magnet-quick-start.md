# Lead Magnet Quick Start Guide
## Get Your PDF Download System Running in 30 Minutes

---

## 🎯 What You're Building

A simple system where visitors can:
1. Fill out a short form
2. Get instant PDF download
3. Their info automatically saves to your Notion CRM

---

## ⏱️ 30-Minute Implementation

### Minutes 0-10: Notion Setup

1. **Create Notion Database** (3 min)
   - Open Notion
   - Click "+" → Database → Table
   - Name: "Lead Magnet - Hormone Health Guide"

2. **Add These Columns** (7 min)
   - Name (Title) - already there
   - Email (Email type)
   - Phone (Phone number type)
   - Health Goal (Select type)
   - Submitted Date (Created time type)
   - Status (Status type) - set default to "New Lead"

   ✅ **Checkpoint:** You should see a table with 6 columns

---

### Minutes 10-15: Upload Your PDF

**Option A: Google Drive** (Recommended)
1. Go to drive.google.com
2. Click "New" → File Upload
3. Upload your PDF
4. Right-click the file → Share
5. Change to "Anyone with the link"
6. Click "Copy link"
7. Modify the link:
   ```
   From: https://drive.google.com/file/d/ABC123XYZ/view
   To:   https://drive.google.com/uc?export=download&id=ABC123XYZ
   ```
8. Save this link - you'll need it!

**Option B: Dropbox**
1. Upload PDF to Dropbox
2. Click "Share" → "Create link"
3. Change `?dl=0` to `?dl=1` at the end
4. Save this link

✅ **Checkpoint:** Click your link in a new browser tab - PDF should download

---

### Minutes 15-25: Create Tally Form

1. **Sign Up** (2 min)
   - Go to tally.so
   - Click "Get started for free"
   - Sign up with Google

2. **Create Form** (8 min)
   - Click "Create form"
   - Choose "Start from scratch"

   **Add Welcome Screen:**
   - Title: "Get Your Free Hormone Health Guide"
   - Description: "Instant access to science-backed hormone health strategies."
   - Button: "Get My Free Guide"

   **Add Question 1:**
   - Type: Short text
   - Question: "What's your first name?"
   - Required: Yes

   **Add Question 2:**
   - Type: Email
   - Question: "Where should we send your guide?"
   - Required: Yes

   **Add Question 3 (Optional):**
   - Type: Multiple choice
   - Question: "What's your primary health goal?"
   - Options:
     - Balance hormones naturally
     - Improve energy levels
     - Better sleep quality
     - Weight management
     - Other

   **Add Thank You Screen:**
   - Title: "Success! Your Guide Is Ready"
   - Message: "Thanks! Download your guide below:"
   - Add Button:
     - Text: "📥 Download Your Guide Now"
     - Link: [PASTE YOUR PDF LINK FROM STEP 2]
     - Open in new tab: Yes

3. **Configure Settings** (2 min)
   - Click Settings (top right)
   - Under "Privacy", add:
     ```
     By submitting, you agree to receive health tips from Estus Health.
     Unsubscribe anytime.
     ```

✅ **Checkpoint:** Click "Preview" - form should work and PDF should download

---

### Minutes 25-30: Connect to Notion

1. **In Tally:** (3 min)
   - Click "Integrations" (left sidebar)
   - Click "Notion"
   - Click "Connect Notion"
   - Select your workspace
   - Select your "Lead Magnet" database

2. **Map Fields:** (2 min)
   - Form field "First name" → Notion "Name"
   - Form field "Email" → Notion "Email"
   - Form field "Health goal" → Notion "Health Goal"
   - Click "Save"

3. **Test It!** (2 min)
   - Click "Share" in Tally
   - Copy the form link
   - Open in new browser tab
   - Fill out the form
   - Check Notion - new row should appear!

✅ **Checkpoint:** New submission appears in Notion database

---

## 🚀 Add to Your Website

### Copy This Code

```html
<!-- Add this where you want the form to appear -->
<div style="margin: 40px 0;">
  <button
    data-tally-open="YOUR-FORM-ID"
    data-tally-width="600"
    data-tally-emoji-text="📋"
    data-tally-emoji-animation="wave"
    style="
      background: #2563eb;
      color: white;
      padding: 16px 32px;
      font-size: 18px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
    ">
    Get Your Free Hormone Health Guide
  </button>
</div>

<!-- Add this before closing </body> tag -->
<script async src="https://tally.so/widgets/embed.js"></script>
```

### Get Your Form ID
1. In Tally, click "Share"
2. Look at the link: `https://tally.so/r/YOUR-FORM-ID`
3. Copy just the `YOUR-FORM-ID` part
4. Replace in the code above

---

## ✅ Pre-Launch Checklist

- [ ] Notion database created with all columns
- [ ] PDF uploaded and link works
- [ ] Tally form created and tested
- [ ] Tally connected to Notion
- [ ] Test submission appears in Notion
- [ ] Form button added to website
- [ ] Tested on mobile device
- [ ] Privacy policy link added

---

## 📊 Daily Management (5 minutes/day)

1. **Morning:**
   - Open Notion database
   - Check for new leads
   - Respond to new submissions within 24 hours

2. **Email Template:**
   ```
   Subject: Your Hormone Health Guide + Quick Question

   Hi [Name],

   Thanks for downloading the guide! I noticed you mentioned
   [Health Goal] - I'd love to hear more about what you're
   working on.

   Would you be open to a quick 15-minute call?

   [Your calendar link]

   Best,
   [Your name]
   ```

3. **Update Status:**
   - Change "New Lead" to "Contacted" after emailing
   - Add notes about their response

---

## 🎨 Customization Ideas

### Make It Match Your Brand
1. **In Tally Settings → Design:**
   - Choose your brand colors
   - Upload your logo
   - Select your font

2. **Button Styling:**
   - Change button color to match your website
   - Adjust padding/size
   - Add hover effects

### Add More Questions
- "How did you hear about us?"
- "What's your biggest hormone-related challenge?"
- "Are you interested in 1-on-1 coaching?"

---

## 🔥 Common Issues & Fixes

### "PDF Won't Download"
- Check Google Drive sharing is set to "Anyone with link"
- Make sure you converted the link to direct download format
- Try the link in incognito browser

### "Form Not Showing on Website"
- Make sure you added the `<script>` tag
- Check that YOUR-FORM-ID is correct
- Clear browser cache

### "Notion Not Updating"
- Re-connect Tally to Notion in integrations
- Check field mapping is correct
- Test with a new submission

### "Button Looks Wrong"
- Check CSS is in a `<style>` tag or inline
- Inspect element in browser dev tools
- Try the iframe embed instead

---

## 📈 Next Level (After You're Running)

### Week 2: Add Email Automation
- Set up Zapier to send automated welcome email
- Include PDF as attachment
- Add to email list (Mailchimp, ConvertKit)

### Week 3: Track Analytics
- Add Google Analytics event on form submit
- Track conversion rates
- Monitor which traffic sources convert best

### Week 4: Optimize
- A/B test different headlines
- Try different CTAs
- Add social proof ("Join 500+ others")

---

## 💰 Cost Breakdown

- **Notion:** $0 (free plan)
- **Tally:** $0 (free for 100+ responses/month)
- **Google Drive:** $0 (15GB free storage)
- **Total:** $0/month

**When to upgrade:**
- Tally Pro ($29/mo): 10,000+ responses, remove branding
- Notion Plus ($10/mo): Unlimited file uploads
- Not needed until you're getting 100+ leads/month

---

## 🆘 Need Help?

1. **Tally Help:** https://tally.so/help
2. **Notion Help:** https://notion.so/help
3. **Video Tutorial:** Search "Tally Notion integration tutorial" on YouTube

---

## 🎉 You're Done!

You now have:
- ✅ A professional lead capture form
- ✅ Automatic CRM database in Notion
- ✅ Instant PDF delivery
- ✅ Email list building system

**Time to launch:** Share your form link on social media, in your email signature, and on your website!

---

## Quick Reference Links

- **Tally Dashboard:** https://tally.so/dashboard
- **Notion Database:** [Bookmark your database page]
- **Form Link:** [Your tally.so/r/form-id]
- **PDF Link:** [Your Google Drive link]

---

**Next Steps:**
1. Test the entire flow one more time
2. Add form to your website
3. Share on social media
4. Check Notion daily for new leads
5. Follow up within 24 hours

**Pro Tip:** Set a daily calendar reminder to check Notion for new leads. Fastest response = highest conversion!
