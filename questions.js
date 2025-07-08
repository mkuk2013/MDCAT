const originalQuestions = [
       {
    "question": "What is the basic structural and functional unit of life?",
    "options": ["Tissue", "Organ", "Cell", "Organ system"],
    "correctAnswer": 2
  },
  {
    "question": "Which organelle is called the powerhouse of the cell?",
    "options": ["Ribosome", "Nucleus", "Mitochondria", "Golgi body"],
    "correctAnswer": 2
  },
  {
    "question": "Proteins are made up of:",
    "options": ["Nucleotides", "Amino acids", "Fatty acids", "Sugars"],
    "correctAnswer": 1
  },
  {
    "question": "What is the function of ribosomes?",
    "options": ["Digestion", "Photosynthesis", "Protein synthesis", "Respiration"],
    "correctAnswer": 2
  },
  {
    "question": "Which part of the brain controls balance and coordination?",
    "options": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
    "correctAnswer": 1
  },
  {
    "question": "Which molecule stores genetic information?",
    "options": ["RNA", "ATP", "Protein", "DNA"],
    "correctAnswer": 3
  },
  {
    "question": "Which blood cells help in clotting?",
    "options": ["RBC", "WBC", "Platelets", "Plasma"],
    "correctAnswer": 2
  },
  {
    "question": "Which organ removes nitrogenous waste from the body?",
    "options": ["Lungs", "Liver", "Kidneys", "Pancreas"],
    "correctAnswer": 2
  },
  {
    "question": "Which gas is essential for aerobic respiration?",
    "options": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "correctAnswer": 1
  },
  {
    "question": "HIV causes which disease?",
    "options": ["Cancer", "AIDS", "Hepatitis", "Flu"],
    "correctAnswer": 1
  },
  {
    "question": "Which carbohydrate is found in plant cell walls?",
    "options": ["Glucose", "Starch", "Cellulose", "Fructose"],
    "correctAnswer": 2
  },
  {
    "question": "Which enzyme breaks down starch in the mouth?",
    "options": ["Pepsin", "Amylase", "Lipase", "Trypsin"],
    "correctAnswer": 1
  },
  {
    "question": "What is the role of chlorophyll?",
    "options": ["Respiration", "Protein synthesis", "Photosynthesis", "Digestion"],
    "correctAnswer": 2
  },
  {
    "question": "The human heart has how many chambers?",
    "options": ["2", "3", "4", "5"],
    "correctAnswer": 2
  },
  {
    "question": "The smallest blood vessels are called:",
    "options": ["Arteries", "Veins", "Capillaries", "Aorta"],
    "correctAnswer": 2
  },
  {
    "question": "Which hormone controls blood sugar levels?",
    "options": ["Adrenaline", "Thyroxine", "Insulin", "Testosterone"],
    "correctAnswer": 2
  },
  {
    "question": "Which organ produces bile?",
    "options": ["Kidney", "Pancreas", "Gallbladder", "Liver"],
    "correctAnswer": 3
  },
  {
    "question": "What is the function of alveoli?",
    "options": ["Absorption of food", "Exchange of gases", "Filtration of blood", "Secretion of hormones"],
    "correctAnswer": 1
  },
  {
    "question": "Reflex actions are controlled by:",
    "options": ["Cerebrum", "Cerebellum", "Spinal cord", "Medulla"],
    "correctAnswer": 2
  },
  {
    "question": "Which structure carries nerve impulses away from the cell body?",
    "options": ["Dendrite", "Axon", "Synapse", "Nucleus"],
    "correctAnswer": 1
  },
  {
    "question": "What is the main function of WBCs?",
    "options": ["Carry oxygen", "Help clot blood", "Fight infection", "Produce insulin"],
    "correctAnswer": 2
  },
  {
    "question": "Which hormone initiates menstruation?",
    "options": ["Progesterone", "Estrogen", "FSH", "LH"],
    "correctAnswer": 1
  },
  {
    "question": "Which protein is found in red blood cells?",
    "options": ["Keratin", "Collagen", "Myosin", "Hemoglobin"],
    "correctAnswer": 3
  },
  {
    "question": "Skeletal muscles are under:",
    "options": ["Voluntary control", "Involuntary control", "Hormonal control", "Reflex control"],
    "correctAnswer": 0
  },
  {
    "question": "What is the fluid part of blood called?",
    "options": ["Plasma", "Serum", "WBC", "Platelets"],
    "correctAnswer": 0
  },
  {
    "question": "Inheritance of traits is studied in:",
    "options": ["Ecology", "Genetics", "Evolution", "Taxonomy"],
    "correctAnswer": 1
  },
  {
    "question": "The enzyme that digests proteins in the stomach is:",
    "options": ["Amylase", "Pepsin", "Lipase", "Trypsin"],
    "correctAnswer": 1
  },
  {
    "question": "Mendel is known as the father of:",
    "options": ["Ecology", "Physiology", "Genetics", "Botany"],
    "correctAnswer": 2
  },
  {
    "question": "Which blood group is universal donor?",
    "options": ["A", "B", "AB", "O"],
    "correctAnswer": 3
  },
  {
    "question": "Which structure in kidney filters blood?",
    "options": ["Nephron", "Glomerulus", "Tubule", "Bowman’s capsule"],
    "correctAnswer": 1
  },
  {
    "question": "The number of atoms in 1 mole of a substance is:",
    "options": ["3.01×10^22", "6.022×10^23", "1.6×10^-19", "9.8 m/s^2"],
    "correctAnswer": 1
  },
  {
    "question": "Which subatomic particle is negatively charged?",
    "options": ["Proton", "Neutron", "Electron", "Nucleus"],
    "correctAnswer": 2
  },
  {
    "question": "The mass of 1 mole of water is:",
    "options": ["16g", "18g", "20g", "12g"],
    "correctAnswer": 1
  },
  {
    "question": "Which gas law states that pressure is inversely proportional to volume?",
    "options": ["Charles’s Law", "Boyle’s Law", "Avogadro’s Law", "Graham’s Law"],
    "correctAnswer": 1
  },
  {
    "question": "Hydrogen bonding is present in:",
    "options": ["CO2", "H2O", "O2", "CH4"],
    "correctAnswer": 1
  },
  {
    "question": "Which acid is present in vinegar?",
    "options": ["Citric acid", "Acetic acid", "Formic acid", "Sulfuric acid"],
    "correctAnswer": 1
  },
  {
    "question": "What is the pH of pure water?",
    "options": ["3", "7", "9", "5"],
    "correctAnswer": 1
  },
  {
    "question": "Which element is a noble gas?",
    "options": ["Oxygen", "Nitrogen", "Argon", "Chlorine"],
    "correctAnswer": 2
  },
  {
    "question": "The most electronegative element is:",
    "options": ["Fluorine", "Chlorine", "Oxygen", "Iodine"],
    "correctAnswer": 0
  },
  {
    "question": "Which compound has a triple bond?",
    "options": ["Ethane", "Ethene", "Ethyne", "Methane"],
    "correctAnswer": 2
  },
  {
    "question": "Which element is the lightest?",
    "options": ["Oxygen", "Hydrogen", "Helium", "Carbon"],
    "correctAnswer": 1
  },
  {
    "question": "What is the chemical formula of ammonia?",
    "options": ["NH4", "NH3", "NO2", "N2O"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a base?",
    "options": ["HCl", "NaOH", "H2SO4", "CH3COOH"],
    "correctAnswer": 1
  },
  {
    "question": "Which particle has no charge?",
    "options": ["Proton", "Electron", "Neutron", "Nucleus"],
    "correctAnswer": 2
  },
  {
    "question": "The S.I unit of energy is:",
    "options": ["Joule", "Calorie", "Watt", "Newton"],
    "correctAnswer": 0
  },
  {
    "question": "Which compound contains ionic bond?",
    "options": ["H2O", "NaCl", "CH4", "O2"],
    "correctAnswer": 1
  },
  {
    "question": "Which group is known as alkali metals?",
    "options": ["Group I", "Group II", "Group VII", "Group 0"],
    "correctAnswer": 0
  },
  {
    "question": "Rusting is a type of:",
    "options": ["Reduction", "Oxidation", "Hydrolysis", "Precipitation"],
    "correctAnswer": 1
  },
  {
    "question": "Organic compounds mainly contain:",
    "options": ["Sodium", "Chlorine", "Carbon", "Magnesium"],
    "correctAnswer": 2
  },
  {
    "question": "Which acid is used in car batteries?",
    "options": ["Acetic acid", "Hydrochloric acid", "Sulfuric acid", "Nitric acid"],
    "correctAnswer": 2
  },
  {
    "question": "The unit of force is:",
    "options": ["Joule", "Newton", "Watt", "Pascal"],
    "correctAnswer": 1
  },
  {
    "question": "Speed is defined as:",
    "options": ["Distance/time", "Force × time", "Mass × acceleration", "Displacement/time"],
    "correctAnswer": 0
  },
  {
    "question": "Acceleration due to gravity on Earth is:",
    "options": ["8.8 m/s^2", "9.8 m/s^2", "10 m/s^2", "6.8 m/s^2"],
    "correctAnswer": 1
  },
  {
    "question": "Which quantity is scalar?",
    "options": ["Force", "Velocity", "Work", "Acceleration"],
    "correctAnswer": 2
  },
  {
    "question": "Which law explains action and reaction?",
    "options": ["First", "Second", "Third", "Law of inertia"],
    "correctAnswer": 2
  },
  {
    "question": "Which instrument measures current?",
    "options": ["Voltmeter", "Ammeter", "Thermometer", "Galvanometer"],
    "correctAnswer": 1
  },
  {
    "question": "The frequency of A.C in Pakistan is:",
    "options": ["50 Hz", "60 Hz", "30 Hz", "100 Hz"],
    "correctAnswer": 0
  },
  {
    "question": "Sound cannot travel in:",
    "options": ["Water", "Air", "Vacuum", "Steel"],
    "correctAnswer": 2
  },
  {
    "question": "Which wave is used in TV remote control?",
    "options": ["Microwave", "Infrared", "X-ray", "Radio"],
    "correctAnswer": 1
  },
  {
    "question": "Heat energy is transferred by conduction mainly in:",
    "options": ["Solids", "Liquids", "Gases", "Vacuum"],
    "correctAnswer": 0
  },
  {
    "question": "The SI unit of pressure is:",
    "options": ["Bar", "Pascal", "Newton", "Atmosphere"],
    "correctAnswer": 1
  },
  {
    "question": "Ohm's law is V =",
    "options": ["IR", "I/R", "R/I", "VI"],
    "correctAnswer": 0
  },
  {
    "question": "The device used to convert A.C to D.C is:",
    "options": ["Rectifier", "Transformer", "Capacitor", "Resistor"],
    "correctAnswer": 0
  },
  {
    "question": "Which color has the highest frequency?",
    "options": ["Red", "Blue", "Green", "Violet"],
    "correctAnswer": 3
  },
  {
    "question": "Which radiation has the shortest wavelength?",
    "options": ["Infrared", "Ultraviolet", "Microwave", "Gamma rays"],
    "correctAnswer": 3
  },
  {
    "question": "The time for one complete wave is called:",
    "options": ["Amplitude", "Frequency", "Wavelength", "Time period"],
    "correctAnswer": 3
  },
  {
    "question": "Which instrument detects earthquakes?",
    "options": ["Thermometer", "Barometer", "Seismograph", "Anemometer"],
    "correctAnswer": 2
  },
  {
    "question": "In convex lens, image formed is:",
    "options": ["Always virtual", "Always real", "Real or virtual", "Always inverted"],
    "correctAnswer": 2
  },
  {
    "question": "The flow of electrons is called:",
    "options": ["Resistance", "Current", "Voltage", "Power"],
    "correctAnswer": 1
  },
  {
    "question": "What is the speed of light in vacuum?",
    "options": ["3×10^8 m/s", "3×10^6 m/s", "1.5×10^8 m/s", "3×10^5 m/s"],
    "correctAnswer": 0
  },
  {
    "question": "Which vitamin is essential for blood clotting?",
    "options": ["Vitamin A", "Vitamin B", "Vitamin K", "Vitamin D"],
    "correctAnswer": 2
  },
  {
    "question": "The process by which green plants make their food is:",
    "options": ["Respiration", "Transpiration", "Photosynthesis", "Digestion"],
    "correctAnswer": 2
  },
  {
    "question": "In which organelle does aerobic respiration take place?",
    "options": ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is not a component of the human circulatory system?",
    "options": ["Heart", "Lungs", "Blood", "Blood vessels"],
    "correctAnswer": 1
  },
  {
    "question": "Which type of immunity is gained through vaccination?",
    "options": ["Natural", "Passive", "Active acquired", "Innate"],
    "correctAnswer": 2
  },
  {
    "question": "A genetic disorder caused by a missing clotting factor is:",
    "options": ["Anemia", "Hemophilia", "Thalassemia", "Diabetes"],
    "correctAnswer": 1
  },
  {
    "question": "Which hormone controls the menstrual cycle?",
    "options": ["Insulin", "Adrenaline", "Estrogen", "Glucagon"],
    "correctAnswer": 2
  },
  {
    "question": "Which process removes excess water from the body?",
    "options": ["Digestion", "Respiration", "Excretion", "Absorption"],
    "correctAnswer": 2
  },
  {
    "question": "What structure in the eye detects light?",
    "options": ["Iris", "Lens", "Retina", "Cornea"],
    "correctAnswer": 2
  },
  {
    "question": "The longest part of the human digestive system is:",
    "options": ["Stomach", "Small intestine", "Large intestine", "Esophagus"],
    "correctAnswer": 1
  },
  {
    "question": "Which part of the brain regulates heartbeat and breathing?",
    "options": ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"],
    "correctAnswer": 2
  },
  {
    "question": "Which protein is responsible for muscle contraction?",
    "options": ["Myosin", "Actin", "Keratin", "Albumin"],
    "correctAnswer": 0
  },
  {
    "question": "Which organ regulates body temperature?",
    "options": ["Liver", "Kidney", "Hypothalamus", "Lungs"],
    "correctAnswer": 2
  },
  {
    "question": "Which gland secretes growth hormone?",
    "options": ["Thyroid", "Adrenal", "Pituitary", "Pancreas"],
    "correctAnswer": 2
  },
  {
    "question": "Which part of nephron performs ultrafiltration?",
    "options": ["Loop of Henle", "Glomerulus", "Tubule", "Collecting duct"],
    "correctAnswer": 1
  },
  {
    "question": "Sex chromosomes in males are:",
    "options": ["XX", "XY", "YY", "XO"],
    "correctAnswer": 1
  },
  {
    "question": "Which structure transports urine from kidney to bladder?",
    "options": ["Urethra", "Nephron", "Ureter", "Loop of Henle"],
    "correctAnswer": 2
  },
  {
    "question": "Red blood cells are produced in the:",
    "options": ["Liver", "Spleen", "Bone marrow", "Heart"],
    "correctAnswer": 2
  },
  {
    "question": "Which part of the flower produces pollen?",
    "options": ["Petal", "Stigma", "Anther", "Ovary"],
    "correctAnswer": 2
  },
  {
    "question": "Fertilization in humans occurs in the:",
    "options": ["Uterus", "Ovary", "Fallopian tube", "Vagina"],
    "correctAnswer": 2
  },
  {
    "question": "Which is the most abundant gas in the Earth's atmosphere?",
    "options": ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
    "correctAnswer": 2
  },
  {
    "question": "The process of solid directly changing into gas is:",
    "options": ["Fusion", "Sublimation", "Condensation", "Evaporation"],
    "correctAnswer": 1
  },
  {
    "question": "Which metal is liquid at room temperature?",
    "options": ["Iron", "Mercury", "Aluminum", "Lead"],
    "correctAnswer": 1
  },
  {
    "question": "Which substance turns blue litmus paper red?",
    "options": ["Base", "Acid", "Salt", "Alcohol"],
    "correctAnswer": 1
  },
  {
    "question": "The bond between two non-metals is:",
    "options": ["Ionic", "Covalent", "Metallic", "Hydrogen"],
    "correctAnswer": 1
  },
  {
    "question": "The chemical formula of calcium carbonate is:",
    "options": ["CaO", "CaCl2", "CaCO3", "Ca(OH)2"],
    "correctAnswer": 2
  },
  {
    "question": "Atomic number is the number of:",
    "options": ["Electrons", "Neutrons", "Protons", "Ions"],
    "correctAnswer": 2
  },
  {
    "question": "Which group in the periodic table contains noble gases?",
    "options": ["Group 1", "Group 7", "Group 18", "Group 17"],
    "correctAnswer": 2
  },
  {
    "question": "NaOH is a:",
    "options": ["Salt", "Acid", "Base", "Solvent"],
    "correctAnswer": 2
  },
  {
    "question": "The nucleus of an atom contains:",
    "options": ["Protons only", "Electrons and neutrons", "Protons and neutrons", "Electrons only"],
    "correctAnswer": 2
  },
  {
    "question": "Rate of reaction is affected by:",
    "options": ["Color", "Mass", "Temperature", "Volume"],
    "correctAnswer": 2
  },
  {
    "question": "Water is a:",
    "options": ["Element", "Compound", "Mixture", "Atom"],
    "correctAnswer": 1
  },
  {
    "question": "Which element is used in making nuclear bombs?",
    "options": ["Uranium", "Calcium", "Lead", "Zinc"],
    "correctAnswer": 0
  },
  {
    "question": "A solution with pH less than 7 is:",
    "options": ["Neutral", "Basic", "Acidic", "Alkaline"],
    "correctAnswer": 2
  },
  {
    "question": "Which compound is responsible for hardness of water?",
    "options": ["NaCl", "MgSO4", "CaCO3", "HCl"],
    "correctAnswer": 2
  },
  {
    "question": "The anion in NaCl is:",
    "options": ["Na+", "Cl-", "Na-", "Cl+"],
    "correctAnswer": 1
  },
  {
    "question": "Which hydrocarbon has a triple bond?",
    "options": ["Alkane", "Alkene", "Aromatic", "Alkyne"],
    "correctAnswer": 3
  },
  {
    "question": "Litmus is a type of:",
    "options": ["Salt", "Indicator", "Acid", "Base"],
    "correctAnswer": 1
  },
  {
    "question": "Which process separates components based on boiling point?",
    "options": ["Filtration", "Evaporation", "Distillation", "Chromatography"],
    "correctAnswer": 2
  },
  {
    "question": "The symbol of lead is:",
    "options": ["Pb", "P", "Pd", "L"],
    "correctAnswer": 0
  },
  {
    "question": "Force acting on unit area is called:",
    "options": ["Work", "Power", "Pressure", "Energy"],
    "correctAnswer": 2
  },
  {
    "question": "The instrument used to measure atmospheric pressure is:",
    "options": ["Thermometer", "Hygrometer", "Barometer", "Ammeter"],
    "correctAnswer": 2
  },
  {
    "question": "Heat is a form of:",
    "options": ["Matter", "Energy", "Force", "Pressure"],
    "correctAnswer": 1
  },
  {
    "question": "Which law states that energy cannot be created or destroyed?",
    "options": ["Ohm’s law", "Newton’s law", "Law of conservation of energy", "Hooke’s law"],
    "correctAnswer": 2
  },
  {
    "question": "1 kilowatt-hour is equal to:",
    "options": ["3600 J", "3.6×10^6 J", "1000 J", "360 J"],
    "correctAnswer": 1
  },
  {
    "question": "The SI unit of electric charge is:",
    "options": ["Ampere", "Volt", "Coulomb", "Ohm"],
    "correctAnswer": 2
  },
  {
    "question": "An electric current produces:",
    "options": ["Sound", "Light", "Magnetic field", "Heat only"],
    "correctAnswer": 2
  },
  {
    "question": "What does a transformer do?",
    "options": ["Stores charge", "Measures voltage", "Changes voltage", "Generates electricity"],
    "correctAnswer": 2
  },
  {
    "question": "The path followed by projectile is called:",
    "options": ["Circle", "Straight line", "Parabola", "Ellipse"],
    "correctAnswer": 2
  },
  {
    "question": "The device that stores electrical energy is called:",
    "options": ["Transistor", "Resistor", "Capacitor", "Inductor"],
    "correctAnswer": 2
  },
  {
    "question": "What is the unit of frequency?",
    "options": ["Decibel", "Meter", "Hertz", "Volt"],
    "correctAnswer": 2
  },
  {
    "question": "Which mirror is used in car side mirrors?",
    "options": ["Plane", "Concave", "Convex", "Parabolic"],
    "correctAnswer": 2
  },
  {
    "question": "The phenomenon of light bending is called:",
    "options": ["Reflection", "Refraction", "Diffraction", "Dispersion"],
    "correctAnswer": 1
  },
  {
    "question": "Which color of light has the longest wavelength?",
    "options": ["Red", "Blue", "Green", "Violet"],
    "correctAnswer": 0
  },
  {
    "question": "The main source of energy for Earth is:",
    "options": ["Wind", "Water", "Sun", "Fuel"],
    "correctAnswer": 2
  },
  {
    "question": "Speed of sound in air is approximately:",
    "options": ["330 m/s", "3×10^8 m/s", "1000 m/s", "1500 m/s"],
    "correctAnswer": 0
  },
  {
    "question": "Which type of lens is thicker at the center?",
    "options": ["Concave", "Convex", "Plane", "Flat"],
    "correctAnswer": 1
  },
  {
    "question": "What is the acceleration in free fall?",
    "options": ["1 m/s²", "5 m/s²", "9.8 m/s²", "15 m/s²"],
    "correctAnswer": 2
  },
  {
    "question": "The SI unit of work is:",
    "options": ["Joule", "Watt", "Newton", "Pascal"],
    "correctAnswer": 0
  },
  {
    "question": "The mirror used by dentists is:",
    "options": ["Plane", "Convex", "Concave", "None"],
    "correctAnswer": 2
  },
  {
    "question": "Choose the correct synonym for 'Rapid':",
    "options": ["Slow", "Fast", "Dull", "Lazy"],
    "correctAnswer": 1
  },
  {
    "question": "Choose the correct antonym for 'Expand':",
    "options": ["Increase", "Enlarge", "Contract", "Spread"],
    "correctAnswer": 2
  },
  {
    "question": "Fill in the blank: She ___ going to school.",
    "options": ["am", "is", "are", "were"],
    "correctAnswer": 1
  },
  {
    "question": "Choose the correct preposition: He jumped ___ the river.",
    "options": ["on", "in", "into", "onto"],
    "correctAnswer": 2
  },
  {
    "question": "Identify the adjective: The sky was dark and cloudy.",
    "options": ["Sky", "Was", "Dark", "And"],
    "correctAnswer": 2
  },
  {
    "question": "Choose the correct spelling:",
    "options": ["Recieve", "Receive", "Receeve", "Recive"],
    "correctAnswer": 1
  },
  {
    "question": "Choose the passive voice: 'She wrote a letter.'",
    "options": ["A letter is written", "A letter was written by her", "She writes letter", "She has written letter"],
    "correctAnswer": 1
  },
  {
    "question": "Pick the correct indirect speech: He said, 'I am tired.'",
    "options": ["He said he was tired", "He said I am tired", "He said that I was tired", "He told he tired"],
    "correctAnswer": 0
  },
  {
    "question": "Choose the correct pronoun: ___ are coming with us.",
    "options": ["Them", "They", "Their", "Theirs"],
    "correctAnswer": 1
  },
  {
    "question": "Identify the noun: Honesty is the best policy.",
    "options": ["Best", "Policy", "Is", "Honesty"],
    "correctAnswer": 3
  },
  {
    "question": "If A = 1, B = 2, ..., then what is the sum of letters in 'DOG'?",
    "options": ["20", "26", "24", "22"],
    "correctAnswer": 1
  },
  {
    "question": "What comes next in the series: 2, 4, 8, 16, ?",
    "options": ["18", "24", "30", "32"],
    "correctAnswer": 3
  },
  {
    "question": "All roses are flowers. Some flowers fade quickly. What can be concluded?",
    "options": ["All roses fade quickly", "Some roses are not flowers", "Some flowers are roses", "Some roses may fade quickly"],
    "correctAnswer": 2
  },
  {
    "question": "Which number completes the series: 3, 6, 9, 12, ?",
    "options": ["14", "15", "18", "16"],
    "correctAnswer": 1
  },
  {
    "question": "Statement: All humans are mammals. Conclusion: All mammals are humans.",
    "options": ["True", "False", "Uncertain", "Cannot say"],
    "correctAnswer": 1
  },
  {
    "question": "What comes next in the pattern: Z, X, V, T, ?",
    "options": ["R", "S", "Q", "U"],
    "correctAnswer": 0
  },
  {
    "question": "Find the odd one out: Apple, Banana, Carrot, Mango",
    "options": ["Apple", "Banana", "Carrot", "Mango"],
    "correctAnswer": 2
  },
  {
    "question": "A is the sister of B. B is the brother of C. C is the son of D. How is D related to A?",
    "options": ["Father", "Mother", "Parent", "Uncle"],
    "correctAnswer": 2
  },
  {
    "question": "If ALL = 36, BAT = 43, then CAT = ?",
    "options": ["42", "46", "41", "44"],
    "correctAnswer": 3
  },
  {
    "question": "Which figure logically follows: ●▲■, ▲■●, ■●▲, ?",
    "options": ["■▲●", "▲●■", "●■▲", "■●▲"],
    "correctAnswer": 1
  },
  {
    "question": "Which day comes three days after Monday?",
    "options": ["Thursday", "Friday", "Wednesday", "Sunday"],
    "correctAnswer": 0
  },
  {
    "question": "Which is the odd one out: Circle, Triangle, Square, Sphere?",
    "options": ["Circle", "Sphere", "Triangle", "Square"],
    "correctAnswer": 1
  },
  {
    "question": "If 1=5, 2=25, 3=325, then 4=?",
    "options": ["4325", "425", "435", "432"],
    "correctAnswer": 0
  },
  {
    "question": "Which letter is two places right of G in English alphabet?",
    "options": ["H", "I", "J", "K"],
    "correctAnswer": 1
  },
  {
    "question": "If 5 + 3 = 28, 9 + 1 = 810, then 8 + 6 = ?",
    "options": ["86", "814", "48", "88"],
    "correctAnswer": 1
  },
  {
    "question": "A clock shows 3:15. What is the angle between hour and minute hand?",
    "options": ["0°", "7.5°", "30°", "60°"],
    "correctAnswer": 1
  },
  {
    "question": "Which number is missing? 4, 9, 16, ?, 36",
    "options": ["20", "25", "30", "32"],
    "correctAnswer": 1
  },
  {
    "question": "What is the mirror image of 'MBD'?",
    "options": ["DMB", "BMD", "qvd", "None"],
    "correctAnswer": 3
  },
  {
    "question": "If South becomes East, what does East become?",
    "options": ["North", "South", "West", "Same"],
    "correctAnswer": 0
  },
  {
    "question": "Which figure is different: □, △, ◯, ▲",
    "options": ["□", "△", "◯", "▲"],
    "correctAnswer": 2
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": ["Earth", "Jupiter", "Mars", "Venus"],
    "correctAnswer": 2
  },
  {
    "question": "Which vitamin is synthesized in skin by sunlight?",
    "options": ["A", "B", "C", "D"],
    "correctAnswer": 3
  },
  {
    "question": "Which of the following is not a greenhouse gas?",
    "options": ["CO2", "CH4", "O2", "N2O"],
    "correctAnswer": 2
  },
  {
    "question": "Which of these is not a noble gas?",
    "options": ["Neon", "Helium", "Argon", "Hydrogen"],
    "correctAnswer": 3
  },
  {
    "question": "Which unit is used to measure electric power?",
    "options": ["Volt", "Watt", "Ohm", "Ampere"],
    "correctAnswer": 1
  },
  {
    "question": "What is the chemical formula of methane?",
    "options": ["CH3", "CH4", "C2H6", "CO2"],
    "correctAnswer": 1
  },
  {
    "question": "The process of joining monomers to form polymers is called:",
    "options": ["Hydrolysis", "Polymerization", "Glycolysis", "Crystallization"],
    "correctAnswer": 1
  },
  {
    "question": "Which blood group is universal recipient?",
    "options": ["A", "B", "AB", "O"],
    "correctAnswer": 2
  },
  {
    "question": "Which organ helps in voice production?",
    "options": ["Pharynx", "Larynx", "Trachea", "Bronchi"],
    "correctAnswer": 1
  },
  {
    "question": "Which layer of skin has pigment cells?",
    "options": ["Dermis", "Epidermis", "Subcutaneous", "Basement membrane"],
    "correctAnswer": 1
  },
  {
    "question": "The process of cell division in somatic cells is:",
    "options": ["Meiosis", "Binary fission", "Mitosis", "Budding"],
    "correctAnswer": 2
  },
  {
    "question": "Which one is an excretory organ?",
    "options": ["Liver", "Pancreas", "Lung", "Skin"],
    "correctAnswer": 3
  },
  {
    "question": "DNA replication occurs in which phase of cell cycle?",
    "options": ["G1", "G2", "S", "M"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a polysaccharide?",
    "options": ["Glucose", "Fructose", "Sucrose", "Starch"],
    "correctAnswer": 3
  },
  {
    "question": "In which organ is urea produced?",
    "options": ["Kidney", "Liver", "Bladder", "Pancreas"],
    "correctAnswer": 1
  },
  {
    "question": "A balanced chemical equation obeys:",
    "options": ["Law of gravity", "Law of reflection", "Law of conservation of mass", "Law of inertia"],
    "correctAnswer": 2
  },
  {
    "question": "Unit of sound intensity is:",
    "options": ["Decibel", "Hertz", "Joule", "Tesla"],
    "correctAnswer": 0
  },
  {
    "question": "Which wave is used in medical imaging?",
    "options": ["Gamma rays", "Microwaves", "X-rays", "Radio waves"],
    "correctAnswer": 2
  },
  {
    "question": "Which gas is used in light bulbs?",
    "options": ["Hydrogen", "Nitrogen", "Argon", "Oxygen"],
    "correctAnswer": 2
  },
  {
    "question": "Which gland is called the master gland?",
    "options": ["Thyroid", "Pancreas", "Pituitary", "Adrenal"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is an example of an oligosaccharide?",
    "options": ["Glucose", "Starch", "Sucrose", "Glycogen"],
    "correctAnswer": 2
  },
  {
    "question": "What is the primary function of the Golgi apparatus in a cell?",
    "options": ["Protein synthesis", "Energy production", "Modifying and packaging proteins", "DNA replication"],
    "correctAnswer": 2
  },
  {
    "question": "Which part of the human brain is responsible for regulating involuntary functions like breathing and heart rate?",
    "options": ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Hypothalamus"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following factors does NOT significantly affect enzyme activity?",
    "options": ["Temperature", "pH", "Substrate concentration", "Presence of light"],
    "correctAnswer": 3
  },
  {
    "question": "Lamarck's theory of evolution is based on the concept of:",
    "options": ["Natural selection", "Inheritance of acquired characters", "Genetic mutation", "Common descent"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following sexually transmitted diseases is caused by a bacterium?",
    "options": ["Herpes", "HIV/AIDS", "Gonorrhea", "HPV"],
    "correctAnswer": 2
  },
  {
    "question": "What type of muscle tissue is responsible for the rhythmic contractions of the heart?",
    "options": ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "Voluntary muscle"],
    "correctAnswer": 2
  },
  {
    "question": "In a dihybrid cross, Mendel's Law of Independent Assortment states that alleles for different traits segregate independently during gamete formation. What is the expected phenotypic ratio for a dihybrid cross involving two unlinked genes?",
    "options": ["3:1", "1:2:1", "9:3:3:1", "1:1:1:1"],
    "correctAnswer": 2
  },
  {
    "question": "Which component of the human circulatory system carries oxygenated blood away from the heart to the rest of the body?",
    "options": ["Veins", "Capillaries", "Arteries", "Lymphatic vessels"],
    "correctAnswer": 2
  },
  {
    "question": "According to the kinetic molecular theory, which of the following statements is true for an ideal gas?",
    "options": ["Gas particles have significant volume.", "There are strong attractive forces between gas particles.", "Gas particles move in random, continuous motion.", "Collisions between gas particles are inelastic."],
    "correctAnswer": 2
  },
  {
    "question": "What is the SI unit for the ideal gas constant (R)?",
    "options": ["Joule/mole·Kelvin", "Liter·atm/mole·Kelvin", "Pascal·m³/mole·Kelvin", "All of the above"],
    "correctAnswer": 0
  },
  {
    "question": "Which type of intermolecular force is responsible for the relatively high boiling point of water?",
    "options": ["London Dispersion Forces", "Dipole-Dipole Forces", "Hydrogen Bonding", "Ionic Bonds"],
    "correctAnswer": 2
  },
  {
    "question": "In an exothermic reaction, the enthalpy change (ΔH) is:",
    "options": ["Positive", "Negative", "Zero", "Dependent on temperature"],
    "correctAnswer": 1
  },
  {
    "question": "What is the oxidation number of sulfur in H₂SO₄?",
    "options": ["+2", "+4", "+6", "-2"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a scalar quantity?",
    "options": ["Velocity", "Acceleration", "Force", "Work"],
    "correctAnswer": 3
  },
  {
    "question": "A projectile is launched horizontally from a height. Ignoring air resistance, what is true about its horizontal velocity?",
    "options": ["It continuously increases.", "It continuously decreases.", "It remains constant.", "It becomes zero at maximum height."],
    "correctAnswer": 2
  },
  {
    "question": "According to Bernoulli's principle, an increase in the speed of a fluid is accompanied by a decrease in what?",
    "options": ["Density", "Viscosity", "Pressure", "Temperature"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following best defines a 'transverse wave'?",
    "options": ["A wave in which particles of the medium oscillate parallel to the direction of wave propagation.", "A wave that requires a medium for its propagation.", "A wave in which particles of the medium oscillate perpendicular to the direction of wave propagation.", "A wave that transfers matter as well as energy."],
    "correctAnswer": 2
  },
  {
    "question": "Choose the word that is an antonym of 'benevolent'.",
    "options": ["Kind", "Generous", "Malicious", "Compassionate"],
    "correctAnswer": 2
  },
  {
    "question": "If all A are B, and no B are C, then which of the following statements must be true?",
    "options": ["All A are C.", "No A are C.", "Some A are C.", "Some B are C."],
    "correctAnswer": 1
  }
    ];