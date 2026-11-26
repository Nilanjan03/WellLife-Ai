/**
 * WellLife AI - Curated Exercise Data & Transformers
 * Compatible with Node.js backend & Browser frontend (GitHub Pages / static host)
 */

const BUILTIN_EXERCISES = [
    {
        id: "0025",
        name: "barbell bench press",
        bodyPart: "chest",
        target: "pectorals",
        equipment: "barbell",
        secondaryMuscles: ["shoulders", "triceps"],
        instructions: [
            "Lie flat on the bench with your eyes under the barbell and feet firmly planted on the floor.",
            "Grip the barbell slightly wider than shoulder-width with wrists straight.",
            "Unrack the bar and stabilize it directly over your chest with locked elbows.",
            "Inhale and lower the barbell under strict control to touch your mid-chest, keeping elbows at a ~45-degree angle.",
            "Exhale and drive the bar back up to the starting position without bouncing off your ribs."
        ],
        gifUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0314",
        name: "incline dumbbell press",
        bodyPart: "chest",
        target: "pectorals",
        equipment: "dumbbell",
        secondaryMuscles: ["front delts", "triceps"],
        instructions: [
            "Set an adjustable bench to an incline of 30 to 45 degrees.",
            "Sit with a dumbbell resting on each knee, then kick them back to shoulder height as you lie back.",
            "Press the dumbbells overhead until your arms are fully extended but not locked.",
            "Lower the weights slowly until the dumbbells are level with your upper chest.",
            "Push the dumbbells back up while squeezing the upper chest at the peak."
        ],
        gifUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0662",
        name: "push-up",
        bodyPart: "chest",
        target: "pectorals",
        equipment: "body weight",
        secondaryMuscles: ["shoulders", "triceps", "core"],
        instructions: [
            "Place your hands on the ground slightly wider than shoulder-width apart.",
            "Extend legs straight back, creating a rigid straight line from head to heels.",
            "Lower your body by bending elbows until your chest is an inch off the floor.",
            "Push vigorously into the ground to return to starting plank position.",
            "Maintain core tension and prevent hips from sagging throughout."
        ],
        gifUrl: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0172",
        name: "cable crossover fly",
        bodyPart: "chest",
        target: "pectorals",
        equipment: "cable",
        secondaryMuscles: ["front delts"],
        instructions: [
            "Set cable pulleys at chest height and hold a stirrup handle in each hand.",
            "Take a step forward into a staggered stance to create tension on the cables.",
            "With a slight bend in your elbows, bring both hands forward and together in a wide hugging motion.",
            "Squeeze the chest muscles hard at the center point.",
            "Slowly reverse the movement back to a deep chest stretch."
        ],
        gifUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0652",
        name: "pull-up",
        bodyPart: "back",
        target: "lats",
        equipment: "body weight",
        secondaryMuscles: ["biceps", "upper back", "forearms"],
        instructions: [
            "Grasp a pull-up bar with an overhand grip slightly wider than shoulder-width.",
            "Hang with straight arms and engage your core to prevent swinging.",
            "Pull your shoulder blades down and back, then drive your elbows toward the floor to pull your chest up.",
            "Continue until your chin clears the bar comfortably.",
            "Lower down smoothly to a full dead hang before beginning the next repetition."
        ],
        gifUrl: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0498",
        name: "lat pulldown",
        bodyPart: "back",
        target: "lats",
        equipment: "cable",
        secondaryMuscles: ["biceps", "rhomboids"],
        instructions: [
            "Adjust the thigh pads so your legs fit securely under them.",
            "Grip the wide bar with an overhand grip and sit down with upright posture.",
            "Lean back slightly (about 10 degrees) and pull the bar smoothly down to your upper chest.",
            "Focus on driving your elbows down and back while engaging your lat muscles.",
            "Slowly guide the bar back up until your arms and lats are fully stretched."
        ],
        gifUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0027",
        name: "barbell bent over row",
        bodyPart: "back",
        target: "upper back",
        equipment: "barbell",
        secondaryMuscles: ["lats", "biceps", "lower back"],
        instructions: [
            "Stand with feet hip-width apart and hold a barbell with a shoulder-width overhand grip.",
            "Hinge at the hips, bending your knees slightly, keeping your back completely flat and chest proud.",
            "Let the bar hang in front of your shins.",
            "Pull the bar up toward your belly button, tucking your elbows close to your torso.",
            "Squeeze your shoulder blades together at the top, then lower with control."
        ],
        gifUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0758",
        name: "seated cable row",
        bodyPart: "back",
        target: "lats",
        equipment: "cable",
        secondaryMuscles: ["biceps", "rhomboids", "rear delts"],
        instructions: [
            "Sit on the low row bench, place feet on footrests with knees slightly bent.",
            "Reach forward to grab the V-bar handle and slide back to a tall, neutral spine posture.",
            "Pull the handle straight toward your lower abdomen without rocking your torso back and forth.",
            "Pinch your shoulder blades firmly together for a second at the contraction.",
            "Return the weight smoothly under control to full arm extension."
        ],
        gifUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0032",
        name: "barbell deadlift",
        bodyPart: "back",
        target: "glutes",
        equipment: "barbell",
        secondaryMuscles: ["hamstrings", "lats", "traps", "core"],
        instructions: [
            "Stand with feet hip-width apart with the barbell over your mid-foot.",
            "Hinge at the hips and grip the bar just outside your knees.",
            "Bring shins to touch the bar, drop hips slightly, pull chest up, and brace your core.",
            "Drive through the floor with your feet, extending hips and knees simultaneously.",
            "Lock out upright at the top without hyperextending your spine, then reverse the movement down."
        ],
        gifUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0047",
        name: "barbell overhead press",
        bodyPart: "shoulders",
        target: "delts",
        equipment: "barbell",
        secondaryMuscles: ["triceps", "upper chest", "core"],
        instructions: [
            "Rest the barbell across your clavicles and front shoulders with a shoulder-width grip.",
            "Brace your glutes, abs, and quadriceps tightly.",
            "Press the bar vertically upwards in a straight line, tilting your chin back slightly as it passes.",
            "Lock your elbows at the top with the barbell balanced directly over your mid-foot and spine.",
            "Lower the bar back to your upper chest with control."
        ],
        gifUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0334",
        name: "dumbbell lateral raise",
        bodyPart: "shoulders",
        target: "delts",
        equipment: "dumbbell",
        secondaryMuscles: ["traps"],
        instructions: [
            "Stand with a dumbbell in each hand at your sides, palms facing inward.",
            "Keep a slight forward hinge in your hips and a tiny bend in your elbows.",
            "Raise dumbbells outward to the sides until your arms are parallel to the floor.",
            "Lead with your elbows and ensure wrists do not go higher than your elbows.",
            "Pause briefly, then lower slowly back down under complete tension."
        ],
        gifUrl: "https://images.unsplash.com/photo-1583454155184-870a1f63aebc?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0185",
        name: "face pull",
        bodyPart: "shoulders",
        target: "delts",
        equipment: "cable",
        secondaryMuscles: ["rotator cuff", "rhomboids", "upper traps"],
        instructions: [
            "Attach a rope to a cable pulley at upper-chest or head height.",
            "Grip the rope handles with thumbs facing backward and step back to create tension.",
            "Pull the rope toward your face, flaring elbows out wide.",
            "As the hands approach your eyes, rotate wrists back into an external rotation posture.",
            "Hold the peak contraction for a count, then return with control."
        ],
        gifUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0294",
        name: "dumbbell biceps curl",
        bodyPart: "upper arms",
        target: "biceps",
        equipment: "dumbbell",
        secondaryMuscles: ["brachialis", "forearms"],
        instructions: [
            "Stand tall holding a dumbbell in each hand with arms extended and palms facing forward.",
            "Keep elbows tucked tightly to your sides.",
            "Curl the weights up by contracting your biceps while keeping upper arms completely stationary.",
            "Squeeze your biceps intensely at the top near shoulder height.",
            "Lower the weights slowly over 2-3 seconds back to full extension."
        ],
        gifUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0313",
        name: "dumbbell hammer curl",
        bodyPart: "upper arms",
        target: "biceps",
        equipment: "dumbbell",
        secondaryMuscles: ["brachioradialis", "forearms"],
        instructions: [
            "Hold dumbbells with a neutral grip (palms facing each other) at your sides.",
            "Without swinging your hips, curl the dumbbells upward along your torso.",
            "Maintain the neutral palm-facing position through the entire range.",
            "Pause at maximum contraction near your chest.",
            "Lower with steady control to the starting stretch."
        ],
        gifUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0241",
        name: "triceps rope pushdown",
        bodyPart: "upper arms",
        target: "triceps",
        equipment: "cable",
        secondaryMuscles: ["forearms"],
        instructions: [
            "Attach a rope to a high cable pulley and hold the ends with a neutral grip.",
            "Pin your upper arms firmly to the sides of your ribcage with elbows bent at 90 degrees.",
            "Extend your arms down, pushing the rope ends apart at the bottom to lock out the triceps.",
            "Feel the contraction in the lateral and long heads of the triceps.",
            "Slowly bend elbows to return to horizontal without letting elbows drift forward."
        ],
        gifUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0043",
        name: "barbell back squat",
        bodyPart: "upper legs",
        target: "quads",
        equipment: "barbell",
        secondaryMuscles: ["glutes", "hamstrings", "core"],
        instructions: [
            "Rest the barbell across your upper traps and stand with feet slightly wider than shoulder-width, toes turned out 15 degrees.",
            "Take a deep diaphragmatic breath and brace your core.",
            "Sit back and bend knees, pushing knees out in line with your toes.",
            "Descend until thighs are at least parallel to the floor.",
            "Drive powerfully through your whole foot to stand back up, exhaling near the top."
        ],
        gifUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0528",
        name: "leg press",
        bodyPart: "upper legs",
        target: "quads",
        equipment: "leverage machine",
        secondaryMuscles: ["glutes", "hamstrings"],
        instructions: [
            "Sit in the leg press machine and place feet hip-width on the sled platform.",
            "Release safety bars and lower the sled under control until knees reach a 90-degree angle.",
            "Do not allow your lower back or tailbone to lift off the padded backrest.",
            "Press the platform back up through your heels and mid-foot.",
            "Stop just short of locking your knees violently to keep tension on the quads."
        ],
        gifUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0088",
        name: "barbell romanian deadlift",
        bodyPart: "upper legs",
        target: "hamstrings",
        equipment: "barbell",
        secondaryMuscles: ["glutes", "lower back"],
        instructions: [
            "Hold the barbell at hip level with an overhand grip and knees soft (slightly unlocked).",
            "Send your hips back toward the wall behind you while keeping your spine straight and bar skimming your legs.",
            "Feel a deep stretch throughout your hamstrings as the bar passes just below knee height.",
            "Do not round your shoulders or lower back.",
            "Drive your hips forward and squeeze glutes hard to return to standing."
        ],
        gifUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0300",
        name: "dumbbell bulgarian split squat",
        bodyPart: "upper legs",
        target: "quads",
        equipment: "dumbbell",
        secondaryMuscles: ["glutes", "hamstrings", "calves"],
        instructions: [
            "Stand a few feet in front of a flat bench and rest the top of one foot behind you on the bench.",
            "Hold dumbbells at your sides and brace your core.",
            "Lower your body by bending the front knee until the back knee hovers just above the floor.",
            "Keep front knee tracking over your second toe and torso slightly tilted forward.",
            "Push through your front heel to return to the starting position."
        ],
        gifUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0042",
        name: "barbell hip thrust",
        bodyPart: "upper legs",
        target: "glutes",
        equipment: "barbell",
        secondaryMuscles: ["hamstrings", "core"],
        instructions: [
            "Sit on the floor with your upper back supported against a sturdy bench and a padded barbell over your hips.",
            "Plant your feet firmly on the ground about shoulder-width apart.",
            "Drive through your heels to lift your hips until thighs and torso are in a straight horizontal line.",
            "Squeeze glutes at top lockout with chin tucked slightly toward your chest.",
            "Lower hips back down under control to complete each repetition."
        ],
        gifUrl: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0685",
        name: "plank",
        bodyPart: "waist",
        target: "abs",
        equipment: "body weight",
        secondaryMuscles: ["obliques", "shoulders", "glutes"],
        instructions: [
            "Rest on forearms with elbows placed directly underneath your shoulders.",
            "Extend legs back with toes grounded, holding body in a rigid horizontal line.",
            "Pull your belly button in toward your spine and squeeze your glutes tightly.",
            "Keep neck neutral by looking at the floor slightly ahead of your hands.",
            "Breathe steadily without letting hips hike upward or sag down."
        ],
        gifUrl: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0473",
        name: "hanging leg raise",
        bodyPart: "waist",
        target: "abs",
        equipment: "body weight",
        secondaryMuscles: ["hip flexors", "forearms"],
        instructions: [
            "Hang from a pull-up bar with an overhand grip and legs straight.",
            "Brace your core and roll your pelvis upward as you raise your legs toward horizontal.",
            "Focus on flexing the lower abdominal wall rather than swinging with momentum.",
            "Hold for a brief second at 90 degrees.",
            "Lower your legs slowly back down, stopping before any swing occurs."
        ],
        gifUrl: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0687",
        name: "russian twist",
        bodyPart: "waist",
        target: "abs",
        equipment: "body weight",
        secondaryMuscles: ["obliques", "hip flexors"],
        instructions: [
            "Sit on a mat with knees bent and feet elevated slightly off the floor.",
            "Lean torso back about 45 degrees, engaging your deep core to balance on your sit bones.",
            "Clasp hands in front of your chest and rotate torso smoothly to touch the floor on your right side.",
            "Rotate back across your body to touch the floor on your left side.",
            "Move with controlled rotation from your ribcage, not just your arms."
        ],
        gifUrl: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0683",
        name: "treadmill interval run",
        bodyPart: "cardio",
        target: "cardiovascular system",
        equipment: "treadmill",
        secondaryMuscles: ["quads", "calves", "hamstrings"],
        instructions: [
            "Attach safety clip to clothing and start with a 3-minute warm-up walk at 4 km/h.",
            "Increase speed to a brisk run for 60 seconds (8-12 km/h).",
            "Slow down to a recovery walk for 90 seconds (4-5 km/h).",
            "Repeat the intervals 5 to 8 times.",
            "Finish with a 3-minute cool-down walk and light stretching."
        ],
        gifUrl: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0534",
        name: "jump rope",
        bodyPart: "cardio",
        target: "cardiovascular system",
        equipment: "rope",
        secondaryMuscles: ["calves", "shoulders", "forearms"],
        instructions: [
            "Hold handles at hip height with elbows bent near your sides.",
            "Turn the rope using small, fluid circular motions of your wrists.",
            "Jump on the balls of your feet just 1 to 2 inches off the ground to let the rope pass.",
            "Keep knees slightly soft upon landing to absorb impact smoothly.",
            "Maintain an upright posture and rhythmic breathing."
        ],
        gifUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "0522",
        name: "kettlebell swing",
        bodyPart: "cardio",
        target: "glutes",
        equipment: "kettlebell",
        secondaryMuscles: ["hamstrings", "core", "shoulders"],
        instructions: [
            "Stand with feet shoulder-width apart, kettlebell placed on the floor a foot in front of you.",
            "Hinge at the hips, grip the handle, and hike the kettlebell back between your thighs.",
            "Drive hips forward explosively and stand tall, projecting the kettlebell to chest height.",
            "Do not lift with your arms; let the hip power float the bell upward.",
            "Let the weight swing back naturally into the hinge for the next rep."
        ],
        gifUrl: "https://images.unsplash.com/photo-1583454155184-870a1f63aebc?w=600&auto=format&fit=crop&q=80"
    }
];

// Helper to transform WorkoutX API exercises into WellLife format
function transformWorkoutXExercise(ex) {
    const secondary = (ex.secondaryMuscles || []).map(m => typeof m === 'object' ? (m.group || m.anatomical?.[0] || '') : m).filter(Boolean);
    const primary = (ex.primaryMuscles || []).map(m => typeof m === 'object' ? (m.group || m.anatomical?.[0] || '') : m).filter(Boolean);

    return {
        id: ex.id,
        name: ex.name,
        bodyPart: (ex.bodyPart || '').toLowerCase(),
        target: (ex.target || primary[0] || '').toLowerCase(),
        equipment: (ex.equipment || 'body weight').toLowerCase(),
        secondaryMuscles: secondary,
        primaryMuscles: primary,
        category: ex.category || 'strength',
        difficulty: ex.difficulty || 'intermediate',
        recommendedSets: ex.recommendedSets || '3',
        recommendedReps: ex.recommendedReps || '10-15',
        caloriesPerMinute: ex.caloriesPerMinute || null,
        instructions: Array.isArray(ex.instructions) ? ex.instructions : [ex.instructions].filter(Boolean),
        tips: Array.isArray(ex.tips) ? ex.tips : [ex.tips].filter(Boolean),
        gifUrl: ex.media?.poster || 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=80',
        poster: ex.media?.poster || null,
        videoUrl: ex.media?.mp4 || null,
        loopSeconds: ex.loopSeconds || null,
        description: ex.description || '',
        source: 'workoutx'
    };
}

// Filter fallback builtin exercises
function filterBuiltinExercises({ search, bodyPart, equipment, limit = 24, offset = 0 } = {}) {
    let results = BUILTIN_EXERCISES;

    if (bodyPart && bodyPart !== "all") {
        const bp = bodyPart.toLowerCase();
        results = results.filter(x => x.bodyPart.toLowerCase() === bp);
    }

    if (equipment && equipment !== "all") {
        const eq = equipment.toLowerCase();
        results = results.filter(x => x.equipment.toLowerCase().includes(eq));
    }

    if (search && search.trim()) {
        const q = search.trim().toLowerCase();
        results = results.filter(x =>
            x.name.toLowerCase().includes(q) ||
            x.target.toLowerCase().includes(q) ||
            x.bodyPart.toLowerCase().includes(q) ||
            x.equipment.toLowerCase().includes(q) ||
            (x.secondaryMuscles && x.secondaryMuscles.some(m => m.toLowerCase().includes(q)))
        );
    }

    const total = results.length;
    const paginated = results.slice(offset, offset + limit);
    return { exercises: paginated, total };
}

// Module export for Node.js / Window global for browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BUILTIN_EXERCISES,
        transformWorkoutXExercise,
        filterBuiltinExercises
    };
}

if (typeof window !== 'undefined') {
    window.BUILTIN_EXERCISES = BUILTIN_EXERCISES;
    window.transformWorkoutXExercise = transformWorkoutXExercise;
    window.filterBuiltinExercises = filterBuiltinExercises;
}
