// Per-disorder visual metadata (accent + illo glyph) plus APA 7 references
// ported verbatim from the SNED_Draft of the Contents source document.
// Joined with the main disorders array in src/data/enriched.js so the
// original content file stays untouched.

export const disorderMeta = {
  anxiety: {
    accent: 'azure',
    illo: 'wave',
    references: [
      'Anxiety disorders. (2026, April 23). Cleveland Clinic. https://my.clevelandclinic.org/health/diseases/9536-anxiety-disorders',
      'Mayo Clinic Staff. (2025, July 25) Anxiety Disorders. https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961',
      'Morin, A. (2025, February 11). Classroom accommodations for anxiety. Understood. https://www.understood.org/en/articles/classroom-accommodations-for-anxiety',
      'Robson, L. (2026, January 7) Supporting Children with Anxiety: 8 Practical Strategies for Teachers. https://www.worthit.org.uk/blog/anxiety-children-school',
      'The Anxiety Antidote: Tips for high schoolers facing test anxiety. (2024, November 27). Varsity Tutors Playbook. https://www.varsitytutors.com/blog/post/the-anxiety-antidote-tips-for-high-schoolers-facing-test-anxiety',
      'Overcome Study Anxiety: Evidence-Based Strategies for Success. (2025, June 9). https://www.listening.com/blog/overcom-study-anxiety-evidence-based-strategie-for-success',
      'Teach.com. (2024, February 16). Teaching strategies and classroom policies to help students with anxiety disorders. https://teach.com/resources/helping-students-with-anxiety-disorders/',
    ],
  },
  depression: {
    accent: 'plum',
    illo: 'rain',
    references: [
      'Mayo Clinic. (2026, March 14) Depression (major depressive disorder - symptoms and causes). Mayo Clinic https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007',
      'World Health Organization: WHO & World Health Organization: WHO. (2025, August 29). Depressive disorder (depression). https://www.who.int/news-room/fact-sheets/detail/depression',
    ],
  },
  bipolar: {
    accent: 'sunrise',
    illo: 'wave2',
    references: [
      'Mayo Clinic. (2024, August 14). Bipolar disorder - Symptoms and causes. Mayo Clinic. https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955',
      'Surilena, S. (2024, August 16). Understanding more about bipolar disorder, here are its characteristics! EMC Healthcare. https://www.emc.id/en/care-plus/understanding-more-about-bipolar-disorder-here-are-its-characteristics',
      'Mind. (2023). About hypomania and mania. Mind. https://www.mind.org.uk/information-support/types-of-mental-health-problems/hypomania-and-mania/about-hypomania-and-mania/',
      'WebMD Editorial Contributors. (2024, December 19). Bipolar I disorder. WebMD. https://www.webmd.com/bipolar-disorder/bipolar-1-disorder',
      'Houston Behavioral Healthcare Hospital. (n.d.). Support for children and adolescents with bipolar disorder. Houston Behavioral Healthcare Hospital. https://www.houstonbehavioralhealth.com/blog/support-children-adolescents-with-bipolar-disorder',
    ],
  },
  ocd: {
    accent: 'mint',
    illo: 'loop',
    references: [
      'Mental Health Foundation https://mentalhealthfoundation.org/health-conditions/anxiety-disorders/obsessive-compulsive/?gad_source=1&gad_campaignid=14405879264&gbraid=0AAAAABNkekh72y_BDlpPEsnIM2xxLHh0m&gclid=CjwKCAjwq6DQBhBVEiwA4ZD5XFlwPHluL8TDZlpOoNVskDjHQk-Tl0tyns-xnMEBldm16gymqiPy4xoCwC4QAvD_BwE',
      'Mayo Clinic Staff. (2023, December 21). Obsessive-compulsive disorder (OCD) - Symptoms and causes. Mayo Clinic. https://www.mayoclinic.org/diseases-conditions/obsessive-compulsive-disorder/symptoms-causes/syc-20354432',
      'Cherry, K. (2024). What are the different types of OCD? Verywell Mind. https://www.verywellmind.com/what-are-the-different-types-of-ocd-2510663',
      "Child Mind Institute. (n.d.). Teacher's guide to OCD in the classroom. https://childmind.org/guide/teachers-guide-to-ocd-in-the-classroom/",
      'Legg, T. J. (2023). Obsession vs. compulsion: What is the difference? Medical News Today. https://www.medicalnewstoday.com/articles/obsession-vs-compulsion',
      'Wikipedia contributors. (n.d.). Obsessive–compulsive disorder. In Wikipedia. Retrieved May 22, 2026, from https://en.wikipedia.org/wiki/Obsessive%E2%80%93compulsive_disorder',
      'Child Mind Institute. (n.d.). How teachers can help kids with OCD. https://childmind.org/article/how-teachers-can-help-kids-with-ocd/',
    ],
  },
  panic: {
    accent: 'flame',
    illo: 'spike',
    references: [
      'Mayo Clinic Staff (2026, March 14). Panic attacks and Panic Disorders. https://www.mayoclinic.org/diseases-conditions/panic-attacks/symptoms-causes/syc-20376021',
      'Panic disorder: What you need to know. (n.d.). National Institute of Mental Health (NIMH). https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms',
      'Reset the System: Understanding and Coping with Panic Attacks. (n.d.). Florida Atlantic University. https://www.fau.edu/thrive/students/thrive-thursdays/panic_attack_coping/',
      'Krauss Marketing. (2023, December 22). Managing panic attacks in special needs children (5 strategies). Deron School. https://www.deronschool.org/blog/managing-panic-attacks-in-special-needs-children-5-strategies/',
      'Lcsw, M. V. (2026, March 19). 20 Calming anxiety activities for kids. Mental Health Center Kids. https://mentalhealthcenterkids.com/blogs/articles/anxiety-activities-for-kids',
      "Panic Disorder factsheet (for schools) | Rady Children's Health. (n.d.). RCH. https://www.rchsd.org/health-article/panic-disorder-factsheet-for-schools/",
    ],
  },
  ptsd: {
    accent: 'slate',
    illo: 'shadow',
    references: [
      'American Psychiatric Association. (2025, March). What is posttraumatic stress disorder (PTSD)? https://www.psychiatry.org/patients-families/ptsd/what-is-ptsd',
      'Wikipedia contributors. (n.d.). Post-traumatic stress disorder. In Wikipedia. Retrieved May 22, 2026, from https://en.wikipedia.org/wiki/Post-traumatic_stress_disorder',
      'MSD Manuals. (2025, July). Dissociative subtype of posttraumatic stress disorder (PTSD). https://www.msdmanuals.com/home/mental-health-disorders/dissociative-disorders/dissociative-subtype-of-posttraumatic-stress-disorder',
      'First Session. (2025, July 13). Post-traumatic stress disorder: Assessment and therapy techniques. https://www.firstsession.com/resources/post-traumatic-stress-disorder-assessment-therapy-techniques',
      'Minahan, J. (2021). Supporting students affected by trauma. Edutopia. https://www.edutopia.org/article/supporting-students-affected-trauma/',
    ],
  },
  asd: {
    accent: 'azure',
    illo: 'spectrum',
    references: [
      'Jacuzzi, J., & Jacuzzi, J. (2026, January 6). Autism education resources: What tools work in class? Easterseals Arkansas. https://eastersealsar.com/effective-autism-education-resources-in-classrooms/',
      'Mayo Clinic Staff. (2025, May 22). Autism Spectrum Disorder. https://www.mayoclinic.org/diseases-conditions/autism-spectrum-disorder/symptoms-causes/syc-20352928',
      'About autism spectrum Disorder. (2026, April 13). Autism Spectrum Disorder (ASD). https://www.cdc.gov/autism/about/index.html',
      'Professional, C. C. M. (2026, April 21). Autism. Cleveland Clinic. https://my.clevelandclinic.org/health/articles/autism',
      'Autism materials and resources. (2025, July 21). Autism Spectrum Disorder (ASD). https://www.cdc.gov/autism/communication-resources/index.html',
    ],
  },
  conduct: {
    accent: 'flame',
    illo: 'jag',
    references: [
      'Cleveland Clinic. (2025, December 16). Conduct disorder. Cleveland Clinic. https://my.clevelandclinic.org/health/diseases/23924-conduct-disorder',
      'Sagar, R., Patra, B., & Patil, V. (2019). Clinical practice guidelines for the management of conduct disorder. Indian Journal of Psychiatry, 61(8), 270. https://doi.org/10.4103/psychiatry.indianjpsychiatry_539_18',
    ],
  },
  odd: {
    accent: 'sunrise',
    illo: 'arrow',
    references: [
      'Mayo Clinic Staff. (2023, March 21). Oppositional defiant disorder (ODD) - Symptoms and causes. Mayo Clinic. https://www.mayoclinic.org/diseases-conditions/oppositional-defiant-disorder/symptoms-causes/syc-20375831',
      'Johns Hopkins Medicine. (n.d.). Oppositional defiant disorder (ODD) in children. Johns Hopkins Medicine. https://www.hopkinsmedicine.org/health/conditions-and-diseases/oppositional-defiant-disorder',
      'Gonser, S. (2021, January 15). 6 ways to help students with ODD. Edutopia. https://www.edutopia.org/article/6-ways-help-students-odd',
      'IEP Advocate.ai. (n.d.). Oppositional defiant disorder (ODD) accommodations. IEP Advocate.ai. https://iepadvocate.ai/accommodations/odd',
      'EdGuru. (2022, November). Classroom strategies for students with oppositional defiant disorder (ODD). https://blog.edguru.co/2022/11/classroom-strategies-for-students-with.html',
    ],
  },
  adhd: {
    accent: 'mint',
    illo: 'scatter',
    references: [],
  },
  rad: {
    accent: 'plum',
    illo: 'thread',
    references: [
      'Cleveland Clinic. (2022, February 22). Reactive attachment disorder (RAD): Causes, symptoms & treatment. Cleveland Clinic. https://my.clevelandclinic.org/health/diseases/17904-reactive-attachment-disorder',
      'Child Mind Institute. (n.d.). Quick guide to reactive attachment disorder. https://childmind.org/guide/quick-guide-to-reactive-attachment-disorder/',
    ],
  },
}
