// data/projects.js
export const projectData = [
  {
    "id": 1,
    "name": "Medical Chatbot",
    "groupName": "SADIK Oussama, MOHIDIN Mohamed",
    "poster": "/posters/Sadik_Mohidin.jpg",
    "abstract": "In this project, we developed an intelligent medical chatbot based on artificial intelligence technologies, capable of assisting users in the healthcare domain. This interactive system is designed to answer a wide range of medical questions, provide reliable information on diseases, symptoms, treatments, and best health practices. In addition to natural language understanding, our chatbot integrates advanced modules for the processing of medical documents (such as clinical reports and prescriptions) as well as the analysis of medical images (such as X-rays, MRIs, etc.), enabling more comprehensive and contextual assistance. This project aims to facilitate access to medical information, support healthcare professionals, and improve patient awareness through an intelligent, accessible, and interactive tool.",

    "category": "Healthcare"
  },
  {
    "id": 10,
    "name": " Multi-Language Medical Chatbot with Voice Synthesis and Geolocation recommendation",
    "groupName": "AADIL FATIMA, ETTAQY LAILA, ROUCHDI HAFSA",
    "poster": "/posters/AADIL FATIMA_ETTAQY LAILA_ROUCHDI HAFSA.png",
    "abstract": "The integration of conversational artificial intelligence (AI) into modern healthcare infrastructures marks a significant paradigm shift in the dissemination and accessibility of medical information. This project introduces a multilingual medical dialogue system that combines natural language processing (NLP) with multimodal interaction capabilities, textual and vocal to enhance user engagement and promote equitable access to primary health guidance. Developed using the Streamlit framework, the proposed system harnesses the power of advanced transformer-based architectures, notably BART (Bidirectional and Auto-Regressive Transformers), to perform zero-shot symptom classification. It enables accurate interpretation of free-text symptom descriptions and delivers context-aware responses in seven languages, including English, French, Arabic, Spanish, Italian, German and Portuguese. This linguistic versatility is further augmented by integrated automatic language detection, speech-to-text recognition, and text-to-speech synthesis, thereby ensuring seamless interaction for users with visual impairments or limited literacy. The model is trained on expert-labeled data including symptoms, demographics, and conditions to generate personalized diagnostic suggestions. A key feature is its geolocation-based engine, which recommends nearby healthcare services with practical details, like names, adresses, contact details and estimated distances, making support both personalized and location-specific. This research highlights how multilingual conversational AI can help overcome language, accessibility, and diagnostic challenges, showing its potential to improve early symptom screening, promote health literacy, and make healthcare more inclusive and globally accessible.",

    "category": "Healthcare"
  },
  {
    "id": 3,
    "name": "Semi-Automatic Annotation of Mammographic Images Using AI for Enhanced Breast Cancer Detection",
    "groupName": "GARRAD HICHAM",
    "poster": "/posters/hicham_garrad_poster.png",
    "abstract": "Accurate and comprehensive annotation of mammographic images is paramount for the development of robust and reliable artificial intelligence (AI) models aimed at improving breast cancer detection. However, the manual annotation of these complex medical  images presents a significant bottleneck, characterized by its laborious nature, the substantial time investment required from expert radiologists, and the inherent risk of inter-observer variability and errors. This study introduces a novel and efficient semi-automatic annotation framework that leverages the strengths of both AI and human expertise to accelerate the labeling process while ensuring  high annotation quality. Our methodology employs a two-stage approach: Initially, a convolutional neural network (CNN), pre trained on a large dataset and fine-tuned on a small subset of manually annotated mammograms of Moroccan women, generates preliminary, pixel-level segmentation masks for unlabeled images. Subsequently, these AI-generated segmentations are reviewed, validated, and refined by experienced radiologists through a user-friendly interface, allowing for rapid correction of any inaccuracies. The resulting refined annotations are then fed back into the CNN for continuous training and improvement in performance, creating an active learning loop that iteratively reduces the need for manual intervention. Experimental results demonstrate that this semi automatic framework achieves a substantial reduction in annotation time, while also yielding superior annotation consistency and improved boundary delineation, leading to a higher quality of labeled data. This approach not only provides an immediate solution for the scarcity of annotated mammographic images but also offers a scalable and efficient solution for accelerating the development and implementation of AI-driven diagnostic tools, paving the way for broader access to enhanced breast cancer screening. ",

    "category": "Healthcare"
  },
  {
    "id": 6,
    "name": "Revolutionizing Leukemia Diagnosis: Harnessing Deep Learning and Attention Mechanisms for Accurate and Automated ALL Detection",
    "groupName": "TOUMI Ezzahra, TISSIR Douha",
    "poster": "/posters/Toumi_Tissir.jpg",
    "abstract": "Diagnosing Acute Lymphoblastic Leukemia (ALL) from peripheral blood smear (PBS) images is challenging due to subtle visual differences between cell types. Traditional methods rely on manual analysis, which is time-consuming and prone to errors. This project leverages Convolutional Neural Networks (InceptionV3 and MobileNet) combined with attention mechanisms to automate and enhance ALL detection. The model efficiently distinguishes between benign and malignant cells, including malignant subtypes, improving accuracy and reducing diagnostic time. This approach offers a scalable, reliable tool to support clinicians and optimize patient outcomes.",

    "category": "Healthcare"
  },
  {
    "id": 13,
    "name": "AI-Powered Pneumonia Detection: A Deep Learning Approach Combining Convolutional Neural Networks, and Automated Reporting for Accurate Chest X-Ray Analysis",
    "groupName": "MEZZINE MOHAMED, ALAOUI BRAHIM",
    "poster": "/posters/mezzine.jpeg",
    "abstract": "Pneumonia remains a leading cause of mortality worldwide, particularly in resource-limited settings where access to expert radiological interpretation is scarce. While chest X-rays (CXRs) serve as the primary diagnostic tool, their manual interpretation suffers from inter-observer variability and diagnostic delays, necessitating automated solutions. This study presents a deep learning system for automated pneumonia detection from chest X-rays. We developed a custom Convolutional Neural Network (CNN) architecture trained on 5,863 chest X-ray images from the NIH Chest X-ray Dataset, incorporating batch normalization, dropout regularization, and data augmentation techniques to enhance generalization. To improve model interpretability, we integrated Gradient-weighted Class Activation Mapping (Grad-CAM) for visual explanations and implemented an automated report generation system. The proposed model achieved 87.8% accuracy, 89.9% precision, 86.1% recall, and 94.9% specificity on the test set, with Grad-CAM visualizations successfully highlighting clinically relevant regions as validated by radiologist Dr. Amina Alaoui. The system was deployed as a web-based application using Flask, enabling real time diagnosis. This work demonstrates the successful integration of deep learning techniques for pneumonia detection, offering an efficient and clinically viable solution that enhances diagnostic capabilities in resource-constrained environments.",

    "category": "Healthcare"
  },
  
  {
    "id": 4,
    "name": "Automated Detection and Segmentation of Brain Lesions in MRI Images Using Deep Learning Models",
    "groupName": "El AOUNI Hajar, IFADADEN Abed-el Hak",
    "poster": "/posters/El Aouni_Ifadaden.jpg",
    "abstract": "This study introduces an innovative dual-model deep learning framework for the automated detection and segmentation of brain lesions in MRI images, aiming to address key challenges in medical imaging through the integration of artificial intelligence and advanced computational methods. The proposed system employs a Convolutional Neural Network (CNN) based on the VGG architecture for lesion detection and classification, achieving an accuracy of 96%, with precision and recall scores of 95% and 94%, respectively. For segmentation, a UNet-ResNeXt50 model using a hybrid loss function (combining Dice Loss and Binary Cross-Entropy) delivers precise delineation of lesion boundaries, with a Dice Coefficient of 0.92 and an Intersection over Union (IoU) score of 0.88. Trained on a large dataset—over 10,000 MRI images for detection and annotated scans from more than 100 patients for segmentation—the framework demonstrates strong robustness and generalization across diverse clinical scenarios. The integration of data augmentation techniques and the hybrid loss function allows the model to effectively manage data variability and class imbalance, making it well-suited for embedded computing applications in resource-constrained medical environments.",
    "category": "Healthcare"
  },



  {
    "id": 3,
    "name": "Intelligent Student Profiling System Using XGBoost and NLP",
    "groupName": "MECHDOUD Mohammed",
    "poster": "/posters/Mohamed_Mechdoud.jpeg",
    "abstract": "Although the rise of online application platforms has facilitated the submission of CVs, the process of selecting candidates for doctoral programs remains a time and resource-intensive task. It is therefore necessary to develop models to automate the matching between candidate profiles and program requirements. Recent studies have focused on using deep learning techniques to model this matching process. However, these models often suffer from a lack of interpretability due to the complex transformations they perform. Yet, in a real-world context, it is crucial to explain why a candidate is selected or rejected. To address this issue, we propose a hybrid approach that leverages machine learning techniques while ensuring the readability of the results. This is achieved by extracting relevant features from CVs and cover letters and using them for classification and prediction tasks. Results obtained on a dataset of 651 resumes from the University Chouaib Doukkali in the El Jadida region, Morocco, show an accuracy of 77% for classification, confirming the ability of our system to identify promising candidates.",

    "category": "Education"
  },

  {
    "id": 5,
    "name": "Intelligent Academic Guidance Chatbot Based on AI, and Educational Data",
    "groupName": "MONSIF Oumaima, AIT ARKONTE Oumnia",
    "poster": "/posters/Poster_IA_AITARKONTE_MONSIF.png",
    "abstract": "This project presents the design of an intelligent academic guidance chatbot that supports students and individuals in academic or career transitions. Powered by artificial intelligence and large language models (LLMs), the system provides personalized recommendations by analyzing user inputs and reliable educational data, such as the QS World University Rankings 2025. At the beginning of each session, the chatbot identifies the user's current educational level (middle school, high school, higher education, or reorientation) and adapts its dialogue accordingly to explore interests, strengths, and aspirations. The system offers dynamic, context-aware guidance through an intuitive interface, promoting autonomy and informed decision-making. By integrating natural language processing and data-driven reasoning, this chatbot demonstrates the potential of AI to transform academic orientation into a more accessible and personalized experience.",

    "category": "Education"
  },
  {
    "id": 2,
    "name": "Development of an educational guidance chatbot",
    "groupName": "EL MAZOUZY Zineb",
    "poster": "/posters/ELMAAZOUZY.jpg",
    "abstract": "This project presents the development of an intelligent chatbot named OrienBot, designed to enhance the academic guidance experience for students, particularly those intending to join the University of Berkeley. OrienBot is capable of responding interactively and accurately to a wide range of academic queries, from course descriptions and available programs to information about professors and curricula. By leveraging the pre-trained saifalh/frenchOrientationModel model and an intuitive user interface powered by Streamlit, this project aims to revolutionize how students interact with institutional resources. Using a specific dataset, the chatbot is customized to provide relevant and contextual responses. Tests show that the tool achieves high accuracy and user satisfaction due to its speed and adaptability. The results demonstrate OrienBot's effectiveness as an academic assistance tool, with promising prospects for future enhancements such as voice recognition and multilingual integration.",
    "category": "Education"
  },


  {
    "id": 14,
    "name": "Optimized MobileNet Model for Early Detection of Tomato Diseases",
    "groupName": "BOUYAAKOUBI Fadwa, EL AMRI Fatima Zahrae",
    "poster": "/posters/ELAMRI_FATIMAZAHRAE&BOUYAAKOUBI_FADWA.jpg",
    "abstract": ": Early diagnosis of plant diseases plays a crucial role in improving agricultural yields. This advancement is made possible through deep learning, particularly in image processing, paving the way for new applications in precision agriculture. This work proposes a solution combining image processing and phytopathology, leveraging MobileNet, a lightweight and optimized model for resource-constrained environments. The approach aims to reduce human labor time by utilizing efficient algorithms for plant disease identification. A model was developed to detect diseases affecting tomatoes from images of infected leaves, sourced from a dataset containing 12,729 images distributed across ten classes. By using MobileNet as the base architecture, we propose an effective and rapid method for automating phytopathological diagnosis. With our model and data, we achieved a 94% accuracy rate in predicting tomato diseases.",

    "category": "Agriculture"
  },
  {
    "id": 7,
    "name": "Digitization and Authentication of Diplomas using Blockchain Technology",
    "groupName": "EL BAHAOUI Imane, NAJID Chaimae",
    "poster": "/posters/El_Bahaoui_Imane_NAJID_Chaimae.jpg",
    "abstract": "This project presents ValidateIt, an innovative blockchain-based solution for managing university diplomas, enabling the creation and verification of secure digital certificates. This system ensures the authenticity of diplomas, prevents any alterations, and facilitates their sharing online. Thanks to the use of blockchain, the issued certificates are verifiable by anyone, providing a transparent and tamper-proof way to manage and ensure the integrity of diplomas. ValidateIt offers a secure and user friendly platform for diploma management, reducing administrative costs and simplifying the verification process for students, companies, and institutions.",

    "category": "Cryptography"
  },


  
  {
    "id": 9,
    "name": "Development of an Intelligent Fitness Chatbot",
    "groupName": "HAMMOUDI Salah-eddine",
    "poster": "/posters/salah.jpeg",
    "abstract": "This project presents the design of an intelligent fitness chatbot powered by deep learning and natural language processing. The chatbot delivers personalized workout recommendations based on user inputs such as fitness goals, experience level, and physical constraints. It integrates a Convolutional Neural Network (CNN) for classifying exercises, the Cohere API for response generation, and Streamlit for a user-friendly interface. Data preprocessing is performed with spaCy, and local images are incorporated for visual guidance. The system effectively understands user queries, classifies exercises, and provides relevant feedback. Despite challenges like limited datasets and response variability, the results demonstrate a promising foundation for building smart, personalized fitness assistants, with potential for future improvements in natural language understanding and dynamic planning.",

    "category": "Sports & Fitness"
  },


  {
    "id": 8,
    "name": "AI-Powered Tennis Analysis System: Detection of Players, Balls, and Court Key Points for Interesting Statistics",
    "groupName": "HAYLA Omar",
    "poster": "/posters/HAYLAOmar.jpg",
    "abstract": "Computer vision and machine learning technologies are revolutionizing sports performance analysis, offering unprecedented insights into athlete dynamics. This research introduces an innovative, deep learning-based project for comprehensive tennis match tracking and performance evaluation. By integrating advanced object detection, trajectory analysis, and real-time statistical modeling, our system provides a multi-dimensional approach to player performance assessment. The system enables precise player and ball tracking using custom YOLO models, ensuring accurate detection throughout the match. It dynamically calculates performance metrics, providing real-time insights into player movements and actions. Additionally, it automates court geometry mapping, allowing for a structured analysis of gameplay. Furthermore, the system evaluates stamina and movement efficiency in real-time, helping to assess player endurance and optimize performance strategies. The proposed method demonstrates good accuracy in tracking player movements, ball trajectories, and generating comprehensive performance metrics. Unlike traditional manual analysis, our approach offers instantaneous, data-driven insights, potentially transforming coaching strategies and athlete training methodologies.",

    "category": "Sports & Fitness"
  },



  {
    "id": 11,
    "name": "AI applied to recruitment through CV analysis",
    "groupName": "AIT BELFAKIH Chaymae, BABRAM Hajiba",
    "poster": "/posters/AitBelfakihChaymae_BabramHajiba.png",
    "abstract": "This project aims to automate CV analysis using Machine Learning and Natural Language Processing (NLP) techniques. The objective is to simplify the recruitment process by automatically extracting key information from CVs (such as name, skills, experience, and education) and evaluating their relevance to a given job position. The application can process PDF or text files, extract relevant data using appropriate tools, and classify them intelligently. A web interface, developed with Flask, allows recruiters to submit a CV and instantly view the analysis results. This solution is designed to reduce the time spent on candidate screening and improve the efficiency of HR processes through the use of artificial intelligence.",

    "category": "AI for Recruitment"
  },
  {
    "id": 12,
    "name": "AI-Powered Workflow for Automated CV Screening and Candidate Scoring",
    "groupName": "BESSIOUA Redouane, SORO Ferelaha",
    "poster": "/posters/bessioua_soro.png",
    "abstract": "We present an AI-powered recruitment workflow that automates the candidate selection process by leveraging Large Language Models (LLMs) like GPT and workflow automation tools such as n8n. The system intelligently parses incoming job applications, analyzes candidate CVs, and matches them against job requirements to compute a relevance score. This streamlined pipeline enables efficient filtering of suitable profiles, reducing manual effort and improving the accuracy of talent acquisition.",

    "category": "AI for Recruitment"
  },

]