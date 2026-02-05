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
    "ROS",
    "OOPS",
    "Qt",
    "Docker",
    "Git",
    "CMake",
    "GTest",
    "CI/CD",
    "Model Predictive Control",
    "RL",
    "Embedded System",
    "Control Systems",
    "Gazebo",
    "OpenCV",
    "PyTorch",
    "Roboflow",
    "MoveIt",
    "MuJoCo",
  ],
  projects: [
    {
      name: "Autonomous Bin-Picking Robot",
      description: [
        "Developed an autonomous bin-picking system in ROS 2 using a UR5e robotic arm, Robotiq gripper, and RGB-D perception, integrating object detection, point-cloud–based pose estimation, and MoveIt 2 motion planning for reliable pick-and-place in cluttered scenes",
        "Implemented an end-to-end perception-to-manipulation pipeline featuring SVM-based object recognition, point cloud filtering and clustering, collision-aware trajectory planning (OMPL), and CI/CD-driven software design with Docker, automated testing, and reproducible builds.",
      ],
      link: "https://github.com/Sounderya22/bin_picking_robot", // Source Code link placeholder
      skills: ["ROS2", "MoveIt2", "OpenCV", "UR5"],
    },
    {
      name: "Footstep following for Cassie Robot",
      description: [
        "Designed a footstep-conditioned reinforcement learning controller for the Cassie bipedal robot using PPO in a custom MuJoCo environment, enabling stable, goal-directed walking by tracking externally planned footstep sequences without imitation learning or trajectory optimization",
        "Integrated temporal CNN-MLP policy architecture, curriculum learning, and reference-based reward shaping to achieve smooth, balanced locomotion on straight and curved footstep plans, demonstrating robust posture stabilization, accurate step alignment, and low-jitter joint control",
      ],
      link: "https://github.com/Sounderya22/Bi_Pedal_Robot-Learning", // Source Code link placeholder
      skills: ["MuJoCo", "Control", "Bipedal Locomotion", "PPO", "Reinforcement Learning"],
    },
    {
      name: "Visual Servoing with MPC for Nonholonomic Robot Steering",
      description: [
        // "Developed a perception-driven MPC framework to implement a controller for a nonholonomic robot.",
        "Designed a vision-based nonlinear MPC controller for steering a nonholonomic mobile robot using onboard visual feedback.",
        "Integrated visual servoing with kinematic and dynamic control, enforcing actuator and velocity constraints via constrained optimization.",
        "Utilized CVXPY and OSQP Solver to solve Quadratic Programming (QP) optimization problems efficiently and validated performance through Turtlebot simulations in Gazebo.",
      ],
      link: "https://github.com/Sounderya22/model_predictive_control", // Source Code link placeholder
      skills: ["MPC", "Visual Servoing", "ROS2", "Gazebo"],
    },
    {
      name: "Multi-Agent Reinforcement Learning for Drone Navigation",
      description: [
        "Developed custom multi-agent reinforcement learning controllers (MAPPO & IPPO) in PyTorch for coordinated quadrotor control",
        "Implemented centralized training with decentralized execution (CTDE) using MAPPO and IPPO algorithms, achieving coordinated multi-agent control with shared policies and independent action selection.",
        "Extended the gym-pybullet-drones environment to include multi-agent tasks such as hovering, spiral formation flying, and leader-follower navigation.",
        "Achieved ~3x improvement over Stable-Baselines3(reducing spiral formation RMSE to 0.25m and collision rates to 2.1%) by leveraging centralized critics, relative coordinate encodings, and reward shaping."
      ],
      link: "https://github.com/Sounderya22/marl-gym-pybullet-drones",
      skills: [
        "Reinforcement Learning",
        "Multi-Agent Systems",
        "PyTorch",
        "PyBullet",
        "MAPPO",
      ],
    },
  ],
  experience: [
    {
      company: "University of Maryland - College Park",
      title: "Graduate Research Assistant",
      dateRange: "Feb 2025 - Present",
      bullets: [
        "Developed a bike lane detection system for the self-driving escooter project, ReZoom under the guidance of Dr. Derek A. Paley by utilizing a YOLOv8 model trained on a custom dataset and optimized the model by converting it from PyTorch to TensorRT, doubling the real-time inference FPS for image stream and point cloud outputs.",
        // "Researching the effectiveness of Gaussian 3D scene representations over image-based inputs for policy learning (imitation and reinforcement learning) on a UR5 robotic arm",
        // "Training a π0 policy on end-effector poses from demonstrations to enable a UR5 robotic arm to successfully execute complex manipulation tasks (e.g., pouring and hooking).",
        "Working on a mobile manipulation pipeline using a TurtleBot2 base and LeRobot SO leader–follower manipulator for autonomous navigation and object pickup in structured indoor environments.",
        "Developing a learning-based manipulation framework on a UR3 arm using diffusion and flow-matching policies, leveraging π0 for policy-guided manipulation.",
      ],
    },
    {
      company: "Addverb Technologies Limited",
      title: "Graduate Engineer Trainee - Mobile Robotics Division",
      dateRange: "Sep 2023 - Jun 2024",
      bullets: [
        "Enhanced the vision pipeline of the in-house collaborative robotic arm with the help of YOLOv8 to recognize gestures for better collaboration.",
        "Debugged and improved the main stack of VPL using gtests(C++) by adding mutex locks to resolve thread synchronization issue at project sites in 2 months",
        "Enhanced the UI for the cobot by creating a custom VPL( Visual Programming Language) interface and extended the communication capabilities by employing websockets.",
      ],
    },
    {
      company: "Addverb Technologies Limited",
      title: "Robotic Software Intern - Mobile Robotics Division",
      dateRange: "May 2022 - Sep 2022",
      bullets: [
        "Interfaced multiple grippers(mechanical and electromagnetic) with the collaborative robotic arm(Syncro by Addverb Technologies) for different application scenarios and Integrated safety flags based on the data from the drives for safe collaborative interaction.",
        "Built a simulation for testing the in house path planners of robotic arm using ROS Controllers and Gazebo to validate the performance of the path generated.",
      ],
    },
    {
      company: "Medical Imaging, Devices, and Soft Robotics Lab, IIITDM Kancheepuram",
      title: "Medical Robotics Software Developer",
      dateRange: "Oct 2022 - May 2023",
      bullets: [
        "Simulated and 3D printed a prototype of a continuum robot for applications in colonoscopy.",
        "Interfaced the robot with Simulation Open Framework Architecture(SOFA) to perform Hardware in the Loop Testing.",
      ],
    },
    {
      company: "Mars Research Station, IIITDM Kancheepuram",
      title: "Robotic Software Developer",
      dateRange: "Jul 2020 - Jan 2022",
      bullets: [
        "Worked with an interdisciplinary team for the design and development of a Mars Rover and simulated a panda arm using Gazebo and ROS and interfaced controllers for teleoperation by leveraging MoveIt.",
        "Built a prototype of a four wheeled mobile robot from scratch and by employing Arduino and Raspberry Pi to teleoperate it.",
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
      school: "IIITDM Kancheepuram",
      degree: "B.Tech in Electronics and Communication Engineering",
      dateRange: "2019 - 2023",
      achievements: [
        "CGPA: 9.07",
      ],
    },
  ],
};
