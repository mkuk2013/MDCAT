const newQuestions = [
  // Biology Questions
  {
    "question": "Which type of cells lack a true nucleus and membrane-bound organelles?",
    "options": ["Eukaryotic cells", "Prokaryotic cells", "Plant cells", "Animal cells"],
    "correctAnswer": 1
  },
  {
    "question": "The process of breaking down glucose to release energy in the absence of oxygen is called:",
    "options": ["Aerobic respiration", "Photosynthesis", "Fermentation", "Glycolysis"],
    "correctAnswer": 2
  },
  {
    "question": "Which biological molecule is primarily responsible for carrying genetic information from DNA to ribosomes for protein synthesis?",
    "options": ["DNA", "RNA", "Protein", "Lipid"],
    "correctAnswer": 1
  },
  {
    "question": "The 'powerhouse' of the cell, where most ATP is generated, is the:",
    "options": ["Nucleus", "Ribosome", "Mitochondrion", "Endoplasmic Reticulum"],
    "correctAnswer": 2
  },
  {
    "question": "Which part of the human brain is responsible for higher-order functions like thought, memory, and voluntary action?",
    "options": ["Cerebellum", "Brainstem", "Cerebrum", "Medulla Oblongata"],
    "correctAnswer": 2
  },
  {
    "question": "Enzymes are biological catalysts that speed up biochemical reactions by:",
    "options": ["Increasing activation energy", "Decreasing activation energy", "Changing the equilibrium of the reaction", "Consuming reactants"],
    "correctAnswer": 1
  },
  {
    "question": "According to Darwin's theory of natural selection, individuals with advantageous traits are more likely to:",
    "options": ["Migrate to new environments", "Develop new mutations", "Survive and reproduce", "Become extinct"],
    "correctAnswer": 2
  },
  {
    "question": "Which hormone is primarily responsible for the development of female secondary sexual characteristics?",
    "options": ["Testosterone", "Progesterone", "Estrogen", "Insulin"],
    "correctAnswer": 2
  },
  {
    "question": "The main component of the human skeleton is:",
    "options": ["Cartilage", "Muscle", "Bone", "Ligament"],
    "correctAnswer": 2
  },
  {
    "question": "The process by which the kidney filters blood to remove waste products and maintain fluid balance is called:",
    "options": ["Digestion", "Respiration", "Osmoregulation", "Circulation"],
    "correctAnswer": 2
  },
  {
    "question": "Which blood component is responsible for oxygen transport?",
    "options": ["White Blood Cells", "Platelets", "Plasma", "Red Blood Cells"],
    "correctAnswer": 3
  },
  {
    "question": "The lymphatic system plays a crucial role in:",
    "options": ["Digestion of food", "Gas exchange", "Immunity and fluid balance", "Hormone production"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is an example of a sexually transmitted disease caused by a virus?",
    "options": ["Gonorrhea", "Syphilis", "Herpes", "Chlamydia"],
    "correctAnswer": 2
  },
  {
    "question": "The functional unit of the kidney is the:",
    "options": ["Nephron", "Ureter", "Bladder", "Urethra"],
    "correctAnswer": 0
  },
  {
    "question": "Genetic engineering involves the manipulation of:",
    "options": ["Proteins", "Lipids", "DNA", "Carbohydrates"],
    "correctAnswer": 2
  },
  {
    "question": "Which organelle is involved in detoxification and lipid synthesis?",
    "options": ["Rough ER", "Smooth ER", "Lysosome", "Peroxisome"],
    "correctAnswer": 1
  },
  {
    "question": "What is the primary function of ribosomes?",
    "options": ["Energy production", "Protein synthesis", "Waste disposal", "Cell division"],
    "correctAnswer": 1
  },
  {
    "question": "The process of maintaining a stable internal environment in an organism is called:",
    "options": ["Metabolism", "Homeostasis", "Reproduction", "Evolution"],
    "correctAnswer": 1
  },
  {
    "question": "Which part of the flower develops into a fruit after fertilization?",
    "options": ["Stamen", "Pistil", "Ovary", "Petal"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of viruses?",
    "options": ["They are prokaryotic cells.", "They have their own metabolic machinery.", "They can only reproduce inside host cells.", "They are composed of cells."],
    "correctAnswer": 2
  },
  {
    "question": "The process of gas exchange in the lungs occurs in the:",
    "options": ["Bronchi", "Trachea", "Alveoli", "Pharynx"],
    "correctAnswer": 2
  },
  {
    "question": "Which type of immunity is developed after exposure to a pathogen or vaccination?",
    "options": ["Innate immunity", "Passive immunity", "Active immunity", "Natural immunity"],
    "correctAnswer": 2
  },
  {
    "question": "The main function of white blood cells (leukocytes) is to:",
    "options": ["Transport oxygen", "Clot blood", "Fight infection", "Produce hormones"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a disaccharide?",
    "options": ["Glucose", "Fructose", "Sucrose", "Glycogen"],
    "correctAnswer": 2
  },
  {
    "question": "The human heart is a four-chambered organ. Which chamber pumps oxygenated blood to the body?",
    "options": ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"],
    "correctAnswer": 3
  },
  {
    "question": "Which part of the nervous system is responsible for involuntary actions like digestion and heartbeat?",
    "options": ["Somatic nervous system", "Autonomic nervous system", "Central nervous system", "Peripheral nervous system"],
    "correctAnswer": 1
  },
  {
    "question": "The process by which plants convert light energy into chemical energy is called:",
    "options": ["Respiration", "Transpiration", "Photosynthesis", "Fermentation"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a fat-soluble vitamin?",
    "options": ["Vitamin C", "Vitamin B12", "Vitamin A", "Folic acid"],
    "correctAnswer": 2
  },
  {
    "question": "The male reproductive organ that produces sperm is the:",
    "options": ["Penis", "Testis", "Prostate gland", "Seminal vesicle"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a structural protein found in hair and nails?",
    "options": ["Hemoglobin", "Insulin", "Keratin", "Actin"],
    "correctAnswer": 2
  },
  {
    "question": "The primary site of nutrient absorption in the human digestive system is the:",
    "options": ["Stomach", "Large intestine", "Small intestine", "Esophagus"],
    "correctAnswer": 2
  },
  {
    "question": "Which blood vessel carries deoxygenated blood from the heart to the lungs?",
    "options": ["Aorta", "Pulmonary artery", "Pulmonary vein", "Vena cava"],
    "correctAnswer": 1
  },
  {
    "question": "The process of cell division that results in two daughter cells each having the same number and kind of chromosomes as the parent nucleus is called:",
    "options": ["Meiosis", "Mitosis", "Binary fission", "Budding"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a common cause of kidney stones?",
    "options": ["Excessive water intake", "High protein diet", "Accumulation of mineral salts", "Low calcium intake"],
    "correctAnswer": 2
  },
  {
    "question": "The part of the brain that controls balance and coordination is the:",
    "options": ["Cerebrum", "Cerebellum", "Medulla oblongata", "Thalamus"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a nitrogenous waste product excreted by the kidneys?",
    "options": ["Glucose", "Amino acids", "Urea", "Fatty acids"],
    "correctAnswer": 2
  },
  {
    "question": "The condition characterized by inflammation of the joints is called:",
    "options": ["Osteoporosis", "Arthritis", "Scoliosis", "Rickets"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is an example of a conjugated molecule?",
    "options": ["Glucose", "Amino acid", "Glycolipid", "Fatty acid"],
    "correctAnswer": 2
  },
  {
    "question": "The process of thermoregulation in humans primarily involves maintaining a stable:",
    "options": ["Blood pressure", "Body temperature", "Heart rate", "Blood glucose level"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a function of the liver?",
    "options": ["Producing insulin", "Filtering blood and detoxifying chemicals", "Pumping blood", "Producing digestive enzymes"],
    "correctAnswer": 1
  },
  {
    "question": "The theory of inheritance of acquired characters was proposed by:",
    "options": ["Charles Darwin", "Gregor Mendel", "Jean-Baptiste Lamarck", "Alfred Russel Wallace"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of smooth muscles?",
    "options": ["Voluntary control", "Striated appearance", "Found in walls of internal organs", "Multinucleated cells"],
    "correctAnswer": 2
  },
  {
    "question": "The X-linked recessive inheritance pattern is observed in diseases like:",
    "options": ["Down Syndrome", "Hemophilia", "Sickle Cell Anemia", "Cystic Fibrosis"],
    "correctAnswer": 1
  },
  {
    "question": "Which part of the human respiratory system is responsible for voice production?",
    "options": ["Pharynx", "Larynx", "Trachea", "Bronchi"],
    "correctAnswer": 1
  },
  {
    "question": "The process of selective re-absorption in the kidney primarily occurs in the:",
    "options": ["Glomerulus", "Bowman's capsule", "Renal tubules", "Collecting duct"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a major component of plant cell walls?",
    "options": ["Starch", "Glycogen", "Cellulose", "Chitin"],
    "correctAnswer": 2
  },
  {
    "question": "The main function of the Golgi apparatus is:",
    "options": ["Protein synthesis", "Lipid synthesis", "Modifying, sorting, and packaging proteins and lipids", "Energy production"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a common symptom of AIDS?",
    "options": ["Sudden weight gain", "Increased immunity", "Opportunistic infections", "Improved vision"],
    "correctAnswer": 2
  },
  {
    "question": "The process by which a nerve impulse travels along an axon is called:",
    "options": ["Synapsis", "Reflex action", "Action potential", "Neurotransmission"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a primary function of platelets?",
    "options": ["Oxygen transport", "Immune response", "Blood clotting", "Hormone production"],
    "correctAnswer": 2
  },
  {
    "question": "The menstrual cycle is regulated by hormones secreted from the:",
    "options": ["Thyroid gland", "Adrenal gland", "Pituitary gland and ovaries", "Pancreas"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of cardiac muscles?",
    "options": ["Voluntary control", "Found in skeletal system", "Striated and involuntary", "Smooth and voluntary"],
    "correctAnswer": 2
  },
  {
    "question": "Mendel's Law of Segregation states that during gamete formation, the two alleles for a heritable character segregate (separate from each other) during gamete formation and end up in different gametes. This leads to a phenotypic ratio of ______ in a monohybrid cross.",
    "options": ["1:1", "3:1", "9:3:3:1", "1:2:1"],
    "correctAnswer": 1
  },
  {
    "question": "The main difference between arteries and veins is that arteries generally carry:",
    "options": ["Deoxygenated blood away from the heart", "Oxygenated blood away from the heart", "Deoxygenated blood towards the heart", "Oxygenated blood towards the heart"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a component of the human digestive system but not directly involved in chemical digestion?",
    "options": ["Stomach", "Small intestine", "Esophagus", "Pancreas"],
    "correctAnswer": 2
  },
  {
    "question": "The process of breaking down food into smaller molecules that can be absorbed by the body is called:",
    "options": ["Respiration", "Excretion", "Digestion", "Circulation"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a water-soluble vitamin?",
    "options": ["Vitamin D", "Vitamin K", "Vitamin C", "Vitamin A"],
    "correctAnswer": 2
  },
  {
    "question": "The main function of the human skeletal system is:",
    "options": ["Producing hormones", "Supporting the body and protecting organs", "Digesting food", "Transporting oxygen"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is an example of an enzyme?",
    "options": ["Glucose", "Insulin", "Amylase", "Hemoglobin"],
    "correctAnswer": 2
  },
  {
    "question": "The concept of 'gene linkage' refers to:",
    "options": ["Genes located on different chromosomes", "Genes located close together on the same chromosome", "Genes that always assort independently", "Genes that control multiple traits"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of prokaryotic cells?",
    "options": ["Presence of mitochondria", "Presence of chloroplasts", "Absence of a true nucleus", "Presence of a cell wall made of cellulose"],
    "correctAnswer": 2
  },
  {
    "question": "The process of 'crossing over' during meiosis leads to:",
    "options": ["Identical daughter cells", "Increased genetic variation", "Decreased chromosome number", "Asexual reproduction"],
    "correctAnswer": 1
  },

  // Chemistry Questions
  {
    "question": "What is the empirical formula of a compound that contains 40% Carbon, 6.7% Hydrogen, and 53.3% Oxygen by mass? (Atomic mass: C=12, H=1, O=16)",
    "options": ["CH₂O", "C₂H₄O₂", "CHO", "C₃H₆O₃"],
    "correctAnswer": 0
  },
  {
    "question": "Which of the following quantum numbers describes the shape of an atomic orbital?",
    "options": ["Principal quantum number (n)", "Angular momentum quantum number (l)", "Magnetic quantum number (ml)", "Spin quantum number (ms)"],
    "correctAnswer": 1
  },
  {
    "question": "According to the Kinetic Molecular Theory, the average kinetic energy of gas particles is directly proportional to the:",
    "options": ["Pressure", "Volume", "Temperature in Celsius", "Absolute temperature (Kelvin)"],
    "correctAnswer": 3
  },
  {
    "question": "Which of the following is an example of an ionic crystal?",
    "options": ["Diamond", "Sodium chloride", "Ice", "Graphite"],
    "correctAnswer": 1
  },
  {
    "question": "The Haber's process is used for the industrial synthesis of:",
    "options": ["Sulfuric acid", "Ammonia", "Nitric acid", "Ethanol"],
    "correctAnswer": 1
  },
  {
    "question": "The rate constant (k) in a rate law is dependent on:",
    "options": ["Concentration of reactants", "Time", "Temperature", "Pressure"],
    "correctAnswer": 2
  },
  {
    "question": "Hess's Law states that the enthalpy change for a reaction is independent of the pathway between the initial and final states. This is a consequence of the fact that enthalpy is a:",
    "options": ["Path function", "State function", "Extensive property", "Intensive property"],
    "correctAnswer": 1
  },
  {
    "question": "In the balancing of redox reactions, the oxidation number method involves tracking the change in oxidation numbers of elements. What is the oxidation number of Chromium in K₂Cr₂O₇?",
    "options": ["+2", "+3", "+6", "+7"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following best describes a sigma (σ) bond?",
    "options": ["Formed by sideways overlap of p-orbitals", "A weaker bond than a pi bond", "Formed by direct, head-on overlap of atomic orbitals", "Present only in unsaturated compounds"],
    "correctAnswer": 2
  },
  {
    "question": "The atomic radius generally decreases across a period in the periodic table due to:",
    "options": ["Increased shielding effect", "Decreased nuclear charge", "Increased effective nuclear charge", "Increased number of electron shells"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a functional group isomer of an aldehyde?",
    "options": ["Ketone", "Alcohol", "Carboxylic acid", "Ether"],
    "correctAnswer": 0
  },
  {
    "question": "The electrophilic substitution reactions of benzene are characteristic of its:",
    "options": ["Saturated nature", "High reactivity", "Aromaticity", "Linear structure"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a nucleophilic substitution reaction?",
    "options": ["Addition of H₂ to an alkene", "Reaction of an alkyl halide with NaOH", "Combustion of methane", "Nitration of benzene"],
    "correctAnswer": 1
  },
  {
    "question": "The reaction of an alcohol with a carboxylic acid to form an ester and water is called:",
    "options": ["Hydrolysis", "Saponification", "Esterification", "Fermentation"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic reaction of aldehydes and ketones?",
    "options": ["Elimination reactions", "Nucleophilic addition reactions", "Electrophilic substitution reactions", "Free radical substitution"],
    "correctAnswer": 1
  },
  {
    "question": "Proteins are polymers of:",
    "options": ["Nucleotides", "Monosaccharides", "Amino acids", "Fatty acids"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a type of adhesive?",
    "options": ["Polyethylene", "Epoxy resin", "PVC", "Nylon"],
    "correctAnswer": 1
  },
  {
    "question": "The process of 'nitration' of benzene involves the introduction of a ______ group onto the benzene ring.",
    "options": ["-OH", "-COOH", "-NO₂", "-Cl"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is an example of a d-block element?",
    "options": ["Sodium", "Magnesium", "Zinc", "Carbon"],
    "correctAnswer": 2
  },
  {
    "question": "The boiling point of a liquid is the temperature at which its vapor pressure equals the:",
    "options": ["Atmospheric pressure", "Critical pressure", "Standard pressure", "Partial pressure"],
    "correctAnswer": 0
  },
  {
    "question": "Which of the following is a characteristic of an ideal gas?",
    "options": ["Strong intermolecular forces", "Particles have significant volume", "Elastic collisions between particles", "Particles attract each other"],
    "correctAnswer": 2
  },
  {
    "question": "The solubility product (Ksp) is a measure of the solubility of a sparingly soluble ionic compound in a saturated solution. A higher Ksp value indicates:",
    "options": ["Lower solubility", "Higher solubility", "No solubility", "Constant solubility"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is an example of a strong base?",
    "options": ["Ammonia (NH₃)", "Sodium hydroxide (NaOH)", "Water (H₂O)", "Acetic acid (CH₃COOH)"],
    "correctAnswer": 1
  },
  {
    "question": "The process of 'hydration' of an alkene involves the addition of:",
    "options": ["Hydrogen", "Halogen", "Water", "Hydrogen halide"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a structural isomer of butan-1-ol?",
    "options": ["Butanal", "Diethyl ether", "Butanoic acid", "Butan-2-ol"],
    "correctAnswer": 3
  },
  {
    "question": "The term 'molecular polarity' is determined by the presence of polar bonds and the:",
    "options": ["Number of atoms", "Molecular shape", "Bond energy", "Atomic mass"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is an example of an addition polymer?",
    "options": ["Nylon", "Polyester", "Polyvinyl chloride (PVC)", "Protein"],
    "correctAnswer": 2
  },
  {
    "question": "The reaction of an alkane with a halogen in the presence of UV light is an example of:",
    "options": ["Addition reaction", "Substitution reaction", "Elimination reaction", "Rearrangement reaction"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of a buffer solution?",
    "options": ["It resists changes in pH upon addition of small amounts of acid or base.", "It has a pH of exactly 7.", "It is always a strong acid or strong base solution.", "It is highly corrosive."],
    "correctAnswer": 0
  },
  {
    "question": "The process of 'saponification' involves the hydrolysis of an ester in the presence of a strong base to produce:",
    "options": ["Alcohol and carboxylic acid", "Soap and glycerol", "Aldehyde and ketone", "Ether and water"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of a covalent bond?",
    "options": ["Transfer of electrons", "Sharing of electrons", "Attraction between ions", "Formation of metallic lattice"],
    "correctAnswer": 1
  },
  {
    "question": "What is the oxidation state of oxygen in peroxides (e.g., H₂O₂)?",
    "options": ["0", "-1", "-2", "+1"],
    "correctAnswer": 1
  },
  {
    "question": "According to the Aufbau principle, electrons fill atomic orbitals in order of:",
    "options": ["Increasing energy", "Decreasing energy", "Increasing spin", "Decreasing spin"],
    "correctAnswer": 0
  },
  {
    "question": "Which of the following is an example of a coordinate covalent bond?",
    "options": ["H₂", "NaCl", "NH₄⁺", "CH₄"],
    "correctAnswer": 2
  },
  {
    "question": "The phenomenon of 'isomerism' in organic chemistry refers to compounds with the same molecular formula but different:",
    "options": ["Empirical formula", "Molar mass", "Structural formulas", "Physical states"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a strong oxidizing agent?",
    "options": ["KMnO₄", "Na", "H₂", "Cl⁻"],
    "correctAnswer": 0
  },
  {
    "question": "The term 'enthalpy of formation' refers to the enthalpy change when one mole of a compound is formed from its elements in their standard states. It is denoted by:",
    "options": ["ΔHrxn", "ΔHsol", "ΔHf°", "ΔHcomb"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of a molecular solid?",
    "options": ["High melting point", "Conducts electricity well", "Held together by intermolecular forces", "Forms a crystal lattice of ions"],
    "correctAnswer": 2
  },
  {
    "question": "The process of 'halogenation' of an alkane involves the substitution of a hydrogen atom by a:",
    "options": ["Oxygen atom", "Nitrogen atom", "Halogen atom", "Carbon atom"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is an example of a carboxylic acid derivative?",
    "options": ["Aldehyde", "Ketone", "Ester", "Alcohol"],
    "correctAnswer": 2
  },
  {
    "question": "The term 'zwitterion' refers to an amino acid that has:",
    "options": ["Only a positive charge", "Only a negative charge", "Both a positive and a negative charge", "No charge"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a common use of dyes?",
    "options": ["Fuel", "Coloring textiles", "Solvent", "Lubricant"],
    "correctAnswer": 1
  },
  {
    "question": "The process of 'cracking' in petroleum refining involves:",
    "options": ["Combining small hydrocarbons", "Breaking down large hydrocarbons into smaller ones", "Separating hydrocarbons by boiling point", "Adding hydrogen to hydrocarbons"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is an example of a Lewis acid?",
    "options": ["NH₃", "H₂O", "BF₃", "OH⁻"],
    "correctAnswer": 2
  },
  {
    "question": "The phenomenon of 'delocalization' of electrons is characteristic of:",
    "options": ["Saturated hydrocarbons", "Ionic compounds", "Aromatic compounds", "Alkyl halides"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of a strong electrolyte?",
    "options": ["Does not conduct electricity", "Partially ionizes in solution", "Completely ionizes in solution", "Forms a precipitate"],
    "correctAnswer": 2
  },
  {
    "question": "The 'functional group' in organic chemistry is a specific group of atoms within a molecule that is responsible for the characteristic chemical reactions of that molecule. Which of the following is the functional group for ketones?",
    "options": ["-OH", "-CHO", ">C=O", "-COOH"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a common industrial application of enzymes?",
    "options": ["Production of plastics", "Fermentation in brewing", "Synthesis of ammonia", "Extraction of metals"],
    "correctAnswer": 1
  },
  {
    "question": "The 'bond energy' is the energy required to break one mole of a particular type of bond in the gaseous state. A higher bond energy indicates a ______ bond.",
    "options": ["Weaker", "Stronger", "Longer", "Shorter"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of a reversible reaction?",
    "options": ["Proceeds in one direction only", "Reaches completion quickly", "Products can react to form reactants", "Always releases heat"],
    "correctAnswer": 2
  },
  {
    "question": "The 'common ion effect' is observed when the addition of a common ion to a saturated solution of a sparingly soluble salt causes the solubility of the salt to:",
    "options": ["Increase", "Decrease", "Remain unchanged", "Become zero"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is an example of a primary amine?",
    "options": ["(CH₃)₃N", "CH₃NH₂", "(CH₃)₂NH", "C₆H₅NHC₂H₅"],
    "correctAnswer": 1
  },
  {
    "question": "The 'rate of reaction' in chemical kinetics is defined as the change in concentration of a reactant or product per unit time. It is influenced by factors such as temperature, concentration, and:",
    "options": ["Color of the solution", "Mass of the container", "Presence of a catalyst", "Volume of the reaction vessel"],
    "correctAnswer": 2
  },

  // Physics Questions
  {
    "question": "The SI unit of work is:",
    "options": ["Watt", "Joule", "Newton", "Pascal"],
    "correctAnswer": 1
  },
  {
    "question": "According to Newton's Second Law of Motion, force is directly proportional to:",
    "options": ["Velocity", "Acceleration", "Displacement", "Time"],
    "correctAnswer": 1
  },
  {
    "question": "The SI unit of angular velocity is:",
    "options": ["Revolutions per second", "Degrees per second", "Radians per second", "Meters per second"],
    "correctAnswer": 2
  },
  {
    "question": "Bernoulli's principle is based on the conservation of:",
    "options": ["Mass", "Momentum", "Energy", "Pressure"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following types of waves can travel through a vacuum?",
    "options": ["Sound waves", "Water waves", "Electromagnetic waves", "Seismic waves"],
    "correctAnswer": 2
  },
  {
    "question": "The phenomenon of forming stationary waves in a stretched string depends on the string's length, tension, and:",
    "options": ["Temperature", "Density", "Material", "Amplitude"],
    "correctAnswer": 1
  },
  {
    "question": "The internal energy of an ideal gas depends only on its:",
    "options": ["Pressure", "Volume", "Temperature", "Density"],
    "correctAnswer": 2
  },
  {
    "question": "Electric field lines originate from ______ charges and terminate on ______ charges.",
    "options": ["Negative, positive", "Positive, negative", "Neutral, positive", "Positive, neutral"],
    "correctAnswer": 1
  },
  {
    "question": "The capacitance of a parallel plate capacitor is directly proportional to the area of the plates and inversely proportional to the:",
    "options": ["Voltage across plates", "Charge on plates", "Distance between plates", "Dielectric constant"],
    "correctAnswer": 2
  },
  {
    "question": "Ohm's Law states that the current flowing through a conductor between two points is directly proportional to the voltage across the two points and inversely proportional to the:",
    "options": ["Power", "Resistance", "Energy", "Charge"],
    "correctAnswer": 1
  },
  {
    "question": "The magnetic field lines around a current-carrying wire form:",
    "options": ["Straight lines", "Concentric circles", "Spirals", "Parallel lines"],
    "correctAnswer": 1
  },
  {
    "question": "Faraday's Law of Electromagnetic Induction states that the magnitude of the induced electromotive force (EMF) is proportional to the rate of change of:",
    "options": ["Electric field", "Magnetic field", "Magnetic flux", "Current"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of alternating current (AC)?",
    "options": ["Flows in one direction only", "Has constant voltage", "Changes direction periodically", "Produced by batteries"],
    "correctAnswer": 2
  },
  {
    "question": "The photoelectric effect demonstrates the particle nature of light, where light energy is absorbed in discrete packets called:",
    "options": ["Electrons", "Protons", "Neutrons", "Photons"],
    "correctAnswer": 3
  },
  {
    "question": "Atomic spectra are produced when electrons in atoms transition between different energy levels, emitting or absorbing:",
    "options": ["Protons", "Neutrons", "Photons", "Electrons"],
    "correctAnswer": 2
  },
  {
    "question": "The half-life of a radioactive isotope is the time it takes for ______ of the radioactive nuclei in a sample to decay.",
    "options": ["One-quarter", "Half", "Three-quarters", "All"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a medical use of radiation?",
    "options": ["Sterilization of food", "Power generation", "Diagnostic imaging (e.g., X-rays)", "Industrial welding"],
    "correctAnswer": 2
  },
  {
    "question": "The SI unit of electric current is:",
    "options": ["Volt", "Ohm", "Ampere", "Watt"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is an example of a scalar product of two vectors?",
    "options": ["Force", "Velocity", "Work", "Acceleration"],
    "correctAnswer": 2
  },
  {
    "question": "The range of a projectile launched from the ground is maximum when the launch angle is:",
    "options": ["0 degrees", "30 degrees", "45 degrees", "90 degrees"],
    "correctAnswer": 2
  },
  {
    "question": "The phenomenon of resonance occurs when the frequency of an applied force matches the ______ of a system.",
    "options": ["Amplitude", "Wavelength", "Natural frequency", "Period"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of a transverse wave?",
    "options": ["Particles oscillate parallel to wave propagation", "Requires a medium to travel", "Particles oscillate perpendicular to wave propagation", "Transfers matter as well as energy"],
    "correctAnswer": 2
  },
  {
    "question": "The SI unit of pressure is:",
    "options": ["Atmosphere", "Bar", "Pascal", "Torr"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of an ideal gas?",
    "options": ["Particles attract each other strongly", "Particles have significant volume", "Collisions between particles are perfectly elastic", "Particles move in an ordered manner"],
    "correctAnswer": 2
  },
  {
    "question": "The phenomenon of 'diffraction' refers to the:",
    "options": ["Bending of light as it passes through a medium", "Bending of light around obstacles or through small openings", "Reflection of light from a surface", "Splitting of light into its component colors"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is an application of total internal reflection?",
    "options": ["Magnifying glass", "Concave mirror", "Optical fibers", "Periscope"],
    "correctAnswer": 2
  },
  {
    "question": "The SI unit of magnetic flux is:",
    "options": ["Tesla", "Weber", "Henry", "Ampere"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of a series circuit?",
    "options": ["Voltage is the same across all components", "Current is the same through all components", "Total resistance is less than the smallest individual resistance", "Components are connected in parallel"],
    "correctAnswer": 1
  },
  {
    "question": "The concept of 'electric potential' at a point is defined as the work done in bringing a unit positive charge from infinity to that point. It is a ______ quantity.",
    "options": ["Vector", "Scalar", "Tensor", "Pseudo-vector"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of a nuclear fission reaction?",
    "options": ["Two light nuclei combine to form a heavier nucleus", "A heavy nucleus splits into two or more lighter nuclei", "Protons and neutrons are exchanged", "Electrons are transferred between atoms"],
    "correctAnswer": 1
  },
  {
    "question": "The SI unit of electric charge density is:",
    "options": ["Coulomb per meter", "Coulomb per square meter", "Coulomb per cubic meter", "Coulomb per volt"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of a uniform electric field?",
    "options": ["Electric field lines are curved", "Electric field lines are parallel and equally spaced", "Electric field strength varies with position", "Electric potential is constant everywhere"],
    "correctAnswer": 1
  },
  {
    "question": "The phenomenon of 'polarization' of light refers to the restriction of light waves to vibrate in a single plane. This property is characteristic of ______ waves.",
    "options": ["Longitudinal", "Transverse", "Sound", "Mechanical"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is an application of the Doppler effect?",
    "options": ["Fiber optics", "Medical ultrasound imaging", "Telescopes", "Microscopes"],
    "correctAnswer": 1
  },
  {
    "question": "The SI unit of magnetic field strength is:",
    "options": ["Tesla", "Ampere-turn per meter", "Weber", "Henry"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of a parallel circuit?",
    "options": ["Current is the same through all components", "Voltage is the same across all components", "Total resistance is the sum of individual resistances", "Components are connected in series"],
    "correctAnswer": 1
  },
  {
    "question": "The 'work function' in the photoelectric effect is the minimum energy required to:",
    "options": ["Ionize an atom", "Excite an electron to a higher energy level", "Eject an electron from a metal surface", "Create a photon"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of a nuclear fusion reaction?",
    "options": ["A heavy nucleus splits into lighter nuclei", "Two light nuclei combine to form a heavier nucleus", "Involves the decay of radioactive isotopes", "Requires low temperatures and pressures"],
    "correctAnswer": 1
  },
  {
    "question": "The SI unit of power of a lens is:",
    "options": ["Meter", "Centimeter", "Diopter", "Focal length"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of a simple harmonic motion (SHM)?",
    "options": ["Constant velocity", "Constant acceleration", "Restoring force proportional to displacement", "Motion in a circle"],
    "correctAnswer": 2
  },
  {
    "question": "The 'terminal velocity' of an object falling through a fluid is reached when the gravitational force is balanced by the:",
    "options": ["Buoyant force only", "Drag force only", "Buoyant force and drag force", "Normal force"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is an example of a standing wave?",
    "options": ["Ocean waves", "Sound waves in a pipe", "Light waves from the sun", "Radio waves from an antenna"],
    "correctAnswer": 1
  },
  {
    "question": "The 'refractive index' of a medium is a measure of how much the speed of light is reduced in that medium compared to its speed in a vacuum. It is a ______ quantity.",
    "options": ["Vector", "Scalar", "Dimensionless", "Unitless"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of a conductor?",
    "options": ["High electrical resistivity", "Low electrical conductivity", "Allows free flow of electrons", "Does not allow heat transfer"],
    "correctAnswer": 2
  },
  {
    "question": "The 'internal resistance' of a battery causes the terminal voltage to be ______ than its electromotive force (EMF) when current is drawn.",
    "options": ["Greater", "Less", "Equal", "Independent"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is an application of electromagnetic induction?",
    "options": ["Electric motor", "Generator", "Transformer", "All of the above"],
    "correctAnswer": 3
  },
  {
    "question": "The 'Compton effect' demonstrates the particle nature of X-rays, where X-ray photons scatter off electrons, resulting in a change in:",
    "options": ["Frequency", "Wavelength", "Speed", "Direction"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of a semiconductor?",
    "options": ["Very high conductivity", "Very low conductivity", "Conductivity between conductors and insulators", "Does not conduct electricity at all"],
    "correctAnswer": 2
  },
  {
    "question": "The 'mass-energy equivalence' principle, stated by Einstein, is given by the equation:",
    "options": ["F=ma", "E=mc²", "V=IR", "P=W/t"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a biological effect of radiation?",
    "options": ["Increased cell growth", "DNA damage", "Improved vision", "Enhanced nutrient absorption"],
    "correctAnswer": 1
  },
  {
    "question": "The 'principle of conservation of momentum' states that in an isolated system, the total momentum remains constant. This applies to:",
    "options": ["Only elastic collisions", "Only inelastic collisions", "Both elastic and inelastic collisions", "Only explosions"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of a concave lens?",
    "options": ["Thicker at the center", "Converges light rays", "Forms only real images", "Thinner at the center and diverges light rays"],
    "correctAnswer": 3
  },
  {
    "question": "The 'Doppler effect' explains the apparent change in frequency of a wave due to the relative motion between the source and the:",
    "options": ["Medium", "Observer", "Wavelength", "Amplitude"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of a gas at STP (Standard Temperature and Pressure)?",
    "options": ["Temperature of 0°C and pressure of 1 atm", "Temperature of 25°C and pressure of 1 atm", "Temperature of 0 K and pressure of 1 atm", "Temperature of 273.15 K and pressure of 101.325 kPa"],
    "correctAnswer": 3
  },
  {
    "question": "The 'Brewster's angle' is the angle of incidence at which light reflected from a surface is completely polarized. This phenomenon is related to:",
    "options": ["Diffraction", "Interference", "Refraction", "Reflection"],
    "correctAnswer": 3
  },
  {
    "question": "Which of the following is a characteristic of a superconductor?",
    "options": ["Zero electrical resistance below a critical temperature", "High electrical resistance at all temperatures", "Only conducts electricity at high temperatures", "Used as an insulator"],
    "correctAnswer": 0
  },
  {
    "question": "The 'Snell's Law' describes the relationship between the angles of incidence and refraction for light passing through an interface between two different media. It involves the:",
    "options": ["Speed of light", "Wavelength of light", "Refractive indices of the media", "Frequency of light"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of a standing wave?",
    "options": ["Transfers energy", "Has fixed nodes and antinodes", "Travels through space", "Has continuously changing amplitude"],
    "correctAnswer": 1
  },
  {
    "question": "The 'principle of moments' states that for an object to be in rotational equilibrium, the sum of clockwise moments about any point must be equal to the sum of ______ moments about the same point.",
    "options": ["Anticlockwise", "Linear", "Translational", "Net"],
    "correctAnswer": 0
  },
  {
    "question": "Which of the following is a characteristic of a nuclear reactor?",
    "options": ["Uses nuclear fusion to generate power", "Uses controlled nuclear fission to generate power", "Produces only radioactive waste", "Does not require fuel"],
    "correctAnswer": 1
  },
  {
    "question": "The 'Rutherford model' of the atom proposed that:",
    "options": ["Electrons orbit the nucleus in fixed energy levels", "Atoms are indivisible spheres", "The atom has a small, dense, positively charged nucleus", "Electrons are embedded in a positively charged sphere"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of a black body radiator?",
    "options": ["Reflects all incident radiation", "Absorbs all incident radiation", "Emits radiation only at specific wavelengths", "Has a temperature of 0 K"],
    "correctAnswer": 1
  },

  // English Questions
  {
    "question": "Choose the most appropriate synonym for 'proficient'.",
    "options": ["Incompetent", "Skilled", "Amateur", "Clumsy"],
    "correctAnswer": 1
  },
  {
    "question": "Identify the type of sentence: 'What a wonderful surprise!'",
    "options": ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
    "correctAnswer": 3
  },
  {
    "question": "Which of the following is an example of a correlative conjunction?",
    "options": ["And", "But", "Neither...nor", "Or"],
    "correctAnswer": 2
  },
  {
    "question": "Choose the correct verb tense to complete the sentence: 'She ___ her homework before dinner yesterday.'",
    "options": ["do", "does", "did", "done"],
    "correctAnswer": 2
  },
  {
    "question": "Convert the following into direct speech: 'He told me that he was tired.'",
    "options": ["He said, \"I am tired.\"", "He said, \"He is tired.\"", "He told me, \"I was tired.\"", "He said, \"I was tired.\""],
    "correctAnswer": 0
  },
  {
    "question": "Which word is an antonym of 'augment'?",
    "options": ["Increase", "Expand", "Decrease", "Enlarge"],
    "correctAnswer": 2
  },
  {
    "question": "Fill in the blank with the appropriate pronoun: 'The book is ___ on the table.'",
    "options": ["its", "it's", "their", "there"],
    "correctAnswer": 0
  },
  {
    "question": "Identify the gerund phrase in the sentence: 'Swimming in the ocean is my favorite activity.'",
    "options": ["Swimming in the ocean", "in the ocean", "my favorite activity", "is my favorite"],
    "correctAnswer": 0
  },
  {
    "question": "Which of the following sentences uses correct capitalization?",
    "options": ["I live in new york city.", "I live in New York City.", "i live in new york city.", "I live in New york city."],
    "correctAnswer": 1
  },
  {
    "question": "Choose the word that means 'to make something impure or less effective'.",
    "options": ["Purify", "Enhance", "Contaminate", "Improve"],
    "correctAnswer": 2
  },
  {
    "question": "What is the correct spelling?",
    "options": ["Occasion", "Occassion", "Ocassion", "Ocasion"],
    "correctAnswer": 0
  },
  {
    "question": "Identify the collective noun: 'A ___ of lions.'",
    "options": ["Herd", "Pack", "Pride", "Flock"],
    "correctAnswer": 2
  },
  {
    "question": "Choose the sentence with correct parallel structure:",
    "options": ["She enjoys hiking, swimming, and to cycle.", "She enjoys hiking, swimming, and cycling.", "She enjoys to hike, to swim, and cycling.", "She enjoys hiking, to swim, and to cycle."],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is an example of a metaphor?",
    "options": ["The world is like a stage.", "The world is a stage.", "He runs like a cheetah.", "She is as brave as a lion."],
    "correctAnswer": 1
  },
  {
    "question": "Choose the correct punctuation for a list of items:",
    "options": ["I need milk, eggs, and bread.", "I need milk; eggs; and bread.", "I need milk eggs and bread.", "I need: milk, eggs, and bread."],
    "correctAnswer": 0
  },
  {
    "question": "Identify the adverb of manner: 'He spoke softly to the child.'",
    "options": ["He", "spoke", "softly", "child"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is an example of an oxymoron?",
    "options": ["Jumbo shrimp", "As busy as a bee", "The early bird catches the worm", "Break a leg"],
    "correctAnswer": 0
  },
  {
    "question": "Choose the correct possessive pronoun: 'The cat licked ___ paw.'",
    "options": ["it's", "its", "their", "his"],
    "correctAnswer": 1
  },
  {
    "question": "The literary device that involves a contrast between what is said and what is actually meant is called:",
    "options": ["Irony", "Simile", "Metaphor", "Hyperbole"],
    "correctAnswer": 0
  },
  {
    "question": "Which of the following is a common error in pronoun usage?",
    "options": ["Subject-verb agreement", "Dangling modifier", "Ambiguous pronoun reference", "Run-on sentence"],
    "correctAnswer": 2
  },
  {
    "question": "Choose the word that means 'to make something better or more bearable'.",
    "options": ["Worsen", "Aggravate", "Ameliorate", "Deteriorate"],
    "correctAnswer": 2
  },
  {
    "question": "Identify the correct use of a dash:",
    "options": ["He bought a car-a red one.", "He bought a car - a red one.", "He bought a car a red one.", "He bought a car, a red one."],
    "correctAnswer": 0
  },
  {
    "question": "Which of the following is an example of a compound-complex sentence?",
    "options": ["She sings and he dances.", "Although she sings, he dances.", "She sings, and he dances when he is happy.", "She sings when she is happy."],
    "correctAnswer": 2
  },
  {
    "question": "Choose the word that means 'to express strong disapproval or disagreement'.",
    "options": ["Approve", "Commend", "Censure", "Praise"],
    "correctAnswer": 2
  },
  {
    "question": "Identify the type of clause: 'who lives next door' in the sentence 'The man who lives next door is friendly.'",
    "options": ["Independent clause", "Adverbial clause", "Adjective clause", "Noun clause"],
    "correctAnswer": 2
  }
];
