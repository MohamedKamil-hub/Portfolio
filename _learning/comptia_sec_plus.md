---
title: "CompTIA Security+ Notes"
collection: learning
author_profile: false
layout: single
date: 2025-06-11
---

These are my notes from studying for the Security+ exam with Professor Messer.

<!-- more -->

<div id="toc"></div>
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

 Example picture

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
## **1.4 Blockchain technology**
 a distributed ledger that can be maintained by everyone on the ledger, and everyone can have a copy of this.
 its useful to digital identification digital voting or payment proccessing
When a transaction occurs its sent to every node in the blockchain network to be verified and bring to a block  of transactions with each block having a  hash and if someone makes changes into that block the hash will change, the blockchain throws away that entire block, and only after being verified that block is added to the blockchain.

## **1.4 certificates**

A digital certificate is a file that contains a digital key and other details about the key holder.
Besides secuirty it also brings trust since it uses certificate authoritites, or also can use web of thrust between other users, or can be given by OS.

**Whats inside a digital certificate?**
A **standard format called X.509.**
But also other details like the Serial number, version, signature algorithm, name of the cert holder, public key and more...

**Root of trust**
usually through a third party component an inherently trusted component like hardware, software firmware.

**certficate authorities**
has digitally signed the website certificate, so since you trust the CA you will inherently trust the website,
there are many certificates built in in your browser, 

**certificate signing requests**
create a key pair, then send the public key to the CA to be signed they key combined with the applicant identifying info create  the certificate signing request, which is sent to a CA which validate the applicants identity and if they agree they use their private key to sign the certificate and send it back.

**Private certificate authorities**
you are your own CA , in the internal system, needed in medium to large organization.
can be immplemented with windows certificate services or OpenCA.
A private CA doesnt need to be signed by a public CA 
and needs to install the CA certificate on all devices.

**Wildcard certificates**
subject alternative name SAN, an extension to the alternative X.509
allows a artificer to support many different domains, and lists additional identification info.
will apply to all server names in a domain.

**Key revocation**
invalidating a certificate, this is  communicated through the **CRL** a list published by the CA that contains the serial numbers of revoked certificates
**OCSP** which is a faster and much modern version of the CRL which occurs in real time, the client asks the CA if the certificate is valid.

**Heartbleed  CVE-2014-0160**
was a critical vulnerability in OpenSSL, that allowed to see users, passwords, private session cookies and private keys, so organizations had to revoke the existing certificates, generate new key pairs

## **2.1 Threat actors**
entity responsible for an event that has an impact of the safety of another entity, also called malicious actor.
can be internal or external, can have funding or no money aviable, can be blindly running scripts or can be writting their own custom attack malware and scripts. or a in middle point.
their motivations could be revenge, ethical, financial, blackmail, service disruption, espionage, war etc ...
 **governments** external,  with massive resources and highest sophistication.
**unskilled attackers** who run pre-made scripts without knowing whats really happening.
**Hacktivist** external a hacker with a purpose, phylosophy, revenge, political, disroption.
**Insider** internal, takes advantage of  the organization resources
**Organized crime** external,  proffesional criminals motivated by money, very sophisticated, with each person doing a different action. so much founds.
**Shadow IT** internal, a group inside an organization that create their own infrastructure.

![[Pasted image 20250518134309.png]]

##  2.2 Threat vectors

method used by hackers

**Message-based-vectors**
one of the bigest threat vectors, can be a malicious link in a email or to a malicious site
Or a sms to get you to click links
one of the most common are the phishing attacks
people wants you to click an link.

**Image-based vectors**
more difficult to identify,
can do HTML injection or a javascript attack code deppending on the format,
if you run the XML but also the javascript code embdded to it.

**File-based vectors**
not only executables but even a pdf or in a compressed file.

**Voice call vector**
phishing over the phone or the IP  
can have the porpuse of doing a denial of service.

**removable device vectors**
malicious software on USB flash drives
that can infect networks,
can act as a keyboard

**vulnerable software vectors**
client-based
infected executable, known or unknown vulns, which requires constant updates.

agentless
not installed executables, common in web based services

**Unsupported systems vectors**
systems that cant be patched no more, all these should be identified.

**Unsecure network vectors**,
a open wireless network with outdated security protocols or a wired network using unsecure interfaces can be easy to access for attackers.
even bluetooth can be used a a vector.

**Open service ports**
every app has their own open port
firewalls can be usefull to allow traffic to an open port

**Default credentials**
need to be changed as soon as you can.

**suply chain vector**
during the manufacturing process


## **2.2 Phishing**

Social engineering often delivered by email, text or voice calls.
its recommendable to check the URL, and do research before.

**Business email compromise** attackers take advantage of the trust given to a source changing a lil bit the email address.

**Tricks and misdirection**
typosquatting a type of URL hijacking ->merecedes.com 
pretexting creating a false story to get information,
"hi am a rich dutchess with no descendants and i wanna give you all my money ..."
**Phishing with different bait** 
vishing voice phishing over the phone
smishing sms phishing by text message

## **2.2 Impersonation**
Is when an attacker is pretending to be someone that they are not, in order to extract info from the victim.
before an attack a trap is set with an actor and a story.
Can even pretend to be you with your personal information

**preventing**
never give away personal information, without making a solid verification

## **2.2 Watering Hole Attacks**
The attackers researchs what third party sites your organizations visits, and find a way into that third party site through a vulnerability, potentially affecting not only the organization but all the other people that visits it.
Needs a layered defense to prevent it like firewalls and IPS antivirus , antimalware signature malware

## **2.2 Other social engineering attacks**
**Missinformation** to divide distract or persuade, enabled through social media
creating fake users, posting content with them, and making real users share the message

**Brand impersonation** Pretend to be a well-known brand

## **2.2 Memory injections**
Malware runs in memory processed by the cpu, can run in its own process or inject himself into a legitimate process, with this way the malware hides inside of the process getting the same rights and permissions allowing privilege escalation.
DLL injection is a subtype of SQL injection that can affect the structure of the data base itself, adding columns to a existing table

## **2.2 Buffer overflows**
Overwritting a buffer of memory until it spills over into other memory areas.
Its not simple to exploit since it can crash the entire system, and requires time to make it work as wanted, the attacker wants a buffer overflow thats repeatable .

 Scenario:

- **Variable A**: allocated **8 bytes** 
    
- **Variable B**: stores user privileges, initially **non-root**
    
- **Attacker (variable B)** wants to **overflow variable A** by sending **9 bytes** to overwrite adjacent memory and escalate privileges to root
What happens:

- Variable A’s buffer can only hold 8 bytes safely.
    
- If the program copies 9 bytes into variable A without checking length, the 9th byte **overwrites** the memory immediately after variable A.
    
- That memory happens to be where variable B’s privileges are stored.
## **2.3 Race Conditions**

-A **race condition** happens when two or more processes try to manipulate the same resource **at the same time** without proper synchronization. it can cause inconsistent or unintended behavior.
this can lead to vulnerabilities where an attacker exploits the timing gap to gain unauthorized access or escalate privileges.

TOCTOU (Time of Check to Time of Use)
 is a specific type of race condition.
It occurs when a program:
**Checks** a condition 
Then later **uses** that resource assuming the check is still valid.
if an attacker changes the resource **between** the check and the use, the program may perform actions it shouldn't, causing security issues.


## **2.3 Malicious Updates**
Not every update is equally secure,malicious code can be embedded within the update itself.
Before doing any changes to any system have a backup.
Install from trusted source. visit the developer site.
only allow signed apps.

**Automatic updates**
relativley  trustworthy since it comes from the developer, but even with that it can contain malicious software.

## **2.3 Operating system vulnerabilities**

Keep them patched, may require reboot and testing before deployment, also a backup
An OS can have millions of lines of code , more code means more opportunities for a security issue.

## **2.3 SQL injection**
Adding your own info into a bad programmed data base
Put your own SQL requests into an existing application, can be executed in a web.
this exploit can  allow the attacker to view, delete , etc all database info.
' OR '1'='1'; --

## **2.3 Cross-site scripting**
XSS
Is one of the most common web app vulnerabilities.
Takes advantage of the trust a user can have for a site
Commonly uses javascript

- **Attacker sends an email** with a **link** to a legitimate but **vulnerable** website.
    
- The link includes a **malicious script** in the URL parameters.
    
- When the victim **clicks the link**, the vulnerable site reflects the script without sanitizing it.
    
- The script executes in the victim's browser in the **context of the legitimate site**.
    
- It can then **steal cookies, session tokens, or other sensitive data** and send it to the attacker's server.

**Non persistent XSS attack**
website allows script to run in user input
An attacker sends an email that takes advantage of that vuln
the script embedded in URL executes in the victim browser

**Persistent XSS attack**
attacker post the malicious link in a social network affecting anyone that visit the page through that link

**SUBARU**
Not click links on emails, disable javascript, keep application and browser updated
## **2.3 Hardware vulnerabilities**
Everything that is connected to the network.
**Firmware** 
The software inside the hardware, vendors are the only ones who can fix their hardware.

An **end of life EOL** is when the manufacturer stops selling the product but can still offering support to it.
An **end of service life EOSL** is when the porduct stops being selled andalso stops being supported, including patches and updates.

**Legacy platforms**
devices that have been running for too long and are outdated, and need aditional srcurity protections.

##  **2.3 Virtualization vulnerabilities**
Since it has many similirities to physical machines they share some vulnerabilities, but they also have their own vulnerabilities:
Local privilege escalations
command injection
information disclosure

**VM escape protection**
Since a VM is  self-contained, it shouldnt be possible to jump from one VM  to the host or hardware, however it is possible to control the host and other VM

**Resource reuse**
the resources can be reused between VMs being managed by the hypervisor only allocating memory where and when needed, 
This memory sharing can allow to read and write memory on a VM from another

## **2.3 Cloud-specific vulnerabilities**
most of organizations arent using MFS for management console users or patch code

**Denial of service**
**Authentication bypass**
**Directory traversal** faulty configuration put data on risk
**remote data execution**
**Also the web application** need to be well secured, cn be victim on XSS or out of bounds write(writing in a unathorized memory area)
**SQL injection** to get direct access to the database

## 2.3 Supply chain vulnerabilities

The supply chain is the process of going from raw materials, to suppliers, manufacturers, distributors, customers and finally the consumer.
This process can be infected. since it may involve third parties. a way to prevent this is
using a small suplier base
having strict control over policies and procedures
having a limit to trust.

Making sure that you trust software providors by looking at the initial installation

## 2.3 Misconfiguration vulnerabilities
**Open permissions**
common with cloud storage, easy to leave a door open

**Unsecured superuser account**
weak password
it is recommended to disable the root login, but to be first loged with an normal account.
there shouldnt be too much admin accounts

**Unsecure protocols**
that are not encrypted like telnet, ftp, smtp, imap, the data can be seen clear across the network

**Default settings**
change default credentials as soon as possible
**Open ports and services**
should be limited and managed by a firewall, since its complex these should be revisited


## **2.3 Mobile Devices Vulnerabilities**
Its difficult to secure since there always moving have small size and are packed with sensitive data that's always connected to the internet.
They can be jailbreaked or rooted which give access to the operating system, can allow install custom firmware.
**Sideloading** malicious apps that can create a data breach, to prevent it its usually only allowed to install through the local app store

## **2.3 Zero day vulnerabilities**
vulnerabilities that have not been found yet, that are being actively searched by both attackers and developers.

## **2.3 MALWARE**
malicious software 
types and methods
viruses worms, ransomware,  trojan horse, rootkit, keylogger, spyware, bloatware, logic bomb.
All these type of malware can work together to gather persnal or organizational data
in a ransomware your data gets encrypted and can be decrypted in exchange of money. To prevent ransomware you should have always a offline backup

## **2.4 Viruses and worms**
Malware that can reproduce itself through file systems or the network, may or may not cause problems.
Viruses types,
can run in the booting process or be an script virus, or macrovirus.
*Fileless virus* a stealth attack that operates in the memory of the system.

Worms is malware that self replicates without the need of someone , just transmitting over the network

## **2.4 Spyware and Bloatware**
**Spyware** malware that watches everything that happens in your system, monitoring browser and everything you may type.

**Bloatware** a device that includes applications installed by the manufacturer, and these apps can be victims of a vulnerability, removing it can be hard, since they may have their own uninstaller


##  2.4 Other Malware Types


**Keylogger**
containing valuable informatio, capturing credentials, messages, and everything you type and storing it in a file and then sending it to the bad guys. Its not encrypted, can also access your clipboard and log it.

**Logic bomb**
waits to a specific event to ocurr and when it happens it explodes, events like time or date, an user log or something similar.
March 19 2013 South Korea
Its difficult to identify, but you can prevent it with constant monitoring.

**rootkit**
unix technique
modifies core system files, being invisible to the operating system
and has full run of your OS
Can be removed and prevented with secure boot with UEFI or using a remover

##  2.4 Physical attacks
if you have physical access to a server you have full access.
check physical security like window or doors.

**RFID cloning**
duplicating a access ID for less than 50 dolars, this process can happen in a matter of seconds.
Thats why MFA is so useful

**Enviromental attacks**
turning all the power, or having access to the HVAC to overheat the system


## 2.4 Denial of Service
Forcing a service to fail, by overloading the service, taking advantage of a design failure or vulnerability.
Or can also be just a smokescreen for some other exploit.

**Friendly DoS**
can be unintentional 
like creating layer 2 loop without STP
Downloading  multi-gigabyte linux distros over a DSL line

**DDOS**
by multiple devices all over the world using all the resources that that service has.
botnets, when you tell millions of bot what to do with one command.
this is called Asymmetric attack
**refelction and amplification**
turn small attack into big attack
using protocols with little authentication or checks like poorly configured NTP DNS ICMP that give back more info that what you send

## 2.4 DNS Attacks
**DNS poisoning**
modify the client host file, the host fie takes precedent over DNS queries
Modify the DNS server require some crafty hacking
Send a fake response to a valid DNS request, by redirectioning the original request or the resulting response **on-path attack**

**URL hijacing**
sell the badly spelled domain to the actual owner
or a phishing site
	**Typosquatting**
	take advantage of poor speling, like a typing error a different phrase ir a different top-level domain like from .com to .win

**domain hijacking**
by getting access to the domain registratin, to having control, where the traffic flows. there many ways to do that like bruet force, social engineering etc...


## 2.4 On Path Attack
allows an attacker to watch without you knowing 
redirrecting their traffic to themselves and then passing it to the destination without the victim knowing
**ARP poisoning** in local networks

**On-Path browser attack**
man in the browser attack
malware does all of the proxy work, everything looks normal to the victim, once you log into something important the attacker gets all the credentials

## 2.4 Replay attacks
The attacker will need access to information that can be replayed , access to the RAW network data: network tap, ARP poisoning, malware on the victim computer
once this attacker has access to that data he can replay it to appear as someone else
**pass the hash** 
Cookies
files that contain information like usernames and details that an attacker would love to know like the session ID which mantains sesion opened without the need of any credentials
thrugh **session hijacking**
which can be prevented by encrypting everything with encrypt end-to-end or end-to-somewhere

## 2.4 Malicious code
can be an executble, script, macro viruses, worms etc.
to prevent it you will need anti-malware, firewall. continuous updates and patches.

WannaCry ransomware

## 2.4 Application Attacks
**Injection attacks**
Adding your own info into a data stream, this is possible because of bad handling of input and output, can be SQL,HTML,XML,LDAP etc...

**Buffer overflows**
Overwriting memory so much to the point it spells over other memory areas, This is possible because of bad programming and allows someone to write too much memory.
But its hard to exploit because even when you accomplish it the app usually just crashes instead of providing some useful information.

**Replay attacks**
info transmitted over the network, to do this attack you will need access to raw network data, with the gathered info it is possible to appear as someone else.

**Privilige escalation**
Gaining higher-level access to a system, because of a bug or a design flaw
It also be possible to perform an Horizontal Privilige escalation with user A getting access to user B resources.
To block this attack it is needesd to patch quickly, update anti(virus/malware) software.
Being provided with Data execution Prevention which makes data being able to run only in executable areas.
Or having an space layout randomization which prevents a buffer overrun at a known memory address. which makes that each time an app runs the data may be located ina different place.

**Cross-site request**
A cross-site request can be legit like when you visit a website the browser may load videos from youtube or pictures from instagram.
But this process doesnt include authentication process. including code in both client server sides.
Bad guys may take advantage of the trust that a web app has for the user, the web trust the browser so the request are made without any prior consent.
The web application should have anti-forgery techniques added like a cryptographic token to prevent a forgery.

**Directory traversal**
Allows to read files from a web server that are outside of the website`s file directory. This may be cause because of bad configuration or an software vulnerability

## 2.4 Cryptographic attacks
**Birthday attack**
This is a hash collision, two different plaintext having the same hash. This should not happen in modern Hash algorithms

**Downgrade attack**
Using a bad encryption will force the systems to downgrade their security
the **SSL stripping** combines an on-path attack with a downgrade attack, sitting on the middle of the conversation and is able to see the full data, so the page is not encrypted. stripping away the S in HTTPS.

## 2.4 Password Attacks
Some Application stores passwords in the clear (with no encryption)
These passwords should be stored as a Hash which represents data as a fixed-length string, with no collision or way to reverse engineer it.
**Spraying attack** consist in trying the most common passwords in different accounts and if that doesnt work move on eg. 12345, qwerty etc...
**Brute forece** like a spraying attack but way more broad, but it also takes more time, and has the risk of the account being shut out.
So the attackers usually run this typr of attack offline, by obtaining the list of users and hashes , calculating a password hash, comparing it to a stored hash.
All this process requires large computational resources.











<script>
document.addEventListener("DOMContentLoaded", function () {
  const toc = document.getElementById("toc");
  const headers = document.querySelectorAll("h2, h3");

  let list = "<ul>";
  headers.forEach(h => {
    const id = h.id || h.textContent.toLowerCase()
      .trim()
      .replace(/[^\w]+/g, '-')
      .replace(/^-+|-+$/g, '');
    h.id = id;
    list += `<li><a href="#${id}">${h.textContent}</a></li>`;
  });
  list += "</ul>";
  toc.innerHTML = list;
});
</script>
