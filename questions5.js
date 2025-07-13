// ===== Biology (80 MCQs) =====
const originalQuestions = [
  {
    "question": "Which type of virus has RNA as its genetic material and uses reverse transcriptase to synthesize DNA?",
    "options": ["Bacteriophage", "Retrovirus", "Adenovirus", "Herpesvirus"],
    "correctAnswer": 1
  },
  {
    "question": "What is the primary role of ATP in cellular activities?",
    "options": ["Structural support", "Genetic information storage", "Energy transfer", "Waste removal"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a key difference between DNA and RNA?",
    "options": ["DNA is single-stranded, RNA is double-stranded.", "DNA contains uracil, RNA contains thymine.", "DNA has deoxyribose sugar, RNA has ribose sugar.", "DNA is found only in the nucleus, RNA only in the cytoplasm."],
    "correctAnswer": 2
  },
  {
    "question": "Which organelle is responsible for synthesizing lipids and detoxifying drugs?",
    "options": ["Rough Endoplasmic Reticulum", "Smooth Endoplasmic Reticulum", "Lysosome", "Peroxisome"],
    "correctAnswer": 1
  },
  {
    "question": "The process by which a cell engulfs large particles or other cells is called:",
    "options": ["Pinocytosis", "Exocytosis", "Phagocytosis", "Osmosis"],
    "correctAnswer": 2
  },
  {
    "question": "Which part of the human brain is primarily involved in processing sensory information and relaying it to the appropriate cortical areas?",
    "options": ["Cerebellum", "Hypothalamus", "Thalamus", "Medulla Oblongata"],
    "correctAnswer": 2
  },
  {
    "question": "Enzymes function optimally within a narrow range of temperature and pH. What happens to an enzyme if the temperature goes significantly above its optimum?",
    "options": ["Its activity increases indefinitely.", "It becomes denatured and loses its function.", "It converts into a different enzyme.", "It starts synthesizing new substrates."],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of homologous chromosomes?",
    "options": ["They carry different genes.", "They are identical copies of each other.", "They are similar in size and carry genes for the same traits at the same loci.", "They are only found in prokaryotic cells."],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a long-term effect of chronic smoking on the respiratory system?",
    "options": ["Increased lung capacity", "Reduced mucus production", "Emphysema and chronic bronchitis", "Improved oxygen absorption"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a water-soluble vitamin required for collagen synthesis and acts as an antioxidant?",
    "options": ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin K"],
    "correctAnswer": 2
  },
  {
    "question": "The 'fluid mosaic model' of the cell membrane suggests that:",
    "options": ["The membrane is a rigid, static structure.", "Proteins are embedded in a fluid bilayer of lipids and can move laterally.", "Carbohydrates form the primary structure of the membrane.", "The membrane is impermeable to all substances."],
    "correctAnswer": 1
  },
  {
    "question": "Which type of immunity involves the production of antibodies by the body's own immune system after exposure to an antigen?",
    "options": ["Passive immunity", "Innate immunity", "Active immunity", "Artificial immunity"],
    "correctAnswer": 2
  },
  {
    "question": "What is the primary function of the large intestine?",
    "options": ["Digestion of fats", "Absorption of nutrients", "Absorption of water and formation of feces", "Protein synthesis"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of cardiac muscle tissue?",
    "options": ["Voluntary control and non-striated", "Involuntary control and striated", "Voluntary control and multinucleated", "Involuntary control and smooth"],
    "correctAnswer": 1
  },
  {
    "question": "The process of 'transcription' in molecular biology refers to the synthesis of:",
    "options": ["Protein from RNA", "DNA from RNA", "RNA from DNA", "DNA from protein"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is an example of a monosaccharide?",
    "options": ["Sucrose", "Lactose", "Fructose", "Starch"],
    "correctAnswer": 2
  },
  {
    "question": "The 'fight or flight' response is primarily mediated by the release of which hormone?",
    "options": ["Insulin", "Thyroxine", "Adrenaline (Epinephrine)", "Estrogen"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a common symptom of hepatitis B?",
    "options": ["Sudden weight loss", "Jaundice and fatigue", "Increased appetite", "Improved vision"],
    "correctAnswer": 1
  },
  {
    "question": "Which part of the neuron is typically responsible for transmitting signals to other neurons or effector cells?",
    "options": ["Dendrite", "Cell body", "Axon", "Synapse"],
    "correctAnswer": 2
  },
  {
    "question": "The process of 'glycolysis' occurs in the cytoplasm and involves the breakdown of glucose into:",
    "options": ["Lactic acid", "Pyruvate", "Acetyl-CoA", "Ethanol"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of a plant cell but not an animal cell?",
    "options": ["Mitochondria", "Cell membrane", "Chloroplasts", "Nucleus"],
    "correctAnswer": 2
  },
  {
    "question": "What is the main function of the human spleen?",
    "options": ["Producing digestive enzymes", "Filtering blood and removing old red blood cells", "Regulating body temperature", "Storing urine"],
    "correctAnswer": 1
  },
  {
    "question": "The 'Law of Independent Assortment' states that alleles for different genes assort independently of one another in gamete formation. This applies to genes located on:",
    "options": ["The same chromosome", "Different chromosomes", "Sex chromosomes only", "Mitochondrial DNA"],
    "correctAnswer": 1
  },
  {
    "question": "What is the primary function of the alveoli in the human lungs?",
    "options": ["Filtering inhaled air", "Warming and moistening air", "Gas exchange (oxygen and carbon dioxide)", "Producing mucus"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following describes the process of 'active transport' across a cell membrane?",
    "options": ["Movement of substances down their concentration gradient without energy.", "Movement of water across a semi-permeable membrane.", "Movement of substances against their concentration gradient, requiring energy.", "Movement of large particles by engulfment."],
    "correctAnswer": 2
  },
  {
    "question": "The 'pituitary gland' is often called the 'master gland' because it:",
    "options": ["Controls blood sugar levels", "Regulates body temperature", "Secretes hormones that control other endocrine glands", "Produces digestive enzymes"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of an autoimmune disease?",
    "options": ["The immune system attacks foreign invaders.", "The immune system attacks the body's own healthy tissues.", "It is always caused by a bacterial infection.", "It is always curable with antibiotics."],
    "correctAnswer": 1
  },
  {
    "question": "What is the primary function of the human skeletal system?",
    "options": ["Producing hormones", "Digesting food", "Providing support, protection, and enabling movement", "Transporting blood"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a type of joint that allows for movement in one plane, like the elbow or knee?",
    "options": ["Ball-and-socket joint", "Pivot joint", "Hinge joint", "Saddle joint"],
    "correctAnswer": 2
  },
  {
    "question": "The process of 'photosynthesis' in plants primarily occurs in which organelle?",
    "options": ["Mitochondria", "Nucleus", "Chloroplast", "Ribosome"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a component of the human circulatory system that carries oxygenated blood from the lungs to the heart?",
    "options": ["Pulmonary artery", "Aorta", "Pulmonary vein", "Vena cava"],
    "correctAnswer": 2
  },
  {
    "question": "What is the primary function of the human liver?",
    "options": ["Producing insulin", "Filtering blood, detoxifying chemicals, and producing bile", "Pumping blood", "Producing digestive enzymes"],
    "correctAnswer": 1
  },
  {
    "question": "The process of 'cellular respiration' in eukaryotic cells primarily takes place in the:",
    "options": ["Cytoplasm and nucleus", "Mitochondria and cytoplasm", "Chloroplasts and mitochondria", "Ribosomes and Golgi apparatus"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a structural protein found in connective tissues, skin, and bones?",
    "options": ["Hemoglobin", "Insulin", "Collagen", "Actin"],
    "correctAnswer": 2
  },
  {
    "question": "What is the primary function of the human ear?",
    "options": ["Taste and smell", "Hearing and balance", "Vision and touch", "Speech and swallowing"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a common cause of Type 1 Diabetes Mellitus?",
    "options": ["High sugar diet", "Obesity", "Autoimmune destruction of pancreatic beta cells", "Lack of exercise"],
    "correctAnswer": 2
  },
  {
    "question": "The 'hypothalamus' in the brain plays a crucial role in regulating:",
    "options": ["Voluntary movements", "Memory and learning", "Body temperature, hunger, and thirst", "Visual processing"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of a virus?",
    "options": ["It is a prokaryotic cell.", "It can reproduce independently outside a host cell.", "It consists of genetic material (DNA or RNA) enclosed in a protein coat.", "It has a cell wall and ribosomes."],
    "correctAnswer": 2
  },
  {
    "question": "What is the primary role of the 'thymus gland' in the immune system?",
    "options": ["Producing antibodies", "Filtering blood", "Maturing T-lymphocytes", "Storing red blood cells"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a polysaccharide that serves as the primary structural component of plant cell walls?",
    "options": ["Starch", "Glycogen", "Cellulose", "Chitin"],
    "correctAnswer": 2
  },
  {
    "question": "The process of 'meiosis' results in the formation of:",
    "options": ["Two diploid daughter cells", "Four haploid daughter cells", "Two genetically identical daughter cells", "A single polyploid cell"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of a 'reflex arc'?",
    "options": ["It involves conscious thought and decision-making.", "It is a slow, voluntary response.", "It is an involuntary and rapid response to a stimulus.", "It always involves the cerebrum."],
    "correctAnswer": 2
  },
  {
    "question": "What is the primary function of the 'gallbladder'?",
    "options": ["Producing bile", "Storing and concentrating bile", "Digesting fats", "Absorbing nutrients"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a common cause of 'anemia'?",
    "options": ["Excessive iron intake", "Increased red blood cell production", "Deficiency of iron or vitamin B12", "Overactive immune system"],
    "correctAnswer": 2
  },
  {
    "question": "The 'glomerulus' in the kidney is a network of capillaries primarily responsible for:",
    "options": ["Reabsorbing water", "Filtering blood", "Secreting hormones", "Producing urine"],
    "correctAnswer": 1
  },
  {
    "question": "What is the primary role of 'enzymes' in biological reactions?",
    "options": ["To increase the activation energy", "To act as structural components of the cell", "To speed up reactions by lowering activation energy", "To store genetic information"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a common sexually transmitted infection caused by a bacterium?",
    "options": ["Herpes simplex virus", "Human papillomavirus (HPV)", "Chlamydia", "HIV"],
    "correctAnswer": 2
  },
  {
    "question": "The 'central nervous system' consists of the:",
    "options": ["Nerves and ganglia", "Brain and spinal cord", "Sensory receptors and motor neurons", "Autonomic and somatic nervous systems"],
    "correctAnswer": 1
  },
  {
    "question": "What is the primary function of 'platelets' in the blood?",
    "options": ["Transporting oxygen", "Fighting infections", "Blood clotting", "Producing antibodies"],
    "correctAnswer": 2
  },
  {
    "question": "The process of 'transpiration' in plants involves the:",
    "options": ["Absorption of water by roots", "Synthesis of food", "Evaporation of water from aerial parts", "Transport of nutrients"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a 'fat-soluble vitamin' essential for blood clotting?",
    "options": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin K"],
    "correctAnswer": 3
  },
  {
    "question": "What is the primary function of the 'trachea' in the human respiratory system?",
    "options": ["Gas exchange", "Voice production", "Transporting air to and from the lungs", "Filtering blood"],
    "correctAnswer": 2
  },
  {
    "question": "The 'Law of Segregation' in genetics states that during gamete formation, each gene's alleles separate so that each gamete carries only one allele for each gene. This leads to a phenotypic ratio of ______ in a monohybrid cross.",
    "options": ["1:1", "3:1", "9:3:3:1", "1:2:1"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a 'disaccharide' composed of glucose and fructose?",
    "options": ["Lactose", "Maltose", "Sucrose", "Cellulose"],
    "correctAnswer": 2
  },
  {
    "question": "The 'myelin sheath' around some axons in neurons primarily functions to:",
    "options": ["Produce neurotransmitters", "Provide structural support", "Insulate the axon and speed up nerve impulse transmission", "Receive signals from other neurons"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a common cause of 'osteoporosis'?",
    "options": ["Excessive calcium intake", "Increased bone density", "Loss of bone density, making bones brittle", "Overproduction of collagen"],
    "correctAnswer": 2
  },
  {
    "question": "What is the primary function of the 'adrenal glands'?",
    "options": ["Regulating blood sugar", "Producing stress hormones (e.g., adrenaline)", "Filtering blood", "Producing digestive enzymes"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is an example of a 'polysaccharide' used for energy storage in animals?",
    "options": ["Starch", "Cellulose", "Glycogen", "Sucrose"],
    "correctAnswer": 2
  },
  {
    "question": "The 'pulmonary artery' carries:",
    "options": ["Oxygenated blood to the body", "Deoxygenated blood to the lungs", "Oxygenated blood to the heart", "Deoxygenated blood from the body"],
    "correctAnswer": 1
  },
  {
    "question": "What is the primary function of 'antibodies' in the immune system?",
    "options": ["Transporting oxygen", "Producing hormones", "Identifying and neutralizing pathogens", "Clotting blood"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a common symptom of 'malaria'?",
    "options": ["Sudden weight gain", "Chronic cough", "Recurrent fevers, chills, and flu-like illness", "Skin rash"],
    "correctAnswer": 2
  },
  {
    "question": "What is the primary function of the 'epidermis' in the human skin?",
    "options": ["Producing sweat", "Providing structural support", "Protection against pathogens and UV radiation", "Storing fat"],
    "correctAnswer": 2
  },
  {
    "question": "The 'somatic nervous system' controls:",
    "options": ["Involuntary actions of internal organs", "Voluntary movements of skeletal muscles", "Hormone secretion", "Digestion and heart rate"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a common cause of 'tuberculosis'?",
    "options": ["Virus", "Bacterium (Mycobacterium tuberculosis)", "Fungus", "Parasite"],
    "correctAnswer": 1
  },
  {
    "question": "What is the primary function of the 'lymph nodes' in the lymphatic system?",
    "options": ["Producing red blood cells", "Filtering lymph and trapping pathogens", "Pumping lymph throughout the body", "Storing excess fluid"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a 'water-soluble vitamin' that plays a role in energy metabolism?",
    "options": ["Vitamin A", "Vitamin B1 (Thiamine)", "Vitamin D", "Vitamin K"],
    "correctAnswer": 1
  },
  {
    "question": "The 'urinary bladder' primarily functions to:",
    "options": ["Filter blood", "Produce urine", "Store urine temporarily", "Transport urine to the outside"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a 'monosaccharide' that is the primary source of energy for brain cells?",
    "options": ["Fructose", "Galactose", "Glucose", "Sucrose"],
    "correctAnswer": 2
  },
  {
    "question": "The 'cornea' of the eye is primarily responsible for:",
    "options": ["Controlling the amount of light entering the eye", "Focusing light onto the retina", "Protecting the eye and initiating light refraction", "Detecting color vision"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is an example of a 'hormone' that regulates blood pressure?",
    "options": ["Insulin", "Glucagon", "Aldosterone", "Thyroxine"],
    "correctAnswer": 2
  },
  {
    "question": "The process of 'fermentation' in yeast produces:",
    "options": ["Lactic acid and oxygen", "Ethanol and carbon dioxide", "Water and ATP", "Glucose and oxygen"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of 'ligaments'?",
    "options": ["Connect muscles to bones", "Connect bones to bones", "Provide structural support to cells", "Produce movement"],
    "correctAnswer": 1
  },
  {
    "question": "What is the primary function of the 'dendrites' of a neuron?",
    "options": ["Transmitting signals away from the cell body", "Synthesizing neurotransmitters", "Receiving signals from other neurons", "Insulating the axon"],
    "correctAnswer": 2
  },
  {
    "question": "The 'electron transport chain' in cellular respiration occurs in the:",
    "options": ["Cytoplasm", "Outer mitochondrial membrane", "Inner mitochondrial membrane", "Nucleus"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a 'polysaccharide' that provides structural support in the exoskeletons of insects and fungi cell walls?",
    "options": ["Starch", "Cellulose", "Glycogen", "Chitin"],
    "correctAnswer": 3
  },
  {
    "question": "The 'seminal vesicles' in the male reproductive system primarily function to:",
    "options": ["Produce sperm", "Store sperm", "Secrete fluid containing fructose and prostaglandins for semen", "Transport sperm to the urethra"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a 'water-soluble vitamin' involved in nerve function and carbohydrate metabolism?",
    "options": ["Vitamin A", "Vitamin B1 (Thiamine)", "Vitamin C", "Vitamin D"],
    "correctAnswer": 1
  },
  {
    "question": "The 'glomerular filtration rate' (GFR) is a measure of:",
    "options": ["The rate of urine production", "The rate at which blood is filtered by the kidneys", "The rate of reabsorption in the tubules", "The rate of waste excretion from the body"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a 'conjugated molecule' consisting of a protein and a carbohydrate component?",
    "options": ["Glycolipid", "Lipoprotein", "Glycoprotein", "Phospholipid"],
    "correctAnswer": 2
  },
  {
    "question": "The 'pituitary gland' is located at the base of the brain and is connected to the:",
    "options": ["Cerebellum", "Medulla oblongata", "Hypothalamus", "Thalamus"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a 'fat-soluble vitamin' essential for vision and immune function?",
    "options": ["Vitamin B12", "Vitamin C", "Vitamin A", "Vitamin D"],
    "correctAnswer": 2
  },
  {
    "question": "The 'autonomic nervous system' is responsible for controlling:",
    "options": ["Voluntary muscle movements", "Sensory perception", "Involuntary functions like heart rate, digestion, and breathing", "Reflex actions only"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a common cause of 'pneumonia'?",
    "options": ["Viral infection only", "Bacterial or viral infection of the lungs", "Allergic reaction", "Nutritional deficiency"],
    "correctAnswer": 1
  },
  {
    "question": "The 'urethra' in the human urinary system primarily functions to:",
    "options": ["Filter blood", "Produce urine", "Transport urine from the bladder to the outside", "Store urine"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a 'disaccharide' composed of glucose and galactose?",
    "options": ["Sucrose", "Maltose", "Lactose", "Cellulose"],
    "correctAnswer": 2
  },
  {
    "question": "The 'choroid' in the human eye primarily functions to:",
    "options": ["Focus light", "Detect light", "Provide nutrients to the retina and absorb stray light", "Control pupil size"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is an example of a 'hormone' that increases blood glucose levels?",
    "options": ["Insulin", "Glucagon", "Estrogen", "Testosterone"],
    "correctAnswer": 1
  },
  {
    "question": "The process of 'translation' in molecular biology refers to the synthesis of:",
    "options": ["RNA from DNA", "DNA from RNA", "Protein from mRNA", "mRNA from protein"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of 'tendons'?",
    "options": ["Connect bones to bones", "Connect muscles to bones", "Provide flexibility to joints", "Produce movement"],
    "correctAnswer": 1
  },
  {
    "question": "What is the primary function of the 'cerebellum'?",
    "options": ["Higher-order thinking and memory", "Sensory processing", "Balance and coordination of voluntary movements", "Regulating involuntary actions"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a common cause of 'hypertension' (high blood pressure)?",
    "options": ["Low salt intake", "Regular exercise", "Genetics, diet, and lifestyle factors", "Excessive water intake"],
    "correctAnswer": 2
  },
  {
    "question": "The 'lysosomes' in a cell are primarily responsible for:",
    "options": ["Protein synthesis", "Energy production", "Waste breakdown and recycling", "Lipid synthesis"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a 'polysaccharide' used for energy storage in plants?",
    "options": ["Glycogen", "Cellulose", "Starch", "Chitin"],
    "correctAnswer": 2
  },
  {
    "question": "The 'vas deferens' in the male reproductive system primarily functions to:",
    "options": ["Produce sperm", "Store sperm", "Transport sperm from the epididymis to the ejaculatory duct", "Produce seminal fluid"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a 'water-soluble vitamin' essential for red blood cell formation and neurological function?",
    "options": ["Vitamin C", "Vitamin B12", "Vitamin A", "Vitamin D"],
    "correctAnswer": 1
  },
  {
    "question": "The 'Loop of Henle' in the kidney primarily functions in:",
    "options": ["Glomerular filtration", "Reabsorption of water and salts", "Secretion of waste products", "Producing urine"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a 'conjugated molecule' consisting of a protein and a lipid component?",
    "options": ["Glycoprotein", "Lipoprotein", "Glycolipid", "Nucleic acid"],
    "correctAnswer": 1
  },
  {
    "question": "The 'pineal gland' in the brain primarily functions to:",
    "options": ["Regulate body temperature", "Control hunger and thirst", "Produce melatonin, regulating sleep-wake cycles", "Process sensory information"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a 'fat-soluble vitamin' essential for calcium absorption and bone health?",
    "options": ["Vitamin A", "Vitamin B6", "Vitamin C", "Vitamin D"],
    "correctAnswer": 3
  },
  {
    "question": "The 'parasympathetic nervous system' is responsible for:",
    "options": ["'Fight or flight' response", "'Rest and digest' functions", "Voluntary muscle movements", "Sensory input processing"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a common cause of 'bronchitis'?",
    "options": ["Bacterial infection only", "Viral or bacterial infection causing inflammation of bronchi", "Allergic reaction to pollen", "Nutritional deficiency"],
    "correctAnswer": 1
  },
  {
    "question": "The 'ureters' in the human urinary system primarily function to:",
    "options": ["Filter blood", "Produce urine", "Transport urine from the kidneys to the bladder", "Store urine"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a 'monosaccharide' found in milk sugar (lactose)?",
    "options": ["Glucose", "Fructose", "Galactose", "Sucrose"],
    "correctAnswer": 2
  },
  {
    "question": "The 'iris' of the human eye is primarily responsible for:",
    "options": ["Focusing light", "Detecting light", "Controlling the size of the pupil and the amount of light entering the eye", "Protecting the eye"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is an example of a 'hormone' that stimulates milk production in lactating mothers?",
    "options": ["Oxytocin", "Estrogen", "Prolactin", "Progesterone"],
    "correctAnswer": 2
  },
  {
    "question": "The process of 'replication' in molecular biology refers to the synthesis of:",
    "options": ["RNA from DNA", "DNA from DNA", "Protein from RNA", "mRNA from protein"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of 'cartilage'?",
    "options": ["Highly vascularized tissue", "Provides rigid support like bone", "Flexible connective tissue found in joints and nose", "Contains osteocytes"],
    "correctAnswer": 2
  },
  {
    "question": "What is the primary function of the 'medulla oblongata' in the brain?",
    "options": ["Voluntary movements", "Higher-order thinking", "Regulating vital involuntary functions like breathing and heart rate", "Sensory integration"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a common cause of 'appendicitis'?",
    "options": ["Excessive fiber intake", "Inflammation of the appendix, often due to blockage", "Bacterial infection of the large intestine", "Nutritional deficiency"],
    "correctAnswer": 1
  },
  {
    "question": "The 'Golgi apparatus' in a cell is primarily responsible for:",
    "options": ["Energy production", "Protein synthesis", "Modifying, sorting, and packaging proteins and lipids", "DNA replication"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a 'polysaccharide' that provides structural support in the cell walls of fungi?",
    "options": ["Starch", "Cellulose", "Glycogen", "Chitin"],
    "correctAnswer": 3
  },
  // ===== Chemistry (40 MCQs) =====
  {
    "question": "What is the molar mass of water (H₂O)? (Atomic mass: H=1, O=16)",
    "options": ["16 g/mol", "18 g/mol", "20 g/mol", "32 g/mol"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following describes an 'endothermic reaction'?",
    "options": ["Releases heat to surroundings", "Absorbs heat from surroundings", "Has a negative enthalpy change (ΔH)", "Always forms a precipitate"],
    "correctAnswer": 1
  },
  {
    "question": "According to 'Boyle's Law', at constant temperature, the volume of a fixed mass of gas is inversely proportional to its:",
    "options": ["Temperature", "Pressure", "Number of moles", "Density"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is an example of a 'covalent crystal'?",
    "options": ["Sodium chloride", "Ice", "Diamond", "Graphite"],
    "correctAnswer": 2
  },
  {
    "question": "Which type of bonding involves the electrostatic attraction between positively charged metal ions and a 'sea' of delocalized electrons?",
    "options": ["Ionic bonding", "Covalent bonding", "Metallic bonding", "Hydrogen bonding"],
    "correctAnswer": 2
  },
  {
    "question": "What happens to the pressure of a gas when its temperature is increased at constant volume?",
    "options": ["Decreases", "Increases", "Remains constant", "First decreases then increases"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is an example of a 'chemical change'?",
    "options": ["Melting ice", "Boiling water", "Burning wood", "Dissolving sugar in water"],
    "correctAnswer": 2
  },
  {
    "question": "What is the 'electron configuration' of Oxygen (atomic number 8)?",
    "options": ["1s²2s²2p³", "1s²2s²2p⁴", "1s²2s²2p⁵", "1s²2s²2p⁶"],
    "correctAnswer": 1
  },
  {
    "question": "Which principle states that no two electrons in the same atom can have the same set of four quantum numbers?",
    "options": ["Hund's Rule", "Pauli Exclusion Principle", "Aufbau Principle", "Heisenberg Uncertainty Principle"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of an 'acidic buffer solution'?",
    "options": ["It resists changes in pH when a strong acid is added.", "It resists changes in pH when a strong base is added.", "It has a pH greater than 7.", "It is formed by a strong acid and its conjugate base."],
    "correctAnswer": 1
  },
  {
    "question": "What is the term for the energy change when an electron is added to a gaseous atom?",
    "options": ["Ionization energy", "Electronegativity", "Electron affinity", "Bond energy"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is an 'inorganic compound'?",
    "options": ["Methane (CH₄)", "Glucose (C₆H₁₂O₆)", "Carbon dioxide (CO₂)", "Ethanol (C₂H₅OH)"],
    "correctAnswer": 2
  },
  {
    "question": "What is the 'molecular geometry' of water (H₂O) according to VSEPR theory?",
    "options": ["Linear", "Trigonal planar", "Bent", "Tetrahedral"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following factors generally decreases the rate of a chemical reaction?",
    "options": ["Increasing temperature", "Increasing concentration of reactants", "Adding a catalyst", "Decreasing surface area of reactants"],
    "correctAnswer": 3
  },
  {
    "question": "Which of the following is a property of 'covalent compounds'?",
    "options": ["High melting points", "Good conductors of electricity in molten state", "Form discrete molecules", "Strong electrostatic forces between ions"],
    "correctAnswer": 2
  },
  {
    "question": "What is the SI unit of 'temperature'?",
    "options": ["Celsius", "Fahrenheit", "Kelvin", "Joule"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is an example of an 'alkyne'?",
    "options": ["Ethane (C₂H₆)", "Ethene (C₂H₄)", "Ethyne (C₂H₂)", "Benzene (C₆H₆)"],
    "correctAnswer": 2
  },
  {
    "question": "What is the process of converting a ketone to a secondary alcohol called?",
    "options": ["Oxidation", "Reduction", "Esterification", "Hydrolysis"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of a 'weak acid'?",
    "options": ["Completely dissociates in water", "Partially dissociates in water", "Does not react with bases", "Forms strong conjugate bases"],
    "correctAnswer": 1
  },
  {
    "question": "What is the 'molecular formula' of ethanol?",
    "options": ["CH₄O", "C₂H₆O", "C₃H₈O", "C₂H₄O₂"],
    "correctAnswer": 1
  },
  {
    "question": "Which type of 'intermolecular force' is present between nonpolar molecules?",
    "options": ["Hydrogen bonding", "Dipole-dipole forces", "London dispersion forces", "Ionic forces"],
    "correctAnswer": 2
  },
  {
    "question": "What is the primary product of the 'incomplete combustion' of hydrocarbons?",
    "options": ["Carbon dioxide and water", "Carbon monoxide and water", "Soot and water", "Hydrogen and oxygen"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of a 'real gas' compared to an ideal gas?",
    "options": ["Particles have negligible volume.", "There are no intermolecular forces.", "Particles attract each other, especially at low temperatures and high pressures.", "Collisions are perfectly elastic."],
    "correctAnswer": 2
  },
  {
    "question": "What is the purpose of a 'catalyst' in a chemical reaction?",
    "options": ["To change the equilibrium position", "To increase the activation energy", "To speed up the reaction rate without being consumed", "To change the products formed"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is an 'alkali metal'?",
    "options": ["Magnesium", "Calcium", "Potassium", "Aluminum"],
    "correctAnswer": 2
  },
  {
    "question": "What is the definition of 'chemical kinetics'?",
    "options": ["The study of energy changes in reactions", "The study of reaction rates and mechanisms", "The study of equilibrium in reactions", "The study of atomic structure"],
    "correctAnswer": 1
  },
  {
    "question": "What is the primary functional group in 'alcohols'?",
    "options": ["Carbonyl group (-CHO)", "Carboxyl group (-COOH)", "Hydroxyl group (-OH)", "Amino group (-NH₂)"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following best describes 'resonance' in organic chemistry?",
    "options": ["The rapid interconversion of isomers.", "The delocalization of electrons within a molecule, represented by multiple Lewis structures.", "The formation of multiple bonds between two atoms.", "The breaking of chemical bonds."],
    "correctAnswer": 1
  },
  {
    "question": "What is the effect of increasing temperature on the 'solubility' of most solid solutes in a liquid solvent?",
    "options": ["Decreases solubility", "Increases solubility", "No effect on solubility", "First decreases then increases solubility"],
    "correctAnswer": 1
  },
  {
    "question": "What is the 'molecular geometry' of ammonia (NH₃) according to VSEPR theory?",
    "options": ["Linear", "Tetrahedral", "Trigonal pyramidal", "Bent"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is an example of an 'electrophilic substitution reaction'?",
    "options": ["Addition of H₂ to an alkene", "Reaction of an alkyl halide with NaOH", "Nitration of benzene", "Combustion of methane"],
    "correctAnswer": 2
  },
  {
    "question": "What is the definition of 'activation energy'?",
    "options": ["The energy released during a reaction", "The minimum energy required for a reaction to occur", "The energy stored in reactants", "The energy of the products"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following elements belongs to the 'p-block'?",
    "options": ["Sodium", "Iron", "Sulfur", "Helium"],
    "correctAnswer": 2
  },
  {
    "question": "What is the primary difference between a 'primary alcohol' and a 'secondary alcohol'?",
    "options": ["Primary alcohols have two -OH groups, secondary alcohols have one.", "Primary alcohols have the -OH group attached to a carbon bonded to one other carbon, secondary alcohols to two other carbons.", "Primary alcohols are more acidic.", "Secondary alcohols are more reactive."],
    "correctAnswer": 1
  },
  {
    "question": "What is the name of the process that converts an alkene to an alkane?",
    "options": ["Dehydration", "Hydrogenation", "Oxidation", "Elimination"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of an 'amorphous solid'?",
    "options": ["Definite melting point", "Ordered arrangement of particles", "No fixed shape or melting point", "Forms a crystal lattice"],
    "correctAnswer": 2
  },
  {
    "question": "What is the primary role of 'buffers' in biological systems?",
    "options": ["To increase pH rapidly", "To maintain a stable pH despite addition of small amounts of acid or base", "To act as catalysts", "To store energy"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is an example of an 'acid-base neutralization reaction'?",
    "options": ["Combustion of methane", "Reaction of HCl and NaOH", "Rusting of iron", "Photosynthesis"],
    "correctAnswer": 1
  },
  {
    "question": "What is the term for the measure of a liquid's internal resistance to flow?",
    "options": ["Density", "Surface tension", "Viscosity", "Vapor pressure"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a common method for preparing 'alkenes'?",
    "options": ["Hydrogenation of alkynes", "Dehydration of alcohols", "Substitution reactions of alkanes", "Addition of water to alkynes"],
    "correctAnswer": 1
  },
  // ===== Physics (32 MCQs) =====
  {
    "question": "Which of the following is a 'vector quantity'?",
    "options": ["Mass", "Distance", "Speed", "Displacement"],
    "correctAnswer": 3
  },
  {
    "question": "What is the SI unit of 'power'?",
    "options": ["Joule", "Newton", "Watt", "Volt"],
    "correctAnswer": 2
  },
  {
    "question": "According to 'Newton's Third Law of Motion', for every action, there is an equal and opposite:",
    "options": ["Force", "Velocity", "Acceleration", "Momentum"],
    "correctAnswer": 0
  },
  {
    "question": "What is the formula for 'gravitational potential energy'?",
    "options": ["1/2mv²", "mgh", "F x d", "P/t"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following best describes 'uniform circular motion'?",
    "options": ["Motion in a straight line with constant speed.", "Motion in a circle with constant speed and changing velocity.", "Motion in a circle with changing speed.", "Motion under constant acceleration in a straight line."],
    "correctAnswer": 1
  },
  {
    "question": "What is the SI unit of 'pressure'?",
    "options": ["Bar", "Atmosphere", "Pascal", "Torr"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a 'longitudinal wave'?",
    "options": ["Light wave", "Water wave", "Sound wave", "Radio wave"],
    "correctAnswer": 2
  },
  {
    "question": "What is the SI unit of 'electric potential difference'?",
    "options": ["Ampere", "Ohm", "Volt", "Coulomb"],
    "correctAnswer": 2
  },
  {
    "question": "What happens to the 'resistance' of a semiconductor as its temperature increases?",
    "options": ["Decreases", "Increases", "Remains constant", "First decreases then increases"],
    "correctAnswer": 0
  },
  {
    "question": "Which of the following is a characteristic of a 'parallel circuit'?",
    "options": ["Current is the same through all components", "Voltage is the same across all components", "Total resistance is the sum of individual resistances", "Components are connected in series"],
    "correctAnswer": 1
  },
  {
    "question": "What is the phenomenon where light spreads out after passing through a small opening or around an obstacle?",
    "options": ["Reflection", "Refraction", "Diffraction", "Interference"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following describes the 'magnetic field lines' inside a solenoid?",
    "options": ["Radiating outwards", "Concentric circles", "Parallel and uniformly spaced", "Converging at one end"],
    "correctAnswer": 2
  },
  {
    "question": "What is the SI unit of 'electric field strength'?",
    "options": ["Volt per meter", "Newton per Coulomb", "Joule per Coulomb", "Ampere per meter"],
    "correctAnswer": 1
  },
  {
    "question": "What is the SI unit of 'capacitance'?",
    "options": ["Volt", "Ohm", "Farad", "Coulomb"],
    "correctAnswer": 2
  },
  {
    "question": "According to the 'First Law of Thermodynamics', the change in internal energy of a system is equal to the heat added to the system minus the work done by the system. This is a statement of the conservation of:",
    "options": ["Mass", "Momentum", "Energy", "Entropy"],
    "correctAnswer": 2
  },
  {
    "question": "What is the SI unit of 'wavelength'?",
    "options": ["Hertz", "Second", "Meter", "Newton"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following describes a 'progressive wave'?",
    "options": ["A wave that appears stationary with fixed nodes and antinodes.", "A wave that transfers energy from one point to another.", "A wave that requires a medium to propagate.", "A wave that has a constant amplitude everywhere."],
    "correctAnswer": 1
  },
  {
    "question": "What is the SI unit of 'magnetic flux density'?",
    "options": ["Weber", "Tesla", "Henry", "Ampere"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is a characteristic of 'direct current (DC)'?",
    "options": ["Current direction periodically reverses", "Voltage changes periodically", "Current flows in one direction only", "Produced by transformers"],
    "correctAnswer": 2
  },
  {
    "question": "What is the primary function of a 'rectifier'?",
    "options": ["To change the voltage of an AC supply", "To convert AC to DC", "To store electric charge", "To measure electric current"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following describes the 'Compton effect'?",
    "options": ["Emission of light from a heated object.", "Scattering of X-rays by electrons, resulting in a change in wavelength.", "Bending of light around obstacles.", "Reflection of light from a surface."],
    "correctAnswer": 1
  },
  {
    "question": "What is the SI unit of 'resistance'?",
    "options": ["Volt", "Ampere", "Ohm", "Watt"],
    "correctAnswer": 2
  },
  {
    "question": "What is the term for the average lifetime of a radioactive nucleus before it decays?",
    "options": ["Half-life", "Decay constant", "Mean life", "Activity"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a common 'medical use of radioisotopes'?",
    "options": ["Sterilizing food", "Generating electricity", "Tracing metabolic pathways and cancer therapy", "Water purification"],
    "correctAnswer": 2
  },
  {
    "question": "What is the SI unit of 'work'?",
    "options": ["Watt", "Newton", "Joule", "Pascal"],
    "correctAnswer": 2
  },
  {
    "question": "What is the SI unit of 'angular acceleration'?",
    "options": ["Radians per second", "Revolutions per second squared", "Degrees per second squared", "Radians per second squared"],
    "correctAnswer": 3
  },
  {
    "question": "Which of the following is a characteristic of 'simple harmonic motion (SHM)'?",
    "options": ["Constant velocity and acceleration.", "The acceleration is directly proportional to the displacement from equilibrium and directed towards it.", "Motion in a straight line only.", "Kinetic energy is always constant."],
    "correctAnswer": 1
  },
  {
    "question": "What is the SI unit of 'electric potential energy'?",
    "options": ["Volt", "Joule", "Coulomb", "Farad"],
    "correctAnswer": 1
  },
  {
    "question": "Which of the following describes the 'Doppler effect'?",
    "options": ["The bending of waves around obstacles.", "The apparent change in frequency of a wave due to relative motion between the source and observer.", "The superposition of two waves.", "The reflection of waves from a surface."],
    "correctAnswer": 1
  },
  {
    "question": "What is the SI unit of 'inductance'?",
    "options": ["Farad", "Ohm", "Henry", "Tesla"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is a characteristic of a 'P-N junction diode' in reverse bias?",
    "options": ["Low resistance", "Allows current to flow easily", "Blocks current flow", "Acts as a conductor"],
    "correctAnswer": 2
  },
  {
    "question": "What is the SI unit of 'momentum'?",
    "options": ["Newton", "Joule", "Kilogram meter per second", "Watt"],
    "correctAnswer": 2
  },
  // ===== English (8 MCQs) =====
  {
    "question": "Choose the most appropriate synonym for 'diligent'.",
    "options": ["Lazy", "Careless", "Industrious", "Negligent"],
    "correctAnswer": 2
  },
  {
    "question": "Identify the type of sentence: 'Go clean your room.'",
    "options": ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
    "correctAnswer": 2
  },
  {
    "question": "Which of the following is an example of a 'personification'?",
    "options": ["The wind whispered secrets.", "The car was a tank.", "She sings like a bird.", "He is as strong as an ox."],
    "correctAnswer": 0
  },
  {
    "question": "Choose the antonym of 'ephemeral'.",
    "options": ["Temporary", "Fleeting", "Permanent", "Short-lived"],
    "correctAnswer": 2
  },
  {
    "question": "Identify the sentence with the correct use of a semicolon:",
    "options": ["She likes coffee; he prefers tea.", "She likes coffee, he prefers tea.", "She likes coffee: he prefers tea.", "She likes coffee; and he prefers tea."],
    "correctAnswer": 0
  },
  {
    "question": "Which word correctly completes the sentence: 'The effect of the medicine was ______.'",
    "options": ["affect", "effect", "affekt", "effekt"],
    "correctAnswer": 1
  },
  {
    "question": "Choose the word that means 'to make less severe or serious'.",
    "options": ["Aggravate", "Exacerbate", "Mitigate", "Worsen"],
    "correctAnswer": 2
  },
  {
    "question": "Identify the correct use of a colon:",
    "options": ["I need three things: pens, paper, and markers.", "I need three things; pens, paper, and markers.", "I need three things, pens, paper, and markers.", "I need three things. Pens, paper, and markers."],
    "correctAnswer": 0
  },
  // ===== Logical Reasoning (10 MCQs) =====
  {
    "question": "What comes next in the series: A, C, E, G, ___?",
    "options": ["H", "I", "J", "K"],
    "correctAnswer": 1
  },
  {
    "question": "If 'All birds can fly' and 'A penguin is a bird', then which of the following statements must be true?",
    "options": ["All penguins can fly.", "Some penguins can fly.", "Penguins cannot fly.", "Cannot be determined."],
    "correctAnswer": 2
  },
  {
    "question": "Which number is the odd one out: 1, 4, 9, 15, 25, 36?",
    "options": ["4", "9", "15", "25"],
    "correctAnswer": 2
  },
  {
    "question": "If 'APPLE' is coded as 'BQQMF', how would 'GRAPE' be coded?",
    "options": ["HSBQG", "HSBQH", "HSBQF", "HSBQJ"],
    "correctAnswer": 0
  },
  {
    "question": "John is older than Mary. Mary is older than Tom. Who is the youngest?",
    "options": ["John", "Mary", "Tom", "Cannot be determined"],
    "correctAnswer": 2
  },
  {
    "question": "What comes next in the series: 10, 9, 7, 4, ___?",
    "options": ["0", "1", "2", "3"],
    "correctAnswer": 0
  },
  {
    "question": "If 'water' is 'food', 'food' is 'tree', 'tree' is 'sky', and 'sky' is 'wall', then where do birds fly?",
    "options": ["Water", "Food", "Tree", "Wall"],
    "correctAnswer": 3
  },
  {
    "question": "What comes next in the series: B, D, G, K, ___?",
    "options": ["N", "O", "P", "Q"],
    "correctAnswer": 2
  },
  {
    "question": "Statement: All dogs are mammals. Conclusion: Some mammals are dogs.",
    "options": ["True", "False", "Uncertain", "Cannot say"],
    "correctAnswer": 0
  },
  {
    "question": "If 'RAIN' is coded as 'SBNP', how would 'SUN' be coded?",
    "options": ["TVO", "TVP", "TUP", "TUO"],
    "correctAnswer": 0
  }
];