---
layout: post
title: Onboarding Flow in the Handshake App
date: 21-01-2025
categories: [UX writing]
tag: [case study, UX writing, microcopy, wireframing, prototyping, brand voice and tone, content strategy, UI design]
--- 

## Background

**Handshake** is a *fictional* mobile payment app designed for the UX Content Collective [UX Writing Fundamentals](https://uxcontent.com/uxwc-the-fundamentals-course/) course final project. The final project required students to edit the UI copy for an end-to-end user experience. The work was completed in November 2021. 

### The Handshake App
The Handshake app provides a safe and simple way for clients to pay freelancers and manage projects. Think of it as Venmo tailored to freelance work transactions. 

There are two user types:

**Freelancers** use the app to bill clients and report progress on a paid project.

**Clients** use the app to pay freelancers and track the progress of hours worked.

Each user views one side of the app. The app assumes they already know each other and have agreed to work together.

### Client Project Onboarding Flow

After the user creates a Handshake account, they are prompted to start their first "project," a shared workspace where clients can track and pay their freelancers. To create the project, the client must provide critical details about the project in a flow called **project onboarding**.  

Although the UXCC Final Project required students to write microscopy for the entire end-to-end experience, this case study only explains how I wrote copy for the project onboarding flow. To see my edits for the entire app, go to [Results](#results)

![Handshake Client Onboarding Before](/imgs/Handshake UI Edits/4-before-onboarding-client_orig.jpg)
*The onboarding flow before my edits.*

## Objective

The user—the Client—must accomplish the following tasks quickly and seamlessly:

- Name the project
- Describe the project
- Provide their preferred payment method and payment information
- Invite a freelancer to join the project

## Constraints

- Time: This was a final exam, and I was only allowed a few days to complete the microcopy for the entire end-to-end experience. 
- Unalterable Design: Since the app is fictional, I could not ask a designer to make changes (and as part of the final exam, we were encouraged to make as few tweaks to the design as possible). 

## My Process
### Identifying Problems: User Testing and Affinity Mapping
I enlisted five users (friends) to test the client onboarding flow (the "Before" version). I monitored their progress and asked them questions when they encountered friction. At the end of the test, they provided written feedback. To identify problems with the UX, I conducted an affinity mapping exercise, writing snippets of feedback on sticky notes and placing them on a whiteboard. This helped me pinpoint three overarching problems. 
![Affinity Mapping](/imgs/Handshake UI Edits/stickynotes-feedback3_orig.png)
*Affinity mapping mock-up. The yellow sticky notes are snippets of feedback from testers. The red sticky notes represent two of the three problems identified from this feedback.*

### The Problems

1. The UI lacked helpful labels, hint text, and microcopy to guide and reassure the user.
2. The voice and terminology were impersonal and inconsistent, in part due to a lack of brand voice guidelines. Users had no trust in or affinity for the product.
3. Critical design affordances were missing or poorly chosen for the context. For example, checkboxes communicate to users that multiple options can be selected. However, in the context of a *default* payment setup, a user should only be allowed to select one payment method.

### Brand Voice and Style Guide

After identifying the main problems with the UI copy, I needed to establish a brand voice that would resonate with users. The voice had to appeal to both tech-savvy freelancers and (potentially) low-tech clients. 

#### User personas

Who were the users and how could I meet their needs? Thankfully, the following personas were provided by UXCC:

**Tom**, the client user persona, is low-tech and needs a simple tool to track and pay a freelancer to develop his website. 

**Kelly**, the freelancer user persona, is tech-savvy but fears complicated legal paperwork and finds it stressful to negotiate her rates via email or telephone.  

| Freelancer | Client |
| --- | --- |
| ![UXCC Final Score](/imgs/Handshake UI Edits/Kelly_persona.JPG.jpg) | ![UXCC Feedback](/imgs/Handshake UI Edits/Tom_persona.JPG.jpg) |  

#### Voice mad libs

To establish Handshake’s brand values and voice, I asked friends who freelance to play "Brand voice mad libs," shown below. After analyzing the responses (and writing a few of my own on behalf of Tom and Kelly), I reached a consensus on the following statements:

- I want our app to make people feel **[ empowered ].**
- I want people to **[ sigh with relief ]** when they interact with our products.
- I don’t like companies that sound **[ arrogant/self-righteous ]**.
- I’d like to mimic the voice of a **[ friendly coworker ]**.

#### Brand voice chart

After documenting Handshake's brand values, I summarized the core voice characteristics of Handshake in the following table:  

| Characteristic | Description | Do | Don't |
|---|---|---|---|
| Business Casual | Handshake sounds like a friendly coworker, not like a memo from HR. | Be professional, but use words that everyone understands. | Alienate users with jargon, but also don't be irreverent. |
| Friendly, Not Bubbly | Handshake celebrates users’ success but avoids wordiness and overly fluffy language. | Compliment and thank users. | Use too many exclamation points, exaggerate, or employ unnecessary phrases, such as, “We just wanted to…” or “Quick question…” |
| Honest, Transparent | Handshake is always forthright but isn't self-righteous about it. | Use confirmation dialogs and microcopy to prevent unintended actions and disclose important information users might want to know. | Hide legal disclaimers. |
| Reassuring | Handshake encourages users to complete tasks on their own but is always be ready to jump in with a helping hand. | Alleviate doubts with helpful hint text, tooltips, and microcopy, and always be consistent with terminology. | Blame users. |

I also created a style guide, documenting word choice preferences, content patterns, grammar and spelling conventions, and more. This style guide is available upon request. 

#### The brand voice in action
To illustrate how Handshake should sound, I mocked up screens for a mobile landing page and app cancellation message.  

|  |  |
|---|---|
|![UXCC Final Score](/imgs/Handshake UI Edits/landingpage-final_orig.png)|![UXCC Feedback](/imgs/Handshake UI Edits/cancellation-email.png)|

## Solution

Finally, it was time to write the microcopy. Here's what I did to address the three aforementioned problems:

- Added a progress bar (Steps) at the top, easing user anxiety about how long onboarding would take. Additionally, the steps allow the user to navigate back and forth between screens in the flow.
- Applied a conversational, human voice to build customer affinity for the product.
- Employed consistent content patterns and parallel construction (heading starts with a simple imperative verb, the button matches this verb).
- Added helpful labels ("Project name"), microcopy, hint text, and character limits.
- Provided disclaimers, reassurances, and additional context in the body text.
- Replaced jargon like "1099 workers" with voice-appropriate alternatives ("freelancers").
- Changed checkboxes on screen 2 to visual design components, eliminating the option to select multiple payment methods and ultimately making the design more straightforward. 
- Replaced “paper checks” as a payment option with “bank transfer.” Users have chosen Handshake because they want to pay freelancers (or receive payments) *digitally.* I chose “Bank Transfer” instead of “Direct Deposit” because a bank transfer applies to both users, whereas a direct deposit only makes sense for the freelancer who receives money.
- Celebrated user success with personal touches, ensured they knew what happened and what would happen next, and encouraged them to move forward in the experience.

### Before
![Handshake Client Onboarding Before](/imgs/Handshake UI Edits/4-before-onboarding-client_orig.jpg)

### After
![Handshake Client Onboarding After](/imgs/Handshake UI Edits/onboarding flow after.png)
## Results
I tested a first draft with a user to identify any points of friction or miscomprehension.  The user, who had tested the original flow, credited the actionable button copy as the main improvement in the flow. She also described the flow as "transparent, reassuring, and friendly." However, she had reservations about the hint text in the "Project Description" field. She was worried that if she didn't edit the text it would be automatically entered into her response. To address this feedback, I changed the hint text to instructional text. Before, the text read, "Hey [Freelancer]! Thanks for taking on the project. Here are the main deliverables: [bullet points]. As far as budget goes, I'd like to keep it under $1000." Now, it simply reads "Define the work, intermediate and final deliverables, and any budgetary constraints." If this were a real deliverable, I would also work with designers and develepors to prevent the user from moving on to the next screen until they have edited the Project Description text. We could achieve this by graying out the Create Project button until the user enters *new* text into the Project Description field. Additionally, I would petition for a more wholescale design change where each screen requires only a single task. In this case, I would afford an entire screen to the project description component, allowing users to focus on that task alone. 

As for real-world feedback, I scored over 100% on the final project. My instructor commended my use of voice and tone, concise UI text, parallel construction, helpful hint and tool text, and consistent terminology, grammar, punctuation, spelling, and formatting. I received extra credit for solving additional usability issues, adding error messages, and providing legal disclaimers.  ​

| Final Score | Instructor Feedback |
|---|---|
|![UXCC Final Score](/imgs/Handshake UI Edits/finalscore_1.png)|![UXCC Feedback](/imgs/Handshake UI Edits/feedback_orig.png)|

### The Final Project Before and After
![Handshake App Before](/imgs/Handshake UI Edits/1-UXWC Fundamentals Course - Final Project_duplicate (Copy).png)  

*The Handshake app end-to-end experience before my edits.*  

|  |  |
|---|---|
|![Handshake App After P1](/imgs/Handshake UI Edits/2- handshake_finalscreenshot_beg2.png)|![Handshake App After P2](/imgs/Handshake UI Edits/3-handshake_finalscreenshot_end.png)|  

*The Handshake app after my edits. Screens with pink text are not discussed in this case study.*


## Lessons Learned
When you're all on your own, you learn the value of teamwork. The final product would have been better if I collaborated with a UX designer. Writing UI copy highlights flaws in a design: the more I wrote, the more flaws I identified. Likewise, if my UI copy didn't match the designer's intentions, the designer could have pinpointed the source of friction and made revisions. 

Secondly, I gained an appreciation for creating a brand voice and values. There are myriad ways to convey a message, but placing constraints on writing decisions makes the task more efficient and manageable. Further, employing a single "voice" and consistent terminology builds a user's trust and affinity for the product.

Finally, I learned the importance of user testing. Testing identified my blind spots and biases. Without testing, I wouldn't have added due dates to the project details screen or disclaimers under the main headings.  

