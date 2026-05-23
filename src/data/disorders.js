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
    definition: `It refers to the natural human response to perceived stress and threat. It's a feeling of unease, nervousness, worry, and fear about something that is happening or might happen in the future. Most people experience anxiety from time to time, including speaking, communicating, and simply making decisions. This is our body's "fight or flight" response that helps individuals to react quickly to potential threats. Anxiety can arise from various life events or circumstances, including school stress, relationship conflicts, or financial situations. In some cases, anxiety can become a constant feeling even without the presence of stress or threat.

However, in terms of anxiety disorders—these are mental health diagnoses that are characterized by excessive worriness, intense fear, and irrational behaviours that negatively affect everyday decisions and lifestyles.`,
    types: [
      {
        title: 'Generalized Anxiety Disorder',
        body: 'A condition characterized by its frequent, excessive, and uncontrollable worry about everyday things—situations such as school, family, health, and future events. The anxiety may last longer than expected which can interfere with daily activities.',
      },
      {
        title: 'Agoraphobia',
        body: 'A condition that causes an intense fear of being in places where it may be difficult to get some help during intense panic or anxiety. People with this kind of phobia often avoid crowded places, public transportations, unfamiliar situations, or even leaving their homes due to feeling discomfort and fear.',
      },
      {
        title: 'Social Anxiety Disorder',
        body: 'This involves intense fear of social interactions and being judged by others. Individuals with this kind of anxiety may feel extremely anxious when speaking in class, meeting new people, or performing in front of a lot of people. This fear can negatively affect the way they communicate, expressing themselves, and forming relationships.',
      },
      {
        title: 'Specific Phobias',
        body: 'These phobias refer to various intense fears of particular objects, activities, or situations that usually pose no real danger to them. It includes fear of darkness, needles, blood, or spiders. They tend to avoid the feared objects or situation because it causes them to feel extremely anxious around it.',
      },
      {
        title: 'Panic Disorder',
        body: 'This is characterized by sudden or repeated panic attacks. A panic attack refers to a sudden feeling of intense fear that may include rapid heartbeat, dizziness, sweating, and difficulty in breathing. These attacks are unexpected and may cause a person to feel scared that another attack may occur.',
      },
    ],
    signs: {
      'Emotional / Cognitive': [
        {
          title: 'Trouble concentrating or making decisions',
          body: `People with anxiety are prone to overthinking even simple situations. They may become easily distracted and struggle to maintain focus because their minds are filled with constant "what if's" thoughts. As a result, making decisions may become overwhelming for them, since they grow a fear of judgment or facing negative outcomes.`,
        },
        {
          title: 'Feeling Impatient or Irritable',
          body: 'People with anxiety often become easily annoyed, impatient, and unable to relax because their body remains in the state of alertness. They are often overstimulated with emotions, which lowers their tolerance for handling stress and makes them react more on something they used to shrug off or handle calmly.',
        },
      ],
      Physical: [
        {
          title: 'Prone to nausea or abdominal distress',
          body: 'Anxiety does not only affect the mind, but it also influences the body. It can cause stomachaches, cramps, and discomfort in the abdomen, especially during stressful events. This happens because the stress hormones are disrupting the normal digestion and creating physical tension in the body',
        },
        {
          title: 'Sweating, Trembling, or Shaking',
          body: `When a person feels anxious, they tend to react as if they are facing danger. They are activating their "fight and flight" response that leads to excessive sweating, trembling hands, and stuttering. These physical reactions are caused by the adrenaline, which prepares the body in responding to perceived threats.`,
        },
        {
          title: 'Trouble Sleeping',
          body: 'Anxiety can make it difficult for a person to fall asleep. The constant worrying and racing thoughts may keep a person awake and active at night, preventing them from having a proper rest. Lack of sleep can worsen anxiety, creating a cycle that affects both mental and physical health.',
        },
      ],
    },
    strategies: [
      {
        title: 'Breaking tasks into smaller and manageable parts',
        body: 'This will make the work feel easier to finish because it allows students to focus on one thing at a time.',
      },
      {
        title: 'Giving clear instructions and classroom rules',
        body: 'By explaining directions in an organized manner, students may feel secure if they know what to be expected from them.',
      },
      {
        title: 'Providing positive reinforcement and acknowledgement',
        body: "Encouragement, praise, and simple recognition helps build a child's confidence and motivation.",
      },
      {
        title: 'Creating a comfortable and supportive classroom environment',
        body: 'A calm, supportive, and inclusive classroom environment ensures students feel emotionally belonging and acknowledged.',
      },
      {
        title: 'Allowing short breaks during activities',
        body: 'Allowing short breaks during activities gives students a time to breath, relax, calm, and regain focus',
      },
    ],
    instructionalMaterials: null,
    assessment: `Assessments should not only focus on a student's academics, but also check on their emotional comfort and ability to participate in class. Teachers may use creative formative assessments such as sketchnoting, role-play skits, or infographic creations instead of relying on the traditional high-pressure assessments. Flexible deadlines and alternative ways of presenting outputs are recommended for these students, especially in reducing anxiety and demonstrating an understanding of the lessons through different practices.`,
    accommodations: [
      {
        title: 'Conducting a "Kamustahan" session before the actual lessons',
        body: "with simple check-in sessions, it allows students to express how they're feeling at the moment.",
      },
      {
        title: 'Guiding learners through creative assessments',
        body: 'Creative assessments provides students with alternative ways in showcasing their understanding without relying only on traditional formatives.',
      },
      {
        title: 'Implementing breaks when students feel uncomfortable',
        body: 'Short breaks allow students to feel calm themselves, be comfortable, and regain emotional control.',
      },
      {
        title: 'Reduced Workloads without removing the learning objectives',
        body: 'Adjusting the amount of work prevents students from becoming overwhelmed and stressed while still ensuring that the learning objectives are achieved.',
      },
      {
        title: 'Arranging tables into comfortable and student-centered set-ups',
        body: 'Student-centered set-ups, such as circles or u-shaped can create a more supportive environment and less intimidating atmosphere for students.',
      },
    ],
    forTeachers:
      'Teachers learning about anxiety is essential to anticipate possible learning difficulties and prepare advanced accommodations that are suitable for their learning needs. Understanding anxiety helps them to create a lesson plan that is emotionally supportive, student-centered, and more inclusive. By considering the needs of anxious learners, teachers may design activities that reduce stress, promote engagement, and active participation in class. They can also implement a lesson with adjustable assessments, clear instructions, and proper classroom routines that will benefit all the learners. Effective lesson planning for students with anxiety improves classroom management, strengthens teaching strategies, and promotes better outcomes.',
  },

  {
    id: 'depression',
    name: 'Depression',
    category: 'emotional',
    tagline:
      'A common mental disorder involving a depressed mood or loss of interest in activities for long periods.',
    definition: `Depressive disorder (also known as depression) is a common mental disorder. It involves a depressed mood or loss of pleasure or interest in activities for long periods of time.

Depression is different from regular mood changes and feelings about everyday life. It can affect all aspects of life, including relationships with family, friends and community. It can result from or lead to problems at school and at work.

Depression can happen to anyone. People who have lived through abuse, severe losses or other stressful events are more likely to develop depression. Women are more likely to have depression than men.`,
    types: [
      {
        title: 'Single Episode Depressive Disorder',
        body: "the person's first and only episode;",
      },
      {
        title: 'Recurrent Episode Depressive Disorder',
        body: 'the person has a history of at least two depressive episodes; and',
      },
      {
        title: 'Bipolar Disorder',
        body: 'depressive episodes alternate with periods of manic symptoms, which include euphoria or irritability, increased activity or energy, and other symptoms such as increased talkativeness, racing thoughts, increased self-esteem, decreased need for sleep, distractibiity, and impulsive reckless behaviour.',
      },
    ],
    signs: [
      { title: 'Feelings of sadness, tearfulness, emptiness or hopelessness', body: '' },
      { title: 'Loss of interest or pleasure in most or all normal activities', body: '' },
      { title: 'Sleep disturbances, including insomnia or sleeping too much', body: '' },
      { title: 'Tiredness and lack of energy, so even small tasks take extra effort', body: '' },
      {
        title:
          'Reduced appetite and weight loss or increased cravings for food and weight gain',
        body: '',
      },
      { title: 'Anxiety, agitation or restlessness', body: '' },
      {
        title: 'Feelings of worthlessness or guilt, fixating on past failures or self-blame',
        body: '',
      },
      { title: 'Trouble thinking, concentrating, making decisions and remembering things', body: '' },
    ],
    strategies: [
      {
        title: 'Daily Emotional Check-in',
        body: "This helps to monitor the learner's emotional state regularly in a safe and nonjudgemental way. Students with depression feel alone, sad, and emptiness and as teachers, we can help them feel not to be alone. They will feel noticed and supported without being forced to speak publicly.",
      },
      {
        title: 'Break Tasks into Small Achievable Goals',
        body: 'This strategy can help students to reduce overwhelming academic pressure. For example, they can write an essay by breaking it down into 4 steps. Students with depression may struggle with motivation and energy. Smaller goals increase confidence and productivity.',
      },
      {
        title: 'Reflection and Journaling Activities',
        body: `The teacher will give students a question (e.g "What made you smile today?", "What is something difficult you overcome?") and students will write their reflection about the given question. It helps them to process emotions and build self-awareness.`,
      },
      {
        title: 'Peer Support Activities',
        body: 'Collaboration with classmates and teachers conducting cooperative games helps students to have healthy peer relationships and reduce feelings of isolation.',
      },
      {
        title: 'Creative Expression Activities',
        body: 'Teachers can let students express themselves creatively through art like drawing, poetry writing, music, dancing, etc. These activities provide safe emotional expression and relaxation. It also gives students a freedom of choice to enhance their sense of control and reduces stress.',
      },
    ],
    instructionalMaterials: [
      { title: 'Mood check-in charts', body: '' },
      { title: 'Reflection journals', body: '' },
      { title: 'Positive affirmation cards', body: '' },
      { title: 'Social-emotional learning (SEL) materials', body: '' },
      { title: 'Storybooks discussing emotions and resilience', body: '' },
    ],
    assessment: null,
    accommodations: [
      {
        title: 'Preferential seating',
        body: 'Allow students to sit in an area that is comfortable for them.',
      },
      {
        title: 'Provide extra time to answer quizzes or exams',
        body: 'This helps the student to not feel overwhelmed and pressured. Provide a classroom environment that is quiet and away from distractions when taking an exam or quiz.',
      },
      {
        title: 'Chunking',
        body: 'Teachers need to make a step by step process of the activities or dividing the activities little by little.',
      },
      {
        title: 'Attendance',
        body: 'allowing the student to be absent in class and make up for their missing works or activities due to depressive symptoms that make the student unable to complete their work.',
      },
    ],
    forTeachers:
      'Future teachers should understand students with depression need empathy, patience, encouragement, and emotional support. They can support them by promoting emotional well-being, create inclusive classrooms, improve student engagement, and support both academic and personal growth.',
  },

  {
    id: 'bipolar',
    name: 'Bipolar Disorder',
    category: 'emotional',
    tagline:
      'A mental health condition causing extreme mood swings between emotional highs (mania) and lows (depression).',
    definition: `Bipolar disorder, formerly called manic depression, is a mental health condition that causes extreme mood swings. These include emotional highs, also known as mania or hypomania, and lows, also known as depression.

Hypomania is a milder version of mania that typically lasts for a shorter period of time, it can be manageable, and a person can usually continue their daily activities and it will not be badly affected.

While Mania on the other hand can significantly impact a person's ability to do their daily activities, it can cause disruption and a person can completely stop their activities. Severe mania is very serious and it often needs to be treated in hospitals.`,
    types: [
      {
        title: 'Bipolar I Disorder',
        body: "This is considered the most severe type of bipolar disorder because it involves episodes of full mania that can greatly affect a person's daily life and functioning. A person with Bipolar I Disorder may or may not also experience depressive episodes.",
      },
      {
        title: 'Bipolar II Disorder',
        body: 'Unlike Bipolar I Disorder, Bipolar II is considered a less severe type. A person experiences periods of hypomania, which is an abnormally elevated mood that is less intense than full mania. These episodes usually alternate with periods of depression.',
      },
      {
        title: 'Cyclothymia',
        body: 'Among the different types of bipolar disorder, Cyclothymia is considered the mildest form. It is characterized by frequent mood swings over a long period of time, although the symptoms do not reach the severity of full mania or major depression.',
      },
    ],
    signs: {
      'Mania / Hypomania': [
        {
          title: 'Increased Energy',
          body: 'A person or student experiencing mania or hypomania may show unusually high levels of energy and enthusiasm. They may appear restless, overactive, and tireless.',
        },
        {
          title: 'Extreme Happiness or Euphoria',
          body: 'They may experience intense happiness, excitement, or optimism even without a clear reason.',
        },
        {
          title: 'Reduced Need for Sleep',
          body: 'Due to excessive energy and activity, they may feel like they do not need much sleep and still feel refreshed.',
        },
        {
          title: 'Rapid and Excessive Talking',
          body: 'They may talk very fast, speak excessively, and quickly switch from one topic to another because of racing thoughts.',
        },
        {
          title: 'Difficulty Concentrating',
          body: 'Their thoughts may move too quickly, making it hard for them to focus on one task or idea.',
        },
        {
          title: 'Impulsive Behavior',
          body: 'They may act or make decisions without carefully thinking about the possible consequences.',
        },
      ],
      'Bipolar Depression': [
        {
          title: 'Persistent Sadness',
          body: 'A person or student may feel sad, empty, hopeless, or emotionally unstable most of the time.',
        },
        {
          title: 'Loss of Interest in Activities',
          body: 'They may lose interest or enjoyment in activities they usually like doing.',
        },
        {
          title: 'Changes in Weight or Appetite',
          body: 'They may experience noticeable weight loss or gain without a clear reason.',
        },
        {
          title: 'Sleep Disturbances',
          body: 'They may have difficulty sleeping (insomnia) or sleep excessively (hypersomnia).',
        },
        {
          title: 'Low Energy or Fatigue',
          body: 'They may constantly feel tired or lack energy even without doing physical activities.',
        },
        {
          title: 'Feelings of Worthlessness',
          body: 'They may experience guilt, loneliness, helplessness, or feelings of worthlessness.',
        },
        {
          title: 'Difficulty Focusing',
          body: 'They may become forgetful or have trouble concentrating because they are overwhelmed by negative thoughts and emotions.',
        },
        {
          title: 'Suicidal Thoughts or Attempts',
          body: 'Some individuals may experience thoughts of self-harm or suicide.',
        },
        {
          title: 'Self-Harming Behaviors',
          body: 'In some cases, they may engage in behaviors that intentionally cause harm to themselves.',
        },
      ],
    },
    strategies: [
      {
        title: 'Flexibility',
        body: "Lessons and activities should be adjusted based on the student's mood, behavior, and learning pace.",
      },
      {
        title: 'Consistency',
        body: 'Predictable routines and clear expectations help students feel secure and manage their behavior effectively.',
      },
      {
        title: 'Patience',
        body: "Responding with understanding and positive reinforcement supports the student's emotional and academic growth.",
      },
      {
        title: 'Communication',
        body: 'Regular communication with parents and professionals helps provide consistent support for the student.',
      },
      {
        title: 'Coping Strategies',
        body: 'Teaching coping techniques such as deep breathing, mindfulness, or journaling can help students manage emotions and reduce stress.',
      },
      {
        title: 'Praise and Encouragement',
        body: "Positive reinforcement and recognition of achievements help build the student's confidence, motivation, and self-esteem.",
      },
      {
        title: 'Education and Awareness',
        body: 'Understanding bipolar disorder and promoting awareness among teachers, family members, and peers helps create a more supportive and accepting environment.',
      },
    ],
    instructionalMaterials: [
      {
        title: 'Visual Schedule or Routine Chart',
        body: 'Helps students follow predictable daily routines and reduce stress caused by sudden changes.',
      },
      {
        title: 'Behavior Monitoring or Mood Tracker',
        body: 'Used to monitor emotional changes, triggers, and warning signs of depressive or manic episodes.',
      },
      {
        title: 'Step-by-Step Task Checklists',
        body: 'Breaks large assignments into smaller, manageable tasks to support focus and organization.',
      },
      {
        title: 'Modified Assessment Materials',
        body: 'Includes shortened activities, flexible deadlines, or alternative task formats to accommodate mood-related difficulties.',
      },
      {
        title: 'Calm Down or Break Pass',
        body: 'Allows students to take short emotional regulation breaks when feeling overwhelmed or overstimulated.',
      },
    ],
    assessment:
      "There's a different ways on how we will accommodate and assess a student with Bipolar Disorder, but here are the some of the things that you can do as a Teacher:",
    accommodations: [
      {
        title: 'Functional Behavioral Assessment (FBA)',
        body: 'Identifying triggers and warning signs helps monitor emotional and behavioral changes commonly associated with bipolar disorder.',
      },
      {
        title: 'Comprehensive Evaluation',
        body: 'Assessing cognitive, emotional, and behavioral functioning helps determine appropriate supports for students with bipolar disorder.',
      },
      {
        title: 'Flexible Assessment Formats',
        body: 'Alternative tasks and shorter assessments help reduce stress and accommodate mood-related difficulties that may affect performance.',
      },
      {
        title: 'Scheduling & Time Management',
        body: 'Extended deadlines, additional testing time, and adjusted schedules help support students during depressive or manic episodes.',
      },
      {
        title: 'Classroom Environment',
        body: 'Quiet testing areas, break passes, and strategic seating help minimize stress and improve focus for students with bipolar disorder.',
      },
      {
        title: 'Executive Function Support',
        body: 'Notes, check-ins, and step-by-step instructions help students manage organization, attention, and task completion difficulties.',
      },
      {
        title: 'Health & Medication Needs',
        body: 'Access to snacks, hydration, and crisis support helps address medication side effects and emotional regulation needs associated with bipolar disorder.',
      },
    ],
    forTeachers: {
      intro:
        'As a teacher, knowing your students deeply gives you a better understanding of how to handle their needs and promotes inclusivity by being open and prepared to support students with disorders such as bipolar disorder. Understanding students with bipolar disorder helps teachers:',
      points: [
        {
          title: 'Recognize Manic Episodes',
          body: 'Helps teachers identify behaviors associated with manic episodes and prevents them from mistaking these symptoms for simple hyperactivity or misbehavior.',
        },
        {
          title: 'Manage Mood Fluctuations',
          body: 'Bipolar disorder involves sudden emotional highs and lows that may affect classroom behavior and participation. Understanding these changes helps teachers respond appropriately and provide proper support.',
        },
        {
          title: 'Reduce Stress-Triggered Episodes',
          body: 'Understanding possible triggers allows teachers to create a calmer, more structured, and supportive classroom environment.',
        },
        {
          title: 'Support Students During Depressive Episodes',
          body: 'Helps teachers recognize symptoms such as withdrawal, low motivation, sadness, fatigue, and difficulty completing tasks, while encouraging emotional support and flexible academic expectations during depressive periods.',
        },
      ],
    },
  },

  {
    id: 'ocd',
    name: 'OCD',
    category: 'emotional',
    tagline:
      'Obsessive-Compulsive Disorder. Unwanted intrusive thoughts that drive repetitive compulsive behaviors.',
    definition:
      'Obsessive- Compulsive Disorder is medically referred by other names, most notably the Obsessive-Compulsive Neurosis, Anankastic Neurosis, or simply Anankastic Disorder. Scrupulosity is also known as OCD, especially in older medical texts. It was also referred to as a form of anxiety or categorized by a specific religious or moral obsessions—it is also a feature pattern of OCD. These obsessions lead to repetitive behaviors, also called compulsions. These obsessions and compulsions get in the way of daily activities and cause a lot of distress. OCD often centers around certain themes, such as being overly fearful of getting contaminated by germs. Ultimately, you feel driven to do compulsive acts to ease the stress.',
    types: [
      {
        title: 'Contamination and Cleaning',
        body: 'Obsessions: Intense fear of germs. Compulsions: Excessive hand washing.',
      },
      {
        title: 'Fear of Harm and Checking',
        body: 'Obsessions: Fear that harm will come to yourself or others due to negligence. Compulsions: Repeatedly returning to check locks, appliances, or switches, or mentally reviewing events to ensure no disaster occurred.',
      },
      {
        title: 'Symmetry, Perfectionism, and Ordering',
        body: `Obsessions: An uncomfortable feeling that objects are not aligned properly or that things aren't "just right". Compulsions: Arranging objects in a very precise, symmetrical, or specific order, or repeating an action until it feels perfectly executed.`,
      },
      {
        title: 'Intrusive Thoughts (Taboo or Aggressive)',
        body: `Obsessions: Disturbing, unwanted thoughts centered around violence, taboo sexual subjects, or blasphemous religious/moral fears. Compulsions: it is often referred to as "Pure O". Silent praying to neutralize thoughts, or avoiding certain people and places.`,
      },
      {
        title: 'Hoarding',
        body: 'Obsessions: Fear that discarding objects will lead to harm, or regret. Compulsions: Difficulty throwing anything away.',
      },
    ],
    signs: [
      {
        title: 'Obsession',
        body: "OCD obsessions are lasting and unwanted thoughts that keep coming back or urges or images that are intrusive and cause distress or anxiety. You might try to ignore them or get rid of them by acting based on ritual. These obsessions usually intrude when you're trying to think of or do other things.",
      },
      {
        title: 'Compulsion',
        body: `OCD compulsions are repetitive behaviors that you feel driven to do. These repetitive behaviors or mental acts are meant to reduce anxiety related to your obsessions or prevent something bad from happening. But taking part in the compulsions brings no pleasure and may offer only limited relief from anxiety.

You may make up rules or rituals to follow that help control your anxiety when you're having obsessive thoughts. These compulsions are beyond reason and often don't relate to the issue they're intended to fix.`,
      },
    ],
    strategies: [
      {
        title: "The 4R's",
        body: `a widely used cognitive behavioral technique developed by psychiatrist Dr. Jeffrey Schwartz as part of his "Brain Lock" method. It is to recognize intrusive thoughts and compulsions as medical symptoms rather than personal truths.`,
      },
      {
        title: 'Simple instructions and visual organizer',
        body: 'Simple directions reduce confusion and the visual helps students organize tasks and reduce anxiety caused by uncertainty.',
      },
      {
        title: 'Simplified tasks',
        body: 'make the simple task even simpler, to prevent the feeling of overwhelm.',
      },
      {
        title: 'Flexible deadlines',
        body: 'allowing extra time because students with OCD may take longer to do the task.',
      },
      {
        title: 'Audiobooks and alternatives',
        body: 'providing audio recordings of reading materials to prevent students from getting stuck on reading a single passage perfectly.',
      },
    ],
    instructionalMaterials: null,
    assessment: null,
    accommodations: [
      { title: 'Seating Arrangement', body: '' },
      { title: 'Access to counseling', body: '' },
      { title: 'Classroom observation', body: '' },
      { title: 'Portfolio assessment', body: '' },
      { title: 'Functional Behavioral', body: '' },
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
          body: 'promote awareness, empathy, and acceptance among classmates, creating a more supportive and inclusive classroom environment.',
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
    definition: `One of the types of anxiety disorder characterized by its sudden or unexpected episodes of intense fear accompanied by physical symptoms such as chest pain, rapid heartbeats, shortness of breath, dizziness, and abdominal stress. Individuals with panic disorders often experienced recurrent panic attacks and spent long periods of time in constant fear of another attack.

Although the panic attack itself is not life-threatening, they can significantly affect an individual's quality of life, behaviors, and cognitive development.`,
    types: [
      {
        title: 'CARDIAC',
        body: 'It mainly involves symptoms related to the heart or chest area. It caused people to experience rapid heartbeat, chest pain, and heart palpitations. Many individuals become frightened and repeatedly seek medical help because it mimics the sound of heart attack.',
      },
      {
        title: 'RESPIRATORY',
        body: 'This is characterized by breathing-related symptoms. This creates a terrifying feeling of suffocation, which makes people panic even more and make it harder to calm down. Also, individuals may experience shortness of breath, hyperventilation, or dizziness.',
      },
      {
        title: 'GASTROINTESTINAL',
        body: 'Anxiety and panic attacks can strongly affect the process of digestion because as the body responds to the stress—it impacts the stomach and intestines. Individuals may experience nausea, abdominal discomfort, or an upset stomach during panic attacks.',
      },
      {
        title: 'VESTIBULAR',
        body: 'This mainly affects the balance and spatial awareness. People with this kind of subtype may experience feeling disoriented or afraid that they might lose balance—which can worsen their panic attacks.',
      },
    ],
    signs: [
      {
        title: 'Sense of being in danger',
        body: "People with panic disorders may feel that something terrible might happen at any moment even if there's no actual presence of the threat. This intense fear causes them to remain highly alert—causing them to think negatively of everything.",
      },
      {
        title: 'Trembling or Shaking',
        body: `A person with panic attacks may activate their body's "fight and flight" response, causing uncontrollable body shaking. This often happens because the body is releasing stress hormones that prepare the body to react in danger.`,
      },
      {
        title: 'Abdominal Cramping',
        body: 'If a person is experiencing stress, their digestive system is most likely affected by it too. People may experience nausea, stomach cramps, or abdominal discomfort during moments of extreme nervousness.',
      },
      {
        title: 'Dizziness and lightheadedness',
        body: 'People with panic attacks may experience feeling dizzy, weak, or as if they are about to faint. Common symptoms are rapid breathing, tension in the body, and heart palpitations that create sensations of unsteadiness.',
      },
      {
        title: 'Reality detachment',
        body: `People may feel disconnected from themselves during intense panic attacks. It is often called "derealizations" that can make the environment feel unreal or dream-like, causing more confusion to them.`,
      },
    ],
    strategies: [
      {
        title: 'Color-coded task prioritization (The Stoplight System)',
        body: 'The teacher may apply colored highlighters to different assignment sheets. Red tasks means required to be finished before leaving the classrooms, Yellow tasks are the activities that can be finished at home if the time runs out, and Green tasks are completely optional activities. This enables students to breathe in, instead of being overwhelmed over trying to finish tasks all at once.',
      },
      {
        title: 'Immediate Feedback',
        body: 'The teacher may use visual signs, non-verbal cues (thumbs up), or acknowledgement that will encourage students to participate actively in the class. These signals may be use an opportunity for them to keep on track with their progress and feel motivated accomplishing the tasks without feeling overwhelmed.',
      },
      {
        title: 'Visual Daily Checklists',
        body: 'The teacher may create a step-by-step schedule that will be written down in the corner of the blackboard to keep on track of the time. For example, (10) minutes for the icebreaker, (20) minutes for the lecture, and (30) minutes for group activities and presentation. The teacher may remove each item if they already finished that particular session.',
      },
    ],
    instructionalMaterials: [
      {
        title: 'Step-by-Step Instructions',
        body: 'providing clear directions, printed checklist instructions, and understandable oral discussions will be efficient for learners to follow without being overwhelmed.',
      },
      {
        title: 'Low-pressuring testing toolkits',
        body: 'Instead of sticking to traditional practices, they will be provided with other alternative activities such as matching columns, brain dumps (active recalls), or choice boards.',
      },
      {
        title: 'The Presence of Grounding Objects',
        body: "These objects help students to ease their body tension through items such as stress balls, fidget toys, or textured stickers. By shifting focus to physical sensations, they clear the students' once chaotic thoughts.",
      },
    ],
    assessment:
      "Assessments should focus on the student's understanding and participation in class without increasing their stress levels. The teachers may use self-reflective activities such as journals, group activities, self-assessment checklists, and scenario-based performances to ensure that students are emotionally engaged and in good condition. These assessments are suitable for learners with panic attacks because it provides them an opportunity to build their confidence and feel at ease in accomplishing tasks without feeling overwhelmed.",
    accommodations: [
      {
        title: 'Lecture Accessibility',
        body: "Provide alternative learning materials such as recorded sessions, modules, or copies of their peer's notes to ensure that they don't miss a material.",
      },
      {
        title: 'Participation Flexibility',
        body: 'Avoid forcing participation that may increase their stress levels. It is recommended that we collaborate with them to determine a way for them to participate in class without triggering attacks.',
      },
      {
        title: 'Flexible Attendance',
        body: 'Acknowledge excuse absences or late arrivals when it has something to do with their panic attacks.',
      },
      {
        title: 'Placing Students in Comfortable Areas',
        body: 'Some students prefer sitting near the teacher, or in the back corner that makes them feel secure. It puts students at ease when they are placed in spaces where they feel comfortable and less distracted.',
      },
      {
        title: 'Encouraging Calming Techniques',
        body: 'Teaching calming strategies such as breathing techniques, mindfulness exercises, and grounding activities can guide students in managing their triggers more effectively.',
      },
    ],
    forTeachers: {
      intro:
        'The teachers are responsible for understanding the needs of their learners, especially what triggers their panic disorders and the appropriate accommodations for learners experiencing this. By creating lesson plans that are inclusive, flexible, and learner-centered for all, it promotes belongingness and acknowledging their struggles as a learner. With proper principles and strategies, teachers may implement activities suitable for their learning needs.',
      points: [
        {
          title: 'Student-Centered Learning Approach',
          body: "This principle drives teachers to practice inclusive teaching inside their classroom. It allows them to adjust activities based on the student's emotional conditions and comfort level to provide proper accommodations. Also, teachers may organize lessons in a way that students are able to manage their time handling activities, including proper procedure, grounding activities, visual checklist, and color-coded task prioritization.",
        },
        {
          title: 'Differentiated Instructions',
          body: 'The teachers may consider providing multiple instructions for students to express their understanding and learnings differently. This includes reflective sessions, real-life scenarios performances, interactive activities, and creative assessments. This principle ensures that students with panic disorders are still able to achieve the learning objectives without being pressured in a place that may trigger attacks.',
        },
        {
          title: 'Emotionally teaching inclined',
          body: 'This principle allows teachers to integrate their emotional intelligence to their teaching instructions. It allows teachers to build a safe and comfortable environment, providing immediate feedback, comfortable seating arrangements, and encouraging students to feel emotionally secure and academically satisfied.',
        },
      ],
    },
  },

  {
    id: 'ptsd',
    name: 'PTSD',
    category: 'emotional',
    tagline:
      'A psychiatric condition that may follow experiencing or witnessing a traumatic event.',
    definition:
      'Post-Traumatic Stress Disorder (PTSD) is a psychiatric condition that may occur in people who have experienced or witnessed a traumatic event or series of traumatic events. The individual often experiences the events as emotionally or physically harmful or life-threatening.',
    types: [
      {
        title: 'Dissociation',
        body: "refers to a mental process in which the mind's ability to automatically and fully integrate all aspects of identity, memory, and consciousness fails under the stress of trauma.",
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
    signs: {
      'Common Traumatic Triggers': [
        { title: 'Physical, emotional, or sexual assault', body: '' },
        { title: 'Severe Accidents', body: '' },
        { title: 'Sudden Loss', body: '' },
        { title: 'Disasters', body: '' },
        { title: 'Workplace Exposure', body: '' },
      ],
      'Four Main Categories of Symptoms': [
        {
          title: 'Intrusion',
          body: 'it is the unwanted and involuntary intrusive thoughts such as repeated memories. Flashbacks may be so vivid that people feel they are reliving the traumatic experience.',
        },
        {
          title: 'Avoidance',
          body: 'avoiding people, places, activities, objects, and situations that may trigger distressing memories.',
        },
        {
          title: 'Changes in cognition and mood',
          body: 'inability to feel happiness, and a lack of interest in activity and/or people that they used to enjoy.',
        },
        {
          title: 'Changes in arousal and reactivity',
          body: 'describe being irritable and having angry outbursts, behaving recklessly or in a self-destructive way',
        },
      ],
    },
    strategies: [
      {
        title: 'Low-trigger content materials',
        body: 'age-appropriate texts that avoid graphic violence or distressing themes.',
      },
      {
        title: 'Official Toolkits and Resources',
        body: 'for comprehensive, downloadable lesson materials, visual aids, and deeper training, refer to these authoritative resources.',
      },
      {
        title: 'Brain Breaks',
        body: 'integrate regular, brief movement or mindfulness breaks to help students regulate their nervous systems and regain focus.',
      },
      {
        title: 'Choice and flexibility in learning',
        body: 'giving students with PTSD a choice restores a sense of control.',
      },
    ],
    instructionalMaterials: null,
    assessment: null,
    accommodations: [
      {
        title: 'Seating arrangements',
        body: 'a change of seating arrangements can sometimes help a student feel safe and focused.',
      },
      {
        title: 'Predictable Routine',
        body: 'advance warnings on schedule changes so the student is never caught off guard.',
      },
      {
        title: '"Stop-the-Clock" Breaks',
        body: 'gives the student permission to pause an exam, take a breather, and return when calm.',
      },
      {
        title: 'Small-Group Testing',
        body: 'reduces distraction and the stress of being in a crowded room.',
      },
    ],
    forTeachers: {
      intro:
        'Students with Post-Traumatic Stress Disorder (PTSD) often experience difficulties in concentration, emotional regulation, and classroom participation due to past traumatic experiences that affect their sense of safety and learning. Because of this, future teachers play a crucial role in creating a supportive and understanding learning environment that responds appropriately to their needs. By applying trauma-informed approaches such as understanding trauma responses, using supportive discipline, and implementing appropriate educational assessments, teachers can help students with PTSD feel safe, respected, and capable of learning, such as:',
      points: [
        {
          title: "The 4F's",
          body: "typically refers to the Four Fear (or Trauma) Responses: Fight, Flight, Freeze, and Fawn. These are instinctive survival instincts that our brain's nervous system automatically activates when it perceives danger, extreme stress, or trauma",
        },
        {
          title: 'Discipline instead of punishment',
          body: 'build these relationships and attachments by intentionally and transparently handling these students with care and understanding.',
        },
        {
          title: 'Educational Impact Assessments',
          body: 'it evaluates the academic performance, behavioral changes, and emotional regulation to build an individualized education plan (IEP).',
        },
      ],
    },
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
    definition: `A neurodevelopmental condition that affects how a person communicates, interacts, and processes information. It begins in early childhood, where it becomes difficult for a child to function normally as they grow up. This causes problems in getting along with others socially and maintaining conversational flows. The word "spectrum" encompasses a wide range of symptoms, classifications, and severity of its causes.

There is no cure for ASD, but an immediate accomodation/treatment may improve the lives of many children experiencing this.`,
    types: [
      {
        title: 'LEVEL 1 (Requires Support)',
        body: 'Individuals under level 1 ASD are considered high functioning, they can communicate using words and manage daily tasks independently but still experience challenges in social interactions. They need support/accommodation in improving their communication, social awareness, and emotional regulation.',
      },
      {
        title: 'LEVEL 2 (Requires Substantial Support)',
        body: 'Difficulties in communication and behaviors are noticeable in Level 2 ASD. Individuals in this level may have limited verbal and nonverbal communication skills and may struggle completely in social interactions. Repetitive behaviours and resistance to change are also frequent that interfere with their daily functioning. This requires substantial educational, emotional, and social support for continuous improvements of their participation in everyday activities.',
      },
      {
        title: 'LEVEL 3 (Requires Very Substantial Support)',
        body: 'Level 3 ASD is the most critical and crucial level that involves significant impairments in communication, social interaction, and behavior. They often display repetitive behaviours, strong resistance to change, severe sensory sensitivities, and may speak a little. Learners at this level are required to have continuous and extensive accommodation for their daily lives, educational growth, and personal care.',
      },
      {
        title: "Asperger's Syndrome",
        body: "This disorder is considered a separate developmental condition but later on revealed that it's under the spectrum of autism. Individuals with Asperger's Syndrome have an above average intelligence, strong language skills, and immediate fixation to objects, but struggles comprehending social situations.",
      },
      {
        title: 'Pervasive Developmental Disorder Not Otherwise Specified (PDD-NOS)',
        body: "A diagnosis for individuals who's showing characteristics of autism but did not fully meet the criteria of other autism-related disorders. Symptoms including difficulty in communication, social interaction, and maintaining behaviors are part of this disorder. Now, it is categorized as part of the autism spectrum syndrome.",
      },
      {
        title: 'Autistic Disorder',
        body: 'This often occurs during early childhood and can range from mild to severe. It is also known as "classic autism" as it involves significant challenges in communication and the way they socialize. They may have delayed language development, repetitive behaviors, and difficulty understanding social cues.',
      },
      {
        title: 'Childhood Disintegrative Disorder (CDD)',
        body: 'A rare, severe neurodevelopmental condition in which a child appears normally in a few years of their life and then suddenly loses acquired skills—such as language acquisition, social skills, motor skills, and self-care.',
      },
    ],
    signs: [
      {
        title: 'Avoiding Eye Contacts',
        body: "Individuals with autism may limit their eye contact during conversation. Some admitted that maintaining eye contact with someone feels uncomfortable, distracting and overwhelming for them. So, instead of looking straight into the person's eye, they often focus on other objects, frequently averting gazes, and just simply listening without visual contact.",
      },
      {
        title: 'Hyperactive Behaviours',
        body: 'Some individuals with ASD may display hyperactive behaviours such as constant movement, impulsive actions, excessive talking, and fidgeting. They may move around and get excited over certain situations. Hyperactivity often occurs when their sensory sensitivities are high—making it difficult for them to regulate their attention and emotions.',
      },
      {
        title: 'Repetitive Patterns of Behaviours, Interests, Activities',
        body: 'One of the common characteristics of ASD is engaging in repetitive habits. This may include repeating the same phrases, spinning, hand flapping, or doing things in a specific order. They may also develop an intense interest in certain activities, topics, and objects—leading them to spend a lot of time focusing on doing those habits.',
      },
      {
        title: 'Difficulties with Social Interaction/ Communication',
        body: 'People with ASD may develop a sense of difficulty in understanding social situations, expressing themselves, or communicating with the outside world. They may have difficulty in maintaining the conversation, understanding facial expressions, tone of voice, or body languages. Some individuals prefer to be alone or may struggle in forming relationships, while others want social interactions but do not know how to communicate themselves properly.',
      },
    ],
    strategies: [
      {
        title: 'Increasing environmental predictability',
        body: 'Teachers may increase environmental predictability by establishing classroom routines, giving out advance notice of changes (through visual schedules), and explaining the classroom expectations. This will reduce the feeling of stress, confusion, and anxiety by allowing learners to focus better in learning and actively participating in class.',
      },
      {
        title: 'Reducing Sensory Strain',
        body: 'Most of the learners with ASD have various sensory sensitivities that can be triggered through noises, bright lights, or crowded places. In creating an educational environment that is suitable for their learning needs, teachers must consider minimizing sensory strains such as lowering the volume levels, designing quiet spaces, and using soft lights to avoid overwhelming the students.',
      },
      {
        title: 'Providing Explicit, Literal Communication',
        body: 'Learners with ASD may struggle in understanding figurative languages, jokes, sarcasms, or unclear instructions. By providing clear instructions, direct information, and specific topics helps learners to better understand activities, comprehend directions, acknowledge social relationships, and know expectations within the classroom.',
      },
    ],
    instructionalMaterials: [
      {
        title: '"Work-Then" & Token Boards',
        body: 'A laminated card with two pictures. The "Work" shows the picture of a task. While the "Then" shows the motivating rewards. This ensures that students will learn where all the hard work ends up and what they must do to acquire the rewards. The token boards serve as the system of how many points they received in doing the tasks.',
      },
      {
        title:
          'Treatment and Education of Autistic and Related Communication Handicapped Children (TEACHH) Task Boxes',
        body: "This framework used structured workspaces to build the learners' independent execution skills. It includes labeled boxes with organized materials inside. The student must arrange the materials according to its characteristics (e.g. matching colors, shapes, and sizes). It ensures that the students will learn effectively and efficiently by sorting out materials with clear objectives.",
      },
      {
        title: 'Interactive Books',
        body: 'These books contain picture icons that are movable. While reading/listening, they may interact with its features by placing the cut-out pictures into the missing spot on the page. These engaging activities encouraged students with ASD to enhance their cognitive skills and enhanced sensory experience.',
      },
    ],
    assessment: null,
    accommodations: [
      {
        title: 'Observational & Functional Assessments',
        body: "One of the most common and effective methods in recording a student's progress and behavior. Teachers may conduct play-based interactions to observe how they communicate, interact, behave, or use their acquired skills without pressure. This guide the teachers providing proper accommodations according to their needs.",
      },
      {
        title: 'Rapport Building',
        body: "In the framework of educational psychology, teachers serve as the knowledgeable others (MKO) for students. However, an autistic learner may not be able to learn or absorb knowledge from a MKO if the environment itself does not feel safe, comfortable, or regulated. Teachers may build connections by learning about their student's deep interests and integrating them in daily activities.",
      },
      {
        title: 'Environmental & Sensory Supports',
        body: 'Physical classroom environment may become a challenge for learners with ASD, especially if it becomes a barrier to learning. They may differ in sensory experiences, so it is recommended that teachers must consider different factors such as providing soft lights, fidget tools for maintaining focus, organizing and labeling each space with clear signages, and a space designed for providing a safe place to reset their minds.',
      },
    ],
    forTeachers:
      "Understanding the learner's needs, communication styles, and sensory sensitivities will guide educators in developing suitable assessments, providing equal opportunities, and accommodations for their student's development. Instead of relying solely on the traditional written assessments, teachers may include performance tasks, engaging activities, and hands-on learning experiences in their lesson plans. With this, it allows learners to demonstrate their understanding in ways that match their capabilities and strengths. This allows teachers to develop patience, empathy, and effective classroom management skills, encouraging them to create learner-centered lessons that promote inclusion, meaningful, and respectful learning environments for everyone. Furthermore, acknowledging various accommodations may also guide educators in planning appropriate classroom strategies that support the learners' success. Teachers may provide flexible learning tasks, simplified directions, sensory-friendly activities, and visual presentations to help learners with ASD to improve their focus, reduce anxiety, and actively participate in class discussions.",
  },

  {
    id: 'conduct',
    name: 'Conduct Disorder',
    category: 'social',
    tagline:
      'A pattern of aggressive behavior and rule-breaking that harms others and violates social norms.',
    definition:
      "Conduct disorder (CD) is a mental health condition that affects children and teens that's characterized by a consistent pattern of aggressive behaviors and actions that harm the well-being of others. Children with conduct disorder also often violate rules and societal norms.",
    types: [
      {
        title: 'Socialized conduct disorder',
        body: 'Children are able to make friends who usually also behave in an antisocial way. Relationships with adults may be good but there are often difficulties with some authority figures.',
      },
      {
        title: 'Unsocialized conduct disorder',
        body: 'These children do not have friends because they are rejected by their peers but some of them chose to isolate themselves and chose to be alone.',
      },
    ],
    signs: [
      {
        title: "Aggression toward people and animals and/or violating others' basic rights.",
        body: '',
      },
      { title: 'Destruction of property.', body: '' },
      { title: 'Deceiving, lying and/or stealing.', body: '' },
      { title: 'Serious violations of rules.', body: '' },
      { title: 'Feeling and expressing empathy or remorse.', body: '' },
      { title: 'Showing emotion toward others', body: '' },
      {
        title:
          'Performing well in the school or community and taking responsibility for poor performance.',
        body: '',
      },
    ],
    strategies: [
      {
        title: 'Token Reward System',
        body: 'Using positive reinforcement by giving points, stars, or tokens for following directions, completing work, or showing respectful behavior. It helps the learners to repeat good behavior.',
      },
      {
        title: 'Clear Rules and Expectations',
        body: 'Students with conduct disorder respond better when expectations are predictable and clearly explained.',
      },
      {
        title: 'Check-In and Check-Out System',
        body: 'Since students with conduct disorder are having patterns of aggressive behavior, it is important to monitor their behavior consistently throughout the day by checking them in the morning and observing what went well. This helps to build accountability and teacher-student trust.',
      },
      {
        title: 'Calm-Down Corner',
        body: 'Allow students to have enough time to calm themselves by having a calm-down area with different coloring sheets or emotion charts. It helps students to learn managing emotions before behaviors escalate.',
      },
    ],
    instructionalMaterials: [
      { title: 'Educational games', body: '' },
      { title: 'Manipulatives and learning kits', body: '' },
      { title: 'Role-playing cards and scenarios', body: '' },
      { title: 'Group activity materials', body: '' },
      { title: 'Science experiments and practical activities', body: '' },
    ],
    assessment: null,
    accommodations: [
      {
        title: 'Behavioral Rating Scales',
        body: "CBCL (Child Behavior Checklist) helps the teacher to quantify frequency of symptoms. It can also help if the child's behavior inside the classroom is mild or severe.",
      },
      {
        title: 'The use of ICT',
        body: 'Consider the use of technology. Students with conduct disorder tend to work well on computers with active programs.',
      },
      {
        title: 'Provide clear instructions',
        body: 'Tasks can break into smaller steps to avoid escalating emotions or behavior.',
      },
      {
        title: 'Offering choices',
        body: 'This helps students to have freedom to choose what are they going to do next instead of direct commands.',
      },
    ],
    forTeachers: {
      intro:
        'Future teachers should understand that students with conduct disorder need guidance, patience, and positive support. Through effective classroom management and strong relationships, teachers can help students improve their behavior.',
      points: [
        {
          title: 'Build Positive Teacher-Student Relationships',
          body: 'Students with conduct disorder often struggle with trust and authority. Positive relationships can reduce aggressive or oppositional behavior.',
        },
        {
          title: 'Use Positive Reinforcement',
          body: 'Positive attention encourages students to repeat appropriate behavior.',
        },
        {
          title: 'Provide Structured Routines',
          body: 'Structure reduces confusion, frustration, and impulsive reactions.',
        },
      ],
    },
  },

  {
    id: 'odd',
    name: 'Oppositional Defiant Disorder',
    category: 'social',
    tagline:
      'Frequent anger, irritability, and hostile behavior toward authority figures.',
    definition:
      'Oppositional Defiant Disorder is a behavioral disorder commonly seen in children and adolescents that is characterized by frequent anger, irritability, disobedience, and hostile behavior toward authority figures such as parents and teachers.',
    types: [
      {
        title: 'Mild ODD',
        body: 'The symptoms occur only in 1 setting (home or school).',
      },
      {
        title: 'Moderate ODD',
        body: 'The symptoms are seen in at least 2 settings (home and school).',
      },
      {
        title: 'Severe ODD',
        body: 'The symptoms occur in 3 or more settings (for instance at home or school, with peers, or in public).',
      },
    ],
    signs: [
      {
        title: 'Angry and Irritable mood',
        body: 'They often and easily lose temper and are frequently touchy and can be easily annoyed by others. They are often angry and resentful.',
      },
      {
        title: 'Argumentative and Defiant Behavior',
        body: 'They often argue with adults or people who have a higher authority. They often define or refuse to follow adult requests or rules. They also often blame someone else for a mistake or misbehavior that they have done.',
      },
      {
        title: 'Hurtful and Revengeful behaviors',
        body: 'They say hateful things when they are upset and try to hurt the feelings of other people to seeks revenge.',
      },
    ],
    strategies: [
      {
        title: 'Be calm and consistent',
        body: "Teachers should stay calm, avoid reacting with anger, and use a positive, consistent approach while respecting the student's space and behavior expectations.",
      },
      {
        title: 'Reinforce positive behavior',
        body: 'Teachers should focus on recognizing and rewarding good behavior instead of only correcting negative actions to encourage improvement and motivation.',
      },
      {
        title: 'Understand the cause of the behavior',
        body: 'Teachers should observe triggers and early warning signs to better understand why behavior happens and prevent escalation.',
      },
      {
        title: 'Provide a safe space for students to calm down',
        body: 'Teachers should allow students a quiet area where they can calm down, manage emotions, and reset their behavior.',
      },
      {
        title: 'Offer students clear choices and respect their autonomy',
        body: 'Teachers should give simple choices, avoid power struggles, and allow students time to decide appropriately.',
      },
      {
        title: 'Build positive connections with students',
        body: 'Teachers should build trust through simple conversations, active listening, and showing genuine care to strengthen relationships and support behavior improvement.',
      },
    ],
    instructionalMaterials: [
      {
        title: 'Behavior Support Plan (BSP) Template',
        body: "A structured document that outlines the student's behavior goals, triggers, strategies, and agreed interventions so the teacher has a clear, consistent plan to follow.",
      },
      {
        title: 'Choice Board or Option Cards',
        body: 'Visual or written cards that give limited, acceptable choices during tasks to reduce defiance and help the student feel a sense of control.',
      },
      {
        title: 'Reinforcement System Chart',
        body: 'A simple tracking tool (token, point, or sticker system) used to immediately recognize and reward positive behaviors.',
      },
      {
        title: 'Calm Down / Break Pass System',
        body: 'A physical card or pass that allows the student to request a short break in a designated safe space before behavior escalates.',
      },
      {
        title: 'Reflection or Behavior Log Sheet',
        body: 'A guided form used after incidents to help the student identify what happened, what triggered it, and what they can do differently next time.',
      },
    ],
    assessment: null,
    accommodations: [
      {
        title: 'Structured Choices',
        body: 'Students will be provided with limited, structured choices within tasks (e.g., how or where to complete work) to promote a sense of control, reduce power struggles, and improve cooperation during classroom activities.',
      },
      {
        title: 'Behavior Contract',
        body: 'A clear written agreement will be established between the teacher, student, and parent outlining specific behavior goals, expectations, and agreed consequences or rewards to help the student take responsibility for their behavior and monitor progress.',
      },
      {
        title: 'Token Economy / Reward System',
        body: 'A positive reinforcement system will be implemented where students earn tokens, points, or stickers for appropriate behaviors, which can be exchanged for rewards to increase motivation and reinforce positive behavior.',
      },
      {
        title: 'Modified Discipline Approach',
        body: 'Restorative and supportive discipline strategies will be used instead of relying solely on punishment, guiding students to reflect on their behavior, identify triggers, and develop appropriate responses.',
      },
      {
        title: 'Access to Safe Space / Break Area',
        body: 'Students will be given access to a designated safe space or break area when feeling overwhelmed or emotionally escalated to support self-regulation and prevent behavioral escalation.',
      },
      {
        title: 'Daily Emotional Check-In',
        body: "Brief daily emotional check-ins will be conducted using tools such as a feelings scale or short conversations to assess students' emotional states and provide timely support when needed.",
      },
      {
        title: 'Access to School Counselor',
        body: 'Access to the school counselor will be ensured through both scheduled sessions and referrals as needed to support emotional and behavioral needs.',
      },
      {
        title: 'Social Skills Group',
        body: 'Participation in structured social skills group sessions will be supported, focusing on communication, cooperation, and conflict resolution to strengthen interpersonal skills and peer relationships.',
      },
    ],
    forTeachers: {
      intro:
        'Understanding students with Oppositional Defiant Disorder (ODD) helps teachers create a more positive, structured, and supportive classroom environment. By recognizing the emotional and behavioral challenges associated with ODD, teachers can respond more effectively and encourage better student behavior and participation.',
      points: [
        {
          title: 'Recognize Defiant Behaviors',
          body: 'Students with ODD may argue, refuse instructions, or get easily irritated. Understanding this helps teachers respond calmly instead of labeling them as disrespectful.',
        },
        {
          title: 'Manage Power Struggles',
          body: 'They may react strongly to strict demands, so using calm communication and giving choices helps reduce conflict.',
        },
        {
          title: 'Use Positive Reinforcement',
          body: 'Praise and rewards help encourage better behavior and motivation in class.',
        },
        {
          title: 'Support Emotional Regulation',
          body: 'Students with ODD may struggle with anger and frustration, so recognizing triggers helps teachers guide them toward better coping.',
        },
      ],
    },
  },

  {
    id: 'adhd',
    name: 'ADHD',
    category: 'social',
    tagline:
      'Attention-Deficit/Hyperactivity Disorder. A persistent pattern of inattention and/or hyperactivity-impulsivity.',
    definition:
      'ADHD is characterized by a persistent pattern of inattention and/or hyperactivity-impulsivity that interferes with functioning or development. It is typically categorized into three types:',
    types: [
      { title: 'Predominantly Inattentive Presentation', body: '' },
      { title: 'Predominantly Hyperactive-Impulsive Presentation', body: '' },
      { title: 'Combined Presentation', body: '' },
    ],
    signs: [
      {
        title: 'Executive Function Challenges',
        body: 'Difficulty with "the brain\'s management system," including working memory, flexible thinking, and self-control.',
      },
      {
        title: 'Inattention',
        body: 'Difficulty sustaining focus on tasks, appearing not to listen when spoken to, and frequently losing necessary items (pencils, notebooks).',
      },
      {
        title: 'Hyperactivity',
        body: 'Fidgeting, inability to remain seated, or talking excessively.',
      },
      {
        title: 'Impulsivity',
        body: 'Blurted-out answers, difficulty waiting for a turn, or interrupting others.',
      },
      {
        title: 'Emotional Dysregulation',
        body: 'Heightened sensitivity to frustration or perceived rejection.',
      },
    ],
    strategies: [
      {
        title: 'Chunking',
        body: 'Break large projects into smaller, "bite-sized" tasks with individual deadlines.',
      },
      {
        title: 'The "Rule of Three"',
        body: 'Give no more than three instructions at a time, and ask the student to paraphrase them back to you.',
      },
    ],
    instructionalMaterials: [
      {
        title: 'Visual Organizers',
        body: 'Use graphic organizers, color-coded folders, and visual schedules to help students map out their day and their thoughts.',
      },
      {
        title: 'Interactive Tech',
        body: 'Gamified learning platforms can provide the immediate feedback loop that students with ADHD often crave.',
      },
      {
        title: 'Manipulatives',
        body: 'Tools like fidget spinners (when used as a tool, not a toy), stress balls, or standing desks allow for productive movement.',
      },
    ],
    assessment:
      'Testing can be particularly stressful for students with ADHD. Tailoring the environment can help them demonstrate their actual knowledge.',
    accommodations: [
      {
        title: 'Setting',
        body: 'Testing in a separate, quiet room; preferential seating away from doors/windows.',
      },
      {
        title: 'Timing',
        body: 'Extended time (e.g., time and a half); frequent supervised breaks.',
      },
      {
        title: 'Response',
        body: 'Allowing oral responses instead of written ones; use of a computer for essays.',
      },
      {
        title: 'Formatting',
        body: 'Fewer items per page; larger font sizes; highlighting key keywords in instructions.',
      },
    ],
    forTeachers: {
      intro:
        "Adopting these strategies doesn't just help the student with ADHD as it creates a more accessible classroom for everyone. This approach, known as Universal Design for Learning (UDL), ensures that:",
      points: [
        {
          title: 'Clarity is prioritized',
          body: 'When instructions are clear for a student with ADHD, they are clear for everyone.',
        },
        {
          title: 'Flexibility is normalized',
          body: 'Providing multiple ways to learn and show knowledge reduces the stigma of "special treatment."',
        },
        {
          title: 'Relationship Building',
          body: 'Understanding the neurological basis of ADHD helps teachers maintain empathy, preventing burnout and fostering a positive teacher-student bond.',
        },
      ],
    },
  },

  {
    id: 'rad',
    name: 'Reactive Attachment Disorder',
    category: 'social',
    tagline:
      'A condition where a child struggles to form healthy emotional bonds with caretakers, often after early neglect or abuse.',
    definition:
      "Reactive attachment disorder (RAD) is a condition where a child doesn't form healthy emotional bonds with their caretakers (parental figures), often because of emotional neglect or abuse at an early age. Children with RAD have trouble managing their emotions. They struggle to form meaningful connections with other people.",
    types: null,
    signs: [
      {
        title: 'Limited emotional expression, such as rarely smiling or showing happiness',
        body: '',
      },
      { title: 'Frequent irritability without a clear reason', body: '' },
      {
        title: 'Appearing sad, fearful, or emotionally withdrawn, especially around caregivers',
        body: '',
      },
      { title: 'Difficulty being comforted by adults when upset', body: '' },
      {
        title: 'Preference for being alone rather than seeking comfort or connection',
        body: '',
      },
      { title: 'Lack of interest in interacting with or responding to other people', body: '' },
      { title: 'Limited emotional response when being held or comforted by adults', body: '' },
      { title: 'Not laughing or playing interactive games like peek-a-boo', body: '' },
    ],
    strategies: [
      {
        title: 'Consistent Structure',
        body: 'Because students with Reactive Attachment Disorder often struggle with trust and security, clear routines and consistent expectations can help them feel safer and more comfortable in the classroom.',
      },
      {
        title: 'Positive Discipline',
        body: 'Harsh punishment may increase fear, anger, or withdrawal in students with Reactive Attachment Disorder, so calm and respectful consequences are more effective.',
      },
      {
        title: 'Empathy and Support',
        body: 'Students with Reactive Attachment Disorder may have difficulty expressing emotions, so patience and understanding can help them feel supported and understood.',
      },
      {
        title: 'Strong Communication',
        body: 'Since students with Reactive Attachment Disorder may show different behaviors at home and at school, regular communication with parents and caregivers helps provide consistent support.',
      },
      {
        title: 'Trust Building',
        body: 'Building positive and respectful relationships can help students with Reactive Attachment Disorder slowly develop trust and improve their social interactions.',
      },
    ],
    instructionalMaterials: null,
    assessment: null,
    accommodations: null,
    forTeachers:
      'Teacher should focus on creating a safe, structured, and supportive classroom environment. In creating a safe space for students, teacher should use calm communication, avoid harsh discipline or public embarrasment. Build a safe space and trusting relationship with the students, and it also help students to have support classroom environment such as including a social emotional learning activities, give clear, simple, step by step instructions, and provide positive reinforcement and encouragement.',
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
  assessment: 'Assessment',
  accommodations: 'Accommodations',
  forTeachers: 'How This Helps Future Teachers',
}
