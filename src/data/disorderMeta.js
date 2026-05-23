// Per-disorder visual metadata (accent + illo glyph) plus APA 7 references
// ported from the source resource PDF. Joined with the main disorders array
// in src/data/enriched.js so the original content file stays untouched.

export const disorderMeta = {
  anxiety: {
    accent: 'azure',
    illo: 'wave',
    references: [
      'Anxiety disorders. (2026, April 23). Cleveland Clinic. https://my.clevelandclinic.org/health/diseases/9536-anxiety-disorders',
      'Mayo Clinic Staff. (2025, July 25). Anxiety disorders. Mayo Clinic. https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961',
      'Morin, A. (2025, February 11). Classroom accommodations for anxiety. Understood. https://www.understood.org/en/articles/classroom-accommodations-for-anxiety',
      'Robson, L. (2026, January 7). Supporting children with anxiety: 8 practical strategies for teachers. WorthIt. https://www.worthit.org.uk/blog/anxiety-children-school',
      'Varsity Tutors. (2024, November 27). The anxiety antidote: Tips for high schoolers facing test anxiety. https://www.varsitytutors.com/blog/post/the-anxiety-antidote-tips-for-high-schoolers-facing-test-anxiety',
      'Overcome study anxiety: Evidence-based strategies for success. (2025, June 9). Listening.com. https://www.listening.com/blog/overcom-study-anxiety-evidence-based-strategie-for-success',
      'Teach.com. (2024, February 16). Teaching strategies and classroom policies to help students with anxiety disorders. https://teach.com/resources/helping-students-with-anxiety-disorders/',
    ],
  },
  depression: {
    accent: 'plum',
    illo: 'rain',
    references: [
      'Mayo Clinic. (2026, March 14). Depression (major depressive disorder)—Symptoms and causes. https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007',
      'World Health Organization: WHO & World Health Organization: WHO. (2025, August 29). Depressive disorder (depression). https://www.who.int/news-room/fact-sheets/detail/depression',
    ],
  },
  bipolar: {
    accent: 'sunrise',
    illo: 'wave2',
    references: [
      'Mayo Clinic. (2024, August 14). Bipolar disorder—Symptoms and causes. https://www.mayoclinic.org/diseases-conditions/bipolar-disorder/symptoms-causes/syc-20355955',
      'Surilena, S. (2024, August 16). Understanding more about bipolar disorder, here are its characteristics! EMC Healthcare. https://www.emc.id/en/care-plus/understanding-more-about-bipolar-disorder-here-are-its-characteristics',
      'Mind. (2023). About hypomania and mania. https://www.mind.org.uk/information-support/types-of-mental-health-problems/hypomania-and-mania/about-hypomania-and-mania/',
      'WebMD Editorial Contributors. (2024, December 19). Bipolar I disorder. WebMD. https://www.webmd.com/bipolar-disorder/bipolar-1-disorder',
      'Houston Behavioral Healthcare Hospital. (n.d.). Support for children and adolescents with bipolar disorder. https://www.houstonbehavioralhealth.com/blog/support-children-adolescents-with-bipolar-disorder',
    ],
  },
  ocd: {
    accent: 'mint',
    illo: 'loop',
    references: [
      'American Psychiatric Association. (2022). Diagnostic and statistical manual of mental disorders (5th ed., text rev.). https://doi.org/10.1176/appi.books.9780890425787',
      'International OCD Foundation. (2022). OCD in the classroom: A teacher’s guide. https://iocdf.org/expert-opinions/ocd-in-the-classroom/',
      'Mayo Clinic Staff. (2023). Obsessive-compulsive disorder (OCD). Mayo Clinic. https://www.mayoclinic.org/diseases-conditions/obsessive-compulsive-disorder/symptoms-causes/syc-20354432',
    ],
  },
  panic: {
    accent: 'flame',
    illo: 'spike',
    references: [
      'Mayo Clinic Staff. (2026, March 14). Panic attacks and panic disorder. Mayo Clinic. https://www.mayoclinic.org/diseases-conditions/panic-attacks/symptoms-causes/syc-20376021',
      'National Institute of Mental Health. (n.d.). Panic disorder: What you need to know. https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms',
      'Florida Atlantic University. (n.d.). Reset the system: Understanding and coping with panic attacks. https://www.fau.edu/thrive/students/thrive-thursdays/panic_attack_coping/',
      'Krauss Marketing. (2023, December 22). Managing panic attacks in special needs children (5 strategies). Deron School. https://www.deronschool.org/blog/managing-panic-attacks-in-special-needs-children-5-strategies/',
      'Lcsw, M. V. (2026, March 19). 20 calming anxiety activities for kids. Mental Health Center Kids. https://mentalhealthcenterkids.com/blogs/articles/anxiety-activities-for-kids',
      'Rady Children’s Health. (n.d.). Panic disorder factsheet (for schools). https://www.rchsd.org/health-article/panic-disorder-factsheet-for-schools/',
    ],
  },
  ptsd: {
    accent: 'slate',
    illo: 'shadow',
    references: [
      'American Psychiatric Association. (2022). What is posttraumatic stress disorder (PTSD)? https://www.psychiatry.org/patients-families/ptsd/what-is-ptsd',
      'National Child Traumatic Stress Network. (2023). Trauma-informed schools. https://www.nctsn.org/trauma-informed-care/creating-trauma-informed-systems',
      'Mayo Clinic Staff. (2024). Post-traumatic stress disorder (PTSD). Mayo Clinic. https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967',
    ],
  },
  asd: {
    accent: 'azure',
    illo: 'spectrum',
    references: [
      'Jacuzzi, J. (2026, January 6). Autism education resources: What tools work in class? Easterseals Arkansas. https://eastersealsar.com/effective-autism-education-resources-in-classrooms/',
      'Mayo Clinic Staff. (2025, May 22). Autism spectrum disorder. Mayo Clinic. https://www.mayoclinic.org/diseases-conditions/autism-spectrum-disorder/symptoms-causes/syc-20352928',
      'Centers for Disease Control and Prevention. (2026, April 13). About autism spectrum disorder. https://www.cdc.gov/autism/about/index.html',
      'Cleveland Clinic. (2026, April 21). Autism. https://my.clevelandclinic.org/health/articles/autism',
      'Centers for Disease Control and Prevention. (2025, July 21). Autism materials and resources. https://www.cdc.gov/autism/communication-resources/index.html',
    ],
  },
  conduct: {
    accent: 'flame',
    illo: 'jag',
    references: [
      'Cleveland Clinic. (2025, December 16). Conduct disorder. https://my.clevelandclinic.org/health/diseases/23924-conduct-disorder',
      'Sagar, R., Patra, B., & Patil, V. (2019). Clinical practice guidelines for the management of conduct disorder. Indian Journal of Psychiatry, 61(8), 270. https://doi.org/10.4103/psychiatry.indianjpsychiatry_539_18',
    ],
  },
  odd: {
    accent: 'sunrise',
    illo: 'arrow',
    references: [
      'Mayo Clinic Staff. (2023, March 21). Oppositional defiant disorder (ODD)—Symptoms and causes. Mayo Clinic. https://www.mayoclinic.org/diseases-conditions/oppositional-defiant-disorder/symptoms-causes/syc-20375831',
      'Johns Hopkins Medicine. (n.d.). Oppositional defiant disorder (ODD) in children. https://www.hopkinsmedicine.org/health/conditions-and-diseases/oppositional-defiant-disorder',
      'Gonser, S. (2021, January 15). 6 ways to help students with ODD. Edutopia. https://www.edutopia.org/article/6-ways-help-students-odd',
      'IEP Advocate.ai. (n.d.). Oppositional defiant disorder (ODD) accommodations. https://iepadvocate.ai/accommodations/odd',
      'EdGuru. (2022, November). Classroom strategies for students with oppositional defiant disorder (ODD). https://blog.edguru.co/2022/11/classroom-strategies-for-students-with.html',
    ],
  },
  adhd: {
    accent: 'mint',
    illo: 'scatter',
    references: [
      'Centers for Disease Control and Prevention. (2023). Data and statistics on ADHD in children. https://www.cdc.gov/ncbddd/adhd/data.html',
      'American Psychiatric Association. (2022). What is ADHD? https://www.psychiatry.org/patients-families/adhd/what-is-adhd',
      'CHADD. (n.d.). Educator resources. https://chadd.org/for-educators/',
    ],
  },
  rad: {
    accent: 'plum',
    illo: 'thread',
    references: [
      'Cleveland Clinic. (2022, February 22). Reactive attachment disorder (RAD): Causes, symptoms & treatment. https://my.clevelandclinic.org/health/diseases/17904-reactive-attachment-disorder',
      'Child Mind Institute. (n.d.). Quick guide to reactive attachment disorder. https://childmind.org/guide/quick-guide-to-reactive-attachment-disorder/',
    ],
  },
}
