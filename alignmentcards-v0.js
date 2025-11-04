export const categories = [
  {
    code: "AP",
    name: "Alignment Principles",
    pathology: "normative void",
    color: "#E6FFE9",
    description:
      "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters.",
  },
];

export const cards = [
  {
    category: "AP",
    name: "Beneficence",
    definition: "Act to promote the well-being of others.",
    human: "Seeking to improve others' conditions, not just avoid harm.",
    organizational: "Pursuing mission outcomes that serve societal good.",
    professional:
      "Keeping public safety and welfare in sight even while working primarily for the client.",
    machine: "Designing systems that anticipate and promote human flourishing.",
    failureModes: {
      human:
        "A person drives in a manner that causes traffic backups for others.",
      organizational:
        "The classic movie plot where a rapacious billionaire threatens civilization to enrich his company.",
      professional:
        "An expert who disregards public interest, acting as if the consequences of what they help build are other people's problems.",
      machine:
        "The machine consumes all the world's resources to create as many paperclips as it can.",
    },
  },
  {
    category: "AP",
    name: "Non-maleficence",
    definition: "Avoid causing harm to others.",
    human:
      "Refraining from actions that could physically, emotionally, or financially hurt someone.",
    organizational:
      "Ensuring products and operations do not negatively impact society or the environment.",
    professional:
      "An expert's duty to mitigate risks and prevent negative consequences from their work.",
    machine:
      "Building systems with safeguards to prevent unintended harmful outcomes.",
    failureModes: {
      human: "Spreading a false rumor that damages someone's reputation.",
      organizational:
        "A factory pollutes a local river, harming the ecosystem and residents' health.",
      professional:
        "An engineer designing a bridge with a known structural flaw to cut costs.",
      machine:
        "An autonomous vehicle misidentifying an object and causing a collision.",
    },
  },
  {
    category: "AP",
    name: "Autonomy",
    definition: "Respect the self-determination and choices of individuals.",
    human: "Allowing others to make their own life decisions without coercion.",
    organizational:
      "Providing customers with meaningful choices and control over their own data.",
    professional:
      "Ensuring a client gives informed consent before proceeding with a service or action.",
    machine:
      "Designing systems that require user consent and provide clear, easy-to-use controls and opt-outs.",
    failureModes: {
      human:
        "A parent forcing their child into a specific career path against their will.",
      organizational:
        "A social media platform using deceptive 'dark patterns' to trick users into sharing more data than intended.",
      professional:
        "A doctor performing a procedure without fully explaining the risks and getting the patient's consent.",
      machine:
        "An AI home assistant making purchases on a user's behalf without explicit permission.",
    },
  },
  {
    category: "AP",
    name: "Justice",
    definition:
      "Ensure fair and equitable distribution of benefits, risks, and costs.",
    human:
      "Treating people equally, regardless of their background, and advocating for fairness.",
    organizational:
      "Implementing fair hiring practices and creating products that are accessible to all.",
    professional:
      "Providing unbiased advice and ensuring services are accessible to diverse populations.",
    machine:
      "Training AI models on diverse datasets to prevent biased or discriminatory outcomes.",
    failureModes: {
      human:
        "A manager giving promotions only to people who share their personal interests, overlooking more qualified candidates.",
      organizational:
        "A company offering a high-quality service only in wealthy neighborhoods.",
      professional:
        "A lawyer providing a less vigorous defense for a client who cannot pay a high fee.",
      machine:
        "A facial recognition system that is significantly less accurate for individuals from minority groups.",
    },
  },
  {
    category: "AP",
    name: "Fidelity",
    definition: "Be trustworthy, keep promises, and maintain loyalty.",
    human: "Honoring your commitments to friends, family, and community.",
    organizational:
      "Adhering to the company's mission and being reliable for customers and stakeholders.",
    professional:
      "Maintaining confidentiality and acting in the best interest of a client as promised.",
    machine:
      "Ensuring a system operates reliably and as advertised, maintaining user trust.",
    failureModes: {
      human: "Breaking a promise to help a friend on an important day.",
      organizational:
        "A company secretly selling user data after promising in its privacy policy that it would not.",
      professional: "An accountant embezzling funds from a client's account.",
      machine:
        "A cloud storage service failing to secure user data, leading to a data breach.",
    },
  },
  {
    category: "AP",
    name: "Veracity",
    definition: "Be truthful, honest, and transparent.",
    human:
      "Communicating honestly with others and not intentionally misleading them.",
    organizational:
      "Being transparent about business practices, successes, and failures.",
    professional:
      "Giving a client a complete and honest assessment, even if the news is bad.",
    machine:
      "Designing systems that provide accurate information and are clear about their limitations.",
    failureModes: {
      human: "Lying on a resume to get a job.",
      organizational:
        "A car company deliberately hiding data about a known safety defect in its vehicles.",
      professional:
        "A scientist falsifying research data to get a paper published.",
      machine:
        "A news-generating AI creating realistic but completely false articles and presenting them as fact.",
    },
  },
];
