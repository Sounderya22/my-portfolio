export const siteConfig = {
  name: "Sounderya Varagur Venugopal",
  title: "Robotics Engineer | Graduate Research Assistant",
  description: "Portfolio website of Sounderya Varagur Venugopal",
  accentColor: "#1d4ed8",
  social: {
    email: "vvsounderya22@gmail.com",
    linkedin: "https://www.linkedin.com/in/sounderya-varagur-venugopal", // Inferred pattern, user can update
    github: "https://github.com/vvsounderya22", // Inferred from email/context
  },
  aboutMe:
    "I’m a robotics enthusiast currently pursuing my Master’s in Robotics at the University of Maryland. Over the past four years, I’ve had the exciting opportunity to work on a variety of robotic systems, from collaborative robots to medical devices and autonomous robots. My passion lies in developing smart, user-friendly robots that can work safely alongside humans. I’ve honed my skills in improving robot vision, creating intuitive interfaces, and ensuring robots operate safely when interacting with people. I love diving into cutting-edge tech like ROS, Gazebo, Control, A.I., and I’m always eager to learn more.",
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
      description:
        "Implemented an autonomous bin-picking solution by leveraging ROS2, MoveIt2 and OpenCV. The system comprises of a UR5 robotic arm and a Robotiq gripper to perform pick and place.",
      link: "https://github.com/Sounderya22/bin_picking_robot", // Source Code link placeholder
      skills: ["ROS2", "MoveIt2", "OpenCV", "UR5"],
    },
    {
      name: "Footstep following for Cassie Robot",
      description:
        "Developed a bipedal walking controller to achieve footstep following for Cassie robot in a simulated(MuJoCo) environment.",
      link: "https://github.com/Sounderya22/Bi_Pedal_Robot-Learning", // Source Code link placeholder
      skills: ["MuJoCo", "Control", "Bipedal Locomotion"],
    },
    {
      name: "Visual Servoing with MPC for Nonholonomic Robot Steering",
      description:
        "Developed a perception-driven MPC framework to implement a controller for a nonholonomic robot.",
      link: "https://github.com/Sounderya22/model_predictive_control", // Source Code link placeholder
      skills: ["MPC", "Visual Servoing", "Control"],
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
        "Developing a learning-based manipulation framework on a UR3 arm using diffusion and flow-matching policies, leveraging π0 for
policy-guided manipulation.",
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
