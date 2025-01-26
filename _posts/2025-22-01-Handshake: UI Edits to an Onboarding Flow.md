---
layout: post
title: UI Edits to an Onboarding Flow
date: 21-01-2025
categories: [UX writing]
tag: [case study, UX writing, microcopy, wireframing, prototyping, brand voice and tone, content strategy, UI design]
---
## Introduction to the Case Study
This case study concerns one flow in the UX Content Collective [UX Writing Fundamentals](https://uxcontent.com/uxwc-the-fundamentals-course/) course final project. 

## Background

Handshake is a *fictional* mobile payment app designed for the UX Content Collective [UX Writing Fundamentals](https://uxcontent.com/uxwc-the-fundamentals-course/) course final project. The final project required students to edit the UI copy for an end-to-end user experience. The work was completed in November 2021. 

### The Handshake App
The Handshake app provides a safe and simple way for clients to pay freelancers and manage projects. Think of it as Venmo tailored to freelance work transactions. 

There are two user types:

**Freelancers** use the app to bill clients and report progress on a paid project.

**Clients** use the app to pay freelancers and track the progress of hours worked.

Each user views one side of the app. The app assumes they already know each other and have agreed to work together.

### Client Onboarding Flow

After the user has created a Handshake account, they are prompted to start their first "project," a shared workspace where clients can track and pay their freelancers. To create the project, the client is required to provide critical details about the project in a flow called **project onboarding**. This case study explains how I wrote copy for this particular flow. 

## The Problems

The client-facing project onboarding flow had three overarching problems:

1. The UI lacked helpful labels, hint text, and microcopy to guide and reassure the user.
2. The voice and terminology were impersonal and inconsistent, in part due to a lack of brand voice guidelines. Users had no trust in or affinity for the product.
3. Critical design affordances were missing or poorly chosen for the context. For example, checkboxes communicate to users that multiple options can be selected. However, in the context of a *default* payment setup, a user should only be allowed to select one payment method.

## Objective

Create a logical and personable flow that reduces friction and encourages retention. The user (in this flow, a client) must accomplish the following tasks quickly and seamlessly:

- Name the project
- Describe the project
- Provide their preferred payment method and payment information
- Invite a freelancer to join the project

## Constraints

- Time. This was a fictional project and I was encouraged to spend no more than a few days working on it.
- The design could not be fundamentally changed. Because the app is fictional, I was not able to communicate with the designer about their intentions for design components or ask them to make changes.

## My Process

### Brand voice and style guide

Before I could begin editing the user interface, I needed to establish a brand voice that would resonate with users. The voice had to appeal to both tech-savvy freelancers and potentially low-tech clients. I also needed to create style guidelines, such as content patterns, a glossary of terms, and capitalization and punctuation rules.

#### User personas

To start, I needed to find out who our users were and how we could meet their needs. The following personas were provided by UXCC:

**Tom**, the client user persona, is low-tech and needs a simple tool to track and pay a freelancer to develop his website. 

**Kelly**, the freelancer user persona, is tech-savvy but fears complicated legal paperwork and finds it uncomfortable to negotiate her rates via email or telephone.

### **Voice mad libs**

To establish Handshake’s brand values and inform my decisions on voice characteristics, I asked colleagues and stakeholders (i.e. freelancer friends) to fill in the blanks of the following statements. We compiled all the answers and came to a consensus on the following statements:

- I want our app to make people feel **[ empowered ].**
- I want people to **[ sigh with relief ]** when they interact with our products.
- I don’t like companies that sound **[ arrogant/self-righteous ]**.
- I’d like to mimic the voice of a **[ friendly coworker ]**.

### Brand voice chart

After developing our user personas and deciding on Handshake's brand values, I documented the core voice characteristics of Handshake.

core voice characteristics of Handshake.

### The brand voice in action

In addition to the voice chart, I documented content patterns, rules for grammar, punctuation, and capitalization, and outlined general style guidelines to follow throughout the interface. 

To illustrate how Handshake should sound, I mocked up screens for a mobile landing page and app cancellation message.

### Affinity mapping to identify problems

After learning about Handshake’s users and establishing the brand voice guidelines, I enlisted five users (friends) to test the client onboarding flow. I monitored their progress and asked them questions when there was friction. I also asked them to note the various points in the experience where they would drop out if they were using the app in real life. At the end of the test, they were given the opportunity to provide additional feedback.

## The Solution

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





