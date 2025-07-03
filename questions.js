const quizData = [
  // BIOLOGY: Q1–Q30
  {
    "question": "What is the basic structural and functional unit of life?",
    "option": ["Tissue", "Organ", "Cell", "Organ system"],
    "correct": "Cell"
  },
  {
    "question": "Which organelle is called the powerhouse of the cell?",
    "option": ["Ribosome", "Nucleus", "Mitochondria", "Golgi body"],
    "correct": "Mitochondria"
  },
  {
    "question": "Proteins are made up of:",
    "option": ["Nucleotides", "Amino acids", "Fatty acids", "Sugars"],
    "correct": "Amino acids"
  },
  {
    "question": "What is the function of ribosomes?",
    "option": ["Digestion", "Photosynthesis", "Protein synthesis", "Respiration"],
    "correct": "Protein synthesis"
  },
  {
    "question": "Which part of the brain controls balance and coordination?",
    "option": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
    "correct": "Cerebellum"
  },
  {
    "question": "Which molecule stores genetic information?",
    "option": ["RNA", "ATP", "Protein", "DNA"],
    "correct": "DNA"
  },
  {
    "question": "Which blood cells help in clotting?",
    "option": ["RBC", "WBC", "Platelets", "Plasma"],
    "correct": "Platelets"
  },
  {
    "question": "Which organ removes nitrogenous waste from the body?",
    "option": ["Lungs", "Liver", "Kidneys", "Pancreas"],
    "correct": "Kidneys"
  },
  {
    "question": "Which gas is essential for aerobic respiration?",
    "option": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "correct": "Oxygen"
  },
  {
    "question": "HIV causes which disease?",
    "option": ["Cancer", "AIDS", "Hepatitis", "Flu"],
    "correct": "AIDS"
  },
  {
    "question": "Which carbohydrate is found in plant cell walls?",
    "option": ["Glucose", "Starch", "Cellulose", "Fructose"],
    "correct": "Cellulose"
  },
  {
    "question": "Which enzyme breaks down starch in the mouth?",
    "option": ["Pepsin", "Amylase", "Lipase", "Trypsin"],
    "correct": "Amylase"
  },
  {
    "question": "What is the role of chlorophyll?",
    "option": ["Respiration", "Protein synthesis", "Photosynthesis", "Digestion"],
    "correct": "Photosynthesis"
  },
  {
    "question": "The human heart has how many chambers?",
    "option": ["2", "3", "4", "5"],
    "correct": "4"
  },
  {
    "question": "The smallest blood vessels are called:",
    "option": ["Arteries", "Veins", "Capillaries", "Aorta"],
    "correct": "Capillaries"
  },
  {
    "question": "Which hormone controls blood sugar levels?",
    "option": ["Adrenaline", "Thyroxine", "Insulin", "Testosterone"],
    "correct": "Insulin"
  },
  {
    "question": "Which organ produces bile?",
    "option": ["Kidney", "Pancreas", "Gallbladder", "Liver"],
    "correct": "Liver"
  },
  {
    "question": "What is the function of alveoli?",
    "option": ["Absorption of food", "Exchange of gases", "Filtration of blood", "Secretion of hormones"],
    "correct": "Exchange of gases"
  },
  {
    "question": "Reflex actions are controlled by:",
    "option": ["Cerebrum", "Cerebellum", "Spinal cord", "Medulla"],
    "correct": "Spinal cord"
  },
  {
    "question": "Which structure carries nerve impulses away from the cell body?",
    "option": ["Dendrite", "Axon", "Synapse", "Nucleus"],
    "correct": "Axon"
  },
  {
    "question": "What is the main function of WBCs?",
    "option": ["Carry oxygen", "Help clot blood", "Fight infection", "Produce insulin"],
    "correct": "Fight infection"
  },
  {
    "question": "Which hormone initiates menstruation?",
    "option": ["Progesterone", "Estrogen", "FSH", "LH"],
    "correct": "Estrogen"
  },
  {
    "question": "Which protein is found in red blood cells?",
    "option": ["Keratin", "Collagen", "Myosin", "Hemoglobin"],
    "correct": "Hemoglobin"
  },
  {
    "question": "Skeletal muscles are under:",
    "option": ["Voluntary control", "Involuntary control", "Hormonal control", "Reflex control"],
    "correct": "Voluntary control"
  },
  {
    "question": "What is the fluid part of blood called?",
    "option": ["Plasma", "Serum", "WBC", "Platelets"],
    "correct": "Plasma"
  },
  {
    "question": "Inheritance of traits is studied in:",
    "option": ["Ecology", "Genetics", "Evolution", "Taxonomy"],
    "correct": "Genetics"
  },
  {
    "question": "The enzyme that digests proteins in the stomach is:",
    "option": ["Amylase", "Pepsin", "Lipase", "Trypsin"],
    "correct": "Pepsin"
  },
  {
    "question": "Mendel is known as the father of:",
    "option": ["Ecology", "Physiology", "Genetics", "Botany"],
    "correct": "Genetics"
  },
  {
    "question": "Which blood group is universal donor?",
    "option": ["A", "B", "AB", "O"],
    "correct": "O"
  },
  {
    "question": "Which structure in kidney filters blood?",
    "option": ["Nephron", "Glomerulus", "Tubule", "Bowman’s capsule"],
    "correct": "Glomerulus"
  },

  // CHEMISTRY: Q31–Q50
  {
    "question": "The number of atoms in 1 mole of a substance is:",
    "option": ["3.01×10^22", "6.022×10^23", "1.6×10^-19", "9.8 m/s^2"],
    "correct": "6.022×10^23"
  },
  {
    "question": "Which subatomic particle is negatively charged?",
    "option": ["Proton", "Neutron", "Electron", "Nucleus"],
    "correct": "Electron"
  },
  {
    "question": "The mass of 1 mole of water is:",
    "option": ["16g", "18g", "20g", "12g"],
    "correct": "18g"
  },
  {
    "question": "Which gas law states that pressure is inversely proportional to volume?",
    "option": ["Charles’s Law", "Boyle’s Law", "Avogadro’s Law", "Graham’s Law"],
    "correct": "Boyle’s Law"
  },
  {
    "question": "Hydrogen bonding is present in:",
    "option": ["CO2", "H2O", "O2", "CH4"],
    "correct": "H2O"
  },
  {
    "question": "Which acid is present in vinegar?",
    "option": ["Citric acid", "Acetic acid", "Formic acid", "Sulfuric acid"],
    "correct": "Acetic acid"
  },
  {
    "question": "What is the pH of pure water?",
    "option": ["3", "7", "9", "5"],
    "correct": "7"
  },
  {
    "question": "Which element is a noble gas?",
    "option": ["Oxygen", "Nitrogen", "Argon", "Chlorine"],
    "correct": "Argon"
  },
  {
    "question": "The most electronegative element is:",
    "option": ["Fluorine", "Chlorine", "Oxygen", "Iodine"],
    "correct": "Fluorine"
  },
  {
    "question": "Which compound has a triple bond?",
    "option": ["Ethane", "Ethene", "Ethyne", "Methane"],
    "correct": "Ethyne"
  },
  {
    "question": "Which element is the lightest?",
    "option": ["Oxygen", "Hydrogen", "Helium", "Carbon"],
    "correct": "Hydrogen"
  },
  {
    "question": "What is the chemical formula of ammonia?",
    "option": ["NH4", "NH3", "NO2", "N2O"],
    "correct": "NH3"
  },
  {
    "question": "Which of the following is a base?",
    "option": ["HCl", "NaOH", "H2SO4", "CH3COOH"],
    "correct": "NaOH"
  },
  {
    "question": "Which particle has no charge?",
    "option": ["Proton", "Electron", "Neutron", "Nucleus"],
    "correct": "Neutron"
  },
  {
    "question": "The S.I unit of energy is:",
    "option": ["Joule", "Calorie", "Watt", "Newton"],
    "correct": "Joule"
  },
  {
    "question": "Which compound contains ionic bond?",
    "option": ["H2O", "NaCl", "CH4", "O2"],
    "correct": "NaCl"
  },
  {
    "question": "Which group is known as alkali metals?",
    "option": ["Group I", "Group II", "Group VII", "Group 0"],
    "correct": "Group I"
  },
  {
    "question": "Rusting is a type of:",
    "option": ["Reduction", "Oxidation", "Hydrolysis", "Precipitation"],
    "correct": "Oxidation"
  },
  {
    "question": "Organic compounds mainly contain:",
    "option": ["Sodium", "Chlorine", "Carbon", "Magnesium"],
    "correct": "Carbon"
  },
  {
    "question": "Which acid is used in car batteries?",
    "option": ["Acetic acid", "Hydrochloric acid", "Sulfuric acid", "Nitric acid"],
    "correct": "Sulfuric acid"
  },

  // PHYSICS: Q51–Q70
  {
    "question": "The unit of force is:",
    "option": ["Joule", "Newton", "Watt", "Pascal"],
    "correct": "Newton"
  },
  {
    "question": "Speed is defined as:",
    "option": ["Distance/time", "Force × time", "Mass × acceleration", "Displacement/time"],
    "correct": "Distance/time"
  },
  {
    "question": "Acceleration due to gravity on Earth is:",
    "option": ["8.8 m/s^2", "9.8 m/s^2", "10 m/s^2", "6.8 m/s^2"],
    "correct": "9.8 m/s^2"
  },
  {
    "question": "Which quantity is scalar?",
    "option": ["Force", "Velocity", "Work", "Acceleration"],
    "correct": "Work"
  },
  {
    "question": "Which law explains action and reaction?",
    "option": ["First", "Second", "Third", "Law of inertia"],
    "correct": "Third"
  },
  {
    "question": "Which instrument measures current?",
    "option": ["Voltmeter", "Ammeter", "Thermometer", "Galvanometer"],
    "correct": "Ammeter"
  },
  {
    "question": "The frequency of A.C in Pakistan is:",
    "option": ["50 Hz", "60 Hz", "30 Hz", "100 Hz"],
    "correct": "50 Hz"
  },
  {
    "question": "Sound cannot travel in:",
    "option": ["Water", "Air", "Vacuum", "Steel"],
    "correct": "Vacuum"
  },
  {
    "question": "Which wave is used in TV remote control?",
    "option": ["Microwave", "Infrared", "X-ray", "Radio"],
    "correct": "Infrared"
  },
  {
    "question": "Heat energy is transferred by conduction mainly in:",
    "option": ["Solids", "Liquids", "Gases", "Vacuum"],
    "correct": "Solids"
  },
  {
    "question": "The SI unit of pressure is:",
    "option": ["Bar", "Pascal", "Newton", "Atmosphere"],
    "correct": "Pascal"
  },
  {
    "question": "Ohm's law is V =",
    "option": ["IR", "I/R", "R/I", "VI"],
    "correct": "IR"
  },
  {
    "question": "The device used to convert A.C to D.C is:",
    "option": ["Rectifier", "Transformer", "Capacitor", "Resistor"],
    "correct": "Rectifier"
  },
  {
    "question": "Which color has the highest frequency?",
    "option": ["Red", "Blue", "Green", "Violet"],
    "correct": "Violet"
  },
  {
    "question": "Which radiation has the shortest wavelength?",
    "option": ["Infrared", "Ultraviolet", "Microwave", "Gamma rays"],
    "correct": "Gamma rays"
  },
  {
    "question": "The time for one complete wave is called:",
    "option": ["Amplitude", "Frequency", "Wavelength", "Time period"],
    "correct": "Time period"
  },
  {
    "question": "Which instrument detects earthquakes?",
    "option": ["Thermometer", "Barometer", "Seismograph", "Anemometer"],
    "correct": "Seismograph"
  },
  {
    "question": "In convex lens, image formed is:",
    "option": ["Always virtual", "Always real", "Real or virtual", "Always inverted"],
    "correct": "Real or virtual"
  },
  {
    "question": "The flow of electrons is called:",
    "option": ["Resistance", "Current", "Voltage", "Power"],
    "correct": "Current"
  },
  {
    "question": "What is the speed of light in vacuum?",
    "option": ["3×10^8 m/s", "3×10^6 m/s", "1.5×10^8 m/s", "3×10^5 m/s"],
    "correct": "3×10^8 m/s"
  }

,
  {
    "question": "Which vitamin is essential for blood clotting?",
    "option": ["Vitamin A", "Vitamin B", "Vitamin K", "Vitamin D"],
    "correct": "Vitamin K"
  },
  {
    "question": "The process by which green plants make their food is:",
    "option": ["Respiration", "Transpiration", "Photosynthesis", "Digestion"],
    "correct": "Photosynthesis"
  },
  {
    "question": "In which organelle does aerobic respiration take place?",
    "option": ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    "correct": "Mitochondria"
  },
  {
    "question": "Which of the following is not a component of the human circulatory system?",
    "option": ["Heart", "Lungs", "Blood", "Blood vessels"],
    "correct": "Lungs"
  },
  {
    "question": "Which type of immunity is gained through vaccination?",
    "option": ["Natural", "Passive", "Active acquired", "Innate"],
    "correct": "Active acquired"
  },
  {
    "question": "A genetic disorder caused by a missing clotting factor is:",
    "option": ["Anemia", "Hemophilia", "Thalassemia", "Diabetes"],
    "correct": "Hemophilia"
  },
  {
    "question": "Which hormone controls the menstrual cycle?",
    "option": ["Insulin", "Adrenaline", "Estrogen", "Glucagon"],
    "correct": "Estrogen"
  },
  {
    "question": "Which process removes excess water from the body?",
    "option": ["Digestion", "Respiration", "Excretion", "Absorption"],
    "correct": "Excretion"
  },
  {
    "question": "What structure in the eye detects light?",
    "option": ["Iris", "Lens", "Retina", "Cornea"],
    "correct": "Retina"
  },
  {
    "question": "The longest part of the human digestive system is:",
    "option": ["Stomach", "Small intestine", "Large intestine", "Esophagus"],
    "correct": "Small intestine"
  },
  {
    "question": "Which part of the brain regulates heartbeat and breathing?",
    "option": ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"],
    "correct": "Medulla"
  },
  {
    "question": "Which protein is responsible for muscle contraction?",
    "option": ["Myosin", "Actin", "Keratin", "Albumin"],
    "correct": "Myosin"
  },
  {
    "question": "Which organ regulates body temperature?",
    "option": ["Liver", "Kidney", "Hypothalamus", "Lungs"],
    "correct": "Hypothalamus"
  },
  {
    "question": "Which gland secretes growth hormone?",
    "option": ["Thyroid", "Adrenal", "Pituitary", "Pancreas"],
    "correct": "Pituitary"
  },
  {
    "question": "Which part of nephron performs ultrafiltration?",
    "option": ["Loop of Henle", "Glomerulus", "Tubule", "Collecting duct"],
    "correct": "Glomerulus"
  },
  {
    "question": "Sex chromosomes in males are:",
    "option": ["XX", "XY", "YY", "XO"],
    "correct": "XY"
  },
  {
    "question": "Which structure transports urine from kidney to bladder?",
    "option": ["Urethra", "Nephron", "Ureter", "Loop of Henle"],
    "correct": "Ureter"
  },
  {
    "question": "Red blood cells are produced in the:",
    "option": ["Liver", "Spleen", "Bone marrow", "Heart"],
    "correct": "Bone marrow"
  },
  {
    "question": "Which part of the flower produces pollen?",
    "option": ["Petal", "Stigma", "Anther", "Ovary"],
    "correct": "Anther"
  },
  {
    "question": "Fertilization in humans occurs in the:",
    "option": ["Uterus", "Ovary", "Fallopian tube", "Vagina"],
    "correct": "Fallopian tube"
  },

  // CHEMISTRY: Q91–Q110
  {
    "question": "Which is the most abundant gas in the Earth's atmosphere?",
    "option": ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
    "correct": "Nitrogen"
  },
  {
    "question": "The process of solid directly changing into gas is:",
    "option": ["Fusion", "Sublimation", "Condensation", "Evaporation"],
    "correct": "Sublimation"
  },
  {
    "question": "Which metal is liquid at room temperature?",
    "option": ["Iron", "Mercury", "Aluminum", "Lead"],
    "correct": "Mercury"
  },
  {
    "question": "Which substance turns blue litmus paper red?",
    "option": ["Base", "Acid", "Salt", "Alcohol"],
    "correct": "Acid"
  },
  {
    "question": "The bond between two non-metals is:",
    "option": ["Ionic", "Covalent", "Metallic", "Hydrogen"],
    "correct": "Covalent"
  },
  {
    "question": "The chemical formula of calcium carbonate is:",
    "option": ["CaO", "CaCl2", "CaCO3", "Ca(OH)2"],
    "correct": "CaCO3"
  },
  {
    "question": "Atomic number is the number of:",
    "option": ["Electrons", "Neutrons", "Protons", "Ions"],
    "correct": "Protons"
  },
  {
    "question": "Which group in the periodic table contains noble gases?",
    "option": ["Group 1", "Group 7", "Group 18", "Group 17"],
    "correct": "Group 18"
  },
  {
    "question": "NaOH is a:",
    "option": ["Salt", "Acid", "Base", "Solvent"],
    "correct": "Base"
  },
  {
    "question": "The nucleus of an atom contains:",
    "option": ["Protons only", "Electrons and neutrons", "Protons and neutrons", "Electrons only"],
    "correct": "Protons and neutrons"
  },
  {
    "question": "Rate of reaction is affected by:",
    "option": ["Color", "Mass", "Temperature", "Volume"],
    "correct": "Temperature"
  },
  {
    "question": "Water is a:",
    "option": ["Element", "Compound", "Mixture", "Atom"],
    "correct": "Compound"
  },
  {
    "question": "Which element is used in making nuclear bombs?",
    "option": ["Uranium", "Calcium", "Lead", "Zinc"],
    "correct": "Uranium"
  },
  {
    "question": "A solution with pH less than 7 is:",
    "option": ["Neutral", "Basic", "Acidic", "Alkaline"],
    "correct": "Acidic"
  },
  {
    "question": "Which compound is responsible for hardness of water?",
    "option": ["NaCl", "MgSO4", "CaCO3", "HCl"],
    "correct": "CaCO3"
  },
  {
    "question": "The anion in NaCl is:",
    "option": ["Na+", "Cl-", "Na-", "Cl+"],
    "correct": "Cl-"
  },
  {
    "question": "Which hydrocarbon has a triple bond?",
    "option": ["Alkane", "Alkene", "Aromatic", "Alkyne"],
    "correct": "Alkyne"
  },
  {
    "question": "Litmus is a type of:",
    "option": ["Salt", "Indicator", "Acid", "Base"],
    "correct": "Indicator"
  },
  {
    "question": "Which process separates components based on boiling point?",
    "option": ["Filtration", "Evaporation", "Distillation", "Chromatography"],
    "correct": "Distillation"
  },
  {
    "question": "The symbol of lead is:",
    "option": ["Pb", "P", "Pd", "L"],
    "correct": "Pb"
  },

  // PHYSICS: Q111–Q130
  {
    "question": "Force acting on unit area is called:",
    "option": ["Work", "Power", "Pressure", "Energy"],
    "correct": "Pressure"
  },
  {
    "question": "The instrument used to measure atmospheric pressure is:",
    "option": ["Thermometer", "Hygrometer", "Barometer", "Ammeter"],
    "correct": "Barometer"
  },
  {
    "question": "Heat is a form of:",
    "option": ["Matter", "Energy", "Force", "Pressure"],
    "correct": "Energy"
  },
  {
    "question": "Which law states that energy cannot be created or destroyed?",
    "option": ["Ohm’s law", "Newton’s law", "Law of conservation of energy", "Hooke’s law"],
    "correct": "Law of conservation of energy"
  },
  {
    "question": "1 kilowatt-hour is equal to:",
    "option": ["3600 J", "3.6×10^6 J", "1000 J", "360 J"],
    "correct": "3.6×10^6 J"
  },
  {
    "question": "The SI unit of electric charge is:",
    "option": ["Ampere", "Volt", "Coulomb", "Ohm"],
    "correct": "Coulomb"
  },
  {
    "question": "An electric current produces:",
    "option": ["Sound", "Light", "Magnetic field", "Heat only"],
    "correct": "Magnetic field"
  },
  {
    "question": "What does a transformer do?",
    "option": ["Stores charge", "Measures voltage", "Changes voltage", "Generates electricity"],
    "correct": "Changes voltage"
  },
  {
    "question": "The path followed by projectile is called:",
    "option": ["Circle", "Straight line", "Parabola", "Ellipse"],
    "correct": "Parabola"
  },
  {
    "question": "The device that stores electrical energy is called:",
    "option": ["Transistor", "Resistor", "Capacitor", "Inductor"],
    "correct": "Capacitor"
  },
  {
    "question": "What is the unit of frequency?",
    "option": ["Decibel", "Meter", "Hertz", "Volt"],
    "correct": "Hertz"
  },
  {
    "question": "Which mirror is used in car side mirrors?",
    "option": ["Plane", "Concave", "Convex", "Parabolic"],
    "correct": "Convex"
  },
  {
    "question": "The phenomenon of light bending is called:",
    "option": ["Reflection", "Refraction", "Diffraction", "Dispersion"],
    "correct": "Refraction"
  },
  {
    "question": "Which color of light has the longest wavelength?",
    "option": ["Red", "Blue", "Green", "Violet"],
    "correct": "Red"
  },
  {
    "question": "The main source of energy for Earth is:",
    "option": ["Wind", "Water", "Sun", "Fuel"],
    "correct": "Sun"
  },
  {
    "question": "Speed of sound in air is approximately:",
    "option": ["330 m/s", "3×10^8 m/s", "1000 m/s", "1500 m/s"],
    "correct": "330 m/s"
  },
  {
    "question": "Which type of lens is thicker at the center?",
    "option": ["Concave", "Convex", "Plane", "Flat"],
    "correct": "Convex"
  },
  {
    "question": "What is the acceleration in free fall?",
    "option": ["1 m/s²", "5 m/s²", "9.8 m/s²", "15 m/s²"],
    "correct": "9.8 m/s²"
  },
  {
    "question": "The SI unit of work is:",
    "option": ["Joule", "Watt", "Newton", "Pascal"],
    "correct": "Joule"
  },
  {
    "question": "The mirror used by dentists is:",
    "option": ["Plane", "Convex", "Concave", "None"],
    "correct": "Concave"
  },

  // ENGLISH: Q131–Q140
  {
    "question": "Choose the correct synonym for 'Rapid':",
    "option": ["Slow", "Fast", "Dull", "Lazy"],
    "correct": "Fast"
  },
  {
    "question": "Choose the correct antonym for 'Expand':",
    "option": ["Increase", "Enlarge", "Contract", "Spread"],
    "correct": "Contract"
  },
  {
    "question": "Fill in the blank: She ___ going to school.",
    "option": ["am", "is", "are", "were"],
    "correct": "is"
  },
  {
    "question": "Choose the correct preposition: He jumped ___ the river.",
    "option": ["on", "in", "into", "onto"],
    "correct": "into"
  },
  {
    "question": "Identify the adjective: The sky was dark and cloudy.",
    "option": ["Sky", "Was", "Dark", "And"],
    "correct": "Dark"
  },
  {
    "question": "Choose the correct spelling:",
    "option": ["Recieve", "Receive", "Receeve", "Recive"],
    "correct": "Receive"
  },
  {
    "question": "Choose the passive voice: 'She wrote a letter.'",
    "option": ["A letter is written", "A letter was written by her", "She writes letter", "She has written letter"],
    "correct": "A letter was written by her"
  },
  {
    "question": "Pick the correct indirect speech: He said, 'I am tired.'",
    "option": ["He said he was tired", "He said I am tired", "He said that I was tired", "He told he tired"],
    "correct": "He said he was tired"
  },
  {
    "question": "Choose the correct pronoun: ___ are coming with us.",
    "option": ["Them", "They", "Their", "Theirs"],
    "correct": "They"
  },
  {
    "question": "Identify the noun: Honesty is the best policy.",
    "option": ["Best", "Policy", "Is", "Honesty"],
    "correct": "Honesty"
  }
,
  {
    "question": "If A = 1, B = 2, ..., then what is the sum of letters in 'DOG'?",
    "option": ["20", "26", "24", "22"],
    "correct": "26"
  },
  {
    "question": "What comes next in the series: 2, 4, 8, 16, ?",
    "option": ["18", "24", "30", "32"],
    "correct": "32"
  },
  {
    "question": "All roses are flowers. Some flowers fade quickly. What can be concluded?",
    "option": ["All roses fade quickly", "Some roses are not flowers", "Some flowers are roses", "Some roses may fade quickly"],
    "correct": "Some flowers are roses"
  },
  {
    "question": "Which number completes the series: 3, 6, 9, 12, ?",
    "option": ["14", "15", "18", "16"],
    "correct": "15"
  },
  {
    "question": "Statement: All humans are mammals. Conclusion: All mammals are humans.",
    "option": ["True", "False", "Uncertain", "Cannot say"],
    "correct": "False"
  },
  {
    "question": "What comes next in the pattern: Z, X, V, T, ?",
    "option": ["R", "S", "Q", "U"],
    "correct": "R"
  },
  {
    "question": "Find the odd one out: Apple, Banana, Carrot, Mango",
    "option": ["Apple", "Banana", "Carrot", "Mango"],
    "correct": "Carrot"
  },
  {
    "question": "A is the sister of B. B is the brother of C. C is the son of D. How is D related to A?",
    "option": ["Father", "Mother", "Parent", "Uncle"],
    "correct": "Parent"
  },
  {
    "question": "If ALL = 36, BAT = 43, then CAT = ?",
    "option": ["42", "46", "41", "44"],
    "correct": "44"
  },
  {
    "question": "Which figure logically follows: ●▲■, ▲■●, ■●▲, ?",
    "option": ["■▲●", "▲●■", "●■▲", "■●▲"],
    "correct": "▲●■"
  },
  {
    "question": "Which day comes three days after Monday?",
    "option": ["Thursday", "Friday", "Wednesday", "Sunday"],
    "correct": "Thursday"
  },
  {
    "question": "Which is the odd one out: Circle, Triangle, Square, Sphere?",
    "option": ["Circle", "Sphere", "Triangle", "Square"],
    "correct": "Sphere"
  },
  {
    "question": "If 1=5, 2=25, 3=325, then 4=?",
    "option": ["4325", "425", "435", "432"],
    "correct": "4325"
  },
  {
    "question": "Which letter is two places right of G in English alphabet?",
    "option": ["H", "I", "J", "K"],
    "correct": "I"
  },
  {
    "question": "If 5 + 3 = 28, 9 + 1 = 810, then 8 + 6 = ?",
    "option": ["86", "814", "48", "88"],
    "correct": "814"
  },
  {
    "question": "A clock shows 3:15. What is the angle between hour and minute hand?",
    "option": ["0°", "7.5°", "30°", "60°"],
    "correct": "7.5°"
  },
  {
    "question": "Which number is missing? 4, 9, 16, ?, 36",
    "option": ["20", "25", "30", "32"],
    "correct": "25"
  },
  {
    "question": "What is the mirror image of 'MBD'?",
    "option": ["DMB", "BMD", "qvd", "None"],
    "correct": "None"
  },
  {
    "question": "If South becomes East, what does East become?",
    "option": ["North", "South", "West", "Same"],
    "correct": "North"
  },
  {
    "question": "Which figure is different: □, △, ◯, ▲",
    "option": ["□", "△", "◯", "▲"],
    "correct": "◯"
  },

  // BONUS MIXED MCQs: Q161–Q200
  {
    "question": "Which planet is known as the Red Planet?",
    "option": ["Earth", "Jupiter", "Mars", "Venus"],
    "correct": "Mars"
  },
  {
    "question": "Which vitamin is synthesized in skin by sunlight?",
    "option": ["A", "B", "C", "D"],
    "correct": "D"
  },
  {
    "question": "Which of the following is not a greenhouse gas?",
    "option": ["CO2", "CH4", "O2", "N2O"],
    "correct": "O2"
  },
  {
    "question": "Which of these is not a noble gas?",
    "option": ["Neon", "Helium", "Argon", "Hydrogen"],
    "correct": "Hydrogen"
  },
  {
    "question": "Which unit is used to measure electric power?",
    "option": ["Volt", "Watt", "Ohm", "Ampere"],
    "correct": "Watt"
  },
  {
    "question": "What is the chemical formula of methane?",
    "option": ["CH3", "CH4", "C2H6", "CO2"],
    "correct": "CH4"
  },
  {
    "question": "The process of joining monomers to form polymers is called:",
    "option": ["Hydrolysis", "Polymerization", "Glycolysis", "Crystallization"],
    "correct": "Polymerization"
  },
  {
    "question": "Which blood group is universal recipient?",
    "option": ["A", "B", "AB", "O"],
    "correct": "AB"
  },
  {
    "question": "Which organ helps in voice production?",
    "option": ["Pharynx", "Larynx", "Trachea", "Bronchi"],
    "correct": "Larynx"
  },
  {
    "question": "Which layer of skin has pigment cells?",
    "option": ["Dermis", "Epidermis", "Subcutaneous", "Basement membrane"],
    "correct": "Epidermis"
  },
  {
    "question": "The process of cell division in somatic cells is:",
    "option": ["Meiosis", "Binary fission", "Mitosis", "Budding"],
    "correct": "Mitosis"
  },
  {
    "question": "Which one is an excretory organ?",
    "option": ["Liver", "Pancreas", "Lung", "Skin"],
    "correct": "Skin"
  },
  {
    "question": "DNA replication occurs in which phase of cell cycle?",
    "option": ["G1", "G2", "S", "M"],
    "correct": "S"
  },
  {
    "question": "Which of the following is a polysaccharide?",
    "option": ["Glucose", "Fructose", "Sucrose", "Starch"],
    "correct": "Starch"
  },
  {
    "question": "In which organ is urea produced?",
    "option": ["Kidney", "Liver", "Bladder", "Pancreas"],
    "correct": "Liver"
  },
  {
    "question": "A balanced chemical equation obeys:",
    "option": ["Law of gravity", "Law of reflection", "Law of conservation of mass", "Law of inertia"],
    "correct": "Law of conservation of mass"
  },
  {
    "question": "Unit of sound intensity is:",
    "option": ["Decibel", "Hertz", "Joule", "Tesla"],
    "correct": "Decibel"
  },
  {
    "question": "Which wave is used in medical imaging?",
    "option": ["Gamma rays", "Microwaves", "X-rays", "Radio waves"],
    "correct": "X-rays"
  },
  {
    "question": "Which gas is used in light bulbs?",
    "option": ["Hydrogen", "Nitrogen", "Argon", "Oxygen"],
    "correct": "Argon"
  },
  {
    "question": "Which gland is called the master gland?",
    "option": ["Thyroid", "Pancreas", "Pituitary", "Adrenal"],
    "correct": "Pituitary"
  }
];
