const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "em@ex.com",
    password: "123",
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      { active: true, newTask: true, completed: false, failed: false, title: "Build Login UI", description: "Create responsive login form using React and Tailwind", date: "2026-04-28", category: "Frontend" },
      { active: false, newTask: false, completed: true, failed: false, title: "Fix Navbar Bug", description: "Resolve mobile responsiveness issue in navbar", date: "2026-04-25", category: "Bug Fix" },
      { active: false, newTask: false, completed: false, failed: true, title: "API Integration", description: "Connect frontend with backend authentication API", date: "2026-04-20", category: "Backend" },
    ],
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      { active: true, newTask: true, completed: false, failed: false, title: "Dashboard UI", description: "Design admin dashboard layout", date: "2026-04-28", category: "Frontend" },
      { active: false, newTask: false, completed: true, failed: false, title: "Optimize Images", description: "Compress and optimize assets for faster load", date: "2026-04-24", category: "Performance" },
      { active: false, newTask: false, completed: false, failed: true, title: "Form Validation", description: "Implement validation using React Hook Form", date: "2026-04-21", category: "Frontend" },
    ],
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      { active: true, newTask: true, completed: false, failed: false, title: "Create REST API", description: "Build Node.js API for tasks", date: "2026-04-28", category: "Backend" },
      { active: false, newTask: false, completed: true, failed: false, title: "Database Schema", description: "Design MongoDB schema for users", date: "2026-04-23", category: "Database" },
      { active: false, newTask: false, completed: false, failed: true, title: "JWT Auth", description: "Implement JWT authentication", date: "2026-04-22", category: "Security" },
    ],
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      { active: true, newTask: true, completed: false, failed: false, title: "Landing Page", description: "Create marketing landing page", date: "2026-04-28", category: "Frontend" },
      { active: false, newTask: false, completed: true, failed: false, title: "CSS Refactor", description: "Clean and refactor old styles", date: "2026-04-26", category: "UI/UX" },
      { active: false, newTask: false, completed: false, failed: true, title: "Accessibility Fix", description: "Improve accessibility compliance", date: "2026-04-21", category: "UI/UX" },
    ],
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      { active: true, newTask: true, completed: false, failed: false, title: "Deploy App", description: "Deploy app on Vercel", date: "2026-04-28", category: "DevOps" },
      { active: false, newTask: false, completed: true, failed: false, title: "Setup CI/CD", description: "Configure GitHub Actions pipeline", date: "2026-04-24", category: "DevOps" },
      { active: false, newTask: false, completed: false, failed: true, title: "Docker Setup", description: "Containerize application using Docker", date: "2026-04-22", category: "DevOps" },
    ],
  },
];

const admin = [{ id: 101, firstName: "Admin", email: "admin@example.com", password: "123" }];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees") || "[]");
  const admin = JSON.parse(localStorage.getItem("admin") || "[]");
  return { employees, admin };
};
