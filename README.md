# React Frontend Project

This project is a React-based frontend application featuring a multi-page setup managed by `react-router-dom`. It includes components for listing books, viewing book details, and managing pages to read.

## Features

- **Routing**: Uses `react-router-dom` to handle multiple routes, including a root layout, error page, and child routes.
- **Dynamic Data**: Fetches data dynamically from `books.json` for various components.
- **Component-Based Architecture**: Designed with reusable components such as `Root`, `Home`, `ListedBooks`, `PagesToRead`, and `BookDetails`.

## Project Structure

```
src/
├── components/
│   ├── Root/
│   │   └── Root.jsx
│   ├── Home/
│   │   └── Home.jsx
│   ├── ListedBooks/
│   │   └── ListedBooks.jsx
│   ├── PagesToRead/
│   │   └── PagesToRead.jsx
│   └── BookDetails/
│       └── BookDetails.jsx
├── Errorpage/
│   └── Errorpage.jsx
├── index.css
├── index.jsx
├── books.json
```

## Routes

| Path           | Component         | Description                                      |
|----------------|-------------------|--------------------------------------------------|
| `/`            | `Home`            | Displays the homepage.                          |
| `/books`       | `ListedBooks`     | Shows a list of available books.                |
| `/pages`       | `PagesToRead`     | Manages pages to read.                          |
| `/book/:id`    | `BookDetails`     | Displays details of a specific book by ID.      |
| (Error Page)   | `Errorpage`       | Handles non-existent routes or errors.          |

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/frontend-react-project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd frontend-react-project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Dependencies

- `react`
- `react-dom`
- `react-router-dom`

## Development

- **Start Server**: Run `npm start` to launch the development server.
- **Build Project**: Use `npm run build` to create a production-ready build.

## Future Enhancements

- Add user authentication.
- Integrate with a backend API for real-time data.
- Enhance UI with animations and styling improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
