const originalQuestions = [
    // जीव विज्ञान (Biology) - 90 MCQs
    {
        "question": "Which type of cells contain a true nucleus and membrane-bound organelles?",
        "options": ["Prokaryotic cells", "Eukaryotic cells", "Bacterial cells", "Viral cells"],
        "correctAnswer": 1
    },
    {
        "question": "The process by which plants convert light energy into chemical energy is called:",
        "options": ["Respiration", "Fermentation", "Photosynthesis", "Transpiration"],
        "correctAnswer": 2
    },
    {
        "question": "What is the primary function of the cell wall in plant cells?",
        "options": ["Protein synthesis", "Energy production", "Structural support and protection", "Waste removal"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is responsible for regulating the passage of substances into and out of the cell?",
        "options": ["Cell wall", "Mitochondria", "Cell membrane", "Nucleus"],
        "correctAnswer": 2
    },
    {
        "question": "The process of maintaining a stable internal environment in an organism is known as:",
        "options": ["Metabolism", "Homeostasis", "Reproduction", "Evolution"],
        "correctAnswer": 1
    },
    {
        "question": "Which organelle is involved in the detoxification of drugs and poisons?",
        "options": ["Ribosome", "Golgi apparatus", "Smooth endoplasmic reticulum", "Lysosome"],
        "correctAnswer": 2
    },
    {
        "question": "What are the basic building blocks of nucleic acids?",
        "options": ["Amino acids", "Monosaccharides", "Nucleotides", "Fatty acids"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a characteristic of enzymes?",
        "options": ["They are consumed in reactions", "They increase activation energy", "They are highly specific", "They are inorganic molecules"],
        "correctAnswer": 2
    },
    {
        "question": "The fluid mosaic model describes the structure of the:",
        "options": ["Cell wall", "Mitochondria", "Plasma membrane", "Nucleus"],
        "correctAnswer": 2
    },
    {
        "question": "Which part of the human eye is responsible for focusing light onto the retina?",
        "options": ["Iris", "Pupil", "Lens", "Cornea"],
        "correctAnswer": 2
    },
    {
        "question": "What is the main function of red blood cells?",
        "options": ["Fighting infection", "Clotting blood", "Transporting oxygen", "Producing antibodies"],
        "correctAnswer": 2
    },
    {
        "question": "Which hormone is responsible for lowering blood glucose levels?",
        "options": ["Glucagon", "Adrenaline", "Insulin", "Thyroxine"],
        "correctAnswer": 2
    },
    {
        "question": "The process of cell division that results in two daughter cells genetically identical to the parent cell is called:",
        "options": ["Meiosis", "Mitosis", "Fertilization", "Transcription"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is a primary component of the human skeleton?",
        "options": ["Cartilage", "Ligaments", "Tendons", "Muscles"],
        "correctAnswer": 0
    },
    {
        "question": "What is the role of ribosomes in a cell?",
        "options": ["Energy production", "Lipid synthesis", "Protein synthesis", "DNA replication"],
        "correctAnswer": 2
    },
    {
        "question": "Which of these is a sexually transmitted infection caused by a bacterium?",
        "options": ["Herpes", "HIV/AIDS", "Syphilis", "Hepatitis B"],
        "correctAnswer": 2
    },
    {
        "question": "The main function of the human kidney is:",
        "options": ["Digestion of food", "Pumping blood", "Filtering waste from blood", "Producing hormones"],
        "correctAnswer": 2
    },
    {
        "question": "Which part of the brain controls involuntary actions like breathing and heart rate?",
        "options": ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
        "correctAnswer": 2
    },
    {
        "question": "What is the term for the process where organisms adapt to their environment over time?",
        "options": ["Metabolism", "Homeostasis", "Evolution", "Reproduction"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a disaccharide?",
        "options": ["Glucose", "Fructose", "Sucrose", "Galactose"],
        "correctAnswer": 2
    },
    {
        "question": "The 'fight or flight' response is primarily mediated by which part of the nervous system?",
        "options": ["Parasympathetic nervous system", "Somatic nervous system", "Central nervous system", "Sympathetic nervous system"],
        "correctAnswer": 3
    },
    {
        "question": "What is the primary role of chlorophyll in plants?",
        "options": ["Absorbing water", "Anchoring the plant", "Absorbing sunlight for photosynthesis", "Transporting nutrients"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following describes a gene?",
        "options": ["A type of protein", "A segment of RNA", "A sequence of nucleotides that codes for a polypeptide", "A carbohydrate molecule"],
        "correctAnswer": 2
    },
    {
        "question": "What is the function of the Golgi apparatus?",
        "options": ["Energy production", "Waste disposal", "Modifying, sorting, and packaging proteins and lipids", "DNA replication"],
        "correctAnswer": 2
    },
    {
        "question": "Which blood component is responsible for carrying oxygen?",
        "options": ["White blood cells", "Platelets", "Plasma", "Hemoglobin in red blood cells"],
        "correctAnswer": 3
    },
    {
        "question": "The process of breaking down food into smaller molecules for absorption is called:",
        "options": ["Respiration", "Excretion", "Digestion", "Circulation"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is an example of a prokaryotic cell?",
        "options": ["Animal cell", "Plant cell", "Fungus cell", "Bacterium"],
        "correctAnswer": 3
    },
    {
        "question": "What is the main difference between RNA and DNA?",
        "options": ["DNA is single-stranded, RNA is double-stranded", "RNA contains deoxyribose, DNA contains ribose", "RNA contains uracil, DNA contains thymine", "DNA is found in the cytoplasm, RNA in the nucleus"],
        "correctAnswer": 2
    },
    {
        "question": "Which part of the neuron transmits signals away from the cell body?",
        "options": ["Dendrite", "Axon", "Synapse", "Myelin sheath"],
        "correctAnswer": 1
    },
    {
        "question": "What is the role of ATP in living organisms?",
        "options": ["Genetic storage", "Structural support", "Energy currency of the cell", "Waste product"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a common symptom of AIDS?",
        "options": ["Sudden weight gain", "Increased immunity", "Opportunistic infections", "Enhanced appetite"],
        "correctAnswer": 2
    },
    {
        "question": "The process of gas exchange in human lungs occurs in the:",
        "options": ["Bronchi", "Trachea", "Alveoli", "Larynx"],
        "correctAnswer": 2
    },
    {
        "question": "What is the purpose of vaccination?",
        "options": ["To treat existing infections", "To provide passive immunity", "To stimulate the immune system to produce antibodies", "To suppress the immune system"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a primary characteristic of lipids?",
        "options": ["Water-soluble", "Store genetic information", "Long-term energy storage and insulation", "Catalyze reactions"],
        "correctAnswer": 2
    },
    {
        "question": "What is the function of the human heart?",
        "options": ["Filtering blood", "Producing hormones", "Pumping blood throughout the body", "Digesting food"],
        "correctAnswer": 2
    },
    {
        "question": "Which type of muscle is found in the walls of internal organs like the stomach and intestines?",
        "options": ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "Voluntary muscle"],
        "correctAnswer": 2
    },
    {
        "question": "The process of water movement through a plant and its evaporation from aerial parts is called:",
        "options": ["Photosynthesis", "Respiration", "Transpiration", "Absorption"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a characteristic of a reflex action?",
        "options": ["It is a conscious decision", "It involves the cerebrum", "It is an involuntary and rapid response", "It is learned over time"],
        "correctAnswer": 2
    },
    {
        "question": "What is the main role of the liver in the human body?",
        "options": ["Pumping blood", "Producing insulin", "Detoxification and metabolism", "Filtering air"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a polysaccharide that serves as a primary energy storage in animals?",
        "options": ["Starch", "Cellulose", "Glycogen", "Sucrose"],
        "correctAnswer": 2
    },
    {
        "question": "What is the term for a group of similar cells that work together to perform a specific function?",
        "options": ["Organ", "Organ system", "Tissue", "Organelle"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a major component of cell membranes?",
        "options": ["Carbohydrates", "Proteins", "Phospholipids", "Nucleic acids"],
        "correctAnswer": 2
    },
    {
        "question": "The process of forming blood clots is primarily carried out by:",
        "options": ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        "correctAnswer": 2
    },
    {
        "question": "Which part of the digestive system is responsible for most nutrient absorption?",
        "options": ["Stomach", "Large intestine", "Small intestine", "Esophagus"],
        "correctAnswer": 2
    },
    {
        "question": "What is the function of antibodies in the immune system?",
        "options": ["To transport oxygen", "To produce hormones", "To identify and neutralize pathogens", "To clot blood"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is an example of a cartilaginous joint?",
        "options": ["Knee joint", "Shoulder joint", "Vertebral discs", "Elbow joint"],
        "correctAnswer": 2
    },
    {
        "question": "The process of converting glucose into pyruvate is called:",
        "options": ["Krebs cycle", "Electron transport chain", "Glycolysis", "Oxidative phosphorylation"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a characteristic of viruses?",
        "options": ["They are prokaryotic cells", "They can reproduce independently", "They require a host cell to replicate", "They have a cell wall"],
        "correctAnswer": 2
    },
    {
        "question": "What is the primary role of the pancreas in digestion?",
        "options": ["Producing bile", "Absorbing water", "Secreting digestive enzymes and hormones", "Storing glucose"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a type of white blood cell involved in allergic reactions and parasitic infections?",
        "options": ["Neutrophil", "Lymphocyte", "Eosinophil", "Basophil"],
        "correctAnswer": 2
    },
    {
        "question": "The structure that connects muscles to bones is called a:",
        "options": ["Ligament", "Cartilage", "Tendon", "Joint"],
        "correctAnswer": 2
    },
    {
        "question": "What is the main function of the alveoli in the lungs?",
        "options": ["Filtering air", "Warming air", "Gas exchange", "Producing mucus"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a component of the central nervous system?",
        "options": ["Nerves", "Ganglia", "Spinal cord", "Receptors"],
        "correctAnswer": 2
    },
    {
        "question": "What is the primary function of the large intestine?",
        "options": ["Digestion of fats", "Absorption of nutrients", "Absorption of water and formation of feces", "Protein synthesis"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a fat-soluble vitamin essential for vision?",
        "options": ["Vitamin C", "Vitamin B12", "Vitamin A", "Vitamin D"],
        "correctAnswer": 2
    },
    {
        "question": "The process of releasing energy from food in the presence of oxygen is called:",
        "options": ["Anaerobic respiration", "Fermentation", "Aerobic respiration", "Glycolysis"],
        "correctAnswer": 2
    },
    {
        "question": "Which part of the plant is responsible for photosynthesis?",
        "options": ["Roots", "Stem", "Leaves", "Flowers"],
        "correctAnswer": 2
    },
    {
        "question": "What is the primary function of the human skeletal system?",
        "options": ["Producing hormones", "Digesting food", "Support, protection, and movement", "Transporting blood"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a characteristic of cardiac muscle?",
        "options": ["Voluntary control", "Found in digestive tract", "Striated and involuntary", "Non-striated"],
        "correctAnswer": 2
    },
    {
        "question": "What is the role of myelin sheath in neurons?",
        "options": ["To produce neurotransmitters", "To provide structural support", "To insulate the axon and speed up nerve impulses", "To receive signals"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a common cause of kidney stones?",
        "options": ["Excessive water intake", "High protein diet", "Accumulation of mineral salts", "Low calcium intake"],
        "correctAnswer": 2
    },
    {
        "question": "What is the primary site of protein digestion in the human body?",
        "options": ["Mouth", "Small intestine", "Stomach", "Large intestine"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following describes the process of osmosis?",
        "options": ["Movement of solutes from high to low concentration", "Movement of water across a semi-permeable membrane", "Movement of gases across a membrane", "Active transport of ions"],
        "correctAnswer": 1
    },
    {
        "question": "What is the role of insulin in the body?",
        "options": ["To increase blood sugar", "To break down fats", "To facilitate glucose uptake by cells", "To regulate blood pressure"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a component of the lymphatic system?",
        "options": ["Arteries", "Veins", "Lymph nodes", "Capillaries"],
        "correctAnswer": 2
    },
    {
        "question": "What is the primary function of the human ear?",
        "options": ["Taste", "Smell", "Hearing and balance", "Vision"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a type of joint that allows for a wide range of motion, like the shoulder?",
        "options": ["Hinge joint", "Pivot joint", "Ball-and-socket joint", "Saddle joint"],
        "correctAnswer": 2
    },
    {
        "question": "What is the main function of the cerebrum?",
        "options": ["Balance and coordination", "Involuntary actions", "Higher-order functions like thought and memory", "Regulating body temperature"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a characteristic of an enzyme inhibitor?",
        "options": ["Increases enzyme activity", "Binds to the active site and prevents substrate binding", "Changes the optimal pH of an enzyme", "Is consumed during the reaction"],
        "correctAnswer": 1
    },
    {
        "question": "What is the primary role of the diaphragm in respiration?",
        "options": ["Filtering air", "Producing sound", "Muscle contraction for breathing", "Warming air"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a common symptom of a viral infection?",
        "options": ["Localized swelling", "Fever and fatigue", "Pus formation", "Rapid healing"],
        "correctAnswer": 1
    },
    {
        "question": "What is the function of the endoplasmic reticulum?",
        "options": ["Energy production", "Protein and lipid synthesis and transport", "Waste disposal", "DNA replication"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is a product of cellular respiration?",
        "options": ["Glucose", "Oxygen", "Carbon dioxide and water", "Starch"],
        "correctAnswer": 2
    },
    {
        "question": "What is the main difference between arteries and veins?",
        "options": ["Arteries carry deoxygenated blood, veins carry oxygenated blood", "Arteries have valves, veins do not", "Arteries carry blood away from the heart, veins carry blood towards the heart", "Arteries are thinner than veins"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a primary function of the human skin?",
        "options": ["Digestion", "Respiration", "Protection and temperature regulation", "Circulation"],
        "correctAnswer": 2
    },
    {
        "question": "What is the role of bile in digestion?",
        "options": ["Breaking down carbohydrates", "Emulsifying fats", "Digesting proteins", "Absorbing water"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is a characteristic of a benign tumor?",
        "options": ["Metastasizes rapidly", "Invades surrounding tissues", "Non-cancerous and usually localized", "Always requires chemotherapy"],
        "correctAnswer": 2
    },
    {
        "question": "What is the primary function of the pituitary gland?",
        "options": ["Regulating blood sugar", "Controlling metabolism", "Producing hormones that regulate other glands", "Filtering blood"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a component of the peripheral nervous system?",
        "options": ["Brain", "Spinal cord", "Nerves extending from the brain and spinal cord", "Cerebellum"],
        "correctAnswer": 2
    },
    {
        "question": "What is the main function of platelets?",
        "options": ["Oxygen transport", "Immune defense", "Blood clotting", "Nutrient absorption"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is an example of a learned behavior?",
        "options": ["Reflex action", "Instinctive behavior", "Riding a bicycle", "Shivering in cold"],
        "correctAnswer": 2
    },
    {
        "question": "What is the primary function of the stomach in digestion?",
        "options": ["Nutrient absorption", "Water absorption", "Chemical and mechanical breakdown of food", "Bile production"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a characteristic of an autoimmune disease?",
        "options": ["The immune system attacks foreign invaders", "The immune system attacks the body's own tissues", "It is caused by a virus", "It is always curable"],
        "correctAnswer": 1
    },
    {
        "question": "What is the primary role of the kidneys in maintaining homeostasis?",
        "options": ["Producing digestive enzymes", "Regulating body temperature", "Filtering blood and regulating fluid balance", "Pumping blood"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a common mode of transmission for HIV?",
        "options": ["Casual contact", "Sharing food", "Unprotected sexual contact", "Mosquito bites"],
        "correctAnswer": 2
    },
    {
        "question": "What is the function of the vocal cords?",
        "options": ["Filtering air", "Producing sound", "Warming air", "Smelling"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is a type of immunity acquired after vaccination?",
        "options": ["Natural active immunity", "Natural passive immunity", "Artificial active immunity", "Artificial passive immunity"],
        "correctAnswer": 2
    },
    {
        "question": "What is the primary function of the thyroid gland?",
        "options": ["Regulating blood sugar", "Controlling metabolism", "Producing adrenaline", "Filtering blood"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is the smallest unit of life that can carry out all life processes?",
        "options": ["Organelle", "Molecule", "Cell", "Tissue"],
        "correctAnswer": 2
    },
    {
        "question": "What is the main function of the cerebellum?",
        "options": ["Thought and memory", "Involuntary actions", "Balance and coordination", "Sensory processing"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a characteristic of smooth muscle?",
        "options": ["Voluntary control", "Striated and voluntary", "Non-striated and involuntary", "Found in the heart"],
        "correctAnswer": 2
    },
    {
        "question": "What is the primary role of carbohydrates in the human body?",
        "options": ["Building muscles", "Genetic information storage", "Primary source of energy", "Hormone production"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a common symptom of a bacterial infection?",
        "options": ["Runny nose and cough", "Fever and localized inflammation", "Rash and itching", "Muscle weakness"],
        "correctAnswer": 1
    },
    {
        "question": "What is the function of the gallbladder?",
        "options": ["Producing bile", "Storing bile", "Digesting fats", "Absorbing nutrients"],
        "correctAnswer": 1
    },
    // रसायन विज्ञान (Chemistry) - 50 MCQs
    {
        "question": "What is the SI unit of amount of substance?",
        "options": ["Kilogram", "Mole", "Gram", "Liter"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following describes an exothermic reaction?",
        "options": ["Absorbs heat from surroundings", "Releases heat to surroundings", "Requires a catalyst", "Forms a precipitate"],
        "correctAnswer": 1
    },
    {
        "question": "According to the Kinetic Molecular Theory, gas particles are in:",
        "options": ["Fixed positions", "Slow, directed motion", "Constant, random motion", "Vibrational motion only"],
        "correctAnswer": 2
    },
    {
        "question": "What is the pH of a neutral solution at 25°C?",
        "options": ["0", "7", "14", "Depends on concentration"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is a strong acid?",
        "options": ["Acetic acid", "Hydrochloric acid", "Carbonic acid", "Citric acid"],
        "correctAnswer": 1
    },
    {
        "question": "What is the oxidation state of oxygen in most compounds?",
        "options": ["+1", "-1", "-2", "+2"],
        "correctAnswer": 2
    },
    {
        "question": "Which type of bonding involves the sharing of electrons between atoms?",
        "options": ["Ionic bonding", "Metallic bonding", "Covalent bonding", "Hydrogen bonding"],
        "correctAnswer": 2
    },
    {
        "question": "What happens to the volume of a gas when its temperature is increased at constant pressure?",
        "options": ["Decreases", "Increases", "Remains constant", "First decreases then increases"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is an example of a physical change?",
        "options": ["Burning wood", "Rusting iron", "Melting ice", "Baking a cake"],
        "correctAnswer": 2
    },
    {
        "question": "What is the electron configuration of Nitrogen (atomic number 7)?",
        "options": ["1s²2s²2p³", "1s²2s²2p⁴", "1s²2s²2p⁵", "1s²2s²2p⁶"],
        "correctAnswer": 0
    },
    {
        "question": "Which principle states that an electron occupies the lowest energy orbital that can receive it?",
        "options": ["Hund's Rule", "Pauli Exclusion Principle", "Aufbau Principle", "Heisenberg Uncertainty Principle"],
        "correctAnswer": 2
    },
    {
        "question": "What is the limiting reactant in a chemical reaction?",
        "options": ["The reactant present in excess", "The reactant that determines the amount of product formed", "The product that is formed first", "The catalyst in the reaction"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is a characteristic of a buffer solution?",
        "options": ["It changes pH rapidly", "It resists changes in pH", "It is always acidic", "It is always basic"],
        "correctAnswer": 1
    },
    {
        "question": "What is the term for the energy required to remove an electron from a gaseous atom?",
        "options": ["Electron affinity", "Electronegativity", "Ionization energy", "Bond energy"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is an organic compound?",
        "options": ["NaCl", "H₂O", "CH₄", "CO₂"],
        "correctAnswer": 2
    },
    {
        "question": "What is the shape of a molecule with two bonding pairs and no lone pairs around the central atom (e.g., CO₂)?",
        "options": ["Bent", "Trigonal planar", "Linear", "Tetrahedral"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following factors increases the rate of a chemical reaction?",
        "options": ["Decreasing temperature", "Decreasing concentration of reactants", "Adding a catalyst", "Increasing product concentration"],
        "correctAnswer": 2
    },
    {
        "question": "What is the common ion effect?",
        "options": ["The effect of temperature on ion solubility", "The decrease in solubility of an ionic compound when a common ion is added", "The increase in solubility of an ionic compound when a common ion is added", "The effect of pressure on ion solubility"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is a property of ionic compounds?",
        "options": ["Low melting points", "Good conductors of electricity in solid state", "Form discrete molecules", "High melting points"],
        "correctAnswer": 3
    },
    {
        "question": "What is the SI unit of pressure?",
        "options": ["Atmosphere", "Millimeter of mercury", "Pascal", "Bar"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is an example of an alkene?",
        "options": ["Ethane", "Ethene", "Ethyne", "Benzene"],
        "correctAnswer": 1
    },
    {
        "question": "What is the process of converting an aldehyde to an alcohol called?",
        "options": ["Oxidation", "Reduction", "Esterification", "Hydrolysis"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is a characteristic of a strong base?",
        "options": ["Partially dissociates in water", "Completely dissociates in water", "Does not react with acids", "Forms a covalent bond with water"],
        "correctAnswer": 1
    },
    {
        "question": "What is the molecular formula of glucose?",
        "options": ["C₅H₁₀O₅", "C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₃H₆O₃"],
        "correctAnswer": 1
    },
    {
        "question": "Which type of intermolecular force is present in all molecules?",
        "options": ["Hydrogen bonding", "Dipole-dipole forces", "London dispersion forces", "Ionic forces"],
        "correctAnswer": 2
    },
    {
        "question": "What is the primary product of the complete combustion of hydrocarbons?",
        "options": ["Carbon monoxide and water", "Carbon dioxide and water", "Soot and water", "Hydrogen and oxygen"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is a characteristic of an ideal gas?",
        "options": ["Has strong intermolecular forces", "Particles have significant volume", "Particles undergo elastic collisions", "Can be easily liquefied"],
        "correctAnswer": 2
    },
    {
        "question": "What is the purpose of a salt bridge in an electrochemical cell?",
        "options": ["To provide a path for electron flow", "To allow ion migration and maintain charge neutrality", "To separate the anode and cathode", "To generate electricity"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is a transition metal?",
        "options": ["Sodium", "Calcium", "Iron", "Aluminum"],
        "correctAnswer": 2
    },
    {
        "question": "What is the definition of a chemical equilibrium?",
        "options": ["A state where reactants are completely consumed", "A state where the rate of the forward reaction equals the rate of the reverse reaction", "A state where the concentration of products is zero", "A state where the reaction has stopped"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is an example of an addition polymer?",
        "options": ["Nylon", "Polyester", "Polyethylene", "Protein"],
        "correctAnswer": 2
    },
    {
        "question": "What is the primary functional group in carboxylic acids?",
        "options": ["Hydroxyl group", "Carbonyl group", "Carboxyl group", "Amino group"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following best describes resonance in organic chemistry?",
        "options": ["The rapid interconversion of isomers", "The delocalization of electrons within a molecule", "The formation of multiple bonds", "The breaking of chemical bonds"],
        "correctAnswer": 1
    },
    {
        "question": "What is the effect of increasing pressure on a gaseous equilibrium where the number of moles of gas decreases?",
        "options": ["Shifts to the left", "Shifts to the right", "No effect", "Increases temperature"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is a characteristic of a strong electrolyte?",
        "options": ["Does not conduct electricity", "Partially ionizes in solution", "Completely ionizes in solution", "Forms a precipitate"],
        "correctAnswer": 2
    },
    {
        "question": "What is the shape of a water molecule (H₂O)?",
        "options": ["Linear", "Trigonal planar", "Bent", "Tetrahedral"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is an example of a nucleophilic substitution reaction?",
        "options": ["Addition of H₂ to an alkene", "Reaction of an alkyl halide with a hydroxide ion", "Combustion of methane", "Dehydration of an alcohol"],
        "correctAnswer": 1
    },
    {
        "question": "What is the definition of enthalpy of reaction?",
        "options": ["The change in temperature during a reaction", "The heat absorbed or released during a reaction at constant pressure", "The work done by a system", "The change in entropy during a reaction"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following elements belongs to the s-block?",
        "options": ["Carbon", "Oxygen", "Magnesium", "Chlorine"],
        "correctAnswer": 2
    },
    {
        "question": "What is the primary difference between a sigma ($\sigma$) bond and a pi ($\pi$) bond?",
        "options": ["Sigma bonds are weaker than pi bonds", "Sigma bonds are formed by side-to-side overlap, pi bonds by head-on overlap", "Sigma bonds allow free rotation, pi bonds restrict rotation", "Pi bonds are always single bonds"],
        "correctAnswer": 2
    },
    {
        "question": "What is the name of the process that converts an alcohol to an ether?",
        "options": ["Oxidation", "Reduction", "Dehydration", "Hydrolysis"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a characteristic of a crystalline solid?",
        "options": ["Random arrangement of particles", "Definite melting point", "No fixed shape", "High compressibility"],
        "correctAnswer": 1
    },
    {
        "question": "What is the primary role of enzymes as biocatalysts?",
        "options": ["To increase the activation energy of reactions", "To shift the equilibrium of reactions", "To speed up biochemical reactions without being consumed", "To produce energy for reactions"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is an example of a redox reaction?",
        "options": ["Acid-base neutralization", "Precipitation reaction", "Combustion of methane", "Dissolving salt in water"],
        "correctAnswer": 2
    },
    {
        "question": "What is the term for the measure of a liquid's resistance to flow?",
        "options": ["Density", "Viscosity", "Surface tension", "Vapor pressure"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is a common method for preparing alkynes?",
        "options": ["Hydrogenation of alkenes", "Elimination reactions of dihaloalkanes", "Oxidation of alcohols", "Addition of water to alkenes"],
        "correctAnswer": 1
    },
    {
        "question": "What is the primary difference between an alcohol and a phenol?",
        "options": ["Alcohols are acidic, phenols are basic", "Alcohols have an -OH group attached to an aliphatic carbon, phenols have an -OH group attached to an aromatic ring", "Alcohols are soluble in water, phenols are not", "Alcohols are toxic, phenols are not"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is an example of an aldehyde?",
        "options": ["Acetone", "Ethanol", "Formaldehyde", "Acetic acid"],
        "correctAnswer": 2
    },
    {
        "question": "What is the definition of bond energy?",
        "options": ["The energy released when a bond is formed", "The energy required to break a bond", "The energy stored in a bond", "The energy of electron repulsion"],
        "correctAnswer": 1
    },
    {
        "question": "In an electrochemical cell, what is the process that occurs at the anode?",
        "options": ["Reduction", "Oxidation", "Neutralization", "Precipitation"],
        "correctAnswer": 1
    },
    // भौतिक विज्ञान (Physics) - 40 MCQs
    {
        "question": "Which of the following is a scalar quantity?",
        "options": ["Velocity", "Acceleration", "Force", "Mass"],
        "correctAnswer": 3
    },
    {
        "question": "What is the SI unit of force?",
        "options": ["Joule", "Watt", "Newton", "Pascal"],
        "correctAnswer": 2
    },
    {
        "question": "According to Newton's First Law of Motion, an object at rest tends to stay at rest, and an object in motion tends to stay in motion with the same speed and in the same direction unless acted upon by an unbalanced force. This is also known as the law of:",
        "options": ["Action-reaction", "Acceleration", "Inertia", "Conservation of momentum"],
        "correctAnswer": 2
    },
    {
        "question": "What is the formula for kinetic energy?",
        "options": ["mgh", "1/2mv²", "F x d", "P/t"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following best describes projectile motion?",
        "options": ["Motion in a straight line", "Motion under constant velocity", "Two-dimensional motion under the influence of gravity only", "Circular motion at constant speed"],
        "correctAnswer": 2
    },
    {
        "question": "What is the SI unit of power?",
        "options": ["Joule", "Newton", "Watt", "Volt"],
        "correctAnswer": 2
    },
    {
        "question": "According to Bernoulli's principle, an increase in the speed of a fluid is accompanied by a decrease in its:",
        "options": ["Density", "Viscosity", "Pressure", "Temperature"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a transverse wave?",
        "options": ["Sound wave", "Ocean wave", "Light wave", "Seismic P-wave"],
        "correctAnswer": 2
    },
    {
        "question": "What is the SI unit of electric current?",
        "options": ["Volt", "Ohm", "Ampere", "Watt"],
        "correctAnswer": 2
    },
    {
        "question": "What happens to the resistance of a conductor as its temperature increases?",
        "options": ["Decreases", "Increases", "Remains constant", "First decreases then increases"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is a characteristic of a series circuit?",
        "options": ["Voltage is the same across all components", "Current is the same through all components", "Total resistance is less than the smallest individual resistance", "Components are connected in parallel"],
        "correctAnswer": 1
    },
    {
        "question": "What is the phenomenon where light bends as it passes from one medium to another?",
        "options": ["Reflection", "Diffraction", "Refraction", "Interference"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following describes the magnetic field lines around a current-carrying wire?",
        "options": ["Parallel to the wire", "Perpendicular to the wire", "Concentric circles around the wire", "Radiating outwards from the wire"],
        "correctAnswer": 2
    },
    {
        "question": "What is the SI unit of electric potential difference?",
        "options": ["Ampere", "Ohm", "Volt", "Coulomb"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a characteristic of a perfectly elastic collision?",
        "options": ["Kinetic energy is lost", "Momentum is not conserved", "Both kinetic energy and momentum are conserved", "Objects stick together after collision"],
        "correctAnswer": 2
    },
    {
        "question": "What is the SI unit of electric charge?",
        "options": ["Ampere", "Volt", "Coulomb", "Farad"],
        "correctAnswer": 2
    },
    {
        "question": "According to the law of conservation of energy:",
        "options": ["Energy can be created but not destroyed", "Energy can be destroyed but not created", "Energy can be transformed from one form to another but not created or destroyed", "Energy is always lost as heat"],
        "correctAnswer": 2
    },
    {
        "question": "What is the SI unit of frequency?",
        "options": ["Meter", "Second", "Hertz", "Newton"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following describes a standing wave?",
        "options": ["A wave that transfers energy", "A wave that moves through a medium", "A wave that appears to be stationary with fixed nodes and antinodes", "A wave that travels in one direction only"],
        "correctAnswer": 2
    },
    {
        "question": "What is the SI unit of magnetic flux?",
        "options": ["Tesla", "Weber", "Henry", "Ampere"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is a characteristic of an AC circuit?",
        "options": ["Current flows in one direction only", "Voltage is constant", "Current direction periodically reverses", "Used primarily for battery charging"],
        "correctAnswer": 2
    },
    {
        "question": "What is the primary function of a transformer?",
        "options": ["To convert AC to DC", "To change the voltage of an AC supply", "To store electric charge", "To measure electric current"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following describes the photoelectric effect?",
        "options": ["Emission of light from a heated object", "Emission of electrons when light shines on a material", "Bending of light around obstacles", "Reflection of light from a surface"],
        "correctAnswer": 1
    },
    {
        "question": "What is the SI unit of resistance?",
        "options": ["Volt", "Ampere", "Ohm", "Watt"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following describes the composition of an atomic nucleus?",
        "options": ["Electrons only", "Protons and electrons", "Neutrons only", "Protons and neutrons"],
        "correctAnswer": 3
    },
    {
        "question": "What is the term for the time it takes for half of the radioactive nuclei in a sample to decay?",
        "options": ["Decay constant", "Half-life", "Mean life", "Activity"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is a common medical use of radiation?",
        "options": ["Sterilizing food", "Generating electricity", "Medical imaging and cancer therapy", "Water purification"],
        "correctAnswer": 2
    },
    {
        "question": "What is the SI unit of work?",
        "options": ["Watt", "Newton", "Joule", "Pascal"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following describes the law of reflection?",
        "options": ["Light bends as it enters a new medium", "The angle of incidence equals the angle of reflection", "Light spreads out after passing through a narrow opening", "Light is absorbed by a surface"],
        "correctAnswer": 1
    },
    {
        "question": "What is the SI unit of angular displacement?",
        "options": ["Degree", "Revolution", "Radian", "Meter"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a characteristic of simple harmonic motion (SHM)?",
        "options": ["Constant velocity", "Constant acceleration", "Restoring force proportional to displacement", "Motion in a straight line only"],
        "correctAnswer": 2
    },
    {
        "question": "What is the SI unit of electric field intensity?",
        "options": ["Volt", "Newton per Coulomb", "Joule per Coulomb", "Ampere per meter"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following describes the principle of superposition for waves?",
        "options": ["Waves always cancel each other out", "Waves always reinforce each other", "When two or more waves overlap, the resultant displacement is the vector sum of the individual displacements", "Waves can only travel in a straight line"],
        "correctAnswer": 2
    },
    {
        "question": "What is the SI unit of capacitance?",
        "options": ["Volt", "Ohm", "Farad", "Coulomb"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a characteristic of a P-N junction diode in forward bias?",
        "options": ["High resistance", "Allows current to flow easily", "Blocks current flow", "Acts as an insulator"],
        "correctAnswer": 1
    },
    {
        "question": "What is the SI unit of momentum?",
        "options": ["Newton", "Joule", "Kilogram meter per second", "Watt"],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following describes the concept of thermal equilibrium?",
        "options": ["Two objects at different temperatures", "No net heat transfer between objects in contact", "Heat flows from cold to hot", "Objects always expand when heated"],
        "correctAnswer": 1
    },
    {
        "question": "What is the SI unit of magnetic flux density?",
        "options": ["Weber", "Tesla", "Henry", "Gauss"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following best describes the electromagnetic spectrum?",
        "options": ["A range of sound waves", "A range of light waves only", "A continuous range of electromagnetic waves varying in wavelength and frequency", "A spectrum of visible colors"],
        "correctAnswer": 2
    },
    {
        "question": "What is the SI unit of specific heat capacity?",
        "options": ["Joule per kilogram", "Joule per Kelvin", "Joule per kilogram Kelvin", "Watt per Kelvin"],
        "correctAnswer": 2
    },
    // अंग्रेजी (English) - 10 MCQs
    {
        "question": "Choose the word that is a synonym of 'ubiquitous'.",
        "options": ["Rare", "Scarce", "Pervasive", "Limited"],
        "correctAnswer": 2
    },
    {
        "question": "Identify the correct sentence structure:",
        "options": ["He run fast.", "He runs fast.", "Him run fast.", "He running fast."],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is an example of a simile?",
        "options": ["The car was a beast.", "She sings like an angel.", "Time flies.", "The wind whispered secrets."],
        "correctAnswer": 1
    },
    {
        "question": "Choose the antonym of 'benevolent'.",
        "options": ["Kind", "Generous", "Malevolent", "Compassionate"],
        "correctAnswer": 2
    },
    {
        "question": "Identify the sentence with the correct use of a comma:",
        "options": ["She bought apples oranges and bananas.", "She bought apples, oranges, and bananas.", "She, bought apples oranges and bananas.", "She bought, apples oranges and bananas."],
        "correctAnswer": 1
    },
    {
        "question": "Which word correctly completes the sentence: 'The team was ______ by their captain.'",
        "options": ["lead", "led", "lled", "leed"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is a common error in subject-verb agreement?",
        "options": ["The cat sleeps.", "The cats sleeps.", "The cats sleep.", "The cat sleep."],
        "correctAnswer": 1
    },
    {
        "question": "Choose the word that means 'to make something worse'.",
        "options": ["Ameliorate", "Improve", "Exacerbate", "Mitigate"],
        "correctAnswer": 2
    },
    {
        "question": "Identify the correct use of an apostrophe:",
        "options": ["The boys' hat.", "The boy's hat.", "The boys hat's.", "The boy hat's."],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following sentences uses the passive voice?",
        "options": ["The dog chased the cat.", "The cat was chased by the dog.", "The dog is chasing the cat.", "The cat chases the dog."],
        "correctAnswer": 1
    },
    // तार्किक क्षमता (Logical Reasoning) - 10 MCQs
    {
        "question": "What comes next in the series: 1, 4, 9, 16, ___?",
        "options": ["20", "25", "30", "36"],
        "correctAnswer": 1
    },
    {
        "question": "If all A are B, and all B are C, then which of the following statements must be true?",
        "options": ["Some A are C.", "No A are C.", "All A are C.", "Some C are not B."],
        "correctAnswer": 2
    },
    {
        "question": "Which number is the odd one out: 2, 3, 5, 7, 9, 11?",
        "options": ["2", "5", "9", "11"],
        "correctAnswer": 2
    },
    {
        "question": "If 'CAT' is coded as 'DDU', how would 'DOG' be coded?",
        "options": ["EPG", "EQH", "EPH", "EQI"],
        "correctAnswer": 2
    },
    {
        "question": "A is taller than B. C is shorter than B. D is taller than A. Who is the tallest?",
        "options": ["A", "B", "C", "D"],
        "correctAnswer": 3
    },
    {
        "question": "What comes next in the series: Z, Y, X, W, ___?",
        "options": ["U", "V", "T", "S"],
        "correctAnswer": 1
    },
    {
        "question": "If 'pen' is 'pencil', 'pencil' is 'eraser', and 'eraser' is 'book', what do you write with?",
        "options": ["Pen", "Pencil", "Eraser", "Book"],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is the cause of 'wet roads'?",
        "options": ["Sunny weather", "Rainfall", "Dry winds", "High temperature"],
        "correctAnswer": 1
    },
    {
        "question": "If you are looking for a solution to reduce traffic congestion, which of the following would be the most logical course of action?",
        "options": ["Encourage more people to buy cars.", "Build more roads in rural areas.", "Promote public transportation and carpooling.", "Increase parking fees in residential areas."],
        "correctAnswer": 2
    },
    {
        "question": "What comes next in the series: 1, 2, 4, 7, 11, ___?",
        "options": ["15", "16", "17", "18"],
        "correctAnswer": 2
    }
];
