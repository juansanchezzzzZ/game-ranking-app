GamingDashboardApp (Root Container)
│
├── TopNavigationBar (Component - Reusable)
│   ├── Logo (Component - Reusable)
│   │   └── Image (Element)
│   │
│   ├── NavigationLinks (Component - Reusable)
│   │   └── (TEXT) - "GAME", (TEXT) - "LEADERBOARD", (TEXT) - "PROFILE"
│   │
│   └── UserControls (Component)
│       ├── LogoutButton (Component - Reusable Button)
│       └── ProfileDropdown (Component - Reusable)
│           └── DropdownMenu (Component - Reusable)
│
└── MainGrid (Layout Container - 3 Column Grid)
    │
    ├── GameAreaCard (Component - Card Wrapper - Reusable)
    │   ├── CardHeader (Component - Reusable)
    │   │   ├── Title (Text) - "PLAY NOW"
    │   │   │
    │   │   └── GameImage (Component)
    │   │       └── Image (Element) - Game Visual
    │   │
    │   └── CardFooter (Component - Reusable)
    │       └── StartGameButton (Component - Reusable Button) - "START GAME"
    │
    ├── UserStatsCard (Component - Card Wrapper - Reusable)
    │   ├── CardHeader (Component - Reusable)
    │   │   └── Title (Text) - "PLAYER PROFILE"
    │   │
    │   ├── CardBody (Component - Reusable)
    │   │   ├── AvatarImage (Component - Reusable)
    │   │   │   └── Image (Element) - User Avatar
    │   │   │
    │   │   └── StatsList (Component - Reusable)
    │   │       ├── StatsItem (Component - Reusable)
    │   │       │   ├── Label (Text) - "Username"
    │   │       │   └── Value (Text) - Username Value
    │   │       │
    │   │       ├── StatsItem (Component - Reusable)
    │   │       │   ├── Label (Text) - "Highest Score"
    │   │       │   └── Value (Text) - Score Value
    │   │       │
    │   │       └── StatsItem (Component - Reusable)
    │   │           ├── Label (Text) - "Total Play Time"
    │   │           └── Value (Text) - Time Value
    │   │
    │   └── CardFooter (Component - Reusable)
    │       └── EditProfileButton (Component - Reusable Button) - "EDIT PROFILE"
    │
    └── RankingsCard (Component - Card Wrapper - Reusable)
        ├── CardHeader (Component - Reusable)
        │   └── Title (Text) - "GLOBAL RANKING"
        │
        ├── CardBody (Component - Reusable)
        │   └── RankingsTable (Component - Reusable Table)
        │       ├── TableHeader (Component - Reusable)
        │       │   ├── HeaderCell (Component - Reusable) - "Rank"
        │       │   ├── HeaderCell (Component - Reusable) - "Player"
        │       │   └── HeaderCell (Component - Reusable) - "Score"
        │       │
        │       └── TableBody (Component - Reusable)
        │           └── TableRow (Component - Reusable) [Repeatable]
        │               ├── TableCell (Component - Reusable) - Rank Number
        │               ├── TableCell (Component - Reusable) - Player Name
        │               └── TableCell (Component - Reusable) - Score Value
        │
        └── CardFooter (Component - Reusable)
            └── PaginationFooter (Component - Reusable)
                ├── PreviousButton (Button) - "PREVIOUS"
                ├── StatusText (Text) - "Page X of Y"
                └── NextButton (Button) - "NEXT"

## Link
You can view the interactive Component Hierarchy map here:
[Gaming Dashboard - Technical Component Hierarchy](https://www.figma.com/make/oBfISsPqCpmuPP0L0McQ2S/Gaming-Dashboard---Technical-Component-Hierarchy--Community-?t=pSwF8ht5wU2ZeVgP-1)

---

## Prompt used:
Ignore visual styling and mockups. Focus ONLY on the **component hierarchy** of the Gaming Dashboard UI described below. Generate a clear, nested hierarchy showing **parent-child relationships, component types, reusable components, and key content**. Output it as a structured tree, diagram, or indented list suitable for developers to implement in Angular.

**UI Description for Hierarchy:**
- Top Navigation Bar with logo, navigation links, and user controls.
- Main Grid with 3 columns:
    1. Game Area Card ("PLAY NOW") with score display, game image, and start button.
    2. User Stats Card ("PLAYER PROFILE") with avatar, stats list, and edit profile button.
    3. Rankings Card ("GLOBAL RANKING") with table, pagination, and status text.

**Hierarchy Example Format:**
- ComponentName (Type)
    - ChildComponentName (Type)
        - NestedChild (Type)

**UI Components Details:**

1. Top Navigation Bar
    - Logo (Logo)
    - Navigation Links (NavLinks)
        - Link: "GAME"
        - Link: "LEADERBOARD"
        - Link: "PROFILE"
    - User Controls (UserMenu)
        - Logout Button (Button)
        - Profile Dropdown (Dropdown)

2. Main Grid (Grid)
    - Column 1: Game Area Card (Card)
        - Score Display (Text)
        - Game Image (Image)
        - Start Game Button (Button)
    - Column 2: User Stats Card (Card)
        - Avatar Image (Image)
        - Stats List (List)
            - Username (Text)
            - Highest Score (Text)
            - Total Play Time (Text)
        - Edit Profile Button (Button)
    - Column 3: Rankings Card (Card)
        - Rankings Table (Table)
            - Row (repeatable)
                - Rank (Text)
                - Player Name (Text)
                - Score (Text)
        - Pagination Footer (Footer)
            - Previous Button (Button)
            - Next Button (Button)
            - Status Text (Text)

**Additional Instructions:**
- Do not generate a visual mockup; generate **component hierarchy only**.
- Highlight **reusable components** (buttons, cards, table rows).
- Show full nesting and relationships.
- Output can be textual (indented tree) or diagram-like if supported.