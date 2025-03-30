# React Counter Demo

This project demonstrates a simple React counter application. The application is built using React and ReactDOM, with JSX syntax enabled via Babel.

## Features

- A counter that increments when the button is clicked.
- Built using React functional components and hooks (`useState`).

## File Structure

- **index.html**: Contains the HTML structure, inline CSS, and the React component script.

## How to Run

1. Open the `index.html` file in any modern web browser.
2. The application will render a counter with a button.
3. Click the button to increment the counter.

## Dependencies

The project uses the following CDNs:
- React: `https://unpkg.com/react@18/umd/react.development.js`
- ReactDOM: `https://unpkg.com/react-dom@18/umd/react-dom.development.js`
- Babel: `https://unpkg.com/@babel/standalone/babel.min.js`

## Customization

You can modify the `Counter` component inside the `<script type="text/babel">` tag in `index.html` to add more functionality or style.

## Deploying to GitHub Pages

To deploy the project to GitHub Pages, follow these steps:

1. Ensure you have a `gh-pages` branch in your repository.
2. Add a GitHub Actions workflow file named `deploy.yml` in the `.github/workflows` directory.
3. The `deploy.yml` file should contain the necessary configuration to automate the deployment process to GitHub Pages.
4. Push your changes to the `main` branch to trigger the deployment workflow.

Once deployed, you can access your GitHub Pages site at `https://<your-username>.github.io/<your-repository-name>/`.

## License

This project is open-source and free to use.
