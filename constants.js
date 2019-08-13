// @flow
import * as d3 from 'd3'

export type TrackId = 'MOBILE' | 'WEB_CLIENT' | 'FOUNDATIONS' | 'SERVERS' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'INITIATIVE' |
  'CAREER_DEVELOPMENT' | 'ORG_DESIGN' | 'TEAMS_GROWTH' | 'ACCOMPLISHMENT' |
  'MENTORSHIP' | 'EVANGELISM' | 'RECRUITING' | 'COMMUNITY'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  // 'MOBILE': Milestone,
  'WEB_CLIENT': Milestone,
  'FOUNDATIONS': Milestone,
  'SERVERS': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'COMMUNICATION': Milestone,
  'CRAFT': Milestone,
  'INITIATIVE': Milestone,
  'CAREER_DEVELOPMENT': Milestone,
  'ORG_DESIGN': Milestone,
  'TEAMS_GROWTH': Milestone,
  'ACCOMPLISHMENT': Milestone,
  'MENTORSHIP': Milestone,
  'EVANGELISM': Milestone,
  'RECRUITING': Milestone,
  'COMMUNITY': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'MOBILE': Track,
  'WEB_CLIENT': Track,
  'FOUNDATIONS': Track,
  'SERVERS': Track,
  'PROJECT_MANAGEMENT': Track,
  'COMMUNICATION': Track,
  'CRAFT': Track,
  'INITIATIVE': Track,
  'CAREER_DEVELOPMENT': Track,
  'ORG_DESIGN': Track,
  'TEAMS_GROWTH': Track,
  'ACCOMPLISHMENT': Track,
  'MENTORSHIP': Track,
  'EVANGELISM': Track,
  'RECRUITING': Track,
  'COMMUNITY': Track
|}

export const tracks: Tracks = {
  "MOBILE": {
    "displayName": "Mobile",
    "category": "A",
    "description": "Develops expertise in native mobile platform engineering, such as iOS or Android",
    "milestones": [{
      "summary": "Works effectively within established iOS or Android architectures, following current best practices",
      "signals": [
        "Delivers features requiring simple local modifications",
        "Adds simple actions that call server endpoints",
        "Reuses existing components appropriately",
      ],
      "examples": [
        "Added existing button to a different iOS surface",
        "Add follow button for a Ui item on Android",
        "Fetched and displayed a new list of items, reusing existing list item styles",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Defines new useful and appropriate models",
        "Creates simple new features on Android, by following the existing guidelines",
        "Migrates code from old patterns to new patterns",
      ],
      "examples": [
        "Upgraded Mapbox to a new major version",
        "Added support for rendering a new type of item",
        "Prototyped a simple new feature quickly",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of mobile platform constraints",
      "signals": [
        "Implements complex features with a large product surface area",
        "Works effectively with Android coroutines framework",
        "Adds support for new iOS features after a major iOS version upgrade",
        "Introduces CI/CD upgrades and additions to the current setup",
        "Works effectively with reactive programming techniques"
      ],
      "examples": [
        "Designed iOS caching strategy for offline content",
        "Built a reusable component on Android",
        "Informed the team about recent best practice changes and deprecations",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migration strategies that reduce programmer burden",
        "Fixes subtle memory management issues",
        "Implements interactive dismissals that bring delight",
      ],
      "examples": [
        "Migrated code into a separate framework to be used in other platforms (watchOS, tvOS, etc)",
        "Designed an architecture for fetching and rendering items",
        "Introduced a local database support for caching",
      ],
    }, {
      "summary": "Is an industry-leading expert in mobile engineering or sets strategic mobile direction for an eng team",
      "signals": [
        "Defines long-term goals and ensures active projects are in service of them",
        "Designs and builds innovative, industry-leading UI interactions",
        "Invents new techniques to responsibly stretch limits of the Android platform",
      ],
      "examples": [
        "Defined and drove complete migration plan to Swift or Kotlin",
        "Implemented Android recycler views before platform support existed",
        "Pioneered application-level abstractions for multi-app environment",
      ],
    }],
  },

  "WEB_CLIENT": {
    "displayName": "Web client",
    "category": "A",
    "description": "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript/Typescript",
    "milestones": [{
      "summary": "Works effectively within established web client architectures, following current best practices",
      "signals": [
        "Makes minor modifications to existing screens",
        "Fixes simple design quality issues",
        "Uses CSS appropriately, following style guide",
        "Uses semantic HTML and considers SEO implications of changes",
        "Writes unit tests to cover atomic functions",
      ],
      "examples": [
        "Implemented sticky cookie banner",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Makes sensible abstractions based on code patterns",
        "Specs and builds interactive components independently",
        "Prototypes simple new features quickly",
        "Writes tests that are based on user behaviours, not developer implementations",
      ],
      "examples": [
        "Built premium purchase component",
        "Created shared button components",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of browser constraints",
      "signals": [
        "Provides useful design feedback and suggests feasible alternatives",
        "Performs systemic tasks to significantly minimise bundle size",
        "Acts a caretaker for all of web client code",
        "Considers accessibility issues when implementing features",
      ],
      "examples": [
        "Introduced changes that consistently improve the search ranking of Fishbrain properties",
        "Researched utility of service workers for Fishbrain",
        "Designed and implemented the Catch Map on the web",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migrations that reduce programmer burden",
        "Implements complex UI transitions that bring delight",
        "Makes architectural decisions that eliminate entire classes of bugs",
        "Uses cutting-edge technologies (e.g. webassembly, webGL) to solve problems previously considered unsolveable",
      ],
      "examples": [
        "Introduced data caching strategies to improve overall client performance",
        "Implemented end-to-end testing of the web client",
      ],
    }, {
      "summary": "Is an industry-leading expert in web client or sets strategic web client direction for an eng team",
      "signals": [
        "Invents new techniques to innovate and overcome browser constraints",
        "Identifies and solved systemic problems with current architecture",
        "Defines a long-term vision for web client and ensures projects are in service of it",
        "Designs and builds innovative, industry-leading UI interactions",
      ],
      "examples": [
        "Created a tool or framework that changes how developers solve problems (e.g. CSS-in-JS, React Testing Library, Rollup)",
        "Defined and drove migration strategy to a new software design paradigm",
      ],
    }],
  },

  "FOUNDATIONS": {
    "displayName": "Foundations",
    "category": "A",
    "description": "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
    "milestones": [{
      "summary": "Works effectively within established structures, following current best practices",
      "signals": [
        "Writes thorough postmortems for service/integration outages",
        "Makes simple configuration changes to services",
        "Performs backfills safely and effectively, without causing disruptions in related flows",
        "Knows how to navigate infrastructure and deployments as well as how to make modifications",
      ],
      "examples": [
        "Implemented new ETL pipelines based on existing ones",
        "Took active part in resolving less involved production issue in own component",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Builds machine learning jobs within the ML framework",
        "Triages service issues correctly and independently",
      ],
      "examples": [
        "Made minor version upgrades to technologies",
        "Upgraded Terraform",
        "Create deployment setup for new system mimicking similar existing system",
        "Upgraded ETL efficiency by improving Dynamo to S3 loading",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as primary maintainer for existing critical systems",
        "Designs moderately complex systems",
        "Makes major version upgrades to libraries",
      ],
      "examples": [
        "Designed terraform configuration for a new non-existing service",
        "Implemented new ETL pipeline framework",
        "Designed flexible framework for writing machine learning jobs",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Designs complex projects that encompass multiple systems and technologies",
        "Demonstrates deep knowledge of foundational systems",
        "Introduces new databases and technologies to meet underserved needs",
      ],
      "examples": [
        "Designed AWS configuration management",
        "Take events from batch to stream",
      ],
    }, {
      "summary": "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
      "signals": [
        "Designs transformational projects in service of long-term goals",
        "Defines the strategic vision for foundational work and supporting technologies",
        "Invents industry-leading techniques to solve complex problems",
      ],
      "examples": [
        "Invented a novel ML technique that advanced the state of the art",
      ],
    }],
  },

  "SERVERS": {
    "displayName": "Servers",
    "category": "A",
    "description": "Contributed postively for the backend codebase, coding, refactoring, testing, restructuring.",
    "milestones": [{
      "summary": "Works effectively with established server side codebase, following current best practices.",
      "signals": [
        "Knows how to follow up performance of implemented features",
        "Changes behaviour of endpoints",
        "Improves test quality",
        "Adds new use cases in code",
        "Introduces optimizations",
        "Improves coding standards",
      ],
      "examples": [
        "-",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements, with large impact, to existing architecture",
      "signals": [
        "Consitently refactors code",
        "Introduces internal libraries",
        "Determines data needs from product requirements",
        "Uses knowledge of infrastructure component to introduce improvements",
        "Tsar go-lives",
      ],
      "examples": [
        "Updated a dependency while fixing breaking changes",
      ],
    }, {
      "summary": "Introduces system component or new feature with major impact on business, performance or architecture",
      "signals": [
        "Conceptualizes or implements new service",
        "Improves handling of infrastructure for improving SLO",
        "Implemented payments integration with Stripe",
        "Manipulates architecture to add new features or sets of features",
      ],
      "examples": [
        "Added a new integration in a project",
        "Added a new test harness",
      ],
    }, {
      "summary": "Builds new architectures that empower new features for developers and business ideas for growing the project",
      "signals": [
        "Introduces new application protocols",
        "Makes appropriate buy vs build choices",
        "Creates new features based on unexpected requests ",
      ],
      "examples": [
        "Adds new architectures to project",
        "Designed Fishbrain's ranked feed architecture",
        "Designed custom domains architecture",
      ],
    }, {
      "summary": "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
      "signals": [
        "Designs transformational projects of significant complexity and scope",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture",
      ],
      "examples": [
        "-",
      ],
    }],
  },

  "PROJECT_MANAGEMENT": {
    "displayName": "Project management",
    "category": "B",
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    "milestones": [{
      "summary": "Effectively delivers individual tasks",
      "signals": [
        "Estimates small tasks accurately",
        "Delivers tightly-scoped projects efficiently",
        "Writes effective technical specs outlining approach",
        "Clarifies desired outcome of a task before starting",
      ],
      "examples": [
        "Delivered user details in CRM for marketing use",
        "Created an Amplitude view to backup the usage of the new marketplace banner",
      ],
    }, {
      "summary": "Effectively delivers small projects (1 person)",
      "signals": [
        "Performs research and considers alternative approaches",
        "Balances pragmatism and polish appropriately",
        "Defines and hits interim milestones",
        "Can critique approach to solve a feature with pros and cons, and suggest improvements in a constructive way",
        "Argues for the suitable level of finish when priorities change and the feature will be paused",
      ],
      "examples": [
        "Executed a data migration in support of a feature",
      ],
    }, {
      "summary": "Effectively delivers projects through a small team",
      "signals": [
        "Delegates tasks to others appropriately",
        "Integrates business needs into project planning",
        "Chooses appropriate project management strategy based on context",
      ],
      "examples": [
        "Ran project retro to assess improvement opportunities",
        "Completed launch checklist unprompted for well controlled rollout",
        "Facilitated project kickoff meeting to get buy-in",
      ],
    }, {
      "summary": "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
      "signals": [
        "Finds ways to deliver requested scope faster, and prioritizes backlog",
        "Manages dependencies on other projects and teams",
        "Leverages recognition of repeated project patterns",
      ],
      "examples": [
        "Oversaw technical delivery of X",
        "Managed infrastructure migration to chosen techinical choice",
        "Involved marketing, legal, and appropriate functions at project start",
      ],
    }, {
      "summary": "Manages major company pushes delivered by multiple teams",
      "signals": [
        "Considers external constraints and business objectives when planning",
        "Leads teams of teams, and coordinates effective cross-functional collaboration",
        "Owns a key company metric",
      ],
      "examples": [
        "Managed technical migration to cross-company affecting platform",
        "Lead technical delivery of cross-company project",
        "Delivered multi-month engineering project on time",
      ],
    }],
  },

  "COMMUNICATION": {
    "displayName": "Communication",
    "category": "B",
    "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
    "milestones": [{
      "summary": "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
      "signals": [
        "Communicates project status clearly and effectively",
        "Considers how their behaviour affects others",
        "Asks for help at the appropriate juncture",
      ],
      "examples": [
        "Informed the slack channel as well as the on call people before running an update in database",
        "Updated project status changes in Jira promptly",
        "Gave thoughtful check-in and check-out comments",
      ],
    }, {
      "summary": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
      "signals": [
        "Practises active listening and suspension of attention",
        "Ensures stakeholders are aware of current blockers",
        "Chooses the appropriate tools for accurate and timely communication",
        "Highlights blockers or opportunities to cross-project teams in a constructive way",
      ],
      "examples": [
        "Received and integrated critical feedback positively",
        "Involved domain experts before writing spec",
      ],
    }, {
      "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
      "signals": [
        "Resolves communication difficulties between others",
        "Anticipates and shares scheduled deviations well ahead of time",
        "Manages project stakeholder expectations effectively",
      ],
      "examples": [
        "Directed team response effectively during outages",
        "Gave a substantial All Hands presentation on tech challenge/improvement/failure",
        "Gave notice of upcoming related work in Product Meeting or Engineering All Hands",
      ],
    }, {
      "summary": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
      "signals": [
        "Communicates project risk and tradeoffs skillfully and with nuance",
        "Contextualizes and clarifies ambiguous direction and strategy for others",
        "Negotiates resourcing compromises with other teams",
      ],
      "examples": [
        "Led a workshop on topic related to your discipline",
        "Wrote Fishbrain's growth framework and rationale",
        "Aligned the entire organization around a big technical challenge",
      ],
    }, {
      "summary": "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
      "signals": [
        "Defines processes for clear communication for the entire team",
        "Shares the right amount of information with the right people, at the right time, e.g. make sure the quarterly plan is communicated not only to direct reports, but though the whole company and affected teams",
        "Develops and delivers plans to execs, the board, and outside investors",
        "Identifies what information is lacking throughout all the corners of the company in order for everyone to do their work",
      ],
      "examples": [
        "Organized technical part of half year check-in company offsite",
        "Created the communication plan for a large change within your discipline",
        "Presented to the board about key company metrics and projects",
      ],
    }],
  },

  "INITIATIVE": {
    "displayName": "Initiative",
    "category": "B",
    "description": "Challenges the status quo and effects positive organizational change outside of mandated work",
    "milestones": [{
      "summary": "Identifies opportunities for organizational change or product improvements while delivering consistently good quality work",
      "signals": [
        "Tests new code thoroughly, both locally, and in production once shipped",
        "Meaningfully raises discussions and challenges opinions in tactical meetings (sprint planning)",
        "Asks probing questions at company wide meetings",
        "Follows the scout rule \"leave things a bit better than you found it\", for example improves documentation according to company guidelines",
      ],
      "examples": [
        "Proactively shared learnings in the #learning-blog",
        "Reported a bug in the job description and found an owner suiteable for it. ",
      ],
    }, {
      "summary": "Causes change to positively impact a few individuals or minor improvement to an existing product or service by increasing the robustness and reliability of codebases",
      "signals": [
        "Picks bugs off the backlog proactively when blocked elsewhere",
        "Makes design quality improvements unprompted",
        "Takes on technical debt(fixes lint issues, make code more testable) tasks proactively when blocked elsewhere",
        "Realizes when progress is blocked by lack of clarity and proposes fixes",
      ],
      "examples": [
        "Advocated on own behalf for a change in role",
        "Audited Ornatus for possible flows or missing features and proposed fixes",
      ],
    }, {
      "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
      "signals": [
        "Demonstrates concepts proactively with prototypes/design sketches",
        "Fixes high impact bugs outside of regular domain",
        "Identifies problems that nobody wants and takes ownership of them",
        "Creates templates that makes the team more efficient",
        "Gives thoughtful feedback as a domain expert",
        "Focuses the team on quality with regular reminders",
      ],
      "examples": [
        "-",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the engineering organization or a major product impact by modeling great quality with proactive actions, and tackles difficult and subtle system issues",
      "signals": [
        "Champions and pioneers new technologies to solve new classes of problem",
        "Identifies a user need, leads the effort of validation with anglers and actual implemention",
        "Instigates major new features, services, or architectures",
        "Defines guidelines in a team to encourage and faciliate quality in work",
      ],
      "examples": [
        "Implemented and secured support for a major technical change e.g. moving auth to Cognito",
        "Took ownership on migrating old structure to new structure e.g. Catches -> Posts",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the whole company and making quality a central part of the working process",
      "signals": [
        "Galvanizes the entire company and garners buy in for a new strategy",
        "Changes complex organizational processes",
        "Defines policies for the engineering org that encourage quality work",
        "Identifies and eliminates single points of failure throughout the organization",
        "Secures time and resources from execs to support great quality, company wide",
      ],
      "examples": [
        "Led an effort to solve a systemic issue that affects the whole organisation",
      ],
    }],
  },

  "CAREER_DEVELOPMENT": {
    "displayName": "Career development",
    "category": "C",
    "description": "Provides strategic support to engineers to help them build the career they want",
    "milestones": [{
      "summary": "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
      "signals": [
        "Advocates on behalf and in defense of a group member",
        "Shares opportunities for improvements and recognises achievements",
        "Explains appropriate available industry paths",
      ],
      "examples": [
        "Collected and delivered feedback",
        "Discussed career options and areas of interest informally",
        "Hosted a master thesis student from university",
      ],
    }, {
      "summary": "Formally supports and advocates for one person and provides tools to help them solve career problems",
      "signals": [
        "Offers effective career advice to group members, without being prescriptive",
        "Creates space for people to talk through challenges",
      ],
      "examples": [
        "Ensure a group member has an appropriate role on their team",
        "Set up and attended regular, constructive 1:1s",
        "Provided coaching on how to have difficult conversations",
        "Taught group members the GROW model",
      ],
    }, {
      "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
      "signals": [
        "Discusses paths, and creates plans for personal and professional growth",
        "Advocates to align people with appropriate roles within organization",
        "Works with team leads to elevate emerging leaders",
      ],
      "examples": [
        "Reviewed individual group member progression every 6 weeks",
        "Suggested appropriate group member for Tech Lead position",
        "Arranged a requested switch of discipline for a group member",
      ],
    }, {
      "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
      "signals": [
        "Manages team transitions smoothly, respecting team and individual needs",
        "Develops best practices for conflict resolution",
        "Ensures all group members' roles are meeting their career needs",
      ],
      "examples": [
        "Completed training on situational leadership",
        "Built a resourcing plan based on company, team, and individual goals",
        "Prevented regretted attrition with intentional, targeted intervention",
      ],
    }, {
      "summary": "Supports the development of a signficant part of the engineering org, and widely viewed as a trusted advisor",
      "signals": [
        "Supports and develops senior leaders",
        "Pushes everyone to be as good as they can be, with empathy",
      ],
      "examples": [
        "Identified leadership training opportunities for senior leadership",
        "Provided coaching to group leads",
        "Devised Pathwise curriculum for group leads",
        "Advocated to execs for engineer development resources and programs",
      ],
    }],
  },

  "ORG_DESIGN": {
    "displayName": "Org design",
    "category": "C",
    "description": "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
    "milestones": [{
      "summary": "Respects and participates in processes, giving meaningful feedback to help the organization improve",
      "signals": [
        "Reflects on meetings that leave them inspired or frustrated",
        "Teaches others about existing processes",
        "Actively participates and makes contributions within organizational processes",
      ],
      "examples": [
        "Facilitated effective tactical meeting with empathy",
        "Explained tactical meeting format to a new hire",
        "Provided feedback on sprint planning meeting",
      ],
    }, {
      "summary": "Identifies opportunities to improve existing processes and makes changes that positively affect the local team",
      "signals": [
        "Defines meeting structure and cadence that meets team needs",
        "Engages in organizational systems thinking",
        "Advocates for improved diversity and inclusion, and proposes ideas to help",
      ],
      "examples": [
        "Defined weekly planning meeting structure for small team",
        "Improved on-call rotation scheduling",
        "Defined standard channels for inter-team communication",
      ],
    }, {
      "summary": "Develops processes and programs to solve ongoing organizational problems  ",
      "signals": [
        "Creates programs that meaningfully improve organizational diversity",
        "Solves long-standing organizational problems",
        "Reallocates people/resources to meet organizational needs",
      ],
      "examples": [
        "Developed baseline team templates for consistency",
        "Created bug-rotation program to address ongoing quality issues",
        "Defined Guilds manifesto and charter",
      ],
    }, {
      "summary": "Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
      "signals": [
        "Evaluates incentive structures and their effect on execution",
        "Analyzes existing processes for bias and shortfall",
        "Ties abstract concerns to concrete organizational actions or norms",
      ],
      "examples": [
        "Connected mobile recruiting difficulties to focus on excellence",
        "Raised leadership level change discrepancies",
        "Analyzed the hiring rubric for false negative potential",
      ],
    }, {
      "summary": "Leads initiatives to address issues stemming from hidden dynamics and company norms",
      "signals": [
        "Builds programs to train leadership in desired skills",
        "Creates new structures that provide unique growth opportunities",
        "Leads planning and communication for reorgs",
      ],
      "examples": [
        "Lead efforts to increase number of mobile engineers",
        "Directed resources to meaningfully improve diversity at all levels",
        "Built the growth framework rubric",
      ],
    }],
  },

  "TEAMS_GROWTH": {
    "displayName": "Teams Growth",
    "category": "C",
    "description": "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    "milestones": [{
      "summary": "Helping individuals in the team *",
      "signals": [
        "Notices when someone is stuck and reaches out",
        "Focuses on resolving a blocker instead of focusing on who to blame",
        "Reinforces and affirms positive feedback for good work",
      ],
      "examples": [
        "Ensured group members were taking enough vacation",
        "Put themself in another's shoes to understand their perspective",
        "Unblocked a group member",
      ],
    }, {
      "summary": "Fostering of team spirit *",
      "signals": [
        "Validates ongoing work and sustains motivation",
        "Proposes solutions when teams get bogged down or lose momentum",
        "Recognizes issues within local environment and suggests change",
        "Works to encourage ownership of actions and responsibilities",
      ],
      "examples": [
        "Coordinated a small celebration for a project launch",
        "Gave honest feedback about poor performance, with compassion",
      ],
    }, {
      "summary": "Lifting Team members *",
      "signals": [
        "Maintains a pulse on individual and team morale",
        "Aggregates signals of poor performance and creates process for improvement",
        "Helps group members approach problems with curiosity",
        "Investigates motivation and externalities for consistent poor performance",
      ],
      "examples": [
        "Completed training on compromise and negotiation techniques",
        "Worked with group member to address persistent communication failures",
      ],
    }, {
      "summary": "Advocates for the needs of teams and group members, and proactively works to calm the organization",
      "signals": [
        "Ensures team environments are safe and inclusive, proactively",
        "Relieved org tension around product direction by providing extra context",
        "Recognizes heightened situations and toxic or aggressive interactions",
      ],
      "examples": [
        "Empowered a team to drive forward amidst uncertainty",
        "Encouraged group members to focus on what they can control",
        "Protected team from externalities so they could focus on goals",
      ],
    }, {
      "summary": "Org level.../ cross team *",
      "signals": [
        "Recognizes and points out narratives when appropriate",
        "Takes control of dysfunctional teams to organise chaos",
        "Repairs broken team dynamics and builds harmony",
      ],
      "examples": [
        "Turned around the performance of a problematic team",
        "Challenged false narrative and redirected to compassion and empathy",
        "Cultivated and championed a culture of empathy within the entire team",
      ],
    }],
  },

  "MENTORSHIP": {
    "displayName": "Mentorship",
    "category": "D",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    "milestones": [{
      "summary": "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
      "signals": [
        "Makes themself available for informal support and advice",
        "Acts as sounding board for peers and more junior members",
        "Provides sound advice when asked",
      ],
      "examples": [
        "Acted as an onboarding buddy",
        "Paired with an engineer to help them with an unfamiliar area",
        "Helped a colleague understand their feelings",
      ],
    }, {
      "summary": "Mentors people proactively, and guides people to realizations rather than providing the answer",
      "signals": [
        "Takes time to explain concepts and best practices",
        "Asks questions to illuminate concepts, rather than stating them",
        "Allows others to lead efforts when it will help their development",
      ],
      "examples": [
        "Shared interesting article with a team member to help with their growth",
        "Offered unprompted feedback to help growth, with empathy",
        "Lead from behind to support someone new to a role",
      ],
    }, {
      "summary": "Teaches small groups of engineers and contributes to Fishbrain's shared knowledge base",
      "signals": [
        "Avoids siloing information when it can be usefully shared with others",
        "Contributes AB test findings to our learning slack channel",
        "Finds tools that work best for a team member's personality",
      ],
      "examples": [
        "Gave a show and tell session during platform meeting to highlight new tools that you have built",
        "Gave a lunch time presentation on our machine learning effort",
        "Created an internal StackOverflow site",
      ],
    }, {
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
      "signals": [
        "Creates brown bag series and lines up speakers",
        "Draws positive attention to well-modeled mentor and teaching behaviours",
        "Highlights engineer's strength and the benefit of improving a particular skillset in the group",
      ],
      "examples": [
        "Have a quarterly feedback session for Android engineers that brings forward individual strengths that can be mentored to others",
        "Created and lead Fishbrain's Women in Eng group (or an ERG of your discipline (employee resource group))",
        "Organized a guild All Hands with an outside speaker",
      ],
    }, {
      "summary": "Instills and promotes a culture of learning and development within the entire engineering team ",
      "signals": [
        "Sets incentive structures to recognise and reward mentorship",
        "Empowers team members to develop themselves",
        "Role models productive and healthy mentor relationships",
      ],
      "examples": [
        "Instituted the professional education budget for engineers",
        "Mentored mentors",
        "Started the eng advisor program and lined up external mentors",
      ],
    }],
  },

  "EVANGELISM": {
    "displayName": "Evangelism",
    "category": "D",
    "description": "Promotes Fishbrain to the outside world and establishes it as an attractive and thoughtful place to work",
    "milestones": [{
      "summary": "Represents Fishbrain well externally, and influences individuals positively",
      "signals": [
        "Shares personal and organizational successes with their network",
        "Attends Fishbrain-hosted events and talks with guests",
        "Communicates genuine and honest excitement about their work externally",
      ],
      "examples": [
        "Shared a Fishbrain product launch post on social media",
        "Acted as a guide for a non-friend visitor to the office",
        "Supported PR efforts by giving a quote or having a photo taken",
      ],
    }, {
      "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
      "signals": [
        "Takes meaningful action to introduce people to Fishbrain",
      ],
      "examples": [
        "Joined public Slack group and represented Fishbrain appropriately, and well",
        "Organizes positive small- or medium-sized events that bring people to Fishbrain",
        "Volunteered as a helper for GraphQL workshop",
        "Organized a short tour of the office by college students",
        "Talked at a Women Who Code event hosted at Fishbrain",
      ],
    }, {
      "summary": "Works hard to positively influence large groups of people on their views of Fishbrain",
      "signals": [
        "Mentors or participates in a high visibility way in an external organization",
        "Builds fruitful partnerships with external organizations",
        "Writes blog posts about Fishbrain that receive moderate traffic",
      ],
      "examples": [
        "Represented Fishbrain on a panel at a conference of industry experts",
        "Established close ties with Creative Commons",
        "Built a durable, long-standing relationship with GraphQL",
      ],
    }, {
      "summary": "Establishes Fishbrain as an great, innovative company and workplace to the whole industry",
      "signals": [
        "Establishes themself as an industry thought leader who attracts talent",
        "Publishes material about Fishbrain's organizational or technical innovations",
        "Leverages significant following to evangelise Fishbrain",
      ],
      "examples": [
        "Gets invited to panels/conferences to share Fishbrain's view on discipline topics",
        "Published a paper on Fishbrain technology in a peer-reviewed journal",
        "Published \"TDD is the way forward\" on the Fishbrain engineering blog",
      ],
    }, {
      "summary": "Introduces Fishbrain in a positive light to a wider audience outside the industry",
      "signals": [
        "Delivers key messages to broad, mainstream audiences",
        "Influences people with large audiences to talk about Fishbrain positively",
        "Drives recognition and adoption of Fishbrain in significant numbers",
      ],
      "examples": [
        "Published or interviewed in a mainstream newspaper or website outside tech",
        "Keynoted a conference with international attention",
        "Represented Fishbrain in national televised media",
      ],
    }],
  },

  "RECRUITING": {
    "displayName": "Recruiting",
    "category": "D",
    "description": "Strengthens Fishbrain's team by bringing in excellent staff members",
    "milestones": [{
      "summary": "Brings new candidates into the pipeline and understands how to evaluate candidates at Fishbrain",
      "signals": [
        "Reviews existing network for hiring leads regularly",
        "Shadows interviews to gain familiarity with process",
        "Reviews current job postings regularly",
      ],
      "examples": [
        "Completed interview calibration",
        "Set up casual sessions to practice asking questions",
        "Referred appropriate individuals for open positions",
      ],
    }, {
      "summary": "Interviews regularly, helps the team make meaningful hiring decisions, and helps build a diverse pipeline",
      "signals": [
        "Uses interview rubric to provide clear, objective feedback on candidates",
        "Interviews candidates with empathy and treats them all with equal respect",
        "Researches approaches for sourcing candidates and diversifying hiring",
      ],
      "examples": [
        "Added observable evidence for every rating",
        "Provided very honest feedback for both the hiring committee and the candidate",
        "Tested a new service for quality and diversity of candidates",
      ],
    }, {
      "summary": "Maintains and strengthens the integrity of the current process, and regularly brings in great candidates",
      "signals": [
        "Teaches new interviewers how to interview with empathy",
        "Models great interview technique and feedback when shadowed",
        "Reverse shadows trainees and helps calibrate their feedback",
      ],
      "examples": [
        "Wrote new interview question which meets our question quality criteria",
        "Brought candidates into our pipeline proactively, with a high conversion rate",
        "Proposed useful, tangible improvements to the interview process",
      ],
    }, {
      "summary": "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
      "signals": [
        "Documents subtle cues in interviews that indicate values alignment",
        "Makes hiring decisions, resolving discrepancies between conflicting reports",
        "Top-grades candidates and teases out character traits",
      ],
      "examples": [
        "Planned engineering summit on interview process and training",
        "Organized and lead Fishbrain's presence at a recruitment fair",
        "Started and run Fishbrain internship program",
      ],
    }, {
      "summary": "Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
      "signals": [
        "Sets the tone, policy and goals around building a diverse, high-quality team",
        "Identifies and brings in promising acquisitions",
        "Tracks industry activity, identifying opportunities for critical roles",
      ],
      "examples": [
        "Talked with a senior candidate over many months to fill a critical role",
        "Organized half yearly Android retro lunch to highlight achievements and learnings for the past 6 months, illustrating the progress that has been made",
        "Set goals, then tracked and reported metrics on team demographics over time",
      ],
    }],
  },

}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles = [
  {label: 'Engineer I', minPoints: 0, maxPoints: 16},
  {label: 'Engineer II', minPoints: 17, maxPoints: 35},
  {label: 'Senior Engineer', minPoints: 36, maxPoints: 57},
  {label: 'Group Lead', minPoints: 36, maxPoints: 57},
  {label: 'Staff Engineer', minPoints: 58, maxPoints: 89},
  {label: 'Senior Group Lead', minPoints: 58, maxPoints: 89},
  {label: 'Principal Engineer', minPoints: 90},
  {label: 'Director of Engineering', minPoints: 90}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
