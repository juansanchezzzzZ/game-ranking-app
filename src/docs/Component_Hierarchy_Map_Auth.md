AuthGrid (Component Layout Container - 1 Column Grid)
│
└── AuthCard (Component - Card Wrapper - Reusable)
    │
    ├── AuthCardHeader (Component - Reusable)
    │   ├── Logo (Component - Reusable)
    │   │   └── Image (Element) - Pixel Rank Logo
    │   │
    │   └── Subtitle (Text)
    │       └── "Enter the Arena"
    │
    └── AuthCardBody (Component - Card Wrapper - Reusable)
        │
        ├── CardHeader (Component - Reusable)
        │   └── Title (Text)
        │       ├── "WELCOME BACK"   (Login)
        │       └── "JOIN THE GAME"  (Sign Up)
        │
        ├── CardBody (Component - Reusable)
        │   └── AuthForm (Dynamic Container)
        │       │
        │       ├── LoginForm (Component Variant)
        │       │   ├── EmailField (Input + Icon)
        │       │   ├── PasswordField (Input + Icon)
        │       │   └── SubmitButton - "SIGN IN"
        │       │
        │       └── RegisterForm (Component Variant)
        │           ├── UsernameField (Input + Icon)
        │           ├── EmailField (Input + Icon)
        │           ├── PasswordField (Input + Icon)
        │           ├── ConfirmPasswordField (Input + Icon)
        │           └── SubmitButton - "SIGN UP"
        │
        └── CardFooter (Component - Reusable)
            ├── RedirectText (Text + Link)
            │   ├── "Create account" → Sign Up
            │   └── "Already have an account?" → Login
            │
            └── SecurityNote (Text + Icon)
                └── "Secure gaming platform"
