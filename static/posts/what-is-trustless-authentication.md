---
title: what is trustless authentication
description:  trustless authentication eliminates the need for businesses to store and manage passwords
summary: "trustless authentication eliminates the need for businesses to store and manage passwords"
keywords:
  - trustless authentication
  - what does trustless authentication mean
  - trustless authentication using public key cryptography
  - trustless authentication using zero-knowledge proofs
feature:
  image: /uploads/posts/code/authentication-tutorials.svg
  alt: What is trustless authentication
cardImage:
  image: /uploads/twitter/terminal/what-is-wget.jpg
  alt: Software developer tutorial
date: 2020-12-01T17:30:00.644Z
author: garywoodfine
tags:
  - authentication
  - javascript
  - nu_id
categories:
  - software-development
---

The internet is great! It's a technology that has revolutionised and changed the world and societies we live in, in 
many ways, some good and definitely some bad. One of the bad things the internet has inflicted on us, is the need to 
constantly create Usernames and Passwords and the need to constantly share or provide what was once considered private 
or personal information with almost every website.

It seems you can't register to use a service or buy a product on websites without having to provide your Date of Birth, 
inside leg measurement, first pets name, mothers maiden name, national security number, mobile number.  All 
this data is apparently required in order to provide you with a better, more enhanced personal service. Which for the
most part you never can tell if you received it or if you're ever going to receive it!

The downside to this constant demand for your personal data information, is that the data that is gathered is normally
stored in some kind of Central Identity Management data store, otherwise known as a malicious actor target zone!


### The dangers of Central Identity Management.

When creating User Accounts or Profiles on websites, the owners will implement a mix of different Identity and 
Authentication Providers and also may implement their own solution.  Either way, these services store your data and 
presumably secret access tokens. Then whenever you log on to services using the credentials, you first authenticate 
using a central authenticating tier to prove your identity.

This is the first issue due to the reliance of *Central Authority*, in that you have to **Trust** this so called 
Central Authority to securely store your access tokens and that they will provide them to you when you want/need them. 

The second issue, is that despite being told not to do so, by so many self-styled internet security guru's, the vast 
majority of people often simply re-use the same Username/Password combinations across multiple websites, often with some 
minimal tweaks to the password, to make it pass through the **enhanced** password strength checks across websites.

For instance, the typical password maybe `password12` on one website, because they insisted on at least letter and 
number combination, but then on another website they insist in a special character so the enterprising user may choose
`p@ssword12` , then on another site they insist on lowercase and uppercase characters then the password evolves to,
`P@ssword12`,  then another insists on some minimum length of 12, `P@ssword1234` 

Invariably, most users will use the same email address across a number of websites, because most likely it's the email
address they most likely use. It has become somewhat common place for people to have more than one email address, but
the problem is, they are more than likely have an email address they used to register for websites and a much more
private and not often shared email address they will use to communicate with friends & family etc.

The primary reason why they don't like to share their private email address to create accounts, is because they are
sick of being bombarded with all sorts of spam, after giving it a *Central Authority* to create an account!

The third and probably most significant drawback is that all this Identity and Authentication data, is pretty valuable
especially if it gets into the wrong hands.  It is also high on the list of most wanted data by malicious actors.

Considering that in [September 2020 there were 267 million records breached](https://www.itgovernance.co.uk/blog/list-of-data-breaches-and-cyber-attacks-in-september-2020 "List of data breaches and cyber attacks in September 2020 | IT Governance")
you can assume that demand is not going to disappear anytime soon!

> Criminals rob banks, because that is where the money is! 
> 

The exact same reasoning applies to Central Identity and Authentication services, they are a target for criminal actors
because they are store of all the data they need!

Cybercriminals now have more ways to acquire data and tools for their malicious works. Identity theft statistics 
illustrate that their fraudulent schemes are getting more complex and sophisticated that an increasing number of
people are becoming victims. 

Despite security companies and the likes going to great lengths to negate these attacks, their efforts are often 
inadequate. The following statistics provide evidence of the scale of the dangers faced
* $1.48 billion was taken from people in 2018 due to identity theft
* losses from account takeovers have reached in excess of $7 billion
* In 2018, the instances of mobile phone account takeovers rose to 679,000, almost double the previous years' 380,000
* 164.7 million sensitive records were exposed in 2019
* 2018, a total of 444,602 identity theft reports
* Having a social media account increases the chance of ID theft by 46%.
* Famous data breaches in 2018:  Facebook, Google+, Quora, MyFittnesPal.

The basic fact is that passwords and other user credentials stored in large centralized databases increases their 
vulnerability to theft.  Organizations, regardless of size and technical abilities, face difficulties in ensuring their 
cyber-security is up to the task of facing the challenges or being under constant attack.

> 70% of consumers would boycott services that fail to protect their data.

### Zero-knowledge proof

Fortunately, blockchain technology provides an alternative solution, which can also be easily integrated into any 
Identity and Access Management (IAM) system, that actually eliminates the need for organisations to store any user 
authentication data. This enables businesses to authenticate customers or employees without storing passwords and other
sensitive authentication data.

This results in users passwords and other authentication data never having to leave their devices, leaving no 
opportunity for man in the middle attacks or mass credential breaches.  

This is referred to as either *zero-knowledge proof* or *Trustless Authentication*  

The primary objective for Trustless Authentication, is to remove the need for End Users to trust companies with 
their Authentication Details, removing any possibility for that trust to be broken by a credential breach.

[NUID - Trustless Authentication systems](https://nuid.io/ "NUID - Trustless Authentication systems") has developed a
portable and user-owned authentication system, which does not rely on a centralised database and authority to manage 
user identities. It makes use of Blockchain technology to immutably store and protect user identities on a 
distributed ledger. Using blockchain provides important security benefits since any data stored on a distributed ledger
is nearly impossible to alter.

Using NUID to keep your secrets, secret, there is no need to trust a single central repository.

> The NuID protocol immutably stores public reference parameters on a blockchain, so that they can be shared but not 
> tampered with. A blockchain provides a trustless infrastructure with no central point of failure.
>
> Combining these technologies allows users to own and manage their authentication credentials while enabling 
> companies to authenticate without storing and protecting sensitive information.









