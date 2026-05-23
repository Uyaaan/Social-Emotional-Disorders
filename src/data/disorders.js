export const disorders = [
  // ─────────────────────────────────────────────────────────────────────────
  // EMOTIONAL DISORDERS
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'anxiety',
    name: 'Anxiety',
    category: 'emotional',
    tagline:
      "The body's natural response to perceived stress and threat. When worry becomes constant, it becomes a disorder.",
    definition:
      "Anxiety is a natural response to perceived stress and threat. It is a feeling of unease, nervousness, worry, or fear about what is happening or might happen, and it activates the body's fight-or-flight response. Anxiety disorders are mental health diagnoses characterized by excessive worry, intense fear, and irrational behaviors that negatively affect everyday decisions and lifestyle.",
    types: [
      {
        title: 'Generalized Anxiety Disorder',
        body: 'Frequent, excessive, and uncontrollable worry about everyday things like school, family, health, and the future. Anxiety lasts longer than expected and interferes with daily activities.',
      },
      {
        title: 'Agoraphobia',
        body: 'Intense fear of being in places where help may be hard to get during a panic episode. People often avoid crowded places, public transport, or even leaving home.',
      },
      {
        title: 'Social Anxiety Disorder',
        body: 'Intense fear of social interactions and being judged by others. Speaking in class, meeting new people, or performing can feel overwhelming.',
      },
      {
        title: 'Specific Phobias',
        body: 'Intense fears of particular objects, activities, or situations that pose no real danger, like darkness, needles, blood, or spiders. People avoid the feared trigger because it causes extreme anxiety.',
      },
      {
        title: 'Panic Disorder',
        body: 'Characterized by sudden, repeated panic attacks of intense fear that may include rapid heartbeat, dizziness, sweating, and difficulty breathing. Attacks are unexpected and trigger fear of more attacks.',
      },
    ],
    signs: {
      'Emotional / Cognitive': [
        {
          title: 'Trouble concentrating or making decisions',
          body: 'Overthinking even simple situations, easily distracted by "what if" thoughts.',
        },
        {
          title: 'Feeling impatient or irritable',
          body: 'The body stays in a state of alertness, lowering tolerance for everyday stress.',
        },
      ],
      Physical: [
        {
          title: 'Nausea or abdominal distress',
          body: 'Stress hormones disrupt digestion and create physical tension.',
        },
        {
          title: 'Sweating, trembling, or shaking',
          body: 'Adrenaline prepares the body to respond to perceived threats.',
        },
        {
          title: 'Trouble sleeping',
          body: 'Racing thoughts keep the body awake, and lack of sleep worsens anxiety in a cycle.',
        },
      ],
    },
    strategies: [
      {
        title: 'Break tasks into smaller, manageable parts',
        body: 'Lets students focus on one thing at a time so the work feels finishable.',
      },
      {
        title: 'Give clear instructions and classroom rules',
        body: 'Organized directions help students feel secure when they know what to expect.',
      },
      {
        title: 'Provide positive reinforcement and acknowledgement',
        body: 'Encouragement, praise, and recognition build confidence and motivation.',
      },
      {
        title: 'Create a comfortable, supportive classroom environment',
        body: 'A calm, inclusive room helps students feel emotionally belonging and acknowledged.',
      },
      {
        title: 'Allow short breaks during activities',
        body: 'Brief pauses give students time to breathe, relax, and regain focus.',
      },
    ],
    instructionalMaterials: null,
    accommodations: [
      {
        title: 'Conduct a "Kamustahan" session before lessons',
        body: "A simple check-in lets students express how they're feeling at the moment.",
      },
      {
        title: 'Guide learners through creative assessments',
        body: 'Alternative formats (sketchnoting, role-play, infographics) let students show understanding without high-pressure tests.',
      },
      {
        title: 'Implement breaks when students feel uncomfortable',
        body: 'Short breaks allow students to calm themselves and regain emotional control.',
      },
      {
        title: 'Reduce workloads without removing learning objectives',
        body: 'Adjusting the amount of work prevents overwhelm while keeping goals intact.',
      },
      {
        title: 'Arrange tables in student-centered set-ups',
        body: 'Circles or U-shapes create a more supportive, less intimidating atmosphere.',
      },
    ],
    forTeachers:
      'Understanding anxiety helps teachers anticipate learning difficulties and prepare accommodations suited to student needs. Lesson plans can be designed to reduce stress, promote active participation, and build inclusive routines with adjustable assessments and clear instructions. This improves classroom management and learning outcomes for everyone.',
  },

  {
    id: 'depression',
    name: 'Depression',
    category: 'emotional',
    tagline:
      'A common mental disorder involving a depressed mood or loss of interest in activities for long periods.',
    definition:
      'Depressive disorder (depression) is a common mental disorder involving a persistently depressed mood or loss of pleasure and interest in activities. It differs from regular mood changes, and it can affect relationships, school, and work. Depression can happen to anyone, especially after abuse, severe losses, or stressful events.',
    types: [
      {
        title: 'Single-Episode Depressive Disorder',
        body: "The person's first and only depressive episode.",
      },
      {
        title: 'Recurrent Depressive Disorder',
        body: 'A history of at least two depressive episodes.',
      },
      {
        title: 'Bipolar Disorder',
        body: 'Depressive episodes alternate with manic symptoms such as euphoria or irritability, increased energy, talkativeness, racing thoughts, decreased need for sleep, distractibility, and impulsive behavior.',
      },
    ],
    signs: null,
    strategies: null,
    instructionalMaterials: [
      { title: 'Mood check-in charts', body: '' },
      { title: 'Reflection journals', body: '' },
      { title: 'Positive affirmation cards', body: '' },
      { title: 'Social-emotional learning (SEL) materials', body: '' },
      { title: 'Storybooks discussing emotions and resilience', body: '' },
    ],
    accommodations: null,
    forTeachers: null,
  },

  {
    id: 'bipolar',
    name: 'Bipolar Disorder',
    category: 'emotional',
    tagline:
      'A mental health condition causing extreme mood swings between emotional highs (mania) and lows (depression).',
    definition:
      'Bipolar disorder, formerly called manic depression, is a mental health condition that causes extreme mood swings. These include emotional highs known as mania or hypomania, and lows known as depression. Hypomania is a milder, manageable version of mania. Severe mania is serious and often needs hospital care.',
    types: [
      {
        title: 'Bipolar I Disorder',
        body: 'The most severe type. Involves episodes of full mania that significantly affect daily life. Depressive episodes may or may not occur.',
      },
      {
        title: 'Bipolar II Disorder',
        body: 'A less severe form, with periods of hypomania (less intense than full mania) alternating with periods of depression.',
      },
      {
        title: 'Cyclothymia',
        body: 'The mildest form, with frequent mood swings over a long period that do not reach the severity of full mania or major depression.',
      },
    ],
    signs: {
      'Mania / Hypomania': [
        {
          title: 'Increased energy',
          body: 'Unusually high energy, restlessness, appearing tireless.',
        },
        {
          title: 'Extreme happiness or euphoria',
          body: 'Intense excitement or optimism even without clear reason.',
        },
        {
          title: 'Reduced need for sleep',
          body: 'Feeling refreshed on little rest.',
        },
        {
          title: 'Rapid, excessive talking',
          body: 'Fast speech, jumping between topics, racing thoughts.',
        },
        {
          title: 'Difficulty concentrating',
          body: 'Thoughts move too quickly to focus on one task.',
        },
        {
          title: 'Impulsive behavior',
          body: 'Acting or deciding without weighing consequences.',
        },
      ],
      'Bipolar Depression': [
        {
          title: 'Persistent sadness',
          body: 'Feeling empty, hopeless, or emotionally unstable most of the time.',
        },
        {
          title: 'Loss of interest in activities once enjoyed',
          body: '',
        },
        {
          title: 'Noticeable changes in weight or appetite',
          body: '',
        },
        {
          title: 'Sleep disturbances',
          body: 'Insomnia or hypersomnia.',
        },
        {
          title: 'Low energy or fatigue',
          body: 'Even without physical exertion.',
        },
        {
          title: 'Feelings of worthlessness, guilt, or helplessness',
          body: '',
        },
        {
          title: 'Difficulty focusing',
          body: 'Forgetfulness from overwhelming negative thoughts.',
        },
        {
          title: 'Suicidal thoughts or attempts',
          body: 'May occur in some individuals.',
        },
        {
          title: 'Self-harming behaviors',
          body: 'May emerge in severe cases.',
        },
      ],
    },
    strategies: [
      {
        title: 'Flexibility',
        body: "Adjust lessons and activities based on the student's mood, behavior, and pace.",
      },
      {
        title: 'Consistency',
        body: 'Predictable routines and clear expectations help students feel secure.',
      },
      {
        title: 'Patience',
        body: 'Respond with understanding and positive reinforcement to support emotional and academic growth.',
      },
      {
        title: 'Communication',
        body: 'Regular contact with parents and professionals keeps support consistent.',
      },
      {
        title: 'Coping strategies',
        body: 'Teach techniques like deep breathing, mindfulness, or journaling to manage emotions.',
      },
      {
        title: 'Praise and encouragement',
        body: 'Recognition of achievements builds confidence, motivation, and self-esteem.',
      },
      {
        title: 'Education and awareness',
        body: 'Promote understanding of bipolar disorder among peers and family to create a supportive environment.',
      },
    ],
    instructionalMaterials: [
      {
        title: 'Visual schedule or routine chart',
        body: 'Helps students follow predictable daily routines and reduce stress from sudden changes.',
      },
      {
        title: 'Behavior monitoring or mood tracker',
        body: 'Used to monitor emotional changes, triggers, and early warning signs.',
      },
      {
        title: 'Step-by-step task checklists',
        body: 'Breaks large assignments into smaller tasks to support focus and organization.',
      },
      {
        title: 'Modified assessment materials',
        body: 'Shortened activities, flexible deadlines, or alternative formats to accommodate mood-related difficulties.',
      },
      {
        title: 'Calm-down or break pass',
        body: 'Allows short emotional regulation breaks when feeling overwhelmed.',
      },
    ],
    accommodations: [
      {
        title: 'Functional Behavioral Assessment (FBA)',
        body: 'Identifies triggers and warning signs to monitor emotional and behavioral changes.',
      },
      {
        title: 'Comprehensive evaluation',
        body: 'Assesses cognitive, emotional, and behavioral functioning to determine appropriate supports.',
      },
      {
        title: 'Flexible assessment formats',
        body: 'Alternative tasks and shorter assessments reduce stress and accommodate mood-related difficulties.',
      },
      {
        title: 'Scheduling and time management',
        body: 'Extended deadlines, additional testing time, and adjusted schedules support students during episodes.',
      },
      {
        title: 'Classroom environment adjustments',
        body: 'Quiet testing areas, break passes, and strategic seating help minimize stress and improve focus.',
      },
      {
        title: 'Executive function support',
        body: 'Notes, check-ins, and step-by-step instructions help with organization and task completion.',
      },
      {
        title: 'Health and medication needs',
        body: 'Access to snacks, hydration, and crisis support helps address medication side effects.',
      },
    ],
    forTeachers:
      'Knowing your students deeply helps you handle their needs and supports inclusivity. Understanding bipolar disorder helps teachers recognize manic episodes (not mistaking them for hyperactivity), manage mood fluctuations, reduce stress-triggered episodes through structured environments, and support students during depressive periods with empathy and flexible expectations.',
  },

  {
    id: 'ocd',
    name: 'OCD',
    category: 'emotional',
    tagline:
      'Obsessive-Compulsive Disorder. Unwanted intrusive thoughts that drive repetitive compulsive behaviors.',
    definition:
      'Obsessive-Compulsive Disorder (OCD) involves recurring unwanted thoughts (obsessions) that lead to repetitive behaviors (compulsions). These obsessions and compulsions interfere with daily activities and cause significant distress. OCD often centers on themes like contamination, harm, symmetry, intrusive thoughts, or hoarding. The compulsive acts bring no pleasure, only limited, temporary relief from anxiety.',
    types: [
      {
        title: 'Contamination and Cleaning',
        body: 'Obsessions: intense fear of germs. Compulsions: excessive hand washing or cleaning rituals.',
      },
      {
        title: 'Fear of Harm and Checking',
        body: 'Obsessions: fear that harm will come to self or others through negligence. Compulsions: repeatedly checking locks, appliances, or mentally reviewing events.',
      },
      {
        title: 'Symmetry, Perfectionism, and Ordering',
        body: 'Obsessions: discomfort when things aren\'t "just right." Compulsions: arranging objects precisely or repeating actions until they feel perfectly done.',
      },
      {
        title: 'Intrusive Thoughts (Taboo or Aggressive)',
        body: 'Obsessions: disturbing unwanted thoughts about violence, taboo subjects, or moral/religious fears. Compulsions: often mental ("Pure O"), such as silent praying or avoidance.',
      },
      {
        title: 'Hoarding',
        body: 'Obsessions: fear that discarding objects will lead to harm or regret. Compulsions: difficulty throwing anything away.',
      },
    ],
    signs: [
      {
        title: 'Obsessions',
        body: 'Lasting, unwanted thoughts, urges, or images that intrude when trying to think or do other things.',
      },
      {
        title: 'Compulsions',
        body: 'Repetitive behaviors or mental acts performed to reduce anxiety or prevent something bad from happening.',
      },
      {
        title: 'Self-imposed rules or rituals',
        body: 'Made up to control anxiety, often unrelated to the issue they are intended to fix.',
      },
      {
        title: 'Significant distress or time loss',
        body: 'Interference with daily activities.',
      },
    ],
    strategies: [
      {
        title: "The 4 R's (Schwartz's Brain Lock method)",
        body: 'A cognitive-behavioral technique to recognize intrusive thoughts and compulsions as medical symptoms rather than personal truths.',
      },
      {
        title: 'Simple instructions and visual organizers',
        body: 'Reduces confusion and helps students organize tasks, lowering anxiety caused by uncertainty.',
      },
      {
        title: 'Simplified tasks',
        body: 'Make simple tasks even simpler to prevent feelings of overwhelm.',
      },
      {
        title: 'Flexible deadlines',
        body: 'Students with OCD may take longer due to compulsive checking or re-doing.',
      },
      {
        title: 'Audiobooks and alternatives',
        body: 'Audio recordings prevent students from getting stuck re-reading a passage perfectly.',
      },
    ],
    instructionalMaterials: null,
    accommodations: [
      { title: 'Seating arrangement', body: 'Position the student where focus is easiest.' },
      { title: 'Access to counseling', body: 'Regular sessions for emotional support.' },
      { title: 'Classroom observation', body: 'Track patterns over time to refine support.' },
      { title: 'Portfolio assessment', body: 'Lower-pressure alternative to traditional testing.' },
      { title: 'Functional behavioral assessment', body: 'Identify triggers and contexts for compulsions.' },
    ],
    forTeachers: {
      intro:
        'Future teachers can better support learners with Obsessive-Compulsive Disorder (OCD) by adopting inclusive, flexible, and compassionate teaching approaches. These practices not only help students with OCD but also create a classroom environment that benefits all learners. Through approaches such as Universal Design for Learning (UDL), differentiated instruction, social-emotional learning, and trauma-informed teaching, educators can build classrooms that are structured, supportive, and emotionally safe. The following can help teachers become more effective in assisting students with OCD:',
      points: [
        {
          title: 'Social-Emotional Learning (SEL)',
          body: 'Integrating SEL practices into the classroom helps students manage emotions, develop coping strategies, and build self-awareness.',
        },
        {
          title: 'Positive mental health awareness is developed',
          body: 'Future teachers become more aware of the importance of mental health support in education, allowing them to better recognize student needs.',
        },
        {
          title: 'Understanding OCD',
          body: 'Teachers should learn the signs, symptoms, and effects of OCD on learning and behavior.',
        },
        {
          title: 'Peer understanding program',
          body: 'Promote awareness, empathy, and acceptance among classmates, creating a more supportive and inclusive classroom environment.',
        },
      ],
    },
  },

  {
    id: 'panic',
    name: 'Panic Disorder',
    category: 'emotional',
    tagline:
      'Sudden, unexpected episodes of intense fear accompanied by powerful physical symptoms.',
    definition:
      "Panic Disorder is a type of anxiety disorder characterized by sudden, unexpected episodes of intense fear accompanied by physical symptoms like chest pain, rapid heartbeat, shortness of breath, dizziness, and abdominal distress. People with panic disorder often experience recurrent attacks and spend long periods in fear of the next one. Attacks themselves aren't life-threatening, but they significantly affect quality of life, behavior, and cognitive development.",
    types: [
      {
        title: 'Cardiac',
        body: 'Heart and chest symptoms such as rapid heartbeat, chest pain, and palpitations. Often mistaken for a heart attack, leading to repeated medical visits.',
      },
      {
        title: 'Respiratory',
        body: 'Breathing-related symptoms including a suffocation feeling, shortness of breath, hyperventilation, and dizziness. The sense of not being able to breathe intensifies panic.',
      },
      {
        title: 'Gastrointestinal',
        body: 'Stress impacts the digestive system, causing nausea, abdominal discomfort, or upset stomach during attacks.',
      },
      {
        title: 'Vestibular',
        body: 'Affects balance and spatial awareness, causing disorientation or fear of losing balance, which can worsen the attack.',
      },
    ],
    signs: [
      {
        title: 'Sense of being in danger',
        body: 'Feeling something terrible will happen even without a real threat.',
      },
      {
        title: 'Trembling or shaking',
        body: 'Uncontrollable body shaking from the fight-or-flight response.',
      },
      {
        title: 'Abdominal cramping',
        body: 'Nausea, stomach cramps, or discomfort during nervousness.',
      },
      {
        title: 'Dizziness and lightheadedness',
        body: 'Feeling weak or about to faint, from rapid breathing and tension.',
      },
      {
        title: 'Reality detachment ("derealization")',
        body: 'Feeling disconnected, as if the environment is unreal or dreamlike.',
      },
    ],
    strategies: [
      {
        title: 'Color-coded task prioritization (Stoplight System)',
        body: 'Red = must finish in class, Yellow = can finish at home, Green = optional. Lets students breathe instead of trying to do everything at once.',
      },
      {
        title: 'Immediate feedback',
        body: 'Visual signs, thumbs-up, and quick acknowledgement keep students engaged without overwhelming them.',
      },
      {
        title: 'Visual daily checklists',
        body: 'A step-by-step schedule on the board (10 min icebreaker, 20 min lecture, 30 min activity) lets students see progress.',
      },
    ],
    instructionalMaterials: [
      {
        title: 'Step-by-step instructions',
        body: 'Clear directions, printed checklists, and understandable oral discussions help learners follow without being overwhelmed.',
      },
      {
        title: 'Low-pressure testing toolkits',
        body: 'Alternative activities like matching columns, brain dumps (active recall), or choice boards instead of traditional tests.',
      },
      {
        title: 'Grounding objects',
        body: 'Stress balls, fidget toys, or textured stickers help ease body tension and shift focus to physical sensations.',
      },
    ],
    accommodations: [
      {
        title: 'Lecture accessibility',
        body: "Recorded sessions, modules, or peer notes ensure students don't miss material if they need to step out.",
      },
      {
        title: 'Participation flexibility',
        body: "Don't force participation. Collaborate with the student on how they can engage without triggering attacks.",
      },
      {
        title: 'Flexible attendance',
        body: 'Acknowledge excused absences or late arrivals related to panic attacks.',
      },
      {
        title: 'Comfortable seating areas',
        body: 'Some students prefer being near the teacher, others in the back corner. Comfortable spaces reduce stress.',
      },
      {
        title: 'Encouraging calming techniques',
        body: 'Teach breathing, mindfulness, and grounding to help students manage their triggers.',
      },
    ],
    forTeachers:
      'Teachers are responsible for understanding what triggers panic and providing appropriate accommodations. Lesson plans built on a student-centered learning approach, differentiated instructions, and emotionally-inclined teaching create inclusive, flexible spaces. This promotes belonging and helps all students manage their participation without fear of triggering attacks.',
  },

  {
    id: 'ptsd',
    name: 'PTSD',
    category: 'emotional',
    tagline:
      'A psychiatric condition that may follow experiencing or witnessing a traumatic event.',
    definition:
      'Post-Traumatic Stress Disorder (PTSD) is a psychiatric condition that may develop in people who have experienced or witnessed a traumatic event. The events are experienced as emotionally or physically harmful or life-threatening, and the memory continues to impact daily life long after the event has passed.',
    types: [
      {
        title: 'Dissociation (subtype)',
        body: "A mental process in which the mind's ability to automatically and fully integrate all aspects of identity, memory, and consciousness fails under the stress of trauma.",
      },
      {
        title: 'Depersonalization',
        body: "Feeling detached from one's mental processes or body, so that one feels like an outside observer of one's own experience.",
      },
      {
        title: 'Derealization',
        body: "Persistent or recurrent experiences of one's surroundings as being unreal, as though the world were unreal or dreamlike.",
      },
      {
        title: 'Dissociative Amnesia',
        body: 'Inability to remember key details of a traumatic event.',
      },
    ],
    signs: [
      {
        title: 'Intrusion',
        body: 'The unwanted and involuntary intrusive thoughts such as repeated memories. Flashbacks may be so vivid that people feel they are reliving the traumatic experience.',
      },
      {
        title: 'Avoidance',
        body: 'Avoiding people, places, activities, objects, and situations that may trigger distressing memories.',
      },
      {
        title: 'Changes in cognition and mood',
        body: 'Inability to feel happiness, and a lack of interest in activity and/or people that they used to enjoy.',
      },
      {
        title: 'Changes in arousal and reactivity',
        body: 'Being irritable and having angry outbursts, behaving recklessly or in a self-destructive way.',
      },
    ],
    strategies: [
      {
        title: 'Low-trigger content materials',
        body: 'Age-appropriate texts that avoid graphic violence or distressing themes.',
      },
      {
        title: 'Official toolkits and resources',
        body: 'Use comprehensive, downloadable lesson materials, visual aids, and trauma-informed training.',
      },
      {
        title: 'Brain breaks',
        body: 'Brief movement or mindfulness breaks help students regulate their nervous systems and regain focus.',
      },
      {
        title: 'Choice and flexibility in learning',
        body: 'Giving students with PTSD a choice in tasks restores a sense of control over their environment.',
      },
    ],
    instructionalMaterials: null,
    accommodations: [
      {
        title: 'Seating arrangements',
        body: 'A change of seat can help a student feel safer and more focused.',
      },
      {
        title: 'Predictable routines',
        body: 'Advance warnings on schedule changes so the student is never caught off guard.',
      },
      {
        title: '"Stop-the-clock" breaks',
        body: 'Permission to pause an exam, take a breather, and return when calm.',
      },
      {
        title: 'Small-group testing',
        body: 'Reduces distraction and the stress of testing in a crowded room.',
      },
    ],
    forTeachers:
      "Students with PTSD often struggle with concentration, emotional regulation, and participation. Future teachers play a crucial role by applying trauma-informed approaches: understanding the 4 F's (Fight, Flight, Freeze, Fawn) as automatic survival responses; using supportive discipline rather than punishment, building relationships through care; and conducting educational impact assessments that evaluate academic, behavioral, and emotional regulation to build individualized education plans (IEPs).",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SOCIAL DISORDERS
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'asd',
    name: 'Autism Spectrum Disorder',
    category: 'social',
    tagline:
      'A neurodevelopmental condition affecting how a person communicates, interacts, and processes information.',
    definition:
      'Autism Spectrum Disorder (ASD) is a neurodevelopmental condition that affects how a person communicates, interacts, and processes information. It begins in early childhood. The word "spectrum" reflects a wide range of symptoms, classifications, and severity. There is no cure for ASD, but early accommodation and treatment can significantly improve outcomes.',
    types: [
      {
        title: 'Level 1 (Requires Support)',
        body: 'High-functioning. Can communicate verbally and manage daily tasks independently, but experiences challenges with social interaction, awareness, and emotional regulation.',
      },
      {
        title: 'Level 2 (Requires Substantial Support)',
        body: 'Limited verbal and nonverbal communication. Repetitive behaviors and resistance to change are frequent. Needs substantial educational, emotional, and social support.',
      },
      {
        title: 'Level 3 (Requires Very Substantial Support)',
        body: 'Significant impairments in communication, social interaction, and behavior. Severe sensory sensitivities and minimal speech are common. Needs continuous, extensive accommodation.',
      },
      {
        title: "Asperger's Syndrome (developmental disorder under ASD)",
        body: 'Above-average intelligence, strong language skills, and intense fixation on specific objects, but difficulty comprehending social situations.',
      },
      {
        title: 'PDD-NOS (Pervasive Developmental Disorder Not Otherwise Specified)',
        body: "Characteristics of autism that don't fully meet other autism-related criteria. Now categorized under the autism spectrum.",
      },
      {
        title: 'Autistic Disorder ("classic autism")',
        body: 'Occurs in early childhood, ranging mild to severe. Involves significant communication and social challenges, delayed language, repetitive behaviors, and difficulty with social cues.',
      },
      {
        title: 'Childhood Disintegrative Disorder (CDD)',
        body: 'A rare condition where a child appears to develop normally for a few years, then suddenly loses acquired language, social, motor, and self-care skills.',
      },
    ],
    signs: [
      {
        title: 'Avoiding eye contact',
        body: 'Eye contact can feel uncomfortable, distracting, or overwhelming.',
      },
      {
        title: 'Hyperactive behaviors',
        body: 'Constant movement, impulsive actions, excessive talking, fidgeting, especially when sensory input is high.',
      },
      {
        title: 'Repetitive patterns of behavior, interest, and activity',
        body: 'Repeating phrases, spinning, hand flapping, intense fixation on certain topics.',
      },
      {
        title: 'Difficulties with social interaction and communication',
        body: 'Trouble maintaining conversation, reading facial expressions, tone, or body language.',
      },
    ],
    strategies: [
      {
        title: 'Increase environmental predictability',
        body: 'Establish routines, give advance notice of changes via visual schedules, and explain classroom expectations clearly.',
      },
      {
        title: 'Reduce sensory strain',
        body: 'Minimize bright lights, loud noises, and crowded layouts. Lower volumes, design quiet spaces, and use soft lighting.',
      },
      {
        title: 'Provide explicit, literal communication',
        body: 'Avoid figurative language, sarcasm, or unclear directions. Clear and direct instructions help comprehension.',
      },
    ],
    instructionalMaterials: [
      {
        title: '"Work-Then" and token boards',
        body: 'Laminated cards showing the task ("Work") and the reward ("Then"). Tokens track points earned for completing tasks.',
      },
      {
        title: 'TEACCH task boxes',
        body: 'Structured workspaces with labeled boxes of organized materials. Students sort items by characteristic (color, shape, size) to build independent execution skills.',
      },
      {
        title: 'Interactive books',
        body: 'Books with movable picture icons that students place in missing spots on the page. An engaging cognitive and sensory experience.',
      },
    ],
    accommodations: [
      {
        title: 'Observational and functional assessments',
        body: 'Play-based interactions let teachers observe communication, behavior, and skills without pressure.',
      },
      {
        title: 'Rapport building',
        body: "Learn each student's deep interests and integrate them into daily activities. The environment must feel safe before learning can happen.",
      },
      {
        title: 'Environmental and sensory supports',
        body: 'Soft lights, fidget tools, labeled spaces, and a dedicated "reset" space for sensory regulation.',
      },
    ],
    forTeachers:
      "Understanding learners' needs, communication styles, and sensory sensitivities guides educators in developing suitable assessments and accommodations. Instead of relying on traditional written tests, teachers can use performance tasks, engaging activities, and hands-on experiences. This lets learners demonstrate understanding in ways that match their strengths, while building patience, empathy, and inclusive, learner-centered classrooms.",
  },

  {
    id: 'conduct',
    name: 'Conduct Disorder',
    category: 'social',
    tagline:
      'A pattern of aggressive behavior and rule-breaking that harms others and violates social norms.',
    definition:
      'Conduct Disorder (CD) is a mental health condition affecting children and teens, characterized by a consistent pattern of aggressive behaviors and actions that harm others. Children with conduct disorder often violate rules and societal norms, and may struggle with empathy, remorse, or taking responsibility.',
    types: null,
    signs: [
      {
        title: 'Aggression toward people and animals',
        body: "Or violating others' basic rights.",
      },
      { title: 'Destruction of property', body: '' },
      { title: 'Deceiving, lying, or stealing', body: '' },
      { title: 'Serious violations of rules', body: '' },
      {
        title: 'Difficulty feeling or expressing empathy or remorse',
        body: '',
      },
      { title: 'Limited emotional response toward others', body: '' },
      {
        title: 'Trouble performing well in school or community',
        body: 'And avoiding responsibility for poor performance.',
      },
    ],
    strategies: null,
    instructionalMaterials: [
      { title: 'Educational games', body: '' },
      { title: 'Manipulatives and learning kits', body: '' },
      { title: 'Role-playing cards and scenarios', body: '' },
      { title: 'Group activity materials', body: '' },
      { title: 'Science experiments and practical activities', body: '' },
    ],
    accommodations: null,
    forTeachers: null,
  },

  {
    id: 'odd',
    name: 'Oppositional Defiant Disorder',
    category: 'social',
    tagline:
      'Frequent anger, irritability, and hostile behavior toward authority figures.',
    definition:
      'Oppositional Defiant Disorder (ODD) is a behavioral disorder commonly seen in children and adolescents, characterized by frequent anger, irritability, disobedience, and hostile behavior toward authority figures like parents and teachers.',
    types: [
      {
        title: 'Mild ODD',
        body: 'Symptoms occur only in 1 setting (home OR school).',
      },
      {
        title: 'Moderate ODD',
        body: 'Symptoms appear in at least 2 settings (home AND school).',
      },
      {
        title: 'Severe ODD',
        body: 'Symptoms occur in 3 or more settings such as at home, school, with peers, or in public.',
      },
    ],
    signs: [
      {
        title: 'Angry and irritable mood',
        body: 'Easily loses temper, frequently touchy, easily annoyed, often resentful.',
      },
      {
        title: 'Argumentative and defiant behavior',
        body: 'Argues with adults, refuses to follow rules, blames others for mistakes.',
      },
      {
        title: 'Hurtful and revengeful behaviors',
        body: "Says hateful things when upset, tries to hurt others' feelings, seeks revenge.",
      },
    ],
    strategies: [
      {
        title: 'Be calm and consistent',
        body: 'Stay calm, avoid reacting with anger. Use a positive, consistent approach while respecting the student.',
      },
      {
        title: 'Reinforce positive behavior',
        body: 'Recognize and reward good behavior instead of only correcting negative actions.',
      },
      {
        title: 'Understand the cause of behavior',
        body: 'Observe triggers and early warning signs to prevent escalation.',
      },
      {
        title: 'Provide a safe space to calm down',
        body: 'A quiet area where the student can manage emotions and reset their behavior.',
      },
      {
        title: 'Offer clear choices and respect autonomy',
        body: 'Give simple choices, avoid power struggles, and allow time to decide.',
      },
      {
        title: 'Build positive connections',
        body: 'Build trust through conversation, active listening, and genuine care.',
      },
    ],
    instructionalMaterials: [
      {
        title: 'Behavior Support Plan (BSP) template',
        body: 'A structured document outlining goals, triggers, strategies, and agreed interventions.',
      },
      {
        title: 'Choice board or option cards',
        body: 'Visual cards giving limited acceptable choices to reduce defiance and provide a sense of control.',
      },
      {
        title: 'Reinforcement system chart',
        body: 'Token, point, or sticker tracker for immediate recognition of positive behaviors.',
      },
      {
        title: 'Calm-down / break pass system',
        body: 'A physical pass to request a short break in a designated safe space before behavior escalates.',
      },
      {
        title: 'Reflection or behavior log sheet',
        body: 'A guided form to help the student identify what happened, what triggered it, and what to do next time.',
      },
    ],
    accommodations: [
      {
        title: 'Structured choices',
        body: 'Limited choices within tasks (how/where to complete work) promote control and reduce power struggles.',
      },
      {
        title: 'Behavior contract',
        body: 'A written agreement between teacher, student, and parent outlining goals, expectations, and consequences.',
      },
      {
        title: 'Token economy / reward system',
        body: 'Positive reinforcement system where students earn tokens for appropriate behaviors.',
      },
      {
        title: 'Modified discipline approach',
        body: 'Restorative and supportive discipline guiding reflection rather than relying on punishment.',
      },
      {
        title: 'Access to safe space / break area',
        body: 'A designated calm-down area when feeling overwhelmed.',
      },
      {
        title: 'Daily emotional check-in',
        body: 'Brief check-ins with a feelings scale or conversation to assess emotional state.',
      },
      {
        title: 'Access to school counselor',
        body: 'Scheduled sessions and referrals to support emotional and behavioral needs.',
      },
      {
        title: 'Social skills group',
        body: 'Structured group sessions focused on communication, cooperation, and conflict resolution.',
      },
    ],
    forTeachers:
      'Understanding students with ODD helps teachers create a positive, structured, supportive classroom. Recognize defiant behaviors as part of the disorder rather than disrespect; manage power struggles through calm communication and choices; use positive reinforcement to encourage motivation; and support emotional regulation by recognizing triggers and guiding students toward healthier coping.',
  },

  {
    id: 'adhd',
    name: 'ADHD',
    category: 'social',
    tagline:
      'Attention-Deficit/Hyperactivity Disorder. A persistent pattern of inattention and/or hyperactivity-impulsivity.',
    definition:
      'ADHD is characterized by a persistent pattern of inattention and/or hyperactivity-impulsivity that interferes with functioning or development. It is typically categorized into three presentations: Predominantly Inattentive, Predominantly Hyperactive-Impulsive, and Combined.',
    types: [
      {
        title: 'Predominantly Inattentive',
        body: 'Difficulty sustaining attention, organizing tasks, and following through. Often appears distracted or not listening.',
      },
      {
        title: 'Predominantly Hyperactive-Impulsive',
        body: 'Excessive movement, talking, fidgeting, and acting without thinking. Difficulty waiting and self-regulating.',
      },
      {
        title: 'Combined Presentation',
        body: 'Both inattentive and hyperactive-impulsive symptoms are present together.',
      },
    ],
    signs: [
      {
        title: 'Executive function challenges',
        body: 'Difficulty with working memory, flexible thinking, and self-control.',
      },
      {
        title: 'Inattention',
        body: 'Trouble sustaining focus, not appearing to listen, frequently losing items.',
      },
      {
        title: 'Hyperactivity',
        body: 'Fidgeting, inability to remain seated, talking excessively.',
      },
      {
        title: 'Impulsivity',
        body: 'Blurting out answers, difficulty waiting, interrupting others.',
      },
      {
        title: 'Emotional dysregulation',
        body: 'Heightened sensitivity to frustration or perceived rejection.',
      },
    ],
    strategies: [
      {
        title: 'Visual organizers',
        body: 'Graphic organizers, color-coded folders, and visual schedules help students map out their day and thoughts.',
      },
      {
        title: 'Interactive tech',
        body: 'Gamified learning platforms provide the immediate feedback loop that ADHD brains often crave.',
      },
      {
        title: 'Manipulatives',
        body: 'Fidget tools (used as tools, not toys), stress balls, or standing desks channel movement productively.',
      },
      {
        title: 'Chunking',
        body: 'Break large projects into small, "bite-sized" tasks with individual deadlines.',
      },
      {
        title: 'The "Rule of Three"',
        body: 'Give no more than three instructions at a time, and ask the student to paraphrase them back.',
      },
    ],
    instructionalMaterials: null,
    accommodations: [
      {
        title: 'Setting',
        body: 'Testing in a separate, quiet room; preferential seating away from doors and windows.',
      },
      {
        title: 'Timing',
        body: 'Extended time (e.g., time and a half); frequent supervised breaks.',
      },
      {
        title: 'Response',
        body: 'Allowing oral responses instead of written; use of a computer for essays.',
      },
      {
        title: 'Formatting',
        body: 'Fewer items per page; larger font sizes; highlighting key keywords in instructions.',
      },
    ],
    forTeachers:
      "These strategies don't just help students with ADHD. They create a more accessible classroom for everyone (Universal Design for Learning). Clarity is prioritized: when instructions are clear for ADHD students, they're clear for everyone. Flexibility is normalized: multiple ways to learn reduce the stigma of \"special treatment.\" Understanding the neurological basis maintains empathy and prevents burnout, building positive teacher-student bonds.",
  },

  {
    id: 'rad',
    name: 'Reactive Attachment Disorder',
    category: 'social',
    tagline:
      'A condition where a child struggles to form healthy emotional bonds with caretakers, often after early neglect or abuse.',
    definition:
      "Reactive Attachment Disorder (RAD) is a condition where a child doesn't form healthy emotional bonds with their caretakers (parental figures), often due to emotional neglect or abuse at an early age. Children with RAD have trouble managing their emotions and struggle to form meaningful connections with other people.",
    types: null,
    signs: [
      {
        title: 'Limited emotional expression',
        body: 'Rarely smiling or showing happiness.',
      },
      {
        title: 'Frequent irritability without a clear reason',
        body: '',
      },
      {
        title: 'Appearing sad, fearful, or emotionally withdrawn',
        body: 'Especially around caregivers.',
      },
      {
        title: 'Difficulty being comforted by adults when upset',
        body: '',
      },
      {
        title: 'Preference for being alone',
        body: 'Rather than seeking comfort or connection.',
      },
      {
        title: 'Lack of interest in interacting with others',
        body: '',
      },
      {
        title: 'Limited emotional response when held or comforted',
        body: '',
      },
      {
        title: 'No interactive play',
        body: 'Not laughing or playing interactive games like peek-a-boo.',
      },
    ],
    strategies: [
      {
        title: 'Consistent structure',
        body: 'Clear routines and consistent expectations help students feel safer and more comfortable when trust is hard.',
      },
      {
        title: 'Positive discipline',
        body: 'Harsh punishment increases fear, anger, and withdrawal. Calm, respectful consequences are more effective.',
      },
      {
        title: 'Empathy and support',
        body: 'Patience and understanding help students who struggle to express emotions feel supported.',
      },
      {
        title: 'Strong communication',
        body: 'Regular contact with parents and caregivers, since behaviors at home and school may differ, keeps support consistent.',
      },
      {
        title: 'Trust building',
        body: 'Slow, positive, respectful relationships help students with RAD develop trust and improve social interactions.',
      },
    ],
    instructionalMaterials: null,
    accommodations: null,
    forTeachers:
      'Teachers should focus on creating a safe, structured, and supportive classroom environment. In creating a safe space for students, teachers should use calm communication and avoid harsh discipline or public embarrassment. Build a safe space and trusting relationship with students, and help them through a supportive classroom that includes social-emotional learning activities, clear and simple step-by-step instructions, and positive reinforcement and encouragement.',
  },
]

export const disordersByCategory = {
  emotional: disorders.filter((d) => d.category === 'emotional'),
  social: disorders.filter((d) => d.category === 'social'),
}

export function getDisorderById(id) {
  return disorders.find((d) => d.id === id) ?? null
}

export const categoryLabels = {
  emotional: 'Emotional Disorder',
  social: 'Social Disorder',
}

export const sectionLabels = {
  definition: 'Definition',
  types: 'Types & Subtypes',
  signs: 'Common Signs & Symptoms',
  strategies: 'Strategies',
  instructionalMaterials: 'Instructional Materials',
  accommodations: 'Assessment & Accommodations',
  forTeachers: 'How This Helps Future Teachers',
}
