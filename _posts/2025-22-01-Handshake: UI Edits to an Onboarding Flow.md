---
layout: post
title: UI Edits to an Onboarding Flow
date: 21-01-2025
categories: [UX writing]
tag: [case study, UX writing, microcopy, wireframing, prototyping, brand voice and tone, content strategy, UI design]
--- 

## BACKGROUND

**Handshake** is a *fictional* mobile payment app designed for the UX Content Collective [UX Writing Fundamentals](https://uxcontent.com/uxwc-the-fundamentals-course/) course final project. The final project required students to edit the UI copy for an end-to-end user experience. The work was completed in November 2021. 

### The Handshake App
The Handshake app provides a safe and simple way for clients to pay freelancers and manage projects. Think of it as Venmo tailored to freelance work transactions. 

There are two user types:

**Freelancers** use the app to bill clients and report progress on a paid project.

**Clients** use the app to pay freelancers and track the progress of hours worked.

Each user views one side of the app. The app assumes they already know each other and have agreed to work together.

### Client Onboarding Flow

After the user has created a Handshake account, they are prompted to start their first "project," a shared workspace where clients can track and pay their freelancers. To create the project, the client is required to provide critical details about the project in a flow called **project onboarding**. This case study explains how I wrote copy for this particular flow. 
![Handshake Client Onboarding Before](/imgs/Handshake UI Edits/4-before-onboarding-client_orig.jpg)
*The onboarding flow before my edits.*

## PROBLEMS

The client-facing project onboarding flow had three overarching problems:

1. The UI lacked helpful labels, hint text, and microcopy to guide and reassure the user.
2. The voice and terminology were impersonal and inconsistent, in part due to a lack of brand voice guidelines. Users had no trust in or affinity for the product.
3. Critical design affordances were missing or poorly chosen for the context. For example, checkboxes communicate to users that multiple options can be selected. However, in the context of a *default* payment setup, a user should only be allowed to select one payment method.

## OBJECTIVE

Create a logical and personable flow that reduces friction and encourages retention. The user (in this flow, a client) must accomplish the following tasks quickly and seamlessly:

- Name the project
- Describe the project
- Provide their preferred payment method and payment information
- Invite a freelancer to join the project

## CONSTRAINTS

- Time. This was a fictional project and I was encouraged to spend no more than a few days working on it.
- The design could not be fundamentally changed. Because the app is fictional, I was not able to communicate with the designer about their intentions for design components or ask them to make changes.

## MY PROCESS

### Brand voice and style guide

Before I could begin editing the user interface, I needed to establish a brand voice that would resonate with users. The voice had to appeal to both tech-savvy freelancers and (potentially) low-tech clients. I also needed to create style guidelines, such as content patterns, a glossary of terms, and capitalization and punctuation rules.

#### User personas

To start, I needed to find out who our users were and how we could meet their needs. The following personas were provided by UXCC:

**Tom**, the client user persona, is low-tech and needs a simple tool to track and pay a freelancer to develop his website. 

**Kelly**, the freelancer user persona, is tech-savvy but fears complicated legal paperwork and finds it uncomfortable to negotiate her rates via email or telephone.
|||
|---|---|
|![UXCC Final Score](/imgs/Handshake UI Edits/Kelly_persona.JPG)|![UXCC Feedback](/imgs/Handshake UI Edits/Tom_persona.JPG)|
### **Voice mad libs**

To establish Handshake’s brand values and voice, I asked friends who freelance to play "Brand voice mad libs" by filling in the blanks of four sentences. After analyzing the responses, I reached a consensus on the following statements:

- I want our app to make people feel **[ empowered ].**
- I want people to **[ sigh with relief ]** when they interact with our products.
- I don’t like companies that sound **[ arrogant/self-righteous ]**.
- I’d like to mimic the voice of a **[ friendly coworker ]**.

### Brand voice chart

After developing our user personas and deciding on Handshake's brand values, I documented the core voice characteristics of Handshake.
|Characteristic|Description|Do|Don't|
|---|---|---|---|
|No nonsense|Handshake’s voice is human, authentic, and down-to-earth. |Use words that everyone understands.|Alienate users with jargon.|               
|Business Caual|Handshake should sound like a friendly coworker, not like a memo from HR. |Be professional, but not too formal.|Be irreverent.|
|Friendly, Not Bubbly|Celebrate our users’ success, but avoid wordiness and overly fluffy language.|Compliment and thank users.|Use too many exclamation points, exaggerate, or employ unnecessary phrases, such as, “We just wanted to…” or “Quick question…”|
|Honest, Transparent|Be forthright, but don’t be self-righteous about it.|Use confirmation dialogs and microcopy to prevent unintended actions and disclose important information users might want to know.|Hide legal disclaimers.|
|Reassuring|Encourage users to complete tasks on their own, but always be ready to jump in with a helping hand.|Alleviate doubts with helpful hint text, tooltips, and microcopy, and always be consistent with terminology.|Blame users.|
core voice characteristics of Handshake.

### The brand voice in action

In addition to the voice chart, I documented content patterns, rules for grammar, punctuation, and capitalization, and outlined general style guidelines to follow throughout the interface. 

To illustrate how Handshake should sound, I mocked up screens for a mobile landing page and app cancellation message.
|||
|---|---|
|![UXCC Final Score](/imgs/Handshake UI Edits/landingpage-final_orig.png)|![UXCC Feedback](/imgs/Handshake UI Edits/cancellation-email.png)|
### Affinity mapping to identify problems

After learning about Handshake’s users and establishing the brand voice guidelines, I enlisted five users (friends) to test the client onboarding flow. I monitored their progress and asked them questions when there was friction. I also asked them to note the various points in the experience where they would drop out if they were using the app in real life. At the end of the test, they were given the opportunity to provide additional feedback.
![Affinity Mapping](stickynotes-feedback3_orig.png)
*The yellow sticky notes are snippets of feedback from testers. The red sticky notes are the two overarching problems I identified from this feedback.*

## SOLUTION

To address the problems discussed above, the following solutions were implemented:

- Added a progress bar (Steps) at the top, easing user anxiety about how long onboarding would take. Additionally, the steps allow the user to navigate back and forth between screens in the flow.
- Applied a conversational, human voice to build affinity for the product.
- Built trust by using consistent content patterns and parallel construction (heading starts with a simple imperative verb, the button matches this verb).
- Added helpful labels ("Project name"), microcopy, hint text, and character limits.
- Provided disclaimers, reassurances, and additional context in the body text.
- Removed jargon like "1099 workers" and replaced it with voice-appropriate "freelancers."
- Changed checkboxes on screen 2 to visual design components, eliminating the option to select multiple payment methods and making the design more user-friendly.
- Replaced “paper checks” as a payment option with “bank transfer.” Users have chosen Handshake because they want to make and receive payments *digitally*; moreover, the app would not be able to facilitate or verify payment through paper checks. “Bank Transfer” was chosen over “Direct Deposit” because a bank transfer works for both users, whereas a direct deposit only makes sense for the freelancer who receives money.
- Celebrated user success with personal touches, ensured they knew what just happened and what would happen next, and encouraged them to move forward in the experience.


## RESULTS
When surveyed, 5/5 testers said the flow was significantly improved. Testers took 20% less time to complete the revised flow. There were no drop-off points and users were thankful for reassurance, transparency, and for easing anxiety about what will happen when they perform an action.  
​More broadly, I achieved a score of over 100% on the final project for excellent use of voice and tone, concise UI text, parallel construction, helpful hint and tool text, and consistent terminology, grammar, punctuation, spelling, and formatting. I received extra credit for solving additional usability issues, adding error messages, and providing legal disclaimers.  ​

|||
|---|---|
|![UXCC Final Score](/imgs/Handshake UI Edits/finalscore_1.png)|![UXCC Feedback](/imgs/Handshake UI Edits/feedback_orig.png)|
*Instructor feedback from the UXCC Final Project.*

![Handshake App Before](/1-UXWC Fundamentals Course - Final Project_duplicate (Copy).png)
*The Handshake app before my edits.*
|||
|---|---|
|![Handshake App After P1](/imgs/Handshake UI Edits/2- handshake_finalscreenshot_beg.png)|![Handshake App After P2](/imgs/Handshake UI Edits/3-handshake_finalscreenshot_end.png)|
|*The Handshake app after my edits. Screens with pink text are not discussed in this case study.*|*Part 2 of my edits.*|


## LESSONS LEARNED
As a rule, involving the UX writer early makes for a more streamlined design process. Had I been involved earlier, more design flaws could have been identified and testing the prototype would have been more cost-effective. I would have loved to work with designers to create single-task screens with personality-rich copy. Instead, most screens had multiple components, forcing the UI copy to be ultra-spare. In addition, there were some components that I didn't understand. In those cases, I would have asked engineers to describe the component to me in their own words so I could translate it to the user. Engineers also could have given me guidelines on things like character limits. In short, collaboration would have improved my writing, which ultimately increases retention and revenue.

Further, I learned that without establishing brand voice and values, it is difficult to write consistent UI copy that builds affinity and trust among users. There are an infinite variety of clear and concise ways to convey a message: I needed the lodestar of a brand voice to guide my writing choices. 

Finally, I was reminded how important it is to test copy. While I anticipated many of the problems a user might run into, I had a number of blind spots. For instance, one user asked, "Should I add due dates in the project description?" This resulted in the addition of an optional due date field. 

