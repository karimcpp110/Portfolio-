const config = {
  title: "Karim Wael | Systems Architect & AI Engineer",
  description: {
    long: "Explore the portfolio of Karim Wael, a Systems Architect and AI Engineer building high-performance systems across C++, React, Machine Learning, and Robotics. Discover 22+ technical projects, 19 verified certifications, and a track record of leading cross-functional R&D teams.",
    short:
      "Karim Wael — Systems Architect & AI Engineer. 22 projects. 19 certifications. Building scalable systems & AI foundations.",
  },
  keywords: [
    "Karim Wael",
    "portfolio",
    "systems architect",
    "AI engineer",
    "machine learning",
    "cybersecurity",
    "React",
    "C++",
    "Python",
    "robotics",
    "embedded systems",
    "IEEE",
    "NASA Space Apps",
    "AWS",
  ],
  author: "Karim Wael",
  email: "kwael7934@gmail.com",
  phone: "01556330320",
  site: "https://karimwael.dev",

  // for github stars button
  githubUsername: "karimcpp110",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/karim-wael-40132b360/",
    instagram: "https://www.instagram.com/karim_wael_cpp/",
    facebook: "",
    github: "https://github.com/karimcpp110",
  },
};
export { config };
