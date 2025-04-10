# Stexcore Portfolio

Welcome to the repository for **Stexcore's portfolio**, a modern and lightweight tool to elegantly showcase your projects. Designed with simplicity, multilingual support, and a focus on performance, this portfolio is perfect for developers, creatives, and startups.

## 🌀 Description

This project combines **Qwik** with an interactive user experience to create a seamless and enjoyable navigation. The homepage features a minimalist galaxy where stars move dynamically as the mouse moves, adding a touch of interactivity while keeping performance in mind.

The portfolio includes:
- **Homepage**: A warm welcome with a unique design and a personal motto: _"I like to work without many dependencies."_ 
- **Projects**: A clean and organized list showing the name, description, creation date, and views of each project.
- **Contact**: A section with all the ways to connect with you.
- **Project View**: Detailed information about the selected project, including its `README` documentation.

## 🌐 Main Routes

The portfolio organizes its routes in a simple and accessible way:
- `/:lang` → Homepage with the interactive galaxy.
- `/:lang/projects` → Projects list with key details.
- `/:lang/contact` → Contact information.
- `/:lang/projects/:project-name` → Full details and the `README` of the selected project.

> **Note**: This project supports two languages: **English** and **Spanish**, adapting to the user's preference.

## ✨ Features

- **Interactive Interface**: Dynamic design with moving stars.
- **Multilingual**: Effortlessly switch between English and Spanish.
- **Simplicity and Performance**: Built with minimal dependencies for a fast and scalable experience.
- **Project Details**: Displays complete information for each project, emphasizing clarity and organization.

## 🚀 Technologies Used

- **Qwik**: Primary framework for ultra-fast performance.
- **Custom CSS**: Sleek and minimalist styles.
- **GitHub**: Source of the project information.
- **Multilingual Support**: Lightweight and easily extensible implementation.

## 📂 Project Structure

```plaintext
src/
│
├── components/       # Reusable UI components.
├── routes/
│   ├── [lang]/       # Language-based routes.
│   │   ├── projects/ # Projects list and details.
│   │   ├── contact/  # Contact information.
├── styles/           # Custom styles.
├── translations/     # Translation files (en, es).
└── app.tsx           # Main entry point.
```

## 📝 Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/stexcore/portfolio.git
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the project in your browser at `http://localhost:5173`.

## 🎯 Next Steps

- Add support for more languages.
- Integrate a blog section for technical articles.
- Improve accessibility and SEO.

## 🧑‍💻 Contact

Get in touch!
- GitHub: [stexcore](https://github.com/stexcore)
- Email: your-email@example.com