# WellLife AI — Wellness Studio & Exercise Manual

WellLife AI is a responsive, feature-rich wellness dashboard featuring an interactive **Exercise Manual powered by WorkoutX API** and an intelligent **Floating AI Assistant powered by Mistral AI**.

---

## 🌟 Highlights & New Features

### 1. 🏋️ Live Workout & Exercise Library (WorkoutX API)
- **WorkoutX API Live Integration**: Connected to `https://api.workoutxapp.com/v2/exercises` featuring **2,760+ exercises** with high-definition looping videos (MP4), posters, trainer execution tips, difficulty levels, and sets/reps targets.
- **Dynamic Exercise Catalog**: Supports live querying by **name/keyword**, **Body Part** (*Chest, Back, Shoulders, Upper Arms, Upper Legs, Waist, Cardio, etc.*) and **Equipment** (*Barbell, Dumbbell, Cable, Body Weight, Machine, Kettlebell, etc.*).
- **Interactive Exercise Manual Modal**:
  - Full HD animated video player / looping demonstration
  - Target muscle, body part, equipment, and secondary muscle tags
  - Exercise difficulty level (*Beginner, Intermediate, Advanced*) and recommended sets & reps
  - Burn rate estimation (*kcal/min*)
  - Numbered step-by-step instructions
  - Trainer Form Cues extracted live from the workout API
  - Quick action: "Add to Workout Logger" instantly pre-populates your session
- **Built-in Fallback Database**: Curated high-quality offline exercises catalog ensures seamless operation in any environment.

### 2. 🌸 Menstrual Cycle Count & Phase Tracker
- **Precise Cycle Day Counter**: Calculates your current cycle day count (e.g. **Day 9 of 28**), active hormonal phase, and countdown to your next period.
- **Visual Segmented Phase Journey**: Interactive multi-segment progress bar with today's marker displaying:
  - 🩸 **Menstrual Phase (Days 1–5)**: Baseline hormones, rest & restorative movement cues, iron replenishment.
  - 🌱 **Follicular Phase (Days 6–13)**: Rising estrogen, progressive overload, heavy resistance training & complex carb focus.
  - 🌟 **Ovulatory Phase (Days 14–16)**: LH & estrogen surge, peak power output, HIIT & personal best attempts.
  - 🍂 **Luteal Phase (Days 17–28)**: Progesterone peak, higher metabolic burn, steady-state cardio, magnesium & recovery focus.
  - ⏳ **Extended Cycle Detection**: Automatic detection when past expected cycle duration with reassurance.
- **Key Count Metrics**:
  - Current Cycle Day & Progress Meter
  - Days Until Next Period / Overdue Count
  - Total Tracked Cycles Count
  - Multi-cycle Average Length & Period Duration
- **Detailed Cycle Logging**: Track period start dates, bleeding duration, flow intensity (Spotting, Light, Medium, Heavy), and symptom checklists (cramps, fatigue, bloating, mood swings, tender breasts, cravings, acne, etc.).
- **Cycle History & Management**: View reverse-chronological cycle history cards with cycle numbers (`Cycle #1`, `Cycle #2`...) and delete controls.
- **Analytics Cycle Chart**: Visual Chart.js trends comparing cycle lengths and period durations across logged cycles.
- **Mistral AI Cycle Coaching**: 1-click `🌸 Cycle Advice` chip and direct context sharing with Mistral AI for phase-tailored workout routines and nutrition guidance.

### 3. 🤖 Mistral AI in Floating Assistant
- **Powered by Mistral AI**: Uses Mistral's fast, state-of-the-art models (default: `mistral-small-latest` or `mistral-large-latest`).
- **Context-Aware Wellness Coaching**: When enabled, optionally shares your logged hydration, sleep, habits, workouts, and mood for tailored habit tips.
- **Form Advice & Workout Builder**: Ask Mistral AI about proper exercise form, injury prevention, progressive overload, or nutrition ideas.
- **Quick Suggestion Chips**: 1-click access to prompt suggestions (e.g. 🏋️ 3-Day Workout, 📊 Habit Review, 😴 Sleep Deeply, 🥗 Meal Idea).
- **Clean Markdown Rendering**: Renders bold text, bullet points, and code formatting smoothly.
- **In-App API Configuration**: Convenient ⚙️ **API Settings** modal allows setting your Mistral AI API key and WorkoutX API key directly in the browser or on the server.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or newer (tested on Node v20/v24).

### 1. Run the Server
Open a terminal in this project folder:

```bash
node server.js
```

Then visit: **`http://localhost:3000`** in your browser.

---

## 🔑 Configuring API Keys

You can configure your keys either in an `.env` file, as environment variables, or directly inside the app's **⚙️ API Settings** modal.

### Option A: Using `.env` file (Recommended)
Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env`:
```env
# Mistral AI (Required for floating AI assistant)
# Get a free key at https://console.mistral.ai/
MISTRAL_API_KEY=your_mistral_api_key_here
MISTRAL_MODEL=mistral-small-latest

# WorkoutX API (Powers 2,760+ HD exercises with video streaming & instructions)
WORKOUTX_API_KEY=wx_78fbd0580bddd8e01e5ef360e6173b4ec564861bf41ebc658ef13d04

PORT=3000
```

### Option B: Terminal Environment Variables
- **Windows PowerShell**:
  ```powershell
  $env:MISTRAL_API_KEY="your_mistral_key"; $env:WORKOUTX_API_KEY="your_workoutx_key"; node server.js
  ```
- **macOS / Linux**:
  ```bash
  MISTRAL_API_KEY="your_mistral_key" WORKOUTX_API_KEY="your_workoutx_key" node server.js
  ```

### Option C: In-App ⚙️ API Settings
Click the **⚙️ API Settings** button at the top-right of the dashboard or in the floating assistant header to save your keys locally in your browser!

---

## 📁 Project Architecture

```
welllife-ai/
├── index.html        # Clean semantic dashboard layout, modal dialogs & floating chat
├── style.css         # Modern styling, responsive grid, card badges, animations
├── script.js         # Frontend controller, WorkoutX loader, Mistral chat, trackers
├── server.js         # Node.js backend server with WorkoutX proxy & Mistral completions
├── package.json      # Project metadata & start scripts
├── .env.example      # Example environment variables template
└── README.md         # Documentation & setup guide
```

---

## 🛡️ Privacy & Medical Disclaimer
- All tracker logs (water, sleep, habits, workouts, moods, cycle) are stored locally in your browser's `localStorage`.
- Data is only sent to Mistral AI when the user explicitly keeps the consent checkbox checked.
- WellLife AI provides general lifestyle and fitness educational guidance. It does not provide medical diagnoses or prescriptions. Always consult a physician or certified physical therapist for medical concerns or injuries.
