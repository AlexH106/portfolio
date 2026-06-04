// ══════════════════════════════════════════════════
//  Portfolio Data
// ══════════════════════════════════════════════════
const portfolioData = {
  profile: {
    name:     "Aleksandr Hovsepyan",
    university: "TU Dublin",
    degree:   "BSc in Computing (Cybersecurity)",
    tagline:  "Cybersecurity Student & Security Researcher",
    bio:      "Final year cybersecurity student at TU Dublin with hands-on experience in penetration testing, secure software development, and digital forensics. Passionate about building secure systems and contributing to the cybersecurity community.",
    email:    "alex.hovsepyan166@gmail.com",
    linkedin: "https://www.linkedin.com/in/aleksandr-hovsepyan-a9a379325/",
    github:   "https://github.com/AlexH106"
  },

  // ── CURRENT / IN-PROGRESS ──────────────────────
  currentProjects: [],

  // ── COMPLETED ─────────────────────────────────
  completedProjects: [

    // ── Year 3 · Semester 1 ──────────────────────
    {
      id: "y3s1-1",
      semester: "Y3S1",
      title:    "Secure Communications Challenge Labs",
      subtitle: "Encrypted Image · Blockchain Hash Chain · Wireless Cracking",
      category: "Network Security",
      date:     "October 2024",
      icon:     "Lock",
      tags:     ["BMP Forensics","MD5 Hash Chain","WPA Cracking","Hex Editor","Python"],
      description: "Three hands-on challenge labs for Secure Communications: reconstructing a BMP image by manipulating hex headers, solving an MD5 hash chain via Python, and cracking a WPA handshake using aircrack-ng and the rockyou wordlist.",
      highlights: [
        "Encrypted Image: used Hex Fiend to repair missing BMP magic bytes (42 4D), then iterated through common resolutions (64×64 up to 1920×1080) — image revealed as 'Trolld' tiled at 1920×1080",
        "Simple Blockchain: reversed target hash 654e1c2ac6312d8c6441282f155c8ce9 to string 'Noob', deduced seed as MD5('ecsc'), and walked a 1-million-iteration hash chain in Python/hashlib to find the answer hash 6fe9b4d366668a1f8a964a72cbc912c8",
        "Wireless: ran aircrack-ng against a WPA handshake capture (ESSID: iriss_wifi, BSSID: 02:1A:11:F9:E2:05) using the 32M-entry rockyou.txt wordlist — password cracked as 'internet'",
        "Used Wireshark with the recovered WPA key to decrypt the captured traffic and analyse plaintext packets",
        "Documented each step with hex dumps, terminal output, and decrypted packet views"
      ],
      technologies: ["Hex Fiend","Python hashlib","aircrack-ng","Wireshark","rockyou.txt","Kali Linux"],
      outcomes: [
        "Successfully reconstructed encrypted BMP image at correct 1920×1080 resolution",
        "Located target hash within 1 million MD5 chain iterations using Python automation",
        "Cracked WPA2 passphrase from live capture using dictionary attack",
        "Demonstrated end-to-end wireless attack and decryption workflow"
      ],
      skills: ["Hex Analysis","Hash Chain Analysis","WPA Cracking","Wireless Security","Python Scripting"]
    },
    {
      id: "y3s1-2",
      semester: "Y3S1",
      title:    "Memory Stick Forensic Investigation",
      subtitle: "Financial Fraud & Evidence Analysis — FTK Imager",
      category: "Digital Forensics",
      date:     "October 2024",
      icon:     "Database",
      tags:     ["FTK Imager","Digital Forensics","Chain of Custody","MD5","Evidence Analysis"],
      description: "Forensic investigation of a memory stick recovered from a suspect's workstation (George Montgomery) in a case involving unexplained employee disappearances. Analysis uncovered evidence of financial fraud, escape planning, and deliberate data concealment.",
      highlights: [
        "Created forensic duplicate with FTK Imager and verified integrity: MD5 1F81505C8B5102EBE4EB8A2F1F4628C8 matched original",
        "Recovered communication records between George Montgomery and Martha Heiser revealing invoice manipulation and plans to flee to Zurich/Brazil",
        "Located Swiss bank account password document written in French — evidence of offshore money laundering",
        "Discovered image metadata: all images were 32-bit PNG screenshots (not photographs), indicating deliberate recording of sensitive data",
        "Identified high-entropy encrypted files and a suspicious executable suggesting a planned system wipe",
        "Found file-search logs for hard drive wiping software — evidence of anti-forensic intent",
        "Password to encrypted file concealed on page 263 of a Merriam Webster dictionary per George's instructions to Martha"
      ],
      technologies: ["FTK Imager","MD5 Hash Utility","AccessData FTK","PNG Metadata Analysis"],
      outcomes: [
        "Established financial fraud: invoice reorganisation to misappropriate company funds",
        "Documented escape plan — Zurich first, then Brazil after six months",
        "Court-ready forensic report maintaining full chain of custody with timestamped logs",
        "All findings compliant with ISO forensic standards for evidence admissibility"
      ],
      skills: ["Digital Forensics","Evidence Handling","Chain of Custody","Metadata Analysis","FTK Imager","Report Writing"]
    },
    {
      id: "y3s1-3",
      semester: "Y3S1",
      title:    "Steganalysis Research Report",
      subtitle: "What a Digital Forensics Investigator Should Know",
      category: "Digital Forensics Research",
      date:     "December 2024",
      icon:     "Eye",
      tags:     ["Steganography","Steganalysis","LSB","DCT","Machine Learning","Forensics"],
      description: "Academic research report examining steganographic techniques and the steganalysis methods a digital forensics investigator must know. Covers spatial/transform domain methods, ML-based detection, real-world case studies, and best practices.",
      highlights: [
        "Covered spatial domain techniques: LSB substitution and pixel value differencing in 8-bit RGB images",
        "Analysed transform domain methods: DCT (JPEG steganography), DWT, and audio phase/spread-spectrum techniques",
        "Documented steganalysis categories: specific (statistical analysis, signature-based), universal (CNN/RNN ML, blind detection, residual analysis), and hybrid",
        "Case study — ISIS: members hid coded messages using hexadecimal and prime numbers inside ordinary images to bypass security checks post-Charlie Hebdo attacks",
        "Case study — Xiaoqing Zheng (GE engineer): embedded turbine design trade secrets inside a sunset photo and emailed it to himself; caught via routine image analysis",
        "Discussed challenges: evolving steganographic techniques, wide media format diversity, false positives/negatives, and computational requirements for ML models",
        "Recommended best practices: automated tooling (EnCase, FTK, PyTorch), ISO 27037 compliance, scenario-based analysis, and continuous training"
      ],
      technologies: ["LSB Analysis","DCT/DWT","PyTorch","MATLAB","EnCase","FTK","Statistical Analysis"],
      outcomes: [
        "15-page academic report with full Harvard referencing submitted December 2024",
        "Comprehensive taxonomy of steganographic and steganalysis techniques",
        "Real-world case studies demonstrating forensic and national security relevance",
        "Best practice framework for digital forensics investigators tackling steganography"
      ],
      skills: ["Research Methodology","Steganography","Steganalysis","Digital Forensics","Academic Writing","ML Detection"]
    },
    {
      id: "y3s1-4",
      semester: "Y3S1",
      title:    "Vulnerable Website Security Analysis",
      subtitle: "OWASP Vulnerability Assessment & Remediation — Group Project",
      category: "Web Application Security",
      date:     "November 2024",
      icon:     "Lock",
      tags:     ["Web Security","OWASP","Python Flask","Burp Suite","XSS","SQL Injection"],
      description: "Group project (with Eryk Glowacki and Alexandru Diaconu) assessing a vulnerable Python Flask web application, identifying and remediating 10 vulnerabilities across 5 in-lab and 5 self-identified OWASP categories.",
      highlights: [
        "In-lab — Stored XSS: removed Jinja2 |safe filter so script tags are stored as escaped plain text instead of being executed",
        "In-lab — Reflected XSS: removed |safe from search output; all special characters now converted to HTML entities",
        "In-lab — Path Traversal: replaced manual file reads with Flask's send_from_directory; added base_directory containment check returning 403 on escape",
        "In-lab — SQL Injection: replaced f-string queries with parameterised queries using :username/:password placeholders",
        "In-lab — Brute Force: Flask-Limiter (3 req/min per IP), sleep(2) delay on failed login, password field changed from type=text to type=password",
        "Outside-lab — IDOR: added session-based check; users can only view their own profile — any URL manipulation returns 403",
        "Outside-lab — Open Redirect: whitelist of four allowed internal paths; any external destination returns 400 'Invalid destination'",
        "Outside-lab — Plaintext DB passwords: bcrypt+salt applied to all stored passwords via migration script",
        "Outside-lab — Session Hijack / MITM: migrated to HTTPS (openssl self-signed cert), SESSION_COOKIE_SECURE=True, HTTPONLY=True, 30-min timeout, os.urandom(24) secret key",
        "Outside-lab — Clickjacking: added X-Frame-Options: DENY and Content-Security-Policy: frame-ancestors 'none' headers"
      ],
      technologies: ["Python","Flask","Flask-Limiter","bcrypt","HTTPS/SSL","Burp Suite","Jinja2","OWASP Top 10","SQLite"],
      outcomes: [
        "All 10 vulnerabilities identified and remediated with before/after code evidence",
        "Application migrated from HTTP to HTTPS with full session security hardening",
        "Brute force attempts blocked at 3/min; rate-limit returns 429 Too Many Requests",
        "Equal contribution across all three team members (33.33% each)"
      ],
      skills: ["Web Security","Vulnerability Remediation","OWASP Top 10","Secure Coding","Flask Security","Burp Suite","Team Collaboration"]
    },

    // ── Year 3 · Semester 2 ──────────────────────
    {
      id: 1,
      semester: "Y3S2",
      title:    "Professional Penetration Testing",
      subtitle: "Comprehensive Security Assessment & Exploitation",
      category: "Offensive Security",
      date:     "2025",
      icon:     "Target",
      tags:     ["Penetration Testing","Vulnerability Assessment","Exploitation","Security Audit"],
      description: "Complete penetration testing engagement including reconnaissance, vulnerability scanning, exploitation, privilege escalation, and comprehensive reporting. Achieved full marks in practical labs and certification exam.",
      highlights: [
        "Completed 10 comprehensive lab exercises covering TryHackMe rooms and practical scenarios",
        "Performed reconnaissance using Nmap, Google Dorking, Shodan, and passive/active techniques",
        "Conducted vulnerability assessments with Nessus and OpenVAS on Metasploitable targets",
        "Executed exploitation using Metasploit framework on Windows and Linux systems",
        "Demonstrated password cracking with John the Ripper, Hydra, and hash cracking techniques",
        "Performed privilege escalation on Linux systems and wireless security assessments",
        "Completed web application security testing including SQL injection and Burp Suite usage"
      ],
      technologies: ["Kali Linux","Metasploit","Nmap","Burp Suite","Wireshark","John the Ripper","Hydra","Nessus","OpenVAS"],
      outcomes: [
        "Achieved 100% completion on all 10 laboratory exercises",
        "Successfully completed penetration testing certification exam in 2025",
        "Demonstrated proficiency across reconnaissance, exploitation, and post-exploitation phases",
        "Completed 30+ TryHackMe security rooms covering diverse attack vectors"
      ],
      skills: ["Penetration Testing","Exploit Development","Network Security","Security Reporting","Ethical Hacking"]
    },
    {
      id: 3,
      semester: "Y3S2",
      title:    "Open-Source Firewall Analysis",
      subtitle: "Nftables vs FreeBSD Packet Filter",
      category: "Network Security",
      date:     "March 2025",
      icon:     "Shield",
      tags:     ["Firewalls","Network Security","Linux","FreeBSD"],
      description: "Comprehensive research comparing Nftables and FreeBSD PF firewall solutions, testing their effectiveness against real-world attacks including SYN floods, SSH brute force, and NMAP reconnaissance.",
      highlights: [
        "Configured and tested Nftables and FreeBSD's Packet Filter against multiple attack vectors",
        "Implemented rate limiting, packet filtering, and stateful inspection rules",
        "Successfully mitigated DDoS attacks, brute force attempts, and NMAP reconnaissance",
        "Evaluated performance, usability, and logging capabilities of both solutions"
      ],
      technologies: ["Nftables","FreeBSD PF","Hping3","Hydra","Nmap","tcpdump"],
      outcomes: [
        "Both firewalls effectively blocked SYN flood attacks with proper rate limiting",
        "SSH brute force protection limited attempts to 5–7 packets per minute",
        "Successfully filtered multiple NMAP scan types (ACK, FIN, SYN, NULL, XMAS)",
        "Nftables offered superior flexibility; FreeBSD PF provided robust stateful filtering"
      ],
      skills: ["Network Security","Firewall Configuration","Attack Mitigation","Security Testing"]
    },
    {
      id: 8,
      semester: "Y3S2",
      title:    "OSINT Discord Bot Development",
      subtitle: "AI-Powered Intelligence Gathering",
      category: "OSINT & Development",
      date:     "2025",
      icon:     "Search",
      tags:     ["OSINT","AI","Discord Bot","GPT-4","Automation"],
      description: "Research and development of an accessible OSINT tool using Discord bots and GPT-4 integration, making advanced intelligence gathering techniques available to non-technical users.",
      highlights: [
        "Extensive literature review of OSINT tools, accessibility challenges, and AI integration",
        "Analysed the landscape of existing OSINT frameworks and their complexity barriers",
        "Designed architecture for AI-powered Discord bot using GPT-4 for natural language queries",
        "Addressed ethical considerations including privacy, consent, and responsible use"
      ],
      technologies: ["Discord API","GPT-4","Python","OSINT Frameworks","Natural Language Processing"],
      outcomes: [
        "Identified key accessibility gaps in current OSINT tools requiring technical expertise",
        "Proposed solution leveraging Discord's 600M+ user base for wider accessibility",
        "Designed AI-enhanced interface translating complex queries into conversational responses",
        "Established ethical guidelines for responsible OSINT automation"
      ],
      skills: ["OSINT","AI Integration","Bot Development","Security Research","Ethical Computing"]
    },

    // ── Year 4 · Semester 1 ──────────────────────
    {
      id: 2,
      semester: "Y4S1",
      title:    "Static Code Analysis & Security Remediation",
      subtitle: "Vulnerability Detection and Code Hardening",
      category: "Application Security",
      date:     "December 2024",
      icon:     "Code",
      tags:     ["SAST","Snyk","Bandit","Python","Secure Coding"],
      description: "Comprehensive static code analysis of an open-source Python application using Snyk and Bandit SAST tools to identify vulnerabilities, compare tool effectiveness, and implement security fixes for critical issues.",
      highlights: [
        "Analysed WebHound open-source application using Snyk and Bandit SAST tools",
        "Compared detection capabilities of both tools across 11 total vulnerabilities",
        "Fixed CSV Injection vulnerability by implementing proper input sanitisation (csv.QUOTE_ALL)",
        "Remediated Command Injection flaw by replacing os.system() with subprocess.run() and shlex.split()",
        "Documented tool strengths, weaknesses, and detection overlaps",
        "Verified fixes through re-scanning with both static analysis tools"
      ],
      technologies: ["Snyk","Bandit","Python","SAST Tools","subprocess","shlex","CSV Security"],
      outcomes: [
        "Successfully identified 4 issues with Snyk and 7 with Bandit (1 High, 6 Medium severity)",
        "Fixed 2 critical vulnerabilities: CSV Injection and Command Injection",
        "Reduced total vulnerability count from 11 to 9 issues",
        "Produced detailed technical report with before/after code comparisons"
      ],
      skills: ["Static Analysis","Secure Coding","Vulnerability Remediation","Python Security","SAST Tools"]
    },
    {
      id: "c2",
      semester: "Y4S1",
      title:    "Digital Forensic Investigation — CA3",
      subtitle: "Windows XP Disk Image Analysis — Extortion Case",
      category: "Digital Forensics",
      date:     "April 2026",
      icon:     "Database",
      tags:     ["Digital Forensics","Autopsy","FTK Imager","EXIF","E01","Outlook Express"],
      description: "Full forensic investigation of a Windows XP disk image (Case CA3-2026-001) using Autopsy 4.21 and FTK Imager. Established premeditation in an extortion case through email analysis, EXIF metadata, and deleted file recovery.",
      highlights: [
        "Three E01 images verified by MD5 checksums for evidence integrity",
        "154 EXIF-tagged Canon PowerShot G2 surveillance photos analysed; photographer identified via reflection in image 102-0283",
        "Five Outlook Express DBX mailboxes parsed — full communications timeline reconstructed",
        "1,978 deleted files recovered; wbk93.tmp Word auto-recovery artefact found",
        "Chain of custody maintained throughout; NIST SP 800-86 methodology applied",
        "Premeditation established from 22 May 2002; earliest artefact 31 March (stalking URL)"
      ],
      technologies: ["Autopsy 4.21","FTK Imager 4.7","Win11 ARM64 VM (UTM)","MD5 Verification","EXIF Analysis","DBX Parser"],
      outcomes: [
        "Principal user Bob Hunter linked to accomplice Billy Ray via email and photo metadata",
        "Extortion targets John Detsiwt and Ted Dewercs identified; aliases decoded (twisted/screwed)",
        "34-page court-ready forensic report with 78 figures produced",
        "Thematic exhibit structure: Communications, Photographic/EXIF, Anti-Forensic"
      ],
      skills: ["Digital Forensics","Evidence Handling","Chain of Custody","EXIF Analysis","Outlook Express DBX","Report Writing"]
    },
    {
      id: "c3",
      semester: "Y4S1",
      title:    "BCM & DR — AWS Pilot Light Strategy",
      subtitle: "GlobalHealth Connect Healthcare API",
      category: "Cloud Security & Business Continuity",
      date:     "April 2026",
      icon:     "Activity",
      tags:     ["AWS","Pilot Light DR","BCP","Cloud Security","Python boto3"],
      description: "Designed and implemented a Pilot Light disaster recovery strategy for a fictional healthcare API across two AWS regions (eu-west-1 primary, eu-west-2 DR), with automated failover via Python boto3 and full BCP documentation.",
      highlights: [
        "RTO 4 hours / RPO 1 hour SLA targets achieved in chaos testing",
        "EC2 + Apache + MariaDB primary; AMI copied to eu-west-2 for DR readiness",
        "S3 versioning + SSE-S3 + Cross-Region Replication for data durability",
        "DLM daily snapshots with cross-region copy; IAM least-privilege role configured",
        "Python failover.py (boto3) executed successfully in chaos test",
        "AWS account torn down at $0.00 after lab completion"
      ],
      technologies: ["AWS EC2","S3","DLM","IAM","Python boto3","Amazon Linux 2023","Apache","MariaDB"],
      outcomes: [
        "Fully deployed and tested Pilot Light DR infrastructure across 2 AWS regions",
        "Automated failover script validated in simulated chaos scenario",
        "2,500-word BCP report covering BIA, risk assessment, and security architecture",
        "Complete teardown demonstrated cost discipline and clean lab hygiene"
      ],
      skills: ["AWS Architecture","Disaster Recovery","Business Continuity","Python Automation","Cloud Security"]
    },
    {
      id: "c4",
      semester: "Y4S1",
      title:    "iOS Mobile Device Forensics",
      subtitle: "iLEAPP Analysis of iTunes Backup",
      category: "Mobile Forensics",
      date:     "2025/26",
      icon:     "Eye",
      tags:     ["iLEAPP","iOS Forensics","iTunes Backup","NIST SP 800-101","SQLite"],
      description: "Open-source iOS forensic investigation using iLEAPP v2.3.1 on a 2.3GB encrypted iTunes backup from a Hickman iOS 17 test image. Documented methodology following NIST SP 800-101 and ISO/IEC 27037 frameworks.",
      highlights: [
        "Extracted 6,953 files from encrypted iTunes backup",
        "iLEAPP v2.3.1 command-line analysis with UTC timezone normalisation",
        "Cellebrite FFS zip64 extraction failure documented as forensic limitation across 6 tools",
        "DB Browser for SQLite + plutil used for cross-validation of artefacts",
        "MD5 integrity verified: iOS image e115f051d15178fa1334489e24c9f0fd MATCH",
        "34-page Word report in TUD house style with Harvard referencing"
      ],
      technologies: ["iLEAPP v2.3.1","DB Browser for SQLite","plutil","Python","FTK Imager","macOS CLI"],
      outcomes: [
        "Full artefact inventory from iOS 17 encrypted backup",
        "Documented tool limitations as valid forensic findings",
        "Chain of custody and acquisition methodology compliant with ISO/IEC 27037",
        "Rody Quinlan tutorial-style lab report — 23 sections, 34 pages"
      ],
      skills: ["Mobile Forensics","iOS Analysis","Chain of Custody","Technical Writing","NIST SP 800-101"]
    },

    // ── Year 4 · Semester 2 ──────────────────────
    {
      id: "c1",
      semester: "Y4S2",
      title:    "Phishing URL Detection Chrome Extension",
      subtitle: "XGBoost ML Model — Final Year Project",
      category: "Machine Learning & AppSec",
      date:     "2025/26",
      icon:     "Shield",
      tags:     ["XGBoost","Python","Chrome Extension","ML","Phishing Detection"],
      description: "Final year project building a Chrome extension that detects phishing URLs in real-time using a trained XGBoost model on 30+ lexical features, achieving F1=0.918 on the PhreshPhish dataset with sub-2µs inference.",
      highlights: [
        "Trained on PhreshPhish dataset (666k URLs, 80/20 split + 168k held-out test)",
        "XGBoost winner: F1=0.918, FPR=4.32%, inference ~1.2µs per URL",
        "30 lexical URL-only features — no external lookups required",
        "Evaluated against LogReg and Random Forest baselines",
        "Pushed past baseline SOTA via Tranco rank + additional lexical features",
        "Chrome extension manifest v3 integration for real-time classification"
      ],
      technologies: ["XGBoost","Python","Scikit-learn","Chrome Extension API","Kaggle GPU","PhreshPhish Dataset"],
      outcomes: [
        "F1=0.918 on 168k held-out test set — strongest result across all models",
        "FPR of 4.32% — competitive with published URL-only approaches",
        "End-to-end pipeline: feature extraction → model inference → extension alert",
        "Threshold-tuned to minimise false positives in live browsing"
      ],
      skills: ["Machine Learning","Feature Engineering","Secure Browser Extension","Phishing Research","Python"]
    },
    {
      id: 9,
      semester: "Y4S2",
      title:    "ZeroDays CTF 2026",
      subtitle: "Top 25% Overall · Top 15% College — Croke Park",
      category: "Competitive Security",
      date:     "March 2026",
      icon:     "Target",
      tags:     ["CTF","Binary Exploitation","OSINT","Forensics","Reverse Engineering"],
      description: "Competed as team Fantastic4-1 at ZeroDays CTF 2026 hosted at Croke Park, finishing in the top 25% overall (33rd/147 teams) and top 15% of the college category, solving challenges across forensics, binary exploitation, and OSINT.",
      highlights: [
        "Solved FTP pcap challenge — extracted flag from baby.gif via Wireshark stream analysis",
        "Repaired corrupt JPEG with JFIF header (original header replaced with 'get trolled')",
        "64-bit ELF buffer overflow: identified 72-byte offset and crafted ROP chain for shell",
        "OSINT chain: Twitter → Reddit → base64 hexdump PDF hidden in Wingdings font",
        "Prepared Kali ARM64 VM (VirtualBox) with nmap, pwntools, binwalk, exiftool, john-jumbo",
        "Top 15% in college category across all participating university teams"
      ],
      technologies: ["Kali Linux","pwntools","Wireshark","Binwalk","ExifTool","John the Ripper","GDB","Python"],
      outcomes: [
        "Top 25% overall — 33rd out of 147 competing teams",
        "Top 15% in college category across all participating universities",
        "Multiple solve categories: forensics, binary exploitation, OSINT, steganography",
        "Demonstrated team coordination under timed competition conditions"
      ],
      skills: ["Binary Exploitation","OSINT","Digital Forensics","CTF Strategy","ROP Chains","Steganography"]
    }
  ],

  // ── EDUCATION ─────────────────────────────────
  education: {
    university: "TU Dublin",
    degree:     "BSc in Computing (Cybersecurity)",
    overallProgress: { completedCredits: 240, totalCredits: 240 },
    cumulativeGPA: "3.73",
    coursesByYear: {
      year4: {
        year:  "Year 4 (2025–2026)",
        stage: "Stage 4 — Final Year",
        gpa:   "3.73",
        modules: [
          { name: "Application Security & Forensics",          credits: 10, grade: "A1"  },
          { name: "Biometrics",                                credits: 10, grade: "A1"  },
          { name: "Network Security",                          credits: 10, grade: "B1"  },
          { name: "Individual Project (FYP)",                  credits: 20, grade: "A2"  },
          { name: "Mobile Device Forensics",                   credits: 10, grade: "A2"  },
          { name: "Business Continuity Management & Cloud Computing", credits: 10, grade: "A3" }
        ]
      },
      year3: {
        year:  "Year 3 (2023–2024)",
        stage: "Stage 3",
        gpa:   "3.33",
        modules: [
          { name: "Network Security",             credits: 10, grade: "B"  },
          { name: "Secure Programming",           credits: 10, grade: "A"  },
          { name: "Group Project",                credits: 10, grade: "A"  },
          { name: "Computer & Network Forensics", credits: 10, grade: "B+" },
          { name: "Secure Communications",        credits: 10, grade: "B-" },
          { name: "Professional Pen Testing",     credits: 10, grade: "B-" }
        ]
      },
      year2: {
        year:  "Year 2 (2022–2023)",
        stage: "Stage 2",
        gpa:   "3.23",
        modules: [
          { name: "Web Development Server-Side",         credits: 5, grade: "B"  },
          { name: "Advanced Programming",                credits: 5, grade: "A"  },
          { name: "WAN Technologies",                    credits: 5, grade: "B+" },
          { name: "Software Engineering & Testing",      credits: 5, grade: "B"  },
          { name: "Operating Systems",                   credits: 5, grade: "B"  },
          { name: "IT Business Management",              credits: 5, grade: "B+" },
          { name: "Database Fundamentals",               credits: 5, grade: "B+" },
          { name: "GUI Programming",                     credits: 5, grade: "A"  },
          { name: "LAN Switching & Wireless",            credits: 5, grade: "C"  },
          { name: "Information Technology Mathematics",  credits: 5, grade: "B"  },
          { name: "Object Oriented Analysis & Design",   credits: 5, grade: "B-" },
          { name: "Interactive Multimedia",              credits: 5, grade: "B+" }
        ]
      },
      year1: {
        year:  "Year 1 (2021–2022)",
        stage: "Stage 1",
        gpa:   "3.65",
        modules: [
          { name: "Fundamentals of Programming 2",  credits: 10, grade: "A"  },
          { name: "Computer Architecture",          credits: 5,  grade: "B+" },
          { name: "Mathematics for Computing",      credits: 5,  grade: "B"  },
          { name: "Routers & Routing Basics",       credits: 5,  grade: "B+" },
          { name: "Web Development Client-Side",    credits: 5,  grade: "A"  },
          { name: "Computer Systems",               credits: 5,  grade: "B-" },
          { name: "Networking Basics",              credits: 5,  grade: "A"  },
          { name: "Web Development Fundamentals",   credits: 5,  grade: "A"  },
          { name: "Fundamentals of Programming 1",  credits: 5,  grade: "A"  },
          { name: "Personal & Professional Dev.",   credits: 5,  grade: "B"  },
          { name: "Algorithmic Problem Solving",    credits: 5,  grade: "A"  }
        ]
      }
    }
  }
};


// ══════════════════════════════════════════════════
//  Icons
// ══════════════════════════════════════════════════
const ICONS = {
  Shield:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  Lock:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  Eye:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  Target:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  Code:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  Database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
  Search:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',
  Activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>'
};

function icon(name) { return ICONS[name] || ICONS.Shield; }


// ══════════════════════════════════════════════════
//  Colour bars per category
// ══════════════════════════════════════════════════
const CAT_COLOURS = {
  "Machine Learning & AppSec":       "linear-gradient(90deg,#3b7aff,#9b5cff)",
  "Digital Forensics":               "linear-gradient(90deg,#9b5cff,#3b7aff)",
  "Cloud Security & Business Continuity": "linear-gradient(90deg,#00e6b4,#3b7aff)",
  "Mobile Forensics":                "linear-gradient(90deg,#3b7aff,#00e6b4)",
  "Offensive Security":              "linear-gradient(90deg,#ff4d6d,#ff8c42)",
  "Secure Programming":              "linear-gradient(90deg,#00e6b4,#3b7aff)",
  "Network Security":                "linear-gradient(90deg,#3b7aff,#00e6b4)",
  "Digital Forensics Research":      "linear-gradient(90deg,#9b5cff,#ff4d6d)",
  "Web Application Security":        "linear-gradient(90deg,#ff4d6d,#9b5cff)",
  "OSINT & Development":             "linear-gradient(90deg,#ff8c42,#ff4d6d)",
  "Competitive Security":            "linear-gradient(90deg,#ffbd2e,#ff4d6d)"
};
function colourBar(category) {
  return CAT_COLOURS[category] || "linear-gradient(90deg,#00e6b4,#3b7aff)";
}


// ══════════════════════════════════════════════════
//  Init
// ══════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  loadProfile();
  loadProjects();
  loadEducation();
  initNavigation();
  initTabs();
  initModal();
});


// ── Profile ───────────────────────────────────────
function loadProfile() {
  const p = portfolioData.profile;
  document.getElementById('profileName').textContent    = p.name;
  document.getElementById('profileTagline').textContent = p.tagline;
  document.getElementById('profileBio').textContent     = p.bio;
  document.getElementById('emailBtn').href              = `mailto:${p.email}`;
  document.getElementById('linkedinBtn').href           = p.linkedin;
  const gh = document.getElementById('githubBtn');
  if (gh) gh.href = p.github;
  document.getElementById('footerText').textContent     = `© 2026 ${p.name} · ${p.university}`;
}


// ── Semester config ───────────────────────────
const SEMESTER_ORDER  = ['Y3S1','Y3S2','Y4S1','Y4S2'];
const SEMESTER_LABELS = {
  Y3S1: 'Year 3 · Semester 1',
  Y3S2: 'Year 3 · Semester 2',
  Y4S1: 'Year 4 · Semester 1',
  Y4S2: 'Year 4 · Semester 2',
};

// ── Projects (semester slider) ────────────────────
let projSlides = [];   // ordered list of populated semester keys
let projIndex  = 0;

function loadProjects() {
  const grid = document.getElementById('completedProjects');

  // Group projects by semester
  const groups = {};
  SEMESTER_ORDER.forEach(s => groups[s] = []);
  portfolioData.completedProjects.forEach(p => {
    const key = p.semester || 'Y3S1';
    if (groups[key]) groups[key].push(p);
  });

  projSlides = SEMESTER_ORDER.filter(k => groups[k].length);

  const slidesHTML = projSlides.map(key => `
    <div class="slide">
      <div class="semester-header">
        <span class="sem-line"></span>
        <span class="sem-label">${SEMESTER_LABELS[key]}</span>
        <span class="sem-line"></span>
      </div>
      <div class="semester-subgrid">
        ${groups[key].map(p => cardHTML(p, false)).join('')}
      </div>
    </div>`).join('');

  const dotsHTML = projSlides.map((key, i) =>
    `<button class="slider-dot${i === 0 ? ' active' : ''}" data-i="${i}" aria-label="${SEMESTER_LABELS[key]}"></button>`
  ).join('');

  grid.innerHTML = `
    <div class="slider">
      <div class="slider-viewport">
        <div class="slider-track" id="projTrack">${slidesHTML}</div>
      </div>
      <div class="slider-controls">
        <button class="slider-btn" id="projPrev" aria-label="Previous semester">←</button>
        <div class="slider-dots" id="projDots">${dotsHTML}</div>
        <button class="slider-btn" id="projNext" aria-label="Next semester">→</button>
      </div>
    </div>`;

  document.getElementById('currentProjects').innerHTML = '';

  document.getElementById('projPrev').addEventListener('click', () => goProj(projIndex - 1));
  document.getElementById('projNext').addEventListener('click', () => goProj(projIndex + 1));
  document.querySelectorAll('#projDots .slider-dot').forEach(d =>
    d.addEventListener('click', () => goProj(+d.dataset.i)));

  goProj(0);
}

function goProj(i) {
  projIndex = Math.max(0, Math.min(i, projSlides.length - 1));
  document.getElementById('projTrack').style.transform = `translateX(-${projIndex * 100}%)`;
  document.querySelectorAll('#projDots .slider-dot').forEach((d, idx) =>
    d.classList.toggle('active', idx === projIndex));
  document.getElementById('projPrev').disabled = projIndex === 0;
  document.getElementById('projNext').disabled = projIndex === projSlides.length - 1;
}

function cardHTML(p, isCurrent) {
  const tags = p.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('') +
    (p.tags.length > 3 ? `<span class="tag">+${p.tags.length - 3}</span>` : '');

  return `
    <div class="project-card" onclick="openProjectModal('${p.id}', false)">
      <div class="project-color-bar" style="background:${colourBar(p.category)}"></div>
      <div class="project-body">
        <div class="project-header">
          <div class="project-icon-wrap">${icon(p.icon)}</div>
          <span class="project-date">${p.date}</span>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-subtitle">${p.subtitle}</p>
        <div class="project-tags">${tags}</div>
        <p class="project-description">${p.description}</p>
        <div class="project-footer">
          <span class="project-category">${p.category}</span>
          <span class="project-arrow">View details →</span>
        </div>
      </div>
    </div>`;
}


// ── Education (year slider) ───────────────────────
let eduSlides = [];   // ordered year keys, chronological
let eduIndex  = 0;

function loadEducation() {
  const edu = portfolioData.education;
  document.getElementById('educationInfo').textContent =
    `${edu.university} — ${edu.degree}`;
  document.getElementById('creditsProgress').textContent =
    `${edu.overallProgress.completedCredits} / ${edu.overallProgress.totalCredits}`;
  document.getElementById('cumulativeGPA').textContent = edu.cumulativeGPA;

  // chronological: year1 → year4
  eduSlides = Object.keys(edu.coursesByYear).sort();

  const gradeClass = g => {
    if (!g || g === 'TBD') return 'grade-tbd';
    if (g.startsWith('A')) return 'grade-a';
    if (g.startsWith('B')) return 'grade-b';
    if (g.startsWith('C')) return 'grade-c';
    return 'grade-tbd';
  };

  const slidesHTML = eduSlides.map(key => {
    const y = edu.coursesByYear[key];
    const courses = y.modules.map(m => `
      <div class="course-card">
        <div class="course-meta">
          <div class="course-name">${m.name}</div>
          <div class="course-credits">${m.credits} credits</div>
        </div>
        <div class="grade-badge ${gradeClass(m.grade)}">${m.grade}</div>
      </div>`).join('');

    return `
      <div class="slide">
        <div class="semester-header">
          <span class="sem-line"></span>
          <span class="sem-label">${y.year} · ${y.stage}</span>
          <span class="sem-line"></span>
        </div>
        <div class="courses-grid">${courses}</div>
        <div class="stage-summary">
          <div class="summary-item">
            <span class="stat-label">Stage</span>
            <span class="stat-value">${y.stage}</span>
          </div>
          <div class="summary-item">
            <span class="stat-label">Modules</span>
            <span class="stat-value">${y.modules.length}</span>
          </div>
          <div class="summary-item">
            <span class="stat-label">Stage GPA</span>
            <span class="stat-value highlight">${y.gpa}</span>
          </div>
        </div>
      </div>`;
  }).join('');

  // year-tabs act as jump buttons
  document.getElementById('yearTabs').innerHTML = eduSlides.map((key, i) => {
    const y = edu.coursesByYear[key];
    return `
      <button class="year-tab" data-i="${i}">
        <div class="year-tab-year">${y.year}</div>
        <div class="year-tab-gpa">GPA: ${y.gpa}</div>
      </button>`;
  }).join('');

  // build slider shell inside coursesGrid container
  document.getElementById('coursesGrid').innerHTML = `
    <div class="slider">
      <div class="slider-viewport">
        <div class="slider-track" id="eduTrack">${slidesHTML}</div>
      </div>
      <div class="slider-controls">
        <button class="slider-btn" id="eduPrev" aria-label="Previous year">←</button>
        <div class="slider-dots" id="eduDots"></div>
        <button class="slider-btn" id="eduNext" aria-label="Next year">→</button>
      </div>
    </div>`;
  document.getElementById('stageSummary').innerHTML = '';

  document.getElementById('eduDots').innerHTML = eduSlides.map((key, i) =>
    `<button class="slider-dot${i === 0 ? ' active' : ''}" data-i="${i}"></button>`).join('');

  document.getElementById('eduPrev').addEventListener('click', () => goEdu(eduIndex - 1));
  document.getElementById('eduNext').addEventListener('click', () => goEdu(eduIndex + 1));
  document.querySelectorAll('#eduDots .slider-dot').forEach(d =>
    d.addEventListener('click', () => goEdu(+d.dataset.i)));
  document.querySelectorAll('#yearTabs .year-tab').forEach(t =>
    t.addEventListener('click', () => goEdu(+t.dataset.i)));

  goEdu(0);
}

function goEdu(i) {
  eduIndex = Math.max(0, Math.min(i, eduSlides.length - 1));
  document.getElementById('eduTrack').style.transform = `translateX(-${eduIndex * 100}%)`;
  document.querySelectorAll('#eduDots .slider-dot').forEach((d, idx) =>
    d.classList.toggle('active', idx === eduIndex));
  document.querySelectorAll('#yearTabs .year-tab').forEach((t, idx) =>
    t.classList.toggle('active', idx === eduIndex));
  document.getElementById('eduPrev').disabled = eduIndex === 0;
  document.getElementById('eduNext').disabled = eduIndex === eduSlides.length - 1;
}


// ── Navigation ────────────────────────────────────
function initNavigation() {
  const links = document.querySelectorAll('.nav-link');
  const menu  = document.getElementById('navMenu');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      menu.classList.remove('active');
    });
  });

  document.getElementById('navToggle').addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Highlight nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));
}


// ── Tabs ──────────────────────────────────────────
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      document.getElementById(tab === 'completed' ? 'completedProjects' : 'currentProjects')
        .classList.add('active');
    });
  });
}


// ── Modal ─────────────────────────────────────────
function initModal() {
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.querySelector('.modal-overlay').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function openProjectModal(id, isCurrent) {
  const p = portfolioData.completedProjects.find(x => String(x.id) === String(id));
  if (!p) return;

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-color-strip" style="background:${colourBar(p.category)}"></div>
    <div style="padding:2rem 0 0">
      <span class="project-date" style="margin-bottom:.75rem;display:inline-block">${p.date}</span>
      <h2 class="modal-title">${p.title}</h2>
      <p class="modal-subtitle">${p.subtitle}</p>
      <div class="project-tags" style="margin-bottom:1.5rem">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>

    <div class="modal-section">
      <h4>Overview</h4>
      <p>${p.description}</p>
    </div>

    <div class="modal-section">
      <h4>Key Highlights</h4>
      <ul>${p.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
    </div>

    <div class="modal-section">
      <h4>Technologies & Tools</h4>
      <div class="project-tags">
        ${p.technologies.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>

    <div class="modal-section">
      <h4>Outcomes & Results</h4>
      <ul>${p.outcomes.map(o => `<li>${o}</li>`).join('')}</ul>
    </div>

    <div class="modal-section">
      <h4>Skills Demonstrated</h4>
      <div class="project-tags">
        ${p.skills.map(s => `<span class="tag skill-tag">${s}</span>`).join('')}
      </div>
    </div>`;

  document.getElementById('projectModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('projectModal').classList.remove('active');
  document.body.style.overflow = '';
}
