---
title: "CompTIA Security+"
collection: learning
layout: page
date: 2025-05-18
---

Heading 1
======

This are the notes taken during  my study to secuirty + exam, most of these notes were taken through  
Professor Messer
 videos 
 
***1.1 security controls***

## CONTROL TYPES (based on how these security controls are implemented)

**technical controls**
like a firewall or an antivirus, these occurs on the OS , like the multi factor authentication

**managerial controls**
which are the security policies, and standard procedures

**operational controls**
done by people instead of systems, like security guards and awareness programs

**physical controls**
which limits the physical access to a device , room or building 

## CONTROL FUNCTIONS (based on what they do)

**Preventive**
As the name suggest, limits the access to a resource like a firewall or a guard shack

**Deterrent**
Discourage an attempt, like warning signs

**Detective**
identify the intrusion attempt  collect and review system logs

**Corrective**
occurs after the  event which can reverse the impact, apply a control  or continuing operating 

**Compensating**
using other means to to temporary supply, like a power generator, blocking a service instead of patching it

**Directive**
influence a behavior to reduce risk, identify and store sensitive data in more secured folders
post and "Authorized personal only" sign

## Example picture

![[Screenshot at 2025-05-10 11-54-15.png]]



## ***1.2 CIA TRIAD***

**Confidentiality**
prevent disclosure of information to unauthorized access
only certain people can have access to certain data
with encryption messages can only be read when the one supposed to read it obtains the message
access controls also limits the access to a resource

**Integrity**
messages cant be modified without detection
any change is identified
with hashing, you send a message with a fixed length so both parts know the hash and if someone changes it it will be know
like a digital signature

**Availability**
systems always must be up and running , better if they have multiple components so if one of them fail system will still running, to be possible those systems need to be constantly being patched, to close security holes





## **1.2 Non-repudiation**

Is like signing a contract , you cant deny that you have done it
this adds:

**proof of integrity**
verify that the data doesnt change an remains the same
in cryptography it is used the hash which reresents the data on a string , sometimes referred as fingerprint, so if the message changes so it will the fingerprint

**Hashing example**
hola quiero ir a visitarte
6dcf90f7f4de9db8361121c00c138c5d7ef1a4e8

hola no quiero ir a visitarte
e0db1f2e28b668f0d7677de565ecfa268fa86ed4

even with one change in a whole book and after it has the same change the hash would look completley different

theres also **proof of origin** which proves the source of the data
a **private key** that only the person who send s the data knows to ensure the private key we use a public key associated with it


## *1.2 Authentication Authorization and Accounting*


**AAA framework :**

**Identification**
usually with an user is who you are in a system
**Authentication**
proves that you are who you claim to be usually with a password
**Authorization**
once proved who you are you can have access only to the data that corresponds to you
**Accounting**
a system needs to know the login and logout time and the data sent and received in between

**EXAMPLE of people authentication**
![[Pasted image 20250511113548.png]]

**AUTHENTICATING systems**

without physical access, it relays on  a certificate that's stored on that device
there's  an organization in the environment that creates those certificates and signs the certificate. this CA (certificate authority ) has his own certificate signed by Root, so once these both are validated the login is successful

**AUTHORIZATION models**

certain users and devices must have access to certain data and apps
usually there's a authorization model before accessing these data and applications usually defined by roles, 
since doing a simple relationship like **x user--> y resource** may be tedious and inefficient in big environments its common to **add an abstraction** to reduce the complexity,
adding an abstraction is instead of doing x user ---> y resource doing x group of user ---> z rol that has access to y group of resources instead of doing this individually so its a predetermined number of roles with a number of permissions each one. its so simple in very large org. instead of manually mapping each individual user you add a group of user to a rol


## **1.2 GAP analysis**

**"Where am i ?" VS "Where i´d like to be ?"**
requires an extensive research, may take several weeks, months or  years.

This requires a known baseline or create a own, and the determination the end goal

This requires to get a baseline of employees involving their experience, training, knowledge.
also its important to make sure that its following the correct policies of IT security

**Comparasion and contrast**
evaluating the current systems, identifying their weaknesses and creating an analysis to break it into categories and each categories into smaller segments

**Analysis and report**
A final more detailed comparison
A path to get from what we are today to what we wanna be in the future, including how much it may take, the money, equipment, and change controls.

with all that we can create a final **GAP ANALYSIS REPORT**
that includes all that , the recommendations are also documented

each system requirement is broken into smaller segments and each one being evaluated 
## **1.2 ZERO TRUST**

In many networks once you are inside and have gone through the firewall there are few security controls which allows malicious software to do whatever it wants once inside a network

A zero trust network is one that requires authentication each time you wanna get access to a particular resource, nothing is trusted and everything must be verified.

One way to **implemment zero trust in a network** is taking the security devices and breaking them into smaller components, which´s called planes of operation.
Generally with 2 different planes of operation:

**Data plane:** is the part that does the actual security process, processing packets and data, or anything that helps data to move anywhere in the network

**Control plane**: manages what occurs in the data plane, is the brain in the zero trust architecture, checks the identity, context and policy before allowing any connection


**Controlling trust**

**adaptive identity** to allow or not a login, the system not only evaluates the  data that its given by the user but also takes into account other factors like the source of the request, the ip and the address of the requester.
**threat scope reduction** decreasing the number of possible ways to gain access to a network

once it has created the 2 before we can create a **Policy-driven access control** to create a way to be sure if the requester is who says to be.
A common way is with **Security zones** to see where we are connected and where we wanna connect to, 
creating individual apartments with determined rules to each one.
to set this a **Policy enforcement point** is needed, which is a gatekeeper to know if allow or disallow connection, doesnt make the decission itself, it just gather all the data and brings it to the Policy administrator, a Policy Decision Point which based on all that info decides wether or not to allow that access or revoke. the final decision is passed back to the policy admin which passes back to the policy enforcement point PEP, and if it allowed i grant access to the requested resource

## **1.2 Physical Security**

Having a way to prevent access to a physical area, and a specific access point
**Implementing access control vestibules** where only one door can be open at a time, this can be with all doors normally unlocked, locked or one open and the other locked. To control entry and exit to small areas.

**A fence** to build a perimeter , to allow or not to se through it.
**Video surveillance** CCTV closed circuit tv 
can include  motion recognition to alert when something moves
or face identification
**Security guard**  physical protection at the area to validate the identification of employees Access badge which contain name pictures and being electronically logged, usually there are more than one security guard
**Area illumination** avoid shadows and glare
**Sensors**
infrared detects infrared radiation in both light and dark in limited area
pressure detects changes in force in floor and windows
microwave detect movement in large areas
ultrasonic sends utrasonic signals to detect motion colision detection etc

## **1.2 Deception and Disruption**

One way to provide Deception is with a **Honepot** to attract bad guys and to trap them there, to see what they were trying to use against you and where were trying to attack.
through a virtual environment which in reality doesnt contain anything since they arent actual systems.
Usually they combine honeypots to create **Honeynets** to make the system look more realistic and a more belivable one.

**Honeyfiles** to attract attackers with files with fake information, bait for the honeynet like passwords.txt, with an alert if the file is opened.
**Honeytokens** tracable data to add to the honeynet to track the bad guys, with useless API CREDENTIALS that notify when used 

## *1.3 Change Management*

How to make a change in a large organization, like software upgrades, patches, firewall configuration changes, etc...
There´s need for clear policies that specify frequency, duration. installation of those changes.

**change approval process**
document why will you make the change so everybody understands why the change is occurring to avoid confusion, mistakes.
its important to determine  affected systems, the scope of the change, it prpuse and the date and time of it.
in base of its risk it determines to allow it or not
those **changes start with the owner**, which usually doesn´t perform the changes but manages the process, and ensures it is being followed. and once its over, the owner test it. to update the labels
**stakeholders** is the people involved or affected by the changes

**impact analysis**
dtermine the risk of the changes, and if they actually fix something, or they break something else or cause data corruption.
also its important to know the risk in NOT making the change like security culnerabilities.
**sandbox testing environment** with no connection with the real world a safe space to know which impact the changes would have, and check **the backout plan** and how effective it would be.
which is necessary if things go wrong, to revert the changes, it is necessary to have a solid backup plan before making changes.
its important to have **maintannace hours** a time where its not dusrumting to make those changes.
All those changes need to be well documented along with all standard processes and procedures.
## *1.3 Technical Change Management*
Execute the plan, and take action.
*Allow/deny list* to decide whether or not an application to work on a environment, this list is very restrictive since nothing can run unless its explicitly approved.
The scope of the change is important since it defines which components are covered.
This scope can be expanded during the change window since its impossible to predict all outcomes.
with the change it may be a Downtime thats why they are usually made during non-productive hours, if its not possible in 24 hours environments it usually changes to a secondary system while the primary is upgrading.
A **reboot** is usually required to apply the changes and implement them.
Some applications that have been there way before your system may no longer be supported by the developer, it may be challenging at first since no one undrstands them but its necessary to understand how they work and face the unknown.
**Dependencies** you need to make changes on A and B systems before even begin with C system or changing other components only to bring the original change.
**Documentation** can became outdated very quickly, thats why it needs to be updated as long with the system. its also useful to keep track of the versions aslong with the router configuration, OS patches, which not always is straihtforward.


## *1.4 PKI Public Key infrastructure*
refers to policies procedures etc that are involved with digital certificates.
**Symmetric encryption** decrypt something it uses the same key to encrypt it in the first place, is very fast to use but has a scalability problem since its quite difficult to distribute, thats why its often combined with asymmetric encryption.
**Asymmetric encryption**  encrypting and descrypting with 2 mathematically related keys that were created at the same time and  at the same process, one is private and the other is public.
the **private key** is the only one that can decrypt the data encrypted with the public one and from the public key you cant reverse engineer the private.

**key pair creation**
from a large random number ,it passes trough the key generation process that passes it through a mathematical algorithm that ensures these two keys are mathematicaly linked and in a few moments the pair of keys is ready

**Example**
![[Pasted image 20250514203522.png]]
**key escrow** you can store the private keys localy

## **1.4 Data encryption**
**encrypting stored data** or maybe only file on the storage with EFS encrypting file system or the full disk with FileVault

**database encryption**
can be done with **transparent encryption** which encrypts all database information with a symmetric key if you need to view something u will need to decrypt it all.

it can also use **column-level encryption** so if you need to view something it isnt necesarrily to unncrypt it all.

**transport encryption**
protect data that's traversing the network
VPN that encrypts the data transmitted over the network like a tunel going to the other side.

**encryption algorithms**
to encrypt and decrypt data both sides must have the same algorithms and use the same application.
these algorythms are well known
**key length** the larger the key the more secure it tends to be, since it is less likely to get brute forced, but increasing its length its not the only way to secure it more but it also encrypt it multiple times adding layers **key stretching

## *1.4 Key exchange*

**Out of band key exchange** outside of the network, phone in person etc..

**In band key exchange** on the network, by adding an asymmetric encryption to deliver a symmetric encryption
or otherwise when exchanging asymmetric keys

	**RSA key transport**	The client generates a      symmetric key, encrypts it with the server’s       public key, and sends it

## *1.4 Encryption Technologies*

**TPM  trusted platform module**
cryptography hardware on a device, which can generate random numbers and keys, and also has persistent memory so even after rebooting or powering off it still can store data.
is also immune to dictionary attacks.

In large environments its usually used the **Hardware Security Module HSM**
which are clusters with redundant power, and secure store thousands of cryptographic keys.
can perform very fast cryptopraphic operations.

**Key Management System**
Centralized way to manage all keys, often provided by third party software. it also separate the keys from the data, and can associate the keys to the users and periodically change those keys. all this management from one console.

**keeping data private**
keeping secure data thats widely didstributed and is constantly changing.

one way to do that is with **Secure enclave**, often implemented as a hardware processor whose main function is providing security, isolated from the main processor, has its own ROM, monitors the main system boot process, actual random number generator, real time memory encryption and performs AES encryption in the hardware.

## *1.4 Obfuscation*
is the proccess of making something more harder to understand and more unclear, but can be reversed, hidding information in plain sight.
**Stenography**
if you know the process used to hide the data you can recover the data.
can also be used in **Network** to embed messages in TCP packets.
by embeding a message in a image. this in a large scale would be video steganography and can transfer much more info.
or by modifying a digital audio.

**Tokenization**
replace sensitive data with non-sensitive place holder.
very common in credit card processing with a one time use token so it useless to capture it.since these two are not related its not encryption and theres no need to encrypt the token
1. A user inputs sensitive info
2. This info is taked to the TLS tokenization server
3. the server creates a random unique token as replace
4. the original data is encrypted 
5. the token is sent where the user put the sensitive info
6. The token is used in the opration that doesnt need the original, and is throwed away
7. if the original value is needed the system request for its detokenization.
**Data Making**
only showing a part of the original data to protect the security of the full data.

## *1.4 Hashing and Digital Signatures*

**Hashes** represent data as a short string of text, that cannot be reversed to the original data.
Usually used to verify that something hasnt been changed.

**SHA256 HASH 256 bits**
si quiero casarme contigo amor mio de mi vida
7d7e4c3fe02cbab2c350c182333741ab603db29622d4cd00349a289b7794b193

no quiero casarme contigo amor mio de mi vida
2a225a90b1f6a1e9a24143bd98f1bba0e81294edf028927b46873a2b31fc749d

make sure that the hash is unique, its rare but it can be a collision problem when 2 different outputs have the same hash . like the one found in MD5.

**can be used to verify a download**
since each one has a unique hash posted on the official website

**can be used to store passwords**
1. you put the password
2. it gets hashed and stored, only the hash
3. usually it gets added some type of **salt,** additional random text to prevent two person from having the same hash
4. when the user tries to log in with the password it gets hashed and compared with the one stored

*adding salt makes rainbow tables (which are hashed dictionary attacks) dont work with salted hashes*

**Digital signatures**
proves **integrity** of the message purity
proves the **authenticate** source of the message
proves that the signature aint fake.

**Creating digital signature**
1. Creating and then Hashing the message
2. Encrypt the Hash with the digital key
3. send the message with the digital signature
4. once the message deliverated it gets the private key gets decrypted with the public key, which end up in the hash of the original message and if both the signature and the messages hash match it hasnt been altered
