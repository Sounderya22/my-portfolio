export const siteConfig = {
  name: "Sounderya Varagur Venugopal",
  title: "Robotics Engineer | Graduate Research Assistant",
  description: "Portfolio website of Sounderya Varagur Venugopal",
  profileImage: "/my-portfolio/profile.jpg",
  profileImagePosition: "50% 40%", // Optional: "top", "bottom", "center", "50% 20%", etc.
  accentColor: "#1d4ed8",
  social: {
    email: "vvsounderya22@gmail.com",
    linkedin: "https://www.linkedin.com/in/sounderya-varagur-venugopal",
    github: "https://github.com/vvsounderya22",
  },
  aboutMe:
    "I am a robotics engineer currently pursuing a Master’s in Robotics at the University of Maryland, with a strong interest in building robotic systems that can collaborate with humans and operate reliably in the real world. My work centers on manipulation and learning-based control, particularly on bridging the gap between data-driven policies and physical robot behavior under real-world constraints. I am especially motivated by developing learning controllers for manipulators that can generalize beyond carefully staged setups, and I am currently exploring π₀ and fine-tuning it for blind manipulation. More broadly, I enjoy working at the system level—where perception, control, and learning interact—and thinking deeply about how modern learning methods can be shaped into robust, deployable robotic solutions.",
  skills: [
    "C",
    "C++",
    "Python",
    "Julia",
    "ROS / ROS 2",
    "MoveIt 2",
    "Gazebo",
    "MuJoCo",
    "Isaac Sim",
    "Model Predictive Control",
    "Control Systems",
    "PyTorch",
    "OpenCV",
    "Reinforcement Learning",
    "TensorRT",
    "ONNX",
    "Roboflow",
    "SmolVLA",
    "Docker",
    "Git",
    "CMake",
    "GTest",
    "CI/CD",
    "Qt",
  ],
  projects: [
    {
      name: "Autonomous Bin-Picking Robot",
      description: [
        "Built a fully autonomous bin-picking system across 4 object classes with no human intervention: SVM-based detection, point-cloud pose estimation (ROI filtering, statistical outlier removal, plane removal, Euclidean clustering), MoveIt 2 planning, and UR5e + Robotiq execution.",
        "Established CI/CD via GitHub Actions with Cpplint and Clang-format enforcement.",
      ],
      link: "https://github.com/Sounderya22/bin_picking_robot",
      skills: ["ROS 2", "MoveIt 2", "OpenCV", "UR5e", "CI/CD"],
    },
    {
      name: "Task-Space Motion Planner for MoveIt 2",
      description: [
        "Engineered a custom task-space RRT-Connect planner plugin for MoveIt 2, achieving a 100% success rate in constrained environments where standard OMPL joint-space planners completely failed.",
        "Integrated TRAC-IK to resolve SE(3) Cartesian samples to joint configurations, boosting IK solve rate to 99.88% at 0.37 ms/solve for real-time task-space exploration.",
        "Architected a configurable interface with a rotation-weighted distance metric that halved path lengths (1.18 m → 0.60 m) and reduced geometric deviation by 65%.",
      ],
      link: "https://github.com/Sounderya22/task_space_planner",
      skills: ["ROS 2", "MoveIt 2", "RRT-Connect", "TRAC-IK", "C++"],
    },
    {
      name: "Multi-Agent Reinforcement Learning for Drone Navigation",
      description: [
        "Developed custom MAPPO and IPPO controllers in PyTorch using centralized training with decentralized execution (CTDE), extending gym-pybullet-drones with hovering, spiral-formation, and leader–follower tasks.",
        "Achieved 3× improvement over Stable-Baselines3 via centralized critics, relative coordinate encodings, and reward shaping — reducing spiral-formation RMSE to 0.25 m and collision rate to 2.1%.",
      ],
      link: "https://github.com/Sounderya22/marl-gym-pybullet-drones",
      skills: ["Reinforcement Learning", "Multi-Agent Systems", "PyTorch", "PyBullet", "MAPPO"],
    },
    {
      name: "Footstep Following for Cassie Bipedal Robot",
      description: [
        "Designed a reference-guided RL (PPO) walking controller for the underactuated Cassie robot in MuJoCo, bridging high-level footstep planning and low-level leg actuation through a learned policy outputting PD-tracked joint targets.",
        "Engineered a body-frame projection of the global footstep plan into an ego-centric observation space — addressing contact switching, dynamic balance, and coupled heading-velocity dynamics for sim-to-real readiness.",
      ],
      link: "https://github.com/Sounderya22/Bi_Pedal_Robot-Learning",
      skills: ["MuJoCo", "Reinforcement Learning", "PPO", "Bipedal Locomotion"],
    },
    {
      name: "RL Policy Robustness to Observation Noise (POMDP)",
      description: [
        "Trained a PPO cube-lift policy (Franka Panda, Isaac Lab, 1024 parallel envs) and characterized its sensitivity to observation noise across 11 levels, quantifying the MDP-to-POMDP degradation as success fell from 100% to 84% at 10 cm noise.",
        "Showed physically bounded (3 cm) noise-augmented fine-tuning retained 97% success while unbounded augmentation caused catastrophic forgetting; implemented a 300-particle filter that cut position error 15× (7.2 to 0.47 cm), recovering >99% success as a denoising layer.",
      ],
      link: "https://github.com/Sounderya22/rl-policy-robustness",
      skills: ["Isaac Lab", "Reinforcement Learning", "POMDP", "Particle Filter", "PPO"],
    },
  ],
  experience: [
    {
      company: "University of Maryland - College Park",
      title: "Graduate Research Assistant",
      dateRange: "Feb 2025 - May 2026",
      bullets: [
        "Built a real-time bike-lane detection system by training a YOLOv8 model on a custom-annotated dataset across image-stream and point-cloud outputs.",
        "Doubled real-time inference FPS for the ReZoom perception stack by converting a YOLOv8 PyTorch model to TensorRT via ONNX export, demonstrating production-level acceleration on constrained edge hardware.",
        "Fine-tuned SmolVLA (450M-param vision-language-action model) on a Koch follower arm for tabletop manipulation tasks.",
        "Built a mobile-manipulation pipeline on a TurtleBot2 base with a LeRobot Koch leader–follower manipulator for autonomous navigation and object pickup in structured indoor environments.",
        "Extended ITPS (Inference-Time Policy Steering), an end-to-end UR3 manipulation pipeline encompassing automated demonstration generation in MuJoCo, diffusion policy training and real-time human steering, at inference time.",
      ],
    },
    {
      company: "Addverb Technologies Limited",
      title: "Graduate Engineer Trainee - Mobile Robotics Division",
      dateRange: "Sep 2023 - Jun 2024",
      bullets: [
        "Resolved a thread-synchronization defect in the core VPL stack by adding mutex locks, validated with C++ GTest, clearing site-blocking issues within 2 months.",
        "Built a custom Visual Programming Language (VPL) interface for the in-house cobot and extended its communication capabilities via WebSockets.",
        "Enhanced the cobot’s vision pipeline with YOLOv8 gesture recognition for smoother human–robot collaboration.",
      ],
    },
    {
      company: "Addverb Technologies Limited",
      title: "Robotics Software Intern - Mobile Robotics Division",
      dateRange: "May 2022 - Sep 2022",
      bullets: [
        "Interfaced mechanical and electromagnetic grippers with the Syncro collaborative arm and integrated drive-data safety flags for safe collaborative interaction.",
        "Built a Gazebo + ROS Controllers simulation to validate the in-house robotic-arm path planners.",
      ],
    },
    {
      company: "Medical Imaging, Devices, and Soft Robotics Lab, IIITDM Kancheepuram",
      title: "Medical Robotics Software Developer",
      dateRange: "Oct 2022 - May 2023",
      bullets: [
        "Simulated and 3D-printed a continuum-robot prototype for colonoscopy applications.",
        "Interfaced the robot with Simulation Open Framework Architecture (SOFA) for hardware-in-the-loop testing.",
      ],
    },
    {
      company: "Mars Research Station, IIITDM Kancheepuram",
      title: "Robotics Software Developer",
      dateRange: "Jul 2020 - Jan 2022",
      bullets: [
        "Worked on an interdisciplinary team designing a Mars Rover; simulated a Panda arm in Gazebo / ROS and interfaced controllers for teleoperation via MoveIt.",
        "Built a four-wheeled mobile robot from scratch using Arduino and Raspberry Pi for teleoperation.",
      ],
    },
  ],
  education: [
    {
      school: "University of Maryland - College Park",
      degree: "M.Eng. Robotics",
      dateRange: "2024 - 2026",
      achievements: [
        "CGPA: 3.88",
      ],
    },
    {
      school: "Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram",
      degree: "B.Tech in Electronics and Communication Engineering",
      dateRange: "2019 - 2023",
      achievements: [
        "CGPA: 9.07 / 10",
      ],
    },
  ],
};
