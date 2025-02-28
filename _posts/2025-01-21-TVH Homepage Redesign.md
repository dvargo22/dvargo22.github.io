---
layout: post
title: TVH Homepage Redesign
date: 21-01-2025
categories: [UX writing]
tag: [case study, UX writing, microcopy]
---

## Background
TVH is a global B2B distributor of industrial and agricultural machinery spare parts. Their customer base comprises parts resellers, dealerships, repair shops, wholesalers, and other small- to mid-sized businesses. But TVH is more than just a parts seller; they offer repair services, technical training, fleet management, consulting, and other services that help customers grow their businesses. 

Although TVH positions itself more as a "business partner" than a "parts seller," 92% of customers listed finding a part as the top reason for visiting the TVH member's website. Despite this fact, they often complained that it was diffuclt to find parts on the webiste:
![homepage hero before](/imgs/tvh-ux-writing/homepage-hero-pre-2-0_orig.jpg)
*This was the old homepage hero section. New users found the parts-finding "products"—MyPartsFinder, MyProductSearch, and MyMachines—unintuitive: they had no idea what those terms signified. For experienced users, these products failed the recognition vs. recall test: users needed to actively recall the specific use case for each parts-finding product. If you buy parts infrequently, this is a problem. Another source of friction was that the search bar was located above the navigation bar, completely separated from the three other parts-finding products, which gave some users the sense that the only way to find parts was to use the search bar.*

As part of an entire e-commerce platform redesign, my team was tasked with redesigning the homepage to reduce this friction and increase successful purchases. 

## Hypothesis

In the years leading up to the redesign, the company experimented with different content types and functionalities in the hero section of the homepage. First, they tried a carousel of marketing and editorial content. Engagement with content stagnated according to clickthrough and dwell time metrics, and worse, conversions (product purchases) decreased.
Following this approach, they added the three aforementioned parts-finding products (MyPartsFinder, MyProductSearch, and MyMachines) to the hero section, next to the marketing carousel. The cluttered design (see above screenshot) combined with the ambiguity of the parts-finding product names yielded even worse results. 
Based on these insights, we decided that instead of using the hero section to market products or services, we would only showcase the two best parts-finding methods (see "How TVH customers find parts" below). Our hypothesis was that prioritizing the main user goal—finding a part—would lead to more customer success and increase our customer's affinity for the TVH brand.
![Expedia example](/imgs/tvh-ux-writing/expedia_orig.jpg)
*On Expedia and similar websites, the search functionality takes precedence in the hero section. It places the primary user goal—finding a flight, car rental, hotel, etc.—above marketing.*

## Objective
Design a new homepage hero section that increases the speed and success rate of conversions and builds affinity for the TVH brand.

## My Role
​I wrote the microcopy for the headings, subheadings, search fields, dropdowns, and buttons. Before writing, I interviewed stakeholders and members of the conversion rate optimization (CRO) team. I also ideated with a product designer on the prototypes and collaborated with a UX researcher to conduct usability testing.  

## SMART Goal (The Design Objective)
When the business approved our plan, we set about defining our goals for the final product. We chose the SMART framework because it provides a concrete way to measure success and align the content with broader organizational goals.  
### SMART Goal:  
Increase the speed of customer success by 15% compared to the old website and decrease customer support tickets by 10%. Designated testing period, TBD in Q3 2023 (We did not conduct largescale testing to validate these metrics while I was an employee of TVH). ‘Speed’ is defined as the moment a customer arrives on the homepage to the moment a part is added to an offer, a list, or a cart. This will be accomplished by (A) displaying functional parts-finding products on the homepage rather than on distinct pages further in the user journey; (B) employing clear, engaging CTAs that anticipate users’ goals; and (C) leveraging information hierarchy to match user behavior, i.e., placing the “Search by part number” component above the “Search by make and model” component. In addition to increased speed, there should also be a decrease in customer inquiries related to finding parts. This will be accomplished through user-friendly microcopy and error messages.  
This goal aligns more broadly with the TVH brand tagline “TVH keeps you going.” By increasing the speed of finding a part, we save customers time that can be better spent on their own business-critical objectives.

## Constraints
The main constraint was that the product database and the underlying parts-finding functionalities could not be altered from a software development standpoint. We could only improve the experience of finding a part within the pre-existing system.

Additionally, our user testing was limited to virtual face-to-face interviews with long-time TVH customers. We had data from the CRO team on the previous homepage, but could not perform data-driven testing (A/B, heatmaps, etc.) until after the launch. The business plans to publish the MVP as the new homepage and then refine after gathering data.

Users come from all over the world, so the language had to be simple and easy to translate. The website is translated into several languages, but many users default to the English site. TVH operates three membership-based websites (platforms) based on a customer's region and market: IRMN, an AMER-based platform for industrial and material handling equipment; Bepco, an EMEA and APAC-based platform for agricultural equipment; and MyTotalSource, an EMEA and APAC-based platform for industrial and material handling equipment. Each platform operates slightly differently and uses different terminology. As a copywriter, I had to align stakeholders from all three platforms so that the three platforms can merge in the future. TVH's long-term goal is to become the “Amazon of replacement parts.”​

## Discovery
### How TVH Customers Find Parts  
1. Search using the part number  
If the customer knows the part number (or serial number) of the item they're looking for, they can enter it into a search bar. They must also know the 3-digit or 3-letter brand/make code that precedes the part number. This is the fastest and easiest way to find a part.  
2. Search using the make and model of the machine  
If a customer does not know the part number of the item they're looking for, they can instead search for the machine that the part belongs to and then apply filters to narrow it down to the correct part. This was formerly called "MyPartsFinder" (see screenshot above), though we decided to eliminate the product terminology. They can register machines under "MyMachines" to find parts in the future.

### Consensus
We concluded that we could improve the speed of customer success by designing the hero section in a way that asked a binary question:

Do you know your part number?  
If yes, use the part number search bar.  
If no, search for the make and model of the machine.  

### User Friction with the Previous Homepage Hero Section
New customers have expressed confusion about which parts-finding "product" to use: MyPartsFinder, MyProductFinder, MyMachines, or the search bar in the navigation. CRO noted that some users face "paralysis" upon reaching the homepage, probably because they don't know what each product means and which one best suits their needs. Further, the term "My" at the beginning of each product name made them difficult to scan.

#### Conclusions:
- Replace MyPartsFinder and MyProductFinder with functional, clearly-labeled search components.
- Arrange the parts-finding functions vertically rather than side-by-side. This will convey the information hierarchy intuitively and visually. In other words, if you can search using the part number, try that first. If that fails, try searching with the make and model of the machine.

### ​Terminology
#### *Machine*, not “vehicle” or "equipment."  
While American users preferred the term 'equipment', the majority of TVH customers are currently EMEA and APAC, and they prefer 'machine.' Moreover, the platform currently uses the term 'Machine,' so there would be a risk of causing confusion if we changed the term.

#### *Part number*, not "reference number."  
The current website uses the term “reference number,” and TVH catalogs also use this term. But user research and empirical data indicated that the term 'part number' is the preferred colloquial term. Further, TVH stakeholders wanted to showcase the website redesign with a change in voice; they wanted the voice to be more informal and sound like an expert shop employee, which they dubbed the "Passionate Craftsman." The downside to using "part number" is that some products are not "parts" per se, and so the term "reference number" may be a more broadly applicable term. 
​
*Make*, not "brand" or "manufacturer."
Customers were comfortable and familiar with this term and I saw no reason to change it. In addition, it's shorter than "manufacturer," which makes it more practical for developers. Additionally, because the term "make and model" is a commonly used collocation, it made sense to use the term "make" in all relevant contexts, rather than introducing a new term and potentially causing confusion.

## Prototypes and User Testing
### Divergence
In the first prototype, I used a Yes/No question to restrict the user from going down the wrong parts-finding path. The user would be directed to the correct parts-finding function based on their answer.
The designer thought this was overkill. More importantly, it would have required too much work from developers. This idea would have worked better for a parts-finding *app* but not a website.
![failed idea](/imgs/tvh-ux-writing/untitled-6_orig.png)
*An idea that was soon on the cutting room floor.*
![brainstorming](/imgs/tvh-ux-writing/untitled-7_orig.png)
*Brainstorming copy for headings, subheadings and CTA titles.*

## User Testing
After writing a few versions of the hero section copy and collaborating in Figma with the designer, I partnered with a UX researcher to interview five customers. In these interviews, we asked customers to complete a few tasks to gauge the success of each prototype. I noted moments of friction and asked customers about terminology, how they felt about the new design, and whether or not the preferred the new design to the old. We knew that OCs may prefer the old familiar website despite its flaws. We also knew that—because of their familiarity with the old platform—they might take more time to complete tasks on the prototypes.

### Testers
To ensure we got the most out of our limited budget for testing, we enlisted three long-time customers (OCs) who were very familiar with the old platform, and two new customers (NCs) who had never made a purchase on TVH.com. Each customer was asked to rate their typing ability and computer literacy on a scale of 1(not proficient) to 10 (completely fluent). Only one customer (OC2) rated themself below 6/10 on either scale. OC2 gave themself a 3/10 with typing and a 2/10 in computer literacy. This customer preferred to call their sales rep when ordering a part.

### Prototypes
​Below are screenshots showing two of the three prototypes we tested with users. 
![make-model-option-1](/imgs/tvh-ux-writing/make-model-option_orig.png)
*Although I would later modify the copy, the design above is the one our customers preferred.*

![search-by-make-and-model](/imgs/tvh-ux-writing/search-and-make-model-1_orig.png)
*This version is more similar to the current homepage. It still prioritizes the search bar as the primary parts-finding method, but users would need to go to a separate page to access the search by make and model function. Since our goal was to speed up customer success (finding a part), we didn’t think this was the best option. But we wanted to test it with long-time customers to see if they preferred this design*.
### User Tasks
While most of the usability testing was qualitative, we measured 3 tasks quantitatively. We compared the new prototype vs. the old (current website) on the following three tasks:  
**Task 1**: The user is given a part number for a forklift engine filter. The task is to find that part and add it to their cart.
**Task 2**: The user must find a replacement engine filter, but they don’t know the part number. We’ve told them the make and model of their machine, but nothing else.
**Task 3**: The user must purchase three parts that they’ve already purchased in the past. We tell the users the make and model of the machine and the parts they’re looking for, but do not give them the part numbers.

### Test Results
With the exception of the OC who self-reported low computer literacy and typing skills, each customer completed all 3 tasks faster with the new prototype. 


| User | New Prototype | Current Website | Improvement |
|------|------|------|------|
|NC1| 5 sec|8 sec|3 sec|
|NC2|6 sec|12 sec|6 sec|
|OC1|6 sec|11 sec|5 sec|
|OC2|13 sec|18 sec|5 sec|
|OC3|5 sec|10 sec|5 sec|


| User | New Prototype | Current Website | Improvement |
|------|------|------|------|
|NC1|31 sec|33 sec|2 sec|
|NC2|29 sec|Failed|NA|
|OC1|26 sec|25 sec|-1 sec|
|OC2|42 sec|35 sec|-7 sec|
|OC3|33 sec|37 sec|4 sec|


| User | New Prototype | Current Website | Improvement |
|------|------|------|------|
|NC1|16 sec|18 sec|2 sec|
|NC2|20 sec|20 sec|0 sec|
|OC1|21 sec|22 sec|1 sec|
|OC2|27 sec|21 sec|-6 sec|
|OC3|18 sec|25 sec|7 sec|

### Positive Feedback
Qualitatively, both the NCs and OCs preferred the new designs. Here are some takeaways from the positive feedback:
- Effective information hierarchy: the fastest/easiest parts-finding component (Search by part number) is above the second fastest (Search by make and model).
- Hint text within fields and dropdowns clearly explain the required actions.
- Button text is specific and concrete.
- New layout immediately addresses their main need: finding parts.

### Problems to Address
- Customers expressed that they don’t always know the make code for their part. Adding a dropdown with a list of possible make codes would solve this problem. 
- Non-native speakers weren't familiar with the term "No sweat." Also, it may be *too* informal.
- I wasn't satisfied with "Don't know your part number?" There are reasons to use "Search by make and model" other than not knowing your part number. We didn't want to pigeonhole this component into just one use case.
- I noticed that two of the five customers spent time rereading the sentence "Find all the parts we stock for your machine." They intuitively understood the heading “Search by make and model” but the subheading gave them pause. ‘Find’ doesn’t exactly describe how this search function works, nor can you find more than one item at a time, so the plural ‘parts’ was inaccurate too. Additionally, while some customers may want to browse all the parts we stock for a given machine, most customers want to find one specific part—they just don’t have the part number to quickly find it.  

To address this feedback, I rewrote the text to better align with the purpose of this search function — finding the machine that needs a replacement part, rather than finding the part itself.

## Final Deliverable
- I changed the top heading to make it sound like a shop associate welcoming a customer into a brick-and-mortar store.
- A “Make” dropdown next to the search bar means that a customer won’t need to remember TVH’s 3-character codes for each manufacturer; this should ultimately improve the speed of customer success.
- I changed the subheading below Search by make and model to better explain to the customer that they are not searching for a part but the machine a part belongs to. I also created parallel structure with the Search by part number component, starting both subheadings with "Find your..."

  ![final screenshot](/imgs/tvh-ux-writing/tvh-homepage-final-screenshot_orig.png)
*This is a mock-up with text overlayed over a screenshot. The final copy was entered into a CMS, so I do not have a screenshot of the solution.*

## Results
We repeated our user testing with five new customers and noticed fewer moments of friction and a 15% increase in task completion speed. All five customers succeeded in completing the task. 
Stakeholders were delighted with the final product and expressed confidence that the hero section would increase retention and lead to quicker purchases. In addition, the new design added desperately needed credibility and aligned with the new brand style guide. 
