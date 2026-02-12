# Notion CRM Database Setup for Lead Magnet

## Database Structure

### Create New Database in Notion
1. Open Notion
2. Click "+" → Database → Table
3. Name it: "Lead Magnet - Hormone Health Guide"

---

## Properties (Columns) to Create

### 1. Name
- **Type:** Title
- **Description:** Contact's first name
- Auto-created (default)

### 2. Email
- **Type:** Email
- **Description:** Primary contact email
- **Click:** Add property → Email

### 3. Phone
- **Type:** Phone number
- **Description:** Contact phone (optional)
- **Click:** Add property → Phone number

### 4. Health Goal
- **Type:** Select
- **Description:** Primary hormone health goal
- **Options to add:**
  - Balance hormones naturally
  - Improve energy levels
  - Better sleep quality
  - Weight management
  - Stress reduction
  - Fertility support
  - Other
- **Colors:** Assign different colors to each option

### 5. Submitted Date
- **Type:** Created time
- **Description:** When they submitted the form
- **Click:** Add property → Created time

### 6. Source
- **Type:** Select
- **Description:** Where the lead came from
- **Default Options:**
  - Website Lead Magnet
  - Quiz
  - Social Media
  - Referral
  - Other

### 7. Status
- **Type:** Status
- **Description:** Lead qualification status
- **Default Options:**
  - New Lead (default)
  - Contacted
  - Qualified
  - Customer
  - Not Interested
- **Colors:**
  - New Lead: Blue
  - Contacted: Yellow
  - Qualified: Purple
  - Customer: Green
  - Not Interested: Gray

### 8. Follow-up Date
- **Type:** Date
- **Description:** When to follow up
- **Click:** Add property → Date
- **Enable:** Reminder notifications

### 9. Notes
- **Type:** Text
- **Description:** Additional information about the lead
- **Click:** Add property → Text

### 10. Last Contact
- **Type:** Last edited time
- **Description:** When you last updated this record
- **Click:** Add property → Last edited time

### 11. Tags
- **Type:** Multi-select
- **Description:** Additional categorization
- **Suggested Tags:**
  - Hot Lead
  - Needs Follow-up
  - Interested in Consultation
  - Newsletter Subscriber
  - High Value

---

## Database Views

### View 1: All Leads (Default Table View)
- Show all properties
- Sort by: Submitted Date (Newest first)
- Filter: None

### View 2: New Leads (Board View)
- Group by: Status
- Filter: Status is "New Lead"
- Sort by: Submitted Date (Newest first)

### View 3: Follow-ups Needed (Calendar View)
- Calendar by: Follow-up Date
- Filter: Status is not "Customer" or "Not Interested"
- Show: Name, Email, Health Goal

### View 4: By Health Goal (Table View)
- Group by: Health Goal
- Sort by: Submitted Date (Newest first)
- Filter: Status is "New Lead" or "Contacted"

---

## Automation Setup (Notion AI/Buttons)

### Button 1: Mark as Contacted
Create a button that:
- Changes Status to "Contacted"
- Sets Follow-up Date to 3 days from now
- Adds timestamp to Notes

**Button Formula:**
```
prop("Status", "Contacted")
prop("Follow-up Date", dateAdd(now(), 3, "days"))
prop("Notes", prop("Notes") + "\n📞 Contacted on " + formatDate(now(), "MMM DD, YYYY"))
```

### Button 2: Schedule Follow-up
Create a button that:
- Opens a dialog to select follow-up date
- Adds "Needs Follow-up" tag

---

## Templates for Common Actions

### Template 1: Initial Outreach Email
```
Subject: Your Hormone Health Guide + Quick Question

Hi {{Name}},

Thanks for downloading the Hormone Health Guide! I hope you're finding it valuable.

I noticed you mentioned {{Health Goal}} as your primary focus. I'd love to learn more about your specific situation and see if I can point you toward additional resources.

Would you be open to a quick 15-minute call this week?

[Your Calendar Link]

Best,
[Your Name]
```

### Template 2: Follow-up Email (No Response)
```
Subject: Did you get a chance to read the guide?

Hi {{Name}},

Just checking in! I sent over the Hormone Health Guide a few days ago.

Have you had a chance to review it? Any questions I can answer?

I'm here to help!

Best,
[Your Name]
```

---

## Dashboard View (Optional)

Create a dashboard page with:
1. **Total Leads Counter:**
   - Formula: `count(all())`

2. **New Leads This Week:**
   - Filter: Submitted Date is within this week

3. **Follow-ups Due Today:**
   - Filter: Follow-up Date is today

4. **Conversion Rate:**
   - Formula: `(Customers / Total Leads) × 100`

5. **Most Popular Health Goal:**
   - Chart: Group by Health Goal, count entries

---

## Quick Setup Checklist

- [ ] Create new Notion database
- [ ] Add all 11 properties listed above
- [ ] Set up 4 database views
- [ ] Create action buttons (optional)
- [ ] Set up reminder notifications for Follow-up Date
- [ ] Create email templates page
- [ ] Connect to Tally form integration
- [ ] Test submission flow
- [ ] Set up daily/weekly review routine

---

## Tally Field Mapping Reference

When connecting Tally to this Notion database:

| Tally Field | Notion Property | Notes |
|-------------|-----------------|-------|
| name        | Name            | Required |
| email       | Email           | Required |
| phone       | Phone           | Optional |
| health_goal | Health Goal     | Auto-populated |
| (hidden)    | Source          | Set to "Website Lead Magnet" |
| (auto)      | Submitted Date  | Auto-generated by Notion |
| (manual)    | Status          | Default to "New Lead" |

---

## Best Practices

### Daily Routine (5 minutes)
1. Check "New Leads" view
2. Follow up with leads within 24 hours
3. Update Status as you contact people
4. Set Follow-up Dates for future touchpoints

### Weekly Review (15 minutes)
1. Review all leads by Health Goal
2. Identify patterns in common goals
3. Update Notes with any insights
4. Clean up stale leads (mark as "Not Interested" if no response after 3 attempts)

### Monthly Analysis
1. Export to CSV for deeper analysis
2. Calculate conversion rates
3. Identify which health goals convert best
4. Optimize lead magnet content based on data

---

## Mobile Access

Download Notion mobile app for:
- Quick status updates on the go
- Set reminders for follow-ups
- Add notes after phone calls
- Check new leads anywhere

---

## Integration Ideas (Future)

Once you're ready to level up:

1. **Zapier/Make.com:**
   - Auto-send welcome email with PDF
   - Add to email marketing list
   - Create calendar events for follow-ups

2. **Email Marketing:**
   - Sync to Mailchimp/ConvertKit
   - Segment by Health Goal
   - Automated drip campaigns

3. **CRM Upgrade:**
   - Export to HubSpot/Pipedrive when ready
   - Keep Notion as backup database

---

## Cost: $0 (Free Forever)

Notion's free plan includes:
- Unlimited blocks
- Unlimited databases
- Basic integrations
- Mobile apps

Upgrade to Notion Plus ($10/month) only if you need:
- Unlimited file uploads
- Advanced permissions
- Version history

---

**Setup Time:** 10-15 minutes
**Maintenance:** 5 minutes/day
**Skills Required:** None (just point and click)
